// src/components/learn/dashboardApp/streamingContent/streaming.tsx

import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import { Quiz } from "~/components/UI/quiz/quiz";
import { LatestInvoicesSoluce } from "./latestInvoicesSoluce";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";

import WhatIsStreamingImg from "~/assets/img/whatIsStreaming.png?jsx";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";

export const StreamingContent = component$(() => {
  const latestInvoicesSoluce = useSignal(false);

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

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

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

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

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

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="How to implement streaming with routeLoader$() and <Resource />"
          id="how-to-implement-streaming-with-routeLoader-and-resource"
        />

        <p>
          For the moment, with only <code>routeLoader$()</code>, we have to wait
          for the data to be ready before we can display the page.
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
          <code>routeLoader$()</code> is used and wait for it to complete. By
          returning an asynchronous function from our{" "}
          <code>routeLoader$()</code> we can stream/defer the rendering to
          provide immediate visual feedback.
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
          <code>routeLoader$()</code>.
        </p>

        <p>Let's apply this concept to our application.</p>

        <p>
          In our <code>src/routes/dashboard/index.tsx</code> file, we will
          replace the current <code>routeLoader$</code> with a{" "}
          <code>routeLoader$</code> that works with{" "}
          <code>&lt;Resource /&gt;</code>.
        </p>

        <p>Replace your current file with the following code: 👇</p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

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
  const data = useFetchData();
  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
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
          text="src/routes/dashboard/index.tsx"
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

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <Quiz
          question="Which Qwik component is used to handle streaming and manage loading states?"
          options={[
            {
              text: "<Resource />",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "<Suspense />",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "<Loader />",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "<Streaming />",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="It's a special Qwik component designed to manage data loading."
          responseText="The correct answer is '<Resource />'. This component is used to handle streaming and manage loading states in Qwik."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

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

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="How to implement streaming with useResource$() and <Resource />"
          id="how-to-implement-streaming-with-useResource-and-resource"
        />

        <p>
          In this section, we will see how to implement streaming with{" "}
          <BlankLink
            href="https://qwik.dev/docs/components/state/#useresource"
            text="useResource$()"
          />{" "}
          and <code>&lt;Resource /&gt;</code>.
        </p>

        <p>
          We will use the same example as before, but this time we will use{" "}
          <code>useResource$()</code> instead of <code>routeLoader$()</code>.
        </p>

        <p>
          Unlike <code>routeLoader$()</code>, <code>useResource$()</code> must
          be declared in a component.
        </p>

        <p>
          In our <code>src/routes/dashboard/index.tsx</code> file, replace your
          current file with the following code: 👇
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";

export default component$(() => {

  const dataResource = useResource$(async ({ cleanup }) => {
    // A good practice is to use \`AbortController\` to abort the fetching of data if
    // new request comes in. We create a new \`AbortController\` and register a \`cleanup\`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const [revenue, latestInvoices, cardData] = await Promise.all([
      fetchRevenue(),
      fetchLatestInvoices(),
      fetchCardData(),
    ]);
    return { revenue, latestInvoices, cardData };
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Resource
        value={dataResource}
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
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          Unlike <code>routeLoader$()</code>, <code>onPending</code> and{" "}
          <code>onRejected</code> are supported with <code>useResource$()</code>{" "}
          and <code>&lt;Resource /&gt;</code>.<br />
          <strong>Note: </strong>Works only in SPA navigation (with the{" "}
          <code>{`<Link />`}</code> component).👇
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/displayOnPendingWithUseResourcePoster.png"
            width="658"
          >
            <source
              src="/videos/displayOnPendingWithUseResource.mp4"
              type="video/mp4"
            />
          </video>
          <p class=" text-sm">
            Display the onPending callback (Loading...) in SPA navigation mode
            when the data is being fetched.
          </p>
        </figure>

        <blockquote class="p-3 pt-5 text-sm">
          <p>
            <strong>Note:</strong> As specified in the{" "}
            <BlankLink
              href="https://qwik.dev/docs/components/state/#useresource/"
              text="documentation officielle de Qwik"
            />{" "}
            : "Fetching data as part of Server-Side Rendering (SSR) is a common
            and preferred method of data loading, typically handled by the{" "}
            <BlankLink
              href="https://qwik.dev/docs/route-loader/"
              text="routeLoader$()"
            />
            API. <code>useResource$</code> is more of a low-level API that is
            useful when you want to fetch data in the browser."
          </p>
        </blockquote>

        <p>
          Again, all this will depend on your needs and your context of use.🤔
        </p>

        <p>
          Congratulations! You've just implemented streaming. But we can do more
          to improve the user experience. Let's show a loading skeleton instead
          of the <code>Loading…</code> text.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <Quiz
          question="What is the purpose of the onPending callback?"
          options={[
            {
              text: "To display a loading message while the data is being fetched.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "To display an error message if there is an error fetching the data.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "To render the components when the data is successfully fetched.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "To render the components before the data is ready.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="It is called while the data is being fetched."
          responseText="The onPending callback is called while the data is being fetched."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Adding loading skeletons 💀"
          id="adding-loading-skeletons"
        />

        <p>
          A loading skeleton is a simplified version of the UI. Many websites
          use them as a placeholder (or fallback) to indicate to users that the
          content is loading.
        </p>

        <p>
          ⚠️ <strong>Download</strong> <code>{`skeletons.tsx`}</code> file and
          place it in the <code>`src/components/ui/`</code> folder:
        </p>

        <ul>
          <li>
            <a href="/downloads/skeletons.tsx" download="skeletons.tsx">
              <code>skeletons.tsx 💾</code>
            </a>
          </li>
        </ul>

        <p>
          In our <code>src/global.css</code> file, add the animation for the
          loading skeleton:
        </p>

        <CodeBlock
          code={`/* src/global.css */
// ...
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.before\\:animate-\\[shimmer_2s_infinite\\]::before {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  animation: shimmer 2s infinite;
}`}
          hideLineNumbers
          icon="css"
          language="css"
          text="src/global.css"
        />

        <p>
          In our <code>src/routes/dashboard/index.tsx</code> file, we will
          replace the <code>Loading…</code> text with a loading skeleton.
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "~/lib/data";
import { DashboardSkeleton } from "~/components/ui/skeletons";

export default component$(() => {
  const dataResource = useResource$(async ({ cleanup }) => {
    // ...
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Resource
        // ...
        onPending={() => {
          return <DashboardSkeleton />;
        }}
      />
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 62 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 20, character: 0 },
              end: { line: 20, character: 39 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Now, when the data is being fetched, the loading skeleton ☠️ will be
          displayed instead of the <code>Loading…</code> text.👇
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/displayDashboardSkeletonLoadingPoster.png"
            width="658"
          >
            <source
              src="/videos/displayDashboardSkeletonLoading.mp4"
              type="video/mp4"
            />
          </video>
          <p class=" text-sm">
            Display the loading skeleton when the data is being fetched.
          </p>
        </figure>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Streaming a component"
          id="streaming-a-component"
          level="h3"
        />

        <p>
          So far, you're streaming a whole page. But you can also be more
          granular and stream specific components using{" "}
          <code>{"<Resources />"}</code>.
        </p>

        <p>
          If you remember the slow data request, <code>fetchRevenue()</code>,
          this is the request that is slowing down the whole page. Instead of
          blocking your whole page, you can use <code>{"<Resources />"}</code>{" "}
          to stream only this component and immediately show the rest of the
          page's UI.
        </p>

        <p>
          To do so, you'll need to move the data fetch to the component, let's
          update the code to see what that'll look like:
        </p>

        <p>
          Delete all instances of <code>fetchRevenue()</code> and its data from{" "}
          <code>src/routes/dashboard/index.tsx</code>: 👇
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { fetchCardData, fetchLatestInvoices } from "~/lib/data";
import { DashboardSkeleton } from "~/components/ui/skeletons";

export default component$(() => {
  const dataResource = useResource$(async ({ cleanup }) => {
    const [latestInvoices, cardData] = await Promise.all([
      fetchLatestInvoices(),
      fetchCardData(),
    ]);
    return { latestInvoices, cardData };
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Resource
        value={dataResource}
        onResolved={({ latestInvoices, cardData }) => {
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
                <RevenueChart />
                <LatestInvoices latestInvoices={latestInvoices} />
              </div>
            </>
          );
        }}
        onRejected={(error) => {
          return <div>Error: {error.message}</div>;
        }}
        onPending={() => {
          return <DashboardSkeleton />;
        }}
      />
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          Now, we will reuse <code>{"useResource$()"}</code> and{" "}
          <code>{"<Resource />"}</code> inside our{" "}
          <code>{"<RevenueChart />"}</code> component.
        </p>

        <p>
          We use <code>{"<RevenueChartSkeleton />"}</code> to display a loading
          revenue chart skeleton while the data is being fetched.
        </p>

        <CodeBlock
          code={`// src/components/ui/dashboard/revenue-chart.tsx

import { generateYAxis } from "~/lib/utils";
import { HiCalendarOutline } from "@qwikest/icons/heroicons";
import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { fetchRevenue } from "~/lib/data";
import { RevenueChartSkeleton } from "~/components/ui/skeletons";

export const RevenueChart = component$(() => {
  const revenueResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const revenue = await fetchRevenue();
    return { revenue };
  });

  return (
    <Resource
      value={revenueResource}
      onResolved={({ revenue }) => {
        const chartHeight = 350;
        const { yAxisLabels, topLabel } = generateYAxis(revenue);

        if (revenue.length === 0) {
          return <p class="mt-4 text-gray-400">No data available.</p>;
        }
        return (
          <div class="w-full md:col-span-4">
            <h2 class="lusitana mb-4 text-xl md:text-2xl">Recent Revenue</h2>

            <div class="rounded-xl bg-gray-50 p-4">
              <div class=" mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
                <div
                  class="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
                  style={{ height: \`\${chartHeight}px\` }}
                >
                  {yAxisLabels.map((label) => (
                    <p key={label}>{label}</p>
                  ))}
                </div>

                {revenue.map((month) => (
                  <div
                    key={month.month}
                    class="flex flex-col items-center gap-2"
                  >
                    <div
                      class="w-full rounded-md bg-blue-300"
                      style={{
                        height: \`\${(chartHeight / topLabel) * month.revenue}px\`,
                      }}
                    ></div>
                    <p class="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                      {month.month}
                    </p>
                  </div>
                ))}
              </div>
              <div class="flex items-center pb-2 pt-6">
                <HiCalendarOutline class="h-5 w-5 text-gray-500" />
                <h3 class="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
              </div>
            </div>
          </div>
        );
      }}
      onRejected={(error) => {
        return <div>Error: {error.message}</div>;
      }}
      onPending={() => {
        return <RevenueChartSkeleton />;
      }}
    />
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/dashboard/revenue-chart.tsx"
        />

        <p>
          Now, the <code>{"<RevenueChart />"}</code> component fetches its own
          data and display it dynamically according to the loading state
          independently. 🚀
        </p>

        <p>Show result in the browser and see the difference: 👇</p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/displayRevenueChartIndependently.png"
            width="658"
          >
            <source
              src="/videos/displayRevenueChartIndependently.mp4"
              type="video/mp4"
            />
          </video>
          <p class=" text-sm">
            The <code>{"<RevenueChart />"}</code> component fetches its own data
            independently and displays it dynamically according to the loading
            state.
          </p>
        </figure>

        <p>
          Now, you can remove the intentionnal delay in the{" "}
          <code>fetchRevenue()</code> function in the{" "}
          <code>src/lib/data.ts</code> file.👇
        </p>

        <CodeBlock
          code={`// src/lib/data.ts

// ...

export const fetchRevenue = server$(async function () {
  // Open a new connection
  const pool = await getPool();
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const { rows } = await pool.query<Revenue>('SELECT * FROM revenue');

    console.log('Data fetch completed after 3 seconds.');

    // Close the connection
    await pool.end();
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data: ' + (error as Error).message);
  }
});

// ...`}
          icon="typescript"
          language="tsx"
          text="src/lib/data.ts"
          hideLineNumbers
          decorations={[
            {
              start: { line: 8, character: 0 },
              end: { line: 11, character: 62 },
              properties: { class: "deleteLine" },
            },
            {
              start: { line: 15, character: 0 },
              end: { line: 15, character: 57 },
              properties: { class: "deleteLine" },
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
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Practice: Streaming <LatestInvoices>"
          id="practice-streaming-latest-invoices"
          level="h3"
        />

        <p>
          Now it's your turn! Practice what you've just learned by streaming the{" "}
          <code>&lt;LatestInvoices&gt;</code> component.
        </p>

        <p>
          Move the data fetching and display logic from the{" "}
          <code>src/routes/dashboard/index.tsx</code> file to the{" "}
          <code>src/components/ui/dashboard/latest-invoices.tsx</code> file.
        </p>

        <p>Once you're ready, expand the toggle to see the solution code:</p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (latestInvoicesSoluce.value = !latestInvoicesSoluce.value)
            }
          >
            <span class="button_prefix">
              {latestInvoicesSoluce.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {latestInvoicesSoluce.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {latestInvoicesSoluce.value && <LatestInvoicesSoluce />}
        </div>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Grouping components"
          id="grouping-components"
        />

        <p>
          Great job! You're almost there, it's time to group the{" "}
          <code>{"<Card />"}</code> components. You can fetch data for each
          individual card, but this could lead to a popping effect as the cards
          load in, this can be visually jarring for the user.
        </p>

        <p>So, how would you tackle this problem?</p>

        <p>
          To create more of a <em>staggered</em> effect, you can group the cards
          using a wrapper component. This means the static{" "}
          <code>&lt;SideNav/&gt;</code> will be shown first, followed by the
          cards, etc.
        </p>

        <p>
          In your <code>src/routes/dashboard/index.tsx</code> file:
        </p>

        <ol class="list-decimal">
          <li>
            Delete <code>{"useResource$()"}</code> function.
          </li>
          <li>
            Delete <code>{"<Resource />"}</code> component.
          </li>
          <li>
            Import a new <strong>wrapper</strong> component called{" "}
            <code>&lt;CardWrapper /&gt;</code>.
          </li>
          <li>
            Replace the <code>&lt;Card /&gt;</code> components with{" "}
            <code>&lt;CardWrapper /&gt;</code>.
          </li>
        </ol>

        <p>
          Your <code>src/routes/dashboard/index.tsx</code> file should look like
          this: 👇
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { CardsWrapper } from "~/components/ui/dashboard/cards";

export default component$(() => {
  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardsWrapper />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart />
        <LatestInvoices />
      </div>
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          In your <code>src/components/ui/dashboard/cards.tsx</code> file:
        </p>

        <ol class="list-decimal">
          <li>
            Import <code>{"<Resource />"}</code>,{" "}
            <code>{"useResource$()"}</code> and <code>{"fetchCardData()"}</code>
            .
          </li>
          <li>
            Import <code>{"CardsSkeleton"}</code> component.
          </li>

          <li>
            Create a <code>{"CardsWrapper"}</code> component.
          </li>

          <li>
            In the <code>{"CardsWrapper"}</code> component, fetch the card data
            using <code>{"useResource$()"}</code>.
          </li>
          <li>
            Use <code>{"<Resource />"}</code> to display the card data.
          </li>
        </ol>

        <p>
          Your <code>src/components/ui/dashboard/cards.tsx</code> file should
          look like this: 👇
        </p>

        <CodeBlock
          code={`import { Resource, component$, useResource$ } from "@builder.io/qwik";
import {
  HiBanknotesOutline,
  HiClockOutline,
  HiUserGroupOutline,
  HiInboxOutline,
} from "@qwikest/icons/heroicons";
import { fetchCardData } from "~/lib/data";
import { CardsSkeleton } from "~/components/ui/skeletons";

const iconMap = {
  collected: HiBanknotesOutline,
  customers: HiUserGroupOutline,
  pending: HiClockOutline,
  invoices: HiInboxOutline,
};

export const Card = component$(
  ({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: "invoices" | "customers" | "pending" | "collected";
  }) => {
    const Icon = iconMap[type];

    return (
      <div class="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div class="flex p-4">
          <Icon class="h-5 w-5 text-gray-700" />
          <h3 class="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          class="lusitana
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl"
        >
          {value}
        </p>
      </div>
    );
  },
);

export const CardsWrapper = component$(() => {
  const cardDataResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const cardData = await fetchCardData();
    return { cardData };
  });
  return (
    <Resource
      value={cardDataResource}
      onResolved={({ cardData }) => {
        const {
          totalPaidInvoices,
          totalPendingInvoices,
          numberOfInvoices,
          numberOfCustomers,
        } = cardData;
        return (
          <>
            <Card
              title="Collected"
              value={totalPaidInvoices}
              type="collected"
            />
            <Card title="Pending" value={totalPendingInvoices} type="pending" />
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
          </>
        );
      }}
      onRejected={(error) => {
        return <div>Error: {error.message}</div>;
      }}
      onPending={() => {
        return <CardsSkeleton />;
      }}
    />
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/dashboard/cards.tsx"
        />

        <p>
          You should see all the cards load in at the same time. You can use
          this pattern when you want multiple components to load in at the same
          time.
        </p>

        <p>
          Great! We now have 3 components that load their data and display it
          according to their loading state completely independently. 🚀
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Deciding where to place your <Resource /> boundaries"
          id="deciding-where-to-place-your-resource-boundaries"
        />

        <p>
          Where your place your <code>{"<Resource />"}</code> boundaries will
          depend on a few things:
        </p>

        <ol class="list-decimal">
          <li>How you want the user experience the page as it streams.</li>
          <li>What content you want prioritize.</li>
          <li>If the components rely on data fetching.</li>
        </ol>

        <p>
          Take a look at your dashboard page, is there anything you would've
          done differently?
        </p>

        <p>Don't worry. There isn't a right answer.</p>

        <ul>
          <li>
            You could have chosen to stream the whole page, like we did at the
            beginning.
          </li>
          <li>
            You could also create a staggered effect by streaming page sections.
            But you'll need to create wrapper components.
          </li>
          <li>You could stream every component individually...</li>
        </ul>

        <p>
          Where you place your <code>{"<Resource />"}</code> boundaries will
          vary depending on your application. In general, it's good practice to
          move your data fetching logic to the component level. This way, you
          can have more control over the loading state of your components. But
          there is nothing wrong with streaming the sections or the whole page
          if that's what your application needs.
        </p>

        <p>
          Don't be afraid to experiment and see what works best for your users.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <Quiz
          question="In general, what is considered good practice when working with useResource$(), <Resource /> and data fetching?"
          options={[
            {
              text: "Move data fetches up to the parent component",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Avoid using useResource$() for data fetching",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Move data fetches down to the components that need it",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Use <Resource /> only for error boundaries",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="See the previous section"
          responseText="By moving data fetching down to the components that need it, you can create more granular loading states.
          This allows you to stream specific components and prevent the UI from blocking."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="8894881530"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Source code" id="source-code" />
        <p>
          You can find the source code for chapter 9 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/18-chapter-9-streaming"
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
            data-ad-slot="8894881530"
          ></ins>
        </div>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={9}
          text="You've learned how to stream components with <Resource /> and loading skeletons."
        />
        <GoToNextChapterBlock
          goToChapter={10}
          title="Adding Search and Pagination"
          text="Learn how to implement search and pagination in your application."
          disabledButton
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
