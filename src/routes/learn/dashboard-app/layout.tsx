// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";

import { routeLoader$ } from "@builder.io/qwik-city";
import { DesktopStickyAdMulti } from "~/components/desktopStickyAdMulti/desktopStickyAdMulti";
import { MobileStickyAdMulti } from "~/components/mobileStickyAdMulti/mobileStickyAdMulti";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

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

export default component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  return (
    <main class="relative mx-auto max-w-full px-4 py-4 md:px-8 lg:px-4 lg:py-10">
      <HeaderOfMain />
      <div
        class={`relative mx-auto flex w-full flex-col  gap-8 py-6 lg:max-w-7xl lg:flex-row lg:py-10 ${!isSubscribed ? "lg:pl-12 xl:px-12" : "justify-center lg:px-12"}`}
      >
        {/* Main content */}
        <section
          class={`w-full overflow-hidden ${!isSubscribed ? "lg:max-w-[calc(100%-300px)]" : "w-full"}`}
        >
          <Slot />
        </section>

        {/* Desktop ad */}
        {!isSubscribed && (
          <DesktopStickyAdMulti topPosition="top-20 lg:top-24" />
        )}
      </div>

      {/* Mobile ad */}
      {!isSubscribed && <MobileStickyAdMulti />}
    </main>
  );
});
