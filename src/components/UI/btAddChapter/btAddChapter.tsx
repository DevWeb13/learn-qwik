// src/components/UI/btAddChapter/btAddChapter.tsx

import { Slot, component$, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import {
  Chapters2026Context,
  ChaptersContext,
  useProfile,
} from "~/routes/layout";
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

    const profile = useProfile();
    const isAuthenticated = Boolean(profile.value);

    const navigate = useNavigate();
    const putCompletedChapters = usePutCompletedChapters();

    const uriLink =
      version === "Legacy" ? "dashboard-app" : "dashboard-app-2026";

    const isLegacy = version === "Legacy";
    const hasProgress = completedChapters.length > 0;

    const completedSet = new Set(completedChapters);

    const firstIncompleteChapter =
      chapters.value.find((chapter) => !completedSet.has(chapter.id)) ?? null;

    const targetChapter =
      title === ""
        ? firstIncompleteChapter
        : (chapters.value.find((chapter) => chapter.id === goToChapter) ??
          null);

    const nextUri = targetChapter?.uri ?? "";
    const href = nextUri
      ? `/learn/${uriLink}/${nextUri}/`
      : `/learn/${uriLink}/`;

    const shouldSaveBeforeNavigate =
      title !== "" && isAuthenticated && goToChapter > 0;

    function generateText() {
      if (title === "") {
        return text;
      }

      return `${completedChapters.length > 0 ? "Resume Learning" : text} ${goToChapter}`;
    }

    const buttonLabel = generateText();

    const buttonClass = [
      "group relative inline-flex w-full items-center rounded-lg border p-1.5 transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      goToChapter ? "md:w-auto" : "",
      disabled
        ? "cursor-not-allowed opacity-60"
        : isLegacy
          ? [
              "border-(--qwik-dark-blue)/14 bg-white text-(--qwik-dirty-black)",
              "hover:-translate-y-0.5 hover:border-(--qwik-dark-blue)/28 hover:shadow-lg hover:shadow-black/5",
              "focus-visible:ring-(--qwik-dark-blue)/20",
            ].join(" ")
          : [
              "border-(--qwik-dark-purple)/60 bg-white text-(--qwik-dirty-black)",
              "hover:-translate-y-0.5 hover:border-(--qwik-dark-purple)/100 hover:shadow-lg hover:shadow-(--qwik-dark-purple)/8",
              "focus-visible:ring-(--qwik-dark-purple)/20",
            ].join(" "),
    ].join(" ");

    const innerClass = [
      "flex w-full items-center gap-3 rounded-[0.95rem] px-1 py-1",
      goToChapter ? "md:min-w-64" : "",
    ].join(" ");

    const indicatorShellClass = [
      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
      isLegacy
        ? "border-(--qwik-dark-blue)/10 bg-(--qwik-light-blue)/12 text-(--qwik-dark-blue)"
        : "border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/12 text-(--qwik-dark-purple)",
    ].join(" ");

    const arrowShellClass = [
      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
      disabled
        ? "border-gray-200 bg-gray-100 text-gray-400"
        : isLegacy
          ? "border-(--qwik-dark-blue) bg-(--qwik-dark-blue) text-white group-hover:translate-x-0.5"
          : "border-(--qwik-dark-purple) bg-(--qwik-dark-purple) text-white group-hover:translate-x-0.5",
    ].join(" ");

    const labelClass =
      "min-w-0 flex-1 text-center text-sm font-semibold leading-none text-(--qwik-dirty-black)";

    const indicator = hasProgress ? (
      <span class="inline-flex items-center justify-center leading-none">
        <Slot />
      </span>
    ) : (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        style="color: currentColor;"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          opacity="0.35"
        />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    );

    const content = (
      <div class={innerClass}>
        <span class={indicatorShellClass}>{indicator}</span>

        <span class={labelClass}>{buttonLabel}</span>

        <span class={arrowShellClass}>
          <svg
            data-testid="geist-icon"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            style="color: currentColor;"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    );

    return (
      <div class={`w-full ${goToChapter ? "md:w-fit" : ""}`}>
        {disabled ? (
          <button
            disabled
            aria-label={
              goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
            }
            class={buttonClass}
          >
            {content}
          </button>
        ) : !shouldSaveBeforeNavigate ? (
          <Link
            href={href}
            aria-label={
              goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
            }
            class={buttonClass}
          >
            {content}
          </Link>
        ) : (
          <button
            onClick$={async () => {
              const completedChapter = goToChapter - 1;

              const result = await putCompletedChapters.submit({
                completedChapter,
                version,
              });

              if (!result.value.success) {
                return;
              }

              await navigate(href);
            }}
            aria-label={
              goToChapter ? `Start Chapter ${goToChapter}` : "Start Learning"
            }
            class={buttonClass}
          >
            {content}
          </button>
        )}
      </div>
    );
  },
);
