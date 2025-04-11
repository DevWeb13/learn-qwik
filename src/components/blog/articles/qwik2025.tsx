// src/components/blog/articles/qwik2025.tsx

import { component$ } from "@builder.io/qwik";
import JSComparisonChart from "~/assets/img/js-comparison.webp?jsx";
import QwikEcoPlanet from "~/assets/img/qwik-eco-planet.webp?jsx";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";

export const Qwik2025Article = component$(() => {
  return (
    <div class="relative flex w-full flex-col items-center bg-white px-4 py-12 md:px-12 md:py-20">
      {/* ✅ Titre principal pleine largeur */}
      <div class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-bold md:max-w-[100%] md:text-6xl">
          Qwik in 2025: Why It's the Future of Web Development
        </h1>
        <p class="text-sm text-gray-500">April 7, 2025 • 5 min read</p>
      </div>

      {/* ✅ Bloc article + pub */}
      <div class="flex w-full max-w-screen-lg flex-1 flex-col gap-4 px-4 md:flex-row">
        {/* ✅ Article */}
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <article class="prose prose-lg max-w-none text-gray-800">
            <figure class="mb-8">
              <QwikEcoPlanet
                alt="Qwik sustainable future"
                class="mx-auto w-full max-w-3xl rounded-md shadow-md"
              />
              <figcaption class="mt-2 text-center text-sm text-gray-500">
                Qwik combines speed and sustainability like no other framework.
              </figcaption>
            </figure>

            <p>
              In a web ecosystem flooded with JavaScript-heavy frameworks, one
              stands out in 2025 for doing things radically differently:{" "}
              <strong>Qwik</strong>. Designed from the ground up for instant
              loading and better performance, Qwik is becoming the go-to choice
              for teams that want speed without compromise.
            </p>

            <h2>🚀 1. Performance: Instant Load Times, Always</h2>
            <p>
              Unlike React, Vue, or Svelte, Qwik uses a unique technique called
              <strong> resumability </strong>. Instead of rehydrating the entire
              app after load, Qwik continues from where the server left off.
              This makes pages feel <strong>instant</strong>, even on slow
              connections.
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
              These results are confirmed by performance analyses such as those
              from{" "}
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
              page load. React loads 140 KB. Qwik only loads{" "}
              <strong>1 KB</strong> of JavaScript initially—its tiny Qwikloader—
              and defers the rest until user interaction.
            </p>

            <figure class="mb-8">
              <JSComparisonChart
                alt="Initial JavaScript Loaded on Page Load (React, Vue, Qwik)"
                class="mx-auto w-full max-w-2xl rounded-md shadow"
              />
              <figcaption class="mt-2 text-center text-sm text-gray-500">
                Qwik leads with the smallest initial JS payload: just 1 KB
                loaded on page load.
              </figcaption>
            </figure>

            <p>
              This approach drastically improves performance metrics like
              Largest Contentful Paint (LCP) and Time to Interactive (TTI),
              especially on mobile or low-end devices.
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
              , Qwik-powered sites promote greener digital practices by reducing
              unnecessary JavaScript execution and data transfer—key factors in
              lowering carbon emissions.
            </p>

            <p>
              In an era of growing awareness about digital pollution, Qwik helps
              developers build apps that are not just fast, but also more
              responsible.
            </p>

            <h2>🔧 4. Developer Experience: Familiar, But Better</h2>
            <p>
              Qwik uses JSX, Vite, TypeScript, and a file-based routing system.
              Developers coming from React or Vue feel at home — but get
              performance improvements for free.
            </p>

            <p>
              Unlike frameworks that force complex memoization and state
              juggling, Qwik's reactivity model is declarative and easy to
              follow.
            </p>

            <p>
              Tooling is top-notch: fast dev server, HMR, server-first mindset,
              and a growing ecosystem of components.
            </p>

            <h2>📊 5. Use Cases: When to Choose Qwik</h2>
            <ul>
              <li>Marketing sites that must load instantly</li>
              <li>eCommerce apps where conversion depends on speed</li>
              <li>Content platforms with SEO needs</li>
              <li>SPAs that need long-term maintainability</li>
            </ul>

            <p>
              Qwik is already used in production by companies looking to
              future-proof their frontend stack.
            </p>

            <h2>📈 Final Comparison (2025)</h2>
            <table class="mt-4 w-full table-auto border-collapse text-sm md:text-base">
              <thead>
                <tr>
                  <th class="border px-4 py-2 text-left">Framework</th>
                  <th class="border px-4 py-2 text-left">
                    Time to Interactive
                  </th>
                  <th class="border px-4 py-2 text-left">Initial JS on Load</th>
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
                  <td class="border px-4 py-2 font-bold text-blue-600">Qwik</td>
                  <td class="border px-4 py-2 font-bold">~100ms</td>
                  <td class="border px-4 py-2 font-bold">1 KB</td>
                  <td class="border px-4 py-2 font-bold">No (Resumable)</td>
                </tr>
              </tbody>
            </table>

            <h2 class="mt-12">🧠 Conclusion: Qwik is Ready for Prime Time</h2>
            <p>
              In 2025, performance is no longer optional. Users expect instant
              access, smooth interactions, and responsible websites. Qwik
              delivers on all fronts:{" "}
              <strong>speed, DX, sustainability, and maintainability</strong>.
            </p>

            <p>
              If you're starting a new project today, there's no reason not to
              give Qwik a serious look. The future of the web is here — and it's
              resumable.
            </p>
          </article>
        </div>

        {/* ✅ Pub à droite */}
        <aside class="relative mt-8 hidden w-[300px] md:block">
          <div class="sticky top-4 rounded-lg bg-white p-0 shadow-sm">
            <div class="rounded-lg">
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
