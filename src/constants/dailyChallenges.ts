export type DailyChallengeOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type DailyChallenge = {
  id: string;
  title: string;
  deckTitle: string;
  prompt: string;
  code?: string;
  options: DailyChallengeOption[];
  explanation: string;
  relatedChapterTitle: string;
  relatedChapterHref: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  xp: number;
  tags: string[];
};

export type DailyChallengeCompletionSummary = {
  challengeDate: string;
  challengeId: string;
  completedDate?: string | null;
  isCorrect: boolean;
  xpAwarded: number;
};

export type DailyChallengeStats = {
  totalCompleted: number;
  totalCorrect: number;
  totalXp: number;
  currentStreak: number;
  bestStreak: number;
  completedToday: boolean;
};

export type DailyChallengeRank = {
  name: string;
  minXp: number;
};

export type DailyChallengeRankProgress = {
  currentRank: DailyChallengeRank;
  nextRank: DailyChallengeRank | null;
  xpIntoRank: number;
  xpForNextRank: number;
  progressPercent: number;
};

export const BASE_DATE_KEY = "2026-05-05";
export const PARIS_TIME_ZONE = "Europe/Paris";
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const DAILY_CHALLENGE_RANKS: DailyChallengeRank[] = [
  { name: "Lab Starter", minXp: 0 },
  { name: "Loader Tamer", minXp: 60 },
  { name: "Qwik Navigator", minXp: 140 },
  { name: "Resumability Builder", minXp: 260 },
  { name: "Performance Engineer", minXp: 420 },
  { name: "Qwik Lab Master", minXp: 650 },
];

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    id: "route-loader-boundary",
    title: "Why is this loader running too often?",
    deckTitle: "Data Fetching",
    prompt:
      "A dashboard layout loads revenue data, but only one child page needs it. What is the best fix?",
    code: `// src/routes/dashboard/layout.tsx
export const useRevenue = routeLoader$(async () => {
  return getRevenue();
});

export default component$(() => {
  return <Slot />;
});`,
    options: [
      {
        id: "keep-layout",
        text: "Keep the loader in layout.tsx because layouts are cached forever.",
        isCorrect: false,
      },
      {
        id: "move-child",
        text: "Move the loader to the route that actually needs revenue.",
        isCorrect: true,
      },
      {
        id: "client-fetch",
        text: "Replace routeLoader$ with a client-side fetch in useVisibleTask$.",
        isCorrect: false,
      },
    ],
    explanation:
      "A loader in a shared layout can run for routes that share that layout. Moving the loader closer to the page that needs the data reduces unnecessary server work.",
    relatedChapterTitle: "Chapter 9: Optimizing Data Fetching",
    relatedChapterHref:
      "/learn/dashboard-app-2026/optimizing-data-fetching-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["routeLoader$", "Qwik City", "Performance"],
  },
  {
    id: "link-vs-anchor",
    title: "Which navigation keeps the app feeling fast?",
    deckTitle: "Navigation",
    prompt:
      "Inside a Qwik City app, which element should you use for internal navigation between routes?",
    code: `<a href="/dashboard/invoices/">Invoices</a>`,
    options: [
      {
        id: "anchor",
        text: "Use a normal anchor for every internal route.",
        isCorrect: false,
      },
      {
        id: "link",
        text: "Use Qwik City's Link component for internal app routes.",
        isCorrect: true,
      },
      {
        id: "button",
        text: "Use a button and manually change window.location.",
        isCorrect: false,
      },
    ],
    explanation:
      "Link gives Qwik City the route context it needs for client-side navigation, prefetching behavior, and smoother transitions inside the app.",
    relatedChapterTitle: "Chapter 5: Navigating Between Pages",
    relatedChapterHref:
      "/learn/dashboard-app-2026/navigating-between-pages-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Link", "Routing", "Qwik City"],
  },
  {
    id: "image-dimensions-cls",
    title: "What prevents image layout shift?",
    deckTitle: "Performance",
    prompt:
      "A product screenshot loads late and pushes the article text down. Which fix protects the layout?",
    options: [
      {
        id: "dimensions",
        text: "Reserve stable dimensions with width, height, aspect ratio, or responsive constraints.",
        isCorrect: true,
      },
      {
        id: "bigger-file",
        text: "Use a larger image file so the browser can infer size faster.",
        isCorrect: false,
      },
      {
        id: "lazy-all",
        text: "Lazy-load every image, including first-viewport images.",
        isCorrect: false,
      },
    ],
    explanation:
      "The browser needs predictable space before the image finishes loading. Stable dimensions are one of the simplest ways to reduce CLS.",
    relatedChapterTitle: "Chapter 7: Optimizing Images",
    relatedChapterHref: "/learn/dashboard-app-2026/optimizing-images-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Images", "CLS", "Core Web Vitals"],
  },
  {
    id: "resource-pending-ui",
    title: "Where should the loading UI live?",
    deckTitle: "Streaming",
    prompt:
      "A slow invoices query should not block the whole dashboard. Which Qwik pattern fits best?",
    options: [
      {
        id: "blocking-loader",
        text: "Load every dashboard query in one routeLoader$ and wait for all of them.",
        isCorrect: false,
      },
      {
        id: "resource",
        text: "Use useResource$ with Resource and a local pending UI for the slow section.",
        isCorrect: true,
      },
      {
        id: "timeout",
        text: "Add a setTimeout so the UI appears after the query finishes.",
        isCorrect: false,
      },
    ],
    explanation:
      "useResource$ and Resource let one part of the UI resolve independently while the rest of the page remains useful.",
    relatedChapterTitle: "Chapter 10: Streaming",
    relatedChapterHref: "/learn/dashboard-app-2026/streaming-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["useResource$", "Streaming", "Skeleton UI"],
  },
  {
    id: "svg-component-color",
    title: "How do you make an SVG theme-friendly?",
    deckTitle: "Components",
    prompt:
      "You create an icon component and want it to inherit the text color from its parent. Which value should the SVG paths use?",
    code: `<path d="..." fill="#713fc2" />`,
    options: [
      {
        id: "current-color",
        text: "Use currentColor for fill or stroke when the icon should follow text color.",
        isCorrect: true,
      },
      {
        id: "inline-hex",
        text: "Always hard-code the brand color inside the path.",
        isCorrect: false,
      },
      {
        id: "random-css",
        text: "Set a random CSS variable name and hope the parent defines it.",
        isCorrect: false,
      },
    ],
    explanation:
      "currentColor makes an SVG follow the computed CSS color of its parent, which is useful for buttons, links, and themed UI.",
    relatedChapterTitle: "Chapter 3: Icons and SVG Components",
    relatedChapterHref:
      "/learn/dashboard-app-2026/icons-and-svg-components-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["SVG", "Components", "CSS"],
  },
  {
    id: "server-action-intent",
    title: "What belongs in a routeAction$?",
    deckTitle: "Mutations",
    prompt:
      "A user submits a form to create an invoice in the database. Where should the mutation logic live?",
    options: [
      {
        id: "route-action",
        text: "In a routeAction$, with server-side validation and database writes.",
        isCorrect: true,
      },
      {
        id: "visible-task",
        text: "In useVisibleTask$, because database writes should start in the browser.",
        isCorrect: false,
      },
      {
        id: "component-body",
        text: "Directly in the component render body.",
        isCorrect: false,
      },
    ],
    explanation:
      "routeAction$ is designed for server-side mutations such as forms, validation, redirects, and database writes.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["routeAction$", "Forms", "Supabase"],
  },
  {
    id: "font-display",
    title: "Which font setting protects first paint?",
    deckTitle: "Fonts",
    prompt:
      "A self-hosted font delays text rendering on a slow connection. Which CSS behavior usually gives a better user experience?",
    options: [
      {
        id: "swap",
        text: "Use font-display: swap so text can render with a fallback first.",
        isCorrect: true,
      },
      {
        id: "hide",
        text: "Hide the whole page until the custom font loads.",
        isCorrect: false,
      },
      {
        id: "remote-only",
        text: "Only load fonts from a third-party domain.",
        isCorrect: false,
      },
    ],
    explanation:
      "font-display: swap avoids invisible text during font loading and keeps the page useful sooner.",
    relatedChapterTitle: "Chapter 6: Optimizing Fonts",
    relatedChapterHref: "/learn/dashboard-app-2026/optimizing-fonts-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Fonts", "Performance", "CSS"],
  },
  {
    id: "nested-layout",
    title: "What should a nested layout contain?",
    deckTitle: "Routing",
    prompt:
      "Several dashboard pages share the same side navigation. What is the cleanest Qwik City structure?",
    options: [
      {
        id: "copy-nav",
        text: "Copy the same navigation markup into each page.",
        isCorrect: false,
      },
      {
        id: "layout-slot",
        text: "Create a dashboard layout.tsx that renders shared UI and a Slot.",
        isCorrect: true,
      },
      {
        id: "global-root",
        text: "Move all dashboard-specific UI to the root site layout.",
        isCorrect: false,
      },
    ],
    explanation:
      "A nested layout keeps shared route UI in one place while Slot renders the active child route.",
    relatedChapterTitle: "Chapter 4: Creating Layouts and Pages",
    relatedChapterHref:
      "/learn/dashboard-app-2026/creating-layouts-and-pages-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["layout.tsx", "Slot", "Routing"],
  },
  {
    id: "tailwind-css-modules",
    title: "When do CSS Modules help?",
    deckTitle: "Styling",
    prompt:
      "A component needs a small custom animation that should not leak into the rest of the app. What is a good local styling option?",
    options: [
      {
        id: "global",
        text: "Put every animation class in global.css.",
        isCorrect: false,
      },
      {
        id: "module",
        text: "Use a CSS Module for component-scoped class names.",
        isCorrect: true,
      },
      {
        id: "inline-only",
        text: "Use inline style strings for every animation rule.",
        isCorrect: false,
      },
    ],
    explanation:
      "CSS Modules are useful when a component needs local class names, while Tailwind remains great for common utility styling.",
    relatedChapterTitle: "Chapter 2: CSS Styling",
    relatedChapterHref: "/learn/dashboard-app-2026/css-styling-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Tailwind", "CSS Modules", "Styling"],
  },
  {
    id: "first-chapter-goal",
    title: "What is the first setup goal?",
    deckTitle: "Getting Started",
    prompt:
      "Before adding auth, data, and mutations, what should the first chapter prove?",
    options: [
      {
        id: "running-app",
        text: "That the Qwik app is created, dependencies are installed, and the dev server runs.",
        isCorrect: true,
      },
      {
        id: "stripe",
        text: "That payments are connected before the app renders.",
        isCorrect: false,
      },
      {
        id: "deploy-only",
        text: "That deployment is finished before local development starts.",
        isCorrect: false,
      },
    ],
    explanation:
      "A reliable local setup is the foundation for the rest of the course. The first win is getting the app running and understanding the project structure.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 10,
    tags: ["CLI", "Setup", "Project Structure"],
  },
  {
    id: "route-param-validation",
    title: "How should a route param be validated?",
    deckTitle: "Routing",
    prompt:
      "A route receives an invoice id from the URL before loading database data. What should happen first?",
    code: `export const useInvoice = routeLoader$(async ({ params }) => {
  return getInvoice(params.id);
});`,
    options: [
      {
        id: "validate-param",
        text: "Validate the route param before using it in the database query.",
        isCorrect: true,
      },
      {
        id: "trust-url",
        text: "Trust params.id because route params are generated by Qwik City.",
        isCorrect: false,
      },
      {
        id: "hide-error",
        text: "Catch every error and render an empty invoice.",
        isCorrect: false,
      },
    ],
    explanation:
      "Route params are still user input. Validate shape and permissions before reading or mutating data.",
    relatedChapterTitle: "Chapter 8: Fetching Data",
    relatedChapterHref: "/learn/dashboard-app-2026/fetching-data-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["Params", "Validation", "Data"],
  },
  {
    id: "visible-task-boundary",
    title: "When is useVisibleTask$ appropriate?",
    deckTitle: "Client Effects",
    prompt:
      "You need to read localStorage after the component becomes visible in the browser. Which Qwik API fits?",
    options: [
      {
        id: "visible-task",
        text: "Use useVisibleTask$ for browser-only work that waits for visibility.",
        isCorrect: true,
      },
      {
        id: "route-loader",
        text: "Use routeLoader$ because localStorage exists on the server.",
        isCorrect: false,
      },
      {
        id: "render-body",
        text: "Read localStorage directly in the component render body.",
        isCorrect: false,
      },
    ],
    explanation:
      "useVisibleTask$ is reserved for browser-only side effects. Keep server data in loaders and avoid client APIs during render.",
    relatedChapterTitle: "Chapter 8: Fetching Data",
    relatedChapterHref: "/learn/dashboard-app-2026/fetching-data-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["useVisibleTask$", "Browser", "Effects"],
  },
  {
    id: "form-pending-state",
    title: "How do you show a mutation is saving?",
    deckTitle: "Mutations",
    prompt:
      "A save button should show feedback while a routeAction$ is running. Which state should the UI read?",
    options: [
      {
        id: "action-running",
        text: "Use the action store isRunning state to disable the button and update the label.",
        isCorrect: true,
      },
      {
        id: "global-timeout",
        text: "Use a fixed timeout and hope the request finishes before it.",
        isCorrect: false,
      },
      {
        id: "reload-page",
        text: "Force a full page reload before showing any feedback.",
        isCorrect: false,
      },
    ],
    explanation:
      "The action store already exposes the running state, result, and validation errors for responsive form feedback.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["routeAction$", "Forms", "UX"],
  },
  {
    id: "prefetch-internal-links",
    title: "What makes internal navigation feel instant?",
    deckTitle: "Navigation",
    prompt:
      "A dashboard sidebar links to several internal pages. What helps Qwik City prepare navigation?",
    options: [
      {
        id: "qwik-link",
        text: "Use Link for internal routes so Qwik City can handle app navigation.",
        isCorrect: true,
      },
      {
        id: "external-anchor",
        text: "Use target=_blank on every internal route.",
        isCorrect: false,
      },
      {
        id: "manual-click",
        text: "Attach click handlers that call location.reload().",
        isCorrect: false,
      },
    ],
    explanation:
      "Qwik City's Link component keeps routing inside the app and allows the framework to optimize navigation behavior.",
    relatedChapterTitle: "Chapter 5: Navigating Between Pages",
    relatedChapterHref:
      "/learn/dashboard-app-2026/navigating-between-pages-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Link", "Prefetch", "Routing"],
  },
  {
    id: "server-secret-boundary",
    title: "Where should a service role key live?",
    deckTitle: "Security",
    prompt:
      "A server operation needs the Supabase service role key. Where should that key be used?",
    options: [
      {
        id: "server-only",
        text: "Only inside server-side code that never ships to the browser.",
        isCorrect: true,
      },
      {
        id: "public-env",
        text: "Expose it as PUBLIC_SUPABASE_SERVICE_ROLE_KEY.",
        isCorrect: false,
      },
      {
        id: "local-storage",
        text: "Store it in localStorage after login.",
        isCorrect: false,
      },
    ],
    explanation:
      "Service role keys bypass row-level security and must stay server-only. Public env vars are visible to client bundles.",
    relatedChapterTitle: "Chapter 8: Fetching Data",
    relatedChapterHref: "/learn/dashboard-app-2026/fetching-data-2026/",
    difficulty: "Advanced",
    estimatedTime: "5 min",
    xp: 25,
    tags: ["Supabase", "Security", "Server"],
  },
  {
    id: "ad-slot-stability",
    title: "How do you prevent ad layout jumps?",
    deckTitle: "Performance",
    prompt:
      "An ad slot appears after the page starts loading and pushes content down. What is the best first fix?",
    options: [
      {
        id: "reserve-space",
        text: "Reserve stable space for the ad slot before the ad script fills it.",
        isCorrect: true,
      },
      {
        id: "late-script",
        text: "Load the script later without reserving any space.",
        isCorrect: false,
      },
      {
        id: "bigger-font",
        text: "Increase text size so the jump is less visible.",
        isCorrect: false,
      },
    ],
    explanation:
      "Ads are dynamic content. Reserving dimensions protects reading flow and reduces CLS.",
    relatedChapterTitle: "Chapter 7: Optimizing Images",
    relatedChapterHref: "/learn/dashboard-app-2026/optimizing-images-2026/",
    difficulty: "Intermediate",
    estimatedTime: "4 min",
    xp: 20,
    tags: ["Ads", "CLS", "Layout"],
  },
  {
    id: "resource-error-state",
    title: "What should Resource handle besides loading?",
    deckTitle: "Streaming",
    prompt:
      "A Resource can fail because the network request rejects. What should the UI provide?",
    options: [
      {
        id: "error-ui",
        text: "A local error UI for that section, alongside loading and resolved states.",
        isCorrect: true,
      },
      {
        id: "blank-section",
        text: "An empty section so users never know what happened.",
        isCorrect: false,
      },
      {
        id: "global-crash",
        text: "Throw the whole page away for one slow section.",
        isCorrect: false,
      },
    ],
    explanation:
      "A resilient Resource boundary keeps the rest of the page useful and communicates failures near the affected content.",
    relatedChapterTitle: "Chapter 10: Streaming",
    relatedChapterHref: "/learn/dashboard-app-2026/streaming-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["Resource", "Errors", "Streaming"],
  },
  {
    id: "route-action-validation",
    title: "What protects a server action input?",
    deckTitle: "Mutations",
    prompt:
      "A form posts invoice data to a routeAction$. What should happen before writing to the database?",
    options: [
      {
        id: "server-validation",
        text: "Validate the submitted data on the server inside the action.",
        isCorrect: true,
      },
      {
        id: "client-only",
        text: "Trust client-side validation because users cannot alter form data.",
        isCorrect: false,
      },
      {
        id: "skip-validation",
        text: "Insert the payload first and inspect it later.",
        isCorrect: false,
      },
    ],
    explanation:
      "Client validation improves UX, but server validation protects the actual mutation boundary.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["Validation", "routeAction$", "Security"],
  },
  {
    id: "component-props-size",
    title: "What keeps components easy to reuse?",
    deckTitle: "Components",
    prompt:
      "A card component needs title, description, and href. What is the clearest API?",
    options: [
      {
        id: "typed-props",
        text: "Define a small typed props object with the values the component needs.",
        isCorrect: true,
      },
      {
        id: "global-read",
        text: "Read every value from a global variable inside the component.",
        isCorrect: false,
      },
      {
        id: "dom-query",
        text: "Query the DOM to find text after render.",
        isCorrect: false,
      },
    ],
    explanation:
      "Typed props make component contracts explicit and keep rendering predictable.",
    relatedChapterTitle: "Chapter 3: Icons and SVG Components",
    relatedChapterHref:
      "/learn/dashboard-app-2026/icons-and-svg-components-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Props", "Components", "TypeScript"],
  },
  {
    id: "sitemap-dynamic-pages",
    title: "Which pages belong in the sitemap?",
    deckTitle: "SEO",
    prompt:
      "A site has public articles and private account history pages. What should the sitemap include?",
    options: [
      {
        id: "public-indexable",
        text: "Include public indexable pages and leave private or personalized pages out.",
        isCorrect: true,
      },
      {
        id: "everything",
        text: "Include every route, including account and API routes.",
        isCorrect: false,
      },
      {
        id: "no-sitemap",
        text: "Remove the sitemap once the site has dynamic routes.",
        isCorrect: false,
      },
    ],
    explanation:
      "Sitemaps should guide crawlers toward canonical public URLs, not personal dashboards or operational endpoints.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["SEO", "Sitemap", "Routing"],
  },
  {
    id: "accessible-button-label",
    title: "What makes an icon button accessible?",
    deckTitle: "Components",
    prompt:
      "A toolbar button only shows an icon. What should it still provide?",
    options: [
      {
        id: "aria-label",
        text: "A clear accessible name such as aria-label or visible text.",
        isCorrect: true,
      },
      {
        id: "title-only",
        text: "Only a color change, because screen readers infer icons.",
        isCorrect: false,
      },
      {
        id: "empty-button",
        text: "No label if the icon looks familiar.",
        isCorrect: false,
      },
    ],
    explanation:
      "Icon-only controls still need an accessible name so keyboard and assistive technology users understand the action.",
    relatedChapterTitle: "Chapter 3: Icons and SVG Components",
    relatedChapterHref:
      "/learn/dashboard-app-2026/icons-and-svg-components-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Accessibility", "Buttons", "Icons"],
  },
  {
    id: "search-param-state",
    title: "Where should searchable page state live?",
    deckTitle: "Navigation",
    prompt:
      "A dashboard search box should keep its value when users share or reload the page. Where should the query live?",
    options: [
      {
        id: "url-search",
        text: "In URL search params so the state is shareable and reload-safe.",
        isCorrect: true,
      },
      {
        id: "local-only",
        text: "Only in a component signal that resets on reload.",
        isCorrect: false,
      },
      {
        id: "hidden-dom",
        text: "In a hidden div that JavaScript reads later.",
        isCorrect: false,
      },
    ],
    explanation:
      "URL search params make filters and pagination durable across refreshes, links, and browser navigation.",
    relatedChapterTitle: "Chapter 10: Adding Search and Pagination",
    relatedChapterHref: "/learn/dashboard-app/adding-search-and-pagination/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["Search Params", "Pagination", "Routing"],
  },
  {
    id: "optimistic-ui-care",
    title: "What should optimistic UI preserve?",
    deckTitle: "UX",
    prompt:
      "A button updates the UI before the server confirms the mutation. What must the implementation still handle?",
    options: [
      {
        id: "rollback",
        text: "A failure path that restores or explains the state if the server rejects it.",
        isCorrect: true,
      },
      {
        id: "ignore-errors",
        text: "Ignore server errors because optimistic UI already showed success.",
        isCorrect: false,
      },
      {
        id: "double-submit",
        text: "Allow repeated clicks while the first mutation is still running.",
        isCorrect: false,
      },
    ],
    explanation:
      "Optimistic UI is useful only when failures are handled clearly and duplicate mutations are controlled.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Advanced",
    estimatedTime: "5 min",
    xp: 25,
    tags: ["UX", "Mutations", "State"],
  },
  {
    id: "cache-control-private",
    title: "How should account data be cached?",
    deckTitle: "Security",
    prompt:
      "An account page renders user-specific progress and email settings. Which cache posture is safest?",
    options: [
      {
        id: "private-no-store",
        text: "Use private, user-aware cache settings and avoid public CDN caching.",
        isCorrect: true,
      },
      {
        id: "public-year",
        text: "Cache the HTML publicly for one year.",
        isCorrect: false,
      },
      {
        id: "shared-profile",
        text: "Cache one account response and reuse it for everyone.",
        isCorrect: false,
      },
    ],
    explanation:
      "Personalized pages should not be cached as public shared HTML because they contain user-specific state.",
    relatedChapterTitle: "Chapter 8: Fetching Data",
    relatedChapterHref: "/learn/dashboard-app-2026/fetching-data-2026/",
    difficulty: "Advanced",
    estimatedTime: "5 min",
    xp: 25,
    tags: ["Cache", "Security", "Account"],
  },
  {
    id: "edge-env-safety",
    title: "How should server env vars be read?",
    deckTitle: "Deployment",
    prompt:
      "A Qwik City server route needs a secret in Vercel. What is the safest access pattern?",
    options: [
      {
        id: "request-env",
        text: "Read it from the server request environment and fail if it is missing.",
        isCorrect: true,
      },
      {
        id: "hard-code",
        text: "Hard-code it in the route file.",
        isCorrect: false,
      },
      {
        id: "public-meta",
        text: "Expose it through a public meta tag.",
        isCorrect: false,
      },
    ],
    explanation:
      "Secrets should come from server environment variables and never be committed or sent to the browser.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Intermediate",
    estimatedTime: "4 min",
    xp: 20,
    tags: ["Env", "Vercel", "Security"],
  },
  {
    id: "robots-noindex-private",
    title: "Which routes should be noindex?",
    deckTitle: "SEO",
    prompt:
      "A personalized history page is useful to signed-in users but not useful in search results. What should its head metadata do?",
    options: [
      {
        id: "noindex",
        text: "Use noindex for personalized pages that should not appear in search.",
        isCorrect: true,
      },
      {
        id: "index-all",
        text: "Index every authenticated page to increase impressions.",
        isCorrect: false,
      },
      {
        id: "canonical-home",
        text: "Canonicalize every private route to the home page.",
        isCorrect: false,
      },
    ],
    explanation:
      "Private or personalized utility pages should not compete with public learning content in search.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Robots", "SEO", "Private Routes"],
  },
  {
    id: "leaderboard-weekly-reset",
    title: "Why use a weekly leaderboard?",
    deckTitle: "Retention",
    prompt:
      "A learning app wants a leaderboard that motivates new users too. Which scoring window is healthier?",
    options: [
      {
        id: "weekly-window",
        text: "Use a weekly window so newer learners can still compete.",
        isCorrect: true,
      },
      {
        id: "all-time-only",
        text: "Use only all-time XP so early users dominate forever.",
        isCorrect: false,
      },
      {
        id: "random-score",
        text: "Randomize rankings daily to keep people surprised.",
        isCorrect: false,
      },
    ],
    explanation:
      "Weekly scoring creates a fresh race and avoids discouraging users who joined later.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Retention", "Leaderboard", "XP"],
  },
  {
    id: "email-consent-rule",
    title: "When should a product email be sent?",
    deckTitle: "Retention",
    prompt:
      "A user completed one Daily Lab and may want reminders. What must happen before sending daily emails?",
    options: [
      {
        id: "explicit-opt-in",
        text: "Ask for explicit opt-in and provide a way to unsubscribe.",
        isCorrect: true,
      },
      {
        id: "silent-subscribe",
        text: "Subscribe every account automatically after signup.",
        isCorrect: false,
      },
      {
        id: "hide-unsubscribe",
        text: "Send reminders without an unsubscribe path.",
        isCorrect: false,
      },
    ],
    explanation:
      "Email reminders are powerful, but they need clear consent and an unsubscribe path to preserve trust.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Beginner",
    estimatedTime: "3 min",
    xp: 15,
    tags: ["Email", "Consent", "Retention"],
  },
  {
    id: "idempotent-cron",
    title: "What prevents duplicate scheduled emails?",
    deckTitle: "Automation",
    prompt:
      "A Cron endpoint can be called twice for the same date. What protects users from duplicate emails?",
    options: [
      {
        id: "idempotency-key",
        text: "Record each user/date send and use an idempotency key with the email provider.",
        isCorrect: true,
      },
      {
        id: "hope-once",
        text: "Assume scheduled jobs always run exactly once.",
        isCorrect: false,
      },
      {
        id: "send-more",
        text: "Send twice and ask users to ignore the duplicate.",
        isCorrect: false,
      },
    ],
    explanation:
      "Scheduled jobs need explicit idempotency because retries, manual runs, and concurrency can happen.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Advanced",
    estimatedTime: "5 min",
    xp: 25,
    tags: ["Cron", "Email", "Idempotency"],
  },
  {
    id: "fallback-content-quality",
    title: "How should generated fallback content behave?",
    deckTitle: "Product",
    prompt:
      "The Daily Lab has used every curated challenge. What is a safe fallback strategy?",
    options: [
      {
        id: "deterministic-template",
        text: "Use deterministic validated templates so a date always maps to the same challenge.",
        isCorrect: true,
      },
      {
        id: "random-each-load",
        text: "Generate a random challenge on every page load.",
        isCorrect: false,
      },
      {
        id: "repeat-first",
        text: "Always repeat the first challenge forever.",
        isCorrect: false,
      },
    ],
    explanation:
      "A deterministic fallback keeps URLs, answers, and completions stable while avoiding obvious repetition.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Intermediate",
    estimatedTime: "4 min",
    xp: 20,
    tags: ["Product", "Fallback", "Daily"],
  },
];

const FALLBACK_CHALLENGE_TEMPLATES: DailyChallenge[] = [
  {
    id: "fallback-loader-scope",
    title: "Where should this loader live?",
    deckTitle: "Data Fetching",
    prompt:
      "A loader fetches data for a small widget, but the parent route also renders many pages. What is the safest optimization?",
    code: `export const useWidgetData = routeLoader$(async () => {
  return getWidgetData();
});`,
    options: [
      {
        id: "move-closer",
        text: "Move the loader to the route or component boundary that actually needs the data.",
        isCorrect: true,
      },
      {
        id: "keep-parent",
        text: "Keep the loader in the highest parent so every route has the data.",
        isCorrect: false,
      },
      {
        id: "client-only",
        text: "Replace the server loader with a browser-only fetch every time.",
        isCorrect: false,
      },
    ],
    explanation:
      "Data should be loaded near the route that needs it so unrelated pages avoid unnecessary server work.",
    relatedChapterTitle: "Chapter 9: Optimizing Data Fetching",
    relatedChapterHref:
      "/learn/dashboard-app-2026/optimizing-data-fetching-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["routeLoader$", "Performance", "Scope"],
  },
  {
    id: "fallback-stable-layout",
    title: "What keeps this grid stable?",
    deckTitle: "Performance",
    prompt:
      "A dashboard grid shifts when cards finish loading. What should the layout define upfront?",
    options: [
      {
        id: "stable-space",
        text: "Stable dimensions, grid tracks, or aspect ratios for the loading and loaded states.",
        isCorrect: true,
      },
      {
        id: "late-css",
        text: "Load layout CSS after every image and script completes.",
        isCorrect: false,
      },
      {
        id: "hide-grid",
        text: "Hide the page until the slowest card is ready.",
        isCorrect: false,
      },
    ],
    explanation:
      "Stable containers protect the page from visual jumps while dynamic content is still loading.",
    relatedChapterTitle: "Chapter 7: Optimizing Images",
    relatedChapterHref: "/learn/dashboard-app-2026/optimizing-images-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Layout", "CLS", "Core Web Vitals"],
  },
  {
    id: "fallback-server-mutation",
    title: "Where does this database write belong?",
    deckTitle: "Mutations",
    prompt:
      "A form creates a customer record and must validate permissions before writing. Which boundary should own the mutation?",
    options: [
      {
        id: "route-action",
        text: "A routeAction$ with server-side validation and database access.",
        isCorrect: true,
      },
      {
        id: "client-render",
        text: "The component render function, because it already has the form values.",
        isCorrect: false,
      },
      {
        id: "visible-task",
        text: "useVisibleTask$, because writes should wait for visibility.",
        isCorrect: false,
      },
    ],
    explanation:
      "Mutations belong in a server action so secrets, validation, and permissions stay off the client.",
    relatedChapterTitle: "Legacy Chapter: Mutating Data",
    relatedChapterHref: "/learn/dashboard-app/mutating-data/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["routeAction$", "Database", "Validation"],
  },
  {
    id: "fallback-accessible-nav",
    title: "What makes this nav clearer?",
    deckTitle: "Navigation",
    prompt:
      "A navigation item only changes color for the active route. What should the implementation also consider?",
    options: [
      {
        id: "semantic-state",
        text: "Use clear active styling and accessible state where appropriate.",
        isCorrect: true,
      },
      {
        id: "color-only",
        text: "Rely only on a very subtle color difference.",
        isCorrect: false,
      },
      {
        id: "random-active",
        text: "Mark a random nav item active to increase discovery.",
        isCorrect: false,
      },
    ],
    explanation:
      "Navigation should communicate the current route clearly to visual, keyboard, and assistive technology users.",
    relatedChapterTitle: "Chapter 5: Navigating Between Pages",
    relatedChapterHref:
      "/learn/dashboard-app-2026/navigating-between-pages-2026/",
    difficulty: "Beginner",
    estimatedTime: "4 min",
    xp: 15,
    tags: ["Navigation", "Accessibility", "Routing"],
  },
  {
    id: "fallback-resource-boundary",
    title: "How should a slow section load?",
    deckTitle: "Streaming",
    prompt:
      "One analytics panel is slow, but the rest of the dashboard can render immediately. What pattern fits?",
    options: [
      {
        id: "local-resource",
        text: "Use a local Resource boundary so only that section waits.",
        isCorrect: true,
      },
      {
        id: "block-page",
        text: "Block the entire route until every panel finishes.",
        isCorrect: false,
      },
      {
        id: "remove-section",
        text: "Remove loading and error UI so the delay is invisible.",
        isCorrect: false,
      },
    ],
    explanation:
      "Local async boundaries keep the useful parts of the page interactive while slow sections resolve.",
    relatedChapterTitle: "Chapter 10: Streaming",
    relatedChapterHref: "/learn/dashboard-app-2026/streaming-2026/",
    difficulty: "Intermediate",
    estimatedTime: "5 min",
    xp: 20,
    tags: ["Resource", "Streaming", "UX"],
  },
  {
    id: "fallback-public-private-cache",
    title: "Which cache rule fits this page?",
    deckTitle: "Deployment",
    prompt:
      "A public tutorial page is the same for every visitor. Which cache posture is usually best?",
    options: [
      {
        id: "public-cache",
        text: "Use public cache settings with a sensible revalidation strategy.",
        isCorrect: true,
      },
      {
        id: "private-only",
        text: "Always use private no-store for every public tutorial page.",
        isCorrect: false,
      },
      {
        id: "personalized-cache",
        text: "Cache a signed-in user's response and serve it to everyone.",
        isCorrect: false,
      },
    ],
    explanation:
      "Public static learning content can benefit from CDN caching, while personalized pages need private caching.",
    relatedChapterTitle: "Chapter 1: Getting Started",
    relatedChapterHref: "/learn/dashboard-app-2026/getting-started-2026/",
    difficulty: "Intermediate",
    estimatedTime: "4 min",
    xp: 20,
    tags: ["Cache", "CDN", "Deployment"],
  },
];

const parisDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "2-digit",
  timeZone: PARIS_TIME_ZONE,
  year: "numeric",
});

export const parseDateKey = (dateKey: string) =>
  new Date(`${dateKey}T00:00:00.000Z`);

export const formatDateKey = (date: Date) => date.toISOString().slice(0, 10);

export const formatParisDateKey = (date: Date) => {
  const parts = parisDateFormatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  if (!year || !month || !day) {
    return formatDateKey(date);
  }

  return `${year}-${month}-${day}`;
};

export const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * DAY_IN_MS);

export const addDaysToDateKey = (dateKey: string, days: number) =>
  formatDateKey(addDays(parseDateKey(dateKey), days));

const positiveModulo = (value: number, modulo: number) =>
  ((value % modulo) + modulo) % modulo;

export const isValidDateKey = (dateKey: string) =>
  /^\d{4}-\d{2}-\d{2}$/.test(dateKey) &&
  formatDateKey(parseDateKey(dateKey)) === dateKey;

export const compareDateKeys = (left: string, right: string) =>
  left.localeCompare(right);

export const getTodayDateKey = (date = new Date()) => formatParisDateKey(date);

export const getDailyChallengeNumber = (dateKey: string) => {
  const baseDate = parseDateKey(BASE_DATE_KEY);
  const targetDate = parseDateKey(dateKey);

  return (
    Math.floor((targetDate.getTime() - baseDate.getTime()) / DAY_IN_MS) + 1
  );
};

const getDailyFallbackChallenge = (
  dateKey: string,
  challengeNumber: number,
) => {
  const templateIndex = positiveModulo(
    challengeNumber - DAILY_CHALLENGES.length - 1,
    FALLBACK_CHALLENGE_TEMPLATES.length,
  );
  const template = FALLBACK_CHALLENGE_TEMPLATES[templateIndex];

  return {
    ...template,
    id: `${template.id}-${dateKey}`,
  };
};

export const getDailyChallengeForDateKey = (dateKey: string) => {
  const challengeNumber = getDailyChallengeNumber(dateKey);

  if (challengeNumber < 1) {
    return DAILY_CHALLENGES[0];
  }

  const catalogChallenge = DAILY_CHALLENGES.at(challengeNumber - 1);

  if (catalogChallenge) {
    return catalogChallenge;
  }

  return getDailyFallbackChallenge(dateKey, challengeNumber);
};

export const getDailyChallenge = (date = new Date()) =>
  getDailyChallengeForDateKey(getTodayDateKey(date));

export const isDailyChallengeDateAvailable = (
  dateKey: string,
  todayDateKey = getTodayDateKey(),
) =>
  isValidDateKey(dateKey) &&
  compareDateKeys(dateKey, BASE_DATE_KEY) >= 0 &&
  compareDateKeys(dateKey, todayDateKey) <= 0;

export const getDateKeyRange = (startDateKey: string, endDateKey: string) => {
  const dates: string[] = [];

  if (
    !isValidDateKey(startDateKey) ||
    !isValidDateKey(endDateKey) ||
    compareDateKeys(startDateKey, endDateKey) > 0
  ) {
    return dates;
  }

  let cursor = startDateKey;

  while (compareDateKeys(cursor, endDateKey) <= 0) {
    dates.push(cursor);
    cursor = addDaysToDateKey(cursor, 1);
  }

  return dates;
};

export const getDailyChallengePath = (
  dateKey: string,
  todayDateKey = getTodayDateKey(),
) => (dateKey === todayDateKey ? "/daily/" : `/daily/${dateKey}/`);

export const getCurrentParisWeekRange = (date = new Date()) => {
  const todayDateKey = getTodayDateKey(date);
  const today = parseDateKey(todayDateKey);
  const dayOfWeek = today.getUTCDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const weekStart = formatDateKey(addDays(today, mondayOffset));
  const weekEnd = formatDateKey(addDays(parseDateKey(weekStart), 6));

  return { weekStart, weekEnd };
};

export const getChallengeById = (challengeId: string) => {
  const catalogChallenge =
    DAILY_CHALLENGES.find((challenge) => challenge.id === challengeId) ?? null;

  if (catalogChallenge) return catalogChallenge;

  const fallbackMatch = challengeId.match(
    /^(fallback-[a-z0-9-]+)-(\d{4}-\d{2}-\d{2})$/,
  );

  if (!fallbackMatch) return null;

  const [, templateId, dateKey] = fallbackMatch;
  const fallbackTemplate = FALLBACK_CHALLENGE_TEMPLATES.find(
    (challenge) => challenge.id === templateId,
  );

  if (!fallbackTemplate || !isValidDateKey(dateKey)) return null;

  return {
    ...fallbackTemplate,
    id: `${fallbackTemplate.id}-${dateKey}`,
  };
};

export const getCorrectOption = (challenge: DailyChallenge) =>
  challenge.options.find((option) => option.isCorrect) ?? null;

export const getDailyChallengeAccuracy = (stats: DailyChallengeStats) =>
  stats.totalCompleted > 0
    ? Math.round((stats.totalCorrect / stats.totalCompleted) * 100)
    : 0;

export const getDailyChallengeRankProgress = (
  totalXp: number,
): DailyChallengeRankProgress => {
  const currentRank =
    [...DAILY_CHALLENGE_RANKS]
      .reverse()
      .find((rank) => totalXp >= rank.minXp) ?? DAILY_CHALLENGE_RANKS[0];

  const currentRankIndex = DAILY_CHALLENGE_RANKS.findIndex(
    (rank) => rank.name === currentRank.name,
  );
  const nextRank =
    currentRankIndex < DAILY_CHALLENGE_RANKS.length - 1
      ? DAILY_CHALLENGE_RANKS[currentRankIndex + 1]
      : null;

  if (!nextRank) {
    return {
      currentRank,
      nextRank,
      xpIntoRank: totalXp - currentRank.minXp,
      xpForNextRank: 0,
      progressPercent: 100,
    };
  }

  const xpIntoRank = Math.max(0, totalXp - currentRank.minXp);
  const xpForNextRank = nextRank.minXp - currentRank.minXp;

  return {
    currentRank,
    nextRank,
    xpIntoRank,
    xpForNextRank,
    progressPercent: Math.min(
      100,
      Math.round((xpIntoRank / xpForNextRank) * 100),
    ),
  };
};

export const computeDailyChallengeStats = (
  completions: DailyChallengeCompletionSummary[],
  todayDateKey = getTodayDateKey(),
): DailyChallengeStats => {
  const uniqueDates = Array.from(
    new Set(completions.map((completion) => completion.challengeDate)),
  ).sort();

  const completedDates = new Set(uniqueDates);
  const onTimeDates = new Set(
    completions
      .filter(
        (completion) =>
          (completion.completedDate ?? completion.challengeDate) ===
          completion.challengeDate,
      )
      .map((completion) => completion.challengeDate),
  );
  const completedToday = completedDates.has(todayDateKey);
  const completedTodayOnTime = onTimeDates.has(todayDateKey);
  const streakAnchor = completedTodayOnTime
    ? parseDateKey(todayDateKey)
    : addDays(parseDateKey(todayDateKey), -1);

  let currentStreak = 0;
  let cursor = streakAnchor;

  while (onTimeDates.has(formatDateKey(cursor))) {
    currentStreak += 1;
    cursor = addDays(cursor, -1);
  }

  let bestStreak = 0;
  let runningStreak = 0;
  let previousDate: Date | null = null;

  for (const dateKey of Array.from(onTimeDates).sort()) {
    const currentDate = parseDateKey(dateKey);
    const isNextDay =
      previousDate !== null &&
      currentDate.getTime() - previousDate.getTime() === DAY_IN_MS;

    runningStreak = previousDate === null || !isNextDay ? 1 : runningStreak + 1;
    bestStreak = Math.max(bestStreak, runningStreak);
    previousDate = currentDate;
  }

  return {
    totalCompleted: completions.length,
    totalCorrect: completions.filter((completion) => completion.isCorrect)
      .length,
    totalXp: completions.reduce(
      (total, completion) => total + completion.xpAwarded,
      0,
    ),
    currentStreak,
    bestStreak,
    completedToday,
  };
};
