import { component$ } from "@builder.io/qwik";

interface FileSvgProps {
  width?: number;
  height?: number;
  classList?: string;
}

export const FileSvg = component$<FileSvgProps>(
  ({ width = 24, height = 24 }) => (
    <svg
      class="with-icon_icon__MHUeb"
      data-testid="geist-icon"
      fill="none"
      height={height}
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width={width}
      style="color: currentcolor; width: 16px; height: 16px;"
    >
      <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
      <path d="M13 2v7h7"></path>
    </svg>
  ),
);
