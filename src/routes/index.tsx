// src/routes/index.tsx

// import type { Signal } from "@builder.io/qwik";
import { component$, useContext } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import HeroLinesDark from "~/assets/svg/heroLinesDark/heroLinesDark";
import HeroLinesLight from "~/assets/svg/heroLinesLight/heroLinesLight";
import HomeBackground from "~/assets/svg/homeBackground/homeBackground";
import BtAddChapter from "~/components/UI/btAddChapter/btAddChapter";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
import DisplayNextChapter from "~/components/learn/DisplayNextChapter/displayNextChapter";
import { BookSvgText } from "~/components/learn/bookSvgText/bookSvgText";
import { QwikLogo } from "~/assets/svg/qwikLogo/qwikLogo";
import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground from "~/assets/img/ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground.png?jsx";

import MobileMenu from "~/components/mobile-menu/mobile-menu";
// import { ChaptersContext } from "~/routes/layout";
// import type { ChapterType } from "~/types/chapterType";

// import type { CompletedChaptersType } from "~/types/completedChapters";
import { ChaptersContext } from "./layout";
import { findCompletedChapters } from "~/utils/findCompletedChapters";
import { createDocumentHead } from "~/utils/createDocumentHead";
import { ChapterThumbnail } from "~/components/UI/chapterThumbnail/chapterThumbnail";
import { GuidesScrollWrapper } from "~/components/UI/guidesScrollWrapper/guidesScrollWrapper";

// import type { ChapterType } from "~/types/chapterType";
// import { findCompletedChapters } from "~/utils/findCompletedChapters";

export default component$(() => {
  const chapters = useContext(ChaptersContext);
  // console.log("Chapters: " + chapters.value[0].isCompleted);

  const completedChapters = findCompletedChapters(chapters.value);
  // console.log("Completed Chapters: " + completedChapters.length);

  // // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(() => {
  //   const cookieValue = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("completedChapters="))
  //     ?.split("=")[1];

  //   if (cookieValue) {
  //     const parsedValue: CompletedChaptersType = JSON.parse(
  //       decodeURIComponent(cookieValue),
  //     );
  //     completedChapters.value = parsedValue;
  //   }
  // });

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
          <div class="bg-vercel-100 absolute left-0 right-0 top-[57%] h-[350px]  md:top-[62.7%] md:h-[200px]" />
          <div class="relative flex w-full flex-col items-center pt-20 md:pt-8">
            <div class="dark:bg-vercel-100 relative flex w-full flex-col items-center rounded-[12px] bg-white p-4 shadow-md lg:w-[713px]">
              <HeroLinesLight />
              <HeroLinesDark />
              <div class="relative -mt-[56px] flex w-full justify-center md:-mt-14">
                <div class="relative">
                  <BookSvgText completed={completedChapters} />

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
                    <DisplayNextChapter completed={completedChapters} />

                    <div class="ml-2">
                      <div
                        class="gauge_circle__N47Fa gauge_animate__yiaIw"
                        data-geist-progress-circle=""
                        data-version="v1"
                        style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
                      >
                        <ProgressCircle
                          completed={completedChapters}
                          onlyCircle
                          responsive="largeOnly"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-px w-full bg-gray-100"></div>

                <div>
                  <BtAddChapter
                    goToChapter={0}
                    title=""
                    text="Start Learning"
                    completedChapters={completedChapters}
                  >
                    <ProgressCircle
                      completed={completedChapters}
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
        </div>
      </div>

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091224773462896"
        crossOrigin="anonymous"
      ></script>
      <div class="px-4 pb-8 md:px-8 md:pb-20">
        <ins
          class="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="8894881530"
        ></ins>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
        />
      </div>

      <div class="pb-8 md:pb-20">
        <div class="flex flex-col justify-center text-center md:flex-row md:items-baseline md:text-left">
          <h2
            class="text_wrapper"
            data-version="v1"
            style="--text-color:var(--ds-gray-1000);--xs-text-size:1.5rem;--xs-text-line-height:2rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.029375rem;--sm-text-size:1.5rem;--sm-text-line-height:2rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.029375rem;--smd-text-size:2rem;--smd-text-line-height:2.5rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.049375rem;--md-text-size:2rem;--md-text-line-height:2.5rem;--md-text-weight:600;--md-text-letter-spacing:-0.049375rem;--lg-text-size:2rem;--lg-text-line-height:2.5rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.049375rem"
          >
            How does the course work?
          </h2>
          <div class="mx-auto my-1 w-[70%] text-gray-900 md:mx-0 md:my-0 md:ml-4 md:w-auto md:text-xl">
            By building a full web application. Step by step.
          </div>
        </div>
        <div class="relative mx-auto mb-4 w-full max-w-7xl">
          <div class="hidden w-full lg:block">
            <svg
              fill="none"
              height="100%"
              viewBox="0 0 1360 524"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-black dark:text-white"
                d="M0 68L1360 68.0001"
                opacity="0.15"
                stroke="currentColor"
                stroke-dasharray="2 2"
              ></path>
              <path
                class="text-black dark:text-white"
                d="M784 524L784 -3.8147e-06"
                opacity="0.15"
                stroke="currentColor"
                stroke-dasharray="2 2"
              ></path>
              <path
                class="text-black dark:text-white"
                d="M1296 524L1296 -3.8147e-06"
                opacity="0.15"
                stroke="currentColor"
                stroke-dasharray="2 2"
              ></path>
              <path
                class="text-black dark:text-white"
                d="M0 455H1360"
                opacity="0.15"
                stroke="currentColor"
                stroke-dasharray="2 2"
              ></path>
              <path
                class="text-black dark:text-white"
                d="M65 524L65 -3.8147e-06"
                opacity="0.15"
                stroke="currentColor"
                stroke-dasharray="2 2"
              ></path>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_24_5768"
                  x1="0"
                  x2="1360"
                  y1="68"
                  y2="68.0001"
                >
                  <stop stop-opacity="0"></stop>
                  <stop offset="0.115"></stop>
                  <stop offset="0.893678"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_24_5768"
                  x1="784"
                  x2="784"
                  y1="524"
                  y2="-3.12326e-05"
                >
                  <stop stop-opacity="0"></stop>
                  <stop offset="0.177083"></stop>
                  <stop offset="0.828125"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint2_linear_24_5768"
                  x1="1296"
                  x2="1296"
                  y1="524"
                  y2="-3.12326e-05"
                >
                  <stop stop-opacity="0"></stop>
                  <stop offset="0.177083"></stop>
                  <stop offset="0.828125"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint3_linear_24_5768"
                  x1="0"
                  x2="1360"
                  y1="455"
                  y2="455"
                >
                  <stop stop-opacity="0"></stop>
                  <stop offset="0.115"></stop>
                  <stop offset="0.893678"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint4_linear_24_5768"
                  x1="65"
                  x2="64.9999"
                  y1="524"
                  y2="-3.12328e-05"
                >
                  <stop stop-opacity="0"></stop>
                  <stop offset="0.177083"></stop>
                  <stop offset="0.828125"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="inset-0 flex flex-col items-center justify-center lg:absolute lg:flex-row">
            <div class="flex w-full items-center justify-center lg:ml-2 lg:w-[53%]">
              <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground
                alt="Screenshots of the dashboard project showing desktop and mobile versions."
                class="block p-8  "
              />
            </div>
            <div class="flex w-full items-center justify-center lg:w-[38%]">
              <div class="mb-8 flex w-full flex-col space-y-8 px-4 lg:mb-0 lg:space-y-6">
                <div class="flex flex-col items-center leading-6 lg:flex-row">
                  <div class="mb-3 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-300 text-blue-900 md:mb-4 lg:mb-0 lg:mr-4">
                    <svg
                      class="with-icon_icon"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style="color:currentColor"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
                    </svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--xs-text-size:0.875rem;--xs-text-line-height:1.25rem;--xs-text-weight:400;--xs-text-letter-spacing:initial;--sm-text-size:0.875rem;--sm-text-line-height:1.25rem;--sm-text-weight:400;--sm-text-letter-spacing:initial;--smd-text-size:1rem;--smd-text-line-height:1.5rem;--smd-text-weight:400;--smd-text-letter-spacing:initial;--md-text-size:1rem;--md-text-line-height:1.5rem;--md-text-weight:400;--md-text-letter-spacing:initial;--lg-text-size:1rem;--lg-text-line-height:1.5rem;--lg-text-weight:400;--lg-text-letter-spacing:initial"
                    >
                      Set up your local environment and initializing the
                      "LRD-Qwik Dashboard" Qwik project template.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-center leading-6 lg:flex-row">
                  <div class="mb-3 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-300 text-blue-900 md:mb-4 lg:mb-0 lg:mr-4">
                    <svg
                      class="with-icon_icon"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style="color:currentColor"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                    </svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--xs-text-size:0.875rem;--xs-text-line-height:1.25rem;--xs-text-weight:400;--xs-text-letter-spacing:initial;--sm-text-size:0.875rem;--sm-text-line-height:1.25rem;--sm-text-weight:400;--sm-text-letter-spacing:initial;--smd-text-size:1rem;--smd-text-line-height:1.5rem;--smd-text-weight:400;--smd-text-letter-spacing:initial;--md-text-size:1rem;--md-text-line-height:1.5rem;--md-text-weight:400;--md-text-letter-spacing:initial;--lg-text-size:1rem;--lg-text-line-height:1.5rem;--lg-text-weight:400;--lg-text-letter-spacing:initial"
                    >
                      Use pre-styled components as part of each chapter that
                      leverage Qwik conventions and patterns.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-center leading-6 lg:flex-row">
                  <div class="mb-3 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-300 text-blue-900 md:mb-4 lg:mb-0 lg:mr-4">
                    <svg
                      class="with-icon_icon"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style="color:currentColor"
                    >
                      <path d="M9.12132 14.8787L14.8787 9.12132M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17ZM20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"></path>
                    </svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--xs-text-size:0.875rem;--xs-text-line-height:1.25rem;--xs-text-weight:400;--xs-text-letter-spacing:initial;--sm-text-size:0.875rem;--sm-text-line-height:1.25rem;--sm-text-weight:400;--sm-text-letter-spacing:initial;--smd-text-size:1rem;--smd-text-line-height:1.5rem;--smd-text-weight:400;--smd-text-letter-spacing:initial;--md-text-size:1rem;--md-text-line-height:1.5rem;--md-text-weight:400;--md-text-letter-spacing:initial;--lg-text-size:1rem;--lg-text-line-height:1.5rem;--lg-text-weight:400;--lg-text-letter-spacing:initial"
                    >
                      Hook up real application logic and data to bring a
                      fully-fledged demo website to life.
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-center leading-6 lg:flex-row">
                  <div class="mb-3 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-300 text-blue-900 md:mb-4 lg:mb-0 lg:mr-4">
                    <svg
                      class="with-icon_icon"
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                      style="color:currentColor"
                    >
                      <path d="M16 16l-4-4-4 4"></path>
                      <path d="M12 12v9"></path>
                      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
                      <path d="M16 16l-4-4-4 4"></path>
                    </svg>
                  </div>
                  <div class="text-center lg:text-left">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--xs-text-size:0.875rem;--xs-text-line-height:1.25rem;--xs-text-weight:400;--xs-text-letter-spacing:initial;--sm-text-size:0.875rem;--sm-text-line-height:1.25rem;--sm-text-weight:400;--sm-text-letter-spacing:initial;--smd-text-size:1rem;--smd-text-line-height:1.5rem;--smd-text-weight:400;--smd-text-letter-spacing:initial;--md-text-size:1rem;--md-text-line-height:1.5rem;--md-text-weight:400;--md-text-letter-spacing:initial;--lg-text-size:1rem;--lg-text-line-height:1.5rem;--lg-text-weight:400;--lg-text-letter-spacing:initial"
                    >
                      At the end you’ll have a website that’s ready to ship and
                      the knowledge to build and deploy your own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto flex flex-col items-center justify-center px-4 lg:max-w-5xl lg:flex-row lg:space-x-8">
          <div class="dark:bg-vercel-100 bg-vercel-200 mb-4 flex w-full flex-col items-center rounded-lg p-5 md:p-2 lg:mb-0 lg:flex-row lg:rounded-full">
            <div class="relative mb-2 flex h-12 w-12 items-center justify-center lg:mb-0 lg:mr-4">
              <div class="absolute inset-0">
                <svg
                  fill="none"
                  height="100%"
                  viewBox="0 0 44 45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="stroke text-gray-400 dark:text-gray-400"
                    d="M15.5577 3.63202C11.612 4.97923 8.188 7.5295 5.76725 10.9241C3.3465 14.3187 2.05086 18.3867 2.06258 22.556"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    class="stroke text-gray-500 dark:text-gray-500"
                    d="M22 2.5625C25.6765 2.5625 29.2814 3.57908 32.4163 5.49986C35.5512 7.42065 38.0939 10.1708 39.7634 13.4464C41.4329 16.722 42.1641 20.3955 41.8763 24.0607C41.5885 27.726 40.2929 31.2402 38.1326 34.2151C35.9723 37.19 33.0315 39.5096 29.6352 40.9176C26.239 42.3255 22.5196 42.767 18.8881 42.1932C15.2567 41.6193 11.8546 40.0525 9.05796 37.666C6.26132 35.2795 4.17903 32.1661 3.04125 28.6701"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <svg
                  class="with-icon_icon"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  style="color:currentColor"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
                </svg>
              </div>
            </div>
            <div class="mt-1 space-y-1 text-center lg:text-left">
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-1000);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600"
              >
                Your progress will be synced as you complete chapters
              </p>
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-900);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:400"
              >
                Go at your own pace and pick up where you left off
              </p>
            </div>
          </div>
          <div class="dark:bg-vercel-100 bg-vercel-200 mb-4 flex w-full flex-col items-center rounded-lg p-5 md:p-2 lg:mb-0 lg:flex-row lg:rounded-full">
            <div class="relative mb-2 flex h-12 w-12 items-center justify-center lg:mb-0 lg:mr-4">
              <div class="absolute inset-0">
                <svg
                  fill="none"
                  height="100%"
                  viewBox="0 0 44 45"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="stroke text-gray-400 dark:text-gray-400"
                    d="M19.5702 2.71111C15.1785 3.25034 11.091 5.23515 7.95136 8.35292C4.81174 11.4707 2.79844 15.5443 2.22856 19.9321"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    class="stroke text-gray-400 dark:text-gray-400"
                    d="M24.4298 2.71111C28.8215 3.25034 32.909 5.23515 36.0486 8.35292C39.1883 11.4707 41.2016 15.5443 41.7714 19.9321"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    class="stroke text-gray-400 dark:text-gray-400"
                    d="M24.4298 42.2889C28.8215 41.7497 32.909 39.7649 36.0486 36.6471C39.1883 33.5293 41.2016 29.4557 41.7714 25.0679"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                  <path
                    class="stroke text-gray-400 dark:text-gray-400"
                    d="M19.5702 42.2889C15.1785 41.7497 11.091 39.7649 7.95136 36.6471C4.81174 33.5293 2.79844 29.4557 2.22856 25.0679"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <svg
                  class="with-icon_icon"
                  data-testid="geist-icon"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  style="color:currentColor"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
                  <circle cx="12" cy="17" r=".5"></circle>
                </svg>
              </div>
            </div>
            <div class="mt-1 space-y-1 text-center lg:text-left">
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-1000);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:600"
              >
                Test your knowledge during each chapter
              </p>
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-900);--text-size:0.875rem;--text-line-height:1.25rem;--text-letter-spacing:initial;--text-weight:400"
              >
                Take quick quizzes to see what you’ve learned
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 pb-8 md:px-8 md:pb-20">
        <ins
          class="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="8894881530"
        ></ins>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
        />
      </div>

      <div class="mx-auto max-w-6xl px-4 pb-10 md:pb-20">
        <div class="mb-4 flex flex-col justify-center text-center md:mb-8 md:flex-row md:items-baseline md:justify-center md:text-left">
          <h2
            class="text_wrapper"
            data-version="v1"
            style="--text-color:var(--ds-gray-1000);--xs-text-size:1.5rem;--xs-text-line-height:2rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.029375rem;--sm-text-size:1.5rem;--sm-text-line-height:2rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.029375rem;--smd-text-size:2rem;--smd-text-line-height:2.5rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.049375rem;--md-text-size:2rem;--md-text-line-height:2.5rem;--md-text-weight:600;--md-text-letter-spacing:-0.049375rem;--lg-text-size:2rem;--lg-text-line-height:2.5rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.049375rem"
          >
            What will I learn?
          </h2>
          <div class="mx-auto my-1 w-[70%] text-gray-900 md:ml-2 md:mr-0 md:w-auto md:text-xl">
            Here’s everything that’s covered in the course.
          </div>
        </div>
        <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ChapterThumbnail
            href="/learn/dashboard-app/"
            numberOrIcon="circleWithISvg"
            title="Getting Started"
            description="Learn how to build a full-stack web application with the free, Qwik App Course."
          />
          {chapters.value.map((chapter) => (
            <ChapterThumbnail
              key={chapter.id}
              href={`/learn/dashboard-app/${chapter.uri}/`}
              numberOrIcon={chapter.id.toString()}
              title={chapter.title}
              description={chapter.description}
            />
          ))}
        </div>
        <div class="mt-4 flex w-full items-center justify-center pb-10 md:mt-8 md:w-auto md:pb-20">
          <div class="w-[100%] md:w-[233px]">
            <div>
              <BtAddChapter
                goToChapter={0}
                title=""
                text="Start Learning"
                completedChapters={completedChapters}
              >
                <ProgressCircle
                  completed={completedChapters}
                  onlyCircle
                  colorCircle="var(--ds-gray-900)"
                  colorProgressCircle="var(--ds-gray-100)"
                  responsive="smallOnly"
                />
              </BtAddChapter>
            </div>
          </div>
        </div>

        <div class="bg-background-200 border-t pt-12 dark:bg-black md:pt-16">
          <div class="flex w-full flex-col items-center justify-between space-y-4 px-4  text-center md:flex-row md:space-y-0  md:text-left lg:px-0">
            <div>
              <p
                class="text_wrapper pb-1"
                data-version="v1"
                style="--text-color:var(--ds-gray-1000);--text-size:1.5rem;--text-line-height:2rem;--text-letter-spacing:-0.029375rem;--text-weight:600"
              >
                Looking to go deeper?
              </p>
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-900);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:400"
              >
                Continue learning by using guides.
              </p>
            </div>
          </div>

          <GuidesScrollWrapper />

          <div class="flex w-full flex-col items-center justify-between space-y-6 px-4 pt-10 text-center md:flex-row md:space-y-0 md:px-0 md:text-left">
            <div class="relative flex flex-col items-center  space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div class="relative flex">
                <div class="absolute left-2 top-2">
                  <QwikLogo id="4" height={16} width={16} />
                </div>

                <svg
                  fill="none"
                  height="66"
                  viewBox="0 0 54 66"
                  width="54"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_24_6161)">
                    <path
                      class="text-[#EAEAEA] dark:text-gray-400"
                      d="M11 46C11 44.8954 11.8954 44 13 44H33C34.1046 44 35 44.8954 35 46C35 47.1046 34.1046 48 33 48H13C11.8954 48 11 47.1046 11 46Z"
                      fill="currentColor"
                    ></path>
                    <path
                      class="text-[#EAEAEA] dark:text-gray-400"
                      d="M11 52C11 50.8954 11.8954 50 13 50H25C26.1046 50 27 50.8954 27 52C27 53.1046 26.1046 54 25 54H13C11.8954 54 11 53.1046 11 52Z"
                      fill="currentColor"
                    ></path>

                    <path
                      class="text-black/10 dark:text-gray-400"
                      d="M7 1.5C4.51472 1.5 2.5 3.51472 2.5 6V58C2.5 60.4853 4.51472 62.5 7 62.5H47C49.4853 62.5 51.5 60.4853 51.5 58V6C51.5 3.51472 49.4853 1.5 47 1.5H7Z"
                      stroke="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
              <div>
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color:var(--ds-gray-1000);--text-size:1.5rem;--text-line-height:2rem;--text-letter-spacing:-0.029375rem;--text-weight:600"
                >
                  Qwik Documentation
                </p>
                <p
                  class="text_wrapper pt-1"
                  data-version="v1"
                  style="--text-color:var(--ds-gray-900);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:400"
                >
                  The complete resource for installing, running, building with,
                  and deploying Qwik
                </p>
              </div>
            </div>
            <div class="w-[100%] md:w-auto">
              <Link
                role="link"
                tabIndex={0}
                href="https://qwik.dev/"
                class="button_base button_button reset_reset button_secondary button_invert"
                data-geist-button=""
                data-prefix="true"
                data-suffix="false"
                data-version="v1"
                style="min-width:100%;max-width:100%;--geist-icon-size:16px"
                target="_blank"
              >
                <span class="button_prefix">
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
                      d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span class="button_content">View the Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Start building with Qwik",
  "Qwik offers a new way to build web applications. Learn the foundations with interactive courses and create a functional demo site.",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/",
);
