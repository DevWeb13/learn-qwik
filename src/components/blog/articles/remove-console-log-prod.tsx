// src/components/blog/articles/remove-console-log-prod.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgConsoleClean from "~/assets/img/remove-console-log/capture-console-clean.png?jsx";
import ImgCaptureConsoleProd from "~/assets/img/remove-console-log/capture-console-prod.png?jsx";
import MetaRemoveConsoleLog from "~/assets/img/remove-console-log/metaRemoveConsoleLog.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackToBlogButton } from "~/components/UI/backToBlogButton/backToBlogButton";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const RemoveConsoleLogProdArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      {/* ✅ Main Title */}
      <div class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Remove console.log in production (Qwik + Vite)
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          Learn Qwik (2025)
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          Let's clean up your production builds! Learn how to automatically
          remove console logs with Vite, including Qwik projects.
        </p>
      </div>

      {/* ✅ Article + ad */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaRemoveConsoleLog
                  class="h-full w-full object-contain object-center"
                  alt="Remove console.log in production"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Remove console.log in production using Vite
                </figcaption>
              </figure>

              {/* ✅ Introduction */}
              <h3>🚀 Why should you remove console.log?</h3>
              <p>
                <code>console.log</code> is very useful during development. But
                leaving them in production is a bad practice. They can:
              </p>
              <ul>
                <li>📉 Slow down your site, especially on mobile</li>
                <li>🕵️ Reveal sensitive information</li>
                <li>📦 Make your JavaScript bundles bigger</li>
              </ul>
              <p>
                The good news is: if you use{" "}
                <strong>Vite (which Qwik uses by default)</strong>, you can
                remove them automatically during the production build.
              </p>

              {/* ✅ Works for all Vite-based projects */}
              <h3>🛠️ Does this work only with Qwik?</h3>
              <p>
                No! This method works for{" "}
                <strong>any project using Vite</strong>: Qwik, React + Vite,
                SvelteKit, Astro, and more.
              </p>
              <p>
                Vite uses <strong>esbuild</strong> to bundle your code, and it
                offers a built-in option to remove console statements.
              </p>

              <h3>📸 Real example: what happened on my site</h3>
              <p>
                While working on <strong>Learn Qwik (learn-qwik.com)</strong>{" "}
                and opening the browser console on the live production site, I
                realized something important.
              </p>
              <figure>
                <ImgCaptureConsoleProd
                  alt="Console opened on Learn Qwik production site"
                  class="mx-auto rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Console logs shown on the live production site (Learn Qwik).
                </figcaption>
              </figure>
              <p>
                The console was showing private data like the user profile (
                <code>id</code>, <code>username</code>, <code>avatar_url</code>)
                and subscription status (<code>isSubscribed: true</code>).
              </p>
              <p>
                Even if this data is not highly sensitive, it's still not
                professional to expose it to anyone who opens the developer
                tools.
              </p>
              <p>
                Additionally, there were some minor performance warnings (
                <code>
                  [Violation] forced reflow while executing JavaScript
                </code>
                ) which are also not ideal for a production environment.
              </p>
              <p>
                <strong>
                  This was the moment I decided to remove all console logs in
                  production.
                </strong>{" "}
                It makes the site cleaner, faster, and avoids exposing
                unnecessary data to visitors.
              </p>

              {/* ✅ How to do it */}
              <h3>📦 How to remove console.log in a Qwik project</h3>
              <p>
                In your Qwik project, you will find a{" "}
                <code>vite.config.ts</code> file. By default, this file looks
                like this:
              </p>

              <CodeBlock
                code={`import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig({
  plugins: [qwikCity(), qwikVite()],
});`}
                language="typescript"
                icon="typescript"
                text="vite.config.ts (default)"
                hideLineNumbers
              />

              <p>
                To remove <code>console.log</code> in production, you need to
                add the <code>esbuild.drop</code> option. Because this is a more
                advanced option, you also need to tell Vite that this is a valid
                config by using <code>as UserConfig</code>.
              </p>

              <CodeBlock
                code={`import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig({
  plugins: [qwikCity(), qwikVite()],
  esbuild: {
    drop: ["console", "debugger"],
  },
} as UserConfig);`}
                language="typescript"
                icon="typescript"
                text="vite.config.ts (with esbuild)"
                hideLineNumbers
              />

              <p>
                This will automatically remove the following in production
                builds:
              </p>
              <ul>
                <li>
                  <code>console.log</code>
                </li>
                <li>
                  <code>console.debug</code>
                </li>
                <li>
                  <code>debugger</code> statements
                </li>
              </ul>

              <p>
                <strong>Note:</strong> <code>console.error</code> and{" "}
                <code>console.warn</code> will stay. If you want to remove
                everything, you can use a custom list or a plugin.
              </p>

              <h3>✅ Final result: a clean production console</h3>
              <p>
                After adding <code>esbuild.drop</code> to my{" "}
                <code>vite.config.ts</code> and deploying the changes, I opened
                the console again on Learn Qwik.
              </p>
              <figure>
                <ImgConsoleClean
                  alt="Console cleaned in production"
                  class="mx-auto rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  No more console logs on the live production site (Learn Qwik).
                </figcaption>
              </figure>
              <p>
                This time, the result was exactly what I wanted:{" "}
                <strong>
                  no more console logs or unnecessary data visible in production
                </strong>
                .
              </p>
              <p>
                This small optimization keeps the site clean, protects user
                data, and makes the project look more professional.
              </p>

              <div class="rounded-lg bg-gray-100 p-4 pt-1">
                <h3>💡 Bonus: Alternative with a plugin</h3>
                <p>
                  If you want even more flexibility, you can use a Vite plugin
                  to remove <code>console.log</code> and other statements.
                </p>
                <p>
                  One of the most popular options is{" "}
                  <a
                    href="https://www.npmjs.com/package/vite-plugin-remove-console"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <code>vite-plugin-remove-console</code>
                  </a>
                  .
                </p>
                <p>
                  This method lets you choose exactly which console methods you
                  want to remove (<code>log</code>, <code>warn</code>,{" "}
                  <code>error</code>, <code>debug</code>, etc).
                </p>
                <h4>How to use</h4>
                <p>First, install the plugin:</p>
                <CodeBlock
                  code={`npm install vite-plugin-remove-console --save-dev`}
                  language="bash"
                  icon="terminal"
                  text="Install plugin"
                  hideLineNumbers
                />
                <p>
                  Then, update your <code>vite.config.ts</code>:
                </p>
                <CodeBlock
                  code={`import { defineConfig } from "vite";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import removeConsole from "vite-plugin-remove-console";

export default defineConfig({
  plugins: [qwikCity(), qwikVite(), removeConsole()],
});`}
                  language="typescript"
                  icon="typescript"
                  text="vite.config.ts (with plugin)"
                  hideLineNumbers
                />
                <h4>When to use this?</h4>
                <p>
                  For Qwik projects, the built-in <code>esbuild.drop</code>{" "}
                  option is usually enough. However, this plugin can be useful
                  if:
                </p>
                <ul>
                  <li>
                    You need advanced control over which <code>console</code>{" "}
                    methods are removed.
                  </li>
                  <li>
                    You use a custom build process or Vite with a non-esbuild
                    bundler.
                  </li>
                </ul>
                <p>
                  For most Qwik projects, you can stick to{" "}
                  <code>esbuild.drop</code> to keep things simple and fast.
                </p>
              </div>

              {/* ✅ Conclusion */}
              <h3>🎉 That's it!</h3>
              <p>
                You now know how to clean up your production builds and remove
                unnecessary <code>console.log</code> in your Qwik project.
              </p>
              <p>
                This simple trick will make your site faster, cleaner and more
                professional.
              </p>

              <ArticleDiscordCallout />

              {/* ✅ CTA */}
              <h3>🚀 Next step</h3>
              <p>
                Now that your production builds are clean, it's time to continue
                learning Qwik!
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
        <BackToBlogButton />

        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});
