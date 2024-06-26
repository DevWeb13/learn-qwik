import { component$ } from "@builder.io/qwik";

interface TerminalSvgProps {
  width?: number;
  height?: number;
  classList?: string;
}

export const TerminalSvg = component$<TerminalSvgProps>(
  ({ width = 24, height = 24, classList = "" }) => (
    <svg
      class={classList}
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
      <path d="M4 17l6-6-6-6"></path>
      <path d="M12 19h8"></path>
    </svg>
  ),
);
