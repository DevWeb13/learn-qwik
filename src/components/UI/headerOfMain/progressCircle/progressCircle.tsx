import { component$ } from "@builder.io/qwik";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface ProgressCircleProps {
  completed: number[];
  onlyCircle?: boolean;
  colorCircle?: string;
  colorProgressCircle?: string;
  responsive?: "smallOnly" | "largeOnly" | "both";
  version?: "2026 Edition" | "Legacy";
}

export default component$<ProgressCircleProps>(
  ({
    completed = [],
    onlyCircle = false,
    colorCircle = "var(--ds-gray-200)",
    colorProgressCircle,
    responsive = "both",
    version,
  }) => {
    const totalChapters =
      version === "2026 Edition" ? CHAPTERS2026.length : CHAPTERS.length;

    const completedChapters = completed.length;
    const percentageCompleted =
      totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;

    const progressColor =
      colorProgressCircle ??
      (version === "2026 Edition"
        ? "var(--qwik-dark-purple)"
        : "var(--qwik-dark-blue)");

    const renderCircle = (
      size: number,
      radius: number,
      strokeWidth: number,
    ) => {
      const circumference = 2 * Math.PI * radius;
      const dashOffset = circumference * (1 - percentageCompleted / 100);

      return (
        <svg
          fill="none"
          height={size}
          width={size}
          viewBox="0 0 100 100"
          style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke-width={strokeWidth}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="gauge_arcSecondary"
            stroke={colorCircle}
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke-width={strokeWidth}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="gauge_arc"
            data-geist-progress-circle-fg=""
            stroke={progressColor}
            fill="none"
            style={{
              strokeDasharray: `${circumference}`,
              strokeDashoffset: `${dashOffset}`,
            }}
          />
        </svg>
      );
    };

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
          class={`${
            responsive === "smallOnly" ? "" : "lg:hidden"
          } ${responsive === "largeOnly" ? "hidden" : ""}`}
        >
          <div
            class="gauge_circle gauge_animate"
            data-geist-progress-circle=""
            data-version="v1"
          >
            {renderCircle(28, 42, 14)}
          </div>
        </div>

        <div
          class={`
            ${responsive === "largeOnly" ? "block" : "hidden"} 
            ${responsive === "smallOnly" ? "" : "lg:block"}
          `}
        >
          <div
            class="gauge_circle gauge_animate"
            data-geist-progress-circle=""
            data-version="v1"
          >
            {renderCircle(36, 42, 12)}
          </div>
        </div>
      </>
    );
  },
);
