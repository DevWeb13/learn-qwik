// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import { ModalLogout } from "~/lib/qwikUI/modalLogout/modalLogout";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useSignoutAction = routeAction$(async (_, requestEvent) => {
  const supabase = createClient(requestEvent);

  const { error } = await supabase.auth.signOut();
  if (error) {
    return requestEvent.fail(500, { message: "Failed to log out." });
  }

  throw requestEvent.redirect(302, "/");
});

export default component$(() => {
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
        Logged out of <span class="text-sky-600">Learn Qwik</span>
      </h1>
      <p class="mt-2 text-center text-sm text-gray-600 md:text-base">
        You have been successfully logged out.
      </p>

      <div class="mt-10 w-full max-w-md rounded-xl bg-white p-6 shadow-md">
        <div class="relative py-3">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">Logout</span>
          </div>
        </div>
        <ModalLogout />
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Logout from Learn Qwik",
  "Logout from Learn Qwik",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/auth/logout/",
);
