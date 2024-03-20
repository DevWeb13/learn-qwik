import { component$ } from "@builder.io/qwik";

interface CopySvgProps {
  width?: number;
  height?: number;
}

export default component$<CopySvgProps>(({ width = 24, height = 24 }) => {
  return (
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
      aria-hidden="true"
      style="color: currentcolor; width: 20px; height: 20px; --darkreader-inline-stroke: currentColor; --darkreader-inline-color: currentcolor;"
      data-darkreader-inline-stroke=""
      data-darkreader-inline-color=""
    >
      <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
    </svg>
  );
});
