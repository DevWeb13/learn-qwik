// src/components/UI/modalLink/modalLink2026.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { CompletedChaptersType } from "../../../types/completedChapters";

interface ModalLink2026Props {
  id: number;
  title: string;
  uri: string;
  completedChapters: CompletedChaptersType;
  showCompletedState: boolean;
  active: boolean;
}

export const ModalLink2026 = component$<ModalLink2026Props>(
  ({ id, title, uri, completedChapters, showCompletedState, active }) => {
    const [chapterLabelRaw, chapterTitleRaw] = title.split(":");
    const chapterLabel = chapterLabelRaw.trim() || `Chapter ${id}`;
    const chapterTitle = chapterTitleRaw.trim() || chapterLabel;

    const isCompleted = showCompletedState && completedChapters.includes(id);

    return (
      <Link
        href={
          uri
            ? `/learn/dashboard-app-2026/${uri}/`
            : `/learn/dashboard-app-2026/`
        }
        key={id}
        aria-current={active ? "page" : undefined}
        class={`group flex items-center gap-3 rounded-2xl border px-3 py-3 transition-colors ${
          active
            ? "border-(--qwik-dark-purple)/18 bg-vercel-200"
            : "border-transparent hover:border-(--qwik-dark-purple)/10 hover:bg-gray-100/80"
        }`}
      >
        <div
          aria-hidden="true"
          class={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
            active ? "bg-blue-900 text-gray-50" : "bg-blue-100 text-blue-900"
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
            <span>{id}</span>
          )}
        </div>

        <div class="min-w-0">
          <p class="truncate text-xs text-(--ds-gray-900)">{chapterLabel}</p>
          <p class="truncate text-sm font-medium text-(--ds-gray-1000)">
            {chapterTitle}
          </p>
        </div>
      </Link>
    );
  },
);
