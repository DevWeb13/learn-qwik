// src/components/UI/modalLink/modalLink2026.tsx

import type { Signal } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { CompletedChaptersType } from "../../../types/completedChapters";

interface ModalLink2026Props {
  id: number;
  title: string;
  uri: string;
  completedChapters: CompletedChaptersType;
  active: boolean;
  showSig: Signal<boolean>;
}

export const ModalLink2026 = component$<ModalLink2026Props>(
  ({ id, title, uri, completedChapters, active, showSig }) => {
    return (
      <Link
        class="group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 hover:bg-gray-100"
        href={
          uri
            ? `/learn/dashboard-app-2026/${uri}/`
            : `/learn/dashboard-app-2026/`
        }
        key={id}
        onClick$={() => {
          showSig.value = false;
        }}
      >
        <div
          aria-hidden="true"
          class={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${active ? "bg-blue-900 text-gray-50" : "bg-blue-300 text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"}  text-sm font-medium text-blue-900  `}
        >
          {completedChapters.includes(id) ? (
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
        <div class="flex flex-col">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            {title.split(":")[0]}
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            {title.split(":")[1]}
          </p>
        </div>
      </Link>
    );
  },
);
