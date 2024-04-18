import { component$ } from "@builder.io/qwik";

interface TSvgProps {
  width?: number;
  height?: number;
}

export const TSvg = component$<TSvgProps>(({ width = 16, height = 16 }) => (
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
      d="M2.5 0.75C1.94772 0.75 1.5 1.19772 1.5 1.75V2.75V3.5H3V2.75V2.25H7.25V13.5H6.75H6V15H6.75H7.25H8.75H9.25H10V13.5H9.25H8.75V2.25H13.25V2.75V3.5H14.75V2.75V1.75C14.75 1.19771 14.3023 0.75 13.75 0.75H2.5Z"
      fill="currentColor"
    />
  </svg>
));
