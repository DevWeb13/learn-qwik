// src/routes/learn/dashboard-app-2026/layout.tsxs

import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import HeaderOfMain2026 from "~/components/UI/headerOfMain/headerOfMain2026";
import { createClient } from "~/lib/supabase/server";
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

export const usePutCompletedChapters2026 = routeAction$(
  async (data, requestEvent) => {
    const { completedChapter2026 } = data;
    const profile = requestEvent.sharedMap.get("profile");
    const userId = profile?.id;
    const completedChapters2026 = profile?.completedChapter2026 || [];

    if (!userId) {
      return requestEvent.fail(400, { error: "Missing parameters" });
    }

    if (completedChapters2026.includes(Number(completedChapter2026))) {
      return { success: true };
    }

    const supabase = createClient(requestEvent);

    const updatedChapters2026 = [
      ...new Set([...completedChapters2026, Number(completedChapter2026)]),
    ];

    const { error } = await supabase
      .from("profiles")
      .update({ completedChapters2026: updatedChapters2026 })
      .eq("id", userId);

    if (error) {
      return requestEvent.fail(500, { error: "Failed to update" });
    }

    requestEvent.sharedMap.set("profile", {
      ...profile,
      completedChapters2026: updatedChapters2026,
    });

    return { success: true };
  },
);

export default component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="max-w-screen relative mx-auto px-4 py-4 md:py-10">
      <HeaderOfMain2026 />
      <main class="relative mx-auto flex w-full max-w-screen-2xl flex-col gap-8 py-6 md:flex-row md:px-12 md:py-10">
        {/* Main content */}
        <section class="w-full md:max-w-[calc(100%-300px)]">
          <article class="min-h-[70vh]">
            <Slot />
          </article>
        </section>

        {/* Desktop ad */}
        {!isSubscribed && <DesktopStickyAd topPosition="top-20 lg:top-24" />}
      </main>

      {/* Mobile ad */}
      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});
