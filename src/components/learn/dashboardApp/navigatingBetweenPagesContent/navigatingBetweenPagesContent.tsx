// src/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { Quiz } from "~/components/UI/quiz/quiz";

export default component$(() => {
  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={5} chapterTitle="Navigating Between Pages" />
        <p style="vertical-align: inherit;">
          In the previous chapter, you created the layout and the dashboard
          pages. Now let's add some links to allow users to navigate between the
          dashboard routes.
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
                title: "How to use the `<Link>` component from Qwik City.",
                icon: "qwikLogo",
              },
              {
                title:
                  "How to display an active link using the `useLocation()` function from Qwik City.",
                icon: "link",
              },
              {
                title: "How navigation works in Qwik.",
                icon: "planePaper",
              },
            ]}
          />
        </div>
        <SubtitleWithAnchor
          title="Why Optimize Navigation?"
          id="why-optimize-navigation"
        />

        <p>
          Traditionally, to create links between pages, you would use the HTML{" "}
          <code>{`<a>`}</code> element. Currently, the links in the sidebar use{" "}
          <code>{`<a>`}</code> elements, but notice what happens when you
          navigate between the homepage, invoices, and customers in your
          browser.
        </p>

        <p>Did you see it?👀</p>

        <p>
          There's a full page refresh on each navigation! This is not ideal as
          it can slow down the user experience and increase page loading
          times.🚤
        </p>

        <SubtitleWithAnchor
          title="The <Link> component 🖇️"
          id="the-link-component"
        />

        <p>
          In Qwik City, you can use the <code>&lt;Link&gt;</code> component to
          create links between the pages of your application, thus enabling
          client-side navigation with JavaScript without a full page reload.
          This component is essential for a smooth and modern user experience.
        </p>

        <p>
          To use the <code>&lt;Link&gt;</code> component, open the file{" "}
          <code>src/components/ui/dashboard/nav-links.tsx</code> and import the{" "}
          <code>Link</code> component from <code>@builder.io/qwik-city</code>.
          Then, replace each <code>&lt;a&gt;</code> tag with{" "}
          <code>&lt;Link&gt;</code>:
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";

import {
  HiUserGroupOutline,
  HiHomeOutline,
  HiDocumentDuplicateOutline,
} from "@qwikest/icons/heroicons";

import { Link } from "@builder.io/qwik-city";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HiHomeOutline },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: HiDocumentDuplicateOutline,
  },
  { name: "Customers", href: "/dashboard/customers", icon: HiUserGroupOutline },
];

export const NavLinks = component$(() => {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon class="w-6" />
            <p class="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 10, character: 0 },
              // end at the end of the line
              end: { line: 10, character: 45 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 30, character: 0 },
              // end at the end of the line
              end: { line: 30, character: 15 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 37, character: 0 },
              // end at the end of the line
              end: { line: 37, character: 17 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <SubtitleWithAnchor
          title="When to use &lt;a&gt; instead of &lt;Link&gt; 🔄"
          id="the-link-component"
        />

        <p>
          It is important to note that in Qwik, full page reloads are extremely
          optimized and often faster than traditional SPA navigation due to
          Qwik's selective hydration. Therefore, in some cases, it might be
          beneficial to use <code>&lt;a&gt;</code> tags for quicker and more
          direct interactions. This differs from most SPA frameworks where
          avoiding a full page reload is crucial to maintain performance. 🔍
        </p>

        <p>
          Save your changes and check their functionality in your local
          environment. You should find that transitions between pages are
          smooth, without any full reloads, giving the impression of a more
          responsive web application. 🚀
        </p>

        <Quiz
          question="How does Qwik handle component loading when a user interacts with a <Link> component in a production environment?"
          options={[
            {
              text: "Qwik re-renders the entire application.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Qwik selectively hydrates only the components that need to be updated.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Qwik re-renders the entire page.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Qwik re-renders the entire component tree.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Remember that Qwik selectively hydrates components, which means it only updates the components that need to be updated when a user interacts with a <Link> component."
          responseText="Qwik selectively hydrates only the components that need to be updated when a user interacts with a <Link> component. This selective hydration approach helps to optimize performance and improve the user experience by reducing the amount of work required to update the UI."
        />

        <p>🚧🚧🚧🚧🚧🚧🚧</p>

        <p>
          Congratulations🎉, you have learned how to create links between pages
          in Qwik City using the <code>&lt;Link&gt;</code> component. This is an
          essential step in building a modern web application with smooth
          client-side navigation.🚀
        </p>

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended reading"
        />

        <p>
          There's a lot more to learn about these topics. If you'd like to dive
          a little deeper, check out the following resources:{" "}
        </p>

        <ul>
          {/* <li>
            <BlankLink
              href="https://qwik.dev/docs/routing/"
              text="Qwik Docs Routing"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/advanced/routing/"
              text="Qwik Docs Advanced Routing"
            />
          </li> */}
        </ul>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        {/* <p>
          You can find the source code for chapter 4 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/4-chapter-4-creating-layouts-and-pages"
            text="GitHub"
          />
          .
        </p> */}
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={5}
          text="Well done! You've learned how to navigate between pages in Qwik."
        />
        <GoToNextChapterBlock
          goToChapter={6}
          title="Setting up your database"
          text="Let's create a database to start fetching real data!"
          disabledButton
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
