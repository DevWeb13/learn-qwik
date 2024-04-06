// src/components/UI/btAddChapter/btAddChapter.tsx

import type { Signal } from "@builder.io/qwik";
import { Slot, component$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

import {
  ChaptersContext,
  useSetCompletedChaptersCookie,
} from "~/routes/layout";
import type { ChapterType } from "~/types/chapterType";

interface BtAddChapterProps {
  goToChapter: number;
  title: string;
  text?: string;
  completed?: number[];
  disabled?: boolean;
}

export default component$<BtAddChapterProps>(
  ({
    goToChapter,
    title,
    text = "Start Chapter",
    completed = [],
    disabled = false,
  }) => {
    const nav = useNavigate();
    const action = useSetCompletedChaptersCookie();

    const chapters: Signal<ChapterType[]> = useContext(ChaptersContext);

    let nextUri = title.toLowerCase().replace(/\s+/g, "-");

    // Go to the next chapter into landing page and there are completed chapters
    if (title === "" && completed.length > 0) {
      nextUri = chapters.value[Math.max(...completed)].uri;
    }

    function generateText(
      text: string,
      completed: number[],
      goToChapter: number,
    ) {
      return `${completed.length > 0 ? "Resume Learning" : text} ${goToChapter ? goToChapter : ""}`;
    }

    return (
      <div class={`w-full ${goToChapter && "md:w-fit"}`}>
        <button
          onClick$={async () => {
            if (goToChapter > 1) {
              await action.submit({ goToChapter });
              chapters.value[goToChapter - 2].isCompleted = true;
            }
            return nav(`/learn/dashboard-app/${nextUri}`);
          }}
          aria-label={
            goToChapter
              ? "Start Chapter" + " " + goToChapter.toString()
              : "Start Learning"
          }
          class="button_base reset_reset button_button  button_large button_invert"
          data-geist-button=""
          data-prefix="false"
          data-suffix="true"
          data-version="v1"
          style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
          disabled={disabled}
        >
          {completed.length ? <Slot /> : null}

          <span class="button_content">
            {generateText(text, completed, goToChapter)}
          </span>

          {disabled ? (
            <span>🚧</span>
          ) : (
            <span class="button_suffix">
              <svg
                data-testid="geist-icon"
                height="16"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style="color: currentcolor;"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          )}
        </button>
      </div>
    );
  },
);
