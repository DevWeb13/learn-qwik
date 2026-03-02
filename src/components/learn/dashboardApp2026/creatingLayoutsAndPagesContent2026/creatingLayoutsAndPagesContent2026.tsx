// src/components/learn/dashboardApp/CreatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent.tsx

import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import DashboardWithSidebar from "~/assets/img/dashboard-with-sidebar.png?jsx";
import DiagramRoutes from "~/assets/img/diagram-routes.png?jsx";
import LayoutNesting from "~/assets/img/layout-nesting.png?jsx";
import NestedRouting from "~/assets/img/nested-routing.png?jsx";
import PartialRendering from "~/assets/img/partial-rendering.png?jsx";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import { DashboardPagesSoluce } from "~/components/learn/dashboardApp/creatingLayoutsAndPagesContent/dashboardPagesSoluce/dashboardPagesSoluce";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { Quiz } from "~/components/UI/quiz/quiz";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

export const CreatingLayoutsAndPagesContent2026 = component$(() => {
  const dashboardPagesSoluce = useSignal(false);

  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          So far, your application only contains a single page. But real-world
          applications are not isolated pages, they are structured systems made
          of <span class="font-bold">layers</span>.
        </p>

        <p>
          In this chapter, you'll learn how Qwik structures applications using{" "}
          <span class="font-bold">file-based routing</span>, how layouts wrap
          pages, and how different layers of your app work together to create a
          stable and scalable architecture.
        </p>

        <p>
          Instead of simply adding new pages, you will learn how Qwik thinks
          about application structure.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "How file-based routing works in Qwik",
              emoji: "🗺️",
              anchor: "nested-routing",
            },
            {
              title: "Creating nested routes with folders",
              emoji: "📂",
              anchor: "creating-nested-routes",
            },
            {
              title: "Building pages with index.tsx",
              emoji: "📄",
              anchor: "creating-the-dashboard-page",
            },
            {
              title: "Sharing UI with layout.tsx",
              emoji: "🏗️",
              anchor: "creating-the-dashboard-layout",
            },
            {
              title: "Understanding root layout",
              emoji: "🌍",
              anchor: "root-layout-with-qwik",
            },
            {
              title: "Partial rendering and application structure",
              emoji: "⚡",
              anchor: "partial-rendering",
            },
          ]}
        />
        <SubtitleWithAnchor
          title="🗺️ How file-based routing works in Qwik"
          id="nested-routing"
        />

        <p>
          Qwik uses a <span class="font-bold">file-based routing system</span>.
          This means that your folder structure directly defines your
          application's URL structure.
        </p>

        <p>
          Each directory inside <code>src/routes</code> represents a{" "}
          <span class="font-bold"> route segment</span> that maps to a{" "}
          <span class="font-bold"> URL segment</span>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <NestedRouting
            alt="Diagram showing how folders map to URL segments"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="📂 Creating nested routes with folders"
          id="creating-nested-routes"
        />

        <p>
          To create a new route in Qwik, you simply create a new folder inside
          <code>src/routes</code>.
        </p>

        <p>
          For example, if you create a folder named <code>dashboard</code>, Qwik
          will automatically create a new route available at{" "}
          <code>/dashboard</code>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DiagramRoutes
            alt="Diagram showing how index.tsx and nested folders map to URL paths"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="📄 Building pages with index.tsx"
          id="creating-the-dashboard-page"
        />

        <p>
          Inside the <code>dashboard</code> folder, create a new file named
          <code>index.tsx</code>. This file defines the page that will be
          rendered when users visit <code>/dashboard</code>.
        </p>

        <p>
          In Qwik, an <code>index.tsx</code> file must export a default
          component. That component becomes the UI for that route.
        </p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <p>Dashboard Page</p>;
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/index.tsx"
        />

        <p>
          If your development server is running, visit{" "}
          <code>http://localhost:5173/dashboard</code>. You should now see the
          text "Dashboard Page".
        </p>

        <p>
          Notice that you did not configure any router manually. Qwik
          automatically detects new routes based on the file system. This makes
          routing predictable and scalable as your application grows.
        </p>

        <SubtitleWithAnchor
          title="🧪 Practice: Creating additional dashboard pages"
          id="practice-creating-dashboard-pages"
        />

        <p>Let’s expand the dashboard by creating additional nested routes.</p>

        <p>
          Inside the <code>dashboard</code> folder, create two new folders:
        </p>

        <ol class="ml-1">
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-purple]">1.</span>
            <span class="font-bold">Customers Page:</span> Create a folder named{" "}
            <code>customers</code> inside <code>src/routes/dashboard</code> and
            add an <code>index.tsx</code> file that returns:{" "}
            <code>&lt;p&gt;Customers Page&lt;/p&gt;</code>.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-purple]">2.</span>
            <span class="font-bold">Invoices Page:</span> Create a folder named{" "}
            <code>invoices</code> inside <code>src/routes/dashboard</code> and
            add an <code>index.tsx</code> file that returns:{" "}
            <code>&lt;p&gt;Invoices Page&lt;/p&gt;</code>.
          </li>
        </ol>

        <p>Once created, the following routes should now be available:</p>

        <ul>
          <li>
            <code>/dashboard/customers</code>
          </li>
          <li>
            <code>/dashboard/invoices</code>
          </li>
        </ul>

        <div class="bg-vercel-200 -mx-5 mb-8 p-5.25 md:-mx-15.5 md:rounded-2xl md:p-4 md:px-15.5 md:py-12">
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
          title="🏗️ Sharing UI with layout.tsx"
          id="creating-the-dashboard-layout"
        />

        <p>
          As your application grows, multiple pages often share the same user
          interface. In dashboards, for example, the sidebar navigation should
          remain visible while only the main content changes.
        </p>

        <p>
          Qwik solves this using a special file called <code>layout.tsx</code>.
          A layout allows you to share UI across multiple routes while keeping
          page content dynamic.
        </p>

        <p>
          First, let’s create a reusable navigation component that defines the
          links displayed in the sidebar.
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
            class="flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
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

        <p>
          Next, we create a <code>SideNav</code> component that uses the
          navigation links and adds branding and a sign-out button.
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/sidenav.tsx
        
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiPowerOutline } from "@qwikest/icons/heroicons";
import { NavLinks } from "./nav-links";

export const SideNav = component$(() => {
  return (
    <div class="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        class="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div class="w-32 text-white md:w-40 text-xl font-bold">
          LRD Qwik
        </div>
      </Link>
      <div class="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div class="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button class="flex h-12 w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
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

        <p>
          Now that we have our layout components, we can connect everything
          together inside a <code>layout.tsx</code> file.
        </p>

        <p>
          This file must be placed inside <code>src/routes/dashboard</code>. It
          will automatically wrap every route inside the dashboard segment.
        </p>

        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx
        
import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";

export default component$(() => {
  return (
    <div class="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div class="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div class="grow p-6 md:overflow-y-auto md:p-12">
        <Slot />
      </div>
    </div>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/layout.tsx"
        />

        <p>
          The <code>Slot</code> component acts as a placeholder. It tells Qwik
          where the child route content should be rendered.
        </p>

        <p>
          When a user visits <code>/dashboard/customers</code>, only the page
          inside the slot changes. The sidebar remains untouched.
        </p>

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

        <p>One major advantage of layouts in Qwik is partial rendering.</p>

        <p>
          During navigation, the layout does not re-render. Only the content
          inside the <code>Slot</code> updates.
        </p>

        <p>This improves performance and makes your UI feel more stable.</p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <PartialRendering
            alt="Folder structure showing the dashboard layout nesting the dashboard pages, but only the page UIs swap on navigation"
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="🌍 Root layout with Qwik"
          id="root-layout-with-qwik"
        />

        <p>
          At the very top of a Qwik application sits a special file called
          <code>root.tsx</code>. This file defines the global document structure
          of your entire application.
        </p>

        <p>
          While route layouts such as <code>dashboard/layout.tsx</code> wrap
          specific route segments, <code>root.tsx</code> wraps everything.
        </p>

        <p>
          It initializes routing, global styles, metadata handling, and
          application level configuration.
        </p>

        <CodeBlock
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
          language="tsx"
          icon="typescript"
          text="/src/root.tsx"
          copyButton={false}
        />

        <p>
          The <code>QwikCityProvider</code> enables file based routing across
          your application. It provides the routing context required by Qwik
          City.
        </p>

        <p>
          The <code>RouterOutlet</code> renders the currently active route.
          Every layout and page you create will ultimately appear inside this
          outlet.
        </p>

        <InfoBox2026 emoji="⚙️" colorVar="--qwik-light-blue">
          Think of RouterOutlet as the insertion point for your entire route
          tree. Without it, no page or layout can render.
        </InfoBox2026>

        <p>
          The conditional manifest loading using <code>isDev</code> ensures that
          the PWA manifest is only included in production builds.
        </p>

        <p>This means your application hierarchy now looks like this:</p>

        <ul>
          <li>
            <code>root.tsx</code> global wrapper
          </li>
          <li>
            <code>dashboard/layout.tsx</code> route segment layout
          </li>
          <li>
            <code>index.tsx</code> or nested pages
          </li>
        </ul>

        <p>
          The dashboard layout affects only routes inside the dashboard segment.
          The root layout affects the entire application.
        </p>

        <p>
          Understanding this hierarchy allows you to separate global concerns
          from route specific concerns and build scalable architectures.
        </p>

        <SubtitleWithAnchor
          title="🧱 Understanding nested layouts"
          id="understanding-nested-layouts"
          level="h3"
        />

        <p>
          Layouts in Qwik are hierarchical. They do not replace each other, they
          stack.
        </p>

        <InfoBox2026 emoji="🧠" colorVar="--qwik-light-purple">
          Layouts do not replace each other during navigation. They compose. The
          root layout stays mounted, route segment layouts stay mounted, and
          only the page inside the Slot updates.
        </InfoBox2026>

        <p>
          When navigating to <code>/dashboard/customers</code>, Qwik composes
          the UI like this:
        </p>

        <ul>
          <li>
            <code>root.tsx</code> wraps the entire application
          </li>
          <li>
            <code>dashboard/layout.tsx</code> wraps the dashboard segment
          </li>
          <li>
            <code>customers/index.tsx</code> renders inside the layout’s{" "}
            <code>Slot</code>
          </li>
        </ul>

        <p>
          Each layout defines its own <code>Slot</code>. That slot becomes the
          insertion point for the next level in the hierarchy.
        </p>

        <p>
          This stacking mechanism allows you to combine global UI, segment
          specific UI, and page content in a predictable and scalable way.
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
              text: "Share UI across multiple pages within a route segment",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Act as the main entry point of the application",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what remains visible when navigating between dashboard pages."
          responseText="Correct. A layout.tsx file allows you to share common UI across multiple routes inside a specific segment, such as a sidebar or header, without re-rendering it during navigation."
        />

        <Quiz
          question="Where is route content ultimately rendered in a Qwik application?"
          options={[
            {
              text: "Inside layout.tsx only",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Inside the RouterOutlet defined in root.tsx",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Inside global.css",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Directly inside QwikCityProvider without any outlet",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Which component is responsible for rendering the active route?"
          responseText="Correct. The RouterOutlet inside root.tsx renders the currently active route. All layouts and pages are ultimately rendered inside this root structure."
        />

        <p>
          You now understand how Qwik structures applications using file based
          routing, route segment layouts, and a global root layout.
        </p>

        <p>
          With this architectural foundation in place, you are ready to explore
          navigation and build more advanced interactions between pages.
        </p>

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended-reading"
        />

        <p>
          If you would like to go deeper into routing and layout strategies,
          explore the official documentation below:
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
          You can find the source code for chapter 4 2026 edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-4-Creating-Layouts-and-Pages"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={4}
          text="Great work. You now understand Qwik routing and layout architecture."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={5}
          title="Navigating Between Pages"
          text="Learn how to navigate between dashboard pages using Qwik City."
        />
      </div>

      <Feedback />
      <div class="mb-10 md:mb-30"></div>
    </>
  );
});
