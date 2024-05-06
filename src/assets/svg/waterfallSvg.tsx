import { component$ } from "@builder.io/qwik";

export const WaterfallSvg = component$(() => {
  return (
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
        d="M1.75 2H1V3.5H1.75H14.25H15V2H14.25H1.75ZM6 7.25H6.75H14.25H15V8.75H14.25H6.75H6V7.25ZM4 12.5H4.75H14.25H15V14H14.25H4.75H4V12.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
});
