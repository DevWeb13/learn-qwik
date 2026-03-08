import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const ImageSoluce = component$(() => {
  return (
    <CodeBlock
      code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import styles from "./home.module.css";

import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";

import HeroImg from "~/assets/img/heroImg.png?jsx";
import HeroMobileImg from "~/assets/img/heroMobileImg.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <LRDQwikLogo />
      </div>
        //...
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <HeroImg class="hidden md:block" />
          <HeroMobileImg class="block md:hidden" />
        </div>
      </div>
    </main>
  );
});`}
      language="tsx"
      text="src/routes/index.tsx"
      icon="typescript"
      hideLineNumbers
      decorations={[
        {
          start: { line: 8, character: 0 },
          end: { line: 8, character: 63 },
          properties: { class: "newLine" },
        },
        {
          start: { line: 20, character: 0 },
          end: { line: 20, character: 51 },
          properties: { class: "newLine" },
        },
      ]}
    />
  );
});
