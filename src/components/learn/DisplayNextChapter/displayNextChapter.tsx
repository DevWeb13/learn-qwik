import { component$, useStore } from "@builder.io/qwik";
import { CHAPTERS } from "~/constants/chapters";

interface DisplayNextChapterProps {
  completed: number[];
}

export const DisplayNextChapter = component$<DisplayNextChapterProps>(
  ({ completed = [] }) => {
    // ✅ Trouver le prochain chapitre en prenant le plus haut numéro complété +1
    const nextChapterIndex =
      completed.length > 0 ? Math.max(...completed) + 1 : 1;

    const store = useStore({
      nextChapterTitle:
        nextChapterIndex <= CHAPTERS.length
          ? CHAPTERS[nextChapterIndex - 1].title // ✅ -1 car tableau indexé à 0
          : "All chapters completed",
      nextChapterDescription:
        nextChapterIndex <= CHAPTERS.length
          ? CHAPTERS[nextChapterIndex - 1].description // ✅ -1 pour l'index correct
          : "You have completed all available chapters.",
    });

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
  },
);
