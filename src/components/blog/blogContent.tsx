// src/components/blog/blogContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import { CardNews } from "./cardNews";

export const BlogContent = component$(() => {
  useStyles$(`
    .blog_posts__nCN7i {
    margin-top: 48px;
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
  `);
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <div class="prose prose-vercel max-w-none">
          <h1
            class="text_wrapper__i87JK text-3xl font-semibold leading-10 tracking-tighter"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Les latest Qwik news
          </h1>

          <div class="blog_posts__nCN7i">
            <CardNews />
          </div>
        </div>
      </div>
    </main>
  );
});
