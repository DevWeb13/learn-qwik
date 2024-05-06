// src/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

export const FetchingDataContent = component$(() => {
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={7} chapterTitle="Fetching Data" />
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
                "How server$() functions can be used to fetch data from a database.",
              icon: "server",
            },
            {
              title: "??????????",
              icon: "waterfall",
            },
            {
              title: "??????????",
              icon: "twoConnectedPoints",
            },
          ]}
        />
      </div>
    </>
  );
});
