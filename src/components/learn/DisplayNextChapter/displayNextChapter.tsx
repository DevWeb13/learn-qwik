import { component$ } from "@builder.io/qwik";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface DisplayNextChapterProps {
  completed: number[];
  version?: "2026" | "Legacy";
}

export const DisplayNextChapter = component$<DisplayNextChapterProps>(
  ({ completed = [], version = "Legacy" }) => {
    const chapters = version === "2026" ? CHAPTERS2026 : CHAPTERS;

    const nextChapterIndex =
      completed.length > 0 ? Math.max(...completed) + 1 : 1;

    const nextChapter =
      nextChapterIndex <= chapters.length
        ? chapters[nextChapterIndex - 1]
        : null;

    const nextChapterTitle = nextChapter
      ? nextChapter.title
      : "All chapters completed";

    const nextChapterDescription = nextChapter
      ? nextChapter.description
      : "You have completed all available chapters.";

    return (
      <div class="animate-fadeIn mr-2 flex min-w-0 flex-1 flex-shrink flex-col">
        <p
          class="text_wrapper text_truncate"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; height: 20px;"
        >
          {nextChapterTitle}
        </p>
        <p
          class="text_wrapper flex"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
        >
          {nextChapterDescription}
        </p>
      </div>
    );
  },
);
