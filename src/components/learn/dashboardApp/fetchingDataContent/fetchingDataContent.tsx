// src/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import PageTitle from "~/components/UI/pageTitle/pageTitle";

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
      </div>
    </>
  );
});
