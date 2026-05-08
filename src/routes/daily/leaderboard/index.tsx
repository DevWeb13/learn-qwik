import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  getCurrentParisWeekRange,
  getTodayDateKey,
} from "~/constants/dailyChallenges";
import { createAdminClient } from "~/lib/supabase/server";
import type { Database } from "~/types/learn-qwik.database.types";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createBreadcrumbSchema,
  createCollectionPageSchema,
} from "~/utils/structuredData";

type CompletionRow =
  Database["public"]["Tables"]["daily_challenge_completions"]["Row"];
type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];

type LeaderboardEntry = {
  avatarUrl: string | null;
  completed: number;
  correct: number;
  displayName: string;
  onTime: number;
  rank: number;
  score: number;
  totalXp: number;
  userId: string;
};

const DAILY_LEADERBOARD_URL =
  "https://www.learn-qwik.com/daily/leaderboard/";
const DAILY_QWIK_LAB_IMAGE_URL =
  "https://www.learn-qwik.com/metaDailyQwikLab.png";
const DAILY_LEADERBOARD_DESCRIPTION =
  "See the weekly Daily Qwik Lab leaderboard and compete with other Qwik learners through XP, streaks, and on-time completions.";
const DAILY_QWIK_LAB_IMAGE_ALT =
  "Daily Qwik Lab preview with streak, XP, and weekly leaderboard cards";

const getDisplayName = (profile: ProfileRow | undefined) =>
  profile?.username?.trim() || profile?.full_name?.trim() || "Qwik learner";

export const useDailyLeaderboard = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  const todayDateKey = getTodayDateKey();
  const { weekStart, weekEnd } = getCurrentParisWeekRange();

  try {
    const admin = createAdminClient(requestEvent);
    const { data, error } = await admin
      .from("daily_challenge_completions")
      .select(
        "id, user_id, challenge_id, challenge_date, completed_date, selected_option_id, is_correct, xp_awarded, completed_at, updated_at",
      )
      .gte("challenge_date", weekStart)
      .lte("challenge_date", weekEnd)
      .limit(2000);

    if (error) throw error;

    const completions = data as CompletionRow[];
    const userIds = Array.from(
      new Set(completions.map((completion) => completion.user_id)),
    );

    const profilesById = new Map<string, ProfileRow>();

    if (userIds.length > 0) {
      const { data: profiles, error: profilesError } = await admin
        .from("profiles")
        .select(
          "id, email, username, full_name, avatar_url, access_status, completedChapters, completedChapters2026, created_at, grace_period_end, phone, stripe_customer_id, updated_at, website",
        )
        .in("id", userIds);

      if (profilesError) throw profilesError;

      profiles.forEach((profile) => {
        profilesById.set(profile.id, profile);
      });
    }

    const grouped = new Map<
      string,
      {
        completed: number;
        correct: number;
        onTime: number;
        totalXp: number;
        userId: string;
      }
    >();

    completions.forEach((completion) => {
      const current = grouped.get(completion.user_id) ?? {
        completed: 0,
        correct: 0,
        onTime: 0,
        totalXp: 0,
        userId: completion.user_id,
      };

      current.completed += 1;
      current.correct += completion.is_correct ? 1 : 0;
      current.onTime +=
        completion.completed_date === completion.challenge_date ? 1 : 0;
      current.totalXp += completion.xp_awarded;
      grouped.set(completion.user_id, current);
    });

    const leaderboard: LeaderboardEntry[] = Array.from(grouped.values())
      .map((entry) => {
        const profile = profilesById.get(entry.userId);
        const score = entry.totalXp + entry.onTime * 5;

        return {
          avatarUrl: profile?.avatar_url ?? null,
          completed: entry.completed,
          correct: entry.correct,
          displayName: getDisplayName(profile),
          onTime: entry.onTime,
          rank: 0,
          score,
          totalXp: entry.totalXp,
          userId: entry.userId,
        };
      })
      .sort((left, right) => {
        if (right.score !== left.score) return right.score - left.score;
        if (right.correct !== left.correct) return right.correct - left.correct;
        return left.displayName.localeCompare(right.displayName);
      })
      .slice(0, 20)
      .map((entry, index) => ({ ...entry, rank: index + 1 }));

    return {
      leaderboard,
      loadError: "",
      todayDateKey,
      weekEnd,
      weekStart,
    };
  } catch (error) {
    console.error("Failed to load Daily Qwik Lab leaderboard:", error);

    return {
      leaderboard: [] as LeaderboardEntry[],
      loadError: "The weekly leaderboard could not be loaded yet.",
      todayDateKey,
      weekEnd,
      weekStart,
    };
  }
});

export default component$(() => {
  const leaderboard = useDailyLeaderboard();

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
                Weekly leaderboard
              </h1>
              <p class="mt-4 max-w-2xl text-gray-700">
                A fresh race every week. Score is weekly XP plus a 5 XP bonus
                for every lab completed on its original day.
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
                href="/daily/history/"
                class="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! transition hover:border-(--qwik-dark-purple)/30"
              >
                History
              </Link>
            </div>
          </div>

          <div class="mt-8 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600">
            Week: {leaderboard.value.weekStart} to {leaderboard.value.weekEnd}
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-10">
        {leaderboard.value.loadError && (
          <p class="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {leaderboard.value.loadError}
          </p>
        )}

        {leaderboard.value.leaderboard.length === 0 ? (
          <div class="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h2 class="text-2xl font-semibold text-(--qwik-dirty-black)">
              No scores yet this week.
            </h2>
            <p class="mt-3 text-gray-700">
              Be the first learner to complete a Daily Qwik Lab.
            </p>
            <Link
              href="/daily/"
              class="mt-6 inline-flex rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
            >
              Start the weekly race
            </Link>
          </div>
        ) : (
          <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            {leaderboard.value.leaderboard.map((entry) => (
              <div
                key={entry.userId}
                class="grid gap-4 border-b border-gray-100 p-4 last:border-b-0 md:grid-cols-[80px_1fr_120px_120px_120px]"
              >
                <div class="flex items-center">
                  <span class="flex size-11 items-center justify-center rounded-full bg-(--qwik-light-purple)/15 text-lg font-semibold text-(--qwik-dark-purple)">
                    #{entry.rank}
                  </span>
                </div>

                <div class="flex min-w-0 items-center gap-3">
                  <div class="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                    {entry.avatarUrl ? (
                      <img
                        src={entry.avatarUrl}
                        alt=""
                        width={44}
                        height={44}
                        class="h-full w-full object-cover"
                      />
                    ) : (
                      <span class="text-sm font-semibold text-gray-500">
                        {entry.displayName.slice(0, 1).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div class="min-w-0">
                    <h2 class="truncate font-semibold text-(--qwik-dirty-black)">
                      {entry.displayName}
                    </h2>
                    <p class="text-sm text-gray-500">
                      {entry.completed} labs - {entry.correct} correct
                    </p>
                  </div>
                </div>

                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-gray-500">
                    Score
                  </p>
                  <p class="mt-1 font-semibold">{entry.score}</p>
                </div>

                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-gray-500">
                    XP
                  </p>
                  <p class="mt-1 font-semibold">{entry.totalXp}</p>
                </div>

                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-gray-500">
                    On time
                  </p>
                  <p class="mt-1 font-semibold">{entry.onTime}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Daily Qwik Lab Weekly Leaderboard",
  description: DAILY_LEADERBOARD_DESCRIPTION,
  imageUrl: DAILY_QWIK_LAB_IMAGE_URL,
  imageAlt: DAILY_QWIK_LAB_IMAGE_ALT,
  imageWidth: 1200,
  imageHeight: 630,
  url: DAILY_LEADERBOARD_URL,
  type: "website",
  structuredData: [
    createCollectionPageSchema({
      name: "Daily Qwik Lab Weekly Leaderboard",
      description: DAILY_LEADERBOARD_DESCRIPTION,
      url: DAILY_LEADERBOARD_URL,
      imageUrl: DAILY_QWIK_LAB_IMAGE_URL,
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Daily Qwik Lab", item: "https://www.learn-qwik.com/daily/" },
      {
        name: "Weekly leaderboard",
        item: DAILY_LEADERBOARD_URL,
      },
    ]),
  ],
});
