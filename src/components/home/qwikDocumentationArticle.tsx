import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "~/assets/svg/qwikLogo/qwikLogo";

export const QwikDocumentationArticle = component$(() => {
  return (
    <article class="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-gray-50 p-6 md:p-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex items-start gap-4">
          <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-(--qwik-dark-purple)/12 bg-white shadow-sm">
            <QwikLogo id="4" height={28} width={28} />
          </div>

          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Official resource
            </p>

            <h3 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black)">
              Qwik Documentation
            </h3>

            <p class="mt-3 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
              The official reference for installing, running, building, and
              deploying Qwik.
            </p>
          </div>
        </div>

        <div class="w-full md:w-auto">
          <Link
            href="https://qwik.dev/"
            target="_blank"
            class="group inline-flex w-full items-center justify-center gap-3 rounded-[1.1rem] border border-(--qwik-dark-purple)/18 bg-white px-5 py-3 text-sm font-semibold text-(--qwik-dirty-black) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--qwik-dark-purple)/32 hover:shadow-lg hover:shadow-black/5 md:w-auto"
          >
            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--qwik-light-purple)/12 text-(--qwik-dirty-black)!">
              <svg
                height="16"
                width="16"
                viewBox="0 0 16 16"
                style="color: currentColor;"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <span class="text-(--qwik-dirty-black)!">
              View the documentation
            </span>

            <span class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--qwik-dark-purple)/14 bg-(--qwik-light-purple)/10 text-(--qwik-dark-purple) transition-transform duration-200 group-hover:translate-x-0.5">
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
          </Link>
        </div>
      </div>
    </article>
  );
});
