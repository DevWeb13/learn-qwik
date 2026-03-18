// src/routes/auth/login/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Form,
  routeAction$,
  useNavigate,
  z,
  zod$,
} from "@builder.io/qwik-city";
import LearnQwikLogo from "~/assets/img/android-chrome-192x192.png?jsx";
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { Message } from "~/components/UI/message/message";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export const useSignUpOrLoginWithMagicLinkAction = routeAction$(
  async (dataform, requestEvent) => {
    const email = dataform.emailMagicLink;
    const supabase = createClient(requestEvent);
    const next = requestEvent.url.searchParams.get("next") ?? "/";

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${requestEvent.url.origin}/auth/confirm/?next=${next}`,
      },
    });

    if (error) {
      return requestEvent.fail(500, {
        failed: true,
        message: "Error: " + error.message,
        status: "error",
      });
    }

    return {
      success: true,
      message:
        "Check your email, then click the link to sign in and return to Learn Qwik. You can now close this page.",
      status: "success",
    };
  },
  zod$({
    emailMagicLink: z.string().email({ message: "Invalid email" }),
  }),
);

export const useLoginWithGoogleAction = routeAction$(
  async (_, requestEvent) => {
    const supabase = createClient(requestEvent);
    const next = requestEvent.url.searchParams.get("next") || "/";

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${requestEvent.url.origin}/auth/callback/?next=${next}`,
      },
    });

    if (error) {
      return requestEvent.fail(500, {
        error: true,
        message: "Login failed. Please try again later.",
      });
    }

    return {
      success: true,
      url: data.url,
      message: "Login successful.",
    };
  },
);

export default component$(() => {
  const signUpOrLoginWithMagicLinkAction =
    useSignUpOrLoginWithMagicLinkAction();
  const loginWithGoogleAction = useLoginWithGoogleAction();
  const nav = useNavigate();

  const magicLinkResponse = signUpOrLoginWithMagicLinkAction.value;
  const hasMagicLinkMessage = Boolean(
    magicLinkResponse?.fieldErrors?.emailMagicLink ||
    magicLinkResponse?.message,
  );
  const isMagicLinkSuccess = magicLinkResponse?.status === "success";
  const shouldDisableMagicLinkButton =
    signUpOrLoginWithMagicLinkAction.isRunning || isMagicLinkSuccess;

  return (
    <main class="relative min-h-[calc(100dvh - var(--header-height))] overflow-hidden bg-white">
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
                    Sign in to your account
                  </h1>
                </div>

                <div class="shrink-0">
                  <LearnQwikLogo class="size-12" />
                </div>
              </div>

              <p class="mt-3 text-sm leading-6 text-gray-600">
                Continue with Google or use a Magic Link sent by email.
              </p>

              <div class="mt-8 space-y-6">
                <Form
                  action={loginWithGoogleAction}
                  onSubmitCompleted$={async () => {
                    if (loginWithGoogleAction.value?.success) {
                      await nav(loginWithGoogleAction.value.url);
                    }
                  }}
                >
                  <button
                    type="submit"
                    disabled={loginWithGoogleAction.isRunning}
                    class="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-(--qwik-dark-purple) px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-(--qwik-light-purple) disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    <svg
                      class="h-5 w-5 rounded-full bg-white p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="#4285F4"
                        d="M488 261.8c0-17.8-1.6-35-4.6-51.8H249v98h134.4c-5.8 31-23.1 57.2-49.4 74.6v62.1h79.8c46.7-43 73.7-106.4 73.7-182.9z"
                      />
                      <path
                        fill="#34A853"
                        d="M249 492c66.4 0 122.1-22 162.8-59.8l-79.8-62.1c-22.3 14.9-50.8 23.7-83 23.7-63.9 0-118-43.2-137.3-101.2H30.5v63.4C70.7 426 152.1 492 249 492z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M111.7 303.6c-5.5-16.4-8.6-33.7-8.6-51.6s3.1-35.2 8.6-51.6v-63.4H30.5C10.9 172.8 0 209.1 0 256s10.9 83.2 30.5 118.4l81.2-63.4z"
                      />
                      <path
                        fill="#EA4335"
                        d="M249 112.3c35.9 0 68.1 12.3 93.5 36.4l70.2-70.2C368.8 36.7 313.1 12 249 12 152.1 12 70.7 78 30.5 157.6l81.2 63.4C131 155.5 185.1 112.3 249 112.3z"
                      />
                    </svg>
                    {loginWithGoogleAction.isRunning
                      ? "Redirecting..."
                      : "Continue with Google"}
                  </button>
                </Form>

                <div class="relative py-1">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-200" />
                  </div>
                  <div class="relative flex justify-center">
                    <span class="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
                      Or
                    </span>
                  </div>
                </div>

                <Form
                  action={signUpOrLoginWithMagicLinkAction}
                  class="space-y-5"
                >
                  <div>
                    <label
                      for="emailMagicLink"
                      class="mb-2 block text-sm font-medium text-(--qwik-dirty-black)"
                    >
                      Email address
                    </label>

                    <input
                      id="emailMagicLink"
                      name="emailMagicLink"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      disabled={shouldDisableMagicLinkButton}
                      class="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-(--qwik-dirty-black) shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-(--qwik-dark-purple)/40 focus:ring-4 focus:ring-(--qwik-light-purple)/15 disabled:cursor-not-allowed disabled:bg-gray-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={shouldDisableMagicLinkButton}
                    class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-(--qwik-dirty-black) shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <ArrowRightEndOnRectangle />
                    {signUpOrLoginWithMagicLinkAction.isRunning
                      ? "Sending Magic Link..."
                      : isMagicLinkSuccess
                        ? "Magic Link sent"
                        : "Continue with Magic Link"}
                  </button>

                  <div class="min-h-18">
                    {signUpOrLoginWithMagicLinkAction.isRunning ? (
                      <Message
                        message={{
                          message: "Sending your Magic Link...",
                          status: "notice",
                        }}
                      />
                    ) : hasMagicLinkMessage ? (
                      <Message
                        message={{
                          message:
                            magicLinkResponse?.fieldErrors?.emailMagicLink ||
                            magicLinkResponse?.message,
                          status: magicLinkResponse?.status || "error",
                        }}
                      />
                    ) : (
                      <p class="text-xs leading-5 text-gray-500">
                        You will receive an email with a link to sign in and
                        return to the app.
                      </p>
                    )}
                  </div>
                </Form>
              </div>

              <div class="mt-8 grid gap-3 sm:grid-cols-2">
                <div class="rounded-xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Google
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    Fastest option to sign in and continue immediately.
                  </p>
                </div>

                <div class="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-(--qwik-dirty-black)">
                    Magic Link
                  </p>
                  <p class="mt-2 text-sm leading-6 text-gray-700">
                    Receive an email, click the link inside, and come back
                    already connected.
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
  title: "Login to Learn Qwik",
  description:
    "Login to Learn Qwik and access your course progress, account area, and authentication-protected content.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/auth/login/",
  type: "website",
  robots: "noindex, nofollow",
});
