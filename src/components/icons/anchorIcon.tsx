import { component$ } from "@builder.io/qwik";

interface AnchorIconProps {
  width?: string;
  height?: string;
}

export const AnchorIcon = component$<AnchorIconProps>(
  ({ width = "0.7em", height = "0.7em" }) => (
    <svg viewBox="0 0 16 16" height={height} width={width}>
      <g stroke-width="1.2" fill="none" stroke="currentColor">
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
        ></path>
        <path
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
        ></path>
      </g>
    </svg>
  ),
);
