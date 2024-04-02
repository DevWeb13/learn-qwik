// src/routes/learn/index.tsx

import type { Signal } from "@builder.io/qwik";
import { component$, useContext } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import HeroLinesDark from "~/assets/svg/heroLinesDark/heroLinesDark";
import HeroLinesLight from "~/assets/svg/heroLinesLight/heroLinesLight";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import BtAddChapter from "~/components/UI/btAddChapter/btAddChapter";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
import DisplayNextChapter from "~/components/learn/DisplayNextChapter/displayNextChapter";

import MobileMenu from "~/components/mobile-menu/mobile-menu";
import { ChaptersContext } from "~/routes/layout";
import type { ChapterType } from "~/types/chapterType";

import type { CompletedChaptersType } from "~/types/completedChapters";
import { findCompletedChapters } from "~/utils/findCompletedChapters";

export default component$(() => {
  const chapters: Signal<ChapterType[]> = useContext(ChaptersContext);

  const completedChapter: CompletedChaptersType = findCompletedChapters(
    chapters.value,
  );

  return (
    <main>
      <MobileMenu />
      <div class="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-20">
        <div class="flex flex-col items-center px-4">
          <h1 class="mb-4 max-w-[80%] text-center text-4xl font-semibold md:mb-8 md:max-w-[100%] md:text-6xl">
            Start building with{" "}
            <a
              href="https://qwik.dev"
              class="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qwik
            </a>
          </h1>
          <div class="max-w-xl text-center text-gray-900 md:mb-16">
            Go from beginner to expert by learning the foundations of Qwik and
            building a fully functional demo website that uses all the latest
            features.
          </div>
        </div>
        <div class="relative flex h-full w-full flex-col items-center justify-center px-4">
          <div class="absolute bottom-[100px] left-1/2 -translate-x-1/2 md:bottom-0">
            <div class="block dark:hidden">
              <HomeBackground />
            </div>
            <div class="hidden dark:block">
              <HomeBackground />
            </div>
          </div>
          <div class="bg-vercel-100 absolute left-0 right-0 top-[57%] h-[350px]  md:top-[62.7%] md:h-[200px]"></div>
          <div class="relative flex w-full flex-col items-center pt-20 md:pt-8">
            <div class="dark:bg-vercel-100 relative flex w-full flex-col items-center rounded-[12px] bg-white p-4 shadow-md lg:w-[713px]">
              <HeroLinesLight />
              <HeroLinesDark />
              <div class="relative -mt-[56px] flex w-full justify-center md:-mt-14">
                <div class="relative">
                  <div class="absolute left-[34px] top-4 max-w-[100px]">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1.125rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600;color:#000;max-width:80px"
                    >
                      Learn Qwik
                    </p>
                    <div class="animate-fadeIn">
                      <p
                        class="text_wrapper"
                        data-version="v1"
                        style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; font-size: 11px; color: rgb(102, 102, 102); padding-top: 8px;"
                      >
                        Chapter 1:
                      </p>
                      <p
                        class="text_wrapper"
                        data-version="v1"
                        style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; font-size: 11px; color: rgb(102, 102, 102); line-height: 1;"
                      >
                        Getting Started
                      </p>
                    </div>
                  </div>

                  <BookSvg id="learn" />
                </div>
              </div>
              <div class="relative mt-6 flex w-full max-w-full flex-col items-center justify-center space-y-4 pb-0 md:space-y-6 md:pb-4 lg:pt-4">
                <div class="flex max-w-full flex-col items-center justify-center">
                  <p
                    class="text_wrapper pb-2"
                    data-version="v1"
                    style="--text-color:var(--ds-gray-1000);--xs-text-size:1.25rem;--xs-text-line-height:1.5rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.020625rem;--sm-text-size:1.25rem;--sm-text-line-height:1.5rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.020625rem;--smd-text-size:1.5rem;--smd-text-line-height:2rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.029375rem;--md-text-size:1.5rem;--md-text-line-height:2rem;--md-text-weight:600;--md-text-letter-spacing:-0.029375rem;--lg-text-size:1.5rem;--lg-text-line-height:2rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.029375rem"
                  >
                    Learn Qwik
                  </p>
                  <div class="mx-auto w-[80%] text-center md:w-auto md:text-left">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:400"
                    >
                      16 chapters that take you build a fully functional Qwik
                      app.
                    </p>
                  </div>
                  <div class="mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-gray-50 px-6 py-3 text-sm leading-snug md:min-w-[400px]">
                    <DisplayNextChapter completed={completedChapter} />

                    <div class="ml-2">
                      <div
                        class="gauge_circle__N47Fa gauge_animate__yiaIw"
                        data-geist-progress-circle=""
                        data-version="v1"
                        style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
                      >
                        <ProgressCircle
                          completed={completedChapter}
                          onlyCircle
                          responsive="largeOnly"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-px w-full bg-gray-100"></div>

                <div class="w-[100%] md:w-[213px]">
                  <BtAddChapter
                    goToChapter={0}
                    title=""
                    text="Start Learning"
                    completed={completedChapter}
                  >
                    <ProgressCircle
                      completed={completedChapter}
                      onlyCircle
                      colorCircle="var(--ds-gray-900)"
                      colorProgressCircle="var(--ds-gray-100)"
                      responsive="smallOnly"
                    />
                  </BtAddChapter>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="z-30 flex w-full justify-center pt-4 md:pt-8">
              <div class="dark:bg-vercel-100 flex w-full flex-col items-center justify-between rounded-[12px] bg-white p-4 text-sm shadow-lg md:flex-row md:px-6 lg:w-[713px]">
                <div class="flex flex-col items-center justify-center md:flex-row">
                  <svg
                    class="flex-shrink-0"
                    fill="none"
                    height="60"
                    viewBox="0 0 52 60"
                    width="52"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_iii_439_2643)">
                      <g clip-path="url(#clip0_439_2643)">
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H50C51.1046 0 52 0.895431 52 2V58C52 59.1046 51.1046 60 50 60H4C1.79086 60 0 58.2091 0 56V4Z"
                          fill="#303030"
                        ></path>
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H50C51.1046 0 52 0.895431 52 2V58C52 59.1046 51.1046 60 50 60H4C1.79086 60 0 58.2091 0 56V4Z"
                          fill="url(#paint0_linear_439_2643)"
                        ></path>
                        <rect
                          fill="url(#paint1_linear_439_2643)"
                          height="60"
                          opacity="0.2"
                          width="10"
                        ></rect>
                        <rect
                          fill="url(#paint2_linear_439_2643)"
                          height="60"
                          opacity="0.05"
                          width="10"
                        ></rect>
                        <rect
                          fill="#2A2D2E"
                          height="60"
                          transform="translate(8)"
                          width="44"
                        ></rect>
                        <rect
                          fill="url(#paint3_linear_439_2643)"
                          fill-opacity="0.28"
                          height="60"
                          transform="translate(8)"
                          width="44"
                        ></rect>
                        <g filter="url(#filter1_di_439_2643)">
                          <path
                            clip-rule="evenodd"
                            d="M29 41C35.0751 41 40 36.0751 40 30C40 23.9249 35.0751 19 29 19C22.9249 19 18 23.9249 18 30C18 36.0751 22.9249 41 29 41ZM26.415 24.1274C25.9972 24.0029 25.7044 24.0387 25.5036 24.1546C25.3029 24.2706 25.1255 24.5062 25.0244 24.9303C24.9231 25.3557 24.9121 25.924 25.0108 26.6092C25.0352 26.7789 25.0662 26.9541 25.1036 27.1343C25.7049 26.9933 26.3545 26.8846 27.0383 26.8127C27.4424 26.2565 27.8614 25.7483 28.2841 25.298C28.1468 25.1755 28.0105 25.0611 27.8758 24.9551C27.3317 24.527 26.8341 24.2524 26.415 24.1274ZM28.9984 24.5953C28.8297 24.443 28.6614 24.3008 28.4942 24.1692C27.8911 23.6947 27.2813 23.3422 26.7006 23.1691C26.1186 22.9956 25.5193 22.9909 25.0036 23.2886C24.488 23.5863 24.1924 24.1077 24.0517 24.6985C23.9112 25.2879 23.9116 25.9923 24.021 26.7518C24.0514 26.9624 24.0904 27.1793 24.1379 27.4015C23.9217 27.4715 23.7144 27.5461 23.5168 27.6251C22.8043 27.9102 22.1941 28.262 21.7539 28.6784C21.3126 29.0957 21.0089 29.6123 21.0089 30.2077C21.0089 30.8032 21.3126 31.3198 21.7539 31.7371C22.1941 32.1534 22.8043 32.5053 23.5168 32.7903C23.7144 32.8694 23.9217 32.944 24.1379 33.0139C24.0904 33.2362 24.0513 33.453 24.021 33.6636C23.9116 34.4232 23.9112 35.1276 24.0516 35.717C24.1924 36.3078 24.488 36.8292 25.0036 37.1269C25.5193 37.4246 26.1186 37.4199 26.7006 37.2464C27.2813 37.0733 27.8911 36.7208 28.4942 36.2462C28.6614 36.1147 28.8297 35.9724 28.9984 35.8201C29.1671 35.9724 29.3354 36.1147 29.5026 36.2462C30.1057 36.7208 30.7155 37.0733 31.2962 37.2464C31.8782 37.4199 32.4775 37.4246 32.9932 37.1269C33.5088 36.8292 33.8044 36.3078 33.9452 35.717C34.0856 35.1276 34.0852 34.4232 33.9758 33.6636C33.9455 33.453 33.9064 33.2362 33.8589 33.0139C34.0751 32.944 34.2824 32.8694 34.48 32.7903C35.1925 32.5053 35.8027 32.1534 36.2429 31.7371C36.6842 31.3198 36.9879 30.8032 36.9879 30.2077C36.9879 29.6123 36.6842 29.0957 36.2429 28.6784C35.8027 28.262 35.1925 27.9102 34.48 27.6251C34.2824 27.5461 34.0751 27.4715 33.8589 27.4015C33.9064 27.1793 33.9454 26.9624 33.9758 26.7518C34.0852 25.9923 34.0856 25.2879 33.9451 24.6985C33.8044 24.1077 33.5088 23.5863 32.9932 23.2886C32.4775 22.9909 31.8782 22.9956 31.2962 23.1691C30.7155 23.3422 30.1057 23.6947 29.5026 24.1692C29.3354 24.3008 29.1671 24.443 28.9984 24.5953ZM28.9984 25.9982C28.788 26.2231 28.5774 26.4648 28.3683 26.7221C28.5763 26.7154 28.7865 26.7119 28.9984 26.7119C29.2103 26.7119 29.4205 26.7154 29.6285 26.7221C29.4194 26.4648 29.2088 26.2231 28.9984 25.9982ZM30.9585 26.8127C30.5544 26.2565 30.1354 25.7483 29.7127 25.298C29.85 25.1755 29.9863 25.0611 30.121 24.9551C30.6651 24.527 31.1627 24.2524 31.5818 24.1274C31.9996 24.0029 32.2924 24.0387 32.4932 24.1546C32.6939 24.2706 32.8713 24.5062 32.9724 24.9303C33.0737 25.3557 33.0847 25.924 32.986 26.6092C32.9616 26.7789 32.9306 26.9541 32.8932 27.1343C32.2919 26.9933 31.6423 26.8846 30.9585 26.8127ZM30.4079 27.7664C29.9532 27.7307 29.4819 27.7119 28.9984 27.7119C28.5149 27.7119 28.0436 27.7307 27.5889 27.7664C27.3306 28.1424 27.0787 28.5411 26.837 28.9598C26.5952 29.3786 26.3759 29.7961 26.1794 30.2077C26.3759 30.6194 26.5952 31.0369 26.837 31.4556C27.0787 31.8744 27.3307 32.2731 27.5889 32.6491C28.0436 32.6847 28.5149 32.7035 28.9984 32.7035C29.4819 32.7035 29.9532 32.6847 30.4079 32.6491C30.6661 32.2731 30.9181 31.8744 31.1598 31.4556C31.4016 31.0369 31.6209 30.6194 31.8174 30.2077C31.6209 29.7961 31.4016 29.3786 31.1598 28.9598C30.9181 28.5411 30.6662 28.1424 30.4079 27.7664ZM32.3321 29.0106C32.2339 28.8271 32.1318 28.6434 32.0259 28.4598C31.9199 28.2763 31.8119 28.096 31.702 27.9192C32.0293 27.9717 32.344 28.0332 32.6439 28.103C32.5544 28.3976 32.4504 28.7009 32.3321 29.0106ZM32.3321 31.4048C32.2339 31.5884 32.1318 31.7721 32.0259 31.9556C31.9199 32.1392 31.8118 32.3195 31.702 32.4963C32.0293 32.4438 32.344 32.3822 32.644 32.3125C32.5544 32.0179 32.4504 31.7146 32.3321 31.4048ZM33.6075 32.0441C33.4289 31.4528 33.1983 30.8358 32.9186 30.2077C33.1983 29.5796 33.4289 28.9627 33.6075 28.3714C33.7822 28.4291 33.9494 28.4899 34.1086 28.5536C34.7514 28.8107 35.2381 29.1044 35.5558 29.4049C35.8725 29.7044 35.9879 29.9759 35.9879 30.2077C35.9879 30.4396 35.8725 30.7111 35.5558 31.0106C35.2381 31.3111 34.7514 31.6047 34.1086 31.8619C33.9494 31.9255 33.7822 31.9863 33.6075 32.0441ZM32.8933 33.2812C32.2919 33.4221 31.6423 33.5309 30.9585 33.6027C30.5544 34.159 30.1354 34.6672 29.7127 35.1175C29.85 35.2399 29.9863 35.3544 30.121 35.4604C30.6651 35.8885 31.1627 36.1631 31.5818 36.288C31.9996 36.4126 32.2924 36.3768 32.4932 36.2608C32.694 36.1449 32.8714 35.9092 32.9724 35.4852C33.0738 35.0598 33.0848 34.4915 32.986 33.8062C32.9616 33.6366 32.9306 33.4613 32.8933 33.2812ZM28.9984 34.4172C29.2088 34.1924 29.4194 33.9506 29.6285 33.6934C29.4205 33.7001 29.2103 33.7035 28.9984 33.7035C28.7865 33.7035 28.5763 33.7001 28.3683 33.6934C28.5774 33.9506 28.788 34.1924 28.9984 34.4172ZM26.2948 32.4963C26.185 32.3195 26.0769 32.1392 25.9709 31.9556C25.865 31.7721 25.7629 31.5884 25.6647 31.4048C25.5464 31.7145 25.4424 32.0178 25.3528 32.3125C25.6528 32.3822 25.9675 32.4438 26.2948 32.4963ZM25.1035 33.2812C25.7049 33.4221 26.3545 33.5309 27.0383 33.6027C27.4424 34.159 27.8614 34.6672 28.2841 35.1175C28.1468 35.2399 28.0105 35.3544 27.8758 35.4604C27.3317 35.8885 26.8341 36.1631 26.415 36.288C25.9972 36.4126 25.7044 36.3768 25.5036 36.2608C25.3028 36.1449 25.1254 35.9092 25.0244 35.4852C24.923 35.0598 24.9121 34.4915 25.0108 33.8062C25.0352 33.6366 25.0662 33.4613 25.1035 33.2812ZM24.3893 32.044C24.5679 31.4527 24.7985 30.8358 25.0782 30.2077C24.7985 29.5796 24.5679 28.9627 24.3893 28.3714C24.2146 28.4291 24.0474 28.4899 23.8882 28.5536C23.2454 28.8107 22.7588 29.1044 22.441 29.4049C22.1243 29.7044 22.0089 29.9759 22.0089 30.2077C22.0089 30.4396 22.1243 30.7111 22.441 31.0106C22.7588 31.3111 23.2454 31.6047 23.8882 31.8619C24.0474 31.9255 24.2146 31.9863 24.3893 32.044ZM25.3529 28.103C25.4424 28.3976 25.5464 28.7009 25.6647 29.0106C25.7629 28.8271 25.865 28.6434 25.9709 28.4598C26.0769 28.2763 26.1849 28.096 26.2948 27.9192C25.9675 27.9717 25.6528 28.0332 25.3529 28.103ZM28.9984 31.456C29.6878 31.456 30.2467 30.8971 30.2467 30.2077C30.2467 29.5183 29.6878 28.9595 28.9984 28.9595C28.309 28.9595 27.7502 29.5183 27.7502 30.2077C27.7502 30.8971 28.309 31.456 28.9984 31.456Z"
                            fill="black"
                            fill-opacity="0.5"
                            fill-rule="evenodd"
                            shape-rendering="crispEdges"
                          ></path>
                        </g>
                        <path
                          clip-rule="evenodd"
                          d="M25.5036 24.1546C25.7044 24.0387 25.9972 24.0029 26.415 24.1274C26.8341 24.2524 27.3317 24.527 27.8758 24.9551C28.0105 25.0611 28.1468 25.1755 28.2841 25.298C27.8614 25.7483 27.4424 26.2565 27.0383 26.8127C26.3545 26.8846 25.7049 26.9933 25.1036 27.1343C25.0662 26.9541 25.0352 26.7789 25.0108 26.6092C24.9121 25.924 24.9231 25.3557 25.0244 24.9303C25.1255 24.5062 25.3029 24.2706 25.5036 24.1546ZM28.4942 24.1692C28.6614 24.3008 28.8297 24.443 28.9984 24.5953C29.1671 24.443 29.3354 24.3008 29.5026 24.1692C30.1057 23.6947 30.7155 23.3422 31.2962 23.1691C31.8782 22.9956 32.4775 22.9909 32.9932 23.2886C33.5088 23.5863 33.8044 24.1077 33.9451 24.6985C34.0856 25.2879 34.0852 25.9923 33.9758 26.7518C33.9454 26.9624 33.9064 27.1793 33.8589 27.4015C34.0751 27.4715 34.2824 27.5461 34.48 27.6251C35.1925 27.9102 35.8027 28.262 36.2429 28.6784C36.6842 29.0957 36.9879 29.6123 36.9879 30.2077C36.9879 30.8032 36.6842 31.3198 36.2429 31.7371C35.8027 32.1534 35.1925 32.5053 34.48 32.7903C34.2824 32.8694 34.0751 32.944 33.8589 33.0139C33.9064 33.2362 33.9455 33.453 33.9758 33.6636C34.0852 34.4232 34.0856 35.1276 33.9452 35.717C33.8044 36.3078 33.5088 36.8292 32.9932 37.1269C32.4775 37.4246 31.8782 37.4199 31.2962 37.2464C30.7155 37.0733 30.1057 36.7208 29.5026 36.2462C29.3354 36.1147 29.1671 35.9724 28.9984 35.8201C28.8297 35.9724 28.6614 36.1147 28.4942 36.2462C27.8911 36.7208 27.2813 37.0733 26.7006 37.2464C26.1186 37.4199 25.5193 37.4246 25.0036 37.1269C24.488 36.8292 24.1924 36.3078 24.0516 35.717C23.9112 35.1276 23.9116 34.4232 24.021 33.6636C24.0513 33.453 24.0904 33.2362 24.1379 33.0139C23.9217 32.944 23.7144 32.8694 23.5168 32.7903C22.8043 32.5053 22.1941 32.1534 21.7539 31.7371C21.3126 31.3198 21.0089 30.8032 21.0089 30.2077C21.0089 29.6123 21.3126 29.0957 21.7539 28.6784C22.1941 28.262 22.8043 27.9102 23.5168 27.6251C23.7144 27.5461 23.9217 27.4715 24.1379 27.4015C24.0904 27.1793 24.0514 26.9624 24.021 26.7518C23.9116 25.9923 23.9112 25.2879 24.0517 24.6985C24.1924 24.1077 24.488 23.5863 25.0036 23.2886C25.5193 22.9909 26.1186 22.9956 26.7006 23.1691C27.2813 23.3422 27.8911 23.6947 28.4942 24.1692ZM28.3683 26.7221C28.5774 26.4648 28.788 26.2231 28.9984 25.9982C29.2088 26.2231 29.4194 26.4648 29.6285 26.7221C29.4205 26.7154 29.2103 26.7119 28.9984 26.7119C28.7865 26.7119 28.5763 26.7154 28.3683 26.7221ZM29.7127 25.298C30.1354 25.7483 30.5544 26.2565 30.9585 26.8127C31.6423 26.8846 32.2919 26.9933 32.8932 27.1343C32.9306 26.9541 32.9616 26.7789 32.986 26.6092C33.0847 25.924 33.0737 25.3557 32.9724 24.9303C32.8713 24.5062 32.6939 24.2706 32.4932 24.1546C32.2924 24.0387 31.9996 24.0029 31.5818 24.1274C31.1627 24.2524 30.6651 24.527 30.121 24.9551C29.9863 25.0611 29.85 25.1755 29.7127 25.298ZM28.9984 27.7119C29.4819 27.7119 29.9532 27.7307 30.4079 27.7664C30.6662 28.1424 30.9181 28.5411 31.1598 28.9598C31.4016 29.3786 31.6209 29.7961 31.8174 30.2077C31.6209 30.6194 31.4016 31.0369 31.1598 31.4556C30.9181 31.8744 30.6661 32.2731 30.4079 32.6491C29.9532 32.6847 29.4819 32.7035 28.9984 32.7035C28.5149 32.7035 28.0436 32.6847 27.5889 32.6491C27.3307 32.2731 27.0787 31.8744 26.837 31.4556C26.5952 31.0369 26.3759 30.6194 26.1794 30.2077C26.3759 29.7961 26.5952 29.3786 26.837 28.9598C27.0787 28.5411 27.3306 28.1424 27.5889 27.7664C28.0436 27.7307 28.5149 27.7119 28.9984 27.7119ZM32.0259 28.4598C32.1318 28.6434 32.2339 28.8271 32.3321 29.0106C32.4504 28.7009 32.5544 28.3976 32.6439 28.103C32.344 28.0332 32.0293 27.9717 31.702 27.9192C31.8119 28.096 31.9199 28.2763 32.0259 28.4598ZM32.0259 31.9556C32.1318 31.7721 32.2339 31.5884 32.3321 31.4048C32.4504 31.7146 32.5544 32.0179 32.644 32.3125C32.344 32.3822 32.0293 32.4438 31.702 32.4963C31.8118 32.3195 31.9199 32.1392 32.0259 31.9556ZM32.9186 30.2077C33.1983 30.8358 33.4289 31.4528 33.6075 32.0441C33.7822 31.9863 33.9494 31.9255 34.1086 31.8619C34.7514 31.6047 35.2381 31.3111 35.5558 31.0106C35.8725 30.7111 35.9879 30.4396 35.9879 30.2077C35.9879 29.9759 35.8725 29.7044 35.5558 29.4049C35.2381 29.1044 34.7514 28.8107 34.1086 28.5536C33.9494 28.4899 33.7822 28.4291 33.6075 28.3714C33.4289 28.9627 33.1983 29.5796 32.9186 30.2077ZM30.9585 33.6027C31.6423 33.5309 32.2919 33.4221 32.8933 33.2812C32.9306 33.4613 32.9616 33.6366 32.986 33.8062C33.0848 34.4915 33.0738 35.0598 32.9724 35.4852C32.8714 35.9092 32.694 36.1449 32.4932 36.2608C32.2924 36.3768 31.9996 36.4126 31.5818 36.288C31.1627 36.1631 30.6651 35.8885 30.121 35.4604C29.9863 35.3544 29.85 35.2399 29.7127 35.1175C30.1354 34.6672 30.5544 34.159 30.9585 33.6027ZM29.6285 33.6934C29.4194 33.9506 29.2088 34.1924 28.9984 34.4172C28.788 34.1924 28.5774 33.9506 28.3683 33.6934C28.5763 33.7001 28.7865 33.7035 28.9984 33.7035C29.2103 33.7035 29.4205 33.7001 29.6285 33.6934ZM25.9709 31.9556C26.0769 32.1392 26.185 32.3195 26.2948 32.4963C25.9675 32.4438 25.6528 32.3822 25.3528 32.3125C25.4424 32.0178 25.5464 31.7145 25.6647 31.4048C25.7629 31.5884 25.865 31.7721 25.9709 31.9556ZM27.0383 33.6027C26.3545 33.5309 25.7049 33.4221 25.1035 33.2812C25.0662 33.4613 25.0352 33.6366 25.0108 33.8062C24.9121 34.4915 24.923 35.0598 25.0244 35.4852C25.1254 35.9092 25.3028 36.1449 25.5036 36.2608C25.7044 36.3768 25.9972 36.4126 26.415 36.288C26.8341 36.1631 27.3317 35.8885 27.8758 35.4604C28.0105 35.3544 28.1468 35.2399 28.2841 35.1175C27.8614 34.6672 27.4424 34.159 27.0383 33.6027ZM25.0782 30.2077C24.7985 30.8358 24.5679 31.4527 24.3893 32.044C24.2146 31.9863 24.0474 31.9255 23.8882 31.8619C23.2454 31.6047 22.7588 31.3111 22.441 31.0106C22.1243 30.7111 22.0089 30.4396 22.0089 30.2077C22.0089 29.9759 22.1243 29.7044 22.441 29.4049C22.7588 29.1044 23.2454 28.8107 23.8882 28.5536C24.0474 28.4899 24.2146 28.4291 24.3893 28.3714C24.5679 28.9627 24.7985 29.5796 25.0782 30.2077ZM25.6647 29.0106C25.5464 28.7009 25.4424 28.3976 25.3529 28.103C25.6528 28.0332 25.9675 27.9717 26.2948 27.9192C26.1849 28.096 26.0769 28.2763 25.9709 28.4598C25.865 28.6434 25.7629 28.8271 25.6647 29.0106ZM30.2467 30.2077C30.2467 30.8971 29.6878 31.456 28.9984 31.456C28.309 31.456 27.7502 30.8971 27.7502 30.2077C27.7502 29.5183 28.309 28.9595 28.9984 28.9595C29.6878 28.9595 30.2467 29.5183 30.2467 30.2077Z"
                          fill="white"
                          fill-opacity="0.3"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                      <path
                        d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H50C50.8284 0.5 51.5 1.17157 51.5 2V58C51.5 58.8284 50.8284 59.5 50 59.5H4C2.067 59.5 0.5 57.933 0.5 56V4Z"
                        stroke="black"
                        stroke-opacity="0.02"
                      ></path>
                    </g>
                    <defs>
                      <filter
                        color-interpolation-filters="s-rGB"
                        filterUnits="userSpaceOnUse"
                        height="61"
                        id="filter0_iii_439_2643"
                        width="56"
                        x="0"
                        y="0"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dx="4"></feOffset>
                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="shape"
                          mode="normal"
                          result="effect1_innerShadow_439_2643"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="1"></feOffset>
                        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="effect1_innerShadow_439_2643"
                          mode="normal"
                          result="effect2_innerShadow_439_2643"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="-1"></feOffset>
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="effect2_innerShadow_439_2643"
                          mode="normal"
                          result="effect3_innerShadow_439_2643"
                        ></feBlend>
                      </filter>
                      <filter
                        color-interpolation-filters="s-rGB"
                        filterUnits="userSpaceOnUse"
                        height="22.5"
                        id="filter1_di_439_2643"
                        width="22"
                        x="18"
                        y="19"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="0.5"></feOffset>
                        <feComposite
                          in2="hardAlpha"
                          operator="out"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="effect1_dropShadow_439_2643"
                        ></feBlend>
                        <feBlend
                          in="SourceGraphic"
                          in2="effect1_dropShadow_439_2643"
                          mode="normal"
                          result="shape"
                        ></feBlend>
                        <feColorMatrix
                          in="SourceAlpha"
                          result="hardAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset dy="0.5"></feOffset>
                        <feGaussianBlur stdDeviation="0.25"></feGaussianBlur>
                        <feComposite
                          in2="hardAlpha"
                          k2="-1"
                          k3="1"
                          operator="arithmetic"
                        ></feComposite>
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        ></feColorMatrix>
                        <feBlend
                          in2="shape"
                          mode="normal"
                          result="effect2_innerShadow_439_2643"
                        ></feBlend>
                      </filter>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_439_2643"
                        x1="26"
                        x2="26"
                        y1="0"
                        y2="60"
                      >
                        <stop stop-color="white" stop-opacity="0.1"></stop>
                        <stop
                          offset="0.5"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_439_2643"
                        x1="0"
                        x2="10"
                        y1="26.625"
                        y2="26.625"
                      >
                        <stop stop-opacity="0.03"></stop>
                        <stop offset="0.119792" stop-opacity="0.1"></stop>
                        <stop offset="0.291667" stop-opacity="0"></stop>
                        <stop offset="0.505208" stop-opacity="0.02"></stop>
                        <stop offset="0.734375" stop-opacity="0.21"></stop>
                        <stop offset="0.752526" stop-opacity="0.5"></stop>
                        <stop offset="0.852261" stop-opacity="0.15"></stop>
                        <stop offset="1" stop-opacity="0"></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint2_linear_439_2643"
                        x1="0"
                        x2="10"
                        y1="26.625"
                        y2="26.625"
                      >
                        <stop stop-color="white" stop-opacity="0"></stop>
                        <stop
                          offset="0.119792"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="0.291667"
                          stop-color="white"
                          stop-opacity="0.96"
                        ></stop>
                        <stop
                          offset="0.505208"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                        <stop
                          offset="0.752526"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                        <stop offset="0.911458" stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint3_linear_439_2643"
                        x1="4.59341"
                        x2="48.648"
                        y1="6.36153e-07"
                        y2="46.5692"
                      >
                        <stop stop-color="white"></stop>
                        <stop
                          offset="1"
                          stop-color="white"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <clipPath id="clip0_439_2643">
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H50C51.1046 0 52 0.895431 52 2V58C52 59.1046 51.1046 60 50 60H4C1.79086 60 0 58.2091 0 56V4Z"
                          fill="white"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <div class="mt-2 text-center md:ml-6 md:mt-0 md:space-y-0 md:text-left">
                    <p
                      class="text_wrapper mb-2 font-medium md:mb-0"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Learn React Foundations
                    </p>
                    <div class="mx-auto mb-4 mt-2 w-[80%] md:mx-0 md:mb-0">
                      <p
                        class="text_wrapper"
                        data-version="v1"
                        style="--text-color:var(--ds-gray-900);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:400"
                      >
                        New to React? Learn how to go from JavaScript to React
                        with this Foundations course.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-fit">
                  <a
                    
                    tabIndex={0}
                    href="/learn/react-foundations"
                    type="submit"
                    class="button_base reset_reset button_button reset_reset button_secondary__kMMNc button_invert"
                    data-geist-button=""
                    data-prefix="false"
                    data-suffix="true"
                    data-version="v1"
                    style="min-width:100%;max-width:100%;--geist-icon-size:16px"
                  >
                    <span class="button_content">React Foundations</span>
                    <span class="button_suffix">
                      <svg
                        data-testid="geist-icon"
                        height="16"
                        stroke-linejoin="round"
                        style="color:currentColor"
                        viewBox="0 0 16 16"
                        width="16"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Learn Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik is a new way to build web applications.",
    },
  ],
};
