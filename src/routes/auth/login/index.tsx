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
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import { Message } from "~/components/UI/message/message";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useSignUpOrLoginWithMagicLinkAction = routeAction$(
  async (dataform, requestEvent) => {
    const email = dataform.emailMagicLink;
    const supabase = createClient(requestEvent);
    const next = requestEvent.url.searchParams.get("next") ?? "/";
    console.log("next", next);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${requestEvent.url.origin}/auth/confirm?next=${next}`,
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
        "Success, check your email/spam for the confirmation link. You can close this page.",
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

  return (
    <main class="relative flex w-full flex-grow flex-col items-center justify-center overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 dark:hidden">
          <HomeBackground />
        </div>
        <div class="absolute bottom-0 left-1/2 hidden -translate-x-1/2 dark:block">
          <HomeBackground />
        </div>
      </div>

      <h1 class="text-center text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
        Welcome to <span class="text-sky-600">Learn Qwik</span>
      </h1>
      <p class="mt-2 text-center text-sm text-gray-600 md:text-base">
        Sign in to access your account and tutorials
      </p>

      <div class="mt-10 w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-md">
        <Form action={signUpOrLoginWithMagicLinkAction} class="space-y-6">
          <div>
            <label
              for="emailMagicLink"
              class="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div class="mt-1">
              <input
                id="emailMagicLink"
                name="emailMagicLink"
                type="email"
                autoComplete="email"
                required
                class="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                disabled={signUpOrLoginWithMagicLinkAction.isRunning}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={signUpOrLoginWithMagicLinkAction.isRunning}
              class="flex w-full items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-400"
            >
              <ArrowRightEndOnRectangle /> Connect
            </button>
            <p class="mt-2 text-center text-xs text-gray-500">
              A magic link will be sent to your email address.
            </p>
          </div>

          {signUpOrLoginWithMagicLinkAction.isRunning && (
            <Message
              message={{ message: "Login in progress...", status: "notice" }}
            />
          )}
          {signUpOrLoginWithMagicLinkAction.value &&
            !signUpOrLoginWithMagicLinkAction.isRunning && (
              <Message
                message={{
                  message:
                    signUpOrLoginWithMagicLinkAction.value.fieldErrors
                      ?.emailMagicLink ||
                    signUpOrLoginWithMagicLinkAction.value.message,
                  status:
                    signUpOrLoginWithMagicLinkAction.value.status || "error",
                }}
              />
            )}
        </Form>

        <div class="relative py-3">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <Form
          action={loginWithGoogleAction}
          onSubmitCompleted$={async () => {
            loginWithGoogleAction.value?.success &&
              (await nav(loginWithGoogleAction.value.url));
          }}
        >
          <button
            type="submit"
            class="flex w-full items-center justify-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:bg-gray-400"
            disabled={loginWithGoogleAction.isRunning}
          >
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              fill="currentColor"
            >
              <path d="M488 261.8c0-17.8-1.6-35-4.6-51.8H249v98h134.4c-5.8 31-23.1 57.2-49.4 74.6v62.1h79.8c46.7-43 73.7-106.4 73.7-182.9zM249 492c66.4 0 122.1-22 162.8-59.8l-79.8-62.1c-22.3 14.9-50.8 23.7-83 23.7-63.9 0-118-43.2-137.3-101.2H30.5v63.4C70.7 426 152.1 492 249 492zM111.7 303.6c-5.5-16.4-8.6-33.7-8.6-51.6s3.1-35.2 8.6-51.6v-63.4H30.5C10.9 172.8 0 209.1 0 256s10.9 83.2 30.5 118.4l81.2-63.4zM249 112.3c35.9 0 68.1 12.3 93.5 36.4l70.2-70.2C368.8 36.7 313.1 12 249 12 152.1 12 70.7 78 30.5 157.6l81.2 63.4C131 155.5 185.1 112.3 249 112.3z" />
            </svg>
            Sign in with Google
          </button>
        </Form>
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Login to Learn Qwik",
  "Login to Learn Qwik and unlock interactive tutorials, progress tracking, and premium content for Qwik developers.",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/auth/login/",
);
