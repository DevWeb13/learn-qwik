import { component$ } from "@builder.io/qwik";
import type { Option } from "../quiz";

interface IsCorrectResponseProps {
  goodResponse: Option;
  responseText: string;
}

export const IsCorrectResponse = component$<IsCorrectResponseProps>(
  ({ goodResponse, responseText }) => {
    return (
      <div class="border-gray-alpha-400 mt-6 flex w-full flex-1 flex-col items-center justify-center rounded-lg border p-8">
        <div class="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300 text-blue-900">
          {goodResponse.letter}
        </div>
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; margin: 0px;"
        >
          {goodResponse.text}
        </p>
        <span
          class="badge_badge__WnfZm badge_green-subtle__EB32o badge_lg__AebMU my-6"
          data-geist-badge=""
          data-version="v2"
        >
          <span class="badge_contentContainer__khfN_">
            <span class="badge_iconContainer__G7dN0">
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
            </span>
            Correct
          </span>
        </span>
        <p
          class="text_wrapper mx-auto w-full max-w-[380px]"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; --text-align: center;"
        >
          {responseText}
        </p>
      </div>
    );
  },
);
