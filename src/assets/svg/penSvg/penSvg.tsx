import { component$ } from "@builder.io/qwik";

interface PenSvgProps {
  width?: number;
  height?: number;
  classList?: string;
}

export const PenSvg = component$<PenSvgProps>(({ width = 16, height = 16 }) => (
  <svg
    data-testid="geist-icon"
    height={height}
    stroke-linejoin="round"
    viewBox="0 0 16 16"
    width={width}
    style="color: currentcolor;"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2803 0.719661L11.75 0.189331L11.2197 0.719661L1.09835 10.841C0.395088 11.5442 0 12.4981 0 13.4926V15.25V16H0.75H2.50736C3.50192 16 4.45575 15.6049 5.15901 14.9016L15.2803 4.78032L15.8107 4.24999L15.2803 3.71966L12.2803 0.719661ZM9.81066 4.24999L11.75 2.31065L13.6893 4.24999L11.75 6.18933L9.81066 4.24999ZM8.75 5.31065L2.15901 11.9016C1.73705 12.3236 1.5 12.8959 1.5 13.4926V14.5H2.50736C3.1041 14.5 3.67639 14.2629 4.09835 13.841L10.6893 7.24999L8.75 5.31065Z"
      fill="currentColor"
    ></path>
  </svg>
));
