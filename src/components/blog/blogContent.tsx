import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { blogSections } from "~/constants/blogArticles";
import { DesktopStickyAd } from "../desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "../mobileStickyAd/mobileStickyAd";
import { BlogCard } from "./blogCard";

export const BlogContent = component$(() => {
  useStylesScoped$(`
    .blog_posts {
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
  `);

  const shellClass = "mx-auto max-w-7xl px-4 md:px-6 lg:px-14 2xl:px-0";

  const totalArticles = blogSections.reduce(
    (total, section) => total + section.posts.length,
    0,
  );

  return (
    <div class="relative min-h-screen w-full bg-white">
      <section class="relative overflow-hidden border-b border-gray-100">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute left-1/2 top-0 h-105 w-205 -translate-x-1/2 rounded-full bg-(--qwik-light-purple)/10 blur-3xl" />
          <div class="absolute -left-24 top-24 h-64 w-64 rounded-full bg-(--qwik-light-blue)/10 blur-3xl" />
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(113,63,194,0.08),transparent_42%)]" />
        </div>

        <div
          class={`${shellClass} relative grid min-h-[calc(100dvh-var(--header-height))] gap-10 py-12 md:py-20  lg:items-center lg:gap-14`}
        >
          <div class="max-w-4xl">
            <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
              Learn Qwik Blog
            </div>

            <h1 class="mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-6xl">
              Qwik tutorials, security notes, comparisons, and practical guides.
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-7 text-gray-700 md:text-xl md:leading-8">
              Current Qwik coverage, security topics, practical tutorials, and
              selected archive content to help readers find the right article
              faster.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <Link
                href="#latest-2026"
                class="inline-flex items-center justify-center rounded-[1.1rem] border border-(--qwik-dark-purple)/12 bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! no-underline! transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--qwik-light-purple) hover:text-white! hover:shadow-lg hover:shadow-(--qwik-dark-purple)/8"
              >
                Browse latest articles
              </Link>

              <Link
                href="#archive-2025"
                class="inline-flex items-center justify-center rounded-[1.1rem] border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! no-underline! transition-all duration-200 hover:border-gray-300 hover:bg-white hover:text-(--qwik-dirty-black)!"
              >
                Explore the archive
              </Link>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-3">
              <div class="rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <p class="text-2xl font-semibold text-(--qwik-dirty-black)">
                  {totalArticles}
                </p>
                <p class="mt-1 text-sm text-gray-600">Articles on this page</p>
              </div>

              <div class="rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <p class="text-2xl font-semibold text-(--qwik-dirty-black)">
                  2026
                </p>
                <p class="mt-1 text-sm text-gray-600">Main editorial focus</p>
              </div>

              <div class="rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <p class="text-2xl font-semibold text-(--qwik-dirty-black)">
                  Practical
                </p>
                <p class="mt-1 text-sm text-gray-600">
                  Tutorials, security, comparisons
                </p>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-2">
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Qwik news
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Security advisories
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Framework comparisons
              </div>
              <div class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700">
                Beginner guides
              </div>
            </div>
          </div>
        </div>
      </section>

      <main
        class={`${shellClass} relative mx-auto flex flex-col justify-center gap-4  py-8 md:flex-row  md:py-12`}
      >
        <section class="flex w-full flex-col gap-8 lg:max-w-[calc(100%-300px)]">
          {blogSections.map((section) => {
            const toneClasses =
              section.tone === "purple"
                ? {
                    accent: "bg-(--qwik-light-purple)/12",
                    pillBorder: "border-(--qwik-dark-purple)/12",
                    pillBg: "bg-(--qwik-light-purple)/10",
                    pillText: "text-(--qwik-dark-purple)",
                  }
                : {
                    accent: "bg-(--qwik-light-blue)/12",
                    pillBorder: "border-(--qwik-dark-blue)/12",
                    pillBg: "bg-(--qwik-light-blue)/10",
                    pillText: "text-(--qwik-dark-blue)",
                  };

            return (
              <article
                key={section.id}
                id={section.id}
                class="relative overflow-hidden rounded-4xl border border-gray-200 bg-white p-5 shadow-sm md:p-8"
              >
                <div
                  class={`absolute right-6 top-0 h-20 w-20 rounded-b-full ${toneClasses.accent}`}
                />

                <div class="relative flex flex-col gap-6">
                  <div class="flex flex-col gap-3">
                    <div
                      class={`inline-flex w-fit items-center rounded-full border px-4 py-2 text-sm font-medium ${toneClasses.pillBorder} ${toneClasses.pillBg} ${toneClasses.pillText}`}
                    >
                      {section.label}
                    </div>

                    <h2 class="text-3xl font-semibold leading-tight text-(--qwik-dirty-black) md:text-5xl">
                      {section.titleParts.before}
                      {section.titleParts.highlight && (
                        <span class="text-(--qwik-dark-purple)">
                          {section.titleParts.highlight}
                        </span>
                      )}
                      {section.titleParts.after}
                    </h2>

                    <p class="max-w-2xl text-base leading-7 text-gray-700">
                      {section.description}
                    </p>
                  </div>

                  <div class="blog_posts">
                    {section.posts.map((post) => {
                      const Image = post.image;

                      return (
                        <BlogCard
                          key={post.href}
                          title={post.title}
                          description={post.description}
                          href={post.href}
                          date={post.date}
                          readTime={post.readTime}
                          badge={post.badge}
                          badgeVariant={post.badgeVariant}
                        >
                          <Image
                            class="h-full w-full object-contain object-center"
                            alt={post.imageAlt}
                          />
                        </BlogCard>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <DesktopStickyAd />
      </main>

      <MobileStickyAd />
    </div>
  );
});
