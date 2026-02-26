import { $, component$, useStore, useTask$ } from "@builder.io/qwik";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface BookSvgTextProps {
  completed: number[];
}

export const BookSvgText = component$<BookSvgTextProps>(({ completed }) => {
  const store = useStore({
    nextChapterTitle: (CHAPTERS2026[0].title.split(":")[0] + ":") as
      | string
      | null,
    nextChapterSubtitle: CHAPTERS2026[0].title.split(":")[1] as string | null,
  });
  const findNextChapter = $(() => {
    return Math.max(...completed) + 1;
  });

  useTask$(async ({ track }) => {
    track(() => completed.length);

    if (completed.length !== 0) {
      const nextChapterIndex = await findNextChapter();
      store.nextChapterTitle =
        CHAPTERS2026[nextChapterIndex - 1].title.split(":")[0] + ":";
      store.nextChapterSubtitle =
        CHAPTERS2026[nextChapterIndex - 1].title.split(":")[1];
    }
  });

  return (
    <div class="absolute left-[34px] flex h-full max-w-[100px] flex-col justify-around overflow-hidden py-3">
      <p
        class="text_wrapper"
        data-version="v1"
        style="--text-color:var(--ds-gray-1000);--text-size:1.125rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600;color:#000;max-width:80px"
      >
        Learn <span class="text-[var(--qwik-dark-blue)]">Qwik</span>
      </p>
      <div class="animate-fadeIn">
        <p class="text-sm font-bold ">{store.nextChapterTitle}</p>
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.50rem; --text-letter-spacing: initial; --text-weight: 400; font-size: 11px; color: rgb(102, 102, 102); line-height: 1.2;"
        >
          {store.nextChapterSubtitle}
        </p>
      </div>
      <p class="text-lg font-black text-[var(--qwik-dark-blue)]">2026</p>
    </div>
  );
});
