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
              title: "How to work with forms and server$() functions.",
              icon: "notebookWithLine",
            },
            {
              title: "Best practices for working with zod type validation.",
              icon: "threePoints",
            },
            {
              title:
                "How to refresh and redirect the client side using spaReset and onSubmitCompleted$ form attributes.",
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
          <code>routeAction$()</code> is used to define functions called actions
          that execute exclusively on the server, and only when explicitly
          called. Actions can have side effects such as writing to a database or
          sending an email, that cannot happen during client-side rendering.
          This makes them ideal for handling form submissions, performing
          operations with side effects, and then returning data back to the
          client/browser where it can be used to update the UI.
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
          <li>
            Inside your Server Action, extract the data from the formData
            object.
          </li>
          <li>
            Validate and prepare the data to be inserted into your database.
          </li>
          <li>Insert the data into the database.</li>
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
    await pool.end();
    return customers;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all customers.');
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
              end: { line: 20, character: 3 },
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
  const createInvoice = useCreateInvoice();

  return (
    <Form
      // Invoke the action using the "action" attribute
      action={createInvoice}
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
              end: { line: 21, character: 43 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 26, character: 0 },
              end: { line: 26, character: 28 },
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
          new action with the <code>server$()</code> function called{" "}
          <code>createInvoice</code>:
        </p>

        <CodeBlock
          code={`// src/lib/actions.ts

import { server$ } from "@builder.io/qwik-city";

export const createInvoice = server$(async function (data: { customerId: string, amount: number, status: string }) {});`}
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

import { server$ } from "@builder.io/qwik-city";

export const createInvoice = server$(async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 54 },
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

import { server$ } from "@builder.io/qwik-city";

export const createInvoice = server$(async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
  const date = new Date().toISOString().split('T')[0];
});`}
          icon="typescript"
          language="typescript"
          text="src/lib/actions.ts"
          decorations={[
            {
              start: { line: 6, character: 0 },
              end: { line: 6, character: 54 },
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

import { server$ } from "@builder.io/qwik-city";
import { getPool } from './data';

export const createInvoice = server$(async function (data: { customerId: string, amount: number, status: string }) {
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
              start: { line: 3, character: 0 },
              end: { line: 3, character: 33 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 26, character: 4 },
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
          Now, all we need to do is import and use our function in our{" "}
          <code>routeAction$()</code>
        </p>

        <CodeBlock
          code={`// src/routes/dashboard/invoices/create/index.tsx

// ... Other code

import { createInvoice } from "~/lib/actions";

export const useCreateInvoice = routeAction$(async (data, { fail }) => {

  const newInvoice = await createInvoice(data);
  return {
    success: true,
    newInvoice,
  };
  
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
              start: { line: 8, character: 0 },
              end: { line: 12, character: 4 },
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
          redirect the user back to the invoices page. For this purpose, you can
          use the <code>onSubmitCompleted$</code> attribute in the{" "}
          <code>{`<Form>`}</code> component.
        </p>

        <CodeBlock
          code={`// src/components/ui/invoices/create-form.tsx

import { Link, Form, useNavigate } from "@builder.io/qwik-city";

// ... Other code

export const CreateForm = component$(() => {
  const customersResource = useResource$(async () => {
    const customers = await fetchCustomers();
    return customers;
  });

  const createInvoice = useCreateInvoice();

  const nav = useNavigate();

  return (
    <Form
      action={createInvoice}
      onSubmitCompleted$={async () => {
        await nav("/dashboard/invoices/");
      }}
    >

// ... Other code

  );
});`}
          icon="typescript"
          language="typescript"
          text="src/components/ui/invoices/create-form.tsx"
          decorations={[
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 64 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 14, character: 0 },
              end: { line: 14, character: 28 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 19, character: 0 },
              end: { line: 21, character: 8 },
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
      </div>
    </>
  );
});
