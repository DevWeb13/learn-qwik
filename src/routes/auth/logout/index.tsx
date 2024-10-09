// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";
import { ModalLogout } from "~/lib/qwikUI/modalLogout/modalLogout";

export const useSignoutAction = routeAction$(async (data, requestEvent) => {
  console.log("requestEvent", requestEvent.url);
  const supabase = createClient(requestEvent);

  await supabase.auth.signOut();

  throw requestEvent.redirect(302, "/");
});

export default component$(() => {
  return (
    <div class="align-center flex flex-grow flex-col py-12 sm:px-6 lg:px-8">
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
    </div>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Logout from Learn Qwik",
  "Logout from Learn Qwik",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/auth/logout/",
);
