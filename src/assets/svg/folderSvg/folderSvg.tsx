import { component$ } from "@builder.io/qwik";

interface FolderSvgProps {
  width?: number;
  height?: number;
}

export const FolderSvg = component$<FolderSvgProps>(
  ({ width = 16, height = 16 }) => (
    <svg
      data-testid="geist-icon"
      height={width}
      stroke-linejoin="round"
      viewBox="0 0 16 16"
      width={height}
      style="color: currentcolor;"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5 7.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V7.5H14.5ZM14.5 6V4H8.83333C8.29241 4 7.76607 3.82456 7.33333 3.5L6 2.5H1.5V6H14.5ZM0 1H1.5H6.16667C6.38304 1 6.59357 1.07018 6.76667 1.2L8.23333 2.3C8.40643 2.42982 8.61696 2.5 8.83333 2.5H14.5H16V4V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
);
