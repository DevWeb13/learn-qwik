import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { createAdminClient } from "~/lib/supabase/server";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

const DAILY_QWIK_LAB_IMAGE_URL =
  "https://www.learn-qwik.com/metaDailyQwikLab.png";
const DAILY_QWIK_LAB_IMAGE_ALT =
  "Daily Qwik Lab preview with streak, XP, and weekly leaderboard cards";

export const useDailyUnsubscribe = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  const token = requestEvent.url.searchParams.get("token")?.trim() ?? "";

  if (!token) {
    return {
      message: "This unsubscribe link is missing a token.",
      status: "error" as const,
    };
  }

  try {
    const admin = createAdminClient(requestEvent);
    const { data, error } = await admin
      .from("daily_challenge_preferences")
      .update({
        email_opt_in: false,
        updated_at: new Date().toISOString(),
      })
      .eq("unsubscribe_token", token)
      .select("id")
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return {
        message: "This unsubscribe link is invalid or expired.",
        status: "error" as const,
      };
    }

    return {
      message: "Daily Qwik Lab emails are now disabled for this account.",
      status: "success" as const,
    };
  } catch (error) {
    console.error("Failed to unsubscribe from Daily Qwik Lab emails:", error);

    return {
      message: "Daily Qwik Lab emails could not be disabled right now.",
      status: "error" as const,
    };
  }
});

export default component$(() => {
  const unsubscribe = useDailyUnsubscribe();
  const isSuccess = unsubscribe.value.status === "success";

  return (
    <main class="min-h-screen bg-white px-4 py-16">
      <section class="mx-auto max-w-2xl rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
          Daily Qwik Lab
        </p>
        <h1 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black)">
          {isSuccess ? "You are unsubscribed." : "Unsubscribe issue"}
        </h1>
        <p class="mt-4 text-gray-700">{unsubscribe.value.message}</p>
        <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/daily/"
            class="inline-flex rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
          >
            Go to Daily Lab
          </Link>
          <Link
            href="/account/"
            class="inline-flex rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition hover:border-(--qwik-dark-purple)/30"
          >
            Account settings
          </Link>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Daily Qwik Lab Email Unsubscribe",
  description: "Disable Daily Qwik Lab email reminders.",
  imageUrl: DAILY_QWIK_LAB_IMAGE_URL,
  imageAlt: DAILY_QWIK_LAB_IMAGE_ALT,
  imageWidth: 1200,
  imageHeight: 630,
  url: "https://www.learn-qwik.com/daily/unsubscribe/",
  type: "website",
  robots: "noindex, nofollow",
});
