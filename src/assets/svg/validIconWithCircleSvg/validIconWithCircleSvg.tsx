import { component$ } from "@builder.io/qwik";

interface ValidIconWithCircleSvgProps {
  width?: number;
  height?: number;
}

export const ValidIconWithCircleSvg = component$<ValidIconWithCircleSvgProps>(
  ({ width = 16, height = 16 }) => (
    <svg
      data-testid="geist-icon"
      height={height}
      stroke-linejoin="round"
      style="color:currentColor"
      viewBox="0 0 16 16"
      width={width}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
);
