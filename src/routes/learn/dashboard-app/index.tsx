import { component$ } from "@builder.io/qwik";
import HeaderOfMain from "~/components/headerOfMain/headerOfMain";
import MobileMenu from "~/components/mobile-menu/mobile-menu";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <MobileMenu />
        <HeaderOfMain />
      </div>
    </main>
  );
});
