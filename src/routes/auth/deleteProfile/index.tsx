import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import LearnQwikLogo from "~/assets/img/android-chrome-192x192.png?jsx";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { ModalDeleteProfile } from "~/components/UI/modalDeleteProfile/modalDeleteProfile";
import { createAdminClient, createClient } from "~/lib/supabase/server";
import { useProfile } from "~/routes/layout";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export const useDeleteProfileAction = routeAction$(
  async (data, requestEvent) => {
    const supabase = createClient(requestEvent);
    const adminSupabase = createAdminClient(requestEvent);

    const userId = String(data.userId);

    const { error: profileError } = await supabase
      .from("profiles")
      .delete()
      .eq("id", userId);

    if (profileError) {
      console.error(profileError);
      return requestEvent.fail(500, { message: "Failed to delete profile." });
    }

    const { error: authError } =
      await adminSupabase.auth.admin.deleteUser(userId);

    if (authError) {
      console.error(authError);
      return requestEvent.fail(500, { message: "Failed to delete user." });
    }

    throw requestEvent.redirect(302, "/");
  },
);

export default component$(() => {
  const profile = useProfile();

  return (
    <main class="relative  overflow-hidden bg-white">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 opacity-90">
          <HomeBackgroundPurple />
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_45%)]" />
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-55">
          <HomeBackground />
        </div>
      </div>

      <section class="relative mx-auto flex min-h-[calc(100dvh-var(--header-footer-height))] max-w-7xl items-center justify-center px-4 py-12 md:px-6 lg:px-8">
        <div class="relative w-full max-w-2xl">
          <div class="absolute inset-0 rounded-4xl bg-red-500/6 blur-3xl" />

          <div class="relative overflow-hidden rounded-4xl border border-red-500/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-sm md:p-8">
            <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(239,68,68,0.05),rgba(255,255,255,0))]" />

            <div class="relative">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">
                    Account settings
                  </p>
                  <h1 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black) md:text-3xl">
                    Delete your account
                  </h1>
                </div>

                <div class="shrink-0">
                  <LearnQwikLogo class="size-12" />
                </div>
              </div>

              <p class="mt-3 text-sm leading-6 text-gray-600">
                This action affects your Learn Qwik account and associated data.
                Please review the information below before continuing.
              </p>

              <div class="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
                <p class="text-sm font-semibold text-red-700">
                  Permanent action
                </p>
                <p class="mt-2 text-sm leading-6 text-red-800">
                  If you continue, your account and associated data will be
                  permanently deleted. This action cannot be undone.
                </p>
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Access
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    Your access will end immediately once the deletion is
                    confirmed.
                  </p>
                </div>

                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Data
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    Your profile and authentication account will be permanently
                    removed.
                  </p>
                </div>
              </div>

              <div class="mt-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                <div class="mb-5 flex items-center justify-center">
                  <span class="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                    Delete account
                  </span>
                </div>

                <ModalDeleteProfile profile={profile} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Delete your Learn Qwik Account",
  description: "Permanently delete your Learn Qwik account.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/auth/deleteProfile/",
  type: "website",
  robots: "noindex, nofollow",
});
