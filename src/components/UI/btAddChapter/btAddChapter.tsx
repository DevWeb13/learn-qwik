// src/components/UI/btAddChapter/btAddChapter.tsx

import { Slot, component$, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { ChaptersContext } from "~/routes/layout";
import { usePutCompletedChapters } from "~/routes/learn/dashboard-app/layout";
import type { CompletedChaptersType } from "../../../types/completedChapters";

interface BtAddChapterProps {
  goToChapter: number;
  title: string;
  userId?: string;
  text?: string;
  completedChapters?: CompletedChaptersType;
  disabled?: boolean;
}

export default component$<BtAddChapterProps>(
  ({
    goToChapter,
    title,
    text = "Start Chapter",
    userId = null,
    completedChapters = [],
    disabled = false,
  }) => {
    const chapters = useContext(ChaptersContext);
    const navigate = useNavigate();
    const putCompletedChapters = usePutCompletedChapters();

    let nextUri = title.toLowerCase().replace(/\s+/g, "-");
    if (title === "" && completedChapters.length > 0) {
      const lastCompleted = Math.max(...completedChapters);
      nextUri = chapters.value[lastCompleted]?.uri || "";
    }

    const generateText = () =>
      `${completedChapters.length > 0 ? "Resume Learning" : text} ${goToChapter ? goToChapter : ""}`;

    const renderDisabledButton = () => (
      <button
        disabled
        aria-label={
          goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
        }
        class="button_base reset_reset button_button button_large button_invert"
        data-geist-button=""
        data-prefix="false"
        data-suffix="true"
        data-version="v1"
        style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
      >
        {completedChapters.length ? <Slot /> : null}
        <span class="button_content">{generateText()}</span>
        <span>🚧</span>
      </button>
    );

    const renderLinkButton = () => (
      <Link
        href={
          nextUri ? `/learn/dashboard-app/${nextUri}/` : "/learn/dashboard-app/"
        }
        aria-label={
          goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
        }
        class="button_base reset_reset button_button button_large button_invert"
        data-geist-button=""
        data-prefix="false"
        data-suffix="true"
        data-version="v1"
        style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
      >
        {completedChapters.length ? <Slot /> : null}
        <span class="button_content">{generateText()}</span>
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
      </Link>
    );

    const renderActiveButton = () => (
      <button
        onClick$={async () => {
          const completedChapter = goToChapter - 1;
          if (completedChapter < 1) {
            navigate(`/learn/dashboard-app/${nextUri}/`);
            return;
          }

          const result = await putCompletedChapters.submit({
            userId,
            completedChapter,
          });

          if (result.value.success) {
            navigate(`/learn/dashboard-app/${nextUri}/`);
          }
        }}
        aria-label={
          goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
        }
        class="button_base reset_reset button_button button_large button_invert"
        data-geist-button=""
        data-prefix="false"
        data-suffix="true"
        data-version="v1"
        style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
      >
        <span class="button_content">{generateText()}</span>
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
      </button>
    );

    let content;
    if (disabled) {
      content = renderDisabledButton();
    } else if (title === "") {
      content = renderLinkButton();
    } else {
      content = renderActiveButton();
    }

    return (
      <div class={`w-full ${goToChapter ? "md:w-fit" : ""}`}>{content}</div>
    );
  },
);
