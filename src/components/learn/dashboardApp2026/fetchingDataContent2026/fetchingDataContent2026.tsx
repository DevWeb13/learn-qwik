// src/components/learn/dashboardApp2026/fetchingDataContent2026/fetchingDataContent2026.tsx

import { component$, useSignal } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

import DashboardPageWithAllTheDataFetched2026 from "~/assets/img/dashboard-2026/dashboard-page-with-all-the-data-fetched-2026.png?jsx";
import LatestInvoices2026 from "~/assets/img/dashboard-2026/latest-invoices-2026.png?jsx";
import RevenueChart2026 from "~/assets/img/dashboard-2026/revenue-chart-2026.png?jsx";

import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import { FetchDataCardsSoluce } from "./fetchDataCardsSoluce2026";

export const FetchingDataContent2026 = component$(() => {
  const fetchDataCardsSoluceDisplay = useSignal(false);

  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you optimized image loading in your Qwik
          application. Now let&apos;s move to the dashboard and start loading
          data into the page.
        </p>

        <p>
          In this chapter, you&apos;ll learn how to fetch dashboard data with{" "}
          <code>routeLoader$()</code>. The data comes from local TypeScript
          files, and the loading logic lives in dedicated helper functions.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Different ways to fetch data in Qwik",
              emoji: "🧭",
              anchor: "different-ways-to-fetch-data-in-qwik",
            },
            {
              title: "Local dashboard data files",
              emoji: "🧪",
              anchor: "local-dashboard-data-files",
            },
            {
              title: "Preparing mocked dashboard data",
              emoji: "📦",
              anchor: "preparing-mocked-dashboard-data",
            },
            {
              title: "Revenue chart",
              emoji: "📈",
              anchor: "revenue-chart",
            },
            {
              title: "Latest invoices",
              emoji: "🧾",
              anchor: "latest-invoices",
            },
            {
              title: "Dashboard cards",
              emoji: "🃏",
              anchor: "dashboard-cards",
            },
            {
              title: "Parallel dashboard loading",
              emoji: "⚡",
              anchor: "parallel-dashboard-loading",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🧭 Different ways to fetch data in Qwik"
          id="different-ways-to-fetch-data-in-qwik"
        />

        <p>
          In Qwik, data can be loaded in different ways depending on where the
          logic should run and how the UI should receive the result.
        </p>

        <ul>
          <li>
            <strong>API endpoints</strong> are useful when your frontend needs
            to call a dedicated server-side layer.
          </li>
          <li>
            <strong>
              <code>server$()</code>
            </strong>{" "}
            lets you run server-only logic directly from Qwik.
          </li>
          <li>
            <strong>
              <code>routeLoader$()</code>
            </strong>{" "}
            loads data for a route before the component renders.
          </li>
          <li>
            <strong>
              <code>useResource$()</code>
            </strong>{" "}
            is useful when a component needs to handle asynchronous data
            directly in the UI. You&apos;ll use it later in the course.
          </li>
        </ul>

        <p>
          These tools solve different problems. In this chapter, the practical
          focus is on <code>routeLoader$()</code>, because it is a strong fit
          for loading a dashboard page before rendering.
        </p>

        <SubtitleWithAnchor
          title="🧪 Local dashboard data files"
          id="local-dashboard-data-files"
        />

        <p>
          For this chapter, you&apos;ll work with two local TypeScript files:
          one for the dashboard data and one for the TypeScript types used to
          describe that data.
        </p>

        <p>
          Inside the <code>src</code> folder, create a <code>data</code>{" "}
          directory, then place the file here:
        </p>

        <ul>
          <li>
            <a
              href="/downloads/2026/placeholder-data.ts"
              download="placeholder-data.ts"
            >
              <code>placeholder-data.ts 💾</code>
            </a>
          </li>
        </ul>

        <p>
          Inside the <code>src</code> folder, create a <code>types</code>{" "}
          directory, then place the file here:
        </p>

        <ul>
          <li>
            <a
              href="/downloads/2026/placeholder-data-types.ts"
              download="placeholder-data-types.ts"
            >
              <code>placeholder-data-types.ts 💾</code>
            </a>
          </li>
        </ul>

        <p>Place them in the following locations:</p>

        <ul>
          <li>
            <code>src/data/placeholder-data.ts</code>
          </li>
          <li>
            <code>src/types/placeholder-data-types.ts</code>
          </li>
        </ul>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          In this chapter, the data already exists. Your job is to load it
          cleanly with Qwik and pass it to the dashboard components.
        </InfoBox2026>

        <p>
          The <code>placeholder-data.ts</code> file contains dashboard data such
          as <code>customers</code>, <code>invoices</code>, and{" "}
          <code>revenue</code>.
        </p>

        <p>
          For example, each invoice object already has the shape you&apos;ll use
          throughout the dashboard:
        </p>

        <CodeBlock
          text="src/data/placeholder-data.ts"
          icon="typescript"
          language="typescript"
          code={`const invoices: Invoice[] = [
  {
    id: "9f1c2a44-7d8b-4c91-a2b3-1f3e9a7b6c01",
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2026-01-12",
  },
  {
    id: "2c7e5d90-1a3f-4e88-b7c4-9d1f0a6e2b11",
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2026-02-03",
  },
];`}
        />

        <p>
          The <code>placeholder-data-types.ts</code> file defines the TypeScript
          types used to describe the shape of that data.
        </p>

        <p>
          For example, the <code>Invoice</code> type makes the expected
          structure explicit:
        </p>

        <CodeBlock
          text="src/types/placeholder-data-types.ts"
          icon="typescript"
          language="typescript"
          code={`export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: "pending" | "paid";
};`}
        />

        <p>
          These types make the data shape clear before the data reaches your
          route or your components.
        </p>

        <Quiz
          question="What do these two local files provide for this chapter?"
          options={[
            {
              text: "A required replacement for routeLoader$()",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "The dashboard data and the TypeScript types used to describe it",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "A way to skip structuring the loader logic",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "A database connection for the dashboard route",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="One file contains the data. The other describes its shape."
          responseText="Exactly. placeholder-data.ts contains the dashboard data, and placeholder-data-types.ts describes that data with TypeScript types."
        />

        <SubtitleWithAnchor
          title="📦 Preparing mocked dashboard data"
          id="preparing-mocked-dashboard-data"
        />

        <p>
          First, inside the <code>src</code> folder, create a <code>utils</code>{" "}
          directory, then place the file here:
        </p>

        <ul>
          <li>
            <a href="/downloads/2026/utils.ts" download="utils.ts">
              <code>utils.ts 💾</code>
            </a>
          </li>
        </ul>

        <p>
          This file groups small reusable helpers for the dashboard, such as
          formatting currency, formatting dates, generating chart labels, and
          building pagination ranges.
        </p>

        <p>
          Next, inside the <code>src</code> folder, create a <code>lib</code>{" "}
          directory, create a new file called <code>loaders.ts</code>, and add
          the following code:
        </p>

        <CodeBlock
          code={`// src/lib/loaders.ts

import { customers, invoices, revenue } from "~/data/placeholder-data";
import type { LatestInvoice, Revenue } from "~/types/placeholder-data-types";
import { formatCurrency } from "~/utils/utils";

export const fetchRevenue = async (): Promise<Revenue[]> => {
  return revenue;
};

export const fetchLatestInvoices = async (): Promise<LatestInvoice[]> => {
  const sortedInvoices = [...invoices].sort((firstInvoice, secondInvoice) => {
    return (
      new Date(secondInvoice.date).getTime() -
      new Date(firstInvoice.date).getTime()
    );
  });

  const latestInvoices = sortedInvoices.slice(0, 5).map((invoice) => {
    const customer = customers.find(
      (currentCustomer) => currentCustomer.id === invoice.customer_id,
    );

    if (!customer) {
      throw new Error(\`Customer not found for invoice \${invoice.id}\`);
    }

    return {
      id: invoice.id,
      name: customer.name,
      email: customer.email,
      image_url: customer.image_url,
      amount: formatCurrency(invoice.amount),
    };
  });

  return latestInvoices;
};

export const fetchCardData = async () => {
  const numberOfInvoices = invoices.length;
  const numberOfCustomers = customers.length;

  const totalPaidInvoicesAmount = invoices.reduce((total, invoice) => {
    if (invoice.status !== "paid") {
      return total;
    }

    return total + invoice.amount;
  }, 0);

  const totalPendingInvoicesAmount = invoices.reduce((total, invoice) => {
    if (invoice.status !== "pending") {
      return total;
    }

    return total + invoice.amount;
  }, 0);

  const totalPaidInvoices = formatCurrency(totalPaidInvoicesAmount);
  const totalPendingInvoices = formatCurrency(totalPendingInvoicesAmount);

  return {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  };
};`}
          icon="typescript"
          language="typescript"
          text="src/lib/loaders.ts"
        />

        <p>Here are the main ideas in this file:</p>

        <ul>
          <li>
            <strong>Keeping dashboard logic in one place:</strong> the helper
            functions centralize the data loading and shaping logic.
          </li>
          <li>
            <strong>Fetching revenue data:</strong> <code>fetchRevenue()</code>{" "}
            returns the revenue data for the chart.
          </li>
          <li>
            <strong>Fetching latest invoices:</strong>{" "}
            <code>fetchLatestInvoices()</code> sorts the invoices by date, takes
            the five most recent entries, joins them with the matching customer
            data, and formats the amount for display.
          </li>
          <li>
            <strong>Fetching card data:</strong> <code>fetchCardData()</code>{" "}
            prepares the totals needed by the dashboard cards.
          </li>
          <li>
            <strong>Using shared utilities:</strong>{" "}
            <code>formatCurrency()</code> comes from <code>utils.ts</code> and
            converts raw amounts into display-ready currency strings.
          </li>
        </ul>

        <SubtitleWithAnchor title="📈 Revenue chart" id="revenue-chart" />

        <SubtitleWithAnchor
          title="Fetching data for <RevenueChart/>"
          id="fetching-data-for-<revenuechart/>"
          level="h3"
        />

        <p>
          In <code>src/routes/dashboard/layout.tsx</code>, import the{" "}
          <code>fetchRevenue()</code> function you created in{" "}
          <code>src/lib/loaders.ts</code>.
        </p>

        <p>
          In Qwik, you can use the{" "}
          <BlankLink
            href="https://qwik.dev/docs/route-loader/"
            text="routeLoader$()"
          />{" "}
          function to load data for a route before it renders.
        </p>

        <p>
          Here, the loader calls <code>fetchRevenue()</code> and makes the
          result available to the dashboard route.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { fetchRevenue } from "~/lib/loaders";

export const useFetchRevenue = routeLoader$(async () => {
  return fetchRevenue();
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
              start: { line: 5, character: 0 },
              end: { line: 5, character: 45 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 9, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          In this snippet, <code>useFetchRevenue()</code> uses{" "}
          <code>routeLoader$()</code> to load the revenue data before the route
          renders.
        </p>

        <p>
          <code>routeLoader$()</code> runs on the server, so the data is ready
          for your Qwik components when the page loads.
        </p>

        <p>
          For this chapter, you declare and export the loader from{" "}
          <code>src/routes/dashboard/layout.tsx</code>, which makes the loaded
          data available across the dashboard route structure.
        </p>

        <p>
          For more information about <code>routeLoader$()</code>, check the{" "}
          <BlankLink
            href="https://qwik.dev/docs/route-loader/"
            text="Qwik documentation"
          />
          .
        </p>

        <SubtitleWithAnchor
          title="Displaying data for <RevenueChart/>"
          id="displaying-data-for-<revenuechart/>"
          level="h3"
        />

        <p>
          Before updating the dashboard page, download the{" "}
          <code>revenue-chart.tsx</code> component and place it in{" "}
          <code>src/components/ui/dashboard/</code>.
        </p>

        <ul>
          <li>
            <a
              href="/downloads/2026/revenue-chart.tsx"
              download="revenue-chart.tsx"
            >
              <code>revenue-chart.tsx 💾</code>
            </a>
          </li>
        </ul>

        <p>
          This component is responsible for rendering the revenue chart from the
          data you pass to it.
        </p>

        <p>
          To display data for the <code>&lt;RevenueChart/&gt;</code> component,
          import <code>useFetchRevenue()</code> from <code>./layout</code> and
          use it inside <code>src/routes/dashboard/index.tsx</code>.
        </p>

        <p>
          At this stage, the loader only provides <code>revenue</code>, so the
          page will only render the revenue chart for now.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { useFetchRevenue } from "./layout";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";

export default component$(() => {
  const revenue = useFetchRevenue();

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue.value} />
      </div>
    </main>
  );
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          Here, <code>useFetchRevenue()</code> gives the page access to the
          revenue data loaded in <code>layout.tsx</code>.
        </p>

        <p>
          Then, check your localhost. You should be able to see a chart using
          the <code>revenue</code> data.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <RevenueChart2026
            alt="Revenue chart showing the total revenue for the last 12 months"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>Let&apos;s continue loading more dashboard data.</p>

        <SubtitleWithAnchor title="🧾 Latest invoices" id="latest-invoices" />

        <SubtitleWithAnchor
          title="Fetching data for <LatestInvoices/>"
          id="fetching-data-for-<latestinvoices/>"
          level="h3"
        />

        <p>
          In <code>src/routes/dashboard/layout.tsx</code>, import the{" "}
          <code>fetchLatestInvoices()</code> function you created in{" "}
          <code>src/lib/loaders.ts</code>.
        </p>

        <p>
          Just like the revenue data, you can load the latest invoices with{" "}
          <code>routeLoader$()</code> before the dashboard route renders.
        </p>

        <p>
          Qwik allows multiple <code>routeLoader$()</code> functions in the same
          file. That works well here because each part of the dashboard can keep
          its own loader instead of being merged into one larger loader.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { fetchLatestInvoices, fetchRevenue } from "~/lib/loaders";

export const useFetchRevenue = routeLoader$(async () => {
  return fetchRevenue();
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  return fetchLatestInvoices();
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
              start: { line: 5, character: 0 },
              end: { line: 5, character: 66 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 11, character: 0 },
              end: { line: 13, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Here, <code>useFetchLatestInvoices()</code> loads the latest invoice
          data for the dashboard route.
        </p>

        <p>
          The loader returns the result of <code>fetchLatestInvoices()</code>,
          so the page can read that data with the loader hook.
        </p>

        <p>
          At this point, <code>layout.tsx</code> exports one loader for revenue
          and one loader for the latest invoices.
        </p>

        <SubtitleWithAnchor
          title="Displaying data for <LatestInvoices/>"
          id="displaying-data-for-<latestinvoices/>"
          level="h3"
        />

        <p>
          Before updating the dashboard page, download the{" "}
          <code>latest-invoices.tsx</code> component and place it in{" "}
          <code>src/components/ui/dashboard/</code>.
        </p>

        <ul>
          <li>
            <a
              href="/downloads/2026/latest-invoices.tsx"
              download="latest-invoices.tsx"
            >
              <code>latest-invoices.tsx 💾</code>
            </a>
          </li>
        </ul>

        <p>
          This component renders the latest invoices list, including the
          customer image, name, email, and formatted amount.
        </p>

        <p>
          To display the customer images used in the latest invoices section,
          download <code>customers.zip</code>, unzip it, and place the extracted
          folder in the <code>public</code> folder.
        </p>

        <ul>
          <li>
            <a href="/downloads/customers.zip" download="customers.zip">
              <code>customers.zip 💾</code>
            </a>
          </li>
        </ul>

        <p>
          To display data for the <code>&lt;LatestInvoices/&gt;</code>{" "}
          component, import <code>useFetchLatestInvoices()</code> from{" "}
          <code>./layout</code> and use it inside{" "}
          <code>src/routes/dashboard/index.tsx</code>.
        </p>

        <p>
          The page can now read both the revenue data and the latest invoices
          loaded by the route loaders.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { useFetchLatestInvoices, useFetchRevenue } from "./layout";

export default component$(() => {
  const revenue = useFetchRevenue();
  const latestInvoices = useFetchLatestInvoices();

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

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
              start: { line: 5, character: 0 },
              end: { line: 5, character: 67 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 9, character: 50 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 17, character: 0 },
              end: { line: 17, character: 64 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Here, <code>useFetchLatestInvoices()</code> gives the page access to
          the latest invoice data loaded in <code>layout.tsx</code>.
        </p>

        <p>
          The <code>&lt;LatestInvoices/&gt;</code> component then receives that
          data through its <code>latestInvoices</code> prop.
        </p>

        <p>
          Then, check your localhost. You should now be able to see the latest
          invoices displayed on the dashboard.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <LatestInvoices2026
            alt="Latest invoices section displaying customer images, names, emails, and invoice amounts"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor title="🃏 Dashboard cards" id="dashboard-cards" />

        <p>
          Now it&apos;s your turn to fetch data for the{" "}
          <code>&lt;Card&gt;</code> components. The cards will display the
          following data:
        </p>

        <ul>
          <li>Total amount of invoices collected.</li>
          <li>Total amount of invoices pending.</li>
          <li>Total number of invoices.</li>
          <li>Total number of customers.</li>
        </ul>

        <p>
          The shaping logic already lives in <code>fetchCardData()</code>.
        </p>

        <p>
          Instead of calculating these values directly inside the page
          component, keep the logic inside <code>src/lib/loaders.ts</code> and
          load the result with <code>routeLoader$()</code>.
        </p>

        <p>
          The function you need to use is called <code>fetchCardData()</code>.
          It returns the values needed by the dashboard cards.
        </p>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Hint:</strong>
          </p>
          <ul>
            <li>
              Check the <code>loaders.ts</code> file to see what{" "}
              <code>fetchCardData()</code> returns.
            </li>
            <li>
              Import <code>fetchCardData()</code> into your{" "}
              <code>layout.tsx</code> file and use it in a{" "}
              <code>routeLoader$()</code>.
            </li>
            <li>
              Use that loader in <code>index.tsx</code> to display the data in
              the <code>&lt;Card&gt;</code> components.
            </li>
          </ul>
        </blockquote>

        <p>
          To complete this practice, download the <code>cards.tsx</code>{" "}
          component and place it in <code>src/components/ui/dashboard/</code>.
        </p>

        <ul>
          <li>
            <a href="/downloads/2026/cards.tsx" download="cards.tsx">
              <code>cards.tsx 💾</code>
            </a>
          </li>
        </ul>

        <p>
          This component renders the summary cards at the top of the dashboard.
          Your job here is to load the values it needs and pass them in.
        </p>

        <p>
          Once you&apos;re ready, expand the toggle below for the final code:
        </p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-5.25 md:-mx-15.5 md:rounded-2xl md:p-4 md:px-15.5 md:py-12">
          <button
            class="button_base reset_reset button_button geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (fetchDataCardsSoluceDisplay.value =
                !fetchDataCardsSoluceDisplay.value)
            }
          >
            <span class="button_prefix">
              {fetchDataCardsSoluceDisplay.value ? (
                <EyeBarredSvg />
              ) : (
                <EyeSvg />
              )}
            </span>
            <span class="button_content">
              {fetchDataCardsSoluceDisplay.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {fetchDataCardsSoluceDisplay.value && <FetchDataCardsSoluce />}
        </div>

        <p>
          Great. You&apos;ve now fetched all the data for the dashboard overview
          page.
        </p>

        <p>Your page should look like this:</p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DashboardPageWithAllTheDataFetched2026
            alt="Dashboard page displaying cards, a revenue chart, and the latest invoices"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="⚡ Parallel dashboard loading"
          id="parallel-dashboard-loading"
        />

        <p>
          At this point, your dashboard uses three separate{" "}
          <code>routeLoader$()</code> functions:
        </p>

        <ul>
          <li>
            <code>useFetchRevenue()</code>
          </li>
          <li>
            <code>useFetchLatestInvoices()</code>
          </li>
          <li>
            <code>useFetchCardData()</code>
          </li>
        </ul>

        <p>
          This is a good fit here because these three data needs are
          independent.
        </p>

        <p>
          Each loader does one job, keeps the code easier to read, and avoids
          turning the dashboard into one larger loader with mixed
          responsibilities.
        </p>

        <p>
          For comparison, this is what the same dashboard logic would look like
          if those independent requests were awaited one after another inside a
          single loader:
        </p>

        <CodeBlock
          code={`// Sequential pattern inside a single loader
const sequentialDashboardLoader = async () => {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const cardData = await fetchCardData();

  return { revenue, latestInvoices, cardData };
};`}
          language="tsx"
          icon="typescript"
          text="Comparison example"
          hideLineNumbers
        />

        <p>
          This kind of step-by-step loading is often called a request waterfall.
        </p>

        <p>
          A waterfall is useful when one request depends on the result of
          another. But that is not the case here. The revenue chart, the latest
          invoices, and the dashboard cards can all be loaded independently.
        </p>

        <p>
          If you wanted to keep a single loader, you would usually start those
          independent requests in parallel with <code>Promise.all()</code>:
        </p>

        <CodeBlock
          code={`// Parallel pattern inside a single loader
const parallelDashboardLoader = async () => {
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);

  return { revenue, latestInvoices, cardData };
};`}
          language="tsx"
          icon="typescript"
          text="Comparison example"
          hideLineNumbers
        />

        <p>
          For this dashboard page, the recommended approach remains the one used
          above: separate <code>routeLoader$()</code> functions for each
          independent data need.
        </p>

        <Quiz
          question="Why are three separate routeLoader$() functions a good fit for this dashboard page?"
          options={[
            {
              text: "Because routeLoader$() can only return one value at a time",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because Qwik only allows one component per loader",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Because each loader handles one independent data need and avoids unnecessary sequential loading",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Because separate loaders run only in the browser",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about responsibility and independence."
          responseText="Exactly. These dashboard requests are independent, so splitting them into separate route loaders keeps the code clearer and avoids unnecessary sequential loading."
        />

        <p>
          This chapter gave you a clean foundation for the dashboard page: route
          loaders fetch the data, helper functions shape it, and each component
          receives only what it needs.
        </p>

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended-reading"
          level="h3"
        />

        <p>
          Here are a few useful references if you want to explore route-based
          data loading in more detail.
        </p>

        <ul>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/route-loader/"
              text="Qwik Docs | routeLoader$()"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/server$/"
              text="Qwik Docs | server$()"
            />
          </li>
          <li>
            <BlankLink
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
              text="MDN | Promise.all()"
            />
          </li>
        </ul>

        <SubtitleWithAnchor title="Source code" level="h3" id="source-code" />

        <p>
          You can find the source code for chapter 8 2026 Edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-8-Fetching-Data"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={8}
          text="You've learned how to load dashboard data with routeLoader$()."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={9}
          title="Optimizing Data Fetching"
          text="Learn how to move loaders to the right route boundary and trigger requests only when needed."
        />
      </div>
    </>
  );
});
