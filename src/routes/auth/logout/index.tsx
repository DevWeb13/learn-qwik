// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";
import { ModalLogout } from "~/lib/qwikUI/modalLogout/modalLogout";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";

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
        Logout to <span class="text-blue-500">Learn Qwik</span>
      </h1>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white px-4 py-8 shadow sm:rounded-sm sm:px-10">
          <div class="relative py-5">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Logout</span>
            </div>
          </div>
          <ModalLogout />
        </div>
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
