// src/components/learn/DisplayNextChapter/displayNextChapter.tsx

import {
  component$,
  useStore,
  useStyles$,
  useTask$,
  $,
} from "@builder.io/qwik";

import { CHAPTERS } from "~/constants/chapters";

interface DisplayNextChapterProps {
  completed: number[];
}

export default component$<DisplayNextChapterProps>(({ completed = [] }) => {
  const store = useStore({
    nextChapterTitle: CHAPTERS[0].title as string | null,
    nextChapterDescription: CHAPTERS[0].description as string | null,
  });
  const findNextChapter = $(() => {
    return Math.max(...completed) + 1;
  });

  useTask$(async ({ track }) => {
    track(() => completed.length);
    // console.log("completed length into DisplayNextChapter: ", completed.length);
    if (completed.length !== 0) {
      const nextChapterIndex = await findNextChapter();
      store.nextChapterTitle = CHAPTERS[nextChapterIndex - 1].title;
      store.nextChapterDescription = CHAPTERS[nextChapterIndex - 1].description;
    }
  });

  useStyles$(``);
  return (
    <div class="animate-fadeIn mr-2 flex min-w-0 flex-1 flex-shrink flex-col">
      <p
        class="text_wrapper text_truncate"
        data-version="v1"
        style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; height: 20px;"
      >
        {store.nextChapterTitle}
      </p>
      <p
        class="text_wrapper flex"
        data-version="v1"
        style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
      >
        {store.nextChapterDescription}
      </p>
    </div>
  );
});
