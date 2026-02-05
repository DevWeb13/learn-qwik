// src/components/blog/articles/qwik-1-19.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MetaQwik119 from "~/assets/img/qwik-1-19/metaQwik119.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackButton } from "~/components/UI/backButton/backButton";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const Qwik119Article = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Qwik 1.19.0: a discreet but strategic update
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          More control, fewer invisible traps
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          Qwik 1.19.0 does not try to impress. This release refines the engine,
          fixes subtle behaviors, and strengthens application reliability in
          production.
        </p>
      </header>

      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaQwik119
                  class="h-full w-full object-contain object-center"
                  alt="Qwik 1.19.0 release"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Qwik 1.19.0 focuses on precision and robustness
                </figcaption>
              </figure>

              <h3>🧠 Better control over reactivity with untrack()</h3>
              <p>
                In Qwik, any read of a signal or store inside a reactive context
                automatically creates a dependency. This means the code will
                re-run every time that value changes.
              </p>
              <p>
                Problems arise when that read is secondary, yet still triggers
                costly re-executions.
              </p>

              <CodeBlock
                code={`useTask$(() => {
  // This signal changes frequently (scroll, resize, polling, etc.)
  const user = userSignal.value;

  // This log looks harmless, but it creates a dependency
  console.log("Current user:", user);

  // Expensive logic
  expensiveAnalyticsCall(user);
});`}
                language="typescript"
                icon="typescript"
                text="Task unintentionally re-triggered"
                hideLineNumbers
              />

              <p>
                In this example, <code>useTask$</code> will re-run every time
                <code>userSignal</code> changes, even if the read is only used
                for debugging or observation.
              </p>

              <p>
                With <code>untrack()</code>, you can read the value without
                creating a reactive dependency.
              </p>

              <CodeBlock
                code={`useTask$(() => {
  const user = untrack(userSignal);

  // One-off read, no reactive subscription
  console.log("Current user:", user);

  // Expensive logic no longer runs unnecessarily
  expensiveAnalyticsCall(user);
});`}
                language="typescript"
                icon="typescript"
                text="One-off read with untrack"
                hideLineNumbers
              />

              <p>
                Since Qwik 1.19.0, <code>untrack()</code> can accept signals and
                stores directly, without requiring an intermediate function,
                making the intent clearer and more explicit.
              </p>

              <div class="rounded-md border border-blue-200 bg-blue-50 p-4">
                <p class="font-semibold">💡 Pro tip (reactivity)</p>
                <p>
                  Use <code>untrack()</code> only when automatic re-execution
                  would be a logical bug. If your code is meant to react to
                  changes, do not use it. <code>untrack()</code> exists to
                  remove dependencies, not to hide design mistakes.
                </p>
              </div>

              <h3>⚡ Less JavaScript loaded too early with useVisibleTask$</h3>
              <p>
                <code>useVisibleTask$</code> is commonly used to load code only
                when the user actually sees an element.
              </p>
              <p>
                The trap appears when this task depends on heavy libraries.
                Before Qwik 1.19.0, these dependencies could be preloaded too
                early due to automatic bundle merging.
              </p>

              <CodeBlock
                code={`useVisibleTask$(() => {
  import("heavy-analytics-lib").then(({ track }) => {
    track("hero-visible");
  });
});`}
                language="typescript"
                icon="typescript"
                text="useVisibleTask$ with a heavy dependency"
                hideLineNumbers
              />

              <p>
                In this case, the library could be loaded even before the
                element was actually visible on screen.
              </p>

              <p>
                Qwik 1.19.0 now prevents these segments from being merged in
                risky scenarios, ensuring that the code is loaded only when it
                is genuinely needed.
              </p>

              <div class="rounded-md border border-green-200 bg-green-50 p-4">
                <p class="font-semibold">💡 Pro tip (performance)</p>
                <p>
                  <code>useVisibleTask$</code> is ideal for interaction- or
                  visibility-related effects. Avoid placing critical or
                  render-blocking logic there. If code is required to render the
                  page, it should not be deferred.
                </p>
              </div>

              <h3>📦 Cleaner SSR outputs</h3>
              <p>
                A bug sometimes caused duplicate preloading of certain bundles
                during SSR. This behavior has been fixed.
              </p>
              <p>
                At the same time, internal references such as{" "}
                <code>core.js</code>
                and <code>preloader.js</code> are now filtered out of manifests
                and unnecessary graphs.
              </p>
              <p>
                This reduces noise, simplifies debugging, and makes outputs
                easier to read for tooling.
              </p>

              <h3>🧪 Easier testing and development with Qwik City</h3>
              <p>
                It is now possible to mock route loaders and actions in a Qwik
                City context.
              </p>
              <p>
                This allows testing a route without relying on external services
                or real data, significantly improving the local development and
                testing experience.
              </p>

              <h3>🌍 Improved robustness in SPA and at the edge</h3>
              <p>
                A bug causing URL origin inconsistencies between client and
                server in SPA mode has been fixed.
              </p>
              <p>
                New <code>getOrigin</code> options are also available for Bun
                and Deno, allowing explicit configuration of the correct origin.
              </p>
              <p>
                Finally, an official Cloudflare Workers adapter is now
                available, confirming Qwik’s clear direction toward edge
                computing.
              </p>

              <h3>🔒 Safer server-side events</h3>
              <p>
                Server-side <code>RequestEvents</code> are now
                <strong>readonly</strong> instead of being frozen objects.
              </p>
              <p>
                This change does not affect runtime behavior, but it improves
                TypeScript safety and ergonomics by preventing accidental
                mutations, while offering better performance than frozen
                objects.
              </p>
              <p>
                This is an internal adjustment, transparent for most
                applications, yet it strengthens the overall robustness of the
                server model.
              </p>

              <h3>🔄 Should you update an existing project?</h3>
              <p>
                Qwik 1.19.0 introduces no breaking changes. Updating is
                therefore not mandatory, but it is strongly recommended for
                active or evolving projects.
              </p>
              <p>
                If your project uses an older version of Qwik, updating will
                automatically apply fixes and improvements from intermediate
                releases. These changes are mostly internal and aim to make
                behavior stricter, more predictable, and more performant.
              </p>

              <h4>What happens when updating from an older version?</h4>
              <p>
                Updating directly to the latest 1.x version is the recommended
                approach. There is no need to go through each release one by
                one.
              </p>
              <p>
                In some cases, the update may expose fragile existing behavior,
                such as implicit reactive dependencies or excessive JavaScript
                loading. These are not regressions, but fixes that make such
                issues visible.
              </p>

              <h4>Simple framework update</h4>
              <CodeBlock
                code={`# npm
npm install @builder.io/qwik@latest @builder.io/qwik-city@latest

# pnpm
pnpm up @builder.io/qwik @builder.io/qwik-city

# yarn
yarn upgrade @builder.io/qwik @builder.io/qwik-city`}
                language="bash"
                icon="terminal"
                text="Update Qwik and Qwik City"
                hideLineNumbers
              />

              <p>
                If your project uses Qwik City (routing, SSR, loaders, actions),
                make sure to update both <code>@builder.io/qwik</code> and
                <code>@builder.io/qwik-city</code> to keep versions aligned.
              </p>

              <h4>Recommended checks after updating</h4>
              <p>
                Once the dependency is updated, a few simple checks are enough
                for most projects.
              </p>

              <CodeBlock
                code={`# start the development server
npm run dev

# verify that the build succeeds
npm run build`}
                language="bash"
                icon="terminal"
                text="Post-update checks"
                hideLineNumbers
              />

              <p>
                Pay special attention to pages using
                <code>useVisibleTask$</code>, SSR rendering, and critical
                routes. If these work correctly, the update is generally safe.
              </p>

              <div class="rounded-md border border-gray-200 bg-gray-50 p-4">
                <p class="font-semibold">📋 Upgrade guide (summary)</p>
                <ol class="list-decimal pl-6">
                  <li>Create a dedicated update branch</li>
                  <li>Update Qwik via your package manager</li>
                  <li>Run the project in dev mode and then build</li>
                  <li>Verify SSR, critical routes, and deferred tasks</li>
                </ol>

                <p>
                  In the vast majority of cases, no code changes are required
                  after the update.
                </p>
              </div>

              <h3>🎯 What this release says about Qwik</h3>
              <p>
                Qwik 1.19.0 does not change how you write applications. It
                improves how applications behave in real-world scenarios that
                are often difficult to diagnose.
              </p>
              <p>
                This is a release that reduces invisible traps, reinforces
                predictability, and increases confidence in production.
              </p>

              <ArticleDiscordCallout />

              <h3>📘 Keep improving with Qwik</h3>
              <p>
                These improvements make the most sense when you understand
                Qwik’s mental model and architectural choices.
              </p>
              <p>
                👉{" "}
                <Link
                  href="/blog/"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  Back to the Learn Qwik blog
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
