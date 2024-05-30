// src/components/learn/dashboardApp/streamingContent/streaming.tsx

import { component$ } from "@builder.io/qwik";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

export const StreamingContent = component$(() => {
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
                "How to implement streaming with routeLoader$ et <Resource />.",
              icon: "relationPoint",
            },
            {
              title:
                "How to implement streaming with useResource$ et <Resource />.",
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
      </div>
    </>
  );
});
