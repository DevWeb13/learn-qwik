// src/components/learn/DisplayNextChapter/displayNextChapter.tsx

import { component$ } from "@builder.io/qwik";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface DisplayNextChapterProps {
  completed: number[];
  version?: "2026" | "Legacy";
  compact?: boolean;
}

export const DisplayNextChapter = component$<DisplayNextChapterProps>(
  ({ completed = [], version = "Legacy", compact = false }) => {
    const chapters = version === "2026" ? CHAPTERS2026 : CHAPTERS;
    const completedSet = new Set(completed);

    const nextChapter =
      chapters.find((chapter) => !completedSet.has(chapter.id)) ?? null;

    if (!nextChapter) {
      return (
        <div class="animate-fadeIn flex min-w-0 flex-1 flex-col">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
            Course status
          </p>
          <p class="mt-2 text-base font-semibold leading-snug text-(--qwik-dirty-black)">
            All chapters completed
          </p>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            You have completed all available chapters.
          </p>
        </div>
      );
    }

    const titleParts = nextChapter.title.split(":");
    const chapterLabel = titleParts[0]?.trim() || "Next chapter";
    const chapterTitle =
      titleParts.length > 1
        ? titleParts.slice(1).join(":").trim()
        : nextChapter.title;

    const compactDescription =
      nextChapter.description.split(".")[0]?.trim() +
      (nextChapter.description.includes(".") ? "." : "");

    return (
      <div class="animate-fadeIn flex min-w-0 flex-1 flex-col">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
          {chapterLabel}
        </p>

        <p class="mt-2 text-base font-semibold leading-snug text-(--qwik-dirty-black)">
          {chapterTitle}
        </p>

        <p class="mt-2 text-sm leading-6 text-gray-600">
          {compact ? compactDescription : nextChapter.description}
        </p>
      </div>
    );
  },
);
