// src/components/UI/backButton/backButton.tsx

import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import BackButtonLink from "~/assets/img/games/game/gamePath/back-button-link.png?jsx";
import CompletedLevelsButtonImg from "~/assets/img/games/game/gamePath/completed-levels-button.png?jsx";

interface GamesFixedLinkProps {
  href: string;
  alt: string;
  type: string;
}

export const GamesFixedLink = component$<GamesFixedLinkProps>(
  ({ href, alt, type }) => {
    const ref = useSignal<HTMLElement>();

    useOnWindow(
      "scroll",
      $(() => {
        const backButton = ref.value;
        if (backButton) {
          const scrollTop = window.scrollY;
          if (scrollTop > 63) {
            backButton.classList.remove("absolute");
            backButton.classList.add("fixed");
          } else {
            backButton.classList.remove("fixed");
            backButton.classList.add("absolute");
          }
        }
      }),
    );
    return (
      <Link
        href={href}
        class={`absolute  z-0 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br   transition-transform duration-200 hover:scale-105  md:h-20 md:w-20 ${type === "completedLevels" && "right-2 top-2 from-teal-800 via-green-300 to-emerald-800 shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_20px_rgba(37,99,235,0.8)] md:right-4 md:top-4"} 
        ${type === "return" && "left-2 top-2 from-blue-600 via-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_20px_rgba(255,0,255,0.6)] md:left-4 md:top-4"}`}
        ref={ref}
      >
        {type === "completedLevels" && (
          <CompletedLevelsButtonImg alt="Completed Levels" />
        )}
        {type === "return" && (
          <BackButtonLink class="h-full w-full object-cover" alt={alt} />
        )}
      </Link>
    );
  },
);
