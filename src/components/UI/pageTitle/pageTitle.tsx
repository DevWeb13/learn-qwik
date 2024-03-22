// src/components/UI/pageTitle/pageTitle.tsx

import { component$ } from "@builder.io/qwik";

interface PageTitleProps {
  chapterNumber: number;
  chapterTitle: string;
}

export default component$<PageTitleProps>(({ chapterNumber, chapterTitle }) => {
  return (
    <div class="not-prose mb-4 flex flex-col items-start gap-2 md:mb-10 md:flex-row md:items-center md:gap-6">
      <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 md:h-[72px] md:w-[72px]">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          {chapterNumber}
        </p>
      </div>
      <hgroup>
        <div class="hidden md:block">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Chapter {chapterNumber}
          </p>
        </div>
        <h1
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          {chapterTitle}
        </h1>
      </hgroup>
    </div>
  );
});
