// src/components/UI/headerOfMain/progressCircle/progressCircle.tsx

import { component$ } from "@builder.io/qwik";

interface ProgressCircleProps {
  completed: number[];
  onlyCircle?: boolean;
  colorCircle?: string;
  colorProgressCircle?: string;
  responsive?: "smallOnly" | "largeOnly" | "both";
  version?: "2026 Edition";
}

export default component$<ProgressCircleProps>(
  ({
    completed = [],
    onlyCircle = false,
    colorCircle = "var(--ds-gray-alpha-400)",
    colorProgressCircle,
    responsive = "both",
    version,
  }) => {
    const totalChapters = 16;
    const completedChapters = completed.length;
    const percentageCompleted = (completedChapters / totalChapters) * 100;

    const progressColor =
      colorProgressCircle ??
      (version === "2026 Edition"
        ? "var(--qwik-dark-purple)"
        : "var(--qwik-dark-blue)");

    return (
      <>
        {onlyCircle ? null : (
          <div class="animation-fadeIn ml-auto hidden flex-col lg:flex">
            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; --text-align: right;"
            >
              {percentageCompleted.toFixed(0)}%
            </p>
            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-600); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; --text-align: right;"
            >
              {completedChapters}/{totalChapters} chapters
            </p>
          </div>
        )}

        <div
          class={`mr-2 ${
            responsive === "smallOnly" ? "" : "lg:hidden"
          } ${responsive === "largeOnly" ? "hidden" : ""}`}
        >
          <div
            class="gauge_circle gauge_animate"
            data-geist-progress-circle=""
            data-version="v1"
          >
            <svg
              fill="none"
              height="20"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="20"
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            >
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke={colorCircle}
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke={progressColor}
                style={{
                  opacity: 1,
                  strokeDasharray: `282.7433388230814`,
                  strokeDashoffset: `${
                    282.7433388230814 * (1 - percentageCompleted / 100)
                  }`,
                }}
              ></circle>
            </svg>
          </div>
        </div>

        <div
          class={`
            ${responsive === "largeOnly" ? "block" : "hidden"} 
            ${responsive === "smallOnly" ? "" : "lg:block"}
          `}
        >
          <div
            class="gauge_circle gauge_animate ml-4"
            data-geist-progress-circle=""
            data-version="v1"
          >
            <svg
              fill="none"
              height="32"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="32"
              style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke={colorCircle}
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke={progressColor}
                style={{
                  opacity: 1,
                  strokeDasharray: `282.7433388230814`,
                  strokeDashoffset: `${
                    282.7433388230814 * (1 - percentageCompleted / 100)
                  }`,
                }}
              ></circle>
            </svg>
          </div>
        </div>
      </>
    );
  },
);
