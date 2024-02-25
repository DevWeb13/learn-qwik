import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <svg
      fill="none"
      height="32"
      stroke-width="2"
      viewBox="0 0 100 100"
      width="32"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke-width="10"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge_arcSecondary"
        stroke="var(--ds-gray-300)"
        style="opacity: 1; --stroke-percent: 99;"
      ></circle>
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke-width="10"
        stroke-dashoffset="0"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gauge_arc__UGu7u"
        data-geist-progress-circle-fg=""
        stroke="var(--ds-blue-700)"
        style="opacity: 0; --stroke-percent: 0;"
      ></circle>
    </svg>
  );
});
