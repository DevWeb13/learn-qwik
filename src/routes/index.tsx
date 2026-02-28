// src/routes/index.tsx

import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import HeroLinesDark from "~/assets/svg/heroLinesDark/heroLinesDark";
import HeroLinesLight from "~/assets/svg/heroLinesLight/heroLinesLight";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
import { DisplayNextChapter } from "~/components/learn/DisplayNextChapter/displayNextChapter";
import { BookSvgText } from "~/components/learn/bookSvgText/bookSvgText";

import { ChapterThumbnail } from "~/components/UI/chapterThumbnail/chapterThumbnail";
import { GuidesScrollWrapper } from "~/components/UI/guidesScrollWrapper/guidesScrollWrapper";
import { createDocumentHead } from "~/utils/createDocumentHead";
import { useProfile } from "./layout";

import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { BtAddChapter } from "~/components/UI/btAddChapter/btAddChapter";
import { HowDoesTheCourseWorkSection } from "~/components/home/howDoesTheCourseWorkSection";
import { QwikDocumentationArticle } from "~/components/home/qwikDocumentationArticle";
import { SubscribeSection } from "~/components/subcribeSection/subscribeSection";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";

export default component$(() => {
  const profile = useProfile();

  console.log(CHAPTERS2026);

  return (
    <main>
      <section class="relative flex w-full flex-col items-center overflow-hidden py-12 md:py-20">
        <div class="flex flex-col items-center px-4">
          <h1 class="mb-4 max-w-[80%] text-center text-4xl font-semibold md:mb-8 md:max-w-full md:text-6xl">
            Start building with{" "}
            <Link
              href="https://qwik.dev"
              class="text-(--qwik-dark-purple)! hover:text-(--qwik-light-purple)!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qwik
            </Link>
          </h1>
          <div class="max-w-xl text-center text-gray-900 md:mb-16">
            Learn Qwik through the updated 2026 edition and build a fully
            functional application using modern architecture and best practices.
          </div>
        </div>

        <div class="relative flex h-full w-full flex-col items-center justify-center px-4">
          <div class="absolute bottom-25 md:bottom-0">
            <HomeBackgroundPurple />
          </div>

          <div class="bg-vercel-100 absolute left-0 right-0 top-[57%] h-87.5 md:top-[62.7%] md:h-50" />

          <div class="relative flex w-full flex-col items-center pt-20 md:pt-8">
            <div class="dark:bg-vercel-100 relative flex w-full flex-col items-center rounded-xl bg-white p-4 shadow-md lg:w-178.25">
              <HeroLinesLight />
              <HeroLinesDark />

              <div class="relative -mt-14 flex w-full justify-center md:-mt-14">
                <div class="relative">
                  <BookSvgText
                    completed={profile.value?.completedChapters2026 || []}
                  />
                  <BookSvg id="learn" />
                </div>
              </div>

              <div class="relative mt-6 flex w-full max-w-full flex-col items-center justify-center space-y-4 pb-0 md:space-y-6 md:pb-4 lg:pt-4">
                <div class="flex max-w-full flex-col items-center justify-center">
                  <p
                    class="text_wrapper pb-2 text-(--qwik-dark-purple)"
                    data-version="v1"
                    style="--text-color:var(--ds-gray-1000);--xs-text-size:1.25rem;--xs-text-line-height:1.5rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.020625rem;--sm-text-size:1.25rem;--sm-text-line-height:1.5rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.020625rem;--smd-text-size:1.5rem;--smd-text-line-height:2rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.029375rem;--md-text-size:1.5rem;--md-text-line-height:2rem;--md-text-weight:600;--md-text-letter-spacing:-0.029375rem;--lg-text-size:1.5rem;--lg-text-line-height:2rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.029375rem"
                  >
                    Learn Qwik{" "}
                    <span class="text-(--qwik-dark-purple)">2026 Edition</span>
                  </p>

                  <div class="mx-auto  text-center ">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:400"
                    >
                      16 chapters that take you build a modern fully functional
                      Qwik app.
                    </p>
                  </div>

                  <div class="mt-6 flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-gray-50 px-6 py-3 text-sm leading-snug md:min-w-100">
                    <DisplayNextChapter
                      completed={profile.value?.completedChapters2026 || []}
                      version="2026"
                    />

                    <div class="ml-2">
                      <div
                        class="gauge_circle__N47Fa gauge_animate__yiaIw"
                        data-geist-progress-circle=""
                        style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
                      >
                        <ProgressCircle
                          completed={profile.value?.completedChapters2026 || []}
                          onlyCircle
                          responsive="largeOnly"
                          version="2026 Edition"
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
                    text="Start 2026 Edition"
                    completedChapters={
                      profile.value?.completedChapters2026 || []
                    }
                    version="2026"
                  >
                    <ProgressCircle
                      completed={profile.value?.completedChapters2026 || []}
                      onlyCircle
                      colorCircle="var(--ds-gray-900)"
                      colorProgressCircle="var(--ds-gray-100)"
                      responsive="smallOnly"
                      version="2026 Edition"
                    />
                  </BtAddChapter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="pb-8 md:pb-20">
        <SubscribeSection profile={profile} />
      </div>

      <HowDoesTheCourseWorkSection />

      <section class="mx-auto max-w-7xl px-4 pb-10 md:pb-20 ">
        <div class="rounded-2xl relative p-6 md:p-10 mb-8 md:mb-20 shadow-xl  overflow-hidden z-10 bg-(--qwik-light-purple)/5">
          <div class="absolute top-0">
            <HomeBackgroundPurple />
          </div>
          <div class="pb-8 flex flex-col justify-center text-center gap-4">
            <h2
              class="text_wrapper"
              style="--text-color:var(--ds-gray-1000);--xs-text-size:1.5rem;--xs-text-line-height:2rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.029375rem;--sm-text-size:1.5rem;--sm-text-line-height:2rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.029375rem;--smd-text-size:2rem;--smd-text-line-height:2.5rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.049375rem;--md-text-size:2rem;--md-text-line-height:2.5rem;--md-text-weight:600;--md-text-letter-spacing:-0.049375rem;--lg-text-size:2rem;--lg-text-line-height:2.5rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.049375rem"
            >
              Learn Qwik{" "}
              <span class="text-(--qwik-dark-purple)">2026 Edition</span>
            </h2>
            <p class="mx-auto my-1 w-[70%] text-gray-900 md:ml-2 md:mr-0 md:w-auto md:text-lg">
              The actively maintained version of the course, Built with Qwik
              1.19, Tailwind v4, Supabase and deployed on Vercel.
            </p>
          </div>
          <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHAPTERS2026.map((chapter2026) => {
              const isCompleted = profile.value?.completedChapters2026.includes(
                chapter2026.id,
              );

              return (
                <ChapterThumbnail
                  key={chapter2026.id}
                  href={`/learn/dashboard-app-2026/${chapter2026.uri}/`}
                  numberOrIcon={chapter2026.id.toString()}
                  title={chapter2026.title}
                  description={chapter2026.description}
                  isCompleted={isCompleted}
                  version="2026 Edition"
                />
              );
            })}
          </div>
          <div class="mt-4 flex w-full items-center justify-center  md:mt-8 md:w-auto">
            <div class="w-full md:w-58.25">
              <div>
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text="Start 2026 Edition"
                  completedChapters={profile.value?.completedChapters2026 || []}
                  version="2026"
                >
                  <ProgressCircle
                    completed={profile.value?.completedChapters2026 || []}
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

        <div class="rounded-2xl relative p-6 md:p-10 mb-8 md:mb-20 shadow-xl overflow-hidden z-10 bg-(--qwik-light-blue)/5">
          <div class="absolute top-0">
            <HomeBackground />
          </div>
          <div class="pb-8 flex flex-col justify-center text-center gap-4">
            <h2
              class="text_wrapper"
              style="--text-color:var(--ds-gray-1000);--xs-text-size:1.5rem;--xs-text-line-height:2rem;--xs-text-weight:600;--xs-text-letter-spacing:-0.029375rem;--sm-text-size:1.5rem;--sm-text-line-height:2rem;--sm-text-weight:600;--sm-text-letter-spacing:-0.029375rem;--smd-text-size:2rem;--smd-text-line-height:2.5rem;--smd-text-weight:600;--smd-text-letter-spacing:-0.049375rem;--md-text-size:2rem;--md-text-line-height:2.5rem;--md-text-weight:600;--md-text-letter-spacing:-0.049375rem;--lg-text-size:2rem;--lg-text-line-height:2.5rem;--lg-text-weight:600;--lg-text-letter-spacing:-0.049375rem"
            >
              Learn Qwik <span class="text-red-700">Legacy Version</span>
            </h2>
            <p class="mx-auto my-1 w-[70%] text-gray-900 md:ml-2 md:mr-0 md:w-auto md:text-lg">
              An earlier version of the course. Not actively maintained, but
              still useful for reference.
            </p>
          </div>
          <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {CHAPTERS.map((chapter) => {
              const isCompleted = profile.value?.completedChapters.includes(
                chapter.id,
              );

              return (
                <ChapterThumbnail
                  key={chapter.id}
                  href={`/learn/dashboard-app/${chapter.uri}/`}
                  numberOrIcon={chapter.id.toString()}
                  title={chapter.title}
                  description={chapter.description}
                  isCompleted={isCompleted}
                />
              );
            })}
          </div>
          <div class="mt-4 flex w-full items-center justify-center  md:mt-8 md:w-auto ">
            <div class="w-full md:w-58.25">
              <div>
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text="Browse Legacy Edition"
                  completedChapters={profile.value?.completedChapters || []}
                  version="Legacy"
                >
                  <ProgressCircle
                    completed={profile.value?.completedChapters || []}
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

        <div class="bg-background-200 border-t pt-12 md:pt-16">
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

          <QwikDocumentationArticle />
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Start building with Qwik",
  "Qwik offers a new way to build web applications. Learn the foundations with interactive courses and create a functional demo site.",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/",
);
