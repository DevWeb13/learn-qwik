// src/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent.tsx

import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import { FetchDataCardsSoluce } from "./fetchDataCardsSoluce";

import DashboardPageWithAllTheDataFetched from "~/assets/img/dashboard-page-with-all-the-data-fetched.png?jsx";
import SequentialParallelDataFetching from "~/assets/img/sequential-parallel-data-fetching.avif?jsx";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";

import LatestInvoices from "~/assets/img/latestInvoices.png?jsx";
import RevenueChart from "~/assets/img/revenueChart.png?jsx";

export const FetchingDataContent = component$(() => {
  const fetchDataCardsSoluceDisplay = useSignal(false);
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={7}
          chapterTitle="Fetching Data from the Database"
        />
        <p>
          Now that you've created and seeded your database, let's discuss the
          different ways you can fetch data for your application, and build out
          your dashboard overview page.
        </p>

        <TableOfTopicsCovered
          topics={[
            {
              title:
                "Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.",
              icon: "database",
            },
            {
              title:
                "How server$() functions can be used to interact with your database",
              icon: "server",
            },
            {
              title:
                "How routeLoader$() functions can be used to fetch data for a route",
              icon: "relationPoint",
            },
            {
              title: "What network waterfalls are.",
              icon: "waterfall",
            },
            {
              title:
                "How to implement parallel data fetching using a JavaScript Pattern.",
              icon: "twoConnectedPoints",
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
            data-ad-slot="2172009093"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Choosing how to fetch data"
          id="choosing-how-to-fetch-data"
        />

        <SubtitleWithAnchor title="API layer" id="api-layer" level="h3" />

        <p>
          APIs are an intermediary layer between your application code and
          database. There are a few cases where you might use an API:
        </p>

        <ul>
          <li>If you're using 3rd party services that provide an API.</li>
          <li>
            If you're fetching data from the client, you want to have an API
            layer that runs on the server to avoid exposing your database
            secrets to the client.
          </li>
        </ul>

        <p>
          In Qwik, you can create API endpoints using{" "}
          <BlankLink href="https://qwik.dev/docs/endpoints/" text="Endpoints" />
          .
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="4497254685"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Database queries" id="database-queries" />

        <p>
          When you're developing a full-stack application with Qwik, you'll also
          need to write logic to interact with your database. For{" "}
          <BlankLink
            href="https://aws.amazon.com/relational-database/"
            text="relational databases"
          />{" "}
          like Postgres, this can be done with SQL or an{" "}
          <BlankLink
            text="ORM"
            href="https://vercel.com/docs/storage/vercel-postgres/using-an-orm"
          />{" "}
          like
          <BlankLink href="https://www.prisma.io/" text="Prisma" />.
        </p>

        <p>Here are a few cases where you'll need to write database queries:</p>

        <ul>
          <li>
            When creating your API endpoints, you need to write logic to
            interact with your database.
          </li>
          <li>
            With Qwik, using server functions like <code>`server$()`</code>, you
            can directly interact with your database without going through an
            external API layer, avoiding exposing your database secrets to the
            client.
          </li>
        </ul>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2121706502"
          ></ins>
        </div>

        <Quiz
          question="In which of these scenarios should you not query your database directly?"
          options={[
            {
              text: "When you're fetching data on the client",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "When you're fetching data on the server",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "When you're creating your own API layer to interact with your database",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "When you're using a crystal ball to predict the data – far less reliable and notably more mystical. 🔮",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about when you'd use an API layer."
          responseText="That's right, you should not query your database directly when fetching data on the client as this would expose your database secrets."
        />

        <p>
          Let's learn more about{" "}
          <BlankLink href="https://qwik.dev/docs/server$/" text="server$()" />{" "}
          functions.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8495543162"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Fetching data with server$() functions"
          id="fetching-data-with-server$()-functions"
          level="h3"
        />

        <p>
          In Qwik,{" "}
          <BlankLink href="https://qwik.dev/docs/server$/" text="`server$()`" />{" "}
          functions allow you to create server-side functions that execute
          solely on the server. This makes them an excellent choice for
          accessing databases or performing server-only tasks.
        </p>
        <ul>
          <li>
            <code>`server$()`</code> acts as an RPC (Remote Procedure Call)
            mechanism between the client and server, similar to a traditional
            HTTP endpoint but with strong typing thanks to TypeScript, which
            eases maintenance. 🛠️
          </li>
          <li>
            Additionally, <code>`server$()`</code> can read HTTP cookies,
            headers, or environment variables, offering versatile server-side
            functionality. 🌍
          </li>
          <li>
            <code>`server$()`</code> can accept any number of arguments and
            return any value that can be serialized by Qwik, including
            primitives, objects, arrays, big integers, JSX nodes, and even
            Promises. 📊
          </li>
        </ul>
        <p>
          This integrated approach in Qwik ensures efficient and secure data
          retrieval while optimizing client-server interactions for enhanced
          application performance. ⚡
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="3184173011"
          ></ins>
        </div>

        <Quiz
          question="What is the primary benefit of using server$() functions to fetch data?"
          options={[
            {
              text: "Strong typing thanks to TypeScript",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Efficient and secure data retrieval",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Versatile server-side functionality",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Enhancing client-server communication",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Consider which feature is most critical for data fetching specifically."
          responseText="Exactly! The primary benefit of using server$() functions to fetch data is efficient and secure data retrieval."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="6931846335"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Using SQL" id="summary" level="h3" />

        <p>
          For your dashboard project, you'll write database queries using the{" "}
          <BlankLink
            href="https://vercel.com/docs/storage/vercel-postgres/sdk"
            text="Vercel Postgres SDK"
          />{" "}
          and SQL. There are a few reasons why we'll be using SQL:
        </p>

        <ul>
          <li>
            SQL is the industry standard for querying relational databases (e.g.
            ORMs generate SQL under the hood).
          </li>
          <li>
            Having a basic understanding of SQL can help you understand the
            fundamentals of relational databases, allowing you to apply your
            knowledge to other tools.
          </li>
          <li>
            SQL is versatile, allowing you to fetch and manipulate specific
            data.
          </li>
          <li>
            The Vercel Postgres SDK provides protection against{" "}
            <BlankLink
              href="https://vercel.com/docs/storage/vercel-postgres/sdk#preventing-sql-injections"
              text="SQL injections"
            />
            .
          </li>
        </ul>

        <p>
          Don't worry if you haven't used SQL before - we have provided the
          queries for you.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="3944125884"
          ></ins>
        </div>

        <Quiz
          question="What does SQL allow you to do in terms of fetching data?"
          options={[
            {
              text: "Fetch all your data indiscriminately",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Fetch and manipulate specific data",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Fetch and manipulate specific data",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Fetch data from the future ⏭️",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about the flexibility of SQL."
          responseText="Correct! SQL allows you to fetch and manipulate specific data."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="6226674290"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Fetching specific data from @vercel/postgres database"
          id="fetching-specific-data-from-@vercel/postgres-database"
        />

        <p>
          In <code>`src/lib`</code> folder, create a new file called{" "}
          <code>{`data.ts`}</code> and add the following code:
        </p>

        <CodeBlock
          code={`// src/lib/data.ts

import { createPool } from '@vercel/postgres';
import { LatestInvoiceRaw, Revenue } from './definitions';
import { formatCurrency } from './utils';
import { server$ } from '@builder.io/qwik-city';

const getPool = server$(function () {

  const connectionString = this.env.get('POSTGRES_URL'); // Get the connection string from the environment variables
  if(!connectionString) throw new Error('POSTGRES_URL environment variable is not set');

  // Create a new pool with the connection string
  const pool = createPool({
    connectionString: connectionString,
  });

  if(!pool) throw new Error('Failed to create a new pool');

  return pool;
})

export const fetchRevenue = server$(async function () {
  // Open a new connection
  const pool = await getPool();
  try {
    const { rows } = await pool.query<Revenue>('SELECT * FROM revenue');
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data: ' + (error as Error).message);
  } finally {
    await pool.end(); // Ensure the connection is always closed
  }
});

export const fetchLatestInvoices = server$(async function () {
  const pool = await  getPool();
  try {
    const data = await pool.query<LatestInvoiceRaw>(\`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5\`);

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  } finally {
    await pool.end();
  }
});

export const fetchCardData = server$(async function () {  
  const pool = await  getPool();
  try {
    // You can probably combine these into a single pool.query query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const invoiceCountPromise = pool.query(\`SELECT COUNT(*) FROM invoices\`);
    const customerCountPromise = pool.query(\`SELECT COUNT(*) FROM customers\`);
    const invoiceStatusPromise = pool.query(\`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices\`);

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? '0');
    const numberOfCustomers = Number(data[1].rows[0].count ?? '0');
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  } finally {
    await pool.end();
  }
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/data.ts"
        />

        <blockquote class="p-3 pt-5 text-sm">
          <p>
            <strong>Note:</strong> If you used your own database provider in
            Chapter 6, you'll need to update the database queries to work with
            your provider.
          </p>
        </blockquote>

        <p>Here are some key points about this code:</p>

        <ul>
          <li>
            <strong>Creating a connection pool:</strong> The{" "}
            <code>`getPool`</code> function creates a connection pool using the
            connection string from the environment variables.
          </li>
          <li>
            <strong>server$():</strong> The <code>`server$()`</code> function is
            used to create server-side functions that interact with the
            database.
          </li>
          <li>
            <strong>Opening a connection:</strong> Each function opens a
            connection to the database before executing the query.
          </li>
          <li>
            <strong>Ending the connection:</strong> Each function closes the
            connection to the database after the query is complete.
          </li>
          <li>
            <strong>Fetching revenue data:</strong> The{" "}
            <code>`fetchRevenue`</code> function fetches revenue data from the
            database.
          </li>
          <li>
            <strong>Fetching latest invoices:</strong> The{" "}
            <code>`fetchLatestInvoices`</code> function fetches the latest
            invoices from the database.
          </li>
          <li>
            <strong>Fetching card data:</strong> The{" "}
            <code>`fetchCardData`</code> function fetches data for the cards on
            the dashboard.
          </li>
          <li>
            <strong>Handling errors:</strong> Each function catches any errors
            that occur during the database query and logs them to the console.
          </li>
          <li>
            <strong>Formatting currency:</strong> The{" "}
            <code>`formatCurrency`</code> function formats the currency amount
            for display, import from <code>{`utils.ts`}</code>.👇
          </li>
        </ul>

        <p>
          ⚠️ <strong>Download</strong> <code>{`utils.ts`}</code> file and place
          it in the <code>`src/lib/`</code> folder:
        </p>

        <ul>
          <li>
            <a href="/downloads/utils.ts" download="utils.ts">
              <code>utils.js 💾</code>
            </a>
          </li>
        </ul>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="3226904619"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Fetching data for the dashboard overview page"
          id="fetching-data-for-the-dashboard-overview-page"
        />

        <p>
          Now that you understand different ways of fetching data, let's fetch
          data for the dashboard overview page. Navigate to{" "}
          <code>`src/routes/dashboard/index.tsx`</code>, paste the following
          code, and spend some time exploring it:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";

export default component$(() => {

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue} /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/index.tsx"
        />

        <p>In the code above:</p>

        <ul>
          <li>
            There are also 3 components which receive data:{" "}
            <code>&lt;Card&gt;</code>, <code>&lt;RevenueChart&gt;</code>, and{" "}
            <code>&lt;LatestInvoices&gt;</code>. They are currently commented
            out to prevent the application from erroring.
          </li>
        </ul>

        <p>
          ⚠️ You must download the 3 components file and place it in the{" "}
          <code>`src/components/ui/dashboard/`</code> folder: 👇
        </p>

        <ul>
          <li>
            <a href="/downloads/revenue-chart.tsx" download="revenue-chart.tsx">
              <code>revenue-chart.tsx 💾</code>
            </a>
          </li>
          <li>
            <a href="/downloads/cards.tsx" download="cards.tsx">
              <code>cards.tsx 💾</code>
            </a>
          </li>
          <li>
            <a
              href="/downloads/latest-invoices.tsx"
              download="latest-invoices.tsx"
            >
              <code>latest-invoices.tsx 💾</code>
            </a>
          </li>
        </ul>

        <p>
          You can delete <code>`// @ts-nocheck`</code> line from the top of the
          file.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9366437981"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Fetching data for <RevenueChart/>"
          id="fetching-data-for-<revenuechart/>"
          level="h3"
        />

        <p>
          In <code>`src/routes/dashboard/layout.tsx`</code>, import{" "}
          <code>`fetchRevenue()`</code>
          functions you created in <code>{`src/lib/data.ts`}</code>
        </p>

        <p>
          In Qwik, you can use the{" "}
          <BlankLink
            href="https://qwik.dev/docs/route-loader/"
            text="routeLoader$"
          />{" "}
          function to load data for a route. This function is called on the
          server and client when the route is loaded, allowing you to fetch data
          for the route.
        </p>

        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  return {
    revenue: await fetchRevenue(),
  };
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
          text="src/routes/dashboard/layout.tsx"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 4, character: 0 },
              // end at the end of the line
              end: { line: 5, character: 42 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 7, character: 0 },
              // end at the end of the line
              end: { line: 11, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          In this code snippet, the <code>`useFetchData()`</code> function uses
          the <code>`routeLoader$`</code> function to fetch revenue data from
          the database.
        </p>

        <p>
          <code>`routeLoader$`</code> load data in the server so it becomes
          available to use inside Qwik Components. They trigger when SPA/MPA
          navigation happens so they can be invoked by Qwik Components during
          rendering.
        </p>

        <p>
          <code>`routeLoader$`</code> can only be declared inside the{" "}
          <code>src/routes</code> folder, in a <code>layout.tsx</code> or{" "}
          <code>index.tsx</code>file, and they <strong>MUST</strong> be
          exported.
        </p>

        <p>
          For more information on <code>`routeLoader$`</code>, check out the{" "}
          <BlankLink
            href="https://qwik.dev/docs/route-loader/"
            text="Qwik documentation"
          />
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="5185055365"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Diplaying data for <RevenueChart/>"
          id="displaying-data-for-<revenuechart/>"
          level="h3"
        />

        <p>
          To displaying data for the <code>&lt;RevenueChart/&gt;</code>{" "}
          component, import the <code>useFetchRevenue()</code> function from{" "}
          <code>./layout</code> and call it inside your component:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { useFetchData } from "./layout";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { Card } from "~/components/ui/dashboard/cards";

export default component$(() => {
  const { revenue } = useFetchData().value;
  // ...
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 40 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 9, character: 43 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Then, uncomment the <code>&lt;RevenueChart/&gt;</code> component.
          Check your localhost, you should be able to see a chart that uses{" "}
          <code>revenue</code> data.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <RevenueChart
            alt="Revenue chart showing the total revenue for the last 12 months"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>Let's continue importing some more data queries!</p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="6165559572"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Fetching data for <LatestInvoices/>"
          id="fetching-data-for-<latestinvoices/>"
          level="h3"
        />

        <p>
          For the <code>&lt;LatestInvoices /&gt;</code> component, we need to
          get the latest 5 invoices, sorted by date.
        </p>

        <p>
          You could fetch all the invoices and sort through them using
          JavaScript. This isn't a problem as our data is small, but as your
          application grows, it can significantly increase the amount of data
          transferred on each request and the JavaScript required to sort
          through it.
        </p>

        <p>
          Instead of sorting through the latest invoices in-memory, you can use
          an SQL query to fetch only the last 5 invoices. For example, this is
          the SQL query from your <code>data.ts</code> file:
        </p>

        <CodeBlock
          code={`// Fetch the last 5 invoices, sorted by date
const data = await pool.query<LatestInvoiceRaw>(\`
  SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
  FROM invoices
  JOIN customers ON invoices.customer_id = customers.id
  ORDER BY invoices.date DESC
  LIMIT 5\`);`}
          language="typescript"
          icon="typescript"
          text="src/lib/data.ts"
        />

        <p>
          In <code>`src/routes/dashboard/layout.tsx`</code>, import{" "}
          <code>`fetchLatestInvoices()`</code>
          functions you created in <code>{`src/lib/data.ts`}</code>
        </p>

        <p>
          As before, use the <code>`routeLoader$`</code> function to load data
          for the route.
        </p>

        <CodeBlock
          code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchRevenue, fetchLatestInvoices } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  return {
    revenue: await fetchRevenue(),
    latestInvoices: await fetchLatestInvoices(),
  };
});

export default component$(() => {
  // ...
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/layout.tsx"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 63 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 10, character: 0 },
              end: { line: 10, character: 48 },
              properties: { class: "newLine" },
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
            data-ad-slot="1645265607"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Diplaying data for <LatestInvoices/>"
          id="displaying-data-for-<LatestInvoices/>"
          level="h3"
        />

        <p>
          To displaying data for the <code>&lt;LatestInvoices/&gt;</code>{" "}
          component, import the <code>useFetchLatestInvoices()</code> function
          from <code>./layout</code> and call it inside your component:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { useFetchData } from "./layout";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { Card } from "~/components/ui/dashboard/cards";

export default component$(() => {
  const { revenue, latestInvoices } = useFetchData().value;
  // ...
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 9, character: 0 },
              end: { line: 9, character: 59 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          ⚠️ For display user's images from latest invoices, you must{" "}
          <strong>download</strong> <code>`customers.zip`</code> folder, unzip
          and place them in the <code>`public`</code> folder: 👇
        </p>

        <ul>
          <li>
            <a href="/downloads/customers.zip" download="customers.zip">
              <code>customers.zip 💾</code>
            </a>
          </li>
        </ul>

        <p>
          Then, uncomment the <code>&lt;LatestInvoices/&gt;</code> component.
          Check your localhost, you should be able to see a list of the latest
          invoices.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <LatestInvoices
            alt="List of the latest invoices"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9913232891"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Practice: Fetch data for the <Card> components"
          id="practice-fetch-data-for-the-<card>-components"
        />

        <p>
          Now it's your turn to fetch data for the <code>&lt;Card&gt;</code>{" "}
          components. The cards will display the following data:
        </p>

        <ul>
          <li>Total amount of invoices collected.</li>
          <li>Total amount of invoices pending.</li>
          <li>Total number of invoices.</li>
          <li>Total number of customers.</li>
        </ul>

        <p>
          Again, you might be tempted to fetch all the invoices and customers,
          and use JavaScript to manipulate the data. For example, you could use{" "}
          <code>Array.length</code> to get the total number of invoices and
          customers:
        </p>

        <CodeBlock
          code={`const totalInvoices = allInvoices.length;
const totalCustomers = allCustomers.length;`}
          displayCodeBlockHeader={false}
          displayCopyButtonAbsolute
        />

        <p>
          But with SQL, you can fetch only the data you need. It's a little
          longer than using <code>Array.length</code>, but it means less data
          needs to be transferred during the request. This is the SQL
          alternative:
        </p>

        <CodeBlock
          code={`const invoiceCountPromise = pool.query(\`SELECT COUNT(*) FROM invoices\`);
const customerCountPromise = pool.query(\`SELECT COUNT(*) FROM customers\`);`}
          text="src/lib/data.ts"
          hideLineNumbers
          icon="typescript"
          language="typescript"
        />

        <p>
          The function you will need to import is called{" "}
          <code>fetchCardData</code>. You will need to destructure the values
          returned from the function.
        </p>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Hint:</strong>
          </p>
          <ul>
            <li>
              Check the <code>data.ts</code> file to see what the function
              returns.
            </li>
            <li>
              Import the <code>fetchCardData()</code> function into your{" "}
              <code>layout.tsx</code> file and use it in the{" "}
              <code>routeLoader$()</code>
            </li>
            <li>
              Use this <code>routeLoader$()</code> to display the data in your{" "}
              <code>index.tsx</code> file.
            </li>
          </ul>
        </blockquote>

        <p>Once you're ready, expand the toggle below for the final code:</p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
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
          Great! You've now fetched all the data for the dashboard overview
          page. Your page should look like this:
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DashboardPageWithAllTheDataFetched
            alt="Dashboard page with all the data fetched"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2748392466"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="What are request waterfalls?"
          id="what-are-request-waterfalls"
        />

        <p>
          A "waterfall" refers to a sequence of network requests that depend on
          the completion of previous requests. In the case of data fetching,
          each request can only begin once the previous request has returned
          data.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <SequentialParallelDataFetching
            alt="Diagram showing time with sequential data fetching and parallel data fetching"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          For example, we need to wait for <code>fetchRevenue()</code> to
          execute before <code>fetchLatestInvoices()</code> can start running,
          and so on.
        </p>

        <CodeBlock
          code={`export const useFetchData = routeLoader$(async () => {
  return {
    revenue: await fetchRevenue(),
    latestInvoices: await fetchLatestInvoices(), // wait for fetchRevenue() to finish
    cardData: await fetchCardData(), // wait for fetchLatestInvoices() to finish
  };
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/layout.tsx"
          hideLineNumbers
        />

        <p>
          This pattern is not necessarily bad. There may be cases where you want
          waterfalls because you want a condition to be satisfied before you
          make the next request. For example, you might want to fetch a user's
          ID and profile information first. Once you have the ID, you might then
          proceed to fetch their list of friends. In this case, each request is
          contingent on the data returned from the previous request.
        </p>

        <p>
          However, this behavior can also be unintentional and impact
          performance.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9122229123"
          ></ins>
        </div>

        <Quiz
          question="When might you want to use a waterfall pattern?"
          options={[
            {
              text: "To satisfy a condition before making the next request",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "To make all requests simultaneously",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "To reduce the server load by doing one fetch at a time",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "To make the user wait longer for the data",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about the advantages of using a waterfall pattern"
          responseText="For example, you might want to fetch a user's ID and profile information first. Once you have the ID, you might then proceed to fetch their list of friends."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="5973987882"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Parallel data fetching"
          id="parallel-data-fetching"
        />

        <p>
          A common way to avoid waterfalls is to initiate all data requests at
          the same time - in parallel.
        </p>

        <p>
          In JavaScript, you can use the{" "}
          <BlankLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
            text="Promise.all()"
          />{" "}
          or{" "}
          <BlankLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled"
            text="Promise.allSettled()"
          />{" "}
          functions to initiate all promises at the same time. For example, in{" "}
          <code>data.ts</code>, we're using <code>Promise.all()</code> in the{" "}
          <code>fetchCardData()</code> function:
        </p>

        <CodeBlock
          code={`export const fetchCardData = server$(async function () {  
const pool = await  getPool();
try {
  const invoiceCountPromise = pool.query(\`SELECT COUNT(*) FROM invoices\`);
  const customerCountPromise = pool.query(\`SELECT COUNT(*) FROM customers\`);
  const invoiceStatusPromise = pool.query(\`SELECT
        SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
        SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
        FROM invoices\`);

  const data = await Promise.all([
    invoiceCountPromise,
    customerCountPromise,
    invoiceStatusPromise,
  ]);
  // ...
}
});`}
          language="typescript"
          icon="typescript"
          text="src/lib/data.ts"
        />

        <p>By using this pattern, you can:</p>

        <ul>
          <li>
            Start executing all data fetches at the same time, which can lead to
            performance gains.
          </li>
          <li>
            Use a native JavaScript pattern that can be applied to any library
            or framework.
          </li>
        </ul>

        <p>
          However, there is one <strong>disadvantage</strong> of relying only on
          this JavaScript pattern: what happens if one data request is slower
          than all the others?
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="6974577931"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 7 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/10-chapter-7-fetching-data"
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
            data-ad-slot="5661496262"
          ></ins>
        </div>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={7}
          text="You've learned how to fetch data from your database in Qwik."
        />
        <GoToNextChapterBlock
          goToChapter={8}
          title="Optimizing data fetching"
          text="Learn how to optimize data fetching by parallelizing queries and relocating routeLoader$() functions."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
