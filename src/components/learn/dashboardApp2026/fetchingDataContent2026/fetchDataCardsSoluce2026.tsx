import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const FetchDataCardsSoluce = component$(() => {
  return (
    <>
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
            start: { line: 5, character: 0 },
            end: { line: 9, character: 23 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 19, character: 0 },
            end: { line: 21, character: 3 },
            properties: { class: "newLine" },
          },
        ]}
      />

      <CodeBlock
        code={`// src/routes/dashboard/index.tsx
      
import { component$ } from "@builder.io/qwik";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import {
  useFetchCardData,
  useFetchLatestInvoices,
  useFetchRevenue,
} from "./layout";

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
            start: { line: 5, character: 0 },
            end: { line: 10, character: 18 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 15, character: 0 },
            end: { line: 15, character: 38 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 17, character: 0 },
            end: { line: 22, character: 21 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 28, character: 0 },
            end: { line: 37, character: 12 },
            properties: { class: "newLine" },
          },
        ]}
      />
    </>
  );
});
