// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";

import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import MobileMenu from "~/components/mobile-menu/mobile-menu";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";

import type { Session } from "@auth/core/types";

export const useGetCurrentChapterIndexInString = routeLoader$(
  (requestEvent) => {
    const pathname = requestEvent.url.pathname;
    if (pathname.includes("getting-started")) return "0";
    if (pathname.includes("css-styling")) return "1";
    if (pathname.includes("optimizing-fonts-and-images")) return "2";
    if (pathname.includes("creating-layouts-and-pages")) return "3";
    if (pathname.includes("navigating-between-pages")) return "4";
    if (pathname.includes("setting-up-your-database")) return "5";
    if (pathname.includes("fetching-data")) return "6";
    if (pathname.includes("optimizing-data-fetching")) return "7";
    if (pathname.includes("streaming")) return "8";
    if (pathname.includes("adding-search-and-pagination")) return "9";
    if (pathname.includes("mutating-data")) return "10";
    return "Introduction";
  },
);

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  console.log(session);

  if (!session) {
    console.log("Redirecting to login");
    throw event.redirect(302, `/auth/login?redirectTo=${event.url.pathname}`);
  }
};

export default component$(() => {
  return (
    <>
      <main>
        <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <MobileMenu />
          <HeaderOfMain />
          <article
            class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
            style="min-height: calc(100vh - 103px);"
          >
            <Slot />
          </article>
        </div>
      </main>
    </>
  );
});
