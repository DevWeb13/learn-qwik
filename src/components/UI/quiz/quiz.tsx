import { component$, useStore, $, useStyles$ } from "@builder.io/qwik";
import { QuizHeader } from "./quizHeader/quizHeader";
import { ButtonQuizOption } from "./buttonQuizOption/buttonQuizOption";
import { IsCorrectResponse } from "./isCorrectResponse/isCorrectResponse";
import Popover from "~/lib/qwikUI/popover/popover";

export type Option = {
  text: string;
  isCorrect: boolean;
  letter: string;
};

interface QuizProps {
  question: string;
  options: Option[];
  hint: string;
  responseText: string;
}

interface StoreProps {
  userResponse: string;
  responseIsCorrect: boolean | null;
  displayChooseOption: boolean;
}

export const Quiz = component$<QuizProps>(
  ({ question, options, hint, responseText }) => {
    useStyles$(`
  .badge_badge__WnfZm {
      --badge-font-size: 12px;
      --badge-height: 24px;
      --badge-padding-x: 10px;
      --badge-color: #fff;
      --badge-bg-color: #000;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border-radius: 9999px;
      font-weight: 500;
      text-transform: capitalize;
      white-space: nowrap;
      font-feature-settings: "tnum";
      font-variant-numeric: tabular-nums;
      color: var(--badge-color);
      background-color: var(--badge-bg-color);
      font-size: var(--badge-font-size);
      height: var(--badge-height);
      padding: 0 var(--badge-padding-x);
  }
  
  .badge_lg__AebMU {
    --badge-font-size: 14px;
    --badge-height: 32px;
    --badge-padding-x: 12px;
    --badge-icon-size: 16px;
    --badge-icon-spacing: 6px;
  }
  
    .badge_green-subtle__EB32o {
      --badge-bg-color: var(--ds-green-200);
      --badge-color: var(--ds-green-900);
  }
  
  .badge_contentContainer__khfN_ {
    display: flex;
    align-items: center;
    gap: var(--badge-icon-spacing);
  }

  .badge_amber-subtle__OVCCT {
    --badge-bg-color: var(--ds-amber-200);
    --badge-color: var(--ds-amber-900);
}


`);
    const store = useStore<StoreProps>({
      userResponse: "",
      responseIsCorrect: null,
      displayChooseOption: true,
    });
    console.log(store.responseIsCorrect);

    const checkUserResponse = $((store: StoreProps) => {
      // Find the correct response into the options array
      const goodResponse = options.find((option) => option.isCorrect);
      // Check if the user response is correct

      store.responseIsCorrect = store.userResponse === goodResponse?.letter;
    });

    const displayUIWithResponse = (
      store: StoreProps,
      options: Option[],
      responseText: string,
    ) => {
      switch (store.responseIsCorrect) {
        case null:
          return (
            <>
              <div class="border-gray-alpha-400 bg-vercel-200 group mt-4 w-full rounded-lg border md:mt-6">
                {options.map((option) => (
                  <ButtonQuizOption
                    key={option.text}
                    letter={option.letter}
                    text={option.text}
                    store={store}
                    active={store.userResponse === option.letter}
                  />
                ))}
              </div>
              <div class="mt-4 flex w-full justify-end md:mt-6">
                {store.displayChooseOption ? (
                  <Popover popoverText="You must choose response !">
                    <div class="w-full md:w-fit">
                      <div
                        class="button_base reset_reset button_button reset_reset button_invert"
                        data-geist-button=""
                        data-prefix="false"
                        data-suffix="false"
                        data-version="v1"
                        style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
                      >
                        <span class="button_content">Check Answer</span>
                      </div>
                    </div>
                  </Popover>
                ) : (
                  <div class="w-full md:w-fit">
                    <button
                      class="button_base reset_reset button_button reset_reset button_invert"
                      data-geist-button=""
                      data-prefix="false"
                      data-suffix="false"
                      data-version="v1"
                      style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
                      onClick$={() => checkUserResponse(store)}
                    >
                      <span class="button_content">Check Answer</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          );
        case true:
          return (
            <IsCorrectResponse
              goodResponse={options.find((option) => option.isCorrect)!}
              responseText={responseText}
            />
          );
        case false:
          return (
            <>
              <div class="border-gray-alpha-400 mt-6 flex w-full flex-1 flex-col items-center justify-center rounded-lg border p-8">
                <div class="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-gray-900">
                  {store.userResponse}
                </div>
                <p
                  class="text_wrapper__i87JK"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; margin: 0px;"
                >
                  {
                    options.find(
                      (option) => option.letter === store.userResponse,
                    )?.text
                  }
                </p>
                <span
                  class="badge_badge__WnfZm badge_amber-subtle__OVCCT badge_lg__AebMU my-6"
                  data-geist-badge=""
                  data-version="v2"
                >
                  <span class="badge_contentContainer__khfN_">
                    <span class="badge_iconContainer__G7dN0">
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
                          d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    Not quite
                  </span>
                </span>
                <p
                  class="text_wrapper__i87JK mx-auto w-full max-w-[380px]"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; --text-align: center;"
                >
                  Hint: {hint}
                </p>
              </div>
              <div class="mt-6 flex justify-center">
                <button
                  class="button_base reset_reset button_button  button_secondary button_invert"
                  data-geist-button=""
                  data-prefix="true"
                  data-suffix="false"
                  data-version="v1"
                  style="--geist-icon-size: 16px;"
                  onClick$={() => {
                    store.responseIsCorrect = null;
                    store.userResponse = "";
                    store.displayChooseOption = true;
                  }}
                >
                  <span class="button_prefix">
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
                        d="M6.46966 13.7803L6.99999 14.3107L8.06065 13.25L7.53032 12.7197L3.56065 8.75001H14.25H15V7.25001H14.25H3.56065L7.53032 3.28034L8.06065 2.75001L6.99999 1.68935L6.46966 2.21968L1.39644 7.2929C1.00592 7.68342 1.00592 8.31659 1.39644 8.70711L6.46966 13.7803Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span class="button_content">Try Again</span>
                </button>
              </div>
            </>
          );
        default:
          return <div>default</div>;
      }
    };

    return (
      <div class="tailwind bg-vercel-200 not-prose mt-12 flex flex-col justify-center rounded-[16px] px-4 py-4 md:-mx-[62px] md:px-0 md:py-14">
        <QuizHeader />

        <div class="bg-vercel-100 mx-auto mt-8 flex w-full max-w-[640px] flex-col items-center rounded-lg p-4 shadow-md md:p-8">
          <div class="text-center">
            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 1rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 1rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1.125rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1.125rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1.125rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; margin: 0px;"
            >
              {question}
            </p>
          </div>
          {displayUIWithResponse(store, options, responseText)}
        </div>
      </div>
    );
  },
);
