import { component$ } from "@builder.io/qwik";
import BtAddChapter from "../btAddChapter/btAddChapter";

interface GoToNextChapterProps {
  goToChapter: number;
  title: string;
  text: string;
}

export default component$<GoToNextChapterProps>(
  ({ goToChapter, title, text }) => {
    return (
      <div class="border-gray-alpha-400 mt-8 flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-8 shadow-md md:mt-12">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
        >
          Next Up
        </p>
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --text-size: 1.25rem; --text-line-height: 1.5rem; --text-letter-spacing: -0.020625rem; --text-weight: 600;"
        >
          {goToChapter}: {title}
        </p>
        <p
          class="text_wrapper max-w-[540px] pb-4 pt-3 md:pb-6"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; --text-align: center;"
        >
          {text}
        </p>
        <BtAddChapter goToChapter={goToChapter} title={title} />
      </div>
    );
  },
);
