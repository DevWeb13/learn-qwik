import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface GameCardProps {
  title: string;
  description: string;
  href: string;
  date?: string;
  readTime?: string;
  cta?: string;
}

export const GameCard = component$<GameCardProps>(
  ({ title, description, href, date, cta }) => {
    return (
      <Link
        href={href}
        class="group relative w-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#0ea5e9]"
      >
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
            <span class="mt-4 flex w-max items-center rounded-lg bg-sky-500 px-4 py-2 text-xs  text-white shadow-md transition group-hover:bg-sky-600">
              {cta}
            </span>
          )}
        </div>
      </Link>
    );
  },
);
