// src/components/account/accountContent.tsx

import { $, component$, useStore } from "@builder.io/qwik";
import {
  useDailyChallengeAccountStats,
  useResetCompletedChapters,
  useUpdateDailyEmailPreference,
  useUpdateProfile,
} from "~/routes/account";

import { Form, Link } from "@builder.io/qwik-city";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";

import { HiArrowRightOnRectangleOutline } from "@qwikest/icons/heroicons";
import { useProfile } from "~/routes/layout";
import { Message } from "../UI/message/message";

import { CHAPTERS } from "~/constants/chapters";

import {
  HiArrowDownTrayOutline,
  HiArrowPathOutline,
  HiArrowUturnLeftOutline,
  HiBellAlertOutline,
  HiBoltOutline,
  HiChartBarOutline,
  HiCheckCircleMini,
  HiEnvelopeOutline,
  HiExclamationTriangleOutline,
  HiFireOutline,
  HiGlobeAltOutline,
  HiPhoneOutline,
  HiPhotoOutline,
  HiTrashOutline,
  HiTrophyOutline,
  HiUserCircleOutline,
  HiUserOutline,
} from "@qwikest/icons/heroicons";
import { CHAPTERS2026 } from "~/constants/chapters2026";
import {
  getDailyChallenge,
  getDailyChallengeAccuracy,
  getDailyChallengeRankProgress,
} from "~/constants/dailyChallenges";

type AccountDailyStatCardProps = {
  icon: "bolt" | "check" | "fire" | "trophy";
  label: string;
  value: string | number;
};

const AccountDailyStatCard = component$<AccountDailyStatCardProps>(
  ({ icon, label, value }) => {
    const iconClass =
      icon === "fire"
        ? "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
        : icon === "check"
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
          : icon === "bolt"
            ? "bg-violet-50 text-violet-700 ring-1 ring-violet-100"
            : "bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-100";

    return (
      <div class="rounded-md border border-white/70 bg-white p-4 shadow-sm transition hover:border-(--qwik-dark-purple)/15 hover:shadow-md">
        <div class="flex min-h-[96px] flex-col items-center justify-center gap-3 text-center">
          <span
            class={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
          >
            {icon === "fire" && <HiFireOutline class="size-5" />}
            {icon === "check" && <HiCheckCircleMini class="size-5" />}
            {icon === "bolt" && <HiBoltOutline class="size-5" />}
            {icon === "trophy" && <HiTrophyOutline class="size-5" />}
          </span>

          <div class="min-w-0">
            <p class="text-sm leading-5 text-gray-500">{label}</p>
            <p class="mt-1 break-words text-xl font-semibold leading-tight text-gray-900">
              {value}
            </p>
          </div>
        </div>
      </div>
    );
  },
);

export const AccountContent = component$(() => {
  const profile = useProfile();

  const updateProfile = useUpdateProfile();
  const updateDailyEmailPreference = useUpdateDailyEmailPreference();
  const resetCompletedChapters = useResetCompletedChapters();
  const dailyChallengeStats = useDailyChallengeAccountStats();
  const dailyChallenge = getDailyChallenge();
  const dailyStats = dailyChallengeStats.value.stats;
  const dailyAccuracy = getDailyChallengeAccuracy(dailyStats);
  const dailyRankProgress = getDailyChallengeRankProgress(dailyStats.totalXp);
  const dailyEmailOptIn =
    updateDailyEmailPreference.value?.success === true
      ? updateDailyEmailPreference.value.emailOptIn
      : dailyChallengeStats.value.emailOptIn;

  // Store pour gérer l'état des inputs
  const formState = useStore({
    username: profile.value?.username || "",
    originalUsername: profile.value?.username || "",
    avatar_url: profile.value?.avatar_url || "",
    originalAvatarUrl: profile.value?.avatar_url || "",
    website: profile.value?.website || "",
    originalWebsite: profile.value?.website || "",
    phone: profile.value?.phone || "",
    originalPhone: profile.value?.phone || "",
    isModified: false,
    isFocused: false,
  });

  const handleFocus = $(() => {
    formState.isFocused = true;
  });

  const handleBlur = $(() => {
    formState.isFocused = false;
  });

  const handleChange = $((event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    (formState as any)[name] = value; // Dynamically update the form field based on input name

    // Vérifie si la valeur a changé par rapport à l'originale
    formState.isModified =
      formState.username !== formState.originalUsername ||
      formState.avatar_url !== formState.originalAvatarUrl ||
      formState.website !== formState.originalWebsite ||
      formState.phone !== formState.originalPhone;
  });

  return (
    <main class="relative flex w-full grow flex-col items-center justify-between gap-4 overflow-hidden  md:gap-8">
      <div class="absolute bottom-25 left-1/2 z-[-1] -translate-x-1/2 md:bottom-0">
        <div class="block dark:hidden">
          <HomeBackground />
        </div>
        <div class="hidden dark:block">
          <HomeBackground />
        </div>
      </div>

      {!profile.value ? (
        <div class="flex grow flex-col items-center justify-center ">
          <Message
            message={{
              message: "User not found.",
              status: "error",
            }}
          />
          <Link
            href="/"
            class="mt-4 rounded bg-blue-500 px-4 py-2 text-white shadow transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Go back to home
          </Link>
        </div>
      ) : (
        <>
          <div class="container mx-auto max-w-4xl px-4 py-8">
            <div class="overflow-hidden rounded-xl bg-white shadow-lg">
              <div class="bg-(--qwik-dark-purple) px-6 py-6 text-white">
                <h1 class="text-3xl font-bold">My Account</h1>
                <p class="opacity-90">
                  Manage your personal information and progress
                </p>
              </div>
              <div class="space-y-8 p-6">
                <div class="rounded-lg border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-6">
                  <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                        Daily Qwik Lab
                      </p>
                      <h2 class="mt-2 text-xl font-semibold text-gray-800">
                        {dailyStats.completedToday
                          ? "Today's challenge is complete"
                          : "Today's challenge is waiting"}
                      </h2>
                      <p class="mt-2 max-w-2xl text-sm leading-6 text-gray-700">
                        {dailyChallenge.title}
                      </p>
                    </div>

                    <div class="flex flex-wrap gap-2">
                      <Link
                        href="/daily/"
                        class="inline-flex items-center justify-center rounded-md bg-(--qwik-dark-purple) px-4 py-2 text-sm font-medium text-white! transition hover:bg-(--qwik-light-purple)"
                      >
                        {dailyStats.completedToday
                          ? "View correction"
                          : "Play today"}
                      </Link>
                      <Link
                        href="/daily/history/"
                        class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! transition hover:border-(--qwik-dark-purple)/30"
                      >
                        History
                      </Link>
                      <Link
                        href="/daily/leaderboard/"
                        class="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dirty-black)! transition hover:border-(--qwik-dark-purple)/30"
                      >
                        Leaderboard
                      </Link>
                    </div>
                  </div>

                  <div class="mt-5 grid gap-3 sm:grid-cols-4">
                    <AccountDailyStatCard
                      icon="fire"
                      label="Current streak"
                      value={dailyStats.currentStreak}
                    />
                    <AccountDailyStatCard
                      icon="check"
                      label="Best streak"
                      value={dailyStats.bestStreak}
                    />
                    <AccountDailyStatCard
                      icon="bolt"
                      label="Total XP"
                      value={dailyStats.totalXp}
                    />
                    <AccountDailyStatCard
                      icon="trophy"
                      label="Rank"
                      value={dailyRankProgress.currentRank.name}
                    />
                  </div>

                  <div class="mt-4 rounded-md border border-white/70 bg-white p-4">
                    <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p class="flex items-center gap-2 text-sm font-medium text-gray-700">
                          <HiChartBarOutline class="size-5 text-(--qwik-dark-purple)" />
                          {dailyRankProgress.nextRank
                            ? `Next rank: ${dailyRankProgress.nextRank.name}`
                            : "Max rank reached"}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          Rank is based on total Daily Lab XP.
                        </p>
                      </div>
                      <p class="text-sm text-gray-500">
                        Accuracy: {dailyAccuracy}% - Completed:{" "}
                        {dailyStats.totalCompleted}
                      </p>
                    </div>

                    <div class="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                      <div
                        class="h-full rounded-full bg-(--qwik-dark-purple)"
                        style={`width:${dailyRankProgress.progressPercent}%;`}
                      />
                    </div>
                  </div>

                  {dailyChallengeStats.value.loadError && (
                    <p class="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                      {dailyChallengeStats.value.loadError}
                    </p>
                  )}

                  <Form
                    action={updateDailyEmailPreference}
                    class="mt-4 rounded-md border border-white/70 bg-white p-4"
                  >
                    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <label class="flex items-start gap-3 text-sm leading-6 text-gray-700">
                        <input
                          type="checkbox"
                          name="email_opt_in"
                          value="true"
                          checked={dailyEmailOptIn}
                          class="mt-1 size-4 rounded border-gray-300 text-(--qwik-dark-purple)"
                          disabled={updateDailyEmailPreference.isRunning}
                        />
                        <span>
                          <span class="flex items-center gap-2 font-medium">
                            <HiBellAlertOutline class="size-5 text-(--qwik-dark-purple)" />
                            Send me the Daily Qwik Lab by email when a new
                            challenge unlocks.
                          </span>
                        </span>
                      </label>

                      <button
                        type="submit"
                        disabled={updateDailyEmailPreference.isRunning}
                        class="inline-flex shrink-0 items-center justify-center rounded-md bg-(--qwik-dark-purple) px-4 py-2 text-sm font-medium text-white transition hover:bg-(--qwik-light-purple) disabled:bg-gray-400"
                      >
                        {updateDailyEmailPreference.isRunning
                          ? "Saving..."
                          : "Save email setting"}
                      </button>
                    </div>

                    {updateDailyEmailPreference.value?.message && (
                      <p
                        class={`mt-3 text-sm ${
                          updateDailyEmailPreference.value.success
                            ? "text-emerald-700"
                            : "text-red-700"
                        }`}
                      >
                        {updateDailyEmailPreference.value.message}
                      </p>
                    )}
                  </Form>
                </div>

                <div class="rounded-lg bg-gray-50 p-6">
                  <h2 class="mb-4 text-xl font-semibold text-gray-800">
                    Profile Information
                  </h2>

                  <Form
                    class="space-y-4"
                    action={updateProfile}
                    onSubmitCompleted$={() => {
                      // Réinitialiser chaque champ à sa valeur d'origine
                      formState.originalUsername = formState.username;
                      formState.originalAvatarUrl = formState.avatar_url;
                      formState.originalWebsite = formState.website;
                      formState.originalPhone = formState.phone;

                      // Marquer le formulaire comme non modifié
                      formState.isModified = false;

                      // Supprimer le message d'information au bout de 5 secondes
                      setTimeout(() => {
                        if (updateProfile.value) {
                          updateProfile.value.message = "";
                        }
                      }, 5000);
                    }}
                  >
                    <div>
                      <label
                        for="email"
                        class="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Your email
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiEnvelopeOutline class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          readOnly
                          class="w-full rounded-md border border-gray-300 bg-gray-100 p-2 pl-10 shadow-sm "
                          value={profile.value.email}
                          disabled
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-700"
                        for="username"
                      >
                        Your username:
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiUserOutline class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          class={`w-full rounded-md border border-gray-300 p-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                            updateProfile.value?.fieldErrors?.username
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter your username"
                          value={formState.username}
                          onFocus$={handleFocus}
                          onBlur$={handleBlur}
                          onInput$={handleChange}
                          disabled={updateProfile.isRunning}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-700"
                        for="avatar_url"
                      >
                        Your avatar url:
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiPhotoOutline class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="avatar_url"
                          name="avatar_url"
                          type="text"
                          class={`w-full rounded-md border border-gray-300 p-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                            updateProfile.value?.fieldErrors?.avatar_url
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="https://example.com/avatar.jpg"
                          value={formState.avatar_url}
                          onFocus$={handleFocus}
                          onBlur$={handleBlur}
                          onInput$={handleChange}
                          disabled={updateProfile.isRunning}
                        />
                      </div>
                      <div class="mt-2 flex items-center space-x-4">
                        <div class="avatar-preview flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                          {
                            // Si l'user a un avatar, l'afficher
                            profile.value.avatar_url ? (
                              <div class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full md:h-12 md:w-12">
                                <img
                                  src={profile.value.avatar_url}
                                  alt={"Avatar of " + profile.value.email}
                                  class="h-full w-full object-cover"
                                  width={25}
                                  height={25}
                                />
                              </div>
                            ) : (
                              <HiUserCircleOutline class="text-3xl text-gray-400" />
                            )
                          }
                        </div>

                        <span class="text-sm text-gray-500">
                          Avatar preview
                        </span>
                      </div>
                    </div>

                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-700"
                        for="website"
                      >
                        Your website:
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiGlobeAltOutline class="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          class={`w-full rounded-md border border-gray-300 p-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                            updateProfile.value?.fieldErrors?.website
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="https://yoursite.com"
                          value={formState.website}
                          onFocus$={handleFocus}
                          onBlur$={handleBlur}
                          onInput$={handleChange}
                          disabled={updateProfile.isRunning}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        class="mb-1 block text-sm font-medium text-gray-700"
                        for="phone"
                      >
                        Your phone:
                      </label>
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <HiPhoneOutline class="h-5 w-5 text-gray-400" />
                        </div>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          class={`w-full rounded-md border border-gray-300 p-2 pl-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
                            updateProfile.value?.fieldErrors?.phone
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="+33 6 00 00 00 00"
                          value={formState.phone}
                          onFocus$={handleFocus}
                          onBlur$={handleBlur}
                          onInput$={handleChange}
                          disabled={updateProfile.isRunning}
                        />
                      </div>
                    </div>

                    <div class="flex space-x-4 pt-2">
                      <button
                        type="submit"
                        disabled={
                          !formState.isModified || updateProfile.isRunning
                        }
                        class={`flex items-center space-x-2 rounded-md bg-[#18b6f6] px-4 py-2 text-white transition hover:bg-[#139fd6] disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500`}
                      >
                        <HiArrowDownTrayOutline class="h-5 w-5" />
                        <span>Save</span>
                      </button>
                      <button
                        type="button"
                        disabled={
                          !formState.isModified || updateProfile.isRunning
                        }
                        onClick$={() => {
                          // Réinitialiser chaque champ à sa valeur d'origine
                          formState.username = formState.originalUsername;
                          formState.avatar_url = formState.originalAvatarUrl;
                          formState.website = formState.originalWebsite;
                          formState.phone = formState.originalPhone;

                          // Marquer le formulaire comme non modifié
                          formState.isModified = false;
                        }}
                        class="flex items-center space-x-2 rounded-md bg-gray-200 px-4 py-2 text-gray-800 transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white disabled:hover:bg-gray-500"
                      >
                        <HiArrowUturnLeftOutline class="h-5 w-5" />
                        <span>Cancel</span>
                      </button>
                    </div>

                    {updateProfile.isRunning && (
                      <Message
                        message={{
                          message: "Update in progress...",
                          status: "notice",
                        }}
                      />
                    )}
                    {updateProfile.value && !updateProfile.isRunning && (
                      <Message
                        message={{
                          message:
                            updateProfile.value.fieldErrors?.username ||
                            updateProfile.value.fieldErrors?.avatar_url ||
                            updateProfile.value.fieldErrors?.website ||
                            updateProfile.value.fieldErrors?.phone ||
                            updateProfile.value.message,
                          status: updateProfile.value.status || "error",
                        }}
                      />
                    )}
                  </Form>
                </div>
                {/* <SubscribeSection profile={profile} /> */}

                {/* ✅ Affichage des chapitres complétés version 2026 */}
                <div class="rounded-lg bg-gray-50 p-6">
                  <div class="mb-4 flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">
                      Completed Chapters{" "}
                      <span class="text-(--qwik-dark-purple)">
                        2026 Edition
                      </span>
                    </h2>

                    <button
                      onClick$={async () => {
                        const result = await resetCompletedChapters.submit({
                          version: "2026",
                        });

                        if (result.value.success) {
                          profile.value.completedChapters2026 = [];
                        }
                      }}
                      class="flex items-center space-x-1 rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-800 transition hover:bg-gray-300"
                      id="resetProgress2026"
                    >
                      <HiArrowPathOutline class="h-4 w-4" />
                      <span>Reset Progress</span>
                    </button>
                  </div>

                  <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-8">
                    {CHAPTERS2026.map((i) => {
                      const isCompleted =
                        profile.value.completedChapters2026.includes(i.id);

                      return (
                        <div
                          key={i.id}
                          class="relative flex h-20 flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-center shadow-sm"
                        >
                          <span class="text-sm font-semibold text-gray-800">
                            Chapter {i.id}
                          </span>

                          {isCompleted && (
                            <HiCheckCircleMini class="absolute right-1 top-1 h-5 w-5 text-(--qwik-dark-purple)" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ✅ Affichage des chapitres complétés */}
                <div class="rounded-lg bg-gray-50 p-6">
                  <div class="mb-4 flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">
                      Completed Chapters{" "}
                      <span class="text-red-700">Legacy Edition</span>
                    </h2>

                    <button
                      onClick$={async () => {
                        const result = await resetCompletedChapters.submit({
                          version: "legacy",
                        });

                        if (result.value.success) {
                          profile.value.completedChapters = [];
                        }
                      }}
                      class="flex items-center space-x-1 rounded-md bg-gray-200 px-3 py-1 text-sm text-gray-800 transition hover:bg-gray-300"
                      id="resetProgressLegacy"
                    >
                      <HiArrowPathOutline class="h-4 w-4" />
                      <span>Reset Progress</span>
                    </button>
                  </div>

                  <div class="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-8">
                    {CHAPTERS.map((i) => {
                      const isCompleted =
                        profile.value.completedChapters.includes(i.id);

                      return (
                        <div
                          key={i.id}
                          class="relative flex h-20 flex-col items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-center shadow-sm"
                        >
                          <span class="text-sm font-semibold text-gray-800">
                            Chapter {i.id}
                          </span>

                          {isCompleted && (
                            <HiCheckCircleMini class="absolute right-1 top-1 h-5 w-5 text-(--qwik-dark-blue)" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div class="rounded-lg bg-gray-50 p-6">
                  <h2 class="mb-2 text-sm font-medium text-gray-800">Logout</h2>
                  <p class="mb-4 text-sm text-gray-600">
                    End your current session on this device.
                  </p>

                  <Link
                    tabIndex={0}
                    href="/auth/logout/"
                    id="logoutBtn"
                    class="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700! shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <HiArrowRightOnRectangleOutline class="mr-1" />
                    Logout
                  </Link>
                </div>
                <div class="warning-section rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
                  <div class="flex">
                    <div class="shrink-0">
                      <HiExclamationTriangleOutline class="text-xl text-red-500" />
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium text-red-800">
                        Danger Zone
                      </h3>
                      <div class="mt-2 text-sm text-red-700">
                        <p>
                          Deleting your account is permanent and cannot be
                          undone.
                        </p>
                      </div>
                      <div class="mt-4">
                        <Link
                          tabIndex={0}
                          href="/auth/deleteProfile/"
                          id="deleteAccountBtn"
                          class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-3 py-2 text-sm font-medium leading-4 text-white! shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                          <HiTrashOutline class="mr-1" />
                          Delete Account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
});
