// src/routes/starter-pack/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  Form,
  Link,
  routeAction$,
  routeLoader$,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { StackIcon } from "~/components/starter-pack/StackIcon";
import {
  FAQ_ITEMS,
  GOOD_FIT_ITEMS,
  HERO_CHIPS,
  INCLUDED_CARDS,
  NOT_TARGET_ITEMS,
  OFFER_CARDS,
  PREVIEW_LIST,
  PROMISE_CARDS,
  REUSE_CARDS,
  SHELL_CLASS,
  STACK_CARDS,
  STACK_LINKS,
  WAITLIST_BENEFITS,
} from "~/constants/starterPackContent";
import {
  starterPackWaitlistSchema,
  submitStarterPackWaitlist,
} from "~/lib/supabase/actions";
import { starterPackWaitlistStatus } from "~/lib/supabase/loaders";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

const STARTER_PACK_DEMO_URL = "https://learn-qwik-starter-pack.vercel.app/";

export const useStarterPackWaitlistStatus = routeLoader$((requestEvent) =>
  starterPackWaitlistStatus(requestEvent),
);

export const useStarterPackWaitlistAction = routeAction$(
  (data, ev) => submitStarterPackWaitlist(data, ev),
  zod$(starterPackWaitlistSchema),
);

export default component$(() => {
  const waitlistAction = useStarterPackWaitlistAction();
  const waitlistStatus = useStarterPackWaitlistStatus();

  const submittedEmailEntry = waitlistAction.formData?.get("email");
  const submittedEmail =
    typeof submittedEmailEntry === "string" ? submittedEmailEntry.trim() : "";

  const isAuthenticated = waitlistStatus.value.isAuthenticated === true;
  const connectedProfileEmail = waitlistStatus.value.profileEmail ?? "";
  const persistedWaitlistEmail = waitlistStatus.value.email ?? "";

  const hasSuccess =
    waitlistAction.value?.success === true ||
    waitlistStatus.value.alreadyJoined === true;

  let successEmail = persistedWaitlistEmail;

  if (waitlistAction.value?.success === true) {
    successEmail = waitlistAction.value.email ?? submittedEmail;
  }

  const hasError = waitlistAction.value?.failed === true;

  let emailErrorMessage: string | undefined;

  if (hasError && waitlistAction.value.fieldErrors.email) {
    emailErrorMessage = waitlistAction.value.fieldErrors.email;
  }

  let formErrorMessage: string | undefined;

  if (hasError && !emailErrorMessage) {
    formErrorMessage = waitlistAction.value.message;
  }

  let emailFieldValue = "";

  if (isAuthenticated) {
    emailFieldValue = connectedProfileEmail;
  } else if (hasError) {
    emailFieldValue = submittedEmail;
  }

  const primaryLinkClass =
    "inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white!";
  const secondaryLinkClass =
    "inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition-all duration-200 hover:border-gray-300 hover:bg-white hover:text-(--qwik-dark-background)!";

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
          class={`${SHELL_CLASS} relative grid gap-8 py-8 md:py-10 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-8 lg:py-8`}
        >
          <header class="relative max-w-2xl">
            <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
              Early access open • Live demo available
            </div>

            <h1 class="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-5xl xl:text-[4rem]">
              Join early access for the Qwik Starter Pack.
            </h1>

            <p class="mt-5 max-w-2xl text-base leading-7 text-gray-700 md:text-lg md:leading-8">
              Selected users may receive free access before launch. You can also
              test the live demo and see auth, protected pages, private CRUD,
              and account flows already in place.
            </p>

            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="#waitlist" class={primaryLinkClass}>
                Join early access
              </Link>

              <a
                href={STARTER_PACK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                class={secondaryLinkClass}
              >
                Open live demo
              </a>
            </div>

            <div class="mt-7 flex flex-wrap gap-2">
              {HERO_CHIPS.map((chip) => (
                <div
                  key={chip}
                  class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                >
                  {chip}
                </div>
              ))}
            </div>
          </header>

          <aside class="relative">
            <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm md:p-6">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    What you can test now
                  </p>
                  <h2 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black)">
                    A real demo on Vercel
                  </h2>
                </div>

                <div class="rounded-2xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                  Live demo
                </div>
              </div>

              <div class="mt-5 grid gap-3 sm:grid-cols-2">
                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Access</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Public link available now
                  </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Early access</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Selected users may receive free access
                  </p>
                </div>
              </div>

              <div class="mt-5 space-y-3">
                {PREVIEW_LIST.map((item, index) => (
                  <div
                    key={item}
                    class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3"
                  >
                    <div class="flex size-7 shrink-0 items-center justify-center rounded-full bg-(--qwik-light-purple)/20 text-xs font-semibold text-(--qwik-dark-purple)">
                      {index + 1}
                    </div>
                    <p class="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-4 md:py-8`}>
        <div class="grid gap-4 md:grid-cols-3">
          {OFFER_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-6"
            >
              <h2 class="text-lg font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-700">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-8 md:py-14`}>
        <div class="grid gap-4 md:grid-cols-3">
          {PROMISE_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                {card.eyebrow}
              </p>
              <h2 class="mt-3 text-xl font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* <section id="video" class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div class="absolute right-0 top-0 pointer-events-none opacity-70">
            <HomeBackground />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div class="max-w-2xl">
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Walkthrough video
              </p>
              <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
                Watch the full product flow before launch.
              </h2>
              <p class="mt-4 text-base leading-7 text-gray-700">
                This walkthrough shows the main user journey inside the live
                demo, from sign-in to account deletion. It is the fastest way to
                see what the Starter Pack already covers and how the core flow
                works in practice.
              </p>

              <div class="mt-6 space-y-3">
                {VIDEO_WALKTHROUGH_STEPS.map((item, index) => (
                  <div
                    key={item}
                    class="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <div class="flex size-7 shrink-0 items-center justify-center rounded-full bg-(--qwik-light-purple)/20 text-xs font-semibold text-(--qwik-dark-purple)">
                      {index + 1}
                    </div>
                    <p class="text-sm leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={STARTER_PACK_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={primaryLinkClass}
                >
                  Open live demo
                </a>

                <Link href="#waitlist" class={secondaryLinkClass}>
                  Join early access
                </Link>
              </div>
            </div>

            <div class="rounded-[1.75rem] border border-gray-200 bg-white p-4 shadow-sm">
              <div class="flex aspect-video items-center justify-center rounded-[1.25rem] border border-gray-200 bg-white p-6 text-center">
                <div class="max-w-sm">
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    Walkthrough
                  </p>
                  <h3 class="mt-3 text-2xl font-semibold text-(--qwik-dirty-black)">
                    See the complete demo flow
                  </h3>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    Sign in, open the account page, switch auth method, manage
                    private experiments, and delete the account at the end.
                  </p>
                </div>
              </div>

              <div class="mt-4 rounded-2xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-4 py-3 text-sm text-gray-700">
                A short product walkthrough focused on the real user flow inside
                the live demo.
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="included" class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              What’s included
            </p>
            <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              A faster starting point for a real Qwik app.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              The goal is simple: give you a base that already makes sense, so
              you spend less time rebuilding setup work and more time building
              your product.
            </p>
          </div>

          <div class="rounded-3xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-5 py-4 text-sm text-gray-700">
            <span class="font-semibold text-(--qwik-dirty-black)">
              Built with:
            </span>{" "}
            Qwik + Supabase + Tailwind + Vercel
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {INCLUDED_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="text-xl font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="mb-8 max-w-3xl md:mb-10">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            What you actually reuse
          </p>
          <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
            The demo shows the flow. The real value is the reusable foundation
            behind it.
          </h2>
          <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
            You are not expected to keep the sample UI or the experiments
            example as they are. The point is to reuse the auth flow, account
            flow, loader and action examples, Supabase wiring, and documentation
            as a base for your own product.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {REUSE_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="min-h-16 text-xl font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div class="absolute right-0 top-0 pointer-events-none opacity-70">
            <HomeBackground />
          </div>

          <div class="relative">
            <div class="mb-8 max-w-3xl md:mb-10">
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Stack
              </p>
              <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
                Familiar tools, cleaner starting point.
              </h2>
              <p class="mt-4 text-base leading-7 text-gray-700">
                Qwik for the app, Supabase for auth and backend wiring, Tailwind
                for the UI foundation, and Vercel for deployment.
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {STACK_CARDS.map((item) => (
                <a
                  key={item.title}
                  href={STACK_LINKS[item.kind]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title} official documentation`}
                  class="group block h-full"
                >
                  <article class="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <StackIcon kind={item.kind} />
                    <h3 class="mt-4 text-lg font-semibold text-(--qwik-dirty-black)">
                      {item.title}
                    </h3>
                    <p class="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="grid items-stretch gap-4 lg:grid-cols-2">
          <article class="flex h-full flex-col rounded-4xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Good fit
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) lg:min-h-28">
              For developers who want a faster starting point
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              {GOOD_FIT_ITEMS.map((item) => (
                <li
                  key={item}
                  class="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article class="flex h-full flex-col rounded-4xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-blue)">
              Not the target
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) lg:min-h-28">
              Not built for every possible case on day one
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              {NOT_TARGET_ITEMS.map((item) => (
                <li
                  key={item}
                  class="rounded-xl border border-gray-200 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="mb-8 max-w-3xl md:mb-10">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            FAQ
          </p>
          <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
            A few useful clarifications before launch.
          </h2>
        </div>

        <div class="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-5">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              class="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="min-h-18 text-xl font-semibold text-(--qwik-dirty-black)">
                {item.question}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
          <div class="absolute inset-0 pointer-events-none bg-(--qwik-light-purple)/10" />
          <div class="absolute right-0 top-0 pointer-events-none opacity-70">
            <HomeBackgroundPurple />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div class="max-w-3xl">
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Early access
              </p>

              <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
                Get early access to the full Starter Pack.
              </h2>

              <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
                Joining the list is free and does not commit you to buy
                anything. A limited number of selected users may receive free
                access before public launch.
              </p>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={STARTER_PACK_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class={primaryLinkClass}
                >
                  Open live demo
                </a>

                <Link href="#included" class={secondaryLinkClass}>
                  Review what’s included
                </Link>
              </div>

              <div class="mt-6 rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                <div class="space-y-3">
                  {WAITLIST_BENEFITS.map((item) => (
                    <div key={item} class="flex items-start gap-3">
                      <div class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-(--qwik-light-purple)/20 text-(--qwik-dark-purple)">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m20 6-11 11-5-5" />
                        </svg>
                      </div>
                      <p class="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              {hasSuccess ? (
                <div
                  class="rounded-3xl border border-emerald-200 bg-emerald-50/90 p-5"
                  aria-live="polite"
                >
                  <div class="flex items-start gap-3">
                    <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m20 6-11 11-5-5" />
                      </svg>
                    </div>

                    <div class="min-w-0">
                      <p class="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                        Success
                      </p>
                      <h3 class="mt-2 text-xl font-semibold text-emerald-950">
                        You’re on the early access list.
                      </h3>
                      <p class="mt-3 text-sm leading-6 text-emerald-900/85">
                        You’ll be among the first to hear when the Starter Pack
                        launches. A limited number of selected users may also
                        receive free access before public launch.
                      </p>

                      {successEmail && (
                        <div class="mt-4 rounded-xl border border-emerald-200 bg-white/80 px-4 py-3 text-sm font-medium text-emerald-950">
                          {successEmail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Form action={waitlistAction} class="space-y-4">
                  {isAuthenticated ? (
                    <div>
                      <label
                        for="starter-pack-email"
                        class="mb-2 block text-sm font-medium text-(--qwik-dirty-black)"
                      >
                        Account email
                      </label>

                      <input
                        id="starter-pack-email"
                        type="email"
                        readOnly
                        value={emailFieldValue}
                        class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-(--qwik-dirty-black) outline-none"
                      />

                      <input
                        type="hidden"
                        name="email"
                        value={connectedProfileEmail}
                      />

                      <p class="mt-2 text-xs leading-5 text-gray-500">
                        You’re signed in, so we’ll use your account email for
                        early access.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <label
                        for="starter-pack-email"
                        class="mb-2 block text-sm font-medium text-(--qwik-dirty-black)"
                      >
                        Email address
                      </label>

                      <input
                        id="starter-pack-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={emailFieldValue}
                        aria-invalid={emailErrorMessage ? "true" : "false"}
                        aria-describedby={
                          emailErrorMessage
                            ? "starter-pack-email-error"
                            : undefined
                        }
                        placeholder="you@example.com"
                        class={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-(--qwik-dirty-black) outline-none transition-all duration-200 placeholder:text-gray-400 ${
                          emailErrorMessage
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-(--qwik-dark-purple)"
                        }`}
                      />
                    </div>
                  )}

                  <div class="hidden" aria-hidden="true">
                    <label for="starter-pack-website">Website</label>
                    <input
                      id="starter-pack-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={waitlistAction.isRunning}
                    class="inline-flex w-full items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white! disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {waitlistAction.isRunning
                      ? "Joining..."
                      : "Join early access"}
                  </button>

                  <p class="text-xs leading-5 text-gray-500">
                    Free to join. No commitment. We’ll only send Starter Pack
                    launch and early access updates.
                  </p>

                  {emailErrorMessage && (
                    <div
                      id="starter-pack-email-error"
                      class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                      aria-live="polite"
                    >
                      {emailErrorMessage}
                    </div>
                  )}

                  {formErrorMessage && (
                    <div
                      class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                      aria-live="polite"
                    >
                      {formErrorMessage}
                    </div>
                  )}
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Starter Pack Early Access",
  description:
    "Join early access for the Learn Qwik Starter Pack. A limited number of selected users may receive free access before public launch. Live demo available.",
  imageUrl: "https://www.learn-qwik.com/meta-starter-pack.webp",
  url: "https://www.learn-qwik.com/starter-pack/",
  type: "website",
});
