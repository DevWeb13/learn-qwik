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
  ({ title, description, href, date, readTime, cta }) => {
    return (
      <Link
        href={href}
        class="group relative w-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#0ea5e9]"
      >
        <div class="w-full">
          <Slot />
        </div>

        <div class="flex flex-col gap-2 px-5 py-4 text-white">
          <h3 class="text-lg font-bold">{title}</h3>
          <p class="text-sm text-gray-300">{description}</p>

          <div class="mt-2 flex items-center justify-between text-xs text-gray-400">
            {date && <span>{date}</span>}
            {readTime && <span>{readTime}</span>}
          </div>

          {cta && (
            <span class="mt-4 inline-block w-max rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold text-white shadow-md transition group-hover:bg-sky-600">
              {cta}
            </span>
          )}
        </div>
      </Link>
    );
  },
);
