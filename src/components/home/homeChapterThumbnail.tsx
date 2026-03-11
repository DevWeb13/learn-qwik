import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface HomeChapterThumbnailProps {
  href: string;
  numberOrIcon: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  version?: "2026 Edition" | "Legacy";
}

export const HomeChapterThumbnail = component$<HomeChapterThumbnailProps>(
  ({
    href,
    numberOrIcon,
    title,
    description,
    isCompleted = false,
    version,
  }) => {
    const is2026 = version === "2026 Edition";
    const ctaLabel = isCompleted ? "Review chapter" : "Open chapter";

    return (
      <Link
        href={href}
        class={[
          "group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[1.75rem] border bg-white transition-all duration-300",
          "shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-xl",
          is2026
            ? "border-(--qwik-dark-purple)/12 hover:border-(--qwik-dark-purple)/30"
            : "border-(--qwik-dark-blue)/12 hover:border-(--qwik-dark-blue)/30",
        ]}
      >
        <div
          class={[
            "px-5 pb-5 pt-5",
            is2026
              ? "bg-(--qwik-light-purple)/10"
              : "bg-(--qwik-light-blue)/10",
          ]}
        >
          <div class="flex items-start justify-between gap-4">
            <div
              class={[
                "inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em]",
                is2026
                  ? "bg-(--qwik-light-purple)/15 text-(--qwik-dark-purple)"
                  : "bg-(--qwik-light-blue)/15 text-(--qwik-dark-blue)",
              ]}
            >
              {version ?? "Course"}
            </div>

            {isCompleted ? (
              <div class="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Completed
              </div>
            ) : (
              <div class="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-500">
                Chapter {numberOrIcon}
              </div>
            )}
          </div>
        </div>

        <div class="flex flex-1 flex-col px-5 pb-5 pt-4">
          <div class="flex items-start gap-4">
            <div
              class={[
                "flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border text-lg font-semibold shadow-sm",
                is2026
                  ? "border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 text-(--qwik-dark-purple)"
                  : "border-(--qwik-dark-blue)/10 bg-(--qwik-light-blue)/10 text-(--qwik-dark-blue)",
              ]}
            >
              {numberOrIcon}
            </div>

            <div class="min-w-0">
              <h3 class="text-xl font-semibold leading-tight text-(--qwik-dirty-black)">
                {title}
              </h3>

              <p class="mt-3 text-sm leading-6 text-gray-600">{description}</p>
            </div>
          </div>

          <div class="mt-auto pt-6">
            <div class="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition-colors duration-300 group-hover:bg-gray-100">
              <div class="flex items-center justify-between gap-4">
                <p class="text-sm font-semibold text-(--qwik-dirty-black)">
                  {ctaLabel}
                </p>

                <div
                  class={[
                    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-0.5",
                    is2026
                      ? "border-(--qwik-dark-purple)/14 bg-(--qwik-light-purple)/12 text-(--qwik-dark-purple)"
                      : "border-(--qwik-dark-blue)/14 bg-(--qwik-light-blue)/12 text-(--qwik-dark-blue)",
                  ]}
                >
                  <svg
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  },
);
