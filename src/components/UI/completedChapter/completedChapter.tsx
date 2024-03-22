import { component$ } from "@builder.io/qwik";

interface CompletedChapterProps {
  chapterNumber: number;
  text: string;
}

export default component$<CompletedChapterProps>(({ chapterNumber, text }) => {
  return (
    <>
      <div
        aria-hidden="true"
        class="mx-auto h-32 w-[1px] bg-gradient-to-t from-blue-300 md:h-48"
      ></div>
      <div
        aria-hidden="true"
        class="relative flex h-24 w-24 items-center justify-center rounded-full bg-blue-300 text-[48px] font-semibold text-blue-900  md:h-32 md:w-32 md:text-[72px]"
      >
        {chapterNumber}
        <div class="text-vercel-100 border-vercel-100 absolute bottom-0 right-0 flex h-8 w-8 translate-x-[6px] translate-y-[6px] items-center justify-center rounded-full border-[3px] bg-blue-700 md:h-10 md:w-10">
          <svg
            data-testid="geist-icon"
            height="16"
            stroke-linejoin="round"
            viewBox="0 0 16 16"
            width="16"
            style="color: currentcolor;"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <h2
        class="text_wrapper block pb-2 pt-8"
        data-version="v1"
        style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
      >
        You've Completed Chapter {chapterNumber}
      </h2>
      <div class="text-center">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
        >
          {text}
        </p>
      </div>
    </>
  );
});
