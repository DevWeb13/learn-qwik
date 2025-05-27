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
      <div class="fixed left-4 top-4 z-50 md:left-6">
        <Link
          href={href}
          class="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-gray-800 shadow-lg backdrop-blur transition hover:bg-white hover:shadow-xl md:px-4 md:py-2"
        >
          <HiArrowLeftOutline class="h-5 w-5" />
          <span class="hidden md:inline">{label}</span>
        </Link>
      </div>
    );
  },
);
