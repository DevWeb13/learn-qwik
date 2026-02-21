// src/routes/learn/dashboard-app-2026/layout.tsxs

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import HeaderOfMain2026 from "~/components/UI/headerOfMain/headerOfMain2026";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const useGetCurrentChapterIndex2026 = routeLoader$((requestEvent) => {
  const pathname = requestEvent.url.pathname;
  if (pathname.includes("getting-started-2026")) return "0";
  if (pathname.includes("css-styling-2026")) return "1";
  if (pathname.includes("optimizing-fonts-and-images-2026")) return "2";
  if (pathname.includes("creating-layouts-and-pages-2026")) return "3";
  if (pathname.includes("navigating-between-pages-2026")) return "4";
  if (pathname.includes("setting-up-your-database-2026")) return "5";
  if (pathname.includes("fetching-data-2026")) return "6";
  if (pathname.includes("optimizing-data-fetching-2026")) return "7";
  if (pathname.includes("streaming-2026")) return "8";
  if (pathname.includes("adding-search-and-pagination-2026")) return "9";
  if (pathname.includes("mutating-data-2026")) return "10";
  return "Introduction-2026";
});

export default component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <main class="relative mx-auto max-w-full px-4 py-4 lg:py-10">
      <HeaderOfMain2026 />
      <div class="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-8 py-6 lg:flex-row lg:py-10 lg:pl-12">
        {/* Main content */}
        <section class="w-full lg:max-w-[calc(100%-300px)]">
          <Slot />
        </section>

        {/* Desktop ad */}
        {!isSubscribed && <DesktopStickyAd topPosition="top-20 lg:top-24" />}
      </div>

      {/* Mobile ad */}
      {!isSubscribed && <MobileStickyAd />}
    </main>
  );
});
