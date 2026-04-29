// src/constants/blogArticles.ts

import MetaCreateQwikAppCli from "~/assets/img/create-qwik-app-cli/metaCreateQwikAppCli.png?jsx";
import MetaInstallNodeUbuntu from "~/assets/img/install-node/metaInstallNodeUbuntu.png?jsx";
import MetaInstallVSCodeUbuntu from "~/assets/img/install-vscode/metaInstallVSCodeUbuntu.png?jsx";
import MetaQwik2025 from "~/assets/img/metaQwik2025.png?jsx";
import MetaOpenTerminalUbuntu from "~/assets/img/open-terminal/metaOpenTerminalUbuntu.png?jsx";
import MetaOpenAICodexApp from "~/assets/img/openai-codex-app/metaOpenAICodexApp.png?jsx";
import MetaQwik119 from "~/assets/img/qwik-1-19/metaQwik119.png?jsx";
import MetaQwik2Beta from "~/assets/img/qwik-2-beta/metaQwik2Beta.png?jsx";
import MetaQwikCVE2026 from "~/assets/img/qwik-cve-2026/metaQwikCVE2026.png?jsx";
import MetaQwikCVE202627971 from "~/assets/img/qwik-cve-2026/metaQwikCVE202627971.png?jsx";
import MetaQwikVsReact2026 from "~/assets/img/qwik-vs-react-2026/metaQwikVsReact2026.png?jsx";
import MetaRemoveConsoleLog from "~/assets/img/remove-console-log/metaRemoveConsoleLog.png?jsx";

export type BlogPost = {
  title: string;
  description: string;
  href: string;
  date: string;
  readTime: string;
  image: any;
  imageAlt: string;
  badge?: string;
  badgeVariant?: "security" | "comparison" | "default";
};

export type BlogSection = {
  id: string;
  label: string;
  tone: "purple" | "blue";
  description: string;
  titleParts: {
    before?: string;
    highlight?: string;
    after?: string;
  };
  posts: BlogPost[];
};

export const blogSections: BlogSection[] = [
  {
    id: "latest-2026",
    label: "Main coverage",
    tone: "purple",
    titleParts: {
      highlight: "Qwik",
      after: " in 2026 | Special Edition",
    },
    description:
      "Current Qwik articles, security topics, framework comparisons, and updates that actually matter.",
    posts: [
      {
        title: "Critical Qwik server$ RCE | CVE-2026-27971 explained",
        description:
          "A critical unauthenticated RCE vulnerability affecting Qwik up to 1.19.0 through server$. Learn what was impacted, who is concerned, and why updating to 1.19.1 is the right fix.",
        href: "/blog/qwik-cve-2026-27971/",
        date: "March 2026",
        readTime: "3 min read",
        badge: "Security advisory",
        badgeVariant: "security",
        image: MetaQwikCVE202627971,
        imageAlt: "Qwik security advisory CVE-2026-27971",
      },
      {
        title: "Qwik vs React in 2026 | Hydration vs Resumability",
        description:
          "A technical comparison between React and Qwik in 2026. Hydration vs resumability, JavaScript payload, edge architecture, and long-term scalability.",
        href: "/blog/qwik-vs-react-2026/",
        date: "March 2026",
        readTime: "4 min read",
        badge: "Framework comparison",
        badgeVariant: "comparison",
        image: MetaQwikVsReact2026,
        imageAlt: "Qwik vs React 2026 comparison",
      },
      {
        title: "Security Advisory (2026) | CVE-2026-25148 Fixed in Qwik 1.19.0",
        description:
          "A Cross-Site Scripting (XSS) vulnerability affecting Qwik SSR apps prior to 1.19.0. Learn what was impacted, who is concerned, and why updating is enough.",
        href: "/blog/qwik-cve-2026-25148/",
        date: "January 2026",
        readTime: "3 min read",
        badge: "Security advisory",
        badgeVariant: "security",
        image: MetaQwikCVE2026,
        imageAlt: "Qwik security advisory CVE-2026-25148",
      },
      {
        title: "Qwik 1.19.0 (2026): A Discreet but Strategic Update",
        description:
          "Qwik 1.19.0 focuses on precision rather than spectacle. Smarter reactivity control, cleaner SSR outputs, safer server events, and better performance in real-world apps.",
        href: "/blog/qwik-1-19/",
        date: "January 2026",
        readTime: "4 min read",
        image: MetaQwik119,
        imageAlt: "Qwik 1.19.0 release overview",
      },
    ],
  },
  {
    id: "off-topic-2026",
    label: "Side topic",
    tone: "blue",
    titleParts: {
      before: "Off Topic | Special Edition 2026",
    },
    description:
      "Adjacent developer topics that are useful, but clearly separate from the main Qwik editorial line.",
    posts: [
      {
        title: "What Is OpenAI Codex App? Beginner Guide 2026",
        description:
          "A beginner-friendly explanation of OpenAI Codex App, AI coding agents, parallel software work, and how the developer role changes.",
        href: "/blog/openai-codex-app-beginners/",
        date: "January 2026",
        readTime: "4 min read",
        image: MetaOpenAICodexApp,
        imageAlt: "OpenAI Codex App overview",
      },
    ],
  },
  {
    id: "learn-qwik-atoz",
    label: "Beginner series",
    tone: "purple",
    titleParts: {
      before: "Learn ",
      highlight: "Qwik",
      after: " From A to Z (2025)",
    },
    description:
      "Beginner-friendly material covering the terminal, Node.js, VS Code, and the first steps of a Qwik project.",
    posts: [
      {
        title: "How to Install Qwik with the CLI | Create a Qwik App",
        description:
          "Install Qwik step by step with the official CLI. Create a new Qwik app, install dependencies, and open the project in VS Code.",
        href: "/blog/create-qwik-app-cli/",
        date: "May 2025",
        readTime: "3 min read",
        image: MetaCreateQwikAppCli,
        imageAlt: "Create a Qwik App with the CLI",
      },
      {
        title: "Install VS Code on Ubuntu with APT | Step-by-Step",
        description:
          "Install Visual Studio Code on Ubuntu using the official Microsoft APT repository and terminal commands.",
        href: "/blog/install-vscode-ubuntu/",
        date: "May 2025",
        readTime: "3 min read",
        image: MetaInstallVSCodeUbuntu,
        imageAlt: "Install Visual Studio Code on Ubuntu",
      },
      {
        title: "Install Node.js and npm on Ubuntu | Step-by-Step",
        description:
          "Install Node.js and npm on Ubuntu from the terminal, check your versions, and prepare your machine for a Qwik project.",
        href: "/blog/install-nodejs-ubuntu/",
        date: "April 2025",
        readTime: "3 min read",
        image: MetaInstallNodeUbuntu,
        imageAlt: "Install Node.js on Ubuntu",
      },
      {
        title:
          "Learn Qwik From A to Z (2025) | Open the Terminal on Ubuntu (0/∞)",
        description:
          "Learn how to open and use the Ubuntu Terminal – the essential tool for installing and building your first Qwik project.",
        href: "/blog/open-terminal-ubuntu/",
        date: "April 2025",
        readTime: "4 min read",
        image: MetaOpenTerminalUbuntu,
        imageAlt: "Open the Terminal on Ubuntu",
      },
    ],
  },
  {
    id: "archive-2025",
    label: "Archive",
    tone: "blue",
    titleParts: {
      highlight: "Qwik",
      after: " in 2025 | Special Edition",
    },
    description:
      "Older Qwik articles that still deserve a place: release notes, migration topics, production cleanup, and broader framework positioning.",
    posts: [
      {
        title: "Qwik 2.0 Beta is here | What’s New & How to Migrate",
        description:
          "Explore the Qwik 2.0 Beta release: core rewrite, async APIs, leaner HTML, and migration tips. A big step forward for resumable apps!",
        href: "/blog/qwik-2-beta/",
        date: "July 2025",
        readTime: "4 min read",
        image: MetaQwik2Beta,
        imageAlt: "Qwik 2.0 Beta article banner",
      },
      {
        title: "Vite Remove console.log in Production | Qwik, React, Vue",
        description:
          "Remove console.log from production builds with Vite. Works for Qwik, React, Vue, SvelteKit, Astro, and other Vite-based projects.",
        href: "/blog/remove-console-log-prod/",
        date: "May 2025",
        readTime: "3 min read",
        image: MetaRemoveConsoleLog,
        imageAlt: "Remove console.log in production",
      },
      {
        title: "What Is Qwik? Resumability and Performance Explained",
        description:
          "Learn what Qwik is, how resumability works, and why Qwik can ship less JavaScript for faster web apps.",
        href: "/blog/qwik-2025/",
        date: "April 2025",
        readTime: "4 min read",
        image: MetaQwik2025,
        imageAlt: "Qwik sustainability",
      },
    ],
  },
];
