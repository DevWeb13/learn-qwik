import { component$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

export const OptimizingDataFetchingContent2026 = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you learned how to load dashboard data with{" "}
          <code>routeLoader$()</code>. Now it&apos;s time to optimize where that
          data should be loaded.
        </p>

        <p>
          In this chapter, you&apos;ll learn the difference between static and
          dynamic rendering, why a dashboard is a better fit for dynamic
          rendering, and how route boundaries affect when loaders run.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Static and dynamic rendering",
              emoji: "🧱",
              anchor: "static-and-dynamic-rendering",
            },
            {
              title: "Route boundaries in Qwik",
              emoji: "🧭",
              anchor: "route-boundaries-in-qwik",
            },
            {
              title: "Moving the loader to index.tsx",
              emoji: "📍",
              anchor: "moving-the-loader-to-index-tsx",
            },
            {
              title: "Avoiding unnecessary requests",
              emoji: "⚡",
              anchor: "avoiding-unnecessary-requests",
            },
            {
              title: "Simulating a slow data fetch",
              emoji: "🐢",
              anchor: "simulating-a-slow-data-fetch",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🧱 Static and dynamic rendering"
          id="static-and-dynamic-rendering"
        />

        <SubtitleWithAnchor
          title="What is static rendering?"
          id="what-is-static-rendering"
          level="h3"
        />

        <p>
          With static rendering, data fetching and rendering happen at build
          time, when you deploy the application.
        </p>

        <p>
          When a user visits the page later, the cached result can be served
          again.
        </p>

        <p>There are a couple of benefits of static rendering:</p>

        <ul>
          <li>
            <strong>Faster websites:</strong> prerendered pages can be cached
            and distributed globally.
          </li>
          <li>
            <strong>Reduced server load:</strong> the server does not need to
            generate the page again for every request.
          </li>
          <li>
            <strong>SEO:</strong> the content is already available when the page
            loads, which makes it easier to index.
          </li>
        </ul>

        <p>
          Static rendering is useful for pages with no changing data or data
          that is shared across users, such as a blog post, a documentation
          page, or a product page.
        </p>

        <p>
          It might not be a good fit for a dashboard with data that changes
          regularly.
        </p>

        <Quiz
          question="Why might static rendering not be a good fit for a dashboard app?"
          options={[
            {
              text: "Because it makes the website slower",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because the server load will increase",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Because the application will not reflect the latest data changes",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Because you need a Content Delivery Network",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about how often dashboard data can change."
          responseText="Exactly. A statically rendered dashboard can quickly become outdated if the data changes after build time."
        />

        <SubtitleWithAnchor
          title="What is dynamic rendering?"
          id="what-is-dynamic-rendering"
          level="h3"
        />

        <p>
          With dynamic rendering, content is rendered on the server at request
          time, when the user visits the page.
        </p>

        <p>There are a couple of benefits of dynamic rendering:</p>

        <ul>
          <li>
            <strong>Fresh data:</strong> the page can reflect frequently updated
            information.
          </li>
          <li>
            <strong>User-specific content:</strong> it is easier to serve
            personalized pages such as dashboards or account areas.
          </li>
          <li>
            <strong>Request-time information:</strong> the server can work with
            information that is only available when the request happens.
          </li>
        </ul>

        <p>
          That&apos;s a better fit for the dashboard in this course. Revenue,
          latest invoices, and summary cards can all change over time, so the
          page needs fresh data to stay useful.
        </p>

        <p>
          In this dashboard, you&apos;re using dynamic server rendering. Qwik
          City also supports{" "}
          <BlankLink
            href="https://qwik.dev/docs/guides/static-site-generation/"
            text="static site generation"
          />
          , but static rendering needs to be configured explicitly. Here,
          dynamic rendering is a better fit because the dashboard data should
          not be frozen at build time.
        </p>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          Qwik has a nice advantage here: even when pages are prerendered, they
          still benefit from resumability instead of paying the usual full
          hydration cost on page load.
        </InfoBox2026>

        <p>
          Dynamic rendering is the right choice here, but you still need to
          decide where your loaders should run.
        </p>

        <p>
          A loader in <code>layout.tsx</code> can make sense when several child
          routes need the same data. But if the data is only needed by one page,
          placing that loader too high in the route tree can trigger unnecessary
          requests.
        </p>

        <SubtitleWithAnchor
          title="🧭 Route boundaries in Qwik"
          id="route-boundaries-in-qwik"
        />

        <p>
          In Qwik, a <code>layout.tsx</code> file defines shared UI for its
          child routes.
        </p>

        <p>
          If you place a <code>routeLoader$()</code> inside that shared layout,
          it can be triggered for child routes that share the same route
          boundary.
        </p>

        <p>This can be useful when several child routes need the same data.</p>

        <p>
          But in this dashboard, the overview data is only used by the dashboard
          home page. That means placing those loaders in the shared layout makes
          their scope broader than necessary.
        </p>

        <SubtitleWithAnchor
          title="Triggering data requests"
          id="triggering-data-requests"
          level="h3"
        />

        <p>
          To make this easier to see, open{" "}
          <code>src/routes/dashboard/layout.tsx</code> and add a{" "}
          <code>console.log()</code> inside one of the loaders.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/lib/loaders";

export const useFetchRevenue = routeLoader$(async () => {
  console.log("Fetching revenue from the shared dashboard layout...");
  return fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return fetchLatestInvoices();
});

export const useFetchCardData = routeLoader$(async () => {
  return fetchCardData();
});

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
          text="src/routes/dashboard/layout.tsx"
          decorations={[
            {
              start: { line: 12, character: 0 },
              end: { line: 12, character: 70 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Then open the browser, watch your terminal, and move across the
          dashboard links. Because the loader lives in the shared layout, it can
          run for child routes that use that layout, even when those pages do
          not need the overview data.
        </p>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          In development, you may notice this request as soon as you hover a
          dashboard link. That happens because Qwik City{" "}
          <code>&lt;Link&gt;</code> components prefetch their target route by
          default, and that prefetch also includes any matching{" "}
          <code>routeLoader$()</code>. In development, this usually happens on{" "}
          <code>mouseover</code> or <code>focus</code>. In production, it
          usually happens when the link enters the viewport instead. You can
          read more about this behavior in the Qwik docs on{" "}
          <BlankLink
            href="https://qwik.dev/docs/api/#link"
            text="Link prefetching"
          />
          .
        </InfoBox2026>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/dashboard-2026/fetch-data-in-layout-2026.png"
            width="658"
          >
            <source
              src="/videos/2026/fetch-data-in-layout-2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            When the loader lives in <code>layout.tsx</code>, it can be
            triggered for dashboard child routes that share the same route
            boundary.
          </p>
        </figure>

        <p>
          This would make sense if all dashboard pages needed the same data.
        </p>

        <p>
          But in this application, the overview data is only needed on the
          dashboard home page. It would be better to trigger these requests only
          when the user navigates to <code>/dashboard/</code>.
        </p>

        <SubtitleWithAnchor
          title="📍 Moving the loader to index.tsx"
          id="moving-the-loader-to-index-tsx"
        />

        <p>
          To scope the requests more precisely, move the dashboard loaders from{" "}
          <code>layout.tsx</code> to <code>index.tsx</code>.
        </p>

        <p>
          Start by removing the <code>routeLoader$()</code> functions and their
          related imports from <code>src/routes/dashboard/layout.tsx</code>.
        </p>

        <p>
          Your shared layout should now only keep the dashboard structure and
          shared UI.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/layout.tsx

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
          text="src/routes/dashboard/layout.tsx"
        />

        <p>
          Then move those loaders into{" "}
          <code>src/routes/dashboard/index.tsx</code>, so the dashboard home
          page fetches its own data.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/lib/loaders";

export const useFetchRevenue = routeLoader$(async () => {
  console.log("Fetching revenue from the dashboard home page...");
  return fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return fetchLatestInvoices();
});

export const useFetchCardData = routeLoader$(async () => {
  return fetchCardData();
});

export default component$(() => {
  const revenue = useFetchRevenue();
  const latestInvoices = useFetchLatestInvoices();
  const cardData = useFetchCardData();

  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = cardData.value;

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue.value} />
        <LatestInvoices latestInvoices={latestInvoices.value} />
      </div>
    </main>
  );
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 53 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 24, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Now, the requests only run when the user navigates to the dashboard
          home page.
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/dashboard-2026/fetch-data-in-index-2026.png"
            width="658"
          >
            <source
              src="/videos/2026/fetch-data-in-index-2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            When the loaders live in <code>index.tsx</code>, the requests run
            only for the dashboard home page.
          </p>
        </figure>

        <SubtitleWithAnchor
          title="⚡ Avoiding unnecessary requests"
          id="avoiding-unnecessary-requests"
        />

        <p>
          This is a better fit for the dashboard overview. The revenue chart,
          latest invoices, and summary cards are only used on the home page, so
          the loaders should live there too.
        </p>

        <p>
          That does not mean <code>layout.tsx</code> is a bad place for loaders.
          If several child routes need the same shared data, placing the loader
          in the layout can still be the right choice.
        </p>

        <p>
          The goal is simply to match the loader location to the real scope of
          the data.
        </p>

        <Quiz
          question="What happens when dashboard loaders are placed in layout.tsx?"
          options={[
            {
              text: "They only run on the dashboard home page",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "They can run for any child route that shares the dashboard layout",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "They only run in the browser after the page renders",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "They stop working with routeLoader$()",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what a shared layout means in a route tree."
          responseText="Exactly. A loader in layout.tsx is scoped to the shared route boundary, so it can run for child routes that use that layout even when only one page actually needs the data."
        />

        <SubtitleWithAnchor
          title="🐢 Simulating a slow data fetch"
          id="simulating-a-slow-data-fetch"
        />

        <p>
          Moving loaders to the right route boundary is a good first step, but
          what happens if one request is slower than the others?
        </p>

        <p>Let&apos;s simulate a slow data fetch to see what happens.</p>

        <p>
          In <code>src/lib/loaders.ts</code>, add a delay of 3 seconds to the{" "}
          <code>fetchRevenue()</code> function.
        </p>

        <CodeBlock
          code={`// src/lib/loaders.ts

import { customers, invoices, revenue } from "~/data/placeholder-data";
import type { LatestInvoice, Revenue } from "~/types/placeholder-data-types";
import { formatCurrency } from "~/utils/utils";

export const fetchRevenue = async (): Promise<Revenue[]> => {
  // We artificially delay a response for demo purposes.
  // Don't do this in production :)
  console.log("Fetching revenue data...");
  
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Revenue data fetched after 3 seconds.");
  return revenue;
};

// ...rest of the file`}
          language="tsx"
          icon="typescript"
          text="src/lib/loaders.ts"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 13, character: 55 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Now open{" "}
          <BlankLink
            href="http://localhost:5173/dashboard/"
            text="http://localhost:5173/dashboard/"
          />{" "}
          in a new tab and notice how the page takes longer to load. In your
          terminal, you should also see the following messages:
        </p>

        <CodeBlock
          code={`Fetching revenue data...
Revenue data fetched after 3 seconds.`}
          displayCodeBlockHeader={false}
          displayCopyButtonAbsolute
        />

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/dashboard-2026/slow-data-fetch-2026.png"
            width="658"
          >
            <source
              src="/videos/2026/slow-data-fetch-2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            After adding a 3-second delay to <code>fetchRevenue()</code>, the
            whole page waits for the slow request before rendering.
          </p>
        </figure>

        <p>
          Here, you&apos;ve added an artificial 3-second delay to simulate a
          slow data fetch. The result is that the whole page now waits for that
          request before it can render.
        </p>

        <p>Which brings us to a common challenge developers have to solve:</p>

        <p>
          With dynamic rendering,{" "}
          <strong>
            your application is only as fast as your slowest data fetch.
          </strong>
        </p>

        <p>
          The solution to this problem is <strong>streaming</strong>.
        </p>

        <p>
          In the next chapter, you&apos;ll learn how to use streaming to improve
          the user experience while slower data is still loading.
        </p>

        <Quiz
          question="What is the effect of simulating a slow data fetch?"
          options={[
            {
              text: "The entire page load is delayed",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "Only the slow data is delayed",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "The data fetch is canceled",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "The page loads instantly",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what happens before the route can fully render."
          responseText="Exactly. Simulating a slow data fetch delays the entire page load because the route waits for the slow request before rendering."
        />

        <SubtitleWithAnchor title="Source code" level="h3" id="source-code" />

        <p>
          You can find the source code for chapter 9 2026 Edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-9-Optimizing-Data-Fetching"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={9}
          text="Nice! You've learned how to load dashboard data at the right route boundary in Qwik."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={10}
          title="Streaming"
          text="Learn how to keep the UI responsive while slower data is still loading."
        />
      </div>
    </>
  );
});
