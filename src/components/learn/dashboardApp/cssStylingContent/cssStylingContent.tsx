// src/components/dashboardApp/cssStylingContent/cssStylingContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import InstyledPage from "~/assets/img/instyled-page.png?jsx";
import StyledPage from "~/assets/img/styled-page.png?jsx";
import BlankLink from "~/components/UI/blankLink/blankLink";
import { Quiz } from "~/components/UI/quiz/quiz";

export default component$(() => {
  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={2} chapterTitle="CSS Styling" />
        <p style="vertical-align: inherit;">
          Currently, your homepage has the default style of Qwik. In this
          chapter, you will learn how to customize the style of your Qwik
          application in various ways.
        </p>
        <div class="not-prose in-this-chapter_wrapper__yrXTP mb-4 rounded-[12px] md:mx-[-64px] md:my-12 md:bg-[#fafafa] md:p-4 md:px-[64px] md:py-12">
          <p
            class="text_wrapper pb-1"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.25rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.020625rem; --sm-text-size: 1.25rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.020625rem; --smd-text-size: 1.5rem; --smd-text-line-height: 2rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.029375rem; --md-text-size: 1.5rem; --md-text-line-height: 2rem; --md-text-weight: 600; --md-text-letter-spacing: -0.029375rem; --lg-text-size: 1.5rem; --lg-text-line-height: 2rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.029375rem;"
          >
            In this chapter...
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; margin: 0px;"
          >
            Here are the topics we will cover:
          </p>
          <TableOfTopicsCovered />
        </div>
        <SubtitleWithAnchor
          title="Adding Tailwind CSS"
          id="adding-tailwind-css"
        />

        <p>
          An easy way to style your Qwik application is by using Tailwind CSS.
          It is a utility-first CSS framework that helps you build modern
          designs without ever leaving your HTML.
        </p>

        <p>
          First, we're going to modify the content of our
          <code>src/routes/index.tsx</code> file.
        </p>

        <CodeBlock
          text="src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
// import { HiArrowRightOutline } from "@qwikest/icons/heroicons";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <LRDQwikLogo /> */}
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p class="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to LRDQwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/"
              target="_blank"
              class="text-blue-500"
            >
              Qwik Learn Course
            </Link>
            , brought to you by{" "}
            <Link
              href="https://www.lareponsedev.com/"
              target="_blank"
              class="text-blue-500"
            >
              LaReponseDev
            </Link>{" "}
            .
          </p>
          <Link
            href="/login"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            {/* <HiArrowRightOutline /> */}
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
};
  `}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 1, character: 0 },
              // end at the end of the line
              end: { line: 2, character: 66 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 6, character: 0 },
              // end at the end of the line
              end: { line: 43, character: 11 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          In this file, the Tailwind style has already been added for you, so
          don't worry if this is your first time using Tailwind. To save time,
          we have already styled all the components you will use.
        </p>

        <p>For now, if you run your application, you will see:</p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <InstyledPage
            alt="Unstyled page with the title 'Acme', a description, and login link."
            class="block w-full rounded-md border border-gray-200 bg-gray-100 dark:hidden"
          />
        </figure>
        <p>
          You will notice that the styles are not applied. This is normal
          because Tailwind CSS is not yet installed.🃏
        </p>

        <p>
          To add Tailwind CSS to your application, it's very simple, in the
          terminal execute the following command:
        </p>

        <CodeBlock
          text="Terminal"
          code={`npm run qwik add tailwind`}
          hideLineNumbers
        />

        <p>
          The previous command updates your app with the necessary dependencies.
        </p>

        <p>It also adds new files to your project folder:</p>
        <ul>
          <li>
            <code>postcss.config.js</code>
          </li>
          <li>
            <code>tailwind.config.js</code>
          </li>
          <li>
            <code>.vscode/settings.json</code>
          </li>
        </ul>
        <p>
          and modifies your <code>src/global.css</code> to include
        </p>

        <CodeBlock
          text="src/global.css"
          icon="css"
          language="css"
          code={`/**
* Tailwind CSS imports
* View the full documentation at https://tailwindcss.com
*/
@tailwind base;
@tailwind components;
@tailwind utilities;`}
          copyButton={false}
        />
        <p>
          Now, if you run your application, you should see the Tailwind CSS
          styles applied to your home page.🏆
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <StyledPage />
        </figure>
        <p>
          Congratulations! You have learned how to add Tailwind CSS to your Qwik
          application.🎉
        </p>

        <SubtitleWithAnchor title="Tailwind" id="tailwind" />

        <p>
          <BlankLink href="https://tailwindcss.com/" text="Tailwind" /> is a CSS
          framework that speeds up the development process by allowing you to
          quickly write{" "}
          <BlankLink
            href="https://tailwindcss.com/docs/utility-first"
            text="utility classes"
          />{" "}
          directly in your TSX markup.
        </p>

        <p>
          In Tailwind, you style elements by adding class names. For example,
          adding the class <code>"text-blue-500"</code> will turn the{" "}
          <code>&lt;h1&gt;</code> text blue:
        </p>

        <CodeBlock
          code={`<h1 className="text-blue-500">I'm blue!</h1>`}
          language="tsx"
          hideLineNumbers
          displayCodeBlockHeader={false}
          displayCopyButtonAbsolute={true}
        />

        <p>
          Although the CSS styles are shared globally, each class is singularly
          applied to each element. This means if you add or delete an element,
          you don't have to worry about maintaining separate stylesheets, style
          collisions, or the size of your CSS bundle growing as your application
          scales.
        </p>

        <p>
          Don't worry if this is your first time using Tailwind. To save time,
          we've already styled all the components you'll be using.
        </p>

        <p>
          Let's play with Tailwind! Copy the code below and paste it above the{" "}
          <code>&lt;p&gt;</code> element in <code>src/routes/index.tsx</code>:
        </p>

        <CodeBlock
          text="src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`<div class="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-blue-500 border-l-transparent border-r-transparent" />`}
          hideLineNumbers
        />

        <Quiz
          question="What shape do you see when using the code snippet above?"
          options={[
            { text: "A yellow star", isCorrect: false, letter: "A" },
            { text: "A blue triangle", isCorrect: false, letter: "B" },
            { text: "A black triangle", isCorrect: true, letter: "C" },
            { text: "A red circle", isCorrect: false, letter: "D" },
          ]}
          hint="Make sure you've added the triangle to the right place in the code!"
          responseText="The border class names are used to create a triangle shape."
        />
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={2}
          text="Well done! You've learned about the different ways of styling a Qwik application."
        />
        <GoToNextChapterBlock
          goToChapter={3}
          title="Optimizing Fonts and Images"
          text="Continue working on your home page by adding a hero image and a custom font."
          disabledButton={true}
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
