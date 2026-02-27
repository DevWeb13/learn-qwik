// src/components/UI/btAddChapter/btAddChapter.tsx

import { Slot, component$, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { Chapters2026Context, ChaptersContext } from "~/routes/layout";

import { usePutCompletedChapters } from "~/routes/learn/layout";
import type { CompletedChaptersType } from "~/types/completedChapters";

interface BtAddChapterProps {
  goToChapter: number;
  title: string;
  text?: string;
  completedChapters?: CompletedChaptersType;
  disabled?: boolean;
  version: "2026" | "Legacy";
}

export const BtAddChapter = component$<BtAddChapterProps>(
  ({
    goToChapter,
    title,
    text = "Start Chapter",
    completedChapters = [],
    disabled = false,
    version,
  }) => {
    const chapters = useContext(
      version === "Legacy" ? ChaptersContext : Chapters2026Context,
    );
    const navigate = useNavigate();
    const putCompletedChapters = usePutCompletedChapters();
    const uriLink =
      version === "Legacy" ? "dashboard-app" : "dashboard-app-2026";

    let nextUri = goToChapter
      ? version === "Legacy"
        ? title.toLowerCase().replace(/\s+/g, "-")
        : title.toLowerCase().replace(/\s+/g, "-") + "-2026"
      : "";

    // 🔥 Restauration de la logique pour la page d'accueil
    if (title === "") {
      if (completedChapters.length > 0) {
        const nextIndex = Math.max(...completedChapters) + 1;

        nextUri =
          nextIndex < chapters.value.length
            ? chapters.value[nextIndex].uri
            : "";
      } else {
        nextUri = chapters.value[0]?.uri || "";
      }
    }

    function generateText(
      text: string,
      completedChapters: number[],
      goToChapter: number,
    ) {
      return `${completedChapters.length > 0 ? "Resume Learning" : text} ${
        goToChapter ? goToChapter : ""
      }`;
    }

    return (
      <div class={`w-full ${goToChapter ? "md:w-fit" : ""}`}>
        {disabled ? (
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

            <span class="button_content">
              {generateText(text, completedChapters, goToChapter)}
            </span>

            <span>🚧</span>
          </button>
        ) : title === "" ? ( // 🌟 Utilisation de Link pour la page d'accueil
          <Link
            href={
              nextUri ? `/learn/${uriLink}/${nextUri}/` : `/learn/${uriLink}/`
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

            <span class="button_content">
              {generateText(text, completedChapters, goToChapter)}
            </span>

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
        ) : (
          <button
            onClick$={async () => {
              const completedChapter = goToChapter - 1;

              const result = await putCompletedChapters.submit({
                completedChapter,
                version,
              });

              if (result.value.success) {
                navigate(`/learn/${uriLink}/${nextUri}/`);
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
            <span class="button_content">
              {generateText(text, completedChapters, goToChapter)}
            </span>

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
        )}
      </div>
    );
  },
);
