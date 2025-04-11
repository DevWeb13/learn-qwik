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

    // 🔥 Restauration de la logique pour la page d'accueil
    if (title === "" && completedChapters.length > 0) {
      const lastCompleted = Math.max(...completedChapters);
      nextUri = chapters.value[lastCompleted]?.uri || "";
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

    console.log("nextUri", nextUri);

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
              nextUri
                ? `/learn/dashboard-app/${nextUri}/`
                : "/learn/dashboard-app/"
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
              console.log("userId", userId);
              console.log("goToChapter", goToChapter);
              const completedChapter = goToChapter - 1; // ✅ Stocke le chapitre complété

              if (completedChapter < 1) {
                navigate(`/learn/dashboard-app/${nextUri}/`);
                return;
              }

              const result = await putCompletedChapters.submit({
                userId,
                completedChapter, // ✅ Enregistre le bon chapitre
              });

              if (result.value.success) {
                // ✅ Redirige vers le chapitre suivant
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
