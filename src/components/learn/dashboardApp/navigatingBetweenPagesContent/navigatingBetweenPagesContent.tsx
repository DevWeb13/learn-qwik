// src/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

export default component$(() => {
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle />
        <p style="vertical-align: inherit;">
          In the previous chapter, you created the layout and the dashboard
          pages. Now let's add some links to allow users to navigate between the
          dashboard routes.
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

        {/* <div class="px-4  md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

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

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

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
        <p>
          As you can see, the <code>Link</code> component is similar to using{" "}
          <code>{`<a>`}</code> tags, but instead of{" "}
          <code>{`<a href="…">`}</code>, you use{" "}
          <code>{`<Link href="…">`}</code>.
        </p>
        <p>
          Save your changes and check to see if it works in your localhost. You
          should now be able to navigate between the pages without seeing a full
          refresh. Although parts of your application are rendered on the
          server, there's no full page refresh, making it feel like a web app.
          🚀
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          title="When to use &lt;a&gt; instead of &lt;Link&gt; 🔄"
          id="the-link-component"
        />
        <p>
          It is important to note that in Qwik, full page reloads are extremely
          optimized and often faster than traditional SPA navigation due to its
          capability for progressive resumption from serialized state in the
          DOM.. Therefore, in some cases, it might be beneficial to use{" "}
          <code>&lt;a&gt;</code> tags for quicker and more direct interactions.
          This differs from most SPA frameworks where avoiding a full page
          reload is crucial to maintain performance. 🔍
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

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
          hint="Remember that Qwik selectively hydrates components, which means it only updates the components that need to be updated when a user interacts with a <Link> component."
          responseText="Qwik selectively hydrates only the components that need to be updated when a user interacts with a <Link> component. This selective hydration approach helps to optimize performance and improve the user experience by reducing the amount of work required to update the UI."
        />

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          title="Displaying an Active Link 🌟"
          id="displaying-an-active-link"
        />
        <p>
          A common UI pattern is to show an active link to indicate to the user
          what page they are currently on. In Qwik City, you can use the{" "}
          <code>useLocation()</code> function that can use the current URL to
          determine which link is active.
        </p>
        <p>
          To display an active link, import the <code>useLocation()</code>{" "}
          function from <code>@builder.io/qwik-city</code> and use it to
          determine the active link. Here's how you can update the{" "}
          <code>NavLinks</code> component to display an active link:
        </p>
        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

import { component$ } from "@builder.io/qwik";

import {
  HiUserGroupOutline,
  HiHomeOutline,
  HiDocumentDuplicateOutline,
} from "@qwikest/icons/heroicons";

import { Link, useLocation } from "@builder.io/qwik-city";

//...`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 10, character: 0 },
              // end at the end of the line
              end: { line: 10, character: 58 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Next, assign the path to a variable called pathname inside your{" "}
          <code>{`<NavLinks />`}</code> component:
        </p>
        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

// ...          

export const NavLinks = component$(() => {
  const location = useLocation();
  const url = location.url;
  const pathname = url.pathname;

  // ...
}`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 5, character: 0 },
              // end at the end of the line
              end: { line: 7, character: 32 },
              properties: { class: "newLine" },
            },
          ]}
          hideLineNumbers
        />
        <p>Here are some key points about this code:</p>
        <ul>
          <li>
            <p>
              We use the <code>useLocation()</code> function to get the current
              URL.
            </p>
          </li>
          <li>
            <p>
              We extract the <code>pathname</code> from the URL object.
            </p>
          </li>
        </ul>
        <p>
          Now, you can use the <code>pathname</code> variable to determine which
          link is active. For example, you can add a conditional class to the
          active link:
        </p>
        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

// ...

export const NavLinks = component$(() => {
  const location = useLocation();
  const url = location.url;
  const pathname = url.pathname;

  console.log("pathname", pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            class={
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" +
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
              // line and character are 0-indexed
              start: { line: 9, character: 0 },
              // end at the end of the line
              end: { line: 9, character: 36 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 18, character: 0 },
              // end at the end of the line
              end: { line: 21, character: 13 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Save and check your localhost. You should now see the active link
          highlighted in blue,{" "}
          <span class="font-bold">BUT as you can see, this doesn't work</span>
          !!😱
        </p>

        <p>
          Don't panic! If you show the resultat of the{" "}
          <code>console.log("pathname", pathname);</code> you will see that the
          pathname is not the same as the link href. This is because the
          pathname finish with a "/" and the link href doesn't. To fix this, you
          can for example delete the "/" from the end of the pathname:
        </p>
        <CodeBlock
          code={`// src/components/ui/dashboard/nav-links.tsx

// ...          

const location = useLocation();
const url = location.url;
const pathname = url.pathname.replace(/\\/$/, "");

// ...`}
          language="tsx"
          icon="typescript"
          text="/src/components/ui/dashboard/nav-links.tsx"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 6, character: 0 },
              // end at the end of the line
              end: { line: 6, character: 49 },
              properties: { class: "newLine" },
            },
          ]}
          hideLineNumbers
        />
        <p>
          Now, the active link should be highlighted when you navigate to
          different pages.🥹
        </p>
        <p>
          This is a simple way to display an active link in your navigation
          menu. You can customize the styling further to suit your application's
          design.💅
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          title="How navigation works in Qwik-City"
          id="how-navigation-works-in-qwik-city"
        />
        <p>
          When a user clicks on a <code>&lt;Link&gt;</code> component, Qwik City
          effectively intercepts the click event and navigates to the specified
          URL without reloading the entire page. This SPA-like navigation allows
          users to maintain their current state without the overhead associated
          with full page reloads in other frameworks.
        </p>
        <p>
          Qwik optimizes even full-page reloads to be extremely cost-effective,
          challenging the common practice in other frameworks where such reloads
          are heavy and slow due to the need for JavaScript to rehydrate and
          re-execute. In Qwik, full-page reloads are so optimized that they
          often provide the most responsive interactions.
        </p>
        <p>
          By using the <code>&lt;Link&gt;</code> component, you can create a
          seamless navigation experience for your users, improving the overall
          performance and usability of your application.🚀 By leveraging the{" "}
          <code>&lt;Link&gt;</code> component and the{" "}
          <code>{`useNavigate()`}</code> API, Qwik City ensures that navigation
          is handled efficiently, updating the URL in the browser's address bar
          without the traditional drawbacks of SPA navigation, thereby enhancing
          the overall user experience.
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended reading"
        />
        <p>
          Interested in learning more about these areas? Below are some helpful
          resources to enhance your understanding:
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

        {/* <div class="px-4  md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor title="Source code" id="source-code" />
        <p>
          You can find the source code for chapter 5 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/6-chapter-5-navigating-between-pages"
            text="GitHub"
          />
          .
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={5}
          text="Well done! You've learned how to navigate between pages in Qwik."
        />
        <GoToNextChapterBlock
          version="Legacy"
          goToChapter={6}
          title="Setting up your database"
          text="Let's create a database to start fetching real data!"
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
