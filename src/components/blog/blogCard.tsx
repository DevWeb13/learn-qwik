// src/components/blog/BlogCard.tsx
import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BlogCardProps {
  title: string;
  description: string;
  href: string;
  date: string;
  readTime: string;
}

export const BlogCard = component$<BlogCardProps>(
  ({ title, description, href, date, readTime }) => {
    return (
      <div class="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md">
        <div class="relative h-48 w-full overflow-hidden rounded-lg">
          <Slot />
        </div>
        <h2 class="text-2xl font-bold text-gray-900">{title}</h2>
        <p class="text-sm text-gray-500">
          {date} • {readTime}
        </p>
        <p class="text-gray-800">{description}</p>
        <Link href={href} class="font-medium text-blue-600 hover:underline">
          Read the full article →
        </Link>
      </div>
    );
  },
);
