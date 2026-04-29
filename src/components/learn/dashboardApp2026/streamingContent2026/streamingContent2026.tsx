// src/components/learn/dashboardApp2026/streamingContent2026/streamingContent2026.tsx

import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import WhatIsStreamingImg from "~/assets/img/whatIsStreaming.png?jsx";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";
import { LatestInvoicesSoluce } from "./latestInvoicesSoluce2026";

export const StreamingContent2026 = component$(() => {
  const latestInvoicesSoluce = useSignal(false);

  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you moved loaders to the right route
          boundary. But even when loaders are placed correctly, one slow request
          can still delay the whole page.
        </p>

        <p>
          In this chapter, you&apos;ll learn how streaming helps keep the UI
          visible while slower data is still loading, and how to use{" "}
          <code>routeLoader$()</code>, <code>useResource$()</code>, and{" "}
          <code>&lt;Resource /&gt;</code> to improve perceived performance.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "What streaming is",
              emoji: "🌊",
              anchor: "what-is-streaming",
            },
            {
              title: "Streaming with routeLoader$() and <Resource />",
              emoji: "🛣️",
              anchor: "streaming-with-routeloader-and-resource",
            },
            {
              title: "Streaming with useResource$() and <Resource />",
              emoji: "📦",
              anchor: "streaming-with-useresource-and-resource",
            },
            {
              title: "Loading skeletons",
              emoji: "🦴",
              anchor: "adding-loading-skeletons",
            },
            {
              title: "Choosing your <Resource /> boundaries",
              emoji: "🎯",
              anchor: "deciding-where-to-place-your-resource-boundaries",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🌊 What is streaming?"
          id="what-is-streaming"
        />

        <p>
          Streaming is a rendering technique that lets part of the UI appear
          before all the data is ready.
        </p>

        <p>
          Instead of blocking the whole page until every request finishes, you
          can render the parts that are already ready and defer the slower
          content.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <WhatIsStreamingImg
            alt="Diagram showing content appearing progressively with streaming"
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          This improves perceived performance because the user can see the page
          structure earlier instead of staring at a blank screen.
        </p>

        <p>In Qwik, there are two useful ways to approach this:</p>

        <ul>
          <li>
            <Link href="#streaming-with-routeloader-and-resource">
              Using <code>routeLoader$()</code> with{" "}
              <code>&lt;Resource /&gt;</code>
            </Link>
          </li>
          <li>
            <Link href="#streaming-with-useresource-and-resource">
              Using <code>useResource$()</code> with{" "}
              <code>&lt;Resource /&gt;</code>
            </Link>
          </li>
        </ul>

        <Quiz
          question="What is streaming?"
          options={[
            {
              text: "A rendering technique that lets part of the UI appear while slower data is still loading.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "A rendering technique that forces the whole page to wait until all data is ready.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "A data fetching method that always runs only in the browser.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "A way to send all data at once before any UI can be shown.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what happens when one request is slower than the others."
          responseText="Streaming lets part of the UI appear while slower data is still loading. Instead of blocking the whole page, it helps users see the layout earlier and improves perceived performance."
        />

        <SubtitleWithAnchor
          title="🛣️ Streaming with routeLoader$() and <Resource />"
          id="streaming-with-routeloader-and-resource"
        />

        <p>
          In the previous chapter, you added a 3-second delay to{" "}
          <code>fetchRevenue()</code> to simulate a slow request.
        </p>

        <p>
          With a standard <code>routeLoader$()</code>, Qwik waits for the loader
          to finish before rendering the route.
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/2026/slow-data-fetch-2026.png"
            width="658"
          >
            <source
              src="/videos/2026/slow-data-fetch-2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            With a standard <code>routeLoader$()</code>, the route waits for the
            slow request before rendering.
          </p>
        </figure>

        <p>
          Qwik also supports a deferred version of <code>routeLoader$()</code>.
        </p>

        <p>
          You can read more about this pattern in the official Qwik guide on{" "}
          <BlankLink
            href="https://qwik.dev/docs/cookbook/streaming-deferred-loaders/"
            text="streaming/deferred loaders"
          />
          .
        </p>

        <p>
          By returning an asynchronous function from the loader, you can render
          the DOM up to a <code>&lt;Resource /&gt;</code> boundary first, then
          wait for the deferred value to resolve.
        </p>

        <p>
          This helps illustrate an important idea: where you place a{" "}
          <code>&lt;Resource /&gt;</code> boundary affects what can appear
          first.
        </p>

        <p>Let&apos;s apply that pattern to the revenue chart.</p>

        <p>
          In <code>src/routes/dashboard/index.tsx</code>, keep{" "}
          <code>useFetchLatestInvoices</code> and <code>useFetchCardData</code>{" "}
          as they are, and turn only <code>useFetchRevenue</code> into a
          deferred loader.
        </p>

        <p>
          Then render <code>&lt;RevenueChart /&gt;</code> through a{" "}
          <code>&lt;Resource /&gt;</code> boundary:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$ } from "@builder.io/qwik";
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
  return async () => {
    console.log("Fetching revenue from the dashboard home page...");
    return fetchRevenue();
  };
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
        <Resource
          value={revenue}
          onResolved={(resolvedRevenue) => {
            return <RevenueChart revenue={resolvedRevenue} />;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
        />
        <LatestInvoices latestInvoices={latestInvoices.value} />
      </div>
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
          decorations={[
            {
              start: { line: 14, character: 0 },
              end: { line: 15, character: 68 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 17, character: 0 },
              end: { line: 17, character: 4 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 56, character: 0 },
              end: { line: 64, character: 10 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>In this version, only the revenue request is deferred.</p>

        <ul>
          <li>
            <p>
              <code>useFetchRevenue</code> still uses{" "}
              <code>routeLoader$()</code>, but now it returns an asynchronous
              function.
            </p>
          </li>
          <li>
            <p>
              That deferred value is passed to <code>&lt;Resource /&gt;</code>.
            </p>
          </li>
          <li>
            <p>Everything before that boundary can render first.</p>
          </li>
          <li>
            <p>
              In this example, that means the heading and the cards can appear
              before the revenue chart resolves.
            </p>
          </li>
        </ul>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          With this deferred <code>routeLoader$()</code> pattern, the effect is
          visible on a full page reload, but not during SPA navigation in our
          setup.
        </InfoBox2026>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/2026/render-before-deferred-dashboard-data-2026.png"
            width="658"
          >
            <source
              src="/videos/2026/render-before-deferred-dashboard-data-2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            The UI before the <code>&lt;Resource /&gt;</code> boundary can
            render before the revenue data is ready.
          </p>
        </figure>

        <p>
          This first approach is useful for understanding deferred loaders and
          resource boundaries.
        </p>

        <p>
          In the next section, you&apos;ll switch to <code>useResource$()</code>{" "}
          to build clearer loading states.
        </p>

        <Quiz
          question="What does the deferred routeLoader$() change in this dashboard example?"
          options={[
            {
              text: "It makes the revenue chart render before the cards",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "It allows the UI before the <Resource /> boundary to render first, especially on a full page reload",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "It makes onPending render during SSR",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "It turns routeLoader$() into a browser-only API",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what appears before the deferred revenue data is resolved."
          responseText="Exactly. In this example, the deferred loader lets Qwik render the UI up to the <Resource /> boundary first, which is most noticeable on a full page reload."
        />

        <SubtitleWithAnchor
          title="📦 Streaming with useResource$() and <Resource />"
          id="streaming-with-useresource-and-resource"
        />

        <p>
          In this section, you&apos;ll switch to{" "}
          <BlankLink
            href="https://qwik.dev/docs/core/state/"
            text="useResource$()"
          />{" "}
          and <code>&lt;Resource /&gt;</code>.
        </p>

        <p>
          Unlike <code>routeLoader$()</code>, <code>useResource$()</code> must
          be declared inside a component.
        </p>

        <p>
          The Qwik docs describe <code>useResource$()</code> as a lower-level
          API. It can return a value, and it does not block rendering while the
          resource is being resolved.
        </p>

        <p>
          Let&apos;s use the same dashboard example again, but keep the same
          mental model from the previous chapter: one request for revenue, one
          request for latest invoices, and one request for the card data.
        </p>

        <p>
          Replace the three <code>routeLoader$()</code> functions with three{" "}
          <code>useResource$()</code> resources in{" "}
          <code>src/routes/dashboard/index.tsx</code>:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/lib/loaders";

export default component$(() => {
  const cardDataResource = useResource$(async ({ cleanup }) => {
    // A good practice is to use 'AbortController' to abort the fetching of data if
    // new request comes in. We create a new 'AbortController' and register a 'cleanup'
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchCardData();
  });

  const revenueResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchRevenue();
  });

  const latestInvoicesResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchLatestInvoices();
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

      <Resource
        value={cardDataResource}
        onPending={() => {
          return <div>Loading cards...</div>;
        }}
        onRejected={(error) => {
          return <div>Error: {error.message}</div>;
        }}
        onResolved={(cardData) => {
          const {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices,
            totalPendingInvoices,
          } = cardData;

          return (
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
          );
        }}
      />

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Resource
          value={revenueResource}
          onPending={() => {
            return <div>Loading Revenue</div>;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(revenue) => {
            return <RevenueChart revenue={revenue} />;
          }}
        />

        <Resource
          value={latestInvoicesResource}
          onPending={() => {
            return <div>Loading invoices...</div>;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(latestInvoices) => {
            return <LatestInvoices latestInvoices={latestInvoices} />;
          }}
        />
      </div>
    </main>
  );
});
`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          This time, the dashboard has three separate resources and three
          separate <code>&lt;Resource /&gt;</code> boundaries:
        </p>

        <ul>
          <li>
            <p>
              <code>cardDataResource</code> renders the four summary cards.
            </p>
          </li>
          <li>
            <p>
              <code>revenueResource</code> renders the revenue chart.
            </p>
          </li>
          <li>
            <p>
              <code>latestInvoicesResource</code> renders the latest invoices
              panel.
            </p>
          </li>
        </ul>

        <p>
          Each <code>&lt;Resource /&gt;</code> can render three UI states:
        </p>

        <ul>
          <li>
            <p>
              <code>onPending</code> while the data is loading.
            </p>
          </li>
          <li>
            <p>
              <code>onRejected</code> if something fails.
            </p>
          </li>
          <li>
            <p>
              <code>onResolved</code> when the data is ready.
            </p>
          </li>
        </ul>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          The behavior is different depending on how the user reaches the page.
          During SPA navigation, the cards and latest invoices appear
          immediately, while the revenue chart shows{" "}
          <code>Loading Revenue</code> during the 3-second delay. On a full page
          reload, Qwik renders the cards first, then the revenue chart and
          latest invoices appear after the delayed revenue request resolves.
        </InfoBox2026>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/2026/displayOnPendingWithUseResource2026Poster.png"
            width="658"
          >
            <source
              src="/videos/2026/displayOnPendingWithUseResource2026.mp4"
              type="video/mp4"
            />
          </video>
          <p class="text-sm">
            During SPA navigation, the cards and latest invoices appear
            instantly. The revenue chart shows <code>Loading Revenue</code> for
            3 seconds, then renders when the revenue data is ready.
          </p>
        </figure>

        <p>
          If you reload the page directly, the behavior is a little different.
          The cards render first, then after the 3-second revenue delay, the
          revenue chart and latest invoices render together.
        </p>

        <p>
          That looks closer to the deferred <code>routeLoader$()</code> example:
          the page can render up to a resource boundary first, then continue
          when the delayed resource has resolved.
        </p>

        <p>
          Now that the loading states are visible, let&apos;s improve the
          experience by replacing the plain loading text with skeletons.
        </p>

        <Quiz
          question="What is the purpose of the onPending callback?"
          options={[
            {
              text: "To display a loading state while the data is being fetched.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "To display an error message when the fetch fails.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "To render the final UI after the data is ready.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "To define where the routeLoader$() runs.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="It runs before the resource resolves."
          responseText="Exactly. The onPending callback is used to render a loading state while the resource is still being fetched."
        />

        <SubtitleWithAnchor
          title="🦴 Adding loading skeletons"
          id="adding-loading-skeletons"
        />

        <p>
          The plain <code>Loading...</code> text works, but it does not give the
          user a clear sense of what is coming next. A skeleton is a lightweight
          placeholder shaped like the final UI.
        </p>

        <p>
          Download the skeleton components and place the file in{" "}
          <code>src/components/ui/skeletons.tsx</code>:
        </p>

        <ul>
          <li>
            <a href="/downloads/skeletons.tsx" download="skeletons.tsx">
              <code>skeletons.tsx</code>
            </a>
          </li>
        </ul>

        <p>
          The skeleton file uses a shimmer animation. Add the animation to{" "}
          <code>src/global.css</code>:
        </p>

        <CodeBlock
          code={`/* src/global.css */

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
          Now replace the loading text with the matching skeleton for each
          resource:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "~/components/ui/skeletons";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/lib/loaders";

export default component$(() => {
  const cardDataResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchCardData();
  });

  const revenueResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchRevenue();
  });

  const latestInvoicesResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchLatestInvoices();
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

      <Resource
        value={cardDataResource}
        onPending={() => {
          return (
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CardsSkeleton />
            </div>
          );
        }}
        onRejected={(error) => {
          return <div>Error: {error.message}</div>;
        }}
        onResolved={(cardData) => {
          const {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices,
            totalPendingInvoices,
          } = cardData;

          return (
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card title="Collected" value={totalPaidInvoices} type="collected" />
              <Card title="Pending" value={totalPendingInvoices} type="pending" />
              <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
              <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div>
          );
        }}
      />

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Resource
          value={revenueResource}
          onPending={() => {
            return <RevenueChartSkeleton />;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(revenue) => {
            return <RevenueChart revenue={revenue} />;
          }}
        />

        <Resource
          value={latestInvoicesResource}
          onPending={() => {
            return <LatestInvoicesSkeleton />;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(latestInvoices) => {
            return <LatestInvoices latestInvoices={latestInvoices} />;
          }}
        />
      </div>
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          This is better because each loading state now reserves space for the
          part of the dashboard it belongs to. The page feels less jumpy while
          the data is loading, and one slow request does not force every section
          to use the same placeholder.
        </p>

        <InfoBox2026 emoji="🧠" colorVar="--qwik-light-blue">
          Skeletons should look like the final layout, not like a separate
          loading screen. The closer the placeholder is to the real UI, the less
          visual surprise users feel when the data arrives.
        </InfoBox2026>

        <SubtitleWithAnchor
          title="🎯 Deciding where to place your <Resource /> boundaries"
          id="deciding-where-to-place-your-resource-boundaries"
        />

        <p>
          You now have one <code>&lt;Resource /&gt;</code> boundary per request.
          That matches the three separate data needs from the previous chapter,
          and it gives each part of the page its own loading, error, and
          resolved UI.
        </p>

        <p>
          Here is the complete dashboard route with the three resources and the
          three skeleton boundaries:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "~/components/ui/skeletons";
import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from "~/lib/loaders";

export default component$(() => {
  const cardDataResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchCardData();
  });

  const revenueResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchRevenue();
  });

  const latestInvoicesResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    return fetchLatestInvoices();
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>

      <Resource
        value={cardDataResource}
        onPending={() => {
          return (
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <CardsSkeleton />
            </div>
          );
        }}
        onRejected={(error) => {
          return <div>Error: {error.message}</div>;
        }}
        onResolved={(cardData) => {
          const {
            numberOfCustomers,
            numberOfInvoices,
            totalPaidInvoices,
            totalPendingInvoices,
          } = cardData;

          return (
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card title="Collected" value={totalPaidInvoices} type="collected" />
              <Card title="Pending" value={totalPendingInvoices} type="pending" />
              <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
              <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div>
          );
        }}
      />

      <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Resource
          value={revenueResource}
          onPending={() => {
            return <RevenueChartSkeleton />;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(revenue) => {
            return <RevenueChart revenue={revenue} />;
          }}
        />

        <Resource
          value={latestInvoicesResource}
          onPending={() => {
            return <LatestInvoicesSkeleton />;
          }}
          onRejected={(error) => {
            return <div>Error: {error.message}</div>;
          }}
          onResolved={(latestInvoices) => {
            return <LatestInvoices latestInvoices={latestInvoices} />;
          }}
        />
      </div>
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/index.tsx"
        />

        <p>
          The important detail is that the slow <code>fetchRevenue()</code>{" "}
          request is no longer coupled to <code>fetchCardData()</code> or{" "}
          <code>fetchLatestInvoices()</code>. Each request has its own boundary,
          so each section can show the right placeholder and resolve on its own
          schedule.
        </p>

        <SubtitleWithAnchor
          title="Practice: Review the three boundaries"
          id="practice-review-the-three-boundaries"
          level="h3"
        />

        <p>
          Your turn: compare the final dashboard route with the three{" "}
          <code>routeLoader$()</code> functions from the previous chapter.
        </p>

        <p>
          The structure should feel familiar: three independent data requests,
          but now each request is handled with <code>useResource$()</code>,{" "}
          <code>&lt;Resource /&gt;</code>, and a skeleton that matches the UI it
          renders.
        </p>

        <div class="bg-vercel-200 mb-8 p-[21px] md:rounded-[16px] md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button geist-new-themed geist-new-button geist-new-button-fill button_invert"
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

        <SubtitleWithAnchor title="Summary" id="summary" />

        <p>You now have three useful patterns for this dashboard:</p>

        <ul>
          <li>
            <p>
              Use a deferred <code>routeLoader$()</code> when you want the page
              to render up to a <code>&lt;Resource /&gt;</code> boundary on a
              full reload.
            </p>
          </li>
          <li>
            <p>
              Use <code>useResource$()</code> when a component needs its own
              pending, resolved, and rejected UI states.
            </p>
          </li>
          <li>
            <p>
              Place <code>&lt;Resource /&gt;</code> boundaries around UI that
              can load independently, and use skeletons shaped like the final
              layout.
            </p>
          </li>
        </ul>

        <Quiz
          question="Where should you usually place a Resource boundary?"
          options={[
            {
              text: "Around the part of the UI that can load independently.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "Always around the whole application root.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Only around static text.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Only around components that do not fetch data.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what can appear without waiting for the slowest request."
          responseText="Exactly. A Resource boundary works best around UI that can load independently, so the rest of the page can keep moving."
        />

        <SubtitleWithAnchor title="Source code" level="h3" id="source-code" />

        <p>
          You can find the source code for chapter 10 2026 Edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-10---Streaming"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={10}
          text="Nice! You've learned how to stream dashboard UI with Resource boundaries, useResource$(), and loading skeletons."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={11}
          title="Mutating Data"
          text="The next 2026 chapter will continue the dashboard app with data mutations."
          disabledButton
        />
      </div>

      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
