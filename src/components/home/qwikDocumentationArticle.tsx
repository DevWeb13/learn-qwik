import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "~/assets/svg/qwikLogo/qwikLogo";

export const QwikDocumentationArticle = component$(() => {
  return (
    <article class="flex w-full flex-col items-center justify-between space-y-6 px-4 pt-10 text-center md:flex-row md:space-y-0 md:px-0 md:text-left">
      <div class="relative flex flex-col items-center  space-x-4 space-y-2 md:flex-row md:space-y-0">
        <div class="relative flex">
          <div class="absolute left-2 top-2">
            <QwikLogo id="4" height={16} width={16} />
          </div>

          <svg
            fill="none"
            height="66"
            viewBox="0 0 54 66"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_24_6161)">
              <path
                class="text-[#EAEAEA] dark:text-gray-400"
                d="M11 46C11 44.8954 11.8954 44 13 44H33C34.1046 44 35 44.8954 35 46C35 47.1046 34.1046 48 33 48H13C11.8954 48 11 47.1046 11 46Z"
                fill="currentColor"
              ></path>
              <path
                class="text-[#EAEAEA] dark:text-gray-400"
                d="M11 52C11 50.8954 11.8954 50 13 50H25C26.1046 50 27 50.8954 27 52C27 53.1046 26.1046 54 25 54H13C11.8954 54 11 53.1046 11 52Z"
                fill="currentColor"
              ></path>

              <path
                class="text-black/10 dark:text-gray-400"
                d="M7 1.5C4.51472 1.5 2.5 3.51472 2.5 6V58C2.5 60.4853 4.51472 62.5 7 62.5H47C49.4853 62.5 51.5 60.4853 51.5 58V6C51.5 3.51472 49.4853 1.5 47 1.5H7Z"
                stroke="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color:var(--ds-gray-1000);--text-size:1.5rem;--text-line-height:2rem;--text-letter-spacing:-0.029375rem;--text-weight:600"
          >
            Qwik Documentation
          </p>
          <p
            class="text_wrapper pt-1"
            data-version="v1"
            style="--text-color:var(--ds-gray-900);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:400"
          >
            The complete resource for installing, running, building with, and
            deploying Qwik
          </p>
        </div>
      </div>
      <div class="w-[100%] md:w-auto">
        <Link
          role="link"
          tabIndex={0}
          href="https://qwik.dev/"
          class="button_base button_button reset_reset button_secondary button_invert"
          data-geist-button=""
          data-prefix="true"
          data-suffix="false"
          data-version="v1"
          style="min-width:100%;max-width:100%;--geist-icon-size:16px"
          target="_blank"
        >
          <span class="button_prefix">
            <svg
              data-testid="geist-icon"
              height="16"
              stroke-linejoin="round"
              style="color:currentColor"
              viewBox="0 0 16 16"
              width="16"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span class="button_content">View the Documentation</span>
        </Link>
      </div>
    </article>
  );
});
