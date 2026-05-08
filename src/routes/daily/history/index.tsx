import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  BASE_DATE_KEY,
  computeDailyChallengeStats,
  getDailyChallengeForDateKey,
  getDailyChallengePath,
  getDateKeyRange,
  getTodayDateKey,
  type DailyChallengeCompletionSummary,
} from "~/constants/dailyChallenges";
import { toCompletionSummary } from "~/lib/dailyChallenge/server";
import { createClient } from "~/lib/supabase/server";
import type { Database } from "~/types/learn-qwik.database.types";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

const DAILY_QWIK_LAB_IMAGE_URL =
  "https://www.learn-qwik.com/metaDailyQwikLab.png";
const DAILY_QWIK_LAB_IMAGE_ALT =
  "Daily Qwik Lab preview with streak, XP, and weekly leaderboard cards";

export const useDailyHistory = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  const profile = requestEvent.sharedMap.get("profile") as Profile | null;
  const todayDateKey = getTodayDateKey();
  const loginHref = `/auth/login/?next=${encodeURIComponent("/daily/history/")}`;

  if (!profile) {
    return {
      history: [],
      isAuthenticated: false,
      loadError: "",
      loginHref,
      missedCount: 0,
      stats: computeDailyChallengeStats([], todayDateKey),
      todayDateKey,
    };
  }

  const supabase = createClient(requestEvent);
  const { data, error } = await supabase
    .from("daily_challenge_completions")
    .select(
      "id, user_id, challenge_id, challenge_date, completed_date, selected_option_id, is_correct, xp_awarded, completed_at, updated_at",
    )
    .eq("user_id", profile.id)
    .order("challenge_date", { ascending: false })
    .limit(365);

  if (error) {
    console.error("Failed to load Daily Qwik Lab history:", error.message);

    return {
      history: [],
      isAuthenticated: true,
      loadError: "Daily Qwik Lab history could not be loaded yet.",
      loginHref,
      missedCount: 0,
      stats: computeDailyChallengeStats([], todayDateKey),
      todayDateKey,
    };
  }

  const completionByDate = new Map(
    data.map((completion) => [completion.challenge_date, completion]),
  );
  const dates = getDateKeyRange(BASE_DATE_KEY, todayDateKey).reverse();
  const history = dates.map((dateKey) => {
    const completion = completionByDate.get(dateKey) ?? null;
    const challenge = getDailyChallengeForDateKey(dateKey);
    const isToday = dateKey === todayDateKey;

    return {
      challengeDeck: challenge.deckTitle,
      challengeTitle: challenge.title,
      dateKey,
      href: getDailyChallengePath(dateKey, todayDateKey),
      isCorrect: completion?.is_correct ?? null,
      isToday,
      status: completion ? "completed" : isToday ? "today" : "missed",
      xpAwarded: completion?.xp_awarded ?? 0,
    };
  });
  const completions: DailyChallengeCompletionSummary[] =
    data.map(toCompletionSummary);

  return {
    history,
    isAuthenticated: true,
    loadError: "",
    loginHref,
    missedCount: history.filter((item) => item.status === "missed").length,
    stats: computeDailyChallengeStats(completions, todayDateKey),
    todayDateKey,
  };
});

export default component$(() => {
  const history = useDailyHistory();

  if (!history.value.isAuthenticated) {
    return (
      <main class="min-h-screen bg-white px-4 py-16">
        <section class="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            Daily Qwik Lab
          </p>
          <h1 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black)">
            Sign in to unlock your history.
          </h1>
          <p class="mt-4 text-gray-700">
            Your archive, missed labs, XP, and streak are saved for connected
            learners.
          </p>
          <Link
            href={history.value.loginHref}
            class="mt-6 inline-flex rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
          >
            Sign in
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main class="min-h-screen bg-white">
      <section class="border-b border-gray-100 bg-gray-50">
        <div class="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-10">
          <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Daily Qwik Lab
              </p>
              <h1 class="mt-3 text-4xl font-semibold text-(--qwik-dirty-black)">
                History and catch-up
              </h1>
              <p class="mt-4 max-w-2xl text-gray-700">
                Review completed labs, recover missed XP, and keep the daily
                loop visible.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <Link
                href="/daily/"
                class="inline-flex rounded-lg bg-(--qwik-dark-purple) px-4 py-2 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
              >
                Play today
              </Link>
              <Link
                href="/daily/leaderboard/"
                class="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! transition hover:border-(--qwik-dark-purple)/30"
              >
                Leaderboard
              </Link>
            </div>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-4">
            <div class="rounded-lg border border-gray-200 bg-white p-4">
              <p class="text-sm text-gray-500">Current streak</p>
              <p class="mt-2 text-2xl font-semibold">
                {history.value.stats.currentStreak}
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 bg-white p-4">
              <p class="text-sm text-gray-500">Total XP</p>
              <p class="mt-2 text-2xl font-semibold">
                {history.value.stats.totalXp}
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 bg-white p-4">
              <p class="text-sm text-gray-500">Completed</p>
              <p class="mt-2 text-2xl font-semibold">
                {history.value.stats.totalCompleted}
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 bg-white p-4">
              <p class="text-sm text-gray-500">Missed</p>
              <p class="mt-2 text-2xl font-semibold">
                {history.value.missedCount}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-10">
        {history.value.loadError && (
          <p class="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {history.value.loadError}
          </p>
        )}

        <div class="grid gap-3">
          {history.value.history.map((item) => (
            <Link
              key={item.dateKey}
              href={item.href}
              class="grid gap-4 rounded-lg border border-gray-200 bg-white p-4 text-(--qwik-dirty-black)! shadow-sm transition hover:border-(--qwik-dark-purple)/30 hover:bg-gray-50 md:grid-cols-[140px_1fr_auto]"
            >
              <div>
                <p class="text-sm font-semibold text-(--qwik-dark-purple)">
                  {item.dateKey}
                </p>
                <p class="mt-1 text-xs uppercase tracking-[0.14em] text-gray-500">
                  {item.status}
                </p>
              </div>

              <div>
                <h2 class="font-semibold">{item.challengeTitle}</h2>
                <p class="mt-1 text-sm text-gray-600">{item.challengeDeck}</p>
              </div>

              <div class="flex items-center gap-3 md:justify-end">
                <span
                  class={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "completed"
                      ? item.isCorrect
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-600"
                      : item.status === "today"
                        ? "bg-(--qwik-light-purple)/15 text-(--qwik-dark-purple)"
                        : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {item.status === "completed"
                    ? `${item.xpAwarded} XP`
                    : item.status === "today"
                      ? "Today"
                      : "Catch up"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Daily Qwik Lab History",
  description:
    "Review your Daily Qwik Lab history, missed challenges, streak, and XP.",
  imageUrl: DAILY_QWIK_LAB_IMAGE_URL,
  imageAlt: DAILY_QWIK_LAB_IMAGE_ALT,
  imageWidth: 1200,
  imageHeight: 630,
  url: "https://www.learn-qwik.com/daily/history/",
  type: "website",
  robots: "noindex, nofollow",
});
