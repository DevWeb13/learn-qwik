import type {
  RequestEventAction,
  RequestEventLoader,
} from "@builder.io/qwik-city";
import {
  BASE_DATE_KEY,
  computeDailyChallengeStats,
  compareDateKeys,
  getDailyChallengeForDateKey,
  getDailyChallengeNumber,
  getDailyChallengePath,
  getTodayDateKey,
  isDailyChallengeDateAvailable,
  type DailyChallenge,
  type DailyChallengeCompletionSummary,
  type DailyChallengeStats,
} from "~/constants/dailyChallenges";
import { createClient } from "~/lib/supabase/server";
import type { Database } from "~/types/learn-qwik.database.types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type DailyCompletionRow =
  Database["public"]["Tables"]["daily_challenge_completions"]["Row"];

export type DailyCompletionView = {
  challengeId: string;
  challengeDate: string;
  completedDate: string;
  selectedOptionId: string;
  isCorrect: boolean;
  xpAwarded: number;
  completedAt: string;
};

export type DailyChallengePageState = {
  canAnswer: boolean;
  challenge: DailyChallenge;
  challengeNumber: number;
  completion: DailyCompletionView | null;
  dateKey: string;
  emailOptIn: boolean;
  hasEmailPreference: boolean;
  historyHref: string;
  isAuthenticated: boolean;
  isToday: boolean;
  leaderboardHref: string;
  loadError: string;
  lockedReason: string;
  loginHref: string;
  stats: DailyChallengeStats;
  todayDateKey: string;
};

export type DailyChallengeSubmitInput = {
  challengeDate: string;
  challengeId: string;
  emailOptIn?: boolean;
  selectedOptionId: string;
};

export type DailyChallengeSubmitResult = {
  alreadyCompleted?: boolean;
  completedAt?: string;
  error?: string;
  fieldErrors?: Record<string, string>;
  failed?: boolean;
  formErrors?: string[];
  emailOptIn?: boolean;
  isCorrect?: boolean;
  message?: string;
  selectedOptionId?: string;
  status?: "error" | "success";
  success?: boolean;
  xpAwarded?: number;
};

const dailyCompletionSelect =
  "id, user_id, challenge_id, challenge_date, completed_date, selected_option_id, is_correct, xp_awarded, completed_at, updated_at";

export const toCompletionSummary = (
  completion: Pick<
    DailyCompletionRow,
    | "challenge_date"
    | "challenge_id"
    | "completed_date"
    | "is_correct"
    | "xp_awarded"
  >,
): DailyChallengeCompletionSummary => ({
  challengeDate: completion.challenge_date,
  challengeId: completion.challenge_id,
  completedDate: completion.completed_date,
  isCorrect: completion.is_correct,
  xpAwarded: completion.xp_awarded,
});

export const toCompletionView = (
  completion: DailyCompletionRow,
): DailyCompletionView => ({
  challengeId: completion.challenge_id,
  challengeDate: completion.challenge_date,
  completedDate: completion.completed_date,
  selectedOptionId: completion.selected_option_id,
  isCorrect: completion.is_correct,
  xpAwarded: completion.xp_awarded,
  completedAt: completion.completed_at,
});

export const loadDailyChallengePageState = async (
  requestEvent: RequestEventLoader,
  dateKey: string,
  options: { allowGuestAnswer: boolean },
): Promise<DailyChallengePageState> => {
  requestEvent.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  const profile = requestEvent.sharedMap.get("profile") as Profile | null;
  const todayDateKey = getTodayDateKey();
  const challenge = getDailyChallengeForDateKey(dateKey);
  const challengeNumber = getDailyChallengeNumber(dateKey);
  const isToday = dateKey === todayDateKey;
  const currentPath = requestEvent.url.pathname + requestEvent.url.search;
  const loginHref = `/auth/login/?next=${encodeURIComponent(currentPath)}`;
  const isAvailable = isDailyChallengeDateAvailable(dateKey, todayDateKey);

  if (!profile) {
    return {
      canAnswer: options.allowGuestAnswer && isAvailable,
      challenge,
      challengeNumber,
      completion: null,
      dateKey,
      emailOptIn: false,
      hasEmailPreference: false,
      historyHref: "/daily/history/",
      isAuthenticated: false,
      isToday,
      leaderboardHref: "/daily/leaderboard/",
      loadError: "",
      lockedReason: options.allowGuestAnswer
        ? ""
        : "Sign in to answer missed Daily Labs.",
      loginHref,
      stats: computeDailyChallengeStats([], todayDateKey),
      todayDateKey,
    };
  }

  const supabase = createClient(requestEvent);

  const { data, error } = await supabase
    .from("daily_challenge_completions")
    .select(dailyCompletionSelect)
    .eq("user_id", profile.id)
    .order("challenge_date", { ascending: false })
    .limit(365);

  const { data: preference, error: preferenceError } = await supabase
    .from("daily_challenge_preferences")
    .select("email_opt_in")
    .eq("user_id", profile.id)
    .maybeSingle();

  if (preferenceError) {
    console.error(
      "Failed to load Daily Qwik Lab email preference:",
      preferenceError.message,
    );
  }

  if (error) {
    console.error("Failed to load daily challenge completions:", error.message);

    return {
      canAnswer: isAvailable,
      challenge,
      challengeNumber,
      completion: null,
      dateKey,
      emailOptIn: preference?.email_opt_in ?? false,
      hasEmailPreference: Boolean(preference),
      historyHref: "/daily/history/",
      isAuthenticated: true,
      isToday,
      leaderboardHref: "/daily/leaderboard/",
      loadError:
        "Daily progress could not be loaded yet. The challenge still works.",
      lockedReason: "",
      loginHref,
      stats: computeDailyChallengeStats([], todayDateKey),
      todayDateKey,
    };
  }

  const completion =
    data.find((item) => item.challenge_date === dateKey) ?? null;

  return {
    canAnswer: isAvailable && !completion,
    challenge,
    challengeNumber,
    completion: completion ? toCompletionView(completion) : null,
    dateKey,
    emailOptIn: preference?.email_opt_in ?? false,
    hasEmailPreference: Boolean(preference),
    historyHref: "/daily/history/",
    isAuthenticated: true,
    isToday,
    leaderboardHref: "/daily/leaderboard/",
    loadError: "",
    lockedReason: completion
      ? "This Daily Lab is already complete."
      : compareDateKeys(dateKey, todayDateKey) > 0
        ? "Future Daily Labs unlock one day at a time."
        : "",
    loginHref,
    stats: computeDailyChallengeStats(
      data.map(toCompletionSummary),
      todayDateKey,
    ),
    todayDateKey,
  };
};

export const submitDailyChallengeAnswer = async (
  data: DailyChallengeSubmitInput,
  requestEvent: RequestEventAction,
): Promise<DailyChallengeSubmitResult> => {
  const profile = requestEvent.sharedMap.get("profile") as Profile | null;

  if (!profile) {
    return requestEvent.fail(401, {
      error: "Sign in to save your Daily Qwik Lab streak.",
      status: "error",
      success: false,
    });
  }

  const todayDateKey = getTodayDateKey();

  if (
    !isDailyChallengeDateAvailable(data.challengeDate, todayDateKey) ||
    compareDateKeys(data.challengeDate, BASE_DATE_KEY) < 0
  ) {
    return requestEvent.fail(400, {
      error: "This Daily Qwik Lab is not available.",
      status: "error",
      success: false,
    });
  }

  const challenge = getDailyChallengeForDateKey(data.challengeDate);

  if (challenge.id !== data.challengeId) {
    return requestEvent.fail(400, {
      error: "This challenge does not match the selected Daily Qwik Lab.",
      status: "error",
      success: false,
    });
  }

  const selectedOption = challenge.options.find(
    (option) => option.id === data.selectedOptionId,
  );

  if (!selectedOption) {
    return requestEvent.fail(400, {
      error: "Choose one of the available answers.",
      status: "error",
      success: false,
    });
  }

  const supabase = createClient(requestEvent);

  const { data: existingCompletion, error: existingError } = await supabase
    .from("daily_challenge_completions")
    .select(dailyCompletionSelect)
    .eq("user_id", profile.id)
    .eq("challenge_date", data.challengeDate)
    .maybeSingle();

  if (existingError) {
    return requestEvent.fail(500, {
      error: "Unable to check this Daily Qwik Lab progress.",
      status: "error",
      success: false,
    });
  }

  if (existingCompletion) {
    return {
      alreadyCompleted: true,
      completedAt: existingCompletion.completed_at,
      isCorrect: existingCompletion.is_correct,
      message: "This Daily Qwik Lab was already completed.",
      selectedOptionId: existingCompletion.selected_option_id,
      status: "success",
      success: true,
      xpAwarded: existingCompletion.xp_awarded,
    };
  }

  const isCorrect = selectedOption.isCorrect;
  const xpAwarded = isCorrect ? challenge.xp : 0;
  const isCatchUp = data.challengeDate !== todayDateKey;
  let emailOptIn: boolean | undefined;

  const { data: insertedCompletion, error: insertError } = await supabase
    .from("daily_challenge_completions")
    .insert({
      user_id: profile.id,
      challenge_id: challenge.id,
      challenge_date: data.challengeDate,
      completed_date: todayDateKey,
      selected_option_id: selectedOption.id,
      is_correct: isCorrect,
      xp_awarded: xpAwarded,
    })
    .select(dailyCompletionSelect)
    .single();

  if (insertError) {
    return requestEvent.fail(500, {
      error: "Unable to save your Daily Qwik Lab answer.",
      status: "error",
      success: false,
    });
  }

  if (typeof data.emailOptIn === "boolean") {
    emailOptIn = data.emailOptIn;

    const { error: preferenceError } = await supabase
      .from("daily_challenge_preferences")
      .upsert(
        {
          email_opt_in: emailOptIn,
          updated_at: new Date().toISOString(),
          user_id: profile.id,
        },
        { onConflict: "user_id" },
      );

    if (preferenceError) {
      console.error(
        "Failed to save Daily Qwik Lab email consent:",
        preferenceError.message,
      );
    }
  }

  return {
    alreadyCompleted: false,
    completedAt: insertedCompletion.completed_at,
    emailOptIn,
    isCorrect,
    message: isCorrect
      ? isCatchUp
        ? `Correct. ${xpAwarded} XP added from this missed Daily Lab.`
        : `Correct. ${xpAwarded} XP added to your Daily Qwik Lab.`
      : isCatchUp
        ? "Saved. This missed Daily Lab is now in your history."
        : "Saved. Come back tomorrow to keep the streak moving.",
    selectedOptionId: selectedOption.id,
    status: "success",
    success: true,
    xpAwarded,
  };
};

export const createDailyLoginHref = (dateKey: string, todayDateKey: string) =>
  `/auth/login/?next=${encodeURIComponent(getDailyChallengePath(dateKey, todayDateKey))}`;
