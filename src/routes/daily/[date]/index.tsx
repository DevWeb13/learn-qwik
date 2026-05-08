import { $, component$ } from "@builder.io/qwik";
import {
  routeAction$,
  routeLoader$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { DailyChallengePage } from "~/components/daily/dailyChallengePage";
import {
  getDailyChallengePath,
  getTodayDateKey,
  isDailyChallengeDateAvailable,
} from "~/constants/dailyChallenges";
import {
  loadDailyChallengePageState,
  submitDailyChallengeAnswer,
  type DailyChallengeSubmitInput,
} from "~/lib/dailyChallenge/server";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

const DAILY_QWIK_LAB_IMAGE_URL =
  "https://www.learn-qwik.com/metaDailyQwikLab.png";
const DAILY_QWIK_LAB_IMAGE_ALT =
  "Daily Qwik Lab preview with streak, XP, and weekly leaderboard cards";

export const useDatedDailyChallengeState = routeLoader$((requestEvent) => {
  const dateKey = requestEvent.params.date;
  const todayDateKey = getTodayDateKey();

  if (!isDailyChallengeDateAvailable(dateKey, todayDateKey)) {
    throw requestEvent.redirect(
      302,
      getDailyChallengePath(todayDateKey, todayDateKey),
    );
  }

  return loadDailyChallengePageState(requestEvent, dateKey, {
    allowGuestAnswer: false,
  });
});

export const useSubmitDatedDailyChallenge = routeAction$(
  (data, requestEvent) => submitDailyChallengeAnswer(data, requestEvent),
  zod$({
    challengeDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    challengeId: z.string().min(1),
    emailOptIn: z.boolean().optional(),
    selectedOptionId: z.string().min(1),
  }),
);

export default component$(() => {
  const dailyState = useDatedDailyChallengeState();
  const submitDailyChallenge = useSubmitDatedDailyChallenge();

  const submitAnswer = $(async (payload: DailyChallengeSubmitInput) => {
    await submitDailyChallenge.submit(payload);
  });

  return (
    <DailyChallengePage
      actionResult={submitDailyChallenge.value}
      isSubmitting={submitDailyChallenge.isRunning}
      state={dailyState.value}
      submitAnswer$={submitAnswer}
    />
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Daily Qwik Lab Archive | Catch Up on a Missed Qwik Challenge",
  description:
    "Catch up on missed Daily Qwik Lab challenges, earn XP, and review the related Qwik tutorial chapter.",
  imageUrl: DAILY_QWIK_LAB_IMAGE_URL,
  imageAlt: DAILY_QWIK_LAB_IMAGE_ALT,
  imageWidth: 1200,
  imageHeight: 630,
  url: "https://www.learn-qwik.com/daily/",
  type: "website",
  robots: "noindex, follow",
});
