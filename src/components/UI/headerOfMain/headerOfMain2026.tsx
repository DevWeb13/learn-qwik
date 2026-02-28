import { component$, useComputed$, useContext } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import { useScrollYPosition } from "~/hooks/useScrollYPosition";

import { ModalBottomSheet2026 } from "~/lib/qwikUI/modalBottomSheet/modalBottomSheet2026";
import { Chapters2026Context, useProfile } from "~/routes/layout";
import BtMenuHeaderOfMain from "./btMenuHeaderOfMain/btMenuHeaderOfMain";
import ProgressCircle from "./progressCircle/progressCircle";

export default component$(() => {
  const scrollY = useScrollYPosition();
  const location = useLocation();

  const chapters2026 = useContext(Chapters2026Context);
  const profile = useProfile();

  // 🔥 Calcul dynamique basé sur l’URL
  const currentIndex = useComputed$(() => {
    const pathname = location.url.pathname;
    const basePath = "/learn/dashboard-app-2026/";

    if (pathname === basePath) return 0;

    const slug = pathname.replace(basePath, "").split("/")[0];

    const index = chapters2026.value.findIndex(
      (chapter) => chapter.uri === slug,
    );

    return index >= 0 ? index : 0;
  });

  const title = useComputed$(() => {
    return chapters2026.value[currentIndex.value].title;
  });

  return (
    <div class="relative z-10 mb-4 flex h-(--header-of-main-height) w-full items-center justify-center lg:mb-8">
      <aside
        class={
          scrollY.value > 80
            ? "bg-vercel-200 style_shadow__EXUWc fixed left-4 right-4 top-4 z-10 flex h-(--header-of-main-height) max-w-268 items-center rounded-full px-3 py-3 shadow-sm lg:mx-auto"
            : "bg-vercel-200 style_nonSticky__jA3GX z-10 flex h-(--header-of-main-height) w-full max-w-268 items-center rounded-full px-3 py-3 lg:w-full"
        }
        style="background-clip: padding-box;"
      >
        <div class="md:hidden">
          <ModalBottomSheet2026 chapters={chapters2026.value}>
            <BtMenuHeaderOfMain classStyle="button_base button_button reset_reset geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert" />
          </ModalBottomSheet2026>
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
                    <ModalBottomSheet2026 chapters={chapters2026.value}>
                      <BtMenuHeaderOfMain classStyle="button_base reset_reset button_button reset_reset style_button__ft10U geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert" />
                    </ModalBottomSheet2026>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-3 mr-4 hidden h-8 w-px lg:block"
        ></div>

        <div class="ml-3 flex grow items-center gap-3 lg:ml-0">
          <div class="relative hidden lg:block">
            <BookSvg small id="headerOfMain" version="2026 Edition" />
          </div>

          <div class="animation-fadeIn flex flex-col">
            <p
              class="text_wrapper text_truncate"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.8125rem; --xs-text-line-height: 1.125rem; --xs-text-weight: 500; --xs-text-letter-spacing: initial; --sm-text-size: 0.8125rem; --sm-text-line-height: 1.125rem; --sm-text-weight: 500; --sm-text-letter-spacing: initial; --smd-text-size: 0.8125rem; --smd-text-line-height: 1.125rem; --smd-text-weight: 500; --smd-text-letter-spacing: initial; --md-text-size: 0.8125rem; --md-text-line-height: 1.125rem; --md-text-weight: 500; --md-text-letter-spacing: initial; --lg-text-size: 0.875rem; --lg-text-line-height: 1.25rem; --lg-text-weight: 500; --lg-text-letter-spacing: initial;"
            >
              {title.value.split(":")[0] + ":"}
            </p>

            <p
              class="text_wrapper text_truncate"
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
            >
              {title.value.split(":")[1]}
            </p>
          </div>
        </div>

        <ProgressCircle
          completed={profile.value?.completedChapters2026 || []}
          version="2026 Edition"
        />

        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-4 mr-3 hidden h-8 w-px lg:block"
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
            onClick$={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
