// src/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
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

        <SubtitleWithAnchor title="Database queries" id="database-queries" />

        <p>
          When you're developing a full-stack application with Qwik, you'll also
          need to write logic to interact with your database. For{" "}
          <BlankLink
            href="https://aws.amazon.com/relational-database/"
            text="relational databases"
          />{" "}
          like Postgres, this can be done with SQL or an{" "}
          <BlankLink
            text="ORM"
            href="https://vercel.com/docs/storage/vercel-postgres/using-an-orm"
          />{" "}
          like
          <BlankLink href="https://www.prisma.io/" text="Prisma" />.
        </p>

        <p>Here are a few cases where you'll need to write database queries:</p>

        <ul>
          <li>
            When creating your API endpoints, you need to write logic to
            interact with your database.
          </li>
          <li>
            With Qwik, using server functions like <code>`server$()`</code>, you
            can directly interact with your database without going through an
            external API layer, avoiding exposing your database secrets to the
            client.
          </li>
        </ul>

        <Quiz
          question="In which of these scenarios should you not query your database directly?"
          options={[
            {
              text: "When you're fetching data on the client",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "When you're fetching data on the server",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "When you're creating your own API layer to interact with your database",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "When you're using a crystal ball to predict the data – far less reliable and notably more mystical. 🔮",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about when you'd use an API layer."
          responseText="That's right, you should not query your database directly when fetching data on the client as this would expose your database secrets."
        />

        <p>
          Let's learn more about{" "}
          <BlankLink href="https://qwik.dev/docs/server$/" text="server$()" />{" "}
          functions.
        </p>

        <SubtitleWithAnchor
          title="Fetching data with server$() functions"
          id="fetching-data-with-server$()-functions"
        />

        <p>
          In Qwik,{" "}
          <BlankLink href="https://qwik.dev/docs/server$/" text="`server$()`" />{" "}
          functions allow you to create server-side functions that execute
          solely on the server. This makes them an excellent choice for
          accessing databases or performing server-only tasks.
        </p>
        <ul>
          <li>
            <code>`server$()`</code> acts as an RPC (Remote Procedure Call)
            mechanism between the client and server, similar to a traditional
            HTTP endpoint but with strong typing thanks to TypeScript, which
            eases maintenance. 🛠️
          </li>
          <li>
            Additionally, <code>`server$()`</code> can read HTTP cookies,
            headers, or environment variables, offering versatile server-side
            functionality. 🌍
          </li>
          <li>
            <code>`server$()`</code> can accept any number of arguments and
            return any value that can be serialized by Qwik, including
            primitives, objects, arrays, big integers, JSX nodes, and even
            Promises. 📊
          </li>
        </ul>
        <p>
          This integrated approach in Qwik ensures efficient and secure data
          retrieval while optimizing client-server interactions for enhanced
          application performance. ⚡
        </p>

        <Quiz
          question="What is the primary benefit of using server$() functions to fetch data?"
          options={[
            {
              text: "Strong typing thanks to TypeScript",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Efficient and secure data retrieval",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Versatile server-side functionality",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Enhancing client-server communication",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Consider which feature is most critical for data fetching specifically."
          responseText="Exactly! The primary benefit of using server$() functions to fetch data is efficient and secure data retrieval."
        />
      </div>
    </>
  );
});
