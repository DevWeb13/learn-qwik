// src/components/blog/articles/qwik-2-beta.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import MetaQwik2Beta from "~/assets/img/qwik-2-beta/metaQwik2Beta.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackButton } from "~/components/UI/backButton/backButton";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const Qwik2BetaArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Qwik 2.0 Beta is here 🎉
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          A new era for resumable web apps
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          After 1.5 years of work, Qwik 2.0 Beta is finally out! Let’s explore
          the new APIs, performance improvements, and breaking changes.
        </p>
      </header>

      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaQwik2Beta
                  class="h-full w-full object-contain object-center"
                  alt="Qwik 2.0 Beta"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Qwik 2.0 Beta is ready for testing
                </figcaption>
              </figure>

              <h3>🚀 Why Qwik 2.0 is a big deal</h3>
              <p>
                Qwik 2.0 is more than a version bump. It’s a full rewrite of the
                core with major benefits:
              </p>
              <ul>
                <li>🔥 Leaner HTML output (no more comment nodes)</li>
                <li>🧠 Simplified internal logic for better maintainability</li>
                <li>
                  🆕 Powerful new APIs like <code>useAsyncComputed$</code> and{" "}
                  <code>useSerializer$</code>
                </li>
                <li>⚡️ Faster task scheduling and improved performance</li>
              </ul>

              <h3>✨ New APIs: Async + Serialization</h3>
              <p>Two new APIs land in Qwik 2.0:</p>
              <ul>
                <li>
                  <strong>useAsyncComputed$</strong>: a reactive signal that
                  updates based on async logic.
                </li>
                <li>
                  <strong>useSerializer$</strong>: gives third-party libraries
                  control over how data is sent from server to client.
                </li>
              </ul>

              <h3>📦 Breaking changes you need to know</h3>
              <p>
                Qwik 2 introduces a few breaking changes. The biggest one is the
                move to a new scoped NPM package: all imports now come from{" "}
                <code>@qwik.dev/*</code>, such as <code>@qwik.dev/core</code>{" "}
                and <code>@qwik.dev/router</code>.
              </p>
              <CodeBlock
                code={`// Before (Qwik v1)
import { component$ } from "@builder.io/qwik";

// Now (Qwik v2)
import { component$ } from "@qwik.dev/core";
`}
                language="typescript"
                icon="typescript"
                text="Migration to @qwik.dev scope"
                hideLineNumbers
              />
              <p>
                A migration CLI is planned to assist with this update. While it
                may not be released yet, you can test the following command
                (check locally before applying it in production):
              </p>
              <CodeBlock
                code={`npx qwik migrate-v2`}
                language="bash"
                icon="terminal"
                text="Beta migration CLI"
                hideLineNumbers
              />
              <p>
                The CLI is expected to update your imports and package.json
                automatically. Always review the changes on a separate git
                branch before merging.
              </p>

              <h3>🛠️ HTML validation enforced</h3>
              <p>
                Qwik now enforces valid HTML nesting. Tags like{" "}
                <code>&lt;p&gt;</code> must not contain block elements such as{" "}
                <code>&lt;div&gt;</code>. This ensures better compatibility and
                cleaner markup.
              </p>

              <h3>🎯 Performance gains in real apps</h3>
              <p>
                Thanks to the removal of comment nodes and loader serialization
                by default, your HTML output will be much lighter.
              </p>
              <p>
                Combined with the new task scheduler, apps now load and respond
                faster—especially important for low-end devices and mobile
                users.
              </p>

              <h3>💡 Pro tip</h3>
              <p>
                If you use <code>routeLoader$</code>, remember that in v2,
                loaders are not serialized by default. If you still need server
                → client serialization, use <code>useSerializer$</code>.
              </p>

              <h3>🙌 The team behind it</h3>
              <p>
                Massive thanks to the Qwik core team (@Varixo, @W00t, @mhevery)
                and all community contributors for making this release possible.
              </p>

              <ArticleDiscordCallout />

              <h3>📘 What’s next?</h3>
              <p>
                This is just the beta. The stable release of Qwik 2.0 will
                depend on the community’s feedback. So try it, break it, and
                report it!
              </p>
              <p>
                👉 You can follow updates or contribute on the{" "}
                <a
                  href="https://github.com/BuilderIO/qwik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Qwik GitHub repo
                </a>
                .
              </p>

              <h3>🚀 Keep learning Qwik</h3>
              <p>
                Want to master Qwik in 2025? Our full tutorial covers it
                all—from basics to advanced use-cases.
              </p>
              <p>
                👉{" "}
                <Link
                  href="/blog/"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  Return to the Learn Qwik Blog
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
