import { component$ } from "@builder.io/qwik";

const GUIDES = [
  {
    title: "Qwik School",
    description: "Learn directly from the Qwik ecosystem and its creators.",
    meta: "Course platform",
    href: "https://qwikschool.com/",
    accent: "purple",
  },
  {
    title: "Qwik Crash Course",
    description: "A practical first look at Qwik by Net Ninja.",
    meta: "YouTube • Net Ninja",
    href: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gOUlY-uCHurFIpqogsdOnw",
    accent: "gray",
  },
  {
    title: "Full Stack Qwik SaaS App",
    description: "A longer real-world build focused on application structure.",
    meta: "YouTube • Code Raiders",
    href: "https://www.youtube.com/playlist?list=PLkswEDcfBXYcl1gW7L5zyCVF9LpGhlOqu",
    accent: "purple",
  },
  {
    title: "Qwik for React Developers",
    description: "A useful bridge if you come from the React world.",
    meta: "YouTube • RumNCode",
    href: "https://www.youtube.com/@RumNCode/featured",
    accent: "blue",
  },
  {
    title: "Need a custom Qwik guide?",
    description: "Get a tailored guide or reach out for help.",
    meta: "External resource",
    href: "https://www.lareponsedev.fr/",
    accent: "gray",
  },
];

export const GuidesScrollWrapper = component$(() => {
  return (
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {GUIDES.map((guide) => {
        const accentClass =
          guide.accent === "purple"
            ? "border-(--qwik-dark-purple)/14 bg-(--qwik-light-purple)/8 text-(--qwik-dark-purple)"
            : guide.accent === "blue"
              ? "border-(--qwik-dark-blue)/14 bg-(--qwik-light-blue)/8 text-(--qwik-dark-blue)"
              : "border-gray-200 bg-gray-100 text-gray-700";

        return (
          <a
            key={guide.title}
            href={guide.href}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex h-full min-h-56 flex-col rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-(--qwik-dark-purple)/18 hover:shadow-lg hover:shadow-black/5"
          >
            <div class="min-h-12">
              <div
                class={`inline-flex min-h-11 w-full items-center rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.14em] ${accentClass}`}
              >
                {guide.meta}
              </div>
            </div>

            <div class="mt-5 min-h-[4.75rem]">
              <h3 class="text-lg font-semibold leading-snug text-(--qwik-dirty-black)">
                {guide.title}
              </h3>
            </div>

            <div class="flex-1">
              <p class="text-sm leading-6 text-gray-600">{guide.description}</p>
            </div>

            <div class="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
              <span class="text-sm font-medium text-gray-500">
                Open resource
              </span>

              <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--qwik-dark-purple)/14 bg-(--qwik-light-purple)/10 text-(--qwik-dark-purple) transition-all duration-200 group-hover:translate-x-0.5">
                <svg
                  height="16"
                  width="16"
                  viewBox="0 0 16 16"
                  style="color: currentColor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
});
