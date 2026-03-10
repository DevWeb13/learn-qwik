import { component$ } from "@builder.io/qwik";
import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground from "~/assets/img/ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersionsWithoutBackground.png?jsx";

const STEPS = [
  {
    title: "Set up the project",
    text: 'Start from the "LRD-Qwik Dashboard" base and get your local environment ready.',
    icon: (
      <svg
        fill="none"
        height="20"
        width="20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"></path>
      </svg>
    ),
  },
  {
    title: "Build with real UI blocks",
    text: "Use ready-made visual foundations and apply Qwik patterns chapter by chapter.",
    icon: (
      <svg
        fill="none"
        height="20"
        width="20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
  },
  {
    title: "Connect real application logic",
    text: "Bring the dashboard to life with data flows, app logic, and realistic structure.",
    icon: (
      <svg
        fill="none"
        height="20"
        width="20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9.12132 14.8787L14.8787 9.12132"></path>
        <path d="M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17C4 15.3431 5.34315 14 7 14C8.65685 14 10 15.3431 10 17Z"></path>
        <path d="M20 7C20 8.65685 18.6569 10 17 10C15.3431 10 14 8.65685 14 7C14 5.34315 15.3431 4 17 4C18.6569 4 20 5.34315 20 7Z"></path>
      </svg>
    ),
  },
  {
    title: "Finish with something deployable",
    text: "End with a project that feels real, not a toy demo abandoned in a folder.",
    icon: (
      <svg
        fill="none"
        height="20"
        width="20"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M16 16l-4-4-4 4"></path>
        <path d="M12 12v9"></path>
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Progress stays synced",
    text: "Complete chapters at your own pace and pick up where you left off.",
    icon: (
      <svg
        fill="none"
        height="18"
        width="18"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
      </svg>
    ),
  },
  {
    title: "Quick quizzes reinforce learning",
    text: "Test what you understood as you move through the course.",
    icon: (
      <svg
        fill="none"
        height="18"
        width="18"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"></path>
        <circle cx="12" cy="17" r=".5"></circle>
      </svg>
    ),
  },
];

export const HowDoesTheCourseWorkSection = component$(() => {
  return (
    <section class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <div class="relative overflow-hidden rounded-[2rem] border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_48%)]" />
        <div class="absolute -top-10 right-0 opacity-60">
          <div class="h-48 w-48 rounded-full bg-(--qwik-light-purple)/20 blur-3xl" />
        </div>

        <div class="relative">
          <div class="mx-auto mb-10 max-w-3xl text-center">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              How it works
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              Learn by building the project step by step.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              The course is structured around a real dashboard application, so
              each chapter moves the project forward instead of wandering around
              in theoretical fog.
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
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  class="group rounded-[1.5rem] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--qwik-dark-purple)/18 hover:shadow-md"
                >
                  <div class="flex items-start gap-4">
                    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/12 text-(--qwik-dark-purple)">
                      {step.icon}
                    </div>

                    <div class="min-w-0">
                      <div class="mb-2 flex items-center gap-3">
                        <span class="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gray-500">
                          Step {index + 1}
                        </span>
                      </div>

                      <h3 class="text-base font-semibold text-(--qwik-dirty-black) md:text-lg">
                        {step.title}
                      </h3>

                      <p class="mt-2 text-sm leading-6 text-gray-600 md:text-base">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                class="rounded-[1.5rem] border border-gray-200 bg-gray-50 p-5"
              >
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--qwik-dark-purple)/10 bg-white text-(--qwik-dark-purple)">
                    {benefit.icon}
                  </div>

                  <div>
                    <h3 class="text-sm font-semibold text-(--qwik-dirty-black) md:text-base">
                      {benefit.title}
                    </h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
