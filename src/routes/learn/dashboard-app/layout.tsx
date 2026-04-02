import { component$, Slot, useComputed$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import Feedback from "~/components/UI/feedback/feedback";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import { CHAPTERS } from "~/constants/chapters";

export default component$(() => {
  const location = useLocation();

  const chapterId = useComputed$(() => {
    const currentPath = location.url.pathname;
    const basePath = "/learn/dashboard-app/";

    if (!currentPath.startsWith(basePath)) {
      return null;
    }

    const chapter =
      currentPath === basePath
        ? CHAPTERS.find((item) => item.uri === "")
        : CHAPTERS.find((item) => `${basePath}${item.uri}/` === currentPath);

    return chapter?.id ?? null;
  });

  const currentChapterId = chapterId.value;

  return (
    <main class="relative w-full  px-4 py-4   lg:py-10">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute left-1/2 top-0 -translate-x-1/2 opacity-90">
          <HomeBackground />
        </div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_45%)]" />
      </div>
      <HeaderOfMain />

      <div
        class={`relative  flex w-full flex-col gap-8 py-6 lg:gap-4 lg:flex-row lg:justify-between lg:py-10 lg:pl-10`}
      >
        <section
          class={`w-full mx-auto overflow-hidden lg:w-[calc(100%-300px)] max-w-5xl`}
        >
          <div
            class="overflow-hidden rounded-2xl border border-(--qwik-dark-blue)/25 bg-white"
            style={{ boxShadow: "var(--qwik-shadow-soft)" }}
          >
            <div class="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12 pb-0!">
              <Slot />
            </div>
          </div>

          {currentChapterId !== null ? (
            <div class="mt-6 rounded-2xl border border-(--qwik-dark-blue)/25 bg-white px-5 py-6 shadow-sm sm:px-8">
              <Feedback
                courseVersion="Legacy"
                chapterNumber={currentChapterId}
              />
            </div>
          ) : null}
        </section>

        <DesktopStickyAd topPosition="top-20 lg:top-24" />
      </div>

      <MobileStickyAd />
    </main>
  );
});
