// src/routes/auth/login/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Form, routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import { Message } from "~/components/UI/message/message";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useSignUpOrLoginWithMagicLinkAction = routeAction$(
  async (dataform, requestEvent) => {
    // Get de the data from the form
    const email = dataform.emailMagicLink;

    const supabase = createClient(requestEvent);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: requestEvent.url.origin,
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
    // termsMagicLink: z.string().optional(),
  }),
);

export default component$(() => {
  const signUpOrLoginWithMagicLinkAction =
    useSignUpOrLoginWithMagicLinkAction();

  return (
    <main class="relative flex w-full flex-grow flex-col items-center overflow-hidden py-12">
      <div class="absolute bottom-[100px] left-1/2 z-[-1] -translate-x-1/2 md:bottom-0">
        <div class="block dark:hidden">
          <HomeBackground />
        </div>
        <div class="hidden dark:block">
          <HomeBackground />
        </div>
      </div>
      <h1 class="mb-4  text-center text-4xl font-semibold md:mb-8 md:max-w-[100%] md:text-6xl">
        Login to <span class="text-blue-500">Learn Qwik</span>
      </h1>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white px-4 py-8 shadow sm:rounded-sm sm:px-10">
          <div class="relative py-5">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">
                Connect with email and Magic Link
              </span>
            </div>
          </div>

          <Form action={signUpOrLoginWithMagicLinkAction} class="space-y-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700"
                for="emailMagicLink"
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
                  class="block w-full appearance-none rounded-sm border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  disabled={signUpOrLoginWithMagicLinkAction.isRunning}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={signUpOrLoginWithMagicLinkAction.isRunning}
                class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
              >
                Connect <ArrowRightEndOnRectangle />
              </button>
              <p class="mt-1 text-center text-xs text-gray-500">
                No password required. Authorize via email.
              </p>
            </div>
            {signUpOrLoginWithMagicLinkAction.isRunning && (
              <Message
                message={{
                  message: "Login in progress...",
                  status: "notice",
                }}
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
        </div>
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
