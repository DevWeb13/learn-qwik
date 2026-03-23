// src/constants/starterPackContent.ts

export const SHELL_CLASS = "mx-auto max-w-7xl px-4 md:px-6 lg:px-14 2xl:px-0";

export type StackIconKind = "qwik" | "supabase" | "tailwind" | "vercel";

export const HERO_CHIPS = [
  "Live demo available",
  "Private feedback CRUD",
  "Documentation included",
  "Qwik + Supabase + Tailwind + Vercel",
] as const;

export const PREVIEW_LIST = [
  "Google sign-in and Magic Link",
  "Protected pages and guest redirects",
  "Create, update, and delete private feedback",
  "Account page, sign out, and delete-account flow",
] as const;

export const OFFER_CARDS = [
  {
    title: "Join early access now",
    description:
      "Get launch updates first and see whether you may be selected for free access before public launch.",
  },
  {
    title: "Test the live demo",
    description:
      "Open the running app and see the real auth, account, and private feedback flow before launch.",
  },
  {
    title: "Start from a real full-stack foundation",
    description:
      "The Learn Qwik Starter Pack gives you a real Qwik SSR full-stack app that is already structured, already wired, and easier to turn into your own product.",
  },
] as const;

export const PROMISE_CARDS = [
  {
    eyebrow: "Auth already wired",
    title: "Skip the fragile first setup",
    description:
      "Google sign-in, Magic Link, sessions, and the core auth plumbing are already connected, so you do not waste time rebuilding them from scratch.",
  },
  {
    eyebrow: "Private feedback included",
    title: "A concrete SSR CRUD example",
    description:
      "Use the private feedback flow as a concrete example of authenticated CRUD with Qwik SSR, routeLoader$, routeAction$, forms, and Supabase wiring already working together.",
  },
  {
    eyebrow: "Private feedback included",
    title: "Start from something real, not empty",
    description:
      "You begin with a practical authenticated CRUD example that already feels like product code, not a blank repo with promises.",
  },
] as const;

export const INCLUDED_CARDS = [
  {
    title: "Real Qwik SSR full-stack app",
    description:
      "A serious app structure with the main project architecture already in place instead of a throwaway toy demo.",
  },
  {
    title: "Supabase auth integration",
    description:
      "Working auth, sessions, Magic Link, and backend wiring that are already connected and ready to reuse.",
  },
  {
    title: "Protected route patterns",
    description:
      "A clear way to handle private pages and guest redirects without improvising the structure from scratch.",
  },
  {
    title: "Private feedback CRUD example",
    description:
      "A concrete authenticated CRUD flow you can read, reuse, adapt, and extend for your own product logic.",
  },
  {
    title: "Documentation and setup guide",
    description:
      "Guided documentation for installation, Supabase setup, project structure, and the main places to customize the app safely.",
  },
  {
    title: "Private Discord access",
    description:
      "A direct place to ask questions and get support while you adapt the product to your own needs.",
  },
] as const;

export const STACK_CARDS = [
  {
    kind: "qwik" as const,
    title: "Qwik",
    description:
      "The framework at the core of the app, with SSR already included in the project architecture.",
  },
  {
    kind: "supabase" as const,
    title: "Supabase",
    description:
      "Database, auth, Magic Link, and server-side wiring in a setup that is already connected.",
  },
  {
    kind: "tailwind" as const,
    title: "Tailwind",
    description:
      "A practical UI foundation so you can move fast without rebuilding the same styling structure again.",
  },
  {
    kind: "vercel" as const,
    title: "Vercel",
    description:
      "A deployment path that already matches the project goal: launch faster with less setup friction.",
  },
] as const;

export const STACK_LINKS: Record<StackIconKind, string> = {
  qwik: "https://qwik.dev/docs/",
  supabase: "https://supabase.com/docs",
  tailwind: "https://tailwindcss.com/docs",
  vercel: "https://vercel.com/docs",
};

export const GOOD_FIT_ITEMS = [
  "You already know the web basics and want to move into Qwik without losing time on setup work that should already be done.",
  "You want auth, protected pages, account flows, and a private feature example without spending days wiring the same foundation again.",
  "You want a Qwik project that already feels like a real app, not an empty repo that still leaves the hardest decisions to you.",
] as const;

export const NOT_TARGET_ITEMS = [
  "Not for complete beginners who still need the core HTML, CSS, and JavaScript basics first.",
  "Not an all-in-one SaaS monster with billing, admin, teams, dashboards, and every edge case already built.",
  "Not a magic shortcut to product-market fit. It gives you a serious foundation, not a finished business.",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Can I test something today?",
    answer:
      "Yes. The live demo is already available, so you can test the main auth, account, and private feedback flow before launch.",
  },
  {
    question: "What does early access mean?",
    answer:
      "You can join for free, hear about launch first, and some selected users may receive free access before the public release.",
  },
  {
    question: "Do I get the code right now?",
    answer:
      "No. Right now you can test the live demo and join early access. The code is released later.",
  },
  {
    question: "What is included besides the code?",
    answer:
      "Documentation, setup guidance, and private Discord access are included too, so you are not left alone with a raw repo and no direction.",
  },
  {
    question: "Who is this for?",
    answer:
      "Developers who already know the basics and want to start from a real Qwik SSR full-stack app instead of rebuilding the same setup work again.",
  },
] as const;

export const WAITLIST_BENEFITS = [
  "Free to join with no obligation",
  "Test the live demo before launch",
  "Documentation and reusable patterns are part of the product",
  "Selected users may receive free access before launch",
] as const;

export const VIDEO_WALKTHROUGH_STEPS = [
  "Open the live demo",
  "Sign in with Google",
  "View the account page and session data",
  "Sign out and sign in again with Magic Link",
  "Create, edit, and delete private feedback",
  "Delete the account at the end",
] as const;

export const REUSE_CARDS = [
  {
    title: "Auth and account flows",
    description:
      "Start from sign-in, session handling, protected pages, account access, sign out, and delete-account flows that are already connected.",
  },
  {
    title: "Qwik loader and action examples",
    description:
      "Reuse real examples of routeLoader$, routeAction$, form handling, and user-aware pages instead of figuring out those patterns from scratch.",
  },
  {
    title: "Private feedback pattern",
    description:
      "Use the included private feedback CRUD as a working example, then replace the sample business logic with your own project needs.",
  },
  {
    title: "Documentation and setup guide",
    description:
      "Get clear guidance for installation, Supabase setup, project structure, and the main places to customize the app safely.",
  },
] as const;
