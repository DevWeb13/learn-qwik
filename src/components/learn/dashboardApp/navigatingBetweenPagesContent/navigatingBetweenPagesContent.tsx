// src/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent.tsx

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
// import { DashboardPagesSoluce } from "./dashboardPagesSoluce/dashboardPagesSoluce";

import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";

import NestedRouting from "~/assets/img/nested-routing.png?jsx";
import DiagramRoutes from "~/assets/img/diagram-routes.png?jsx";
import LayoutNesting from "~/assets/img/layout-nesting.png?jsx";
import DashboardWithSidebar from "~/assets/img/dashboard-with-sidebar.png?jsx";
import PartialRendering from "~/assets/img/partial-rendering.png?jsx";

export default component$(() => {
  const dashboardPagesSoluce = useSignal(false);

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
          {/* {dashboardPagesSoluce.value && <DashboardPagesSoluce />} */}
        </div>

        <SubtitleWithAnchor
          title="Creating the dashboard layout"
          id="creating-the-dashboard-layout"
        />

        <p>
          Dashboards typically have navigation shared across multiple pages. In
          Qwik, you can use a special <code>`layout.tsx`</code> file to create a
          UI shared between multiple pages. Let's create a layout for the
          dashboard pages!
        </p>

        <p>
          Inside the <code>`src/components/ui/dashboard`</code> folder, add a
          new file called <code>`nav-links.tsx`</code> and paste the following
          code:
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";

import {
  HiUserGroupOutline,
  HiHomeOutline,
  HiDocumentDuplicateOutline,
} from "@qwikest/icons/heroicons";

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
          <a
            key={link.name}
            href={link.href}
            class="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon class="w-6" />
            <p class="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
});
`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
        />

        <p>Here are some key points about this code:</p>

        <ul>
          <li>
            <strong>Importing the icons:</strong> The{" "}
            <code>`@qwikest/icons/heroicons`</code> package provides a set of
            icons you can use in your application.
          </li>
          <li>
            <strong>Creating a map of links:</strong> The <code>`links`</code>{" "}
            array contains the navigation links to display in the side
            navigation.
          </li>
          <li>
            <strong>Rendering the links:</strong> The <code>`NavLinks`</code>{" "}
            component maps over the <code>`links`</code> array and renders the
            navigation links.
          </li>
        </ul>

        <p>
          Next, let's create a <code>`SideNav`</code> component that will use
          the <code>`NavLinks`</code> component to display the navigation links.
        </p>

        <p>
          Inside the <code>`src/components/ui/dashboard`</code> folder, add a
          new file called <code>`sidenav.tsx`</code> and paste the following
          code:
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/sidenav.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";
import { HiPowerOutline } from "@qwikest/icons/heroicons";
import { NavLinks } from "./nav-links";

export const SideNav = component$(() => {
  return (
    <div class="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        class="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div class="w-32 text-white md:w-40">
          <LRDQwikLogo />
        </div>
      </Link>
      <div class="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div class="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button class="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <HiPowerOutline class="w-6" />
            <div class="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/sidenav.tsx"
        />

        <p>Here are some key points about this code:</p>

        <ul>
          <li>
            <strong>Importing the components:</strong> The{" "}
            <code>`NavLinks`</code> component is imported to display the
            navigation links.
          </li>
          <li>
            <strong>Rendering the side navigation:</strong> The{" "}
            <code>`SideNav`</code> component renders the side navigation with
            the logo, navigation links, and sign-out button.
          </li>
        </ul>

        <p>
          Now that you've created the layout components, let's add them to the
          dashboard layout.
        </p>

        <p>
          Inside the <code>`/dashboard`</code> folder, add a new file called{" "}
          <code>`layout.tsx`</code> and paste the following code:
        </p>

        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/sidenav";

export default component$(() => {
  return (
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div class="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div class="flex-grow p-6 md:overflow-y-auto md:p-12">
        <Slot />
      </div>
    </div>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/layout.tsx"
        />

        <p>Here are some key points about this code:</p>

        <ul>
          <li>
            <strong>
              Importing the <code>{`<SideNav />`}</code> component:
            </strong>
            : Any component you import into this file will be part of the
            layout.
          </li>
          <li>
            <strong>
              The <code>{`<Layout />`}</code> component receives a{" "}
              <code>`Slot`</code>
            </strong>
            , which acts as a placeholder for child components. In your case,
            the pages inside <code>`/dashboard`</code> will automatically be
            nested within a <code>{`<Layout />`}</code> like so:
          </li>
        </ul>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <LayoutNesting
            alt="Folder structure with the dashboard layout nesting the dashboard pages as children"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          Ensure everything is working correctly by saving your changes and
          checking your localhost. You should see the following:
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DashboardWithSidebar
            alt="Dashboard page with a sidebar navigation and a main content area"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          <span class="font-bold">Benefit of using layouts in Qwik:</span>{" "}
          During navigation, only the page components update while the layout
          doesn't re-render. This is known as partial rendering:
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <PartialRendering
            alt="Folder structure showing the dashboard layout nesting the dashboard pages, but only the page UIs swap on navigation"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="Root layout with Qwik"
          id="root-layout-with-qwik"
        />

        <p>
          In the previous chapter, you learned how to integrate global styles
          and configure essential elements that affect the entire application.
          This sets the stage for understanding the role of the{" "}
          <code>`root.tsx`</code> file in Qwik, which serves to globally
          configure the application and anchor all pages and components.
        </p>

        <CodeBlock
          code={`// src/root.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always starts with the <QwikCityProvider> component,
   * which is crucial for managing routing and global state.
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
});
`}
          language="tsx"
          icon="typescript"
          text="/src/root.tsx"
          copyButton={false}
        />

        <p>
          This <code>`root.tsx`</code> file is crucial as it ensures that any UI
          added will be shared across all pages of your application. You can use
          this file to modify the <code>{`<html>`}</code> and{" "}
          <code>{`<body>`}</code> tags and to add metadata, which you will learn
          more about in a later chapter.
        </p>

        <p>
          As the specific layout you created for the dashboard (
          <code>`/src/routes/dashboard/layout.tsx`</code>) is unique to the
          dashboard pages, it is not necessary to add any UI to the root layout
          mentioned above.
        </p>

        <Quiz
          question="What is the role of the layout.tsx file in Qwik?"
          options={[
            {
              text: "Act as a global error handler",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Retrieve data and manage state across the entire application",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Share UI across multiple pages",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Act as the main entry point of the application",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Remember that the layout.tsx file is often used to define components that are common to multiple pages, such as headers, footers, or sidebars."
          responseText="Indeed, in Qwik, as in many other frameworks, layout files are primarily used to organize and reuse the user interface that is common between different parts of an application, thereby providing a consistent experience for users while making the application easier to maintain and develop."
        />

        <p>
          Congratulations, you have learned how to create layouts and pages in
          Qwik! 🎉
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
          <li>
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
          </li>
        </ul>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 4 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/4-chapter-4-creating-layouts-and-pages"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={4}
          text="Well done! You've learned how to create layouts and pages in Qwik."
        />
        <GoToNextChapterBlock
          goToChapter={5}
          title="Navigating Between Pages"
          text="Learn how to navigate between dashboard pages in Qwik."
          disabledButton
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
