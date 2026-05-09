import type { RequestEvent } from "@builder.io/qwik-city";
import {
  getDailyChallengeForDateKey,
  getTodayDateKey,
} from "~/constants/dailyChallenges";
import { createAdminClient } from "~/lib/supabase/server";
import type { Database } from "~/types/learn-qwik.database.types";

type PreferenceRow =
  Database["public"]["Tables"]["daily_challenge_preferences"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];

type SendDailyEmailsOptions = {
  dryRun: boolean;
  origin: string;
};

type SendDailyEmailsResult = {
  dateKey: string;
  dryRun: boolean;
  eligible: number;
  failed: number;
  origin: string;
  sent: number;
  skipped: number;
};

const DEFAULT_EMAIL_ORIGIN = "https://www.learn-qwik.com";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const getEnv = (requestEvent: RequestEvent, key: string) => {
  const value = requestEvent.env.get(key);

  if (!value) {
    throw new Error(`Missing env var: ${key}`);
  }

  return value;
};

const getDisplayName = (profile: ProfileRow) =>
  profile.username?.trim() || profile.full_name?.trim() || "Qwik learner";

export const getDailyEmailOrigin = (requestEvent: RequestEvent) => {
  const configuredOrigin =
    requestEvent.env.get("DAILY_EMAIL_ORIGIN") ??
    requestEvent.env.get("PUBLIC_SITE_URL") ??
    requestEvent.env.get("SITE_URL") ??
    DEFAULT_EMAIL_ORIGIN;

  try {
    return new URL(configuredOrigin).origin;
  } catch {
    return DEFAULT_EMAIL_ORIGIN;
  }
};

const buildEmail = ({
  dateKey,
  origin,
  preference,
  profile,
}: {
  dateKey: string;
  origin: string;
  preference: PreferenceRow;
  profile: ProfileRow;
}) => {
  const challenge = getDailyChallengeForDateKey(dateKey);
  const displayName = escapeHtml(getDisplayName(profile));
  const dailyUrl = `${origin}/daily/`;
  const unsubscribeUrl = `${origin}/daily/unsubscribe/?token=${encodeURIComponent(
    preference.unsubscribe_token,
  )}`;

  return {
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937;max-width:620px;margin:0 auto;padding:24px">
        <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.14em;color:#713fc2;font-weight:700">Daily Qwik Lab - ${escapeHtml(dateKey)}</p>
        <h1 style="font-size:28px;line-height:1.2;margin:12px 0;color:#111827">Your Qwik challenge is ready</h1>
        <p>Hi ${displayName}, today's lab is waiting:</p>
        <div style="border:1px solid #e5e7eb;border-radius:10px;padding:18px;margin:20px 0;background:#f9fafb">
          <h2 style="font-size:20px;margin:0 0 8px;color:#111827">${escapeHtml(challenge.title)}</h2>
          <p style="margin:0;color:#4b5563">${escapeHtml(challenge.prompt)}</p>
          <p style="margin:14px 0 0;color:#713fc2;font-weight:700">${challenge.xp} XP - ${escapeHtml(challenge.estimatedTime)}</p>
        </div>
        <p>
          <a href="${dailyUrl}" style="display:inline-block;background:#713fc2;color:#ffffff;text-decoration:none;border-radius:8px;padding:12px 18px;font-weight:700">Open today's lab</a>
        </p>
        <p style="font-size:13px;color:#6b7280;margin-top:28px">
          You receive this because you opted in after completing a Daily Qwik Lab.
          <a href="${unsubscribeUrl}" style="color:#6b7280">Unsubscribe</a>.
        </p>
      </div>
    `,
    subject: `Daily Qwik Lab: ${challenge.title}`,
    text: `Hi ${getDisplayName(profile)}, today's Daily Qwik Lab is ready: ${challenge.title}\n\n${challenge.prompt}\n\nOpen it: ${dailyUrl}\n\nUnsubscribe: ${unsubscribeUrl}`,
  };
};

const sendResendEmail = async ({
  apiKey,
  dateKey,
  from,
  html,
  profile,
  subject,
  text,
}: {
  apiKey: string;
  dateKey: string;
  from: string;
  html: string;
  profile: ProfileRow;
  subject: string;
  text: string;
}) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `daily-qwik-lab-${dateKey}-${profile.id}`,
    },
    body: JSON.stringify({
      from,
      html,
      subject,
      text,
      to: [profile.email],
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(responseText || `Resend returned ${response.status}`);
  }

  try {
    return JSON.parse(responseText) as { id?: string };
  } catch {
    return { id: "" };
  }
};

export const sendDailyChallengeEmails = async (
  requestEvent: RequestEvent,
  options: SendDailyEmailsOptions,
): Promise<SendDailyEmailsResult> => {
  const admin = createAdminClient(requestEvent);
  const dateKey = getTodayDateKey();
  const apiKey = options.dryRun ? "" : getEnv(requestEvent, "RESEND_API_KEY");
  const from = options.dryRun ? "" : getEnv(requestEvent, "RESEND_FROM_EMAIL");

  const { data: preferences, error: preferenceError } = await admin
    .from("daily_challenge_preferences")
    .select(
      "id, user_id, email_opt_in, unsubscribe_token, created_at, updated_at",
    )
    .eq("email_opt_in", true)
    .limit(250);

  if (preferenceError) throw preferenceError;

  const userIds = preferences.map((preference) => preference.user_id);

  if (userIds.length === 0) {
    return {
      dateKey,
      dryRun: options.dryRun,
      eligible: 0,
      failed: 0,
      origin: options.origin,
      sent: 0,
      skipped: 0,
    };
  }

  const { data: completionRows, error: completionError } = await admin
    .from("daily_challenge_completions")
    .select("user_id")
    .in("user_id", userIds)
    .limit(5000);

  if (completionError) throw completionError;

  const activeUserIds = new Set(
    completionRows.map((completion) => completion.user_id),
  );
  const eligiblePreferences = preferences.filter((preference) =>
    activeUserIds.has(preference.user_id),
  );
  const eligibleUserIds = eligiblePreferences.map(
    (preference) => preference.user_id,
  );

  if (eligibleUserIds.length === 0) {
    return {
      dateKey,
      dryRun: options.dryRun,
      eligible: 0,
      failed: 0,
      origin: options.origin,
      sent: 0,
      skipped: preferences.length,
    };
  }

  const { data: profiles, error: profilesError } = await admin
    .from("profiles")
    .select(
      "id, email, username, full_name, avatar_url, access_status, completedChapters, completedChapters2026, created_at, grace_period_end, phone, stripe_customer_id, updated_at, website",
    )
    .in("id", eligibleUserIds);

  if (profilesError) throw profilesError;

  const profilesById = new Map(
    profiles.map((profile) => [profile.id, profile]),
  );

  let failed = 0;
  let sent = 0;
  let skipped = preferences.length - eligiblePreferences.length;

  for (const preference of eligiblePreferences) {
    const profile = profilesById.get(preference.user_id);

    if (!profile?.email) {
      skipped += 1;
      continue;
    }

    const { data: existingSend, error: existingSendError } = await admin
      .from("daily_challenge_email_sends")
      .select("id, status")
      .eq("user_id", preference.user_id)
      .eq("challenge_date", dateKey)
      .maybeSingle();

    if (existingSendError) throw existingSendError;

    if (existingSend?.status === "sent" || existingSend?.status === "queued") {
      skipped += 1;
      continue;
    }

    if (options.dryRun) {
      sent += 1;
      continue;
    }

    const queuedPayload = {
      challenge_date: dateKey,
      error_message: null,
      status: "queued",
      updated_at: new Date().toISOString(),
      user_id: preference.user_id,
    };

    if (existingSend) {
      const { error: queueError } = await admin
        .from("daily_challenge_email_sends")
        .update(queuedPayload)
        .eq("id", existingSend.id);

      if (queueError) throw queueError;
    } else {
      const { error: queueError } = await admin
        .from("daily_challenge_email_sends")
        .insert(queuedPayload);

      if (queueError) throw queueError;
    }

    try {
      const email = buildEmail({
        dateKey,
        origin: options.origin,
        preference,
        profile,
      });
      const resendResponse = await sendResendEmail({
        apiKey,
        dateKey,
        from,
        html: email.html,
        profile,
        subject: email.subject,
        text: email.text,
      });

      const { error: sentError } = await admin
        .from("daily_challenge_email_sends")
        .update({
          error_message: null,
          resend_email_id: resendResponse.id ?? null,
          sent_at: new Date().toISOString(),
          status: "sent",
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", preference.user_id)
        .eq("challenge_date", dateKey);

      if (sentError) throw sentError;

      sent += 1;
    } catch (error) {
      failed += 1;

      const message =
        error instanceof Error ? error.message.slice(0, 500) : "Unknown error";

      await admin
        .from("daily_challenge_email_sends")
        .update({
          error_message: message,
          status: "failed",
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", preference.user_id)
        .eq("challenge_date", dateKey);
    }
  }

  return {
    dateKey,
    dryRun: options.dryRun,
    eligible: eligiblePreferences.length,
    failed,
    origin: options.origin,
    sent,
    skipped,
  };
};

export const isParisDailyEmailHour = (date = new Date()) => {
  const hour = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Europe/Paris",
  }).format(date);

  return hour === "08";
};
