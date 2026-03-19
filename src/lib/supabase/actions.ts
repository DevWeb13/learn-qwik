import type { RequestEventAction } from "@builder.io/qwik-city";
import { z } from "@builder.io/qwik-city";
import { createAdminClient } from "~/lib/supabase/server";

export const starterPackWaitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  website: z.string().optional(),
});

export type StarterPackWaitlistData = z.infer<typeof starterPackWaitlistSchema>;

type StarterPackWaitlistResult = {
  success: boolean;
  message: string;
  email?: string;
};

export const submitStarterPackWaitlist = async (
  data: StarterPackWaitlistData,
  ev: RequestEventAction,
): Promise<StarterPackWaitlistResult> => {
  const honeypot = data.website?.trim() ?? "";

  if (honeypot) {
    return {
      success: true,
      message: "You’re on the early access list.",
    };
  }

  const profile = ev.sharedMap.get("profile");
  const profileId = profile?.id ?? null;
  const profileEmail = profile?.email.trim() ?? null;

  const rawEmail = profileId ? (profileEmail ?? "") : data.email.trim();

  if (!rawEmail) {
    return ev.fail(400, {
      success: false,
      message: "Unable to resolve your account email.",
    });
  }

  const normalizedEmail = rawEmail.toLowerCase();
  const adminClient = createAdminClient(ev);
  const now = new Date().toISOString();

  let existingEntry: {
    id: string;
    profile_id: string | null;
    email: string;
  } | null = null;

  if (profileId) {
    const { data: profileEntry, error: profileEntryError } = await adminClient
      .from("starter_pack_waitlist")
      .select("id, profile_id, email")
      .eq("profile_id", profileId)
      .maybeSingle();

    if (profileEntryError) {
      console.error(
        "starter_pack_waitlist select profile_id error:",
        profileEntryError,
      );

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    existingEntry = profileEntry;

    if (!existingEntry) {
      const { data: emailEntry, error: emailEntryError } = await adminClient
        .from("starter_pack_waitlist")
        .select("id, profile_id, email")
        .eq("email_normalized", normalizedEmail)
        .maybeSingle();

      if (emailEntryError) {
        console.error(
          "starter_pack_waitlist select email_normalized error:",
          emailEntryError,
        );

        return ev.fail(500, {
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }

      existingEntry = emailEntry;
    }
  } else {
    const { data: emailEntry, error: emailEntryError } = await adminClient
      .from("starter_pack_waitlist")
      .select("id, profile_id, email")
      .eq("email_normalized", normalizedEmail)
      .maybeSingle();

    if (emailEntryError) {
      console.error(
        "starter_pack_waitlist select email_normalized error:",
        emailEntryError,
      );

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    existingEntry = emailEntry;
  }

  let waitlistId: string;
  let successEmail = rawEmail;

  if (existingEntry) {
    const updatePayload: {
      email: string;
      updated_at: string;
      profile_id?: string;
    } = {
      email: rawEmail,
      updated_at: now,
    };

    if (profileId && !existingEntry.profile_id) {
      updatePayload.profile_id = profileId;
    }

    const { error: updateError } = await adminClient
      .from("starter_pack_waitlist")
      .update(updatePayload)
      .eq("id", existingEntry.id);

    if (updateError) {
      console.error("starter_pack_waitlist update error:", updateError);

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    waitlistId = existingEntry.id;
    successEmail = rawEmail;
  } else {
    const { data: insertedEntry, error: insertError } = await adminClient
      .from("starter_pack_waitlist")
      .insert({
        email: rawEmail,
        email_normalized: normalizedEmail,
        profile_id: profileId,
        updated_at: now,
      })
      .select("id, email")
      .single();

    if (insertError) {
      console.error("starter_pack_waitlist insert error:", insertError);

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    waitlistId = insertedEntry.id;
    successEmail = insertedEntry.email;
  }

  ev.cookie.set("starter_pack_waitlist_id", waitlistId, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: ev.url.protocol === "https:",
    maxAge: 60 * 60 * 24 * 365,
  });

  return {
    success: true,
    message: "You’re on the early access list.",
    email: successEmail,
  };
};
