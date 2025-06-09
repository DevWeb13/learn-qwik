// src/components/UI/backButton/backButton.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowLeftSolid } from "@qwikest/icons/heroicons";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export const BackButton = component$<BackButtonProps>(
  ({ href = "/blog/", label = "Back to Blog" }) => {
    return (
      <Link
        href={href}
        class="text-bold fixed  left-4 top-20 z-50  flex items-center gap-2 rounded-md bg-gray-500 px-3 py-2 text-sm  font-bold text-[#e0e0e0] shadow-md transition duration-200 hover:bg-gray-600 hover:text-white hover:shadow-lg md:left-6 md:px-4  md:py-2"
      >
        <HiArrowLeftSolid class="strokeWidth-2 h-6 w-6 stroke-[#e0e0e0] transition duration-200 hover:stroke-white" />
        <p class="hidden md:inline">{label}</p>
      </Link>
    );
  },
);
