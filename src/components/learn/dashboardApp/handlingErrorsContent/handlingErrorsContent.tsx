// src/components/learn/dashboardApp/handlingErrorsContent/handlingErrorsContent.tsx

import { component$, useSignal } from "@builder.io/qwik";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import { TryCatchFinallySoluceOne } from "./tryCatchFinallySoluceOne";
import { TryCatchFinallySoluceTwo } from "./tryCatchFinallySoluceTwo";

export const HandlingErrorsContent = component$(() => {
  const tryCatchFinallySoluceOne = useSignal(false);
  const tryCatchFinallySoluceTwo = useSignal(false);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={12} chapterTitle="Handling errors" />
        {/* A corriger */}
        <p>
          In the previous chapter, you learned how to mutate data using
          serverAction$(). Let's see how you can handle errors gracefully using
          JavaScript's try/catch statements and Next.js APIs for uncaught
          exceptions.
        </p>
        <TableOfTopicsCovered
          topics={[
            {
              title: "What serverAction$() are and how use them to mutate data",
              icon: "qwikLogo",
            },
            {
              title: "How to work with <Form /> or programmatically.",
              icon: "notebookWithLine",
            },
            {
              title: "Best practices for working with zod type validation.",
              icon: "threePoints",
            },
            {
              title:
                "How to redirect in server-side actions using requestEvent.",
              icon: "recycling",
            },
            {
              title: "How to create dynamic route segments with specific IDs.",
              icon: "relationPoint",
            },
          ]}
        />
        {/* Fin A corriger */}
        <SubtitleWithAnchor
          title="Adding try/catch to Server Actions"
          id="adding-try-catch-to-server-actions"
        />
        <p>
          First, let's add JavaScript's try/catch/finally statements to your
          Server Actions to allow you to handle errors gracefully.
        </p>
        <p>
          If you know how to do this, spend a few minutes updating your Server
          Actions, or you can copy the code below:
        </p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (tryCatchFinallySoluceOne.value = !tryCatchFinallySoluceOne.value)
            }
          >
            <span class="button_prefix">
              {tryCatchFinallySoluceOne.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {tryCatchFinallySoluceOne.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {tryCatchFinallySoluceOne.value && <TryCatchFinallySoluceOne />}
        </div>

        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (tryCatchFinallySoluceTwo.value = !tryCatchFinallySoluceTwo.value)
            }
          >
            <span class="button_prefix">
              {tryCatchFinallySoluceTwo.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {tryCatchFinallySoluceTwo.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {tryCatchFinallySoluceTwo.value && <TryCatchFinallySoluceTwo />}
        </div>

        <p>
          In this updated version of the <code>actions.ts</code> file, we made
          important improvements to better handle errors and ensure proper
          closure of database connections.
        </p>

        <p>
          We added <code>try...catch...finally</code> blocks in the{" "}
          <code>createInvoice</code>, <code>updateInvoice</code>, and{" "}
          <code>deleteInvoice</code> functions. The <code>try</code> block is
          used to execute the SQL query safely. The <code>catch</code> block
          captures any errors and logs them to the console for easier debugging.
          The <code>finally</code> block ensures that the database connection is
          always closed with <code>pool.end()</code>, even in case of an error,
          preventing connection leaks.
        </p>

        <p>
          We also added a return value of <code>{"success: true"}</code> or{" "}
          <code>{"success: false"}</code> to clearly indicate whether the
          operation was successful or not. This makes error handling easier in{" "}
          <code>routeAction$</code>, <code>routeLoader$</code>, and{" "}
          <code>useResource$</code>. For example, with this format, it’s easy to
          check the result of an action with <code>if (!success)</code>, which
          helps to better control the data flow in the frontend.
        </p>
      </div>
    </>
  );
});
