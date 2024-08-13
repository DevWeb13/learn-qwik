import { component$ } from "@builder.io/qwik";

interface LinkedInSvgProps {
  width?: number;
  height?: number;
}

export const LinkedInSvg = component$<LinkedInSvgProps>(
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
          <path d="m13.3 31.7h-5v-16.7h5v16.7z m18.4 0h-5v-8.9c0-2.4-0.9-3.5-2.5-3.5-1.3 0-2.1 0.6-2.5 1.9v10.5h-5s0-15 0-16.7h3.9l0.3 3.3h0.1c1-1.6 2.7-2.8 4.9-2.8 1.7 0 3.1 0.5 4.2 1.7 1 1.2 1.6 2.8 1.6 5.1v9.4z m-18.3-20.9c0 1.4-1.1 2.5-2.6 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.6 1.2 2.6 2.5z" />
        </g>
      </svg>
    );
  },
);
