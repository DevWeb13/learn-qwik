// src/components/learn/dashboardApp/optimizingDataFetch/optimizingDataFetch.tsx

import { component$ } from "@builder.io/qwik";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
// import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

import FetchParallelTime from "~/assets/img/fetchParallelTime.png?jsx";
import FetchParallelTimeWithPromiseAll from "~/assets/img/fetchParallelTimeWithPromiseAll.png?jsx";
import FetchSequentialTime from "~/assets/img/fetchSequentialTime.png?jsx";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { Quiz } from "~/components/UI/quiz/quiz";

export const OptimizingDataFetchingContent2026 = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={8} chapterTitle="Optimizing Data Fetching" />
        <p>
          In the previous chapter, you fetched data for the Dashboard page.
          However the data requests are creating an unintentional waterfall.
        </p>
        <TableOfTopicsCovered
          topics={[
            {
              title:
                "How to reduce data fetching time by passing requests in parallel",
              icon: "database",
            },
            {
              title: "How to trigger data requests only when necessary",
              icon: "server",
            },
            {
              title: "Simulate a slow data fetch to see what happens.",
              icon: "clock",
            },
          ]}
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Parallel Data Fetching"
          id="parallel-data-fetching"
        />
        <p>
          With <code>routeLoader$</code> the page is render blocking until all
          the data is fetched. It is important to reduce the data fetching time.
          To do this, we can fetch data in parallel.
        </p>
        <p>
          For the moment with sequential data fetching, in your application, the{" "}
          <code>useFetchData()</code> request time is 1.23s. We can reduce this
          time by fetching data in parallel. 👇
        </p>
        <blockquote class="p-3 pt-5 text-sm">
          <p>
            <strong>Note: </strong>
            The request time may vary depending on your internet connection and
            your computer's speed.
          </p>
        </blockquote>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <FetchSequentialTime
            alt="Time taken to fetch data sequentially"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>Now let's move on to setting up parallel data loading.</p>
        <p>To pass the requests in parallel, we have several choices:</p>
        <ul>
          <li>
            <code>Promise.all()</code> - Combine multiple promises into a single
            promise.
          </li>
          <li>
            <code>Promise.allSettled()</code> - Wait for all promises to be
            settled.
          </li>
          <li>
            Using multiple <code>routeLoader$</code> - One for each request.🤔
          </li>
        </ul>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Multiple routeLoader$"
          id="multiple-routeloader"
          level="h3"
        />
        <p>
          Multiple <code>routeLoader$</code> are allowed across the whole
          application, and they can be used in any Qwik Component.{" "}
          <strong>
            You can even declare multiple <code>routeLoader$</code> in the same
            file
          </strong>
          .
        </p>
        <p>
          Let's create three new <code>routeLoader$</code> functions to fetch
          the data in parallel:
        </p>
        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  return {
    revenue: await fetchRevenue(),
    latestInvoices: await fetchLatestInvoices(),
    cardData: await fetchCardData(),
  };
});

export const useFetchRevenue = routeLoader$(async () => {
  return await fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return await fetchLatestInvoices();
});

export const useFetchCardData = routeLoader$(async () => {
  return await fetchCardData();
});

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
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 13, character: 3 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 15, character: 0 },
              end: { line: 25, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          We have created three new <code>routeLoader$</code> functions to fetch
          the data in parallel. Now let's update the{" "}
          <code>src/routes/dashboard/index.tsx</code> file to use these new
          routeLoaders.
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";

import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { useFetchData } from "./layout";
import {
  useFetchRevenue,
  useFetchLatestInvoices,
  useFetchCardData,
} from "./layout";

export default component$(() => {
  const { revenue, latestInvoices, cardData } = useFetchData().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;
  const revenue = useFetchRevenue().value;
  const latestInvoices = useFetchLatestInvoices().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = useFetchCardData().value;

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
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 40 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 8, character: 0 },
              end: { line: 12, character: 18 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 15, character: 0 },
              end: { line: 15, character: 69 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 16, character: 0 },
              end: { line: 29, character: 31 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, with the new <code>routeLoader$</code> functions, the data is
          fetched in parallel. This reduces the time taken to fetch the data.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <FetchParallelTime
            alt="Time taken to fetch data in parallel"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          The time taken to fetch the data in parallel is now 0.448s (The
          longest request time). This is a significant improvement over the
          previous 1.23s. 🚀
        </p>
        <p>
          An advantage of using <code>routeLoader$</code>
          for each request, in addition to reducing the data fetching time, is
          to separate the data based on their usage. This is particularly useful
          if you need to use only certain data in a specific page or component.
        </p>
        <p>
          Again, all of this will depend on your application and your needs.
        </p>
        <p>
          For our dashboard, we need all the data for our page, so we will use
          only one <code>routeLoader$</code> for all the data. To do this, we
          will use <code>Promise.all()</code> to combine the three requests into
          one.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <Quiz
          question="What is the advantage of using multiple routeLoader$?"
          options={[
            {
              text: "Improve the performance of the application",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Separate the data based on their usage",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Improve the user experience",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Reduce the number of requests",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about the data you need for your application."
          responseText="The advantage of using multiple routeLoader$ is to separate the data based on their usage."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Promise.all()" id="promise-all" level="h3" />
        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchRevenue = routeLoader$(async () => {
  return await fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return await fetchLatestInvoices();
});

export const useFetchCardData = routeLoader$(async () => {
  return await fetchCardData();
});

export const useFetchData = routeLoader$(async () => {
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  return { revenue, latestInvoices, cardData };
});

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
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 17, character: 3 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 19, character: 0 },
              end: { line: 26, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";

import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import {
  useFetchRevenue,
  useFetchLatestInvoices,
  useFetchCardData,
} from "./layout";
import { useFetchData } from "./layout";

export default component$(() => {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;
  const revenue = useFetchRevenue().value;
  const latestInvoices = useFetchLatestInvoices().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = useFetchCardData().value;
  const { revenue, latestInvoices, cardData } = useFetchData().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;

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
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 11, character: 18 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 12, character: 0 },
              end: { line: 12, character: 40 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 15, character: 0 },
              end: { line: 28, character: 31 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 29, character: 0 },
              end: { line: 35, character: 15 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          One request is now sent to fetch all the data. The loading time of
          this request is the same as the previous one, 0.45s.👇
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <FetchParallelTimeWithPromiseAll
            alt="Time taken to fetch data in parallel with Promise.all()"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <Quiz
          question="What is the purpose of using Promise.all() in data fetching?"
          options={[
            {
              text: "To execute multiple promises sequentially",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "To execute multiple promises in parallel",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "To execute only the first promise",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "To cancel all promises",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about how to optimize the time taken to fetch data."
          responseText="The purpose of using Promise.all() is to execute multiple promises in parallel."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Triggering Data Requests"
          id="triggering-data-requests"
        />

        <p>
          We placed our <code>routeLoader$</code> in the <code>layout</code>,
          this means the request is sent every time the route is loaded (and
          even before...). The problem here is that the request will be
          triggered when navigating to all dashboard tabs.
        </p>

        <p>
          In the <code>/src/routes/dashboard/layout.tsx</code> file, add a{" "}
          <code>console.log</code> to see when the request is triggered.
        </p>
        <CodeBlock
          code={`export const useFetchData = routeLoader$(async () => {
  console.log("fetching data");
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  return { revenue, latestInvoices, cardData };
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/layout.tsx"
          decorations={[
            {
              start: { line: 1, character: 0 },
              end: { line: 1, character: 31 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Open the browser, when hovering over any dashboard tab, the request is
          triggered.👇
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/fetchDataInLayout.png"
            width="658"
          >
            <source src="/videos/fetchDataInLayout.mp4" type="video/mp4" />
          </video>
          <p class=" text-sm">
            When our routeLoader$ is in layout, the data request is triggered
            when hovering over any dashboard tab.
          </p>
        </figure>
        <p>
          This behavior would be appropriate if we needed this data for all the
          dashboard tabs.
        </p>

        <p>
          As a reminder, in our application we only need this data for the
          dashboard home page. It would be better if the request is triggered
          only when the user navigates to the dashboard home page.
        </p>

        <p>
          To trigger the <code>routeLoader$</code> only when necessary, simply
          move it to our <code>src/routes/dashboard/index.tsx</code> file.
        </p>

        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  console.log("fetching data");
  return {
    revenue: await fetchRevenue(),
    latestInvoices: await fetchLatestInvoices(),
    cardData: await fetchCardData(),
  };
});

export default component$(() => {
  // ...
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/layout.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 53 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 78 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 14, character: 3 },
              properties: { class: "deleteLine" },
            },
          ]}
        />
        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";

import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  console.log("fetching data");
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  return { revenue, latestInvoices, cardData };
});

export default component$(() => {
  const { revenue, latestInvoices, cardData } = useFetchData().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;

  return (
    // ...
  );
});`}
          language="tsx"
          icon="typescript"
          text="/src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 8, character: 78 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 10, character: 0 },
              end: { line: 18, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Now, the request is only triggered when the user navigates to the
          dashboard home page.👇
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/fetchDataInIndex.png"
            width="658"
          >
            <source src="/videos/fetchDataInIndex.mp4" type="video/mp4" />
          </video>
          <p class=" text-sm">
            When our routeLoader$ is in index, the data request is triggered
            only when navigating to the dashboard home page.
          </p>
        </figure>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <Quiz
          question="What happens when routeLoader$ is placed in the layout?"
          options={[
            {
              text: "Data is fetched only once",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Data is fetched every time the route is loaded",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Data is never fetched",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Data is fetched on client-side only",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Consider how often the layout is loaded in a typical navigation flow."
          responseText="When routeLoader$ is placed in the layout, data is fetched every time the route is loaded."
        />

        <p>
          Congratulations 🙌, you have now optimized the data loading by passing
          them in parallel and triggering the requests only when necessary.🏆
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Simulating Slow Data Fetch"
          id="simulating-slow-data-fetch"
        />
        <p>
          Récuperer les données en parrallele est une bonne premiere étape, mais
          que se passet il si une requete est plus lente que les autres?
        </p>
        <p>Let's simulate a slow data fetch to see what happens.👇</p>
        <p>
          In the <code>/src/lib/data.ts</code> file, add a delay of 3 seconds to
          the <code>fetchRevenue()</code> function.
        </p>

        <CodeBlock
          code={`// /src/lib/data.ts

// ... other code

export const fetchRevenue = server$(async function () {
  const pool = await getPool();
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const { rows } = await pool.query<Revenue>('SELECT * FROM revenue');

    console.log('Data fetch completed after 3 seconds.');

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data: ' + (error as Error).message);
  } finally {
    await pool.end(); // Ensure the connection is always closed
  }
});

// ... other code`}
          language="tsx"
          icon="typescript"
          text="/src/lib/data.ts"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 10, character: 62 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 14, character: 0 },
              end: { line: 14, character: 57 },
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
Data fetch completed after 3 seconds.`}
          displayCodeBlockHeader={false}
          displayCopyButtonAbsolute
        />
        <p>
          Here, you've added an artificial 3-second delay to simulate a slow
          data fetch. The result is that now your whole page is blocked while
          the data is being fetched.
        </p>
        <p>Which brings us to a common challenge developers have to solve:</p>
        <p>
          With dynamic rendering,{" "}
          <strong>
            your application is only as fast as your slowest data fetch.
          </strong>
        </p>
        <p>
          The soluce to this problem is <strong>Streaming</strong>
        </p>
        <p>
          In the next chapter, you'll learn how to use streaming to optimize
          user's experience.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

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
          hint="Think about the impact of a slow network request on page rendering."
          responseText="Simulating a slow data fetch delays the entire page load."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Source code" id="source-code" />
        <p>
          You can find the source code for chapter 8 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/16-chapter-8-static-and-dynamic-rendering"
            text="GitHub"
          />
          .
        </p>

        <div class="px-4 md:px-8">
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
          chapterNumber={8}
          text="Nice! You've learned about optimizing data fetching in Qwik."
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={9}
          title="Streaming 2026"
          text="Learn how to improve your user's experience by adding streaming."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
