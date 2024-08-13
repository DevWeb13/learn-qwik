import { component$ } from "@builder.io/qwik";

interface FacebookSvgProps {
  width?: number;
  height?: number;
}

export const FacebookSvg = component$<FacebookSvgProps>(
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
          <path d="m21.7 16.7h5v5h-5v11.6h-5v-11.6h-5v-5h5v-2.1c0-2 0.6-4.5 1.8-5.9 1.3-1.3 2.8-2 4.7-2h3.5v5h-3.5c-0.9 0-1.5 0.6-1.5 1.5v3.5z" />
        </g>
      </svg>
    );
  },
);
