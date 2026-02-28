// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";

import { DesktopStickyAdMulti } from "~/components/desktopStickyAdMulti/desktopStickyAdMulti";
import { MobileStickyAdMulti } from "~/components/mobileStickyAdMulti/mobileStickyAdMulti";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export default component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  return (
    <main class="relative mx-auto max-w-full px-4 py-4 md:px-8 lg:px-4 lg:py-10 bg-(--qwik-light-blue)/2">
      <HeaderOfMain />
      <div
        class={`relative mx-auto flex w-full flex-col  gap-8 py-6 lg:max-w-7xl lg:flex-row lg:py-10 ${!isSubscribed ? "lg:pl-12 xl:px-12" : "justify-center lg:px-12"}`}
      >
        {/* Main content */}
        <section
          class={`w-full overflow-hidden ${!isSubscribed ? "lg:max-w-[calc(100%-300px)]" : "w-full"}`}
        >
          <Slot />
        </section>

        {/* Desktop ad */}
        {!isSubscribed && (
          <DesktopStickyAdMulti topPosition="top-20 lg:top-24" />
        )}
      </div>

      {/* Mobile ad */}
      {!isSubscribed && <MobileStickyAdMulti />}
    </main>
  );
});
