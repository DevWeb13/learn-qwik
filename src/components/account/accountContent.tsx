// src/components/account/accountContent.tsx

import { component$, useStore, $ } from "@builder.io/qwik";
import { useResetCompletedChapters, useUpdateProfile } from "~/routes/account";

import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import { Form, Link } from "@builder.io/qwik-city";

import { Message } from "../UI/message/message";
import { HiArrowRightOnRectangleOutline } from "@qwikest/icons/heroicons";
import { useProfile } from "~/routes/layout";
import { SubscribeSection } from "../subcribeSection/subscribeSection";

export const AccountContent = component$(() => {
  const profile = useProfile();

  const emailPrefix = profile.value?.email.split("@")[0];

  const updateProfile = useUpdateProfile();
  const resetCompletedChapters = useResetCompletedChapters();

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
    <main class="relative flex w-full flex-grow flex-col items-center justify-between gap-4 overflow-hidden py-12 md:gap-8">
      <div class="absolute bottom-[100px] left-1/2 z-[-1] -translate-x-1/2 md:bottom-0">
        <div class="block dark:hidden">
          <HomeBackground />
        </div>
        <div class="hidden dark:block">
          <HomeBackground />
        </div>
      </div>

      {!profile.value ? (
        <div class="flex flex-grow flex-col items-center justify-center ">
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
          <div class="flex flex-col items-center">
            <h1 class="text-center text-2xl font-semibold md:max-w-[100%] md:text-4xl">
              <span>Welcome</span>{" "}
              {profile.value.username ? (
                <>
                  <span class="block text-[#18b6f6] md:hidden">
                    {profile.value.username} !
                  </span>
                  <span class="hidden text-[#18b6f6] md:block">
                    {profile.value.username} !
                  </span>
                </>
              ) : (
                <>
                  <span class="mt-1 block text-[#18b6f6] md:hidden">
                    {emailPrefix} !
                  </span>
                  <span class="mt-2 hidden text-[#18b6f6] md:block">
                    {profile.value.email} !
                  </span>
                </>
              )}
            </h1>

            {profile.value.username && (
              <h2 class="text-l mb-2 text-center font-semibold md:mb-4 md:max-w-[100%] md:text-xl">
                <span class="text-[#ac7ff4]">{profile.value.email}</span>
              </h2>
            )}

            {
              // Si l'user a un avatar, l'afficher
              profile.value.avatar_url && (
                <div class="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full md:h-12 md:w-12">
                  <img
                    src={profile.value.avatar_url}
                    alt={"Avatar of " + profile.value.email}
                    class="h-full w-full object-cover"
                    width={25}
                    height={25}
                  />
                </div>
              )
            }
          </div>

          <SubscribeSection profile={profile} />

          <Form
            class="w-[220px] space-y-6 md:w-[400px]"
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
                class="block text-sm font-medium text-gray-700"
                for="username"
              >
                Your username:
              </label>
              <div class="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  class={`block w-full appearance-none rounded-sm border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none sm:text-sm ${
                    updateProfile.value?.fieldErrors?.username
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={formState.originalUsername}
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
                class="block text-sm font-medium text-gray-700"
                for="avatar_url"
              >
                Your avatar url:
              </label>
              <div class="mt-1">
                <input
                  id="avatar_url"
                  name="avatar_url"
                  type="text"
                  class={`block w-full appearance-none rounded-sm border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none sm:text-sm ${
                    updateProfile.value?.fieldErrors?.avatar_url
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={formState.originalAvatarUrl}
                  value={formState.avatar_url}
                  onFocus$={handleFocus}
                  onBlur$={handleBlur}
                  onInput$={handleChange}
                  disabled={updateProfile.isRunning}
                />
              </div>
            </div>

            <div>
              <label
                class="block text-sm font-medium text-gray-700"
                for="website"
              >
                Your website:
              </label>
              <div class="mt-1">
                <input
                  id="website"
                  name="website"
                  type="text"
                  class={`block w-full appearance-none rounded-sm border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none sm:text-sm ${
                    updateProfile.value?.fieldErrors?.website
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={formState.originalWebsite}
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
                class="block text-sm font-medium text-gray-700"
                for="phone"
              >
                Your phone:
              </label>
              <div class="mt-1">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  class={`block w-full appearance-none rounded-sm border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none sm:text-sm ${
                    updateProfile.value?.fieldErrors?.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder={formState.originalPhone}
                  value={formState.phone}
                  onFocus$={handleFocus}
                  onBlur$={handleBlur}
                  onInput$={handleChange}
                  disabled={updateProfile.isRunning}
                />
              </div>
            </div>

            <div class="mt-4 flex justify-center gap-4">
              <button
                type="submit"
                disabled={!formState.isModified || updateProfile.isRunning}
                class={`flex  items-center justify-center gap-1 rounded-md border border-transparent bg-sky-500 px-4 py-1  text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2  focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500`}
              >
                Save
              </button>
              <button
                type="button"
                disabled={!formState.isModified || updateProfile.isRunning}
                onClick$={() => {
                  // Réinitialiser chaque champ à sa valeur d'origine
                  formState.username = formState.originalUsername;
                  formState.avatar_url = formState.originalAvatarUrl;
                  formState.website = formState.originalWebsite;
                  formState.phone = formState.originalPhone;

                  // Marquer le formulaire comme non modifié
                  formState.isModified = false;
                }}
                class="rounded bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500"
              >
                Cancel
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
          {/* ✅ Affichage des chapitres complétés */}
          {profile.value.completedChapters.length > 0 ? (
            <div class="mt-4 flex flex-col items-center">
              <h3 class="text-lg font-semibold text-gray-800 md:text-xl">
                Completed Chapters
              </h3>
              <ul class="mt-2 text-sm text-gray-700 md:text-base">
                {profile.value.completedChapters
                  .sort((a, b) => a - b) // ✅ Trier les chapitres dans l'ordre croissant
                  .map((chapter) => (
                    <li key={chapter} class="mt-1 font-medium text-gray-900">
                      Chapter {chapter}
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <p class="mt-4 text-sm text-gray-600">No completed chapters yet.</p>
          )}
          <button
            onClick$={async () => {
              const result = await resetCompletedChapters.submit();
              if (result.value.success) {
                profile.value.completedChapters = []; // ✅ Mise à jour locale après reset
              }
            }}
            class="mt-4 flex items-center justify-center gap-1 rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Reset Progress
          </button>
          <Link
            tabIndex={0}
            href="/auth/logout/"
            class="mt-8 flex items-center justify-center gap-1 rounded-md border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
          >
            Logout <HiArrowRightOnRectangleOutline class="h-4 w-4 stroke-[2]" />
          </Link>
          <Link
            tabIndex={0}
            href="/auth/deleteProfile/"
            class="mt-4 flex items-center justify-center gap-1 rounded-md border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
          >
            Delete Account
          </Link>
        </>
      )}
    </main>
  );
});
