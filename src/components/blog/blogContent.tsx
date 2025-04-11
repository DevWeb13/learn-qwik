// src/components/blog/blogContent.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import QwikEcoPlanet from "~/assets/img/qwik-eco-planet.webp?jsx";
import { MobileStickyAd } from "../mobileStickyAd/mobileStickyAd";

export const BlogContent = component$(() => {
  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 overflow-hidden bg-white py-12 md:px-12 md:py-20">
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
      <div class="relative flex w-full max-w-screen-lg flex-col gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
            <div class="relative h-48 w-full overflow-hidden rounded-lg">
              <QwikEcoPlanet
                alt="Qwik sustainability"
                class="h-full w-full object-contain object-center"
              />
            </div>
            <h2 class="text-2xl font-bold text-gray-900">
              Qwik in 2025: Why It’s the Future of Web Development
            </h2>
            <p class="text-sm text-gray-500">April 2025 • 5 min read</p>
            <p class="text-gray-800">
              Qwik loads instantly, uses less JavaScript, and delivers better
              performance for users and the planet.
            </p>
            <Link
              href="/blog/qwik-2025"
              class="font-medium text-blue-600 hover:underline"
            >
              Read the full article →
            </Link>
          </div>
        </div>
        <aside class="hidden h-full w-[300px] md:block">
          <div class="rounded-lg bg-white p-0 shadow-sm">
            <div class="overflow-hidden rounded-lg">
              <ins
                class="adsbygoogle"
                style="display:inline-block;width:300px;height:600px"
                data-ad-client="ca-pub-2091224773462896"
                data-ad-slot="1127159078"
              ></ins>
            </div>
          </div>
        </aside>
      </div>

      <MobileStickyAd />
    </div>
  );
});
