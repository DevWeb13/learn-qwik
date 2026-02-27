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
      completed.length > 0 ? Math.max(...completed) + 1 : 0;

    const nextChapter =
      nextChapterIndex < chapters.length ? chapters[nextChapterIndex] : null;

    const nextChapterTitle = nextChapter
      ? nextChapter.title
      : "All chapters completed";

    const nextChapterDescription = nextChapter
      ? nextChapter.description
      : "You have completed all available chapters.";

    return (
      <div class="animate-fadeIn mr-2 flex min-w-0 flex-1 shrink flex-col">
        <p class="text_wrapper text_truncate">{nextChapterTitle}</p>
        <p class="text_wrapper flex">{nextChapterDescription}</p>
      </div>
    );
  },
);
