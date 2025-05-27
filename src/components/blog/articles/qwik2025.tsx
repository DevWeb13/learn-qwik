// src/components/blog/articles/qwik2025.tsx

import { component$ } from "@builder.io/qwik";
import JSComparisonChart from "~/assets/img/js-comparison.webp?jsx";
import MetaQwik2025 from "~/assets/img/metaQwik2025.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { BackButton } from "~/components/UI/backButton/backButton";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const Qwik2025Article = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8  bg-white py-12 md:px-12 md:py-20">
      {/* ✅ Titre principal pleine largeur */}
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-semibold md:max-w-[100%] md:text-6xl">
          Qwik in 2025: Why It's the Future of Web Development
        </h1>
        <p class="max-w-xl text-center text-gray-900">
          Discover why Qwik is reshaping the future of web development. Faster,
          cleaner, and more sustainable.
        </p>
      </header>

      {/* ✅ Bloc article + pub */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        {/* ✅ Article */}
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-4 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaQwik2025
                  alt="Qwik sustainable future"
                  class="mx-auto w-full max-w-3xl rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Qwik combines speed and sustainability like no other
                  framework.
                </figcaption>
              </figure>

              <p>
                In a web ecosystem flooded with JavaScript-heavy frameworks, one
                stands out in 2025 for doing things radically differently:{" "}
                <strong>Qwik</strong>. Designed from the ground up for instant
                loading and better performance, Qwik is becoming the go-to
                choice for teams that want speed without compromise.
              </p>

              <h2>🚀 1. Performance: Instant Load Times, Always</h2>
              <p>
                Unlike React, Vue, or Svelte, Qwik uses a unique technique
                called
                <strong> resumability </strong>. Instead of rehydrating the
                entire app after load, Qwik continues from where the server left
                off. This makes pages feel <strong>instant</strong>, even on
                slow connections.
              </p>

              <p>Let's compare time-to-interactive for a simple app:</p>

              <ul>
                <li>React (Vite): ~1200ms</li>
                <li>Vue (Vite): ~950ms</li>
                <li>
                  <strong>Qwik: ~100ms</strong>
                </li>
              </ul>

              <p>
                These results are confirmed by performance analyses such as
                those from{" "}
                <a
                  href="https://tsh.io/blog/javascript-frameworks-frontend-development/"
                  target="_blank"
                >
                  TSH.io
                </a>
                . Thanks to lazy-loading everything by default, Qwik makes
                performance effortless.
              </p>

              <h2>📦 2. JavaScript: Load Less, Do More</h2>
              <p>
                Traditional frameworks ship tens or hundreds of kilobytes of
                JavaScript upfront, even for simple pages. Vue loads 53.6 KB on
                page load. React loads 140 KB. Qwik initially loads just
                <strong>1.6 KB (Brotli compressed)</strong> of JavaScript—its
                small Qwikloader. For any non-trivial interaction, Qwik loads
                its core, which is about{" "}
                <strong>69 KB raw / 24 KB Brotli</strong>.
              </p>

              <figure class="mb-8">
                <JSComparisonChart
                  alt="Initial JavaScript Loaded on Page Load (React, Vue, Qwik)"
                  class="mx-auto w-full max-w-2xl rounded-md shadow"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Qwik starts with the smallest JS payload (1.6 KB), loading
                  more only when needed.
                </figcaption>
              </figure>

              <p>
                This approach drastically improves performance metrics like
                Largest Contentful Paint (LCP) and Time to Interactive (TTI),
                especially on mobile or low-end devices. You can find more
                details about the exact sizes and breakdowns of Qwik's loader
                and core in the official Qwik repository:{" "}
                <a
                  href="https://github.com/QwikDev/qwik/actions/runs/14367454638/job/40283641680#step:6:42"
                  target="_blank"
                >
                  Qwik GitHub Actions (details)
                </a>
                .
              </p>

              <h2>🌱 3. Sustainability: Less Carbon, Less Load</h2>
              <p>
                Every kilobyte matters when you serve millions of users. Lighter
                pages mean less CPU usage, less bandwidth, and fewer server
                resources. According to{" "}
                <a
                  href="https://www.adservio.fr/post/qwik-and-green-it-building-sustainable-web-applications-for-future"
                  target="_blank"
                >
                  Adservio
                </a>
                , Qwik-powered sites promote greener digital practices by
                reducing unnecessary JavaScript execution and data transfer—key
                factors in lowering carbon emissions.
              </p>

              <p>
                In an era of growing awareness about digital pollution, Qwik
                helps developers build apps that are not just fast, but also
                more responsible.
              </p>

              <h2>🔧 4. Developer Experience: Familiar, But Better</h2>
              <p>
                Qwik uses JSX, Vite, TypeScript, and a file-based routing
                system. Developers coming from React or Vue feel at home — but
                get performance improvements for free.
              </p>

              <p>
                Unlike frameworks that force complex memoization and state
                juggling, Qwik's reactivity model is declarative and easy to
                follow.
              </p>

              <p>
                Tooling is top-notch: fast dev server, HMR, server-first
                mindset, and a growing ecosystem of components.
              </p>

              <h2>📊 5. Use Cases: When to Choose Qwik</h2>
              <p>Qwik excels in:</p>
              <ul>
                <li>Marketing sites that must load instantly</li>
                <li>eCommerce apps where conversion depends on speed</li>
                <li>Content platforms with SEO needs</li>
                <li>SPAs that need long-term maintainability</li>
              </ul>
              <p>
                That said, Qwik is still a wonderful choice for more 'regular'
                uses, thanks to its seamless SSR, Signals API, and minimal
                browser-side JS footprint, making it a great fit for most web
                projects.
              </p>

              <h2>📈 Final Comparison (2025)</h2>
              <div class="w-full overflow-auto">
                <table class="mt-4 w-full table-auto border-collapse text-sm md:text-base">
                  <thead>
                    <tr>
                      <th class="border px-4 py-2 text-left">Framework</th>
                      <th class="border px-4 py-2 text-left">
                        Time to Interactive
                      </th>
                      <th class="border px-4 py-2 text-left">
                        Initial JS on Load
                      </th>
                      <th class="border px-4 py-2 text-left">Hydration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border px-4 py-2">React (Vite)</td>
                      <td class="border px-4 py-2">~1200ms</td>
                      <td class="border px-4 py-2">140 KB</td>
                      <td class="border px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2">Vue (Vite)</td>
                      <td class="border px-4 py-2">~950ms</td>
                      <td class="border px-4 py-2">53.6 KB</td>
                      <td class="border px-4 py-2">Yes</td>
                    </tr>
                    <tr>
                      <td class="border px-4 py-2 font-bold text-blue-600">
                        Qwik
                      </td>
                      <td class="border px-4 py-2 font-bold">~100ms</td>
                      <td class="border px-4 py-2 font-bold">
                        1.6 KB (starter)
                      </td>
                      <td class="border px-4 py-2 font-bold">No (Resumable)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 class="mt-12">🧠 Conclusion: Qwik is Ready for Prime Time</h2>
              <p>
                In 2025, performance is no longer optional. Users expect instant
                access, smooth interactions, and responsible websites. Qwik
                delivers on all fronts:{" "}
                <strong>speed, DX, sustainability, and maintainability</strong>.
              </p>

              <p>
                If you're starting a new project today, there's no reason not to
                give Qwik a serious look. The future of the web is here — and
                it's resumable.
              </p>
            </article>
          </div>
        </div>
        <BackButton />

        {/* ✅ Pub à droite */}
        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </main>
  );
});
