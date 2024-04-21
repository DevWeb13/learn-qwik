// src/components/learn/dashboardApp/CreatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent.tsx

import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import BlankLink from "~/components/UI/blankLink/blankLink";
import { Quiz } from "~/components/UI/quiz/quiz";
// import { Link } from "@builder.io/qwik-city";

import NestedRouting from "~/assets/img/nested-routing.png?jsx";
import DiagramRoutes from "~/assets/img/diagram-routes.png?jsx";
import StyledPage from "~/assets/img/styled-page.png?jsx";
import AddArrow from "~/assets/img/addArrowIcon.png?jsx";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { DashboardPagesSoluce } from "./dashboardPagesSoluce/dashboardPagesSoluce";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
// import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const dashboardPagesSoluce = useSignal(false);

  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={4}
          chapterTitle="Creating Layouts and Pages"
        />
        <p style="vertical-align: inherit;">
          So far, your application only has a home page. Let's learn how you can
          create more routes with <span class="font-bold">layouts</span> and{" "}
          <span class="font-bold">pages</span>.
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
          <TableOfTopicsCovered
            topics={[
              {
                title: "Create dashboard routes using file-system routing.",
                icon: "relationPoint",
              },
              {
                title:
                  "Understand the role of folders and files when creating new route segments.",
                icon: "folder",
              },
              {
                title:
                  "Create a nested layout that can be shared between multiple dashboard pages.",
                icon: "nestedFolder",
              },
              {
                title:
                  "Understand what colocation, partial rendering, and the root layout are.",
                icon: "linesAndArrowBack",
              },
            ]}
          />
        </div>
        <SubtitleWithAnchor title="Nested routing" id="nested-routing" />
        <p>
          Qwik also uses a file-system-based routing system where{" "}
          <span class="font-bold">folders</span> are used to create nested
          routes. Each directory represents a{" "}
          <span class="font-bold">route segment</span> that corresponds to a{" "}
          <span class="font-bold">URL segment</span>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <NestedRouting
            alt="Diagram showing how folders map to URL segments"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          You can create distinct user interfaces for each route using{" "}
          <code>layout.tsx</code> files for layouts and <code>index.tsx</code>{" "}
          files for pages.
        </p>
        <p>
          <code>index.tsx</code> is a special file in Qwik that exports a Qwik
          component, necessary for the route to be accessible. In your Qwik
          application, the main file for the homepage would typically be located
          at
          <code>`/src/routes/index.tsx`</code> - this file is associated with
          the <code>`/`</code> route.
        </p>

        <p>
          To create a nested route, you can nest folders within each other and
          add <code>`index.tsx`</code> files inside them. For example, by adding
          a folder called <code>dashboard</code>, you create a new route{" "}
          <code>`/dashboard`</code>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DiagramRoutes
            alt="Diagram showing how adding a folder called dashboard creates a new route '/dashboard'"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          <code>`/src/routes/dashboard/index.tsx`</code> is associated with the
          <code>`/dashboard`</code> path. Let's create the page to see how it
          works!"
        </p>

        <SubtitleWithAnchor
          title="Creating the Dashboard Page"
          id="creating-the-dashboard-page"
        />

        <p>
          To create a new dashboard page in Qwik, start by creating a new folder
          called <code>`dashboard`</code> inside <code>`/src/routes`</code>.
          Then, create a new file named <code>`index.tsx`</code> within the
          <code>`dashboard`</code> folder with the following content:
        </p>

        <CodeBlock
          code={`import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return <p>Dashboard Page</p>;
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/index.tsx"
        />
        <p>
          Ensure that the development server is running and visit{" "}
          <BlankLink
            href="http://localhost:5173/dashboard"
            text="http://localhost:5173/dashboard"
          />
          . You should see the text "Dashboard Page".
        </p>

        <p>
          This is how you can create different pages in Qwik: create a new route
          segment using a folder, and add an <code>`index.tsx`</code> file
          inside it. This defines the page content for that route.
        </p>
        <p>
          Qwik also allows for the colocation of UI components, test files, and
          other code related directly beside your routes in specific folders.
          Only the content inside the <code>`index.tsx`</code> file will be
          publicly accessible. For example, the <code>`/components `</code> and{" "}
          <code>`/lib`</code> folders can be colocated inside the{" "}
          <code>`/src`</code> folder alongside your routes.
        </p>

        <SubtitleWithAnchor
          title="Practice: Creating the dashboard pages"
          id="practice-creating-the-dashboard-pages"
        />

        <p>
          Let's practice creating more routes. In your dashboard, create two
          more pages:
        </p>

        <ol class="ml-1">
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">1.</span>
            <span class="font-bold">Customers Page:</span> The page should be
            accessible on{" "}
            <BlankLink
              href="http://localhost:5173/dashboard/customers"
              text="http://localhost:5173/dashboard/customers"
            />
            . For now, it should return a{" "}
            <code>&lt;p&gt;Customers Page&lt;/p&gt;</code> element.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">2. </span>
            <span class="font-bold">Invoices Page:</span> The page should be
            accessible on{" "}
            <BlankLink
              href="http://localhost:5173/dashboard/invoices"
              text="http://localhost:5173/dashboard/invoices"
            />
          </li>
        </ol>

        <p>
          Spend some time tackling this exercise, and when you're ready, expand
          the toggle below for the solution:
        </p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (dashboardPagesSoluce.value = !dashboardPagesSoluce.value)
            }
          >
            <span class="button_prefix">
              {dashboardPagesSoluce.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {dashboardPagesSoluce.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {dashboardPagesSoluce.value && <DashboardPagesSoluce />}
        </div>

        <SubtitleWithAnchor
          title="Creating the dashboard layout"
          id="creating-the-dashboard-layout"
        />

        <p>
          //////////////////////////////////////////////////////////////////////////////////////////////////////////
        </p>
        <p>
          and modifies your <code>src/global.css</code> to include
        </p>
        <CodeBlock
          text="/src/global.css"
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
          code={`<div class="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-blue-500 border-l-transparent border-r-transparent" />`}
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
        <SubtitleWithAnchor title="CSS Modules" id="css-modules" />
        <p>
          CSS Modules allow you to scope CSS to a component by automatically
          creating unique class names, so you don't have to worry about style
          collisions as well.
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
          code={`import styles from "./home.module.css";
<div class={styles.shape} />;`}
        />
        <p>
          Save your changes and preview them in the browser. You should see the
          same shape as before.
        </p>
        <p>
          Tailwind and CSS modules are the two most common ways of styling Qwik
          applications. Whether you use one or the other is a matter of
          preference - you can even use both in the same application!
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
        <SubtitleWithAnchor title="Icons" id="Icons" />
        <p>
          Icons are an important part of any application. There are already more
          than 180.000 icons you can add to your Qwik app.
        </p>

        <SubtitleWithAnchor title="qwikest/icons" id="qwikest-icons" />
        <p>
          This package allows for a streamlined way to add icons to your Qwik
          app from a variety of icon sets.
        </p>
        <ul>
          <li>
            <code>Bs</code>: Bootstrap Icons
          </li>
          <li>
            <code>Go</code>: Octicons by GitHub
          </li>
          <li>
            <code>Hi</code>: Heroicons by Tailwind
          </li>
          <li>
            <code>In</code>: Iconoir
          </li>
          <li>
            <code>Io</code>: Ionicons by Ionic
          </li>
          <li>
            <code>Lu</code>: Lucide [superset of feather icons]
          </li>
          <li>
            <code>Mo</code>: Mono Icons
          </li>
          <li>
            <code>Si</code>: Simple Icons [icons for popular brands]
          </li>
          <li>
            <code>Tb</code>: Tabler Icons
          </li>
        </ul>
        <p>
          To add @qwikest/icons package to your application, it's very simple,
          in the terminal execute the following command:
        </p>
        <CodeBlock
          text="Terminal"
          code={`npm i @qwikest/icons`}
          hideLineNumbers
        />
        <p>
          For your project, you can use the icons from the{" "}
          <code>Heroicons</code> set.
        </p>

        <SubtitleWithAnchor title="Heroicons" id="heroicons" />

        <p>
          You can find all the icons available in the Heroicons set on the{" "}
          <BlankLink href="https://heroicons.com/" text="Heroicons website" />.
        </p>

        <p>
          To use an icon, you need to import it from the{" "}
          <code>@qwikest/icons/heroicons</code> package and add it to your
          component.
        </p>

        <p>
          The import name of the icon is composed as follows :{" "}
          <code>
            {`{ `}
            Icon set identifier + Icon name in camel case + Style
            {` }`}
          </code>
          .
        </p>

        <p>
          For example, to import the <code>arrow-right</code> icon from the
          Heroicons set, you need to import it as follows:
        </p>

        <CodeBlock
          displayCodeBlockHeader={false}
          icon="typescript"
          language="tsx"
          code={`import { HiArrowRightOutline } from "@qwikest/icons/heroicons";`}
          hideLineNumbers
          displayCopyButtonAbsolute
        />
        <p>
          Let's add an icon to the login button, in the{" "}
          <code>src/routes/index.tsx</code> file, decomment this lines:
        </p>
        <CodeBlock
          text="/src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "@qwikest/icons/heroicons";
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
            <HiArrowRightOutline />
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
});
// ...`}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 2, character: 0 },
              // end at the end of the line
              end: { line: 2, character: 63 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 38, character: 0 },
              // end at the end of the line
              end: { line: 38, character: 35 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, if you run your application, you should see the login button with
          the arrow icon.🏹
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <AddArrow
            alt="Login button with an arrow icon"
            class="block w-full rounded-md border border-gray-200 bg-gray-100 dark:hidden"
          />
        </figure>

        <SubtitleWithAnchor
          title="Other ways to add icons"
          id="other-ways-to-add-icons"
        />

        <p>
          You can directly use the SVG icons from the Heroicons website. To do
          this, you don't need to install the <code>@qwikest/icons</code>{" "}
          package. Go to the{" "}
          <BlankLink href="https://heroicons.com/" text="Heroicons website" />,
          select icon want to use, and click to copy the SVG code.
        </p>

        <p>
          In your application create a new file called{" "}
          <code>assets/svg/HiArrowRightOutline.tsx</code> into the{" "}
          <code>src</code> folder and paste following code:
        </p>

        <CodeBlock
          text="/src/assets/svg/HiArrowRightOutline.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";

export const HiArrowRightOutline = component$(() => {
  return <>Icon SVG</>;
});`}
        />

        <p>
          Paste the SVG code you copied from the Heroicons website into the{" "}
          <code>HiArrowRightOutline</code> component.
        </p>

        <CodeBlock
          text="/src/assets/svg/HiArrowRightOutline.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";

export const HiArrowRightOutline = component$(() => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
});`}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 3, character: 0 },
              // end at the end of the line
              end: { line: 18, character: 4 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Lastly, change the import <code>HiArrowRightOutline</code> into the{" "}
          <code>src/routes/index.tsx</code> file:
        </p>

        <CodeBlock
          text="/src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";`}
          hideLineNumbers
        />

        <p>
          If you run your application, You can see that the icon arrow is still
          present.🏹
        </p>

        <p class="dark-plus">
          <span>⚠️</span>{" "}
          <span>
            If you're an observer, you will notice that the icon is bigger than
            the previous one. <br />
            The advantage of using the SVG icons is that you can easily
            customize the style of the icon.
          </span>
        </p>

        <p>
          Into the <code>HiArrowRightOutline</code> component, you can change
          the class attribute of the <code>svg</code> tag to customize the style
          of the icon.
        </p>
        <p>
          You can also add the props to the component to customize the icon.
        </p>

        <CodeBlock
          text="/src/assets/svg/HiArrowRightOutline.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";

interface HiArrowRightOutlineProps {
  style?: string;
}

export const HiArrowRightOutline = component$<HiArrowRightOutlineProps>(
  ({ style = "h-6 w-6" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class={style}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    );
  },
);`}
        />
        <p>
          And into the <code>src/routes/index.tsx</code> file, you can add the
          props to the <code>HiArrowRightOutline</code> component:
        </p>

        <CodeBlock
          text="/src/routes/index.tsx"
          icon="typescript"
          language="tsx"
          code={`<HiArrowRightOutline style="h-4 w-4" />`}
          hideLineNumbers
        />

        <p>
          If you run your application, you will see that the icon is back to its
          original size.🏹
        </p>

        <p>
          Congratulations, you have learned how to add icons to your Qwik
          application.🎉
        </p>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 2 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/css-styling"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={2}
          text="Well done! You've learned about the different ways of styling and adding icons to
          a Qwik application."
        />
        <GoToNextChapterBlock
          goToChapter={3}
          title="Optimizing Fonts and Images"
          text="Continue working on your home page by adding a hero image and a custom font."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
