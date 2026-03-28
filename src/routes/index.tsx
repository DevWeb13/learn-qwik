// src/routes/index.tsx

import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import LearnQwikLogo from "~/assets/img/android-chrome-192x192.png?jsx";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { BtAddChapter } from "~/components/UI/btAddChapter/btAddChapter";
import { GuidesScrollWrapper } from "~/components/UI/guidesScrollWrapper/guidesScrollWrapper";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
import { HomeChapterThumbnail } from "~/components/home/homeChapterThumbnail";
import { HowDoesTheCourseWorkSection } from "~/components/home/howDoesTheCourseWorkSection";
import { QwikDocumentationArticle } from "~/components/home/qwikDocumentationArticle";
import { DisplayNextChapter } from "~/components/learn/DisplayNextChapter/displayNextChapter";
import { BookSvgText } from "~/components/learn/bookSvgText/bookSvgText";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { useProfile } from "./layout";

export default component$(() => {
  const profile = useProfile();

  const completed2026 = profile.value?.completedChapters2026 || [];
  const completedLegacy = profile.value?.completedChapters || [];

  const total2026 = CHAPTERS2026.length;
  const totalLegacy = CHAPTERS.length;

  const hasStarted2026 = completed2026.length > 0;
  const primaryCtaText = hasStarted2026
    ? "Resume 2026 Edition"
    : "Start 2026 Edition";

  const shellClass = "mx-auto max-w-7xl px-4 md:px-6 lg:px-14 2xl:px-0";

  const starterPackHighlights = [
    {
      title: "Full-stack SSR",
      description:
        "A Qwik SSR-first architecture with Supabase already wired for a real modern app.",
    },
    {
      title: "Auth flows included",
      description:
        "Google auth, Magic Link, protected routes, and a cleaner path to real user access.",
    },
    {
      title: "Production-minded setup",
      description:
        "Tailwind, Vercel deployment, environment variables, and an easier starting point to extend.",
    },
  ];

  return (
    <main class="bg-white">
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 opacity-90">
            <HomeBackgroundPurple />
          </div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_45%)]" />
        </div>

        <div
          class={`${shellClass} relative grid min-h-[calc(100dvh-var(--header-height))] gap-10 py-12  lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14`}
        >
          <div class="relative">
            <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
              Updated course • 2026 Edition
            </div>

            <h1 class="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-6xl">
              Learn Qwik by building a real modern full-stack app
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-7 text-gray-700 md:text-xl md:leading-8">
              A free Qwik tutorial built to teach you step by step through a
              real modern full-stack app.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <div class="w-full sm:w-auto">
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text={primaryCtaText}
                  completedChapters={completed2026}
                  version="2026"
                >
                  <ProgressCircle
                    completed={completed2026}
                    onlyCircle
                    colorCircle="var(--ds-gray-200)"
                    responsive="smallOnly"
                    version="2026 Edition"
                  />
                </BtAddChapter>
              </div>

              <Link
                href="/starter-pack/"
                class="font-bold inline-flex items-center justify-center rounded-lg  px-5 py-3 text-sm  text-(--qwik-dark-purple)! transition-all duration-200 hover:bg-white hover:text-(--qwik-deep-purple)! border border-gray-300 bg-gray-50"
              >
                Discover the Starter Pack
              </Link>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Free course
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Qwik tutorial
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Real full-stack app
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                2026 edition
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute inset-0 rounded-4xl bg-(--qwik-light-purple)/10 blur-3xl" />

            <div class="relative overflow-hidden rounded-xl border border-(--qwik-dark-purple)/10 bg-white/90 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-sm md:p-6">
              <div class="relative">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                      Learn Qwik
                    </p>
                    <h2 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black)">
                      2026 Edition
                    </h2>
                  </div>

                  <div class="shrink-0 block">
                    <LearnQwikLogo class="size-12" />
                  </div>
                </div>

                <p class="mt-3 text-sm leading-6 text-gray-600">
                  The actively maintained version of the course, designed to
                  teach Qwik progressively.
                </p>

                <div class="mt-8 flex justify-center">
                  <div class="relative scale-[1.02]">
                    <BookSvgText completed={completed2026} />
                    <BookSvg id="learn" />
                  </div>
                </div>

                <div class="mt-8 grid gap-3 sm:grid-cols-2">
                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p class="text-sm font-medium text-gray-500">Progress</p>
                    <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                      {completed2026.length} / {total2026} chapters completed
                    </p>
                  </div>

                  <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p class="text-sm font-medium text-gray-500">Next step</p>
                    <div class="mt-3">
                      <DisplayNextChapter
                        completed={completed2026}
                        version="2026"
                        compact
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-6 flex justify-center">
                  <div class="w-auto">
                    <BtAddChapter
                      goToChapter={0}
                      title=""
                      text={primaryCtaText}
                      completedChapters={completed2026}
                      version="2026"
                    >
                      <ProgressCircle
                        completed={completed2026}
                        onlyCircle
                        colorCircle="var(--ds-gray-200)"
                        responsive="smallOnly"
                        version="2026 Edition"
                      />
                    </BtAddChapter>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class={`${shellClass} py-12 md:py-16`}>
        <div class="grid gap-4 md:grid-cols-3">
          <div class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Practical
            </p>
            <h2 class="mt-3 text-xl font-semibold text-(--qwik-dirty-black)">
              Built around an actual application
            </h2>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              This is not a vague tour of the framework. You move through real
              chapters and assemble a concrete project.
            </p>
          </div>

          <div class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Modern
            </p>
            <h2 class="mt-3 text-xl font-semibold text-(--qwik-dirty-black)">
              Updated stack and current workflow
            </h2>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Qwik, Tailwind v4, Supabase, auth flows, deployment, and the kind
              of structure people actually need in 2026.
            </p>
          </div>

          <div class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Progressive
            </p>
            <h2 class="mt-3 text-xl font-semibold text-(--qwik-dirty-black)">
              Clear path without useless noise
            </h2>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              The point is to understand Qwik by shipping things, not by bathing
              in a hot tub of over-explained abstraction.
            </p>
          </div>
        </div>
      </section>

      <section id="edition-2026" class={`${shellClass} py-12 md:py-20`}>
        <div class="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Main course
            </p>
            <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              Start with the 2026 Edition.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              It gives you the clearest way to learn Qwik today, through a real
              project built step by step.
            </p>
          </div>

          <div class="rounded-3xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-5 py-4 text-sm text-gray-700">
            <span class="font-semibold text-(--qwik-dirty-black)">
              Progress:
            </span>{" "}
            {completed2026.length} / {total2026} chapters completed
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS2026.map((chapter2026) => {
            const isCompleted = completed2026.includes(chapter2026.id);

            return (
              <HomeChapterThumbnail
                key={chapter2026.id}
                href={
                  chapter2026.uri === ""
                    ? "/learn/dashboard-app-2026/"
                    : `/learn/dashboard-app-2026/${chapter2026.uri}/`
                }
                numberOrIcon={chapter2026.id.toString()}
                title={chapter2026.title}
                description={chapter2026.description}
                isCompleted={isCompleted}
                version="2026 Edition"
              />
            );
          })}
        </div>

        <div class="mt-8 flex justify-center md:mt-10">
          <div class="w-auto">
            <BtAddChapter
              goToChapter={0}
              title=""
              text={primaryCtaText}
              completedChapters={completed2026}
              version="2026"
            >
              <ProgressCircle
                completed={completed2026}
                onlyCircle
                colorCircle="var(--ds-gray-200)"
                responsive="smallOnly"
                version="2026 Edition"
              />
            </BtAddChapter>
          </div>
        </div>
      </section>

      <HowDoesTheCourseWorkSection />

      <section class={`${shellClass}`}>
        <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
          <div class="absolute inset-0 bg-(--qwik-light-purple)/10 pointer-events-none" />
          <div class="absolute right-0 top-0 opacity-70 pointer-events-none">
            <HomeBackgroundPurple />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div class="max-w-3xl">
              <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-white px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
                New product • Early access waitlist
              </div>

              <h2 class="mt-6 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
                Need a faster way to start a real Qwik full-stack SSR app?
              </h2>

              <p class="mt-4 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
                The Learn Qwik Starter Pack is a production-minded starting
                point built around Qwik, Supabase, Tailwind, authentication
                flows, SSR, and Vercel deployment, so you can skip repetitive
                setup and focus on building.
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  Qwik SSR
                </div>
                <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  Supabase
                </div>
                <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  Tailwind
                </div>
                <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  Google + Magic Link
                </div>
                <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                  Vercel
                </div>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/starter-pack/"
                  class="inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white!"
                >
                  Discover the Starter Pack
                </Link>

                <Link
                  href="/starter-pack/#waitlist"
                  class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition-all duration-200 hover:border-gray-300 hover:bg-white hover:text-(--qwik-dark-background)!"
                >
                  Join the waitlist
                </Link>
              </div>

              <p class="mt-4 text-sm text-gray-600">
                No payment yet. Just a clean way to measure interest before the
                first public release.
              </p>
            </div>

            <div class="grid gap-4">
              {starterPackHighlights.map((item) => (
                <div
                  key={item.title}
                  class="rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm"
                >
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    {item.title}
                  </p>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}

              <div class="rounded-[1.75rem] border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-5">
                <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                  Positioning
                </p>
                <p class="mt-3 text-sm leading-6 text-gray-700">
                  Not “just a template”. A practical shortcut to a cleaner,
                  faster starting point for a real Qwik app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class={`${shellClass} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div class="absolute right-0 top-0 opacity-70">
            <HomeBackground />
          </div>

          <div class="relative">
            <div class="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
              <div class="max-w-3xl">
                <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-blue)">
                  Secondary reference
                </p>
                <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
                  Legacy Version
                </h2>
                <p class="mt-4 text-base leading-7 text-gray-700">
                  Still available for reference, comparison, or older material.
                  Useful, yes. Main path, no.
                </p>
              </div>

              <div class="rounded-3xl border border-(--qwik-dark-blue)/10 bg-(--qwik-light-blue)/10 px-5 py-4 text-sm text-gray-700">
                <span class="font-semibold text-(--qwik-dirty-black)">
                  Progress:
                </span>{" "}
                {completedLegacy.length} / {totalLegacy} chapters completed
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {CHAPTERS.map((chapter) => {
                const isCompleted = completedLegacy.includes(chapter.id);

                return (
                  <HomeChapterThumbnail
                    key={chapter.id}
                    href={
                      chapter.uri === ""
                        ? "/learn/dashboard-app/"
                        : `/learn/dashboard-app/${chapter.uri}/`
                    }
                    numberOrIcon={chapter.id.toString()}
                    title={chapter.title}
                    description={chapter.description}
                    isCompleted={isCompleted}
                    version="Legacy"
                  />
                );
              })}
            </div>

            <div class="mt-8 flex justify-center">
              <div class="w-auto">
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text="Browse Legacy Edition"
                  completedChapters={completedLegacy}
                  version="Legacy"
                >
                  <ProgressCircle
                    completed={completedLegacy}
                    onlyCircle
                    colorCircle="var(--ds-gray-200)"
                    responsive="smallOnly"
                  />
                </BtAddChapter>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-t bg-white">
        <div class={`${shellClass} py-12 md:py-20`}>
          <div class="mb-8 text-center md:mb-10 md:text-left">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Keep going
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
              Go deeper with guides and official Qwik resources.
            </h2>
            <p class="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              Once the course gets you moving, use these extra resources to
              explore specific Qwik topics in more depth.
            </p>
          </div>

          <GuidesScrollWrapper />

          <div class="mt-6 md:mt-8">
            <QwikDocumentationArticle />
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Free Qwik Tutorial 2026: Build a Real Full-Stack App",
  description:
    "Learn Qwik for free with a practical tutorial built around a real modern full-stack app. Follow a clear path, build step by step, and progress with the 2026 edition.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/",
  type: "website",
});
