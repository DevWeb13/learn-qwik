// src/components/blog/blogContent.tsx

import { component$, useStylesScoped$ } from "@builder.io/qwik";
import MetaCreateQwikAppCli from "~/assets/img/create-qwik-app-cli/metaCreateQwikAppCli.png?jsx";
import MetaInstallNodeUbuntu from "~/assets/img/install-node/metaInstallNodeUbuntu.png?jsx";
import MetaInstallVSCodeUbuntu from "~/assets/img/install-vscode/metaInstallVSCodeUbuntu.png?jsx";
import MetaQwik2025 from "~/assets/img/metaQwik2025.png?jsx";
import MetaOpenTerminalUbuntu from "~/assets/img/open-terminal/metaOpenTerminalUbuntu.png?jsx";
import MetaQwik2Beta from "~/assets/img/qwik-2-beta/metaQwik2Beta.png?jsx";
import MetaRemoveConsoleLog from "~/assets/img/remove-console-log/metaRemoveConsoleLog.png?jsx";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";
import { DesktopStickyAd } from "../desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "../mobileStickyAd/mobileStickyAd";
import { BlogCard } from "./blogCard";

export const BlogContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  useStylesScoped$(`
    .blog_posts {
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  `);
  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-semibold md:max-w-[100%] md:text-6xl">
          All About <span class="text-blue-500">Qwik</span>: Tutorials, News &
          Best Practices
        </h1>
        <p class="max-w-xl text-center text-gray-900">
          Discover why Qwik is reshaping the future of web development. Faster,
          cleaner, and more sustainable.
        </p>
      </header>

      {/* ✅ Flex row : barre à gauche + contenu */}
      <main class="relative flex w-full max-w-screen-2xl flex-col justify-center gap-4 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <h2 class="text-2xl font-bold text-gray-900">
            <span class="text-blue-500">Learn Qwik</span> From A to Z (2025)
          </h2>
          <div class="blog_posts">
            <BlogCard
              title="Learn Qwik From A to Z (2025) | Create a Qwik App with the CLI (3/∞)"
              description="Beginner-friendly guide to create a new Qwik app using the official CLI. Step-by-step instructions using only the terminal."
              href="/blog/create-qwik-app-cli/"
              date="May 2025"
              readTime="3 min read"
            >
              <MetaCreateQwikAppCli
                class="h-full w-full object-contain object-center"
                alt="Create a Qwik App with the CLI"
              />
            </BlogCard>

            <BlogCard
              title="Learn Qwik From A to Z (2025) | Install Visual Studio Code on Ubuntu (2/∞)"
              description="Complete step-by-step guide to install Visual Studio Code on Ubuntu using the official repository. Safe and easy method for beginners."
              href="/blog/install-vscode-ubuntu/"
              date="May 2025"
              readTime="3 min read"
            >
              <MetaInstallVSCodeUbuntu
                class="h-full w-full object-contain object-center"
                alt="Install Visual Studio Code on Ubuntu"
              />
            </BlogCard>

            <BlogCard
              title="Learn Qwik From A to Z (2025) | Install Node.js and NPM on Ubuntu (1/∞)"
              description="Step-by-step instructions to install Node.js and npm on Ubuntu. Includes commands, explanations, and source links."
              href="/blog/install-nodejs-ubuntu/"
              date="April 2025"
              readTime="3 min read"
            >
              <MetaInstallNodeUbuntu
                class="h-full w-full object-contain object-center"
                alt="Install Node.js on Ubuntu"
              />
            </BlogCard>

            <BlogCard
              title="Learn Qwik From A to Z (2025) | Open the Terminal on Ubuntu (0/∞)"
              description="Learn how to open and use the Ubuntu Terminal – the essential tool for installing and building your first Qwik project."
              href="/blog/open-terminal-ubuntu/"
              date="April 2025"
              readTime="2 min read"
            >
              <MetaOpenTerminalUbuntu
                class="h-full w-full object-contain object-center"
                alt="Open the Terminal on Ubuntu"
              />
            </BlogCard>
          </div>

          <h2 class="text-2xl font-bold text-gray-900">
            <span class="text-blue-500">Qwik</span> in 2025 | Special Edition
          </h2>
          <div class="blog_posts">
            <BlogCard
              title="Qwik 2.0 Beta is here | What’s New & How to Migrate"
              description="Explore the Qwik 2.0 Beta release: core rewrite, async APIs, leaner HTML, and migration tips. A big step forward for resumable apps!"
              href="/blog/qwik-2-beta/"
              date="July 2025"
              readTime="4 min read"
            >
              <MetaQwik2Beta
                class="h-full w-full object-contain object-center"
                alt="Qwik 2.0 Beta article banner"
              />
            </BlogCard>

            <BlogCard
              title="Learn Qwik (2025) | Remove console.log in production (Qwik + Vite)"
              description="Learn how to automatically clean up your production builds by removing console.log using Vite. Works with all Vite-based projects."
              href="/blog/remove-console-log-prod/"
              date="May 2025"
              readTime="2 min read"
            >
              <MetaRemoveConsoleLog
                class="h-full w-full object-contain object-center"
                alt="Remove console.log in production"
              />
            </BlogCard>

            <BlogCard
              title="Qwik in 2025: Why It’s the Future of Web Development"
              description="Qwik loads instantly, uses less JavaScript, and delivers better performance for users and the planet."
              href="/blog/qwik-2025/"
              date="April 2025"
              readTime="5 min read"
            >
              <MetaQwik2025
                class="h-full w-full object-contain object-center"
                alt="Qwik sustainability"
              />
            </BlogCard>
          </div>
        </section>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});
