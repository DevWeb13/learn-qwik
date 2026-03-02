// src/components/blog/BlogCard.tsx
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
    const badgeStyleMap: Record<string, string> = {
      security: "bg-red-500",
      comparison: "bg-[var(--qwik-dark-purple)]",
      default: "bg-[var(--qwik-dark-blue)]",
    };

    return (
      <article class="flex h-auto flex-1 flex-col gap-4 rounded-lg bg-white shadow-md">
        <div class="relative w-full overflow-hidden rounded-t-lg">
          <Slot />
        </div>

        <div class="flex flex-1 flex-col justify-between gap-4 px-4 py-2">
          <h3 class="text-2xl font-bold text-gray-900">{title}</h3>

          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">
              {date} • {readTime}
            </p>

            {badge && (
              <div
                class={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                  badgeStyleMap[badgeVariant]
                }`}
              >
                {badge}
              </div>
            )}
          </div>

          {description && <p class="text-gray-800">{description}</p>}

          <Link href={href} class="font-medium text-blue-600 hover:underline">
            {cta ?? "Read the full article →"}
          </Link>
        </div>
      </article>
    );
  },
);
