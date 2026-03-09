// src/components/learn/dashboardApp2026/optimizingImagesContent2026/imageSoluce2026/imageSoluce2026.tsx

import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const ImageSoluce2026 = component$(() => {
  return (
    <>
      <CodeBlock
        code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";
import styles from "./home.module.css";

import HeroImg from "~/assets/img/heroImg.png?jsx";
import HeroMobileImg from "~/assets/img/heroMobileImg.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <LRDQwikLogo />
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
          <HeroImg class="hidden md:block" />
          <HeroMobileImg class="block md:hidden" />
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
        hideLineNumbers
        decorations={[
          {
            start: { line: 7, character: 0 },
            end: { line: 7, character: 63 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 50, character: 0 },
            end: { line: 50, character: 51 },
            properties: { class: "newLine" },
          },
        ]}
      />
    </>
  );
});
