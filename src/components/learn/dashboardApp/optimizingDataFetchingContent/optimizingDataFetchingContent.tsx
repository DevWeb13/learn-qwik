// src/components/learn/dashboardApp/optimizingDataFetch/optimizingDataFetch.tsx

import { component$ } from "@builder.io/qwik";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

export const OptimizingDataFetchingContent = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={8} chapterTitle="Optimizing Data Fetching" />
        <p>
          In the previous chapter, you fetched data for the Dashboard Overview
          page. However the data requests are creating an unintentional
          waterfall.
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

        <SubtitleWithAnchor
          title="Parallel Data Fetching"
          id="parallel-data-fetching"
        />

        <p>
          In the previous chapter, you fetched data for the Dashboard Overview
          page. However the data requests are creating an unintentional
          waterfall.
        </p>

        <p>
          With <code>routeLoaders$</code> the page is render blocking until all
          the data is fetched. Il est donc important de réduire le temps de
          chargement des données. It is important to reduce the data fetching
          time. To do this, we can fetch data in parallel.
        </p>

        <p>
          For the moment with sequential data fetching, in your application, the{" "}
          <code>useFetchData()</code> request time is 1.23s. We can reduce this
          time by fetching data in parallel.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          {/* <RevenueChart
            alt="Revenue chart showing the total revenue for the last 12 months"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          /> */}
        </figure>
      </div>
    </>
  );
});
