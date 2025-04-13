// src/components/desktopStickyAd/desktopStickyAd.tsx

import { component$ } from "@builder.io/qwik";

export const DesktopStickyAd = component$(() => {
  return (
    <aside class="relative  hidden w-[300px] md:block">
      <div class="sticky top-4 rounded-lg bg-white p-0 shadow-sm">
        <div class="rounded-lg">
          <ins
            class="adsbygoogle"
            style="display:inline-block;width:300px;height:600px"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="1127159078"
          ></ins>
        </div>
      </div>
    </aside>
  );
});
