import { component$ } from "@builder.io/qwik";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface BookSvgTextProps {
  completed: number[];
}

export const BookSvgText = component$<BookSvgTextProps>(
  ({ completed = [] }) => {
    const nextChapterIndex =
      completed.length > 0 ? Math.max(...completed) + 1 : 1;

    const nextChapter =
      nextChapterIndex <= CHAPTERS2026.length
        ? CHAPTERS2026[nextChapterIndex - 1]
        : CHAPTERS2026[CHAPTERS2026.length - 1];

    const [titlePart = "", subtitlePart = ""] = nextChapter.title.split(":");

    const nextChapterTitle = titlePart + ":";
    const nextChapterSubtitle = subtitlePart.trim();

    return (
      <div class="absolute left-8.5 flex h-full max-w-25 flex-col justify-around overflow-hidden py-3">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color:var(--ds-gray-1000);--text-size:1.125rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600;color:#000;max-width:80px"
        >
          Learn <span class="text-(--qwik-dark-blue)">Qwik</span>
        </p>

        <div class="animate-fadeIn">
          <p class="text-sm font-bold">{nextChapterTitle}</p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.50rem; --text-letter-spacing: initial; --text-weight: 400; font-size: 11px; color: rgb(102, 102, 102); line-height: 1.2;"
          >
            {nextChapterSubtitle}
          </p>
        </div>

        <p class="text-lg font-black text-(--qwik-dark-blue)">2026</p>
      </div>
    );
  },
);
