// src/components/UI/tableOfTopicsCovered/tableOfTopicsCovered.tsx

import { component$ } from "@builder.io/qwik";

interface TableOfTopicsCoveredProps {}

export default component$<TableOfTopicsCoveredProps>(() => {
  return (
    <div class="bg-vercel-100 mx-auto mt-4 flex w-full max-w-[960px] flex-col rounded-md px-4 py-2 shadow-md md:mt-8">
      <div class="border-gray-alpha-400 flex gap-4 border-b px-4 py-3 last-of-type:border-0">
        <div class="mt-1 flex-shrink-0 text-gray-900">
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
              d="M12.2803 0.719661L11.75 0.189331L11.2197 0.719661L1.09835 10.841C0.395088 11.5442 0 12.4981 0 13.4926V15.25V16H0.75H2.50736C3.50192 16 4.45575 15.6049 5.15901 14.9016L15.2803 4.78032L15.8107 4.24999L15.2803 3.71966L12.2803 0.719661ZM9.81066 4.24999L11.75 2.31065L13.6893 4.24999L11.75 6.18933L9.81066 4.24999ZM8.75 5.31065L2.15901 11.9016C1.73705 12.3236 1.5 12.8959 1.5 13.4926V14.5H2.50736C3.1041 14.5 3.67639 14.2629 4.09835 13.841L10.6893 7.24999L8.75 5.31065Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p
          class="text_wrapper in-this-chapter_content__QPwZX"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.875rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
        >
          Different ways to style your application.
        </p>
      </div>
      <div class="border-gray-alpha-400 flex gap-4 border-b px-4 py-3 last-of-type:border-0">
        <div class="mt-1 flex-shrink-0 text-gray-900">
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
              d="M2.5 3.5C2.5 2.94771 2.94772 2.5 3.5 2.5H4.25V1H3.5C2.11929 1 1 2.11929 1 3.5V6.29449C1 6.65016 0.881575 6.86927 0.738252 7.00305C0.587949 7.14333 0.344525 7.24999 0 7.24999V8.74999C0.344525 8.74999 0.587948 8.85665 0.738251 8.99694C0.881575 9.13071 1 9.34982 1 9.70549V12.5C1 13.8807 2.11929 15 3.5 15H4.25V13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V9.70549C2.5 9.03542 2.27894 8.44137 1.86198 7.99999C2.27894 7.55861 2.5 6.96457 2.5 6.29449V3.5ZM12.5 1H11.75V2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V6.29449C13.5 6.96453 13.7212 7.5586 14.1382 7.99999C13.7212 8.44139 13.5 9.03545 13.5 9.70549V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H11.75V15H12.5C13.8807 15 15 13.8807 15 12.5V9.70549C15 9.35012 15.1184 9.13095 15.2618 8.99706C15.4122 8.85668 15.6556 8.74999 16 8.74999V7.24999C15.6556 7.24999 15.4122 7.1433 15.2618 7.00292C15.1184 6.86903 15 6.64986 15 6.29449V3.5C15 2.11928 13.8807 1 12.5 1ZM8.75 10.25V9.5H7.25V10.25V12.5986C7.25 13.0383 7.11985 13.4681 6.87596 13.834L6.45994 14.458L7.70801 15.2901L8.12404 14.666C8.5322 14.0538 8.75 13.3344 8.75 12.5986V10.25ZM8 7C8.69036 7 9.25 6.44036 9.25 5.75C9.25 5.05964 8.69036 4.5 8 4.5C7.30964 4.5 6.75 5.05964 6.75 5.75C6.75 6.44036 7.30964 7 8 7Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p
          class="text_wrapper in-this-chapter_content__QPwZX"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.875rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
        >
          Different ways to add icons to your application.
        </p>
      </div>
    </div>
  );
});
