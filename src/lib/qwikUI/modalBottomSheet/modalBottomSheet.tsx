// src/lib/qwikUI/modalBottomSheet/modalBottomSheet.tsx

import type { PropsOf } from "@builder.io/qwik";
import {
  $,
  component$,
  Slot,
  useComputed$,
  useOnDocument,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import { useProfile } from "~/routes/layout";
import type { ChapterType } from "../../../types/chapterType";

interface ModalBottomSheetProps {
  chapters: ChapterType[];
}

export default component$<ModalBottomSheetProps>(({ chapters }) => {
  const showSig = useSignal(false);
  const location = useLocation();
  const profile = useProfile();

  const hasProfile = useComputed$(() => Boolean(profile.value?.id));

  const completedChapters = useComputed$(
    () => profile.value?.completedChapters || [],
  );

  const loginHref = useComputed$(() => {
    const nextPath = `${location.url.pathname}${location.url.search}`;
    return `/auth/login/?next=${encodeURIComponent(nextPath)}`;
  });

  const closeModal = $(() => {
    showSig.value = false;
  });

  useOnDocument(
    "keydown",
    $((event) => {
      if (event.key === "Escape" && showSig.value) {
        showSig.value = false;
      }
    }),
  );

  useTask$(({ track }) => {
    track(() => location.url.pathname);
    track(() => location.url.search);

    if (showSig.value) {
      showSig.value = false;
    }
  });

  return (
    <>
      <span
        class="contents"
        role="button"
        tabIndex={0}
        onClick$={() => {
          showSig.value = true;
        }}
        onKeyDown$={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showSig.value = true;
          }
        }}
      >
        <Slot />
      </span>

      {showSig.value && (
        <div
          class="fixed inset-0 z-[120]"
          aria-modal="true"
          role="dialog"
          aria-label="Course navigation"
        >
          <div
            class="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
            onClick$={closeModal}
          />

          <div class="pointer-events-none absolute inset-x-0 top-[calc(var(--header-height)+0.5rem)] bottom-[calc(env(safe-area-inset-bottom)+8.75rem)] flex items-end justify-center px-3 lg:inset-0 lg:items-center lg:p-4">
            <div
              class="pointer-events-auto relative flex h-full w-full max-w-240 flex-col rounded-[28px] border border-(--qwik-dark-purple)/10 bg-white shadow-2xl lg:h-auto lg:max-h-[85vh]"
              onClick$={(event) => {
                event.stopPropagation();
              }}
            >
              <div class="mx-auto mt-3 h-1.5 w-12 rounded-full bg-gray-300 lg:hidden"></div>

              <div class="flex items-start justify-between gap-3 border-b border-(--qwik-dark-purple)/10 p-4 md:p-5">
                <div class="flex min-w-0 flex-1 flex-col gap-3 rounded-2xl border border-(--qwik-dark-purple)/10 bg-vercel-200 p-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link href="/" class="flex min-w-0 items-center gap-3">
                    <div class="shrink-0 rounded-xl border border-(--qwik-dark-purple)/10 bg-white p-2">
                      <div class="relative h-10 w-8">
                        <BookSvg small id="modalBottomSheetLegacy" />
                      </div>
                    </div>

                    <div class="min-w-0">
                      <p class="truncate text-sm font-medium text-(--ds-gray-1000)">
                        Learn Qwik
                      </p>

                      <p class="mt-0.5 text-xs text-(--ds-gray-900)">
                        {hasProfile.value
                          ? `${completedChapters.value.length}/${chapters.length} chapters completed`
                          : "Browse the course freely"}
                      </p>
                    </div>
                  </Link>

                  {hasProfile.value ? (
                    <div class="inline-flex shrink-0 items-center rounded-full border border-(--qwik-dark-purple)/10 bg-white px-3 py-1.5 text-xs font-medium text-(--ds-gray-1000)">
                      Progress saved
                    </div>
                  ) : (
                    <Link
                      href={loginHref.value}
                      class="inline-flex shrink-0 items-center justify-center rounded-full border border-(--qwik-dark-purple)/12 bg-white px-3 py-2 text-xs font-medium text-(--ds-gray-1000) transition-colors hover:bg-gray-100"
                    >
                      <span class="sm:hidden">Sign in</span>
                      <span class="hidden sm:inline">
                        Sign in to save progress
                      </span>
                    </Link>
                  )}
                </div>

                <button
                  type="button"
                  aria-label="Close chapter navigation"
                  class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--qwik-dark-purple)/10 bg-white text-(--ds-gray-1000) transition-colors hover:bg-gray-100"
                  onClick$={closeModal}
                >
                  <CloseIcon class="h-4 w-4" />
                </button>
              </div>

              <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-6 md:px-5 md:pb-5">
                <div class="flex flex-col gap-1.5 py-4">
                  {chapters.map((chapter) => {
                    const [chapterLabelRaw, chapterTitleRaw] =
                      chapter.title.split(":");
                    const chapterLabel =
                      chapterLabelRaw?.trim() || `Chapter ${chapter.id}`;
                    const chapterTitle =
                      chapterTitleRaw?.trim() || chapterLabel;

                    const isCompleted =
                      hasProfile.value &&
                      completedChapters.value.includes(chapter.id);

                    const isActive =
                      `/learn/dashboard-app/${chapter.uri}/` ===
                      location.url.pathname;

                    return (
                      <Link
                        key={chapter.title}
                        href={
                          chapter.uri
                            ? `/learn/dashboard-app/${chapter.uri}/`
                            : `/learn/dashboard-app/`
                        }
                        aria-current={isActive ? "page" : undefined}
                        class={`group flex items-center gap-3 rounded-2xl border px-3 py-3 transition-colors ${
                          isActive
                            ? "border-(--qwik-dark-purple)/18 bg-vercel-200"
                            : "border-transparent hover:border-(--qwik-dark-purple)/10 hover:bg-gray-100/80"
                        }`}
                      >
                        <div
                          aria-hidden="true"
                          class={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                            isActive
                              ? "bg-blue-900 text-gray-50"
                              : "bg-blue-100 text-blue-900"
                          }`}
                        >
                          {isCompleted ? (
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
                                d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          ) : (
                            <span>{chapter.id}</span>
                          )}
                        </div>

                        <div class="min-w-0">
                          <p class="truncate text-xs text-(--ds-gray-900)">
                            {chapterLabel}
                          </p>
                          <p class="truncate text-sm font-medium text-(--ds-gray-1000)">
                            {chapterTitle}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div class="border-t border-(--qwik-dark-purple)/10 pt-4">
                  <button
                    type="button"
                    class="group flex w-full items-center gap-3 rounded-2xl border border-(--qwik-dark-purple)/10 bg-vercel-200 px-3 py-3 text-left transition-colors hover:border-(--qwik-dark-purple)/20 hover:bg-gray-100"
                    onClick$={closeModal}
                  >
                    <div
                      aria-hidden="true"
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-900"
                    >
                      <svg
                        data-testid="geist-icon"
                        height="16"
                        stroke-linejoin="round"
                        viewBox="0 0 16 16"
                        width="16"
                        style="color: currentcolor;"
                      >
                        <path
                          d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>

                    <div class="min-w-0">
                      <p class="text-sm font-medium text-(--ds-gray-1000)">
                        Next steps 🚧
                      </p>
                      <p class="hidden text-xs text-(--ds-gray-900) sm:block">
                        Coming soon
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export function CloseIcon(props: PropsOf<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 6l12 12M18 6L6 18"
      />
    </svg>
  );
}
