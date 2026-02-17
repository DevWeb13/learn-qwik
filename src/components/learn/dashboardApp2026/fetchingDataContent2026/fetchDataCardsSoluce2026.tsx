import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const FetchDataCardsSoluce = component$(() => {
  return (
    <>
      <CodeBlock
        code={`// /src/routes/dashboard/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { SideNav } from "~/components/ui/dashboard/sidenav";
import { routeLoader$ } from "@builder.io/qwik-city";
import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "~/lib/data";

export const useFetchRevenue = routeLoader$(async () => {
  const revenue = await fetchRevenue();
  return revenue;
});

export const useFetchLatestInvoices = routeLoader$(async () => {
  const latestInvoices = await fetchLatestInvoices();
  return latestInvoices;
});

export const useFetchCardData = routeLoader$(async () => {
  const cardData = await fetchCardData();
  return cardData;
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
        text="src/routes/dashboard/layout.tsx"
        language="tsx"
        icon="typescript"
        decorations={[
          {
            start: { line: 5, character: 0 },
            end: { line: 5, character: 78 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 17, character: 0 },
            end: { line: 20, character: 3 },
            properties: { class: "newLine" },
          },
        ]}
      />

      <CodeBlock
        code={`// src/routes/dashboard/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  useFetchRevenue,
  useFetchLatestInvoices,
  useFetchCardData,
} from "./layout";
import { RevenueChart } from "~/components/ui/dashboard/revenue-chart";
import { Card } from "~/components/ui/dashboard/cards";
import { LatestInvoices } from "~/components/ui/dashboard/latest-invoices";

export default component$(() => {
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
        text="src/routes/dashboard/index.tsx"
        language="tsx"
        icon="typescript"
        decorations={[
          {
            start: { line: 6, character: 0 },
            end: { line: 6, character: 19 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 15, character: 0 },
            end: { line: 20, character: 31 },
            properties: { class: "newLine" },
          },
          {
            start: { line: 26, character: 0 },
            end: { line: 33, character: 10 },
            properties: { class: "newLine" },
          },
        ]}
      />
    </>
  );
});
