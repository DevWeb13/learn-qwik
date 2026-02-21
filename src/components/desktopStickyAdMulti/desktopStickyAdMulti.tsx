// src/components/desktopStickyAdMulti/desktopStickyAdMulti.tsx

import { component$ } from "@builder.io/qwik";

interface DesktopStickyAdMultiProps {
  topPosition?: string;
}

export const DesktopStickyAdMulti = component$<DesktopStickyAdMultiProps>(
  ({
    topPosition = "top-4", // Valeur par défaut si aucune n'est fournie
  }) => {
    return (
      <aside class="relative  hidden w-[300px] flex-1 lg:block">
        <div class={`sticky ${topPosition} rounded-lg bg-white p-0 shadow-sm`}>
          <div class="rounded-lg">
            <ins
              class="adsbygoogle"
              style="display:inline-block;width:300px;height:600px"
              data-ad-client="ca-pub-2091224773462896"
              data-ad-slot="5487905329"
            ></ins>
          </div>
        </div>
      </aside>
    );
  },
);
