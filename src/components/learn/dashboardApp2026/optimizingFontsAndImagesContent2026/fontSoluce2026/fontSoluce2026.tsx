import { component$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const FontSoluce = component$(() => {
  return (
    <>
      <p>
        Create <code>fonts/</code> folder in the <code>src/assets/</code>{" "}
        directory and add the following font files.
      </p>
      <p>
        You can <span class="font-bold"> download</span> it here:{" "}
      </p>
      <ul>
        <li>
          <a
            href="/downloads/lusitana-v13-latin-700.woff2"
            download="lusitana-v13-latin-700.woff2"
          >
            <code>lusitana-v13-latin-700.woff2 💾</code>
          </a>
        </li>
        <li>
          {" "}
          <a
            href="/downloads/lusitana-v13-latin-regular.woff2"
            download="lusitana-v13-latin-regular.woff2"
          >
            <code>lusitana-v13-latin-regular.woff2 💾</code>
          </a>
        </li>
      </ul>
      <p>
        Add <code>@font-face</code> declaration recover from the{" "}
        <BlankLink
          href="https://gwfh.mranftl.com/fonts/lusitana?subsets=latin"
          text="Google Webfonts Helper/lusitana"
        />
        to your <code>src/global.css</code> file:
      </p>
      <CodeBlock
        code={`/* lusitana-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Lusitana';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/fonts/lusitana-v13-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}
/* lusitana-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Lusitana';
  font-style: normal;
  font-weight: 700;
  src: url('./assets/fonts/lusitana-v13-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
}`}
        language="css"
        text="src/global.css"
        icon="css"
        hideLineNumbers
      />
      <p>
        Create <code>.lusitana</code> class in your <code>src/global.css</code>{" "}
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
        Apply the <code>.lusitana</code> class to the <code>{"<p>"}</code>{" "}
        element in your <code>src/routes/index.tsx</code> file.
      </p>
      <CodeBlock
        code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import styles from "./home.module.css";

// import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";

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
            <strong>Welcome to LRD-Qwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/"
              target="_blank"
              class="text-blue-500"
            >
            // ...`}
        language="tsx"
        text="src/routes/index.tsx"
        icon="typescript"
        decorations={[
          {
            start: { line: 16, character: 0 },
            end: { line: 16, character: 82 },
            properties: { class: "newLine" },
          },
        ]}
      />
      <p>
        <span class="font-bold">Congratulations!</span> You have successfully
        added the <code>`Lusitana`</code> font to your Qwik application.
      </p>
    </>
  );
});
