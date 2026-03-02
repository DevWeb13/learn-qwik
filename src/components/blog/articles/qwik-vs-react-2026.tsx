// src/components/blog/articles/qwik-vs-react-2026.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MetaQwikVsReact2026 from "~/assets/img/qwik-vs-react-2026/metaQwikVsReact2026.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackButton } from "~/components/UI/backButton/backButton";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const QwikVsReact2026Article = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 lg:px-12 lg:py-20">
      <header class="flex flex-col items-center gap-2 px-4 lg:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold lg:max-w-full lg:text-5xl">
          Qwik vs React in 2026
        </h1>
        <h2 class="max-w-[85%] text-center text-2xl font-semibold text-gray-800 lg:max-w-full lg:text-4xl">
          Performance, Hydration & the Future of the Web
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          React dominates frontend development. Qwik challenges the architecture
          itself. Let’s compare hydration, resumability, performance, and
          long-term scalability.
        </p>
      </header>

      <div class="relative flex w-full max-w-5xl flex-col justify-center gap-4 px-4 lg:flex-row">
        <div class="flex w-full flex-col gap-4 lg:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaQwikVsReact2026
                  class="h-full w-full object-contain object-center"
                  alt="Qwik vs React 2026 performance comparison"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Hydration vs Resumability: two different architectural models
                </figcaption>
              </figure>

              <h3>🔎 The Core Difference in One Sentence</h3>

              <p class="font-semibold">React hydrates. Qwik resumes.</p>

              <p>
                React re-executes component logic in the browser to attach event
                listeners and make the UI interactive. Qwik restores the
                application state from the HTML and only loads JavaScript when
                an interaction occurs.
              </p>

              <h3>🧠 Rendering Model</h3>

              <h4>React → Hydration-Based</h4>
              <ul>
                <li>Server renders HTML</li>
                <li>Browser downloads JavaScript</li>
                <li>Virtual DOM is rebuilt</li>
                <li>Event listeners attach</li>
                <li>Application becomes interactive</li>
              </ul>

              <p>
                Hydration cost scales with component complexity and application
                size.
              </p>

              <h4>Qwik → Resumability-Based</h4>
              <ul>
                <li>Server renders HTML</li>
                <li>State is serialized into markup</li>
                <li>No global hydration step</li>
                <li>JavaScript loads only when interaction happens</li>
              </ul>

              <p>
                There is no global hydration phase. Instead of re-running the
                entire component tree on startup, Qwik resumes from serialized
                state and loads code on demand.
              </p>

              <h3>📊 Quick Comparison Overview</h3>

              <div class="overflow-x-auto">
                <table class="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr class="border-b">
                      <th class="py-2">Feature</th>
                      <th class="py-2">React</th>
                      <th class="py-2">Qwik</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2">Startup model</td>
                      <td>Hydration</td>
                      <td>Resumability</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2">Initial JS sent</td>
                      <td>Framework + components</td>
                      <td>Minimal runtime, lazy-loaded per interaction</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2">Re-execution</td>
                      <td>Whole component tree</td>
                      <td>No global re-execution</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2">Edge readiness</td>
                      <td>Evolving (RSC, streaming)</td>
                      <td>Server-first by design</td>
                    </tr>
                    <tr>
                      <td class="py-2">Architectural philosophy</td>
                      <td>Flexible</td>
                      <td>Compiler-enforced discipline</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>📦 JavaScript Payload</h3>

              <h4>React</h4>
              <ul>
                <li>Framework runtime shipped upfront</li>
                <li>Component logic shipped upfront</li>
                <li>Hydration required before interaction</li>
              </ul>

              <h4>Qwik</h4>
              <ul>
                <li>Very small runtime sent at startup</li>
                <li>Function-level lazy loading</li>
                <li>Code delivered only when an interaction requires it</li>
              </ul>

              <p>
                When a user clicks a button, Qwik loads the specific handler
                associated with that interaction instead of hydrating the entire
                component tree upfront.
              </p>

              <h3>⚡ Performance Under Real Conditions</h3>

              <p>Hydration cost increases with:</p>

              <ul>
                <li>Dashboard complexity</li>
                <li>Component nesting depth</li>
                <li>Heavy client-side state</li>
              </ul>

              <p>
                In large SaaS applications, startup performance becomes a
                structural concern. Qwik avoids a global hydration pass and
                distributes the cost of JavaScript execution across user
                interactions instead of paying it all at startup.
              </p>

              <h3>🌍 Edge & Server-Centric Thinking</h3>

              <p>
                React evolved from client-side rendering to SSR, streaming, and
                React Server Components. Qwik was designed from the start around
                server-first rendering and resumability.
              </p>

              <p>
                Streaming, loaders, and fine-grained serialization are native
                design decisions, not layered additions.
              </p>

              <h4>Nuance: React Server Components (RSC)</h4>

              <p>
                React Server Components are part of React itself. They allow
                certain components to run exclusively on the server and avoid
                sending their JavaScript to the client.
              </p>

              <p>
                This can significantly reduce the amount of JavaScript shipped
                compared to traditional client-heavy React applications.
                However, components that require interactivity still need client
                bundles and hydration to attach event listeners.
              </p>

              <p>
                In practice, React Server Components reduce what is sent to the
                browser, while Qwik’s resumability model changes when and how
                JavaScript executes once the page loads.
              </p>

              <h3>🛠 Developer Experience</h3>

              <h4>React</h4>
              <ul>
                <li>Massive ecosystem</li>
                <li>Mature tooling</li>
                <li>Flexible mental model</li>
              </ul>

              <h4>Qwik</h4>
              <ul>
                <li>TypeScript-first approach</li>
                <li>Strict serialization model</li>
                <li>
                  <code>$()</code> enforces architectural clarity
                </li>
              </ul>

              <p>React gives freedom. Qwik enforces structure.</p>

              <h3>🎯 Who Should Consider Switching?</h3>

              <h4>Stay with React if:</h4>
              <ul>
                <li>Your ecosystem depends heavily on React libraries</li>
                <li>Your team has deep React expertise</li>
                <li>Performance budgets are not critical</li>
              </ul>

              <h4>Consider Qwik if:</h4>
              <ul>
                <li>You build dashboards or SaaS platforms</li>
                <li>You deploy at the edge</li>
                <li>You care about startup performance</li>
                <li>You value architectural discipline</li>
              </ul>

              <h3>🔮 Final Takeaway</h3>

              <p>This debate is not emotional. It is architectural.</p>

              <p>React refined hydration. Qwik rethinks it.</p>

              <p class="font-semibold">Resumability is the real innovation.</p>

              <p>
                Whether Qwik overtakes React is secondary. The shift toward
                shipping less JavaScript is already happening.
              </p>

              <ArticleDiscordCallout />

              <h3>🚀 Keep Learning Qwik</h3>
              <p>
                Build a production-ready dashboard step by step in the Learn
                Qwik 2026 course.
              </p>
              <p>
                👉{" "}
                <Link
                  href="/learn/dashboard-app-2026/"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  Start the Learn Qwik 2026 Course
                </Link>
              </p>
            </article>
          </div>
        </div>

        <BackButton />
        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </main>
  );
});
