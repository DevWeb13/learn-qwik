import { component$ } from "@builder.io/qwik";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import BtMenuHeaderOfMain from "./btMenuHeaderOfMain";

export default component$(() => {
  return (
    <div class="style_container relative z-10 mb-4 h-[67px] w-full max-w-[1072px] lg:-mx-12 lg:mb-8">
      <aside
        class="bg-vercel-200 style_nonSticky__jA3GX z-10 flex h-[52px] w-full max-w-[1072px] items-center rounded-full px-3 py-3 lg:h-[auto] lg:w-full"
        style="background-clip: padding-box;"
      >
        <div class="md:hidden">
          <BtMenuHeaderOfMain classStyle="button_base button_button reset_reset geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert" />
        </div>
        <div class="hidden md:block">
          <nav aria-label="Main" data-orientation="horizontal" dir="ltr">
            <div style="position: relative;">
              <ul data-orientation="horizontal" dir="ltr">
                <li>
                  <span
                    class="tooltip_container"
                    data-testid="legacy/tooltip-trigger"
                    data-version="v1"
                    tabIndex={-1}
                  >
                    <BtMenuHeaderOfMain classStyle="button_base reset_reset button_button reset_reset style_button__ft10U geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert" />
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-3 mr-4 hidden h-8 w-[1px] lg:block"
        ></div>
        <div class="ml-3 flex items-center gap-3 lg:ml-0">
          <div class="relative hidden lg:block">
            <BookSvg small />
          </div>
          <div class="animation-fadeIn flex flex-col">
            <p
              class="text_wrapper text_truncate"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.8125rem; --xs-text-line-height: 1.125rem; --xs-text-weight: 500; --xs-text-letter-spacing: initial; --sm-text-size: 0.8125rem; --sm-text-line-height: 1.125rem; --sm-text-weight: 500; --sm-text-letter-spacing: initial; --smd-text-size: 0.8125rem; --smd-text-line-height: 1.125rem; --smd-text-weight: 500; --smd-text-letter-spacing: initial; --md-text-size: 0.8125rem; --md-text-line-height: 1.125rem; --md-text-weight: 500; --md-text-letter-spacing: initial; --lg-text-size: 0.875rem; --lg-text-line-height: 1.25rem; --lg-text-weight: 500; --lg-text-letter-spacing: initial;"
            ></p>
            <p
              class={`text_wrapper text_truncate`}
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
            >
              Introduction
            </p>
          </div>
        </div>
        <div class="animation-fadeIn ml-auto hidden flex-col lg:flex">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; --text-align: right;"
          >
            0%
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-600); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; --text-align: right;"
          >
            0/16 chapters
          </p>
        </div>
        <div class="ml-auto mr-2 lg:hidden">
          <div
            class="gauge_circle gauge_animate"
            data-geist-progress-circle=""
            data-version="v1"
            style="--circle-size: 100px; --circumference: 267.0353755551324; --percent-to-px: 2.670353755551324px; --gap-percent: 0; --offset-factor: 0;"
          >
            <svg
              fill="none"
              height="20"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="20"
            >
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke="var(--ds-gray-alpha-400)"
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke="var(--ds-blue-700)"
                style="opacity: 0; --stroke-percent: 0;"
              ></circle>
            </svg>
          </div>
        </div>
        <div class="hidden lg:block">
          <div
            class="gauge_circle gauge_animate ml-4"
            data-geist-progress-circle=""
            data-version="v1"
            style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
          >
            <svg
              fill="none"
              height="32"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="32"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke="var(--ds-gray-alpha-400)"
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke="var(--ds-blue-700)"
                style="opacity: 0; --stroke-percent: 0;"
              ></circle>
            </svg>
          </div>
        </div>
        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-4 mr-3 hidden h-8 w-[1px] lg:block"
        ></div>
        <span
          class="tooltip_container"
          data-testid="legacy/tooltip-trigger"
          data-version="v1"
          tabIndex={-1}
        >
          <button
            type="submit"
            aria-label="Scroll to top"
            class="button_base reset_reset button_button reset_reset geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert"
            data-geist-button=""
            data-prefix="false"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
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
                  d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
        </span>
      </aside>
    </div>
  );
});