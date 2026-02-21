// src/components/mobileStickyAdMulti/mobileStickyAdMulti.tsx

import { component$ } from "@builder.io/qwik";

export const MobileStickyAdMulti = component$(() => {
  return (
    <aside class="fixed bottom-12 left-0 right-0 z-50 block bg-white shadow-inner lg:hidden">
      <div class="mx-auto">
        <ins
          class="adsbygoogle"
          style="display:inline-block;height:100px;width:100%"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="3249947732"
        ></ins>
      </div>
    </aside>
  );
});
