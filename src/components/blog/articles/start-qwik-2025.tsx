// src/components/blog/articles/startQwik2025.tsx

import { component$ } from "@builder.io/qwik";
import QwikEcoPlanet from "~/assets/img/qwik-eco-planet.webp?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const StartQwik2025Article = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      {/* ✅ Full-width title */}
      <div class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-semibold md:max-w-[100%] md:text-6xl">
          Start a Qwik Project in 5 Minutes in 2025 (1/∞)
        </h1>
        <p class="max-w-xl text-center text-gray-900">
          Set up a clean Qwik app from scratch in 5 minutes. A fast, minimal
          starting point for 2025 and beyond.
        </p>
      </div>

      {/* ✅ Article + ad */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        {/* ✅ Article content */}
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-4 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <QwikEcoPlanet
                  alt="Start a Qwik project cover"
                  class="mx-auto w-full max-w-3xl rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  A minimal Qwik starter — fast, clean, and ready to build on.
                </figcaption>
              </figure>

              <h2>🎒 What You Need Before Starting</h2>
              <p>
                If you're totally new to web development, don’t worry — we’ll
                walk you through everything.
              </p>
              <ul>
                <li>
                  ✅ <strong>Node.js v18.17 or higher</strong>
                  <br />
                  This tool lets you run JavaScript outside of your browser. To
                  check if you have it, type <code>node -v</code> in your
                  terminal. If not installed, grab it from{" "}
                  <a href="https://nodejs.org" target="_blank">
                    nodejs.org
                  </a>
                  .
                </li>
                <li>
                  ✅ <strong>A code editor</strong>
                  <br />
                  We suggest{" "}
                  <a href="https://code.visualstudio.com/" target="_blank">
                    VS Code
                  </a>{" "}
                  or{" "}
                  <a href="https://www.cursor.sh/" target="_blank">
                    Cursor
                  </a>
                  . Both are free and beginner-friendly.
                </li>
                <li>
                  ✅ <strong>Basic terminal access</strong>
                  <br />
                  You'll need to type a few commands. On Windows, use PowerShell
                  or Git Bash. On Mac/Linux, the Terminal app is perfect.
                </li>
              </ul>

              <div class="mt-2 rounded-md border border-gray-300 bg-gray-50 px-4  text-sm text-gray-700">
                <p class="mb-2">
                  💡{" "}
                  <em>
                    Not sure how to install Node.js or use a terminal? I'm
                    thinking about writing a "Chapter 0" to guide absolute
                    beginners through these first steps. Would that be useful to
                    you?
                  </em>
                </p>
                <p class="mb-2">
                  👉{" "}
                  <em>
                    Let me know on the official Learn-Qwik Discord:{" "}
                    <a
                      href="https://discord.gg/cZBNKyeeNq"
                      target="_blank"
                      class="text-blue-600 underline hover:text-blue-800"
                    >
                      https://discord.gg/cZBNKyeeNq
                    </a>
                  </em>
                </p>
                <p class="mb-0">
                  <em>
                    You can also share any feedback, questions, or ideas for
                    other useful articles there.
                  </em>
                </p>
              </div>

              <h2>📁 Choose Where to Work</h2>
              <p>
                Before creating your app, choose a folder on your computer where
                you want the project to live.
              </p>
              <p>
                We recommend creating a <code>Projects</code> folder directly
                inside your home directory.
              </p>
              <CodeBlock
                code={`mkdir ~/Projects\ncd ~/Projects`}
                language="bash"
                icon="bash"
              />
              <p>
                These commands create a new <code>Projects</code> folder (if it
                doesn't exist yet) and move you inside it. You can replace{" "}
                <code>Projects</code> with any folder name you prefer.
              </p>

              <p>Alright, let’s create the project! 👇</p>

              <h2>🧰 Step 1: Create a new Qwik project</h2>
              <p>In your terminal, run the following command:</p>

              <CodeBlock
                code={`npm create qwik@latest`}
                language="bash"
                icon="bash"
              />

              <p>The installer will guide you through a few questions:</p>

              <ul>
                <li>
                  ◇{" "}
                  <strong>
                    Where would you like to create your new project?
                  </strong>
                  <br />→ Type <code>./qwik-app</code> to create the project in
                  a new <code>qwik-app</code> folder.
                </li>
                <li>
                  ◇ <strong>Select a starter</strong>
                  <br />→ Choose <strong>
                    Empty App (Qwik City + Qwik)
                  </strong>{" "}
                  to start with a minimal and clean setup.
                </li>
                <li>
                  ◇ <strong>Would you like to install npm dependencies?</strong>
                  <br />→ Select <strong>Yes</strong> to automatically install
                  everything you need.
                </li>
                <li>
                  ◇ <strong>Initialize a new git repository?</strong>
                  <br />→ Choose <strong>Yes</strong> if you want to track your
                  project with Git (recommended).
                </li>
                <li>
                  ◇ <strong>Finishing the install. Wanna hear a joke?</strong>
                  <br />→ Up to you 😉 — it adds a little fun!
                </li>
              </ul>

              <p>
                After a few seconds, your new project will be ready in the{" "}
                <code>qwik-app</code> folder! 🎉
              </p>

              <figure>
                <QwikEcoPlanet
                  alt="Terminal Qwik CLI"
                  class="mx-auto w-full max-w-2xl rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Example of the terminal when creating your Qwik project
                </figcaption>
              </figure>

              <p>
                Now that your project is created, let's open it in your code
                editor to continue.
              </p>

              <h2>🧑‍💻 Step 1.5: Open your project in Cursor (or VS Code)</h2>
              <p>
                Open the <code>qwik-app</code> folder in your code editor.
              </p>

              <p>
                If you use <strong>Cursor</strong>, open the app, click "Open
                Folder," and select your <code>qwik-app</code> directory
                manually.
              </p>

              <p>
                If you use <strong>VS Code</strong> and have the{" "}
                <code>code</code> command available in your terminal, you can
                also open it like this:
              </p>

              <CodeBlock code={`code qwik-app`} language="bash" icon="bash" />

              <p>
                Inside your editor, open the built-in terminal. In Cursor, go to
                the top menu and click <strong>Terminal → New Terminal</strong>.
                The terminal will appear at the bottom of the screen.
              </p>

              <p>From there, start the development server by running:</p>

              <CodeBlock code={`npm run start`} language="bash" icon="bash" />

              <p>
                This will launch your app and open your browser at{" "}
                <code>http://localhost:5173</code> (or another port like{" "}
                <code>5174</code> if <code>5173</code> is already in use).
              </p>

              <figure>
                <QwikEcoPlanet
                  alt="Qwik default homepage"
                  class="mx-auto w-full max-w-2xl rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  The default Qwik homepage
                </figcaption>
              </figure>

              <h2>✂️ Step 2: Clean up the default content</h2>
              <p>
                To begin with a blank slate, open{" "}
                <code>src/routes/index.tsx</code> and replace its content with:
              </p>

              <CodeBlock
                code={`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <h1>The project is up and ready to start</h1>
  );
});`}
                language="tsx"
                icon="typescript"
              />

              <p>
                That’s it! You now have a clean Qwik app — ready to add
                Tailwind, build new pages, or create your first components.
              </p>

              <figure>
                <QwikEcoPlanet
                  alt="Minimal Qwik homepage"
                  class="mx-auto w-full max-w-2xl rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Your cleaned-up homepage: minimal and ready to build
                </figcaption>
              </figure>
            </article>
          </div>
        </div>

        {/* ✅ Right ad */}
        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});
