// @ts-nocheck
// src/components/ui/search.tsx

import { component$ } from "@builder.io/qwik";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  return (
    <div class="relative flex flex-1 flex-shrink-0">
      <label for="search" class="sr-only">
        Search
      </label>
      <input
        class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <HiMagnifyingGlassOutline class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
});
