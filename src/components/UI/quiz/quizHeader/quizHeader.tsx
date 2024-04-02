import { component$ } from "@builder.io/qwik";
import { QuestioningPointSvg } from "~/assets/svg/questioningPointSvg/questioningPointSvg";

export const QuizHeader = component$(() => {
  return (
    <div class="flex flex-col items-center">
      <div class="mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-blue-700">
        <QuestioningPointSvg />
      </div>
      <h3
        class="text_wrapper"
        data-version="v1"
        style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.25rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.020625rem; --sm-text-size: 1.25rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.020625rem; --smd-text-size: 1.5rem; --smd-text-line-height: 2rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.029375rem; --md-text-size: 1.5rem; --md-text-line-height: 2rem; --md-text-weight: 600; --md-text-letter-spacing: -0.029375rem; --lg-text-size: 1.5rem; --lg-text-line-height: 2rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.029375rem;"
      >
        It’s time to take a quiz!
      </h3>
      <div class="md:max-w-auto w-[200px] text-center md:w-auto">
        <p
          class="text_wrapper pt-2"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
        >
          Test your knowledge and see what you’ve just learned.
        </p>
      </div>
    </div>
  );
});
