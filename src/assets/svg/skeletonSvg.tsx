import { component$ } from "@builder.io/qwik";

export const SkeletonSvg = component$(() => {
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
        d="M14.5 2.5H1.5V5H3V6H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H5V12.5H6V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6H14V5H14.5V2.5ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5ZM5 9V7.5H6V9H5ZM5 11.5V10H6V11.5H5ZM6.5 5V6H8V5L6.5 5ZM4 5V6H5.5V5H4ZM9 5V6H10.5V5H9ZM11.5 5V6H13V5H11.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
});
