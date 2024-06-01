// src/components/learn/dashboardApp/streamingContent/streaming.tsx

import { component$ } from "@builder.io/qwik";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

import WhatIsStreamingImg from "~/assets/img/whatIsStreaming.png?jsx";
import { Link } from "@builder.io/qwik-city";
import { Quiz } from "~/components/UI/quiz/quiz";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const StreamingContent = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={9} chapterTitle="Streaming" />
        <p>
          In the previous chapter, we discussed how the slow data fetches can
          impact the performance of your application. Let's look at how you can
          improve the user experience when there are slow data requests.
        </p>
        <TableOfTopicsCovered
          topics={[
            {
              title: "What streaming is and when you might use it.",
              icon: "server",
            },
            {
              title:
                "How to implement streaming with routeLoader$() et <Resource />.",
              icon: "relationPoint",
            },
            {
              title:
                "How to implement streaming with useResource$() et <Resource />.",
              icon: "twoConnectedPoints",
            },
            {
              title: "What loading skeletons are.",
              icon: "skeleton",
            },
            {
              title:
                "Where to place <Resource /> boundaries in your application.",
              icon: "clock",
            },
          ]}
        />

        <SubtitleWithAnchor title="What is streaming?" id="what-is-streaming" />

        <p>
          Streaming is a data transfer technique that allows you to gradually
          distribute data from the server to the client as soon as they are
          ready.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <WhatIsStreamingImg
            alt="Diagram showing time with sequential data fetching and parallel data fetching"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          By streaming, you can prevent slow data requests from blocking your
          whole page. This allows the user to see and interact with parts of the
          page without waiting for all the data to load before any UI can be
          shown to the user.
        </p>

        <p>
          Streaming works well with Qwik's component model, where each component
          can be considered a chunk.
        </p>

        <p>There are two ways you implement streaming in Qwik:</p>

        <ul>
          <li>
            <Link href="#how-to-implement-streaming-with-routeLoader-and-resource">
              Using routeLoader$() and &lt;Resource /&gt;
            </Link>
          </li>
          <li>
            <Link href="#how-to-implement-streaming-with-useResource-and-resource">
              Using useResource$() and &lt;Resource /&gt;
            </Link>
          </li>
        </ul>

        <p>Let's see how this works.</p>

        <Quiz
          question="What is streaming?"
          options={[
            {
              text: "A data transfer technique that allows you to gradually distribute data from the server to the client as soon as they are ready.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "A data transfer technique that allows you to distribute all the data from the server to the client at once.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "A data transfer technique that allows you to distribute all the data from the server to the client as soon as they are ready.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "A data transfer technique that allows you to gradually distribute data from the server to the client at once.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="It allows you to prevent slow data requests from blocking your whole page."
          responseText="Streaming is a data transfer technique that allows you to gradually distribute data from the server to the client as soon as they are ready. By streaming, you can prevent slow data requests from blocking your whole page."
        />

        <SubtitleWithAnchor
          title="How to implement streaming with routeLoader$() and <Resource />"
          id="how-to-implement-streaming-with-routeLoader-and-resource"
        />

        <p>
          For the moment, with routeLoader$(), we have to wait for the data to
          be ready before we can display the page.
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
            <source src="/videos/waitForDisplayPage.mp4" type="video/mp4" />
          </video>
          <p class=" text-sm">
            Waiting for the data to be ready before we can display the page.
          </p>
        </figure>

        <p>
          However, there is a way to render the DOM up to the point where{" "}
          <code>routeLoader$</code> is used and wait for it to complete. By
          returning an asynchronous function from our <code>routeLoader$</code>{" "}
          we can stream/defer the rendering to provide immediate visual
          feedback.
        </p>

        <p>
          To do this, we can use the <code>&lt;Resource /&gt;</code> component.{" "}
          <br />
          This{" "}
          <BlankLink
            href="https://qwik.dev/docs/cookbook/streaming-deferred-loaders/"
            text="example from the official Qwik documentation"
          />{" "}
          illustrates how to use <code>&lt;Resource /&gt;</code> with
          routeLoader$().
        </p>

        <p>Let's apply this concept to our application.</p>

        <p>
          In our <code>src/routes/dashboard/index.tsx</code> file, we will
          replace the current <code>routeLoader$</code> with a{" "}
          <code>routeLoader$</code> that works with{" "}
          <code>&lt;Resource /&gt;</code>.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export const useFetchData = routeLoader$(async () => {
  const [revenue, latestInvoices, cardData] = await Promise.all([
    fetchRevenue(),
    fetchLatestInvoices(),
    fetchCardData(),
  ]);
  return { revenue, latestInvoices, cardData };
});

export const useFetchData = routeLoader$(() => {
  return async () => {
    const [revenue, latestInvoices, cardData] = await Promise.all([
      fetchRevenue(),
      fetchLatestInvoices(),
      fetchCardData(),
    ]);
    return { revenue, latestInvoices, cardData };
  };
});

export default component$(() => {
  const { revenue, latestInvoices, cardData } = useFetchData().value;
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfInvoices,
    numberOfCustomers,
  } = cardData;

  const data = useFetchData();

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
      <Resource
        value={data}
        onResolved={({ revenue, latestInvoices, cardData }) => {
          const {
            totalPaidInvoices,
            totalPendingInvoices,
            numberOfInvoices,
            numberOfCustomers,
          } = cardData;
          return (
            <>
              <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card
                  title="Collected"
                  value={totalPaidInvoices}
                  type="collected"
                />
                <Card
                  title="Pending"
                  value={totalPendingInvoices}
                  type="pending"
                />
                <Card
                  title="Total Invoices"
                  value={numberOfInvoices}
                  type="invoices"
                />
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
            </>
          );
        }}
        onRejected={(error) => {
          return <div>Error: {error.message}</div>;
        }}
        onPending={() => {
          return <div>Loading...</div>;
        }}
      />
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          decorations={[
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 56 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 16, character: 3 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 18, character: 0 },
              end: { line: 27, character: 3 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 30, character: 0 },
              end: { line: 36, character: 15 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 38, character: 0 },
              end: { line: 38, character: 30 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 43, character: 0 },
              end: { line: 56, character: 12 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 57, character: 0 },
              end: { line: 103, character: 8 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>Here are some key points about this code:</p>
        <ul>
          <li>
            <p>
              We use <code>useFetchData</code> to fetch the data. This function
              returns an asynchronous function that fetches the data.
            </p>
          </li>
          <li>
            <p>
              We use <code>&lt;Resource /&gt;</code> to render the data. The{" "}
              <code>value</code> prop is set to <code>data</code>, which is the
              result of calling <code>useFetchData()</code>.
            </p>
          </li>
          <li>
            <p>
              The <code>onResolved</code> callback is called when the data is
              successfully fetched. We destructure the data and render the
              components.
            </p>
          </li>
          <li>
            <p>
              The <code>onRejected</code> callback is called if there is an
              error fetching the data. We render an error message.
            </p>
          </li>
          <li>
            <p>
              The <code>onPending</code> callback is called while the data is
              being fetched. We render a loading message.
            </p>
          </li>
        </ul>

        <p>
          Now that we have implemented streaming with{" "}
          <code>&lt;Resource /&gt;</code>, we can see the components that
          precede the <code>&lt;Resource /&gt;</code> component display before
          the data is ready. In our case, unlike before, the{" "}
          <code>{"<SideNav />"}</code> and the <code>{"<h1>"}</code> are
          displayed immediately before the data is even loaded.
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/displayBeforeData.png"
            width="658"
          >
            <source src="/videos/displayBeforeData.mp4" type="video/mp4" />
          </video>
          <p class=" text-sm">
            Immediately display {"<SideNav />"} and {"<h1>Dashboard</h1>"}
            before the data is ready.
          </p>
        </figure>

        <p>
          This is a great improvement in user experience as the user can see the
          page layout before the data is ready.
        </p>

        <p>
          The most observant will have noticed that the <code>onPending</code>,
          which should display a loading message, does not work. This is because
          the <code>onPending</code> callback is not yet supported with{" "}
          <code>&lt;Resource /&gt;</code> and <code>routeLoader$</code>.
        </p>

        <blockquote class="p-3 pt-5 text-sm">
          <p>
            <strong>Note:</strong> By browsing the{" "}
            <BlankLink
              href="https://discord.gg/fFPsFqmz/"
              text="official Qwik Discord"
            />{" "}
            and various forums, if I understand correctly, the use of{" "}
            <code>onPending</code> and <code>onError</code> with{" "}
            <code>&lt;Resource /&gt;</code> and <code>routeLoader$</code> is not
            yet supported. It should be implemented in a future version of Qwik
            (V2.0).
          </p>
        </blockquote>

        <p>
          Fortunately, there is another way to implement streaming in Qwik using{" "}
          <code>useResource$()</code>. <br />
          With <code>useResource$()</code>, we can handle loading, error, and
          content display more flexibly. <br />
          This is what we will see in the next section.👇
        </p>

        <SubtitleWithAnchor
          title="How to implement streaming with useResource$() and <Resource />"
          id="how-to-implement-streaming-with-useResource-and-resource"
        />
      </div>
    </>
  );
});