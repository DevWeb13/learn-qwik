// src/components/UI/headerOfMain/progressCircle/progressCircle.tsx

import { component$ } from "@builder.io/qwik";
import { useGetProgressCircleCookie } from "~/routes/learn/dashboard-app/layout";

import type { ProgressCircle } from "~/types/types";

interface ProgressCircleProps {}

export default component$<ProgressCircleProps>(() => {
  const progressCircleData = useGetProgressCircleCookie();

  const { completed } = progressCircleData.value as ProgressCircle;

  const totalChapters = 16;
  const completedChapters = completed.length;
  const percentageCompleted = (completedChapters / totalChapters) * 100;

  console.log({ completed });

  return (
    <>
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
      <div class="ml-auto mr-2 lg:hidden">
        <div
          class="gauge_circle gauge_animate"
          data-geist-progress-circle=""
          data-version="v1"
          style="--circle-size: 100px; --circumference: 267.0353755551324; --percent-to-px: 2.670353755551324px; --gap-percent: 0; --offset-factor: 0;"
        >
          <svg
            fill="none"
            height="20"
            stroke-width="2"
            viewBox="0 0 100 100"
            width="20"
          >
            <circle
              cx="50"
              cy="50"
              r="42.5"
              stroke-width="15"
              stroke-dashoffset="0"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="gauge_arcSecondary"
              stroke="var(--ds-gray-alpha-400)"
              style="opacity: 1; --stroke-percent: 99;"
            ></circle>
            <circle
              cx="50"
              cy="50"
              r="42.5"
              stroke-width="15"
              stroke-dashoffset="0"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="gauge_arc"
              data-geist-progress-circle-fg=""
              stroke="var(--ds-blue-700)"
              style="opacity: 0; --stroke-percent: 0;"
            ></circle>
          </svg>
        </div>
      </div>
      <div class="hidden lg:block">
        <div
          class="gauge_circle gauge_animate ml-4"
          data-geist-progress-circle=""
          data-version="v1"
          style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
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
              stroke="var(--ds-gray-alpha-400)"
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
              stroke="var(--ds-blue-700)"
              style={{
                opacity: 1,
                strokeDasharray: `282.7433388230814`,
                strokeDashoffset: `${282.7433388230814 * (1 - percentageCompleted / 100)}`,
              }}
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
});
