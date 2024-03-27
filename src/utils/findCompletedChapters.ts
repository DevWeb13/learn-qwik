import type { ChapterType } from "~/types/chapterType";
import type { CompletedChaptersType } from "~/types/completedChapters";

export const findCompletedChapters = (chapters: ChapterType[]) => {
  const completedChapter: CompletedChaptersType = [];
  chapters.forEach((chapter) => {
    if (chapter.isCompleted) {
      completedChapter.push(chapter.id);
    }
  });
  return completedChapter;
};
