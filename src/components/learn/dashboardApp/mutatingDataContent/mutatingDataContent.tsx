// src/components/learn/dashboardApp/mutatingDataContent/mutatingDataContent.tsx

import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import BlankLink from "~/components/UI/blankLink/blankLink";

import AddCreateInvoiceRoute from "~/assets/img/addCreateInvoiceRoute.png?jsx";
import CreateInvoicesPage from "~/assets/img/createInvoicesPage.png?jsx";
import AddEditInvoiceRoute from "~/assets/img/addEditInvoiceRoute.png?jsx";
import EditInvoicePage from "~/assets/img/editInvoicePage.png?jsx";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";

export const MutatingDataContent = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={11} chapterTitle="Mutating Data" />
        <p>
          In the previous chapter, you implemented search and pagination using
          URL Search Params and Qwik-city APIs. Let's continue working on the
          Invoices page by adding the ability to create, update, and delete
          invoices!
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
        <SubtitleWithAnchor
          title="What are routeAction$()?"
          id="what-are-routeactions"
        />
        <p>
          <code>
            <BlankLink
              href="https://qwik.dev/docs/action/#routeaction"
              text="routeAction$()"
            />
          </code>
          is used to define functions called actions that execute exclusively on
          the server, and only when explicitly called. Actions can have side
          effects such as writing to a database or sending an email, that cannot
          happen during client-side rendering. This makes them ideal for
          handling form submissions, performing operations with side effects,
          and then returning data back to the client/browser where it can be
          used to update the UI.
        </p>
        <p>
          Actions can be declared using <code>routeAction$()</code> or{" "}
          <code>globalAction$()</code> exported from{" "}
          <code>@builder.io/qwik-city</code>.
        </p>
        <SubtitleWithAnchor
          title="Using forms with routeAction$()"
          id="using-forms-with-routeactions"
        />
        <p>
          The best way to call an action is using the <code>{`<Form/>`}</code>{" "}
          component exported in <code>@builder.io/qwik-city</code>.
        </p>
        <p>For example:</p>
        <CodeBlock
          code={`import { component$ } from '@builder.io/qwik';
import { routeAction$, Form } from '@builder.io/qwik-city';

// Define a routeAction$() function
export const useAddUser = routeAction$(async (user) => {
  const userID = await db.users.add(user);
  return {
    success: true,
    userID,
  };
});
 
export default component$(() => {
  // Use the "useAddUser" action
  const action = useAddUser();
  return (
    // Invoke the action using the "action" attribute
    <Form action={action}>
      <input name="name" />
      <button type="submit">Add user</button>
      {action.value?.success && <p>User added successfully</p>}
    </Form>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/index.tsx"
        />
        <p>
          Under the hood, the <code>{`<Form/>`}</code> component uses a native
          HTML <code>{`<Form/>`}</code> element, so it will work without
          JavaScript.
        </p>
        <p>
          When JS is enabled, the <code>{`<Form/>`}</code> component will
          intercept the form submission and trigger the action in SPA mode.
          Allowing for a full SPA experience.
        </p>
        <Quiz
          question="What happens when you use the <Form/> component from @builder.io/qwik-city in a Qwik application, and JavaScript is disabled?"
          options={[
            {
              text: "The form does not work at all",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "The form submits data in the traditional way, reloading the page",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "The form displays an error message indicating that JavaScript is required",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "The form only functions in read-only mode",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Consider how traditional HTML forms work without JavaScript"
          responseText="Correct! The <Form/> component from @builder.io/qwik-city relies on a native HTML <form> element. If JavaScript is disabled, the form behaves like a standard HTML form, submitting data to the server and reloading the page upon submission. This ensures that the application remains functional even without JavaScript."
        />
        <p>Let's see how it all works together!</p>
        <SubtitleWithAnchor
          title="Creating a new invoice"
          id="creating-a-new-invoice"
        />
        <p>Here are the steps you'll take to create a new invoice:</p>
        <ol class="list-decimal">
          <li>Create a form to capture the user's input.</li>
          <li>Create a routeAction$()</li>
          <li>Check the data from the form.</li>
          <li>Validate the data.</li>
          <li>Prepare and insert the data into the database.</li>
          <li>Redirect the user back to invoices page.</li>
        </ol>
        <SubtitleWithAnchor
          title="1. Create a new route and form"
          id="1.-create-a-new-route-and-form"
          level="h3"
        />
        <p>
          To start, inside <code>src/routes/dashboard/invoices</code> folder,
          add a new route segment called <code>/create</code> with a{" "}
          <code>index.tsx</code> file:
        </p>
        <figure>
          <AddCreateInvoiceRoute
            alt="Invoices folder with a nested create folder, and a index.tsx file inside it"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          You'll be using this route to create new invoices. Inside your{" "}
          <code>index.tsx</code> file, paste the following code, then spend some
          time studying it:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { CreateForm } from "~/components/ui/invoices/create-form";

export default component$(() => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <CreateForm />
    </main>
  );
});
`}
          text="src/routes/dashboard/invoices/create/index.tsx"
          icon="typescript"
          language="tsx"
        />
        <p>
          Your page now has a breadcrumb navigation and a{" "}
          <code>{`<CreateForm>`}</code> component. To save time, we've already
          created the <code>{`<CreateForm>`}</code> component for you.
        </p>
        <p>
          Navigate to <code>src/components/ui/invoices/create-form.tsx</code>{" "}
          and you'll see that the form:
        </p>
        <ul>
          <li>
            Has one <code>&lt;select&gt;</code> (dropdown) element with a list
            of <strong>customers</strong>.
          </li>
          <li>
            Has one <code>&lt;input&gt;</code> element for the{" "}
            <strong>amount</strong> with <code>type="number"</code>.
          </li>
          <li>
            Has two <code>&lt;input&gt;</code> elements for the status with{" "}
            <code>type="radio"</code>.
          </li>
          <li>
            Has one button with <code>type="submit"</code>.
          </li>
        </ul>
        <p>
          For fetch and display the list of customers we will use the{" "}
          <code>fetchCustomers()</code> function import from{" "}
          <code>~/lib/data"</code>.
        </p>
        <p>
          In the <code>src/lib/data.ts</code> file, paste the following code:
        </p>
        <CodeBlock
          code={`// src/lib/data.ts

import { createPool } from '@vercel/postgres';
import { CustomerField, InvoicesTable, LatestInvoiceRaw, Revenue } from './definitions';
import { formatCurrency } from './utils';
import { server$ } from '@builder.io/qwik-city';

// ... Other functions

export const fetchCustomers = server$(async function () {
  const pool = await getPool();
  try {
    const data = await pool.query<CustomerField>('SELECT id, name FROM customers ORDER BY name ASC');
    const customers = data.rows;
    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all customers.');
  } finally {
    await pool.end();
  }
});`}
          icon="typescript"
          language="tsx"
          text="src/lib/data.ts"
          hideLineNumbers
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 88 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 21, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          On{" "}
          <BlankLink
            href="http://localhost:5173/dashboard/invoices/create"
            text="http://localhost:5173/dashboard/invoices/create"
          />
          , you should see the following UI:
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <CreateInvoicesPage
            alt="Create invoices page with breadcrumbs and form"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <SubtitleWithAnchor
          title="2. Create a routeAction$()"
          id="2.-create-a-routeaction"
          level="h3"
        />
        <p>
          Great, now let's create a <code>routeAction$()</code> to handle the
          form submission.
        </p>
        <p>
          In the <code>src/routes/dashboard/invoices/create/index.tsx</code>{" "}
          file, create a new <code>routeAction$()</code> function called{" "}
          <code>useCreateInvoice</code>:{" "}
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeAction$ } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { CreateForm } from "~/components/ui/invoices/create-form";

export const useCreateInvoice = routeAction$(async (data) => {});

export default component$(() => {
// ... Other code
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/create/index.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 53 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 65 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, in your <code>{`<CreateForm>`}</code> component import and use
          the <code>useCreateInvoice</code> action:
        </p>
        <CodeBlock
          code={`// src/components/ui/invoices/create-form.tsx

import { Link, Form } from "@builder.io/qwik-city";
import {
  HiCheckOutline,
  HiClockOutline,
  HiCurrencyDollarOutline,
  HiUserCircleOutline,
} from "@qwikest/icons/heroicons";
import { Button } from "~/components/ui/button";
import { component$, Resource, useResource$ } from "@builder.io/qwik";

import { fetchCustomers } from "~/lib/data";
import { useCreateInvoice } from "~/routes/dashboard/invoices/create";

export const CreateForm = component$(() => {
  const customersResource = useResource$(async () => {
    const customers = await fetchCustomers();
    return customers;
  });
  // Use the "useCreateInvoice" action
  const createInvoiceAction = useCreateInvoice();

  return (
    <Form
      // Invoke the action using the "action" attribute
      action={createInvoiceAction}
    >
    // ... Other code
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/create-form.tsx"
          decorations={[
            {
              start: { line: 13, character: 0 },
              end: { line: 13, character: 70 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 21, character: 0 },
              end: { line: 21, character: 49 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 26, character: 0 },
              end: { line: 26, character: 34 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <SubtitleWithAnchor
          title="3. Check the data from the form"
          id="3.-check-the-data-from-the-form"
          level="h3"
        />
        <p>
          Back in your{" "}
          <code>src/routes/dashboard/invoices/create/index.tsx</code> and add
          this log:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

// ... Other code
export const useCreateInvoice = routeAction$(async (data) => {
  // Test it out:
  console.log(data)
});
// ... Other code`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/create/index.tsx"
          hideLineNumbers
        />
        <p>
          To check everything is connected correctly, go ahead and try out the
          form. After submitting, you should see the data you just entered into
          the form logged in your terminal.
        </p>
        <p>
          Now that your data is being passed correctly, you can start working on
          the logic to insert the data into the database.
        </p>
        <SubtitleWithAnchor
          title="4. Validate the data with Zod"
          id="4.-validate-the-data-with-zod"
          level="h3"
        />
        <p>
          Before sending the form data to your database, you want to ensure it's
          in the correct format and with the correct types. If you remember from
          earlier in the course, your invoices table expects data in the
          following format:
        </p>
        <CodeBlock
          code={`export type Invoice = {
  id: string; // Will be generated by the database
  customer_id: string;
  amount: number; // Stored in cents
  date: string;
  status: "pending" | "paid";
};`}
          icon="typescript"
          language="tsx"
          text="src/lib/definitions.ts"
        />
        <p>
          So far, you only have the <code>customer_id</code>,{" "}
          <code>amount</code>, and <code>status</code> from the form.
        </p>
        <SubtitleWithAnchor
          title="Type validation and coercion"
          id="type-validation-and-coercion"
          level="h4"
        />
        <p>
          To handle type validation, you have a few options. While you can
          manually validate types, using a type validation library can save you
          time and effort. For your example, we'll use{" "}
          <BlankLink text="Zod" href="https://zod.dev/" />.
        </p>
        <p>
          Qwik comes with built-in support for{" "}
          <BlankLink text="Zod" href="https://zod.dev/" />, a TypeScript-first
          schema validation that can be used directly with actions, using the
          zod$() function.
        </p>
        <p>
          Actions + <BlankLink text="Zod" href="https://zod.dev/" /> allows to
          create type safe forms, where the data is validated server side before
          the action is executed.
        </p>
        <p>
          In your <code>src/routes/dashboard/invoices/create/index.tsx</code>
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx
  
import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { CreateForm } from "~/components/ui/invoices/create-form";

// Define a Zod schema
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number().positive(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

// Create a new Zod schema for the form
const CreateInvoiceSchema = FormSchema.omit({ id: true, date: true });

export const useCreateInvoice = routeAction$(async (data) => {
  // Logic to insert the data into the database
   
// Validate the data with 'CreateInvoiceSchema' Zod schema before inserting into the database
}, zod$(CreateInvoiceSchema));

export default component$(() => {
// ... Other code
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/create/index.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 62 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 14, character: 3 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 16, character: 0 },
              end: { line: 17, character: 70 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 20, character: 0 },
              end: { line: 20, character: 47 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 22, character: 0 },
              end: { line: 23, character: 30 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          When submitting data to a <code>routeAction()</code>, the data is
          validated against the Zod schema. If the data is invalid, the action
          will put the validation error in the <code>routeAction.value</code>{" "}
          property.
        </p>
        <p>
          Please refer to the <BlankLink text="Zod" href="https://zod.dev/" />{" "}
          for more information on how to use Zod schemas.
        </p>
        <p>
          Now, if you go to{" "}
          <BlankLink
            text="http://localhost:5173/dashboard/invoices/create/"
            href="http://localhost:5173/dashboard/invoices/create/"
          />{" "}
          and you submit your form with invalid data, the action will not be
          executed, and you should see an error message in the server's console.
        </p>
        <CodeBlock
          code={`VALIDATION ERROR
action$() zod validated failed 
  - Issues: [
  {
    code: 'invalid_type',
    expected: 'string',
    received: 'undefined',
    path: [ 'customerId' ],
    message: 'Required'
  },
  {
    code: 'too_small',
    minimum: 0,
    type: 'number',
    inclusive: false,
    exact: false,
    message: 'Number must be greater than 0',
    path: [ 'amount' ]
  },
  {
    expected: "'pending' | 'paid'",
    received: 'undefined',
    code: 'invalid_type',
    path: [ 'status' ],
    message: 'Required'
  }
]`}
          icon="bash"
          language="bash"
          text="Terminal"
        />
        <p>
          Great's, now you have a form that validates the data before inserting
          it into the database.
        </p>
        <SubtitleWithAnchor
          title="5. Insert the data into the database"
          id="5.-insert-the-data-into-the-database"
          level="h3"
        />
        <p>
          Now that you have validated the data, you can insert it into the
          database. In your <code>src/lib</code> folder create a new file called{" "}
          <code>actions.ts</code>.
        </p>
        <p>
          We use this file for all our actions. In this file, you will create a
          new action function called <code>createInvoice</code>:
        </p>
        <CodeBlock
          code={`// src/lib/actions.ts

export const createInvoice = (async function (data: { customerId: string, amount: number, status: string }) {});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
        />
        <p>
          This function receives in parameters the data from the{" "}
          <code>routeLoader$()</code>.
        </p>
        <p>
          This data has already been checked in the <code>routeLoader$()</code>{" "}
          with <code>zod$</code>. (If the data is invalid, the action will not
          be executed).
        </p>
        <SubtitleWithAnchor
          title="Storing values in cents"
          id="storing-values-in-cents"
          level="h4"
        />
        <p>
          It's usually good practice to store monetary values in cents in your
          database to eliminate JavaScript floating-point errors and ensure
          greater accuracy.
        </p>
        <p>Let's convert the amount into cents:</p>
        <CodeBlock
          code={`// src/lib/actions.ts

export const createInvoice = (async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 54 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <SubtitleWithAnchor
          title="Creating new dates"
          id="creating-new-dates"
          level="h4"
        />
        <p>
          Finally, let's create a new date with the format "YYYY-MM-DD" for the
          invoice's creation date:
        </p>
        <CodeBlock
          code={`// src/lib/actions.ts

export const createInvoice = (async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
  const date = new Date().toISOString().split('T')[0];
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
          decorations={[
            {
              start: { line: 4, character: 0 },
              end: { line: 4, character: 54 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now that you have all the values you need for your database, you can
          create an SQL query to insert the new invoice into your database and
          pass in the variables:
        </p>
        <CodeBlock
          code={`// src/lib/actions.ts

import { getPool } from './data';

export const createInvoice = (async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
  const date = new Date().toISOString().split('T')[0];
  
  // Connect to the database
  const pool = await getPool();

  await pool.query(
    \`INSERT INTO invoices (customer_id, amount, status, date)
      VALUES ($1, $2, $3, $4)\`,
    [data.customerId, amountInCents, data.status, date],
  );

  //deconnect 
  pool.end();

  return {
    customerId: data.customerId,
    amount: amountInCents,
    status: data.status,
    date: date
  };
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
          decorations={[
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 33 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 8, character: 0 },
              end: { line: 25, character: 4 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          In this code, you're using the <code>getPool()</code> function from
          the <code>data.ts</code> file to connect to the database. We need
          export it from the file.
        </p>
        <CodeBlock
          code={`// src/lib/data.ts

import { createPool } from '@vercel/postgres';
import { CustomerField, InvoicesTable, LatestInvoiceRaw, Revenue } from './definitions';
import { formatCurrency } from './utils';
import { server$ } from '@builder.io/qwik-city';

export const getPool = server$(function () {
// ... Other code
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/data.ts"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 44 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, all we need to do is import and use our{" "}
          <code>createInvoice()</code> function in our{" "}
          <code>routeAction$()</code>
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

// ... Other code

import { createInvoice } from "~/lib/actions";

export const useCreateInvoice = routeAction$(async (data) => {
  await createInvoice(data);
}, zod$(CreateInvoice));

// ... Other code`}
          icon="typescript"
          language="typescript"
          text="src/routes/dashboard/invoices/create/index.tsx"
          decorations={[
            {
              start: { line: 4, character: 0 },
              end: { line: 4, character: 46 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 28 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Right now, we're not handling any errors. We'll do it in the next
          chapter. For now, let's move on to the next step.
        </p>
        <SubtitleWithAnchor title="6. Redirect" id="6.-redirect" level="h3" />
        <p>
          After successfully inserting the data into the database, you want to
          redirect the user back to the invoices page. To do this, you can use
          the{" "}
          <code>
            <BlankLink
              href="https://qwik.dev/docs/middleware/#redirect"
              text="redirect"
            />{" "}
          </code>{" "}
          method from the{" "}
          <code>
            {" "}
            <BlankLink
              href="https://qwik.dev/docs/action/#http-request-and-response"
              text="requestEvent"
            />
          </code>{" "}
          object.
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

// ... Other code

import { createInvoice } from "~/lib/actions";

export const useCreateInvoice = routeAction$(async (data, { redirect }) => {
  await createInvoice(data);
  throw redirect(302, "/dashboard/invoices");
}, zod$(CreateInvoice));

// ... Other code`}
          icon="typescript"
          language="typescript"
          text="src/routes/dashboard/invoices/create/index.tsx"
          decorations={[
            {
              start: { line: 6, character: 0 },
              end: { line: 6, character: 76 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 8, character: 0 },
              end: { line: 8, character: 45 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, when you submit the form, you should be redirected back to the
          invoices page.
        </p>
        <p>
          In the next chapter, you'll learn how to handle errors and display
          them to the user.
        </p>
        <p>
          Congratulations! You've just implemented your first Server Action.
          Test it out by adding a new invoice, if everything is working
          correctly:
        </p>
        <ol class="list-decimal">
          <li>
            You should be redirected to the <code>/dashboard/invoices</code>{" "}
            route on submission.
          </li>
          <li>You should see the new invoice at the top of the table.</li>
        </ol>
        <SubtitleWithAnchor
          title="Updating an invoice"
          id="updating-an-invoice"
        />
        <p>
          The updating invoice form is similar to the create an invoice form,
          except you'll need to pass the invoice <code>id</code> to update the
          record in your database. Let's see how you can get and pass the
          invoice <code>id</code>.
        </p>
        <p>These are the steps you'll take to update an invoice:</p>
        <ol class="list-decimal">
          <li>
            Create a new dynamic route segment with the invoice <code>id</code>.
          </li>
          <li>
            Read the invoice <code>id</code> from the URL params.
          </li>
          <li>Fetch the specific invoice from your database.</li>
          <li>Pre-populate the form with the invoice data.</li>
          <li>Update the invoice data in your database.</li>
        </ol>
        <SubtitleWithAnchor
          title="1. Create a Dynamic Route Segment with the invoice id"
          id="1.-create-a-dynamic-route-segment-with-the-invoice-id"
          level="h3"
        />
        <p>
          Qwik allows you to create{" "}
          <BlankLink
            href="https://qwik.dev/docs/routing/#dynamic-route-segments"
            text="Dynamic Route Segments"
          />{" "}
          when you don't know the exact segment name and want to create routes
          based on data. This could be blog post titles, product pages, etc. You
          can create dynamic route segments by wrapping a folder's name in
          square brackets. For example,&nbsp;<code>[id]</code>,&nbsp;
          <code>[post]</code> or <code>[slug]</code>.
        </p>
        <p>
          In your <code>/invoices</code> folder, create a new dynamic route
          called <code>[id]</code>, then a new route called <code>edit</code>{" "}
          with a <code>index.tsx</code> file. Your file structure should look
          like this:
        </p>
        <figure>
          <AddEditInvoiceRoute
            alt="Invoices folder with a nested [id] folder, and an edit folder inside it"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          In your <code>{`<Table>`}</code> component, you'll need to update the
          two <code>{`<UpdateInvoice />`}</code> buttons (mobile and desktop) to
          pass the invoice <code>id</code> as a parameter.
        </p>
        <CodeBlock
          code={`// src/components/ui/invoices/table.tsx

// ... Other code

export const Table = component$(() => {

  // ... Other code

  return (
    
    // ... Other code

    <div class="flex justify-end gap-2">
      <UpdateInvoice id={invoice.id} />
      <DeleteInvoice />
    </div>

    // ... Other code

    <td class="whitespace-nowrap py-3 pl-6 pr-3">
      <div class="flex justify-end gap-3">
        <UpdateInvoice id={invoice.id} />
        <DeleteInvoice />
      </div>
    </td>

    // ... Other code
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/table.tsx"
          decorations={[
            {
              start: { line: 13, character: 0 },
              end: { line: 13, character: 39 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 21, character: 0 },
              end: { line: 21, character: 41 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Navigate to your <code>&lt;UpdateInvoice /&gt;</code> component, and
          update the <code>href</code> of the <code>Link</code> to accept the{" "}
          <code>id</code> prop. You can use template literals to link to a
          dynamic route segment:
        </p>
        <CodeBlock
          code={`// src/components/ui/invoices/buttons.tsx

// ... Other code

export const UpdateInvoice = component$(({ id }: { id: string }) => {
  return (
    <Link
      href={\`/dashboard/invoices/\${id}/edit\`}
      class="rounded-md border p-2 hover:bg-gray-100"
    >
      <HiPencilOutline class="w-5" />
    </Link>
  );
});

// ... Other code`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/buttons.tsx"
          decorations={[
            {
              start: { line: 4, character: 0 },
              end: { line: 4, character: 69 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 45 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <SubtitleWithAnchor
          title="2. Read the invoice id from the URL params"
          id="2.-read-the-invoice-id-from-the-url-params"
          level="h3"
        />
        <p>
          Back on your
          <code>src/routes/dashboard/invoices/edit/index.tsx</code>
          file, paste the following code:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { EditInvoiceForm } from "~/components/ui/invoices/edit-form";

export default component$(() => {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: \`/dashboard/invoices/\${id}/edit\`,
            active: true,
          },
        ]}
      />
      <Resource
        value={dataComponentResource}
        onResolved={(data) => {
          const [invoice, customers] = data;
          return <EditInvoiceForm invoice={invoice} customers={customers} />;
        }}
        onPending={() => <div>Loading...</div>}
        onRejected={(error) => <div>Error: {error.message}</div>}
      />
    </main>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
        />
        <p>
          Notice how it's similar to your <code>/create</code> invoice page,
          except it imports a different form (from the{" "}
          <code>edit-form.tsx</code> file). This form should be{" "}
          <strong>pre-populated</strong> with a <code>value</code> for the
          customer's name, invoice amount, and status. To pre-populate the form
          fields, you need to fetch the specific invoice using <code>id</code>.
        </p>
        <p>Update your component to receive the prop:</p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { EditInvoiceForm } from "~/components/ui/invoices/edit-form";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  const id = loc.params.id;

  // ... Other code

})`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 52 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 8, character: 0 },
              end: { line: 9, character: 27 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <SubtitleWithAnchor
          title="3. Fetch the specific invoice"
          id="3.-fetch-the-specific-invoice"
          level="h3"
        />
        <p>Then:</p>
        <ul>
          <li>
            Import a new function called <code>fetchInvoiceById</code> and pass
            the <code>id</code> as an argument.
          </li>
          <li>
            Import <code>fetchCustomers</code> to fetch the customer names for
            the dropdown.
          </li>
        </ul>
        <p>
          You can use <code>Promise.all</code> to fetch both the invoice and
          customers in parallel:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { EditInvoiceForm } from "~/components/ui/invoices/edit-form";
import { useLocation } from "@builder.io/qwik-city";
import { fetchCustomers, fetchInvoiceById } from "~/lib/data";

export default component$(() => {
  const loc = useLocation();
  const id = loc.params.id;

  const dataComponentResource = useResource$(async () => {
    return await Promise.all([fetchInvoiceById(id), fetchCustomers()]);
  });

  // ... Other code

})`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
          decorations={[
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 70 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 6, character: 0 },
              end: { line: 6, character: 62 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 12, character: 0 },
              end: { line: 14, character: 5 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          In your <code>src/lib/data.ts</code> file, create a new function to
          fetch the invoice by <code>id</code>:
        </p>
        <CodeBlock
          code={`// src/lib/data.ts

// ... Other functions

export const fetchInvoiceById = server$(async function (id: string) {
  const pool = await getPool();
  try {
    const data = await pool.query<InvoicesTable>(\`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = $1;
    \`, [id]);

    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      amount: invoice.amount / 100,
    }));
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  } finally {
    await pool.end();
  }
});`}
          icon="typescript"
          language="tsx"
          text="src/lib/data.ts"
        />
        <p>
          Great! Now, test that everything is wired correctly. Visit{" "}
          <BlankLink
            href="http://localhost:5173/dashboard/invoices"
            text="http://localhost:5173/dashboard/invoices"
          />{" "}
          and click on the Pencil icon to edit an invoice. After navigation, you
          should see a form that is pre-populated with the invoice details:
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <EditInvoicePage
            alt="Edit invoices page with breadcrumbs and form"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          The URL should also be updated with an <code>id</code> as follows:{" "}
          <code>http://localhost:3000/dashboard/invoice/uuid/edit</code>
        </p>
        <blockquote class="p-3 text-sm">
          <p>
            <strong>UUIDs vs. Auto-incrementing Keys</strong>
          </p>
          <p>
            We use UUIDs instead of incrementing keys (e.g., 1, 2, 3, etc.).
            This makes the URL longer; however, UUIDs eliminate the risk of ID
            collision, are globally unique, and reduce the risk of enumeration
            attacks - making them ideal for large databases.
          </p>
          <p>
            However, if you prefer cleaner URLs, you might prefer to use
            auto-incrementing keys.
          </p>
        </blockquote>
        <SubtitleWithAnchor
          title="4. Get the id into the routeAction$()"
          id="4.-get-the-id-into-the-routeaction"
          level="h3"
        />

        <p>
          <code>routeAction$</code> and <code>globalAction$</code> have access
          to the{" "}
          <code>
            <BlankLink
              href="https://qwik.dev/docs/action/#http-request-and-response"
              text="RequestEvent"
            />
          </code>{" "}
          object which includes information about the current HTTP request and
          response.
        </p>

        <p>
          This allows actions to access the request headers, cookies, url and
          environment variables within the <code>routeAction$</code> function.
        </p>

        <p>
          Now that you have the invoice <code>id</code>, you can pass it to the{" "}
          <code>routeAction$()</code> function to update the invoice in the
          database.
        </p>

        <p>
          In your <code>src/routes/dashboard/invoices/[id]/edit/index.tsx</code>{" "}
          file, create a new <code>routeAction$()</code> function called{" "}
          <code>useUpdateInvoice</code>:
        </p>

        <p>
          You can use the <code>params</code> object to access the{" "}
          <code>id</code> from the URL:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

// ... Other code

export const useUpdateInvoice = routeAction$(async (data, { params }) => {
  console.log("id", params.id);
});

export default component$(() => {

  // ... Other code
  
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
        />
        <p>In your form:</p>
        <CodeBlock
          code={`// src/components/ui/invoices/edit-form.tsx

// ... Other code

import { useUpdateInvoice } from "~/routes/dashboard/invoices/[id]/edit";

export const EditInvoiceForm = component$(
  ({
    invoice,
    customers,
  }: {
    invoice: InvoiceForm;
    customers: CustomerField[];
  }) => {
    const updateInvoiceAction = useUpdateInvoice();

    return (
      <Form action={updateInvoiceAction}>

// ... Other code

    );
  },
);`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/edit-form.tsx"
          decorations={[
            {
              start: { line: 4, character: 0 },
              end: { line: 4, character: 73 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 14, character: 0 },
              end: { line: 14, character: 51 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 17, character: 0 },
              end: { line: 17, character: 41 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, if you submit the form, you should see the invoice{" "}
          <code>id</code> logged in your terminal.
        </p>
        <blockquote class="p-3 text-sm">
          <p>
            <strong>Note:</strong> Using a hidden input field in your form also
            works (e.g.{" "}
            <code>
              &lt;input type="hidden" name="id" value={`{invoice.id}`} /&gt;
            </code>
            ). However, the values will appear as full text in the HTML source,
            which is not ideal for sensitive data like IDs.
          </p>
        </blockquote>
        <SubtitleWithAnchor
          title="5. Update the invoice in the database"
          id="5.-update-the-invoice-in-the-database"
          level="h3"
        />
        <p>
          Similary to the <code>createInvoice</code> action, here you are:
        </p>
        <ol class="list-decimal">
          <li>
            Check the data with <code>Zod</code> before inserting it into the
            database.
          </li>
          <li>
            Create a new action called <code>updateInvoice</code> to update the
            invoice in the database.
          </li>
          <li>
            Redirect the user back to the invoices page after successfully
            updating the invoice.
          </li>
        </ol>
        <p>
          In your <code>src/routes/dashboard/invoices/[id]/edit/index.tsx</code>{" "}
          file:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { routeAction$, useLocation, z, zod$ } from "@builder.io/qwik-city";
import { Breadcrumbs } from "~/components/ui/invoices/breadcrumbs";
import { EditInvoiceForm } from "~/components/ui/invoices/edit-form";
import { fetchCustomers, fetchInvoiceById } from "~/lib/data";
import { updateInvoice } from "~/lib/actions";

const FormSchema = z.object({
  customerId: z.string(),
  amount: z.coerce.number().positive(),
  status: z.enum(["pending", "paid"]),
});

export const useUpdateInvoice = routeAction$(async (data, { params }) => {
  const dataWithId = { ...data, id: params.id };
  await updateInvoice(dataWithId);
}, zod$(FormSchema));

export default component$(() => {

  // ... Other code
  
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 75 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 46 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 13, character: 3 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 16, character: 0 },
              end: { line: 18, character: 21 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          In your <code>src/lib/actions.ts</code> file, create a new action
          called <code>updateInvoice</code>:
        </p>
        <CodeBlock
          code={`// src/lib/actions.ts

// ... Other code

export const updateInvoice = server$(async function (data: { id: string, customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
  
  const pool = await getPool();

    await pool.query(
      \`UPDATE invoices
       SET customer_id = $1, amount = $2, status = $3
       WHERE id = $4\`,
      [data.customerId, amountInCents, data.status, data.id],
    );

    //deconnect
    pool.end();

    return {
      id: data.id,
      customerId: data.customerId,
      amount: amountInCents,
      status: data.status,
    };
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
        />
        <p>
          Redirect the user back to the invoices page after updating the
          invoice:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/[id]/edit/index.tsx

// ... Other code

export const useUpdateInvoice = routeAction$(
  async (data, { params, redirect }) => {
    const dataWithId = { ...data, id: params.id };
    await updateInvoice(dataWithId);
    throw redirect(302, "/dashboard/invoices");
  },
  zod$(FormSchema),
);

export default component$(() => {

  // ... Other code
  
});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/[id]/edit/index.tsx"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 41 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 8, character: 0 },
              end: { line: 8, character: 47 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Test it out by editing an invoice. After submitting the form, you
          should be redirected to the invoices page, and the invoice should be
          updated.
        </p>
        <p>
          Congratulations! You've successfully implemented the update invoice !!{" "}
          🎉
        </p>
        <SubtitleWithAnchor title="Delete an invoice" id="delete-an-invoice" />
        <p>
          To delete an invoice using <code>routeAction$()</code>, you need pass
          the invoice <code>id</code> to the action. Here's how you can do it:
        </p>

        <p>
          As seen previously, we cannot pass props directly to a{" "}
          <code>routeAction$()</code>.
        </p>

        <p>
          When modifying an invoice we were able to retrieve the invoice{" "}
          <code>id</code> from the URL, but deleting an invoice is not done in
          the invoice details page, but in the invoice list page. So we don't
          have the invoice id in the URL.
        </p>

        <p>
          To delete an invoice, with <code>routeAction$()</code>, we will{" "}
          <BlankLink
            text="using actions programmatically"
            href="https://qwik.dev/docs/action/#using-actions-programmatically"
          />
          .
        </p>

        <p>
          Go to the <code>src/components/ui/invoices/table.tsx</code> file and
          add an <code>id</code> props to the TWO <code>DeleteInvoice</code>{" "}
          components:
        </p>

        <CodeBlock
          code={`// src/components/ui/invoices/table.tsx

// ... Other code

export const Table = component$(() => {

  // ... Other code

  return (
    
    // ... Other code

    <div class="flex justify-end gap-2">
      <UpdateInvoice id={invoice.id} />
      <DeleteInvoice id={invoice.id} />
    </div>

    // ... Other code

    <td class="whitespace-nowrap py-3 pl-6 pr-3">
      <div class="flex justify-end gap-3">
        <UpdateInvoice id={invoice.id} />
        <DeleteInvoice id={invoice.id} />
      </div>
    </td>

    // ... Other code
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/table.tsx"
          decorations={[
            {
              start: { line: 14, character: 0 },
              end: { line: 14, character: 39 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 22, character: 0 },
              end: { line: 22, character: 41 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Actions can also be triggered programmatically using the{" "}
          <code>action.submit()</code> method (i.e. you don't need a{" "}
          <code>&lt;Form/&gt;</code> component). However, you can trigger the
          action from a button click or any other event, just like you would do
          with a function.
        </p>

        <p>
          Go to the <code>{`<DeleteInvoice />`}</code> component:
        </p>

        <CodeBlock
          code={`// src/components/ui/invoices/buttons.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  HiPencilOutline,
  HiTrashOutline,
  HiPlusOutline,
} from "@qwikest/icons/heroicons";
import { useDeleteInvoice } from "~/routes/dashboard/invoices";

// ... Other functions

export const DeleteInvoice = component$(({ id }: { id: string }) => {
  const deleteInvoiceAction = useDeleteInvoice();
  return (
    <button
      class="rounded-md border p-2 hover:bg-gray-100"
      onClick$={async () => {
        await deleteInvoiceAction.submit({ id });
      }}
    >
      <span class="sr-only">Delete</span>
      <HiTrashOutline class="w-5" />
    </button>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/buttons.tsx"
          decorations={[
            {
              start: { line: 9, character: 0 },
              end: { line: 9, character: 63 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 14, character: 0 },
              end: { line: 14, character: 49 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 18, character: 0 },
              end: { line: 20, character: 8 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          In this code, the <code>deleteInvoiceAction</code> action is triggered
          when the user clicks the button. The <code>action.submit()</code>{" "}
          method returns a <code>Promise</code> that resolves when the action is
          done.
        </p>

        <p>
          Great! Now, we must create a <code>routeAction$()</code>, in{" "}
          <code>src/routes/dashboard/invoices/index.tsx</code>:
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/invoices/index.tsx

import { component$ } from "@builder.io/qwik";
import { Pagination } from "~/components/ui/invoices/pagination";
import { Search } from "~/components/ui/search";
import { Table } from "~/components/ui/invoices/table";
import { CreateInvoice } from "~/components/ui/invoices/buttons";
import { routeAction$ } from "@builder.io/qwik-city";
import { deleteInvoice } from "~/lib/actions";

export const useDeleteInvoice = routeAction$(async (data, { redirect }) => {
  await deleteInvoice(data.id.toString());
  throw redirect(302, "/dashboard/invoices");
});

export default component$(() => {

  // ... Other code

});`}
          icon="typescript"
          language="tsx"
          text="src/routes/dashboard/invoices/index.tsx"
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 8, character: 46 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 10, character: 0 },
              end: { line: 13, character: 3 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          We can get the <code>id</code> from the <code>data</code> object to
          the action.
        </p>

        <p>
          Now, all we need to do is create the <code>deleteInvoice</code> action
          in the <code>src/lib/actions.ts</code> file:
        </p>

        <CodeBlock
          code={`// src/lib/actions.ts

// ... Other code

export const deleteInvoice = server$(async function (id: string) {
  const pool = await getPool();

  await pool.query(
    \`DELETE FROM invoices
      WHERE id = $1\`,
    [id],
  );

  //deconnect
  pool.end();

  return {
    id: id,
  };
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
        />

        <p>
          Test it out by deleting an invoice. After clicking the delete button,
          you should be redirected to the invoices page, and the invoice should
          be removed.
        </p>

        <p>
          Congratulations! You've successfully implemented the delete invoice !!
          🎉
        </p>

        <p>
          In the next chapter, you'll learn how to handle errors and display
          them to the user.
        </p>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 11 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/26-chapter-11-mutating-data"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={11}
          text="You've learned how to create, update, and delete invoices."
        />
        <GoToNextChapterBlock
          goToChapter={12}
          title="Handling Errors"
          text="Let's explore best practices for mutating data with forms, including error handling and accessibility."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
