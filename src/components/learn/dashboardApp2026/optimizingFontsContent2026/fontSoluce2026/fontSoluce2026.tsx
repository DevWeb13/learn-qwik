// src/components/learn/dashboardApp2026/optimizingFontsContent2026/fontSoluce2026/fontSoluce2026.tsx

import { component$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const FontSoluce2026 = component$(() => {
  return (
    <>
      <p>
        Create a <code>fonts/</code> folder inside <code>public/</code> and add
        the following font files.
      </p>

      <p>
        You can <span class="font-bold">download</span> them here:
      </p>

      <ul>
        <li>
          <a
            href="/downloads/lusitana-v14-latin-700.woff2"
            download="lusitana-v14-latin-700.woff2"
          >
            <code>lusitana-v14-latin-700.woff2 💾</code>
          </a>
        </li>
        <li>
          <a
            href="/downloads/lusitana-v14-latin-regular.woff2"
            download="lusitana-v14-latin-regular.woff2"
          >
            <code>lusitana-v14-latin-regular.woff2 💾</code>
          </a>
        </li>
      </ul>

      <p>
        Next, copy the <code>@font-face</code> declarations from{" "}
        <BlankLink
          href="https://gwfh.mranftl.com/fonts/lusitana?subsets=latin"
          text="Google Webfonts Helper / Lusitana"
        />{" "}
        and add them to your <code>src/global.css</code> file:
      </p>

      <CodeBlock
        code={`/* lusitana-regular - latin */
@font-face {
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/fonts/lusitana-v14-latin-regular.woff2") format("woff2");
}

/* lusitana-700 - latin */
@font-face {
  font-family: "Lusitana";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/fonts/lusitana-v14-latin-700.woff2") format("woff2");
}`}
        language="css"
        text="src/global.css"
        icon="css"
        hideLineNumbers
      />

      <p>
        Then create a <code>.lusitana</code> class in{" "}
        <code>src/global.css</code>:
      </p>

      <CodeBlock
        code={`.lusitana {
  font-family: "Lusitana", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}
        language="css"
        text="src/global.css"
        icon="css"
        hideLineNumbers
      />

      <p>
        Finally, apply the <code>.lusitana</code> class to the{" "}
        <code>{"<p>"}</code> element in your <code>src/routes/index.tsx</code>{" "}
        file:
      </p>

      <CodeBlock
        code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import styles from "./home.module.css";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <LRDQwikLogo /> */}
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div class={styles.shape} />
          <p class="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to LRDQwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/dashboard-app-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              Learn Qwik Course
            </Link>
            , brought to you by{" "}
            <Link
              href="https://www.lareponsedev.fr/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              LaReponseDev
            </Link>{" "}
            .
          </p>
          <Link
            href="/dashboard/"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Go To Dashboard</span>
            <HiArrowRightOutline class="h-4 w-4" />
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};`}
        language="tsx"
        text="src/routes/index.tsx"
        icon="typescript"
        decorations={[
          {
            start: { line: 14, character: 0 },
            end: { line: 14, character: 82 },
            properties: { class: "newLine" },
          },
        ]}
      />

      <p>
        <span class="font-bold">Congratulations!</span> You have successfully
        added the <code>Lusitana</code> font to your Qwik application.
      </p>
    </>
  );
});
