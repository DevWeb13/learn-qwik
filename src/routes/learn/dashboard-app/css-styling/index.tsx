// src/routes/learn/dashboard-app/css-styling/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CSSStylingContent from "~/components/learn/dashboardApp/cssStylingContent/cssStylingContent";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <CSSStylingContent />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Learn Qwik | CSS Styling",
  meta: [
    {
      name: "description",
      content:
        "Let's work on your home page and discuss the different ways you can style your application.",
    },
  ],
};
