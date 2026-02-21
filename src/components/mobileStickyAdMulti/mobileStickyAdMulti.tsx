// src/components/mobileStickyAdMulti/mobileStickyAdMulti.tsx

import { component$ } from "@builder.io/qwik";

export const MobileStickyAdMulti = component$(() => {
  return (
    <aside class="fixed bottom-12 left-0 right-0 z-50 block bg-white shadow-inner lg:hidden">
      <div class="mx-auto max-w-[360px]">
        <ins
          class="adsbygoogle"
          style="display:inline-block;width:320px;height:100px"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="3249947732"
        ></ins>
      </div>
    </aside>
  );
});
