// src/components/UI/backToBlogButton/backToBlogButton.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowLeftOutline } from "@qwikest/icons/heroicons";

export const BackToBlogButton = component$(() => {
  return (
    <div class="fixed left-4 top-4 z-50 md:left-6">
      <Link
        href="/blog/"
        class="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl md:px-4 md:py-2"
      >
        <HiArrowLeftOutline class="h-5 w-5" />
        <span class="hidden md:inline">Back to Blog</span>
      </Link>
    </div>
  );
});
