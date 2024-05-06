// src/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
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
      </div>
    </>
  );
});
