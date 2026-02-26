import { component$ } from "@builder.io/qwik";
import AddArrow from "~/assets/img/addArrowIcon.png?jsx";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

export const IconsAndSVGComponentsContent2026 = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={3}
          chapterTitle="Icons and SVG Components"
          version="2026 Edition"
        />

        <p>
          Icons are small details that have a big impact on user experience. In
          this chapter, you will learn two practical approaches: using a
          ready-made icon library with <code>@qwikest/icons</code> and creating
          your own reusable SVG components for full control.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Why icons matter in modern UI",
              emoji: "🧩",
            },
            {
              title: "Installing and using @qwikest/icons",
              emoji: "📦",
            },
            {
              title: "Using Heroicons in a Qwik component",
              emoji: "🦸",
            },
            {
              title: "Creating a custom SVG component",
              emoji: "🎨",
            },
            {
              title: "Adding props for flexible styling",
              emoji: "⚙️",
            },
          ]}
        />

        <SubtitleWithAnchor title="🧩 Icons" id="Icons" />
        <p>
          Icons are small visual elements that guide users, reinforce meaning,
          and improve usability. In modern frontend development, they are
          usually implemented as SVG components for flexibility and performance.
        </p>

        <SubtitleWithAnchor title="📦 @qwikest/icons" id="qwikest-icons" />
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
          code={`npm i -D @qwikest/icons`}
          hideLineNumbers
        />

        <InfoBox2026 emoji="⚠️" colorVar="--qwik-dark-purple">
          <strong>Important:</strong> To work correctly, you must install the{" "}
          <code>@qwikest/icons</code> package in the devDependencies.
        </InfoBox2026>
        <p>
          For your project, you can use the icons from the{" "}
          <code>Heroicons</code> set.
        </p>

        <SubtitleWithAnchor title="🦸 Heroicons" id="heroicons" />

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
              start: { line: 40, character: 0 },
              // end at the end of the line
              end: { line: 40, character: 35 },
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
          title="🎨 Creating a custom SVG component"
          id="other-ways-to-add-icons"
        />

        <p>
          You can directly use the SVG icons from the Heroicons website. To do
          this, you don't need to install the <code>@qwikest/icons</code>{" "}
          package. Go to the{" "}
          <BlankLink href="https://heroicons.com/" text="Heroicons website" />,
          select the icon you want to use, and click to copy the SVG code.
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

        <InfoBox2026 emoji="👀" colorVar="--qwik-light-blue">
          If you're an observer, you will notice that the icon is bigger than
          the previous one. <br />
          The advantage of using the SVG icons is that you can easily customize
          the style of the icon.
        </InfoBox2026>

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
  class?: string;
}

export const HiArrowRightOutline = component$<HiArrowRightOutlineProps>(
  ({ class: className = "h-6 w-6" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class={className}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    );
  }
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
          code={`<HiArrowRightOutline class="h-4 w-4" />`}
          hideLineNumbers
        />

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          Notice the destructuring syntax <code>{`{ class: className }`}</code>.
          We rename the <code>class</code> prop locally because{" "}
          <code>class</code> is a reserved keyword in JavaScript. This allows us
          to keep the Qwik <code>class</code> attribute while avoiding naming
          conflicts.
        </InfoBox2026>

        <p>
          If you run your application, you will see that the icon is back to its
          original size.🏹
        </p>

        <Quiz
          question="Why do we use `{ class: className }` in our custom SVG component?"
          options={[
            {
              text: "Because Qwik does not support the class attribute",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because class is a reserved JavaScript keyword and must be renamed locally",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because TypeScript forces all props to be renamed",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because SVG does not accept class as an attribute",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about JavaScript syntax rules and why destructuring is used."
          responseText="Correct. Since 'class' is a reserved keyword in JavaScript, we rename it locally during destructuring to avoid conflicts while still keeping Qwik’s class attribute."
        />

        <SubtitleWithAnchor
          title="Using icones.js.org"
          id="using-icones-js-org"
          level="h3"
        />

        <p>
          As an alternative, you can explore{" "}
          <BlankLink href="https://icones.js.org" text="icones.js.org" />. This
          website allows you to browse icon collections powered by Iconify and
          copy ready-to-use Qwik SVG components directly into your project.
        </p>

        <p>
          Once copied, you can customize the SVG exactly as shown in the
          previous example.
        </p>

        <p>
          Congratulations, you have learned how to add icons to your Qwik
          application.🎉
        </p>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 3 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-3-Icons-and-SVG-Components"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={3}
          text="Great work! You now know how to add and customize icons in your Qwik application."
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={4}
          title="Optimizing Fonts and Images"
          text="Continue enhancing your UI by adding custom fonts and optimizing images."
          disabledButton
        />
      </div>

      <Feedback />
      <div class="mb-10 md:mb-30"></div>
    </>
  );
});
