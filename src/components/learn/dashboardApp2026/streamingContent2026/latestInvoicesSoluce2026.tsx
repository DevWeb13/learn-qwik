import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const LatestInvoicesSoluce = component$(() => {
  return (
    <>
      <p>Dashboard Page:</p>

      <CodeBlock
        code={`// src/routes/dashboard/index.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { fetchCardData } from "~/lib/data";
import { DashboardSkeleton } from "~/components/ui/skeletons";

export default component$(() => {
  const dataResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const cardData = await fetchCardData();
    return { cardData };
  });

  return (
    <main>
      <h1 class="lusitana mb-4 text-xl md:text-2xl">Dashboard</h1>
      <Resource
        value={dataResource}
        onResolved={({ cardData }) => {
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
                <LatestInvoices />
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
        <code>&lt;LatestInvoices&gt;</code> component. Remember to remove the
        props!:
      </p>

      <CodeBlock
        code={`// src/components/ui/dashboard/latest-invoices.tsx

import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { HiArrowPathOutline } from "@qwikest/icons/heroicons";
import { fetchLatestInvoices } from "~/lib/data";
import { LatestInvoicesSkeleton } from "~/components/ui/skeletons";

export const LatestInvoices = component$(() => {
  const latestInvoicesResource = useResource$(async ({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());

    const latestInvoices = await fetchLatestInvoices();
    return { latestInvoices };
  });
  return (
    <Resource
      value={latestInvoicesResource}
      onResolved={({ latestInvoices }) => {
        return (
          <div class="flex w-full flex-col md:col-span-4">
            <h2 class="lusitana mb-4 text-xl md:text-2xl">Latest Invoices</h2>
            <div class="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
              <div class="bg-white px-6">
                {latestInvoices.map((invoice, i) => {
                  return (
                    <div
                      key={invoice.id}
                      class={
                        "flex flex-row items-center justify-between py-4" +
                        (i !== 0 ? " border-t" : "")
                      }
                    >
                      <div class="flex items-center">
                        <img
                          src={invoice.image_url}
                          alt={\`\${invoice.name}'s profile picture\`}
                          class="mr-4 rounded-full"
                          width={32}
                          height={32}
                        />
                        <div class="min-w-0">
                          <p class="truncate text-sm font-semibold md:text-base">
                            {invoice.name}
                          </p>
                          <p class="hidden text-sm text-gray-500 sm:block">
                            {invoice.email}
                          </p>
                        </div>
                      </div>
                      <p
                        class={\`lusitana truncate text-sm font-medium md:text-base\`}
                      >
                        {invoice.amount}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div class="flex items-center pb-2 pt-6">
                <HiArrowPathOutline class="h-5 w-5 text-gray-500" />
                <h3 class="ml-2 text-sm text-gray-500 ">Updated just now</h3>
              </div>
            </div>
          </div>
        );
      }}
      onRejected={(error) => {
        return <div>Error: {error.message}</div>;
      }}
      onPending={() => {
        return <LatestInvoicesSkeleton />;
      }}
    />
  );
});`}
        icon="typescript"
        language="tsx"
        text="src/components/ui/dashboard/latest-invoices.tsx"
      />
    </>
  );
});
