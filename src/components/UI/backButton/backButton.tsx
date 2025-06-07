// src/components/UI/backButton/backButton.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowLeftOutline } from "@qwikest/icons/heroicons";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export const BackButton = component$<BackButtonProps>(
  ({ href = "/blog/", label = "Back to Blog" }) => {
    return (
      <div class="fixed left-4 top-20 z-50 md:left-6">
        <Link
          href={href}
          class="flex items-center gap-2 rounded-full bg-[#292929] px-3 py-2 text-sm font-semibold text-[#e0e0e0] shadow-md transition duration-200 hover:bg-[#333333] hover:text-white hover:shadow-lg md:px-4 md:py-2"
        >
          <HiArrowLeftOutline class="h-5 w-5" />
          <span class="hidden md:inline">{label}</span>
        </Link>
      </div>
    );
  },
);
