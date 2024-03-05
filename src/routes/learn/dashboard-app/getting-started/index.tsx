// src/routes/learn/dashboard-app/getting-started/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GettingStartedContent from "~/components/dashboardApp/gettingStartedContent/gettingStartedContent";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import MobileMenu from "~/components/mobile-menu/mobile-menu";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <MobileMenu />
        <HeaderOfMain />
        <GettingStartedContent />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Learn Qwik | Getting Started",
  meta: [
    {
      name: "description",
      content: "Getting started with Qwik learning path",
    },
  ],
};
