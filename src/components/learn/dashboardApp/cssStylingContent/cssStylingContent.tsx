// src/components/dashboardApp/cssStylingContent/cssStylingContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import BlankLink from "~/components/UI/blankLink/blankLink";
import { Quiz } from "~/components/UI/quiz/quiz";
import { Link } from "@builder.io/qwik-city";

import InstyledPage from "~/assets/img/instyled-page.png?jsx";
import StyledPage from "~/assets/img/styled-page.png?jsx";
import AddArrow from "~/assets/img/addArrowIcon.png?jsx";

export default component$(() => {
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={2} chapterTitle="CSS Styling" />
        <p style="vertical-align: inherit;">
          Currently, your homepage has the default style of Qwik. In this
          chapter, you will learn how to customize the style of your Qwik
          application in various ways.
        </p>

        <TableOfTopicsCovered
          topics={[
            {
              title: "Different ways to style your application.",
              icon: "file",
            },
            {
              title: "Different ways to add icons to your application.",
              icon: "pen",
            },
          ]}
        />

        <div class="px-4  md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8205519691"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

        <SubtitleWithAnchor title="Global styles" id="global-styles" />
        <p>
          If you look inside the <code>/src</code> folder, you'll see a file
          called <code>global.css</code>. You can use this file to add CSS rules
          to all the routes in your application - such as CSS reset rules,
          site-wide styles for HTML elements like links, and more.
        </p>
        <p>
          You can import <code>global.css</code> in any component in your
          application, but it's usually good practice to add it to your
          top-level component.
        </p>
        <p>
          When you deploy Qwik application, the global.css file is automatically
          included into the file{" "}
          <Link href="https://qwik.dev/docs/project-structure/#srcroottsx">
            <code>/src/root.tsx</code>
          </Link>{" "}
          (more on this later)
        </p>
        <CodeBlock
          text="/src/root.tsx"
          icon="typescript"
          language="tsx"
          code={`import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the '<head>' and '<body>' elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});`}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 8, character: 0 },
              // end at the end of the line
              end: { line: 8, character: 22 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9918056612"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="7291893273"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="5854688524"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="1640111347"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="4541606850"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9327029678"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2913664561"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="1600582891"
          ></ins>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
          />
        </div>

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

      <div class="px-4 pt-8 md:px-8 md:pt-20">
        <ins
          class="adsbygoogle"
          style="display:flex; justify-content:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="9287501222"
        ></ins>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
    (adsbygoogle = window.adsbygoogle || []).push({});
  `}
        />
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
    </>
  );
});
