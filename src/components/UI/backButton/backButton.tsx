// src/components/UI/backButton/backButton.tsx

import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowLeftSolid } from "@qwikest/icons/heroicons";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export const BackButton = component$<BackButtonProps>(
  ({ href = "/blog/", label = "Back to Blog" }) => {
    const isVisible = useSignal(false);

    useOnWindow(
      "scroll",
      $(() => {
        isVisible.value = window.scrollY > 300;
      }),
    );

    return (
      <Link
        href={href}
        class={`
          fixed left-2 lg:left-4
          bottom-40 lg:bottom-4
          z-50
          flex items-center gap-2
          rounded-full
          px-4 py-2
          text-sm font-semibold
          text-white!
          backdrop-blur-xs
          shadow-lg
          ring-1 ring-white/10
          transition-all duration-300 ease-out
          ${
            isVisible.value
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-4"
          }
          
          bg-(--qwik-dark-purple)/40
          hover:bg-(--qwik-dark-purple)
          hover:shadow-xl
          hover:ring-white/20
          hover:-translate-y-1
        `}
      >
        <HiArrowLeftSolid class="h-5 w-5 transition-transform duration-300 hover:-translate-x-1" />
        <span class="hidden lg:inline">{label}</span>
      </Link>
    );
  },
);
