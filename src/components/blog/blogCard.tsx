import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BlogCardProps {
  title: string;
  description?: string;
  href: string;
  date: string;
  readTime: string;
  cta?: string;
  badge?: string;
  badgeVariant?: "security" | "comparison" | "default";
}

export const BlogCard = component$<BlogCardProps>(
  ({
    title,
    description,
    href,
    date,
    readTime,
    cta,
    badge,
    badgeVariant = "default",
  }) => {
    const badgeStyleMap: Record<
      NonNullable<BlogCardProps["badgeVariant"]>,
      string
    > = {
      security: "border border-red-200 bg-red-50 text-red-600",
      comparison:
        "border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/12 text-(--qwik-dark-purple)",
      default:
        "border border-(--qwik-dark-blue)/12 bg-(--qwik-light-blue)/12 text-(--qwik-dark-blue)",
    };

    return (
      <article class="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
        <Link
          href={href}
          class="relative block overflow-hidden border-b border-gray-100 bg-linear-to-br from-gray-50 to-white no-underline!"
          aria-label={title}
        >
          <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.08),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="relative aspect-video w-full">
            <Slot />
          </div>
        </Link>

        <div class="flex flex-1 flex-col gap-4 p-5">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm text-gray-500">
              {date} • {readTime}
            </p>

            {badge && (
              <div
                class={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeStyleMap[badgeVariant]}`}
              >
                {badge}
              </div>
            )}
          </div>

          <div class="space-y-3">
            <h3 class="text-xl font-semibold leading-tight text-(--qwik-dirty-black) transition-colors duration-200 group-hover:text-(--qwik-dark-purple) md:text-2xl">
              <Link href={href} class="no-underline! text-inherit!">
                {title}
              </Link>
            </h3>

            {description && (
              <p class="text-sm leading-6 text-gray-600 md:text-[0.95rem]">
                {description}
              </p>
            )}
          </div>

          <div class="mt-auto pt-2">
            <Link
              href={href}
              class="inline-flex items-center gap-2 text-sm font-semibold text-(--qwik-dark-purple)! no-underline! transition-all duration-200 hover:gap-3 hover:text-(--qwik-light-purple)!"
            >
              {cta ?? "Read the full article"}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    );
  },
);
