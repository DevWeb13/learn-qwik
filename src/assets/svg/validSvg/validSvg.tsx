import { component$ } from "@builder.io/qwik";

interface ValidSvgProps {
  width?: number;
  height?: number;
}

export default component$<ValidSvgProps>(({ width = 24, height = 24 }) => {
  return (
    <svg
      class="with_icon_icon"
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
      style="color: currentcolor; width: 20px; height: 20px;"
    >
      <path d="M20 6L9 17l-5-5"></path>
    </svg>
  );
});
