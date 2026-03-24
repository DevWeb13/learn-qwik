import { component$ } from "@builder.io/qwik";
import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground from "~/assets/img/ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground.png?jsx";

const HIGHLIGHTS = [
  {
    eyebrow: "Real project",
    title: "Build one application from start to finish",
    text: "Each chapter moves the same project forward, so you learn Qwik through a coherent build instead of disconnected exercises.",
  },
  {
    eyebrow: "Modern stack",
    title: "Work with a modern full-stack setup",
    text: "Learn Qwik in a professional environment with modern tools, clear structure, and patterns you can actually reuse in real projects.",
  },
  {
    eyebrow: "Clear progression",
    title: "Move forward with a structured path",
    text: "The course is organized chapter by chapter so you always understand what you are building, why it matters, and what comes next.",
  },
  {
    eyebrow: "Practical outcome",
    title: "Finish with a deployable professional app",
    text: "The goal is to build a real full-stack application that is structured, professional, and ready to be deployed.",
  },
];

export const HowDoesTheCourseWorkSection = component$(() => {
  return (
    <section class="mx-auto max-w-7xl px-4 py-12 md:py-20 lg:px-14 2xl:px-0">
      <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_48%)]" />
        <div class="absolute -top-10 right-0 opacity-60">
          <div class="h-48 w-48 rounded-full bg-(--qwik-light-purple)/20 blur-3xl" />
        </div>

        <div class="relative">
          <div class="mx-auto mb-10 max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Qwik tutorial
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              Learn Qwik by building a real full-stack application.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              The course follows one real project from start to finish, so each
              chapter helps you build something concrete, coherent, and ready
              for production.
            </p>
          </div>

          <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div class="relative overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-4 md:p-6">
              <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.04),transparent_55%)]" />
              <div class="relative flex items-center justify-center">
                <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground
                  alt="Screenshots of the dashboard project showing desktop and mobile versions."
                  class="block w-full max-w-2xl"
                />
              </div>
            </div>

            <div class="grid gap-4">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  class="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    {item.eyebrow}
                  </p>

                  <p class="mt-3 text-base font-semibold text-(--qwik-dirty-black) md:text-lg">
                    {item.title}
                  </p>

                  <p class="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
