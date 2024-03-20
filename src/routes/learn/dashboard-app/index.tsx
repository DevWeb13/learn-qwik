// src/routes/learn/dashboard-app/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardAppContent from "~/components/dashboardApp/dashboardAppContent";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import MobileMenu from "~/components/mobile-menu/mobile-menu";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <MobileMenu />
        <HeaderOfMain />
        <DashboardAppContent />
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Learn Qwik | Introduction",
  meta: [
    {
      name: "description",
      content: "Introduction to Qwik learning path",
    },
  ],
};
