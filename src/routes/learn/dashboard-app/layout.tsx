import { component$, Slot, useComputed$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { DesktopStickyAdMulti } from "~/components/desktopStickyAdMulti/desktopStickyAdMulti";
import { MobileStickyAdMulti } from "~/components/mobileStickyAdMulti/mobileStickyAdMulti";
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
    <main class="relative mx-auto max-w-full bg-(--qwik-light-blue)/2 px-4 py-4 md:px-8 lg:px-4 lg:py-10">
      <HeaderOfMain />
      <div
        class={`relative mx-auto flex w-full flex-col gap-8 py-6 lg:max-w-7xl lg:flex-row lg:py-10 lg:pl-12 xl:px-12`}
      >
        <section class={`w-full overflow-hidden lg:max-w-[calc(100%-300px)]`}>
          <Slot />

          {currentChapterId !== null ? (
            <Feedback courseVersion="Legacy" chapterNumber={currentChapterId} />
          ) : null}
        </section>

        <DesktopStickyAdMulti topPosition="top-20 lg:top-24" />
      </div>

      <MobileStickyAdMulti />
    </main>
  );
});
