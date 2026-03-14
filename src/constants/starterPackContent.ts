// src/constants/starterPackContent.ts

export const SHELL_CLASS = "mx-auto max-w-7xl px-4 md:px-6 lg:px-14 2xl:px-0";

export type StackIconKind = "qwik" | "supabase" | "tailwind" | "vercel";

export const HERO_CHIPS = [
  "Paid starter pack",
  "No commitment today",
  "Early access list",
  "Selected test access",
  "Qwik SSR",
  "Supabase",
  "Tailwind",
  "Vercel",
] as const;

export const PREVIEW_LIST = [
  "Core project structure already in place",
  "Supabase auth and protected routes",
  "Tailwind base ready to extend",
  "A deployment path that already makes sense",
  "Starter code + README guidance",
  "A cleaner base for a real app",
] as const;

export const OFFER_CARDS = [
  {
    title: "Free early access",
    description:
      "Join the list for free and hear about the Starter Pack before public launch. No payment today and no obligation to buy.",
  },
  {
    title: "Limited test preview",
    description:
      "Some selected subscribers may be invited to test the Starter Pack before launch through a limited private preview.",
  },
  {
    title: "Early launch advantage",
    description:
      "Early access members will hear about the launch offer first when the Starter Pack goes live.",
  },
] as const;

export const PROMISE_CARDS = [
  {
    eyebrow: "Time saved",
    title: "Skip the slow setup phase",
    description:
      "The core project structure is already in place, so you can focus on building features instead of spending hours on setup.",
  },
  {
    eyebrow: "More clarity",
    title: "Start from something you can actually understand",
    description:
      "The point is not to dump files on you. The point is to give you a cleaner structure that is easier to read, extend, and ship.",
  },
  {
    eyebrow: "More focus",
    title: "Spend your time on your app",
    description:
      "Auth, protected routes, environment setup, and deployment thinking are already part of the starting point.",
  },
] as const;

export const INCLUDED_CARDS = [
  {
    title: "Starter codebase",
    description:
      "A real Qwik SSR starting point designed for an actual app, not a toy demo that falls apart the moment the project becomes serious.",
  },
  {
    title: "Supabase integration",
    description:
      "A practical base for database, auth, Magic Link, and backend wiring without turning week one into a ritual of confusion.",
  },
  {
    title: "Protected route patterns",
    description:
      "A cleaner path for gated pages and user-aware behavior without improvising the structure from scratch.",
  },
  {
    title: "Tailwind base",
    description:
      "A styling foundation ready to extend, so you do not waste energy rebuilding the same visual setup again.",
  },
  {
    title: "Vercel deployment path",
    description:
      "A deployment setup that already points in the right direction instead of leaving you to negotiate with entropy alone.",
  },
  {
    title: "README and setup guidance",
    description:
      "Not just files. The package is meant to include enough guidance to help you understand what you are starting from.",
  },
] as const;

export const STACK_CARDS = [
  {
    kind: "qwik" as const,
    title: "Qwik",
    description:
      "The framework at the core of the Starter Pack, with SSR already part of the starting architecture.",
  },
  {
    kind: "supabase" as const,
    title: "Supabase",
    description:
      "Database, auth, Magic Link, and backend wiring in a structure that is ready to use.",
  },
  {
    kind: "tailwind" as const,
    title: "Tailwind",
    description:
      "A practical styling base that keeps the project moving without getting lost in CSS archaeology.",
  },
  {
    kind: "vercel" as const,
    title: "Vercel",
    description:
      "A deployment path that matches the goal: ship faster, break less, and keep the setup understandable.",
  },
] as const;

export const STACK_LINKS: Record<StackIconKind, string> = {
  qwik: "https://qwik.dev/docs/",
  supabase: "https://supabase.com/docs",
  tailwind: "https://tailwindcss.com/docs",
  vercel: "https://vercel.com/docs",
};

export const GOOD_FIT_ITEMS = [
  "You already know basic web development and want to launch with Qwik faster.",
  "You do not want to build auth, protected routes, and deployment setup from zero.",
  "You already know React or modern frontend patterns and want a Qwik starting point that feels familiar.",
] as const;

export const NOT_TARGET_ITEMS = [
  "Not for complete beginners who still need core HTML, CSS, and JavaScript foundations first.",
  "Not a giant all-in-one SaaS machine with every feature in the observable universe.",
  "Not a magic spell. It is a faster, cleaner starting point, not instant project success in a shiny box.",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is this free?",
    answer:
      "No. The Starter Pack is planned as a paid product. Joining early access is free and does not commit you to buy anything.",
  },
  {
    question: "What do early access members get?",
    answer:
      "They will be the first to hear when the Starter Pack launches. Early access members will also hear about the launch offer first, and some selected subscribers may be invited to test the Starter Pack in a limited private preview before launch.",
  },
  {
    question: "Will everyone get private preview access?",
    answer:
      "No. Private preview access will only be offered to a limited number of selected subscribers who may be invited to test the Starter Pack before public launch.",
  },
  {
    question: "Who is this for?",
    answer:
      "Developers who already know basic web development and want a faster way to start a real Qwik full-stack app with the core setup already in place.",
  },
  {
    question: "What if I already know React?",
    answer:
      "That helps. Qwik JSX and component structure will feel much more familiar if you already know React, so getting started is usually easier.",
  },
] as const;

export const WAITLIST_BENEFITS = [
  "Free to join and no obligation to buy",
  "Launch updates before the public release",
  "Selected subscribers may be invited to test it before launch",
  "Early access members will hear about the launch offer first",
] as const;
