// src/components/learn/dashboardApp2026/streamingContent2026/latestInvoicesSoluce2026.tsx

import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const LatestInvoicesSoluce = component$(() => {
  return (
    <>
      <p>Dashboard Page:</p>

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
            totalPaidInvoices,
            totalPendingInvoices,
            numberOfInvoices,
            numberOfCustomers,
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
    </>
  );
});
