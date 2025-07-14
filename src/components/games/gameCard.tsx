import { component$, Slot } from "@builder.io/qwik";
import { GamesLink } from "./game/qwikpath/gamesLink";

interface GameCardProps {
  title: string;
  description: string;
  href: string;
  date?: string;
  readTime?: string;
  cta?: string;
  rulesLink?: string;
}

export const GameCard = component$<GameCardProps>(
  ({ title, description, href, date, cta, rulesLink }) => {
    return (
      <div class="group relative w-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#3e568e] to-[#1e293b] shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-transform duration-300  hover:shadow-[0_0_20px_#0ea5e9]">
        <div class="w-full">
          <Slot />
        </div>

        <div class="flex flex-col gap-2 px-5 py-4 text-white">
          <h3 class="text-md font-bold">{title}</h3>
          <p class="text-xs text-gray-300">{description}</p>

          <div class="mt-2 flex items-center justify-between text-xs text-gray-400">
            {date && <span>{date}</span>}
          </div>

          {cta && (
            <GamesLink href={href} label={cta} icon="arrow-right">
              {cta}
            </GamesLink>
          )}

          {rulesLink && (
            <GamesLink
              href={rulesLink}
              label="Rules"
              icon="arrow-right"
              completed
            >
              Rules
            </GamesLink>
          )}
        </div>
      </div>
    );
  },
);
