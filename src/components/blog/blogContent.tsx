// src/components/blog/blogContent.tsx

import { component$ } from "@builder.io/qwik";
import MetaInstallNodeUbuntu from "~/assets/img/install-node/metaInstallNodeUbuntu.png?jsx";
import MetaOpenTerminalUbuntu from "~/assets/img/open-terminal/metaOpenTerminalUbuntu.png?jsx";
import QwikEcoPlanet from "~/assets/img/qwik-eco-planet.webp?jsx";
import MetaRemoveConsoleLog from "~/assets/img/remove-console-log/metaRemoveConsoleLog.png?jsx";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";
import { DesktopStickyAd } from "../desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "../mobileStickyAd/mobileStickyAd";
import { BlogCard } from "./blogCard";

export const BlogContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8  bg-white py-12 md:px-12 md:py-20">
      <div class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-semibold md:max-w-[100%] md:text-6xl">
          All About <span class="text-blue-500">Qwik</span>: Tutorials, News &
          Best Practices
        </h1>
        <p class="max-w-xl text-center text-gray-900">
          Discover why Qwik is reshaping the future of web development. Faster,
          cleaner, and more sustainable.
        </p>
      </div>

      {/* ✅ Flex row : barre à gauche + contenu */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <BlogCard
            title="Learn Qwik (2025) — Remove console.log in production (Qwik + Vite)"
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
            title="Learn Qwik From A to Z (2025) — Install Node.js and NPM on Ubuntu (1/∞)"
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
            title="Learn Qwik From A to Z (2025) — Open the Terminal on Ubuntu (0/∞)"
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

          <BlogCard
            title="Qwik in 2025: Why It’s the Future of Web Development"
            description="Qwik loads instantly, uses less JavaScript, and delivers better performance for users and the planet."
            href="/blog/qwik-2025/"
            date="April 2025"
            readTime="5 min read"
          >
            <QwikEcoPlanet
              class="h-full w-full object-contain object-center"
              alt="Qwik sustainability"
            />
          </BlogCard>
        </div>
        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});
