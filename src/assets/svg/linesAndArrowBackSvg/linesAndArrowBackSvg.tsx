import { component$ } from "@builder.io/qwik";

interface LinesAndArrowBackSvgProps {
  width?: number;
  height?: number;
}

export const LinesAndArrowBackSvg = component$<LinesAndArrowBackSvgProps>(
  ({ width = 16, height = 16 }) => (
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
        d="M1.75 12H1V10.5H1.75H5.25H6V12H5.25H1.75ZM1.75 7.75H1V6.25H1.75H4.25H5V7.75H4.25H1.75ZM1.75 3.5H1V2H1.75H7.25H8V3.5H7.25H1.75ZM12.5303 14.7803C12.2374 15.0732 11.7626 15.0732 11.4697 14.7803L9.21967 12.5303L8.68934 12L9.75 10.9393L10.2803 11.4697L11.25 12.4393V2.75V2H12.75V2.75V12.4393L13.7197 11.4697L14.25 10.9393L15.3107 12L14.7803 12.5303L12.5303 14.7803Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
);
