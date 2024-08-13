import { component$ } from "@builder.io/qwik";

interface EmailSvgProps {
  width?: number;
  height?: number;
}

export const EmailSvg = component$<EmailSvgProps>(
  ({ height = 16, width = 16 }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        preserveAspectRatio="xMidYMid meet"
        height={height}
        width={width}
        viewBox="0 0 40 40"
      >
        <g>
          <path d="m33.4 13.4v-3.4l-13.4 8.4-13.4-8.4v3.4l13.4 8.2z m0-6.8q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h26.8z" />
        </g>
      </svg>
    );
  },
);
