import { $, component$, useSignal, type QRL } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  HiBellAlertOutline,
  HiBoltOutline,
  HiChartBarOutline,
  HiCheckCircleMini,
  HiEnvelopeOutline,
  HiFireOutline,
  HiLockClosedOutline,
  HiSparklesOutline,
  HiStarOutline,
  HiTrophyOutline,
} from "@qwikest/icons/heroicons";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import {
  getCorrectOption,
  getDailyChallengeAccuracy,
  getDailyChallengeRankProgress,
  type DailyChallenge,
  type DailyChallengeStats,
} from "~/constants/dailyChallenges";
import type {
  DailyChallengePageState,
  DailyChallengeSubmitInput,
  DailyChallengeSubmitResult,
} from "~/lib/dailyChallenge/server";

type DailyChallengePageProps = {
  actionResult?: DailyChallengeSubmitResult;
  isSubmitting: boolean;
  state: DailyChallengePageState;
  submitAnswer$: QRL<(payload: DailyChallengeSubmitInput) => Promise<void>>;
};

const getOptionClass = ({
  hasAnswered,
  isCorrect,
  isSelected,
}: {
  hasAnswered: boolean;
  isCorrect: boolean;
  isSelected: boolean;
}) => {
  const baseClass =
    "flex w-full items-center gap-3 rounded-lg border p-4 text-left transition-all duration-200";

  if (!hasAnswered) {
    return isSelected
      ? `${baseClass} border-(--qwik-dark-purple) bg-(--qwik-light-purple)/10 shadow-sm`
      : `${baseClass} border-gray-200 bg-white hover:border-(--qwik-dark-purple)/30 hover:bg-gray-50`;
  }

  if (isCorrect) {
    return `${baseClass} border-emerald-300 bg-emerald-50`;
  }

  if (isSelected) {
    return `${baseClass} border-red-300 bg-red-50`;
  }

  return `${baseClass} border-gray-200 bg-gray-50 opacity-70`;
};

const DailyOptionMarker = component$<{
  hasAnswered: boolean;
  isCorrect: boolean;
  isSelected: boolean;
  label: string;
}>(({ hasAnswered, isCorrect, isSelected, label: optionLabel }) => {
  let label = optionLabel;
  let markerClass =
    "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold";

  if (!hasAnswered) {
    markerClass += isSelected
      ? " border-(--qwik-dark-purple) bg-(--qwik-dark-purple) text-white"
      : " border-gray-300 bg-white text-gray-500";
  } else if (isCorrect) {
    label = "OK";
    markerClass += " border-emerald-500 bg-emerald-500 text-white";
  } else if (isSelected) {
    label = "X";
    markerClass += " border-red-500 bg-red-500 text-white";
  } else {
    markerClass += " border-gray-300 bg-white text-gray-400";
  }

  return <span class={markerClass}>{label}</span>;
});

const DailyCodePreview = component$<{ code: string }>(({ code }) => {
  return (
    <div class="mt-6 overflow-hidden rounded-xl border border-slate-800/10 bg-slate-950 shadow-sm">
      <div class="flex items-center justify-between gap-4 border-b border-white/10 bg-slate-900 px-4 py-3">
        <div class="flex items-center gap-2">
          <span class="size-2 rounded-full bg-red-400" />
          <span class="size-2 rounded-full bg-amber-300" />
          <span class="size-2 rounded-full bg-emerald-400" />
        </div>

        <p class="min-w-0 truncate text-xs font-medium uppercase tracking-[0.14em] text-slate-300">
          Source snippet
        </p>
      </div>

      <pre
        class="m-0 overflow-x-auto"
        style="background:#111827;color:#e5e7eb;padding:18px 20px;border-radius:0;white-space:pre;min-height:auto;"
      >
        <code
          class="block"
          style="color:inherit;font-family:var(--font-mono);font-size:13px;line-height:1.65;"
        >
          {code}
        </code>
      </pre>
    </div>
  );
});

const IconFrame = component$<{ tone?: "purple" | "amber" | "emerald" }>(
  ({ tone = "purple" }) => {
    const toneClass =
      tone === "amber"
        ? "bg-amber-50 text-amber-700"
        : tone === "emerald"
          ? "bg-emerald-50 text-emerald-700"
          : "bg-(--qwik-light-purple)/15 text-(--qwik-dark-purple)";

    return (
      <span
        class={`flex size-10 shrink-0 items-center justify-center rounded-lg ${toneClass}`}
      >
        <HiTrophyOutline class="size-5" />
      </span>
    );
  },
);

const HeroStatCard = component$<{
  icon: "bolt" | "fire" | "star" | "trophy";
  label: string;
  value: string | number;
}>(({ icon, label, value }) => {
  const iconClass =
    icon === "fire"
      ? "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
      : icon === "bolt"
        ? "bg-violet-50 text-violet-700 ring-1 ring-violet-100"
        : icon === "star"
          ? "bg-sky-50 text-sky-700 ring-1 ring-sky-100"
          : "bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-100";

  return (
    <div class="rounded-lg border border-gray-200 bg-white/95 p-4 shadow-sm transition hover:border-(--qwik-dark-purple)/20 hover:shadow-md">
      <div class="flex min-h-[112px] flex-col items-center justify-center gap-3 text-center">
        <span
          class={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon === "fire" && <HiFireOutline class="size-5" />}
          {icon === "bolt" && <HiBoltOutline class="size-5" />}
          {icon === "star" && <HiStarOutline class="size-5" />}
          {icon === "trophy" && <HiTrophyOutline class="size-5" />}
        </span>
        <div class="min-w-0">
          <p class="text-sm font-medium leading-5 text-gray-500">{label}</p>
          <p class="mt-1 break-words text-xl font-semibold leading-tight text-(--qwik-dirty-black)">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
});

const DailyQuestPanel = component$<{
  accuracy: number;
  rankProgress: ReturnType<typeof getDailyChallengeRankProgress>;
  stats: DailyChallengeStats;
}>(({ accuracy, rankProgress, stats }) => {
  const xpRemaining = rankProgress.nextRank
    ? Math.max(0, rankProgress.xpForNextRank - rankProgress.xpIntoRank)
    : 0;

  return (
    <aside class="rounded-xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/8 p-5">
      <div class="flex items-start gap-3">
        <IconFrame />
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            Lab progress
          </p>
          <h2 class="mt-1 text-xl font-semibold text-(--qwik-dirty-black)">
            {rankProgress.currentRank.name}
          </h2>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Rank is based on total XP. The weekly leaderboard adds a small bonus
            for labs completed on time.
          </p>
        </div>
      </div>

      <div class="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        <div class="rounded-lg border border-white/70 bg-white p-4">
          <div class="flex items-center gap-3">
            <span class="flex size-9 items-center justify-center rounded-lg bg-(--qwik-light-purple)/15 text-(--qwik-dark-purple)">
              <HiTrophyOutline class="size-5" />
            </span>
            <div>
              <p class="text-sm text-gray-500">Rank</p>
              <p class="mt-1 text-lg font-semibold text-(--qwik-dirty-black)">
                {rankProgress.currentRank.name}
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-white/70 bg-white p-4">
          <div class="flex items-center gap-3">
            <span class="flex size-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <HiChartBarOutline class="size-5" />
            </span>
            <div>
              <p class="text-sm text-gray-500">Accuracy</p>
              <p class="mt-1 text-lg font-semibold text-(--qwik-dirty-black)">
                {accuracy}%
              </p>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-white/70 bg-white p-4">
          <div class="flex items-center gap-3">
            <span class="flex size-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
              <HiCheckCircleMini class="size-5" />
            </span>
            <div>
              <p class="text-sm text-gray-500">Completed labs</p>
              <p class="mt-1 text-lg font-semibold text-(--qwik-dirty-black)">
                {stats.totalCompleted}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 rounded-lg border border-white/70 bg-white p-4">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm font-medium text-gray-700">
            {rankProgress.nextRank
              ? `Next rank: ${rankProgress.nextRank.name}`
              : "Max rank reached"}
          </p>
          <p class="text-sm font-semibold text-(--qwik-dark-purple)">
            {rankProgress.progressPercent}%
          </p>
        </div>

        <div class="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
          <div
            class="h-full rounded-full bg-(--qwik-dark-purple)"
            style={`width:${rankProgress.progressPercent}%;`}
          />
        </div>

        {rankProgress.nextRank && (
          <p class="mt-3 text-sm leading-6 text-gray-600">
            {xpRemaining} XP left. A correct daily answer is the fastest way to
            move the bar.
          </p>
        )}
      </div>
    </aside>
  );
});

const DailyChallengeResult = component$<{
  challenge: DailyChallenge;
  emailOptIn: boolean;
  hasAnswered: boolean;
  isAuthenticated: boolean;
  isCorrect: boolean | null;
  loginHref: string;
  rankName: string;
  xpAwarded: number;
}>(
  ({
    challenge,
    emailOptIn,
    hasAnswered,
    isAuthenticated,
    isCorrect,
    loginHref,
    rankName,
    xpAwarded,
  }) => {
    if (!hasAnswered) return null;

    const correctOption = getCorrectOption(challenge);

    return (
      <div class="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
          Lab report
        </p>

        <h2 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black)">
          {isCorrect ? "Clean solve" : "Logged attempt"}
        </h2>

        {correctOption && (
          <p class="mt-3 rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm leading-6 text-gray-700">
            <span class="font-semibold text-emerald-700">Answer:</span>{" "}
            {correctOption.text}
          </p>
        )}

        <p class="mt-4 text-sm leading-6 text-gray-700">
          {challenge.explanation}
        </p>

        <div class="mt-5 grid gap-3 sm:grid-cols-2">
          <div class="rounded-lg border border-gray-200 bg-white p-4">
            <p class="text-sm text-gray-500">Reward</p>
            <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
              {xpAwarded > 0 ? `${xpAwarded} XP` : "Streak participation"}
            </p>
          </div>

          <div class="rounded-lg border border-gray-200 bg-white p-4">
            <p class="text-sm text-gray-500">Current rank</p>
            <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
              {rankName}
            </p>
          </div>
        </div>

        <div class="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href={challenge.relatedChapterHref}
            class="inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white!"
          >
            Review the related chapter
          </Link>

          {!isAuthenticated && (
            <Link
              href={loginHref}
              class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
            >
              Sign in to save streak
            </Link>
          )}
        </div>

        {isAuthenticated && (
          <p class="mt-4 text-sm font-medium text-gray-600">
            {xpAwarded > 0
              ? "Saved. Tomorrow's lab will move the streak again."
              : "Saved. Come back tomorrow for the next XP chance."}
          </p>
        )}

        {isAuthenticated && emailOptIn && (
          <p class="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
            <HiEnvelopeOutline class="size-5" />
            Daily email reminder enabled.
          </p>
        )}
      </div>
    );
  },
);

export const DailyChallengePage = component$<DailyChallengePageProps>(
  ({ actionResult, isSubmitting, state, submitAnswer$ }) => {
    const selectedOptionId = useSignal(
      state.completion?.selectedOptionId ?? "",
    );
    const emailReminderOptIn = useSignal(
      !state.emailOptIn && !state.hasEmailPreference,
    );

    const challenge = state.challenge;
    const persistedCompletion = state.completion;
    const successfulAction =
      actionResult?.success === true ? actionResult : null;
    const actionSucceeded = Boolean(successfulAction);
    const effectiveEmailOptIn =
      successfulAction?.emailOptIn ?? state.emailOptIn;
    const shouldApplyActionStats =
      actionSucceeded &&
      !persistedCompletion &&
      !successfulAction?.alreadyCompleted;

    const answeredOptionId = successfulAction?.selectedOptionId
      ? successfulAction.selectedOptionId
      : persistedCompletion?.selectedOptionId || selectedOptionId.value;

    const hasAnswered = Boolean(persistedCompletion || actionSucceeded);

    const resolvedIsCorrect =
      typeof successfulAction?.isCorrect === "boolean"
        ? successfulAction.isCorrect
        : persistedCompletion
          ? persistedCompletion.isCorrect
          : null;

    const xpAwarded =
      typeof successfulAction?.xpAwarded === "number"
        ? successfulAction.xpAwarded
        : persistedCompletion?.xpAwarded ||
          (resolvedIsCorrect ? challenge.xp : 0);

    const shouldMoveStreak = shouldApplyActionStats && state.isToday;
    const displayedStats = shouldApplyActionStats
      ? {
          ...state.stats,
          bestStreak: shouldMoveStreak
            ? Math.max(state.stats.bestStreak, state.stats.currentStreak + 1)
            : state.stats.bestStreak,
          completedToday: state.stats.completedToday || state.isToday,
          currentStreak: shouldMoveStreak
            ? state.stats.currentStreak + 1
            : state.stats.currentStreak,
          totalCompleted: state.stats.totalCompleted + 1,
          totalCorrect: state.stats.totalCorrect + (resolvedIsCorrect ? 1 : 0),
          totalXp: state.stats.totalXp + xpAwarded,
        }
      : state.stats;

    const accuracy = getDailyChallengeAccuracy(displayedStats);
    const rankProgress = getDailyChallengeRankProgress(displayedStats.totalXp);
    const showEmailConsent =
      state.isAuthenticated &&
      !effectiveEmailOptIn &&
      !hasAnswered &&
      state.canAnswer;

    const handleSubmit = $(async () => {
      if (!selectedOptionId.value || hasAnswered || !state.canAnswer) return;

      if (!state.isAuthenticated) return;

      await submitAnswer$({
        challengeDate: state.dateKey,
        challengeId: challenge.id,
        emailOptIn: showEmailConsent ? emailReminderOptIn.value : undefined,
        selectedOptionId: selectedOptionId.value,
      });
    });

    return (
      <main class="relative min-h-screen bg-white">
        <section class="relative overflow-hidden border-b border-gray-100">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute left-1/2 top-0 h-96 w-[64rem] -translate-x-1/2 rounded-full bg-(--qwik-light-purple)/12 blur-3xl" />
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(113,63,194,0.10),transparent_44%)]" />
          </div>

          <div class="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-14 2xl:px-0">
            <div class="max-w-3xl">
              <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
                Daily Qwik Lab #{state.challengeNumber}
              </div>

              <h1 class="mt-6 text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-6xl">
                {state.isToday
                  ? "One small Qwik challenge every day."
                  : "Catch up on a missed Qwik Lab."}
              </h1>

              <p class="mt-6 max-w-2xl text-base leading-7 text-gray-700 md:text-xl md:leading-8">
                {state.isToday
                  ? "Practice routing, loaders, performance, components, and real app decisions in a few minutes. Come back tomorrow to keep your streak alive."
                  : "Missed a day? Complete the archive lab, collect the XP, and keep your learning momentum visible."}
              </p>

              <div class="mt-7 flex flex-wrap gap-3">
                <Link
                  href={state.historyHref}
                  class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! shadow-sm transition hover:border-(--qwik-dark-purple)/30 hover:bg-gray-50"
                >
                  History
                </Link>
                <Link
                  href={state.leaderboardHref}
                  class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! shadow-sm transition hover:border-(--qwik-dark-purple)/30 hover:bg-gray-50"
                >
                  Weekly leaderboard
                </Link>
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-4">
                <HeroStatCard
                  icon="fire"
                  label="Current streak"
                  value={displayedStats.currentStreak}
                />
                <HeroStatCard
                  icon="bolt"
                  label="Total XP"
                  value={displayedStats.totalXp}
                />
                <HeroStatCard
                  icon="star"
                  label="Best streak"
                  value={displayedStats.bestStreak}
                />
                <HeroStatCard
                  icon="trophy"
                  label="Rank"
                  value={rankProgress.currentRank.name}
                />
              </div>
            </div>

            <aside class="rounded-xl border border-(--qwik-dark-purple)/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm md:p-6">
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                {state.isToday ? "Today" : state.dateKey}
              </p>
              <h2 class="mt-3 text-2xl font-semibold text-(--qwik-dirty-black)">
                {challenge.title}
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {challenge.deckTitle} - {challenge.difficulty} -{" "}
                {challenge.estimatedTime}
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                {challenge.tags.map((tag) => (
                  <span
                    key={tag}
                    class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div class="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 md:px-6 md:py-12 lg:flex-row lg:px-14 2xl:px-0">
          <section class="w-full lg:max-w-[calc(100%-300px)]">
            <article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
              <div class="grid gap-6 lg:grid-cols-[1fr_280px]">
                <div>
                  <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                        {state.dateKey}
                      </p>
                      <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black)">
                        {challenge.title}
                      </h2>
                    </div>

                    <div class="rounded-lg border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-4 py-3 text-sm font-semibold text-(--qwik-dark-purple)">
                      {challenge.xp} XP
                    </div>
                  </div>

                  <div class="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">
                      <HiSparklesOutline class="size-5 text-(--qwik-dark-purple)" />
                      Mission briefing
                    </p>
                    <p class="mt-3 text-base leading-7 text-gray-700">
                      {challenge.prompt}
                    </p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      {challenge.tags.map((tag) => (
                        <span
                          key={tag}
                          class="rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {challenge.code && <DailyCodePreview code={challenge.code} />}
                </div>

                <DailyQuestPanel
                  accuracy={accuracy}
                  rankProgress={rankProgress}
                  stats={displayedStats}
                />
              </div>

              <div class="mt-8 grid gap-3">
                {challenge.options.map((option, index) => {
                  const isSelected = answeredOptionId === option.id;
                  const optionLabel = String.fromCharCode(65 + index);

                  return (
                    <button
                      key={option.id}
                      type="button"
                      disabled={hasAnswered || isSubmitting || !state.canAnswer}
                      onClick$={() => {
                        selectedOptionId.value = option.id;
                      }}
                      class={getOptionClass({
                        hasAnswered,
                        isCorrect: option.isCorrect,
                        isSelected,
                      })}
                    >
                      <DailyOptionMarker
                        hasAnswered={hasAnswered}
                        isCorrect={option.isCorrect}
                        isSelected={isSelected}
                        label={optionLabel}
                      />
                      <span class="text-sm leading-6 text-gray-800">
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {!state.isAuthenticated && !hasAnswered ? (
                  selectedOptionId.value ? (
                    <Link
                      href={state.loginHref}
                      class="inline-flex items-center justify-center gap-2 rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple)"
                    >
                      <HiLockClosedOutline class="size-5" />
                      Sign in to validate
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      class="inline-flex items-center justify-center rounded-lg bg-gray-400 px-5 py-3 text-sm font-medium text-white"
                    >
                      Choose an answer
                    </button>
                  )
                ) : (
                  <button
                    type="button"
                    disabled={
                      !selectedOptionId.value ||
                      hasAnswered ||
                      isSubmitting ||
                      !state.canAnswer
                    }
                    onClick$={handleSubmit}
                    class="inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-(--qwik-light-purple) disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    {isSubmitting
                      ? "Saving..."
                      : hasAnswered
                        ? "Completed"
                        : "Check answer"}
                  </button>
                )}

                {!state.isAuthenticated && state.isToday && !hasAnswered && (
                  <p class="flex max-w-xl items-start gap-2 text-sm leading-6 text-gray-600">
                    <HiLockClosedOutline class="mt-0.5 size-5 shrink-0 text-(--qwik-dark-purple)" />
                    Select your answer first. The correction unlocks only after
                    sign in, so the saved score stays fair.
                  </p>
                )}

                {!state.canAnswer && !hasAnswered && (
                  <p class="text-sm text-gray-600">
                    {state.lockedReason || "This Daily Lab cannot be answered."}
                  </p>
                )}
              </div>

              {showEmailConsent && (
                <label class="mt-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                  <input
                    type="checkbox"
                    checked={emailReminderOptIn.value}
                    onChange$={(event) => {
                      emailReminderOptIn.value = (
                        event.target as HTMLInputElement
                      ).checked;
                    }}
                    class="mt-1 size-4 rounded border-amber-300 text-(--qwik-dark-purple)"
                  />
                  <span>
                    <span class="flex items-center gap-2 font-semibold">
                      <HiBellAlertOutline class="size-5" />
                      Email me tomorrow's Daily Qwik Lab.
                    </span>
                    <span class="mt-1 block text-amber-900">
                      This is saved only when you validate this answer. You can
                      unsubscribe from any email or from your account page.
                    </span>
                  </span>
                </label>
              )}

              {state.isAuthenticated && effectiveEmailOptIn && !hasAnswered && (
                <p class="mt-5 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  <HiEnvelopeOutline class="size-5" />
                  Daily email reminder is enabled.
                </p>
              )}

              {!state.isAuthenticated && !state.isToday && (
                <div class="mt-5 rounded-lg border border-(--qwik-dark-purple)/15 bg-(--qwik-light-purple)/10 p-4">
                  <p class="text-sm leading-6 text-gray-700">
                    Missed Daily Labs are saved for signed-in learners.
                  </p>
                  <Link
                    href={state.loginHref}
                    class="mt-3 inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-4 py-2 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
                  >
                    Sign in to catch up
                  </Link>
                </div>
              )}

              {state.loadError && (
                <p class="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  {state.loadError}
                </p>
              )}

              {actionResult?.failed && (
                <p class="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {actionResult.error || "Unable to save this challenge."}
                </p>
              )}

              <div class="mt-8">
                <DailyChallengeResult
                  challenge={challenge}
                  emailOptIn={effectiveEmailOptIn}
                  hasAnswered={hasAnswered}
                  isAuthenticated={state.isAuthenticated}
                  isCorrect={resolvedIsCorrect}
                  loginHref={state.loginHref}
                  rankName={rankProgress.currentRank.name}
                  xpAwarded={xpAwarded}
                />
              </div>
            </article>
          </section>

          <DesktopStickyAd />
        </div>

        <MobileStickyAd />
      </main>
    );
  },
);
