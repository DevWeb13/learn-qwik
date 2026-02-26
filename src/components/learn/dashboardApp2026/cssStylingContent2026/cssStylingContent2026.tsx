// src/components/dashboardApp/cssStylingContent/cssStylingContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import InstyledPage from "~/assets/img/instyled-page.png?jsx";
import StyledPage from "~/assets/img/styled-page.png?jsx";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

export const CSSStylingContent2026 = component$(() => {
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={2}
          chapterTitle="Style Your Qwik App with CSS and Tailwind"
        />
        <p style="vertical-align: inherit;">
          Currently, your homepage has the default style of Qwik. In this
          chapter, you will learn how to customize the style of your Qwik
          application in various ways.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Global styles",
              emoji: "🌍",
              anchor: "global-styles",
            },
            {
              title: "Adding Tailwind CSS",
              emoji: "🎨",
              anchor: "adding-tailwind-css",
            },
            {
              title: "CSS Modules",
              emoji: "🧱",
              anchor: "css-modules",
            },
          ]}
        />

        <SubtitleWithAnchor title="🌍 Global styles" id="global-styles" />
        <p>
          If you look inside the <code>/src</code> folder, you'll see a file
          called <code>global.css</code>. You can use this file to add CSS rules
          to all the routes in your application - such as CSS reset rules,
          site-wide styles for HTML elements like links, and more.
        </p>
        <p>
          By default, <code>global.css</code> is imported in{" "}
          <Link href="https://qwik.dev/docs/project-structure/#srcroottsx">
            <code>/src/root.tsx</code>
          </Link>
          , which makes it available across your entire application.
        </p>

        <p>
          Although you could technically import <code>global.css</code> inside
          individual components, it is considered best practice to keep global
          styles at the root level.
        </p>
        <CodeBlock
          text="/src/root.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the \`<head>\` and \`<body>\` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={\`${import.meta.env.BASE_URL}manifest.json\`}
          />
        )}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});`}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 4, character: 0 },
              // end at the end of the line
              end: { line: 4, character: 22 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🎨 Adding Tailwind CSS"
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
          text="/src/routes/index.tsx"
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
              href="https://www.learn-qwik.com/learn/dashboard-app-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              Qwik Learn Course
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
              end: { line: 45, character: 11 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          The page already uses Tailwind utility classes. However, since
          Tailwind is not installed yet, these styles are not applied.
        </p>
        <p>For now, if you run your application, you will see:</p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <InstyledPage
            alt="Unstyled page with the title 'Acme', a description, and login link."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
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
        <p>
          The command updates your project configuration and installs the
          required dependencies.
        </p>

        <p>It will:</p>

        <ul>
          <li>
            Update <code>package.json</code>
          </li>
          <li>
            Modify <code>src/global.css</code>
          </li>
          <li>
            Update <code>vite.config.ts</code>
          </li>
          <li>
            Create <code>prettier.config.js</code>
          </li>
        </ul>

        <p>
          It also updates your <code>src/global.css</code> file to include the
          Tailwind CSS entry point:
        </p>
        <CodeBlock
          text="/src/global.css"
          icon="css"
          language="css"
          code={`@import "tailwindcss";`}
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

        <SubtitleWithAnchor title="Tailwind" id="tailwind" level="h3" />
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
          code={`<h1 class="text-blue-500">I'm blue!</h1>`}
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
          text="/src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`<div class="size-0 border-b-30 border-l-20 border-r-20 border-b-blue-500 border-l-transparent border-r-transparent" />`}
          hideLineNumbers
        />
        <Quiz
          question="What shape do you see when using the code snippet above?"
          options={[
            { text: "A yellow star", isCorrect: false, letter: "A" },
            { text: "A blue triangle", isCorrect: true, letter: "B" },
            { text: "A black triangle", isCorrect: false, letter: "C" },
            { text: "A red circle", isCorrect: false, letter: "D" },
          ]}
          hint="Make sure you've added the triangle to the right place in the code!"
          responseText="The border class names are used to create a triangle shape."
        />
        <p>
          If you prefer writing traditional CSS rules or keeping your styles
          separate from your JSX - CSS Modules are a great alternative.
        </p>

        <SubtitleWithAnchor title="🧱 CSS Modules" id="css-modules" />
        <p>
          CSS Modules allow you to scope CSS to a component by automatically
          creating unique class names, so you don't have to worry about style
          collisions.
        </p>
        <p>
          We'll continue using Tailwind in this course, but let's take a moment
          to see how you can achieve the same results from the quiz above using
          CSS modules.
        </p>
        <p>
          Inside <code>/src/routes</code>, create a new file called{" "}
          <code>home.module.css</code> and add the following CSS rules:
        </p>
        <CodeBlock
          text="src/routes/home.module.css"
          icon="css"
          language="css"
          code={`.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid #3b82f6;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}`}
        />
        <p>
          Then, inside your <code>/src/routes/index.tsx</code> file import the
          styles and replace the Tailwind class names from the{" "}
          <code>&lt;div&gt;</code> you've added with styles.shape:
        </p>
        <CodeBlock
          text="/src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import styles from "./home.module.css";
// import { HiArrowRightOutline } from "@qwikest/icons/heroicons";


export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <LRDQwikLogo /> */}
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div class="size-0 border-b-30 border-l-20 border-r-20 border-b-blue-500 border-l-transparent border-r-transparent" />
        <div class={styles.shape} />
          <p class="text-xl text-gray-800 md:text-3xl md:leading-normal">

          // ...
  `}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 2, character: 0 },
              // end at the end of the line
              end: { line: 2, character: 39 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 14, character: 0 },
              // end at the end of the line
              end: { line: 14, character: 126 },
              properties: { class: "deleteLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 15, character: 0 },
              // end at the end of the line
              end: { line: 15, character: 36 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Save your changes and preview them in the browser. You should see the
          same shape as before.
        </p>
        <p>
          Tailwind and CSS Modules are two common ways of styling Qwik
          applications. Whether you use one or the other is a matter of
          preference, you can even use both in the same application!
        </p>
        <p>
          Don't forget that Qwik uses <code>class</code> instead of{" "}
          <code>className</code> for CSS classes.
        </p>
        <Quiz
          question="What is one benefit of using CSS modules?"
          options={[
            {
              text: "Increase the global scope of CSS classes, making them easier to manage across different files.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Provide a way to make CSS classes locally scoped to components by default, reducing the risk of styling conflicts.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Automatically compress and minify CSS files for faster page loading.",
              isCorrect: false,
              letter: "C",
            },
            { text: "LaReponseDev 🤓", isCorrect: false, letter: "D" },
          ]}
          hint="CSS Modules are a great option for reducing styling conflicts!"
          responseText="CSS Modules create unique class names for each component, so you don't have to worry about style collisions."
        />

        <SubtitleWithAnchor
          title="Other styling solutions"
          id="other-styling-solutions"
          level="h3"
        />
        <p>
          In addition to the approaches we've discussed, you can also style your
          Qwik application with many other solutions, such as:
        </p>
        <ul>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#css-in-js"
              text="CSS-in-JS"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#styled-components"
              text="Styled-components"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#scoped-css"
              text="Scoped CSS"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#global-selector"
              text=":global() selector"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#usestyles"
              text="useStyles$()"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/components/styles/#css-preprocessors"
              text="CSS Preprocessors"
            />
          </li>
        </ul>

        <p>
          Congratulations, you have learned how to style your Qwik application
          using Tailwind CSS and CSS Modules!🎊
        </p>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 2 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-2---CSS-Styling-2026"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={2}
          text="Well done! You've learned the different ways of styling a Qwik application."
        />

        <GoToNextChapterBlock
          version="2026"
          goToChapter={3}
          title="Icons and SVG Components"
          text="Learn how to add and customize icons in your Qwik application."
        />
      </div>
      <Feedback />
      <div class="mb-10 md:mb-30"></div>
    </>
  );
});
