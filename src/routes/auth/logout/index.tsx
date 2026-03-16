// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, Link, routeAction$ } from "@builder.io/qwik-city";
import LearnQwikLogo from "~/assets/img/android-chrome-192x192.png?jsx";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export const useSignoutAction = routeAction$(async (_, requestEvent) => {
  const supabase = createClient(requestEvent);

  const { error } = await supabase.auth.signOut();

  if (error) {
    return requestEvent.fail(500, {
      message: "Failed to log out. Please try again.",
    });
  }

  throw requestEvent.redirect(302, "/");
});

export default component$(() => {
  const signoutAction = useSignoutAction();

  return (
    <main class="relative min-h-[calc(100dvh-var(--header-height))] overflow-hidden bg-white">
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
        <div class="relative w-full max-w-lg">
          <div class="absolute inset-0 rounded-4xl bg-(--qwik-light-purple)/15 blur-3xl" />

          <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-sm md:p-8">
            <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(172,127,244,0.07),rgba(255,255,255,0))]" />

            <div class="relative">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    Learn Qwik
                  </p>
                  <h1 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black) md:text-3xl">
                    Sign out
                  </h1>
                </div>

                <div class="shrink-0">
                  <LearnQwikLogo class="size-12" />
                </div>
              </div>

              <p class="mt-3 text-sm leading-6 text-gray-600">
                You are about to sign out of your Learn Qwik account.
              </p>

              <div class="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p class="text-sm font-medium text-(--qwik-dirty-black)">
                  What happens next
                </p>
                <p class="mt-2 text-sm leading-6 text-gray-700">
                  Your current session will be closed and you will be redirected
                  to the homepage.
                </p>
              </div>

              <div class="mt-8 space-y-4">
                <Form action={signoutAction}>
                  <button
                    type="submit"
                    disabled={signoutAction.isRunning}
                    class="inline-flex w-full items-center justify-center rounded-xl bg-(--qwik-dark-purple) px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-(--qwik-light-purple) disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    {signoutAction.isRunning ? "Signing out..." : "Sign out"}
                  </button>
                </Form>

                <Link
                  href="/"
                  class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-(--qwik-dirty-black)! shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
                >
                  Return to homepage
                </Link>
              </div>

              {signoutAction.value?.failed && (
                <div class="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {signoutAction.value.message}
                </div>
              )}

              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                <div class="rounded-xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Secure
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    Your active session will be properly closed.
                  </p>
                </div>

                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Simple
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    One action, then back to the public site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Logout from Learn Qwik",
  description: "Sign out of your Learn Qwik account securely.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/auth/logout/",
  type: "website",
  robots: "noindex, nofollow",
});
