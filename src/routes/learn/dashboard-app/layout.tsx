// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import MobileMenu from "~/components/mobile-menu/mobile-menu";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";

export default component$(() => {
  return (
    <>
      <main>
        <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <MobileMenu />
          <HeaderOfMain />
          <Slot />
        </div>
      </main>
    </>
  );
});
