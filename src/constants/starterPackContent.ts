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
    title: "Start from a real foundation",
    description:
      "The Learn Qwik Starter Pack is built to save setup time and give you a cleaner starting point for a real Qwik app.",
  },
] as const;

export const PROMISE_CARDS = [
  {
    eyebrow: "Auth already wired",
    title: "Skip the first setup mess",
    description:
      "Google sign-in, Magic Link, session handling, and the main auth plumbing are already part of the starting point.",
  },
  {
    eyebrow: "Protected pages ready",
    title: "Do not rebuild access control from zero",
    description:
      "The Starter Pack already includes a clear path for gated pages, redirects, and user-aware rendering.",
  },
  {
    eyebrow: "Private feedback included",
    title: "Start from a real app pattern",
    description:
      "Instead of a blank shell, you begin with a practical private feedback CRUD example that is easier to extend into a real product.",
  },
] as const;

export const INCLUDED_CARDS = [
  {
    title: "Qwik SSR starter base",
    description:
      "A serious starting point for a real app, with the main project structure already in place instead of a throwaway toy demo.",
  },
  {
    title: "Supabase auth integration",
    description:
      "A working base for auth, sessions, Magic Link, and the backend wiring you usually waste days piecing together.",
  },
  {
    title: "Protected route patterns",
    description:
      "A clearer way to handle private pages and guest redirects without improvising the structure from scratch.",
  },
  {
    title: "Private feedback CRUD example",
    description:
      "A concrete authenticated CRUD flow you can read, reuse, adapt, and extend for your own product logic.",
  },
  {
    title: "Documentation and setup guide",
    description:
      "Guided documentation for installation, Supabase setup, project structure, and the main places to customize the starter safely.",
  },
  {
    title: "Private Discord access",
    description:
      "A direct place to ask questions and get support while you adapt the starter to your own product.",
  },
] as const;

export const STACK_CARDS = [
  {
    kind: "qwik" as const,
    title: "Qwik",
    description:
      "The framework at the core of the Starter Pack, with SSR already included in the starting architecture.",
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
      "A practical styling base so you can move fast without rebuilding the same visual foundation again.",
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
  "You already know basic web development and want a faster way to start with Qwik.",
  "You want auth, protected pages, account flows, and a private feature example without rebuilding the whole foundation yourself.",
  "You already know React or modern frontend patterns and want a Qwik starter that feels more approachable.",
] as const;

export const NOT_TARGET_ITEMS = [
  "Not for complete beginners who still need the core HTML, CSS, and JavaScript basics first.",
  "Not an all-in-one SaaS monster with every billing, admin, team, and dashboard feature under the sun.",
  "Not a promise that your product will build itself. It is a faster starting point, not a shortcut to product-market fit.",
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
      "You can join the list for free, hear about launch first, and a limited number of selected users may receive free access before public launch.",
  },
  {
    question: "Do I get the code right now?",
    answer:
      "No. Right now you can test the live demo and join early access. Code access comes later.",
  },
  {
    question: "What is included besides the code?",
    answer:
      "The Starter Pack also includes documentation, setup guidance, and private Discord access so you are not left alone with a raw repo.",
  },
  {
    question: "Who is this for?",
    answer:
      "Developers who already know the basics and want a faster way to start a real Qwik full-stack app with the core setup already in place.",
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
      "Get clear guidance for installation, Supabase setup, project structure, and the main places to customize the starter safely.",
  },
] as const;
