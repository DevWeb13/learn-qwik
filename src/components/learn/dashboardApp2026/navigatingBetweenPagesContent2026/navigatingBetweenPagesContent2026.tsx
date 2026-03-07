// src/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

export const NavigatingBetweenPagesContent2026 = component$(() => {
  useStyles$(``);

  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you created the dashboard pages and the
          shared layout that wraps them.
        </p>

        <p>
          Now it is time to connect those pages. In this chapter, you will learn
          how to handle navigation with Qwik City, starting with a temporary
          homepage shortcut for local development, then improving the dashboard
          sidebar, and finally highlighting the active route.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Why client-side navigation improves dashboard UX",
              emoji: "🧭",
              anchor: "why-navigation-matters",
            },
            {
              title: "Using the <Link> component from Qwik City",
              emoji: "🔗",
              anchor: "using-the-link-component",
            },
            {
              title: "Displaying the active link with useLocation()",
              emoji: "✨",
              anchor: "displaying-an-active-link",
            },
            {
              title: "How navigation works in Qwik City",
              emoji: "⚡",
              anchor: "how-navigation-works-in-qwik-city",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🧭 Why navigation matters"
          id="why-navigation-matters"
        />

        <p>
          Navigation is what turns a collection of pages into a coherent
          application. It helps users move through the interface, understand
          where they are, and switch between sections without friction.
        </p>

        <p>
          In a dashboard, this matters even more. Users often move back and
          forth between routes such as the homepage, invoices, and customers. If
          navigation feels clumsy, the whole application feels clumsy.
        </p>

        <p>
          Qwik City gives you the tools to make that experience smoother while
          keeping the code simple and predictable.
        </p>

        <SubtitleWithAnchor
          title="🔗 Using the <Link> component"
          id="using-the-link-component"
        />

        <p>
          For internal navigation, Qwik City provides the{" "}
          <code>&lt;Link&gt;</code> component.
        </p>

        <p>
          It works like a standard anchor tag, but instead of writing{" "}
          <code>{`<a href="...">`}</code>, you write{" "}
          <code>{`<Link href="...">`}</code>.
        </p>

        <p>
          In other words, the API stays familiar, but the router can now handle
          navigation inside your application.
        </p>

        <InfoBox2026 emoji="🧠" colorVar="--qwik-light-purple">
          Think of <code>Link</code> as the default tool for navigation between
          pages inside your Qwik City app.
        </InfoBox2026>

        <SubtitleWithAnchor
          title="Adding a temporary dashboard link on the homepage"
          id="adding-a-dashboard-link-on-the-homepage"
          level="h3"
        />

        <p>
          Before improving the sidebar, let’s add one small shortcut to make
          local development more convenient.
        </p>

        <p>
          Right now, when you run the project locally, the application opens on
          the homepage. To access the dashboard, you have to type{" "}
          <code>/dashboard/</code> in the browser manually every time.
        </p>

        <p>
          That works, but it quickly becomes repetitive while developing. So for
          now, we will temporarily update the homepage button so it points to
          the dashboard instead of the login page.
        </p>

        <p>
          More precisely, we will change its <code>href</code> from{" "}
          <code>/login</code> to <code>/dashboard/</code>, and update the button
          label from <code>Log in</code> to <code>Go to Dashboard</code>.
        </p>

        <p>
          Later in the course, once authentication is properly implemented, this
          button can be restored to its original purpose.
        </p>

        <InfoBox2026 emoji="🛠️" colorVar="--qwik-light-blue">
          This is only a temporary development shortcut. Once authentication is
          added, dashboard access should go through the real login flow.
        </InfoBox2026>

        <p>
          Open <code>src/routes/index.tsx</code> and update the existing button:
        </p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
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
            href="/dashboard/"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Go to Dashboard</span>
            <HiArrowRightOutline class="h-4 w-4" />
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
};`}
          language="tsx"
          icon="typescript"
          text="/src/routes/index.tsx"
          decorations={[
            {
              start: { line: 36, character: 0 },
              end: { line: 36, character: 30 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 39, character: 0 },
              end: { line: 39, character: 40 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Save the file and open the homepage in your browser. The updated
          button should now take you directly to the dashboard, without editing
          the URL manually.
        </p>

        <figure class="my-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-3">
          <video
            class="block w-full rounded-lg border border-gray-200 bg-black"
            controls
            preload="metadata"
            playsInline
            poster="/img/adding-a-dashboard-link-on-the-homepage-poster.png"
          >
            <source
              src="/videos/adding-a-dashboard-link-on-the-homepage.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <figcaption class="mt-3 text-sm text-gray-600">
            The temporary homepage button now takes you directly to the
            dashboard.
          </figcaption>
        </figure>

        <SubtitleWithAnchor
          title="When to use <a> instead of <Link>"
          id="when-to-use-a-instead-of-link"
          level="h3"
        />

        <p>
          Do not assume that a regular <code>&lt;a&gt;</code> element is somehow
          wrong or outdated. In Qwik, it is still a perfectly valid part of the
          platform.
        </p>

        <p>
          Qwik City provides <code>&lt;Link&gt;</code> as the standard way to
          navigate between routes inside your application. That does not mean a
          normal anchor should disappear from your toolbox.
        </p>

        <p>
          A regular <code>&lt;a&gt;</code> element still makes sense when:
        </p>

        <ul>
          <li>you want standard browser navigation behavior,</li>
          <li>you are linking to an external website,</li>
          <li>
            or a full document navigation is simply the clearer and more direct
            choice.
          </li>
        </ul>

        <InfoBox2026 emoji="🔍" colorVar="--qwik-light-blue">
          A practical rule: use <code>&lt;Link&gt;</code> for navigation inside
          your Qwik City application. For standard browser navigation, including
          external links, a regular <code>&lt;a&gt;</code> element is also
          perfectly valid.
        </InfoBox2026>

        <SubtitleWithAnchor
          title="Navigating with a button and useNavigate()"
          id="navigating-with-a-button-and-use-navigate"
          level="h3"
        />

        <p>
          So far, navigation has been triggered by links in the interface. But
          sometimes a route change needs to happen programmatically.
        </p>

        <p>
          In those cases, Qwik City provides <code>useNavigate()</code>, which
          lets you navigate in response to code rather than a regular link.
        </p>

        <p>
          This is especially useful after a successful form submission, after a
          login, or after a button click that should redirect the user
          somewhere.
        </p>

        <InfoBox2026 emoji="🧠" colorVar="--qwik-light-purple">
          Use <code>useNavigate()</code> when navigation needs to be triggered
          by code rather than by a regular link in the UI.
        </InfoBox2026>

        <p>
          For example, if you wanted to reach the dashboard with a real button
          instead of a link, you could write:
        </p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const nav = useNavigate();

  return (
    <button
      onClick$={async () => {
        await nav("/dashboard/");
      }}
      class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
    >
      Go to Dashboard
    </button>
  );
});`}
          language="tsx"
          icon="typescript"
          text="Example"
          copyButton={false}
        />

        <p>
          This works well, but semantically it is not the same thing as a link.
        </p>

        <p>
          A link naturally represents navigation to another page. A button
          represents an action.
        </p>

        <p>
          So if the goal is simply to move the user to another route,{" "}
          <code>Link</code> is usually the better choice.
        </p>

        <p>
          But when navigation depends on logic or happens after another action,{" "}
          <code>useNavigate()</code> becomes very useful.
        </p>

        <SubtitleWithAnchor
          title="Replacing sidebar <a> tags with <Link>"
          id="replacing-sidebar-a-tags-with-link"
          level="h3"
        />
        <p>
          Now that you know how to use <code>Link</code>, it is time to apply it
          to the dashboard sidebar. This is a great way to see the difference it
          makes in practice.
        </p>
        <p>
          At the moment, the sidebar navigation still uses regular{" "}
          <code>&lt;a&gt;</code> elements. Those links already work, so this is
          not about fixing broken navigation. It is about improving how
          navigation feels inside the dashboard.
        </p>

        <p>
          Watch closely when you move between the dashboard pages in your
          browser. Did you see it? Each click triggers a full browser
          navigation.
        </p>

        <p>
          Replacing those <code>&lt;a&gt;</code> elements with{" "}
          <code>&lt;Link&gt;</code> gives you a smoother, more app-like
          experience.
        </p>

        <p>
          Open <code>src/components/ui/dashboard/nav-links.tsx</code> and import{" "}
          <code>Link</code> from <code>@builder.io/qwik-city</code>. Then
          replace each <code>&lt;a&gt;</code> tag with <code>&lt;Link&gt;</code>
          .
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import {
  HiDocumentDuplicateOutline,
  HiHomeOutline,
  HiUserGroupOutline,
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
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: HiUserGroupOutline,
  },
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
            class="flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
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
              start: { line: 3, character: 0 },
              end: { line: 3, character: 45 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 33, character: 0 },
              end: { line: 33, character: 15 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 40, character: 0 },
              end: { line: 40, character: 17 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          This change is not only cosmetic. A regular <code>&lt;a&gt;</code>{" "}
          element triggers a normal browser navigation, which reloads the page
          as a new document. A Qwik City <code>&lt;Link&gt;</code>, on the other
          hand, performs an SPA navigation and updates the route without a full
          page reload.
        </p>

        <p>
          In this dashboard, that makes a real difference: the shared layout can
          stay in place while only the page content changes.
        </p>

        <p>
          Save the file and test the sidebar in your browser. You should now be
          able to move between dashboard pages without triggering a full page
          navigation on each click.
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
              text: "Qwik selectively reactivates only the necessary components.",
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
          hint="Think about Qwik's resumability model in production."
          responseText="Correct. Qwik selectively reactivates only the parts of the application that are needed. That is one of the reasons navigation can feel fast without waking up the whole app at once."
        />

        <SubtitleWithAnchor
          title="✨ Displaying the active link"
          id="displaying-an-active-link"
        />

        <p>
          A common UI pattern is to highlight the current page so users can
          instantly see where they are.
        </p>

        <p>
          Qwik City gives you access to the current URL through the{" "}
          <code>useLocation()</code> function.
        </p>

        <p>
          Start by importing <code>useLocation</code> alongside{" "}
          <code>Link</code>:
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import {
  HiDocumentDuplicateOutline,
  HiHomeOutline,
  HiUserGroupOutline,
} from "@qwikest/icons/heroicons";

// ...`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 58 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Inside the <code>NavLinks</code> component, read the current pathname:
        </p>

        <CodeBlock
          code={`export const NavLinks = component$(() => {
  const location = useLocation();
  const pathname = location.url.pathname;

  return (
    <>
      {/* ... */}
    </>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          hideLineNumbers
          decorations={[
            {
              start: { line: 1, character: 0 },
              end: { line: 1, character: 33 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 41 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          The <code>pathname</code> gives you the current route, such as{" "}
          <code>/dashboard/</code> or <code>/dashboard/customers/</code>.
        </p>

        <p>
          You can now compare that pathname with each link and apply different
          styles when they match.
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import {
  HiDocumentDuplicateOutline,
  HiHomeOutline,
  HiUserGroupOutline,
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
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: HiUserGroupOutline,
  },
];

export const NavLinks = component$(() => {
  const location = useLocation();
  const pathname = location.url.pathname;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            class={
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" +
              (pathname === link.href ? " bg-sky-100 text-blue-600" : "")
            }
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
              start: { line: 39, character: 0 },
              end: { line: 43, character: 11 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          At first glance, this looks correct. But if you test it, you will
          notice that the active class does not apply as expected.
        </p>

        <p>
          The reason is simple: the current pathname includes a trailing slash,
          such as <code>/dashboard/</code>, while the link <code>href</code>{" "}
          values do not.
        </p>

        <p>
          So even though both URLs point to the same page, the two strings are
          not identical, and the comparison fails.
        </p>

        <InfoBox2026 emoji="📎" colorVar="--qwik-light-blue">
          Qwik City's{" "}
          <BlankLink
            href="https://qwik.dev/docs/advanced/vite/#trailingslash"
            text="trailingSlash"
          />{" "}
          option controls whether your route URLs end with a slash, such as{" "}
          <code>/dashboard/</code>. It now defaults to <code>true</code>, while
          previous versions defaulted to <code>false</code>. The safest approach
          is to stay consistent and use the same URL format everywhere.
        </InfoBox2026>

        <p>
          The fix is simple: keep the same URL convention everywhere in your
          navigation links. In our case, that means adding a trailing slash to
          each <code>href</code>.
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import {
  HiDocumentDuplicateOutline,
  HiHomeOutline,
  HiUserGroupOutline,
} from "@qwikest/icons/heroicons";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard/", icon: HiHomeOutline },
  {
    name: "Invoices",
    href: "/dashboard/invoices/",
    icon: HiDocumentDuplicateOutline,
  },
  {
    name: "Customers",
    href: "/dashboard/customers/",
    icon: HiUserGroupOutline,
  },
];

export const NavLinks = component$(() => {
  const location = useLocation();
  const pathname = location.url.pathname;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            class={
              "flex h-12 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 " +
              (isActive
                ? "bg-sky-100 text-blue-600"
                : "bg-gray-50 hover:bg-sky-100 hover:text-blue-600")
            }
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
              start: { line: 14, character: 0 },
              end: { line: 14, character: 61 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 17, character: 0 },
              end: { line: 17, character: 33 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 22, character: 0 },
              end: { line: 22, character: 34 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          With that change in place, the active link highlighting works
          correctly, because both <code>pathname</code> and <code>href</code>{" "}
          now follow the same convention.
        </p>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          A good rule is to stay consistent with your URLs. If your application
          uses trailing slashes, use them everywhere in your routes and links.
        </InfoBox2026>

        <Quiz
          question="Why does the active link check fail before trailing slashes are added to the href values?"
          options={[
            {
              text: "Because Link only works after a page refresh",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because pathname includes a trailing slash while href does not",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because useLocation() only works for external links",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because Qwik disables class updates on active links",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Look closely at the difference between /dashboard and /dashboard/."
          responseText="Correct. The comparison fails because pathname includes a trailing slash, while the href values do not. Once both use the same format, the active link check works correctly."
        />

        <SubtitleWithAnchor
          title="⚡ How navigation works in Qwik City"
          id="how-navigation-works-in-qwik-city"
        />

        <p>
          When a user clicks a <code>&lt;Link&gt;</code>, Qwik City intercepts
          the click and updates the route without reloading the entire document.
        </p>

        <p>
          Because the dashboard already uses a shared <code>layout.tsx</code>,
          the sidebar can stay in place while only the page content inside the{" "}
          <code>Slot</code> changes.
        </p>

        <p>
          That is why navigation feels smoother and more stable. The interface
          does not visually reboot on every click.
        </p>

        <p>
          Under the hood, Qwik is also selective about what needs to resume or
          update, so navigation does not require waking up the entire
          application at once.
        </p>

        <Quiz
          question="What stays stable during dashboard navigation when using a shared layout.tsx?"
          options={[
            {
              text: "Only the browser tab title",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "The sidebar layout, while the page content inside Slot changes",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Every component is fully re-rendered on each click",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "The route URL never changes",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think back to what layout.tsx wraps."
          responseText="Correct. The shared dashboard layout remains mounted, and only the route content rendered inside the Slot changes during navigation."
        />

        <p>
          You now know how to create internal navigation with{" "}
          <code>&lt;Link&gt;</code>, highlight the active route, and understand
          why layouts make navigation feel more stable.
        </p>

        <p>
          Your dashboard is no longer just a collection of pages. It is now a
          connected route system.
        </p>

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended-reading"
        />

        <p>
          To go deeper into Qwik City navigation, explore the official resources
          below:
        </p>

        <ul>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/api/#link"
              text="Qwik Docs API Link"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/cookbook/nav-link/"
              text="Qwik Docs Cookbook Nav Link"
            />
          </li>
        </ul>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 5 2026 edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-5-Navigating-Between-Pages"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={5}
          text="Great work. You can now navigate between dashboard pages with Qwik City."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={6}
          title="Optimizing Fonts and Images"
          text="Improve performance and polish your dashboard with better font and image handling."
          disabledButton
        />
      </div>
    </>
  );
});
