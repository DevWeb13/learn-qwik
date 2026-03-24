import { component$, useContext } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
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
    completedChapters,
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

    const profileCompletedChapters: CompletedChaptersType =
      version === "Legacy"
        ? (profile.value?.completedChapters ?? [])
        : (profile.value?.completedChapters2026 ?? []);

    const resolvedCompletedChapters =
      completedChapters ?? profileCompletedChapters;

    const completedCount = resolvedCompletedChapters.length;
    const totalChapters = chapters.value.length;

    const completedSet = new Set(resolvedCompletedChapters);

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

    const buttonLabel = title === "" ? text : `Start Chapter ${goToChapter}`;

    const startChapterNumber = firstIncompleteChapter?.id ?? 0;

    const progressMeta =
      title === ""
        ? completedCount > 0
          ? `${completedCount} / ${totalChapters} chapters completed`
          : `Start from chapter ${startChapterNumber}`
        : `${completedCount} / ${totalChapters} chapters completed`;

    const buttonClass = [
      "group relative inline-flex w-full items-center overflow-hidden rounded-md border transition-all duration-300",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      goToChapter ? "md:w-auto" : "",
      disabled
        ? "cursor-not-allowed border-gray-200 opacity-60 shadow-none"
        : isLegacy
          ? [
              "border-(--qwik-dark-blue)/18",
              "shadow-[0_18px_45px_rgba(0,108,233,0.16)]",
              "hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(0,108,233,0.24)]",
              "focus-visible:ring-(--qwik-dark-blue)/25",
            ].join(" ")
          : [
              "border-(--qwik-dark-purple)/18",
              "shadow-[0_18px_45px_rgba(113,63,194,0.18)]",
              "hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(113,63,194,0.28)]",
              "focus-visible:ring-(--qwik-dark-purple)/25",
            ].join(" "),
    ].join(" ");

    const surfaceClass = [
      "relative flex w-full items-center gap-3 overflow-hidden rounded-md px-4 py-3.5",
      goToChapter ? "md:min-w-[320px]" : "",
      disabled
        ? "bg-gray-200"
        : isLegacy
          ? "bg-[linear-gradient(135deg,var(--qwik-dark-blue)_0%,var(--qwik-light-blue)_135%)]"
          : "bg-[linear-gradient(135deg,var(--qwik-dark-purple)_0%,var(--qwik-light-purple)_135%)]",
    ].join(" ");

    const indicatorShellClass = [
      "relative z-[1] inline-flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full border bg-white/96",
      "shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_8px_20px_rgba(17,24,39,0.10)]",
      isLegacy
        ? "border-white/70 text-(--qwik-dark-blue)"
        : "border-white/70 text-(--qwik-dark-purple)",
    ].join(" ");

    const arrowShellClass = [
      "relative z-[1] inline-flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-white",
      "shadow-[0_8px_22px_rgba(17,24,39,0.12)] transition-all duration-300",
      disabled
        ? "text-gray-400"
        : isLegacy
          ? "text-(--qwik-dark-blue) group-hover:translate-x-1 group-hover:scale-[1.04]"
          : "text-(--qwik-dark-purple) group-hover:translate-x-1 group-hover:scale-[1.04]",
    ].join(" ");

    const labelWrapClass = "relative z-[1] min-w-0 flex-1 text-left";
    const labelClass =
      "block text-[15px] font-semibold leading-5 tracking-[0.01em] text-white md:text-base";
    const metaClass = "mt-1 block text-xs font-medium leading-5 text-white/82";

    const progressVersion = version === "2026" ? "2026 Edition" : "Legacy";

    const content = (
      <div class={surfaceClass}>
        <span class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_36%)]" />
        <span class="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/35" />

        <span class={indicatorShellClass}>
          <ProgressCircle
            completed={resolvedCompletedChapters}
            onlyCircle
            colorCircle="var(--ds-gray-200)"
            responsive="both"
            version={progressVersion}
          />
        </span>

        <span class={labelWrapClass}>
          <span class={labelClass}>{buttonLabel}</span>
          <span class={metaClass}>{progressMeta}</span>
        </span>

        <span class={arrowShellClass}>
          <svg
            data-testid="geist-icon"
            height="18"
            width="18"
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
