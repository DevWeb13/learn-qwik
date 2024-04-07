import { $, component$, useStore, useTask$ } from "@builder.io/qwik";
import { CHAPTERS } from "~/constants/chapters";

interface BookSvgTextProps {
  completed: number[];
}

export const BookSvgText = component$<BookSvgTextProps>(({ completed }) => {
  const store = useStore({
    nextChapterTitle: (CHAPTERS[0].title.split(":")[0] + ":") as string | null,
    nextChapterSubtitle: CHAPTERS[0].title.split(":")[1] as string | null,
  });
  const findNextChapter = $(() => {
    return Math.max(...completed) + 1;
  });

  useTask$(async ({ track }) => {
    track(() => completed.length);
    // console.log("completed length into DisplayNextChapter: ", completed.length);
    if (completed.length !== 0) {
      const nextChapterIndex = await findNextChapter();
      store.nextChapterTitle =
        CHAPTERS[nextChapterIndex - 1].title.split(":")[0] + ":";
      store.nextChapterSubtitle =
        CHAPTERS[nextChapterIndex - 1].title.split(":")[1];
    }
  });

  return (
    <div class="absolute left-[34px] top-4 max-w-[100px]">
      <p
        class="text_wrapper"
        data-version="v1"
        style="--text-color:var(--ds-gray-1000);--text-size:1.125rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600;color:#000;max-width:80px"
      >
        Learn Qwik
      </p>
      <div class="animate-fadeIn">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; font-size: 11px; color: rgb(102, 102, 102); padding-top: 8px;"
        >
          {store.nextChapterTitle}
        </p>
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; font-size: 11px; color: rgb(102, 102, 102); line-height: 1;"
        >
          {store.nextChapterSubtitle}
        </p>
      </div>
    </div>
  );
});
