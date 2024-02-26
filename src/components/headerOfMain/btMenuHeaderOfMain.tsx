import { component$ } from "@builder.io/qwik";

interface BtMenuHeaderOfMainProps {
  classStyle: string;
}

export default component$<BtMenuHeaderOfMainProps>(({ classStyle }) => {
  return (
    <div
      aria-label="View Chapters"
      class={classStyle}
      data-geist-button
      style="--geist-icon-size: 16px;"
      onPointerEnter$={(e) => {
        const target = e.target as HTMLElement; // Assertion de type pour HTMLElement
        target.setAttribute("data-hover", "");
      }}
      onPointerLeave$={(e) => {
        const target = e.target as HTMLElement; // Assertion de type pour HTMLElement
        target.removeAttribute("data-hover");
      }}
    >
      <span class="button_content button_flex">
        <svg
          data-testid="geist-icon"
          height="16"
          stroke-linejoin="round"
          viewBox="0 0 16 16"
          width="16"
          style="color: var(--ds-gray-900);"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.5 4C3.19036 4 3.75 3.44036 3.75 2.75C3.75 2.05964 3.19036 1.5 2.5 1.5C1.80964 1.5 1.25 2.05964 1.25 2.75C1.25 3.44036 1.80964 4 2.5 4ZM2.5 9.25C3.19036 9.25 3.75 8.69036 3.75 8C3.75 7.30964 3.19036 6.75 2.5 6.75C1.80964 6.75 1.25 7.30964 1.25 8C1.25 8.69036 1.80964 9.25 2.5 9.25ZM3.75 13.25C3.75 13.9404 3.19036 14.5 2.5 14.5C1.80964 14.5 1.25 13.9404 1.25 13.25C1.25 12.5596 1.80964 12 2.5 12C3.19036 12 3.75 12.5596 3.75 13.25ZM6.75 2H6V3.5H6.75H14.25H15V2H14.25H6.75ZM6.75 7.25H6V8.75H6.75H14.25H15V7.25H14.25H6.75ZM6.75 12.5H6V14H6.75H14.25H15V12.5H14.25H6.75Z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>
  );
});
