// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import MobileMenu from "~/components/mobile-menu/mobile-menu";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";

export const useGetCurrentChapterIndexInString = routeLoader$(
  (requestEvent) => {
    const pathname = requestEvent.url.pathname;
    if (pathname.includes("getting-started")) return "0";
    if (pathname.includes("css-styling")) return "1";
    if (pathname.includes("optimizing-fonts-and-images")) return "2";
    if (pathname.includes("creating-layouts-and-pages")) return "3";
    if (pathname.includes("navigating-between-pages")) return "4";
    return "Introduction";
  },
);

export default component$(() => {
  return (
    <>
      <main>
        <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <MobileMenu />
          <HeaderOfMain />
          <Slot />
        </div>
      </main>
    </>
  );
});
