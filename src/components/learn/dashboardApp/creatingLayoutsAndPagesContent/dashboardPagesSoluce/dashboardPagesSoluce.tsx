import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

import DiagramDashboardPages from "~/assets/img/diagram-dashboard-pages.png?jsx";

export const DashboardPagesSoluce = component$(() => {
  return (
    <>
      <p>You should have the following folder structure:</p>

      <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
        <DiagramDashboardPages
          alt="Diagram showing the folder structure of the dashboard pages"
          class="block w-full rounded-md border border-gray-200 bg-gray-100"
        />
      </figure>

      <p>Customers Page:</p>

      <CodeBlock
        code={`import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <p>Customers Page</p>;
});`}
        text="/src/routes/customers/index.tsx"
        icon="typescript"
        language="tsx"
      />

      <p>Invoices Page:</p>

      <CodeBlock
        code={`import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return <p>Invoices Page</p>;
});`}
        text="/src/routes/invoices/index.tsx"
        icon="typescript"
        language="tsx"
      />
    </>
  );
});
