import {
  PropsOf,
  Slot,
  component$,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@qwik-ui/headless";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";

export default component$(() => {
  const showSig = useSignal(false);
  useStyles$(`
    .bottom-sheet::backdrop {
      background: hsla(0, 0%, 0%, 0.5);
    }

    .bottom-sheet.modal-showing {
      animation: bottomSheetOpen 0.75s forwards cubic-bezier(0.6, 0.6, 0, 1);
    }

    .bottom-sheet.modal-showing::backdrop {
      animation: sheetFadeIn 0.75s forwards cubic-bezier(0.6, 0.6, 0, 1);
    }

    .bottom-sheet.modal-closing {
      animation: bottomSheetClose 0.35s forwards cubic-bezier(0.6, 0.6, 0, 1);
    }

    .bottom-sheet.modal-closing::backdrop {
      animation: sheetFadeOut 0.35s forwards cubic-bezier(0.6, 0.6, 0, 1);
    }

    @keyframes bottomSheetOpen {
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    @keyframes bottomSheetClose {
      from {
        opacity: 1;
        transform: translateY(0%);
      }
      to {
        opacity: 0;
        transform: translateY(100%);
      }
    }

    @keyframes sheetFadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes sheetFadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    .new-dialog_inner {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      outline: none;
      overflow-y: auto;
      overscroll-behavior: none;
      z-index: 1;
      background: var(--ds-background-100);
  }

    `);

  return (
    <>
      <button
        onClick$={() => {
          showSig.value = true;
        }}
      >
        <Slot />
      </button>
      <Modal
        bind:show={showSig}
        // class="bottom-sheet shadow-dark-medium bg-background text-foreground modal-showing fixed bottom-0 mb-0  max-h-[80%] min-w-full rounded-md border-0 p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
        class="bottom-sheet shadow-dark-medium bg-background text-foreground fixed bottom-0 mb-0 max-h-[80%] min-w-full max-w-[25rem] rounded-md border-0 p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
      >
        <div class="new-dialog_inner">
          <div class=" flex gap-3 p-3">
            <button
              class=" flex w-[50%] cursor-pointer items-center gap-3 rounded-md bg-gray-100 px-3 py-2.5 md:w-auto md:min-w-[225px]"
              type="button"
            >
              <div class="relative">
                <BookSvg small id="modalBottomSheet" />
              </div>

              <div class="flex flex-col items-start text-left">
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500;"
                >
                  Learn Qwik
                </p>
                <p
                  class="text_wrapper hidden md:block"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  0/16 Chapters
                </p>
              </div>
              <svg
                class="ml-auto"
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
            </button>
          </div>
          <div class="border-gray-alpha-400 border-t p-2 pt-0">
            <div class="grid grid-cols-2 py-2">
              <a
                class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                href="/learn/dashboard-app"
              >
                <div
                  aria-hidden="true"
                  class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                >
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
                      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  Introduction
                </p>
              </a>
            </div>
            <div class="border-gray-alpha-400 flex flex-col border-t py-2">
              <div class="flex flex-col">
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/getting-started"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    1
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 1
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Getting Started
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/css-styling"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    2
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 2
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      CSS Styling
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/optimizing-fonts-and-images"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    3
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 3
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Optimizing Fonts and Images
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/creating-layouts-and-pages"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    4
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 4
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Creating Layouts and Pages
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/navigating-between-pages"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    5
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 5
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Navigating Between Pages
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/setting-up-your-database"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    6
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 6
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Setting Up Your Database
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/fetching-data"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    7
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 7
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Fetching Data
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/static-and-dynamic-rendering"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    8
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 8
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Static and Dynamic Rendering
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/streaming"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    9
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 9
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Streaming
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/partial-prerendering"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    10
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 10
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Partial Prerendering (Optional)
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/adding-search-and-pagination"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    11
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 11
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Adding Search and Pagination
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/mutating-data"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    12
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 12
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Mutating Data
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/error-handling"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    13
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 13
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Handling Errors
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/improving-accessibility"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    14
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 14
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Improving Accessibility
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/adding-authentication"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    15
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 15
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Adding Authentication
                    </p>
                  </div>
                </a>
                <a
                  class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                  href="/learn/dashboard-app/adding-metadata"
                >
                  <div
                    aria-hidden="true"
                    class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                  >
                    16
                  </div>
                  <div class="flex flex-col">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1.125rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Chapter 16
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                    >
                      Adding Metadata
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="border-gray-alpha-400 grid grid-cols-2 border-t pt-2">
              <a
                class="hover:bg-vercel-200 group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5"
                href="/learn/dashboard-app/next-steps"
              >
                <div
                  aria-hidden="true"
                  class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-medium text-blue-900 group-hover:bg-gray-300 group-hover:text-gray-900"
                >
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    stroke-linejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style="color: currentcolor;"
                  >
                    <path
                      d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  Next Steps
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* <ModalHeader>
          <div class="flex gap-3 p-3">
            <button
              class="bg-vercel-200 flex w-[50%] cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 hover:bg-gray-100 md:w-auto md:min-w-[225px]"
              type="button"
            >
              <svg
                fill="none"
                height="41"
                viewBox="0 0 32 41"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_iii_439_2988)">
                  <g clip-path="url(#clip0_439_2988)">
                    <path
                      d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H30C31.1046 0.5 32 1.39543 32 2.5V38.5C32 39.6046 31.1046 40.5 30 40.5H4C1.79086 40.5 0 38.7091 0 36.5V4.5Z"
                      fill="#303030"
                    ></path>
                    <path
                      d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H30C31.1046 0.5 32 1.39543 32 2.5V38.5C32 39.6046 31.1046 40.5 30 40.5H4C1.79086 40.5 0 38.7091 0 36.5V4.5Z"
                      fill="url(#paint0_linear_439_2988)"
                    ></path>
                    <rect
                      fill="url(#paint1_linear_439_2988)"
                      height="40"
                      opacity="0.2"
                      width="8"
                      y="0.5"
                    ></rect>
                    <rect
                      fill="url(#paint2_linear_439_2988)"
                      height="40"
                      opacity="0.05"
                      width="8"
                      y="0.5"
                    ></rect>
                    <rect
                      fill="#2A2D2E"
                      height="40"
                      transform="translate(6 0.5)"
                      width="26"
                    ></rect>
                    <rect
                      fill="url(#paint3_linear_439_2988)"
                      fill-opacity="0.28"
                      height="40"
                      transform="translate(6 0.5)"
                      width="26"
                    ></rect>
                    <g filter="url(#filter1_di_439_2988)">
                      <path
                        clip-rule="evenodd"
                        d="M19 29C23.4183 29 27 25.4183 27 21C27 16.5817 23.4183 13 19 13C14.5817 13 11 16.5817 11 21C11 25.4183 14.5817 29 19 29ZM17.229 16.7447C16.9779 16.6698 16.8338 16.7004 16.7524 16.7474C16.671 16.7944 16.5725 16.9039 16.5118 17.1588C16.4507 17.4151 16.4415 17.7713 16.5055 18.2157C16.5137 18.2726 16.523 18.3304 16.5335 18.3893C16.8711 18.3167 17.2287 18.2589 17.6011 18.2174C17.8232 17.9156 18.0521 17.6348 18.2838 17.3787C18.2381 17.3402 18.1926 17.3032 18.1475 17.2677C17.7946 16.99 17.4815 16.8199 17.229 16.7447ZM18.9989 16.6744C18.9211 16.607 18.8433 16.5428 18.7659 16.4818C18.354 16.1577 17.9287 15.9098 17.5147 15.7863C17.0993 15.6625 16.6487 15.6526 16.2524 15.8814C15.8562 16.1102 15.6395 16.5054 15.539 16.927C15.4389 17.3473 15.441 17.8396 15.5157 18.3583C15.5298 18.4559 15.5465 18.5553 15.566 18.6565C15.4687 18.6902 15.3742 18.7254 15.2826 18.762C14.796 18.9567 14.3686 19.201 14.0547 19.4978C13.7398 19.7957 13.5059 20.181 13.5059 20.6385C13.5059 21.096 13.7398 21.4813 14.0547 21.7792C14.3686 22.076 14.796 22.3203 15.2826 22.515C15.3742 22.5516 15.4687 22.5868 15.566 22.6205C15.5465 22.7216 15.5298 22.8211 15.5157 22.9187C15.441 23.4374 15.4388 23.9297 15.539 24.35C15.6394 24.7716 15.8562 25.1668 16.2524 25.3956C16.6487 25.6244 17.0993 25.6145 17.5147 25.4906C17.9287 25.3672 18.354 25.1193 18.7659 24.7951C18.8433 24.7342 18.9211 24.6699 18.9989 24.6025C19.0768 24.6699 19.1545 24.7342 19.232 24.7951C19.6439 25.1193 20.0692 25.3672 20.4832 25.4906C20.8986 25.6145 21.3492 25.6244 21.7455 25.3956C22.1417 25.1668 22.3584 24.7716 22.4589 24.35C22.559 23.9297 22.5569 23.4374 22.4822 22.9187C22.4681 22.8211 22.4513 22.7216 22.4319 22.6205C22.5292 22.5868 22.6237 22.5516 22.7152 22.515C23.2019 22.3203 23.6292 22.076 23.9431 21.7792C24.2581 21.4813 24.492 21.096 24.492 20.6385C24.492 20.181 24.2581 19.7957 23.9431 19.4978C23.6292 19.201 23.2019 18.9567 22.7152 18.762C22.6237 18.7254 22.5292 18.6902 22.4319 18.6565C22.4513 18.5553 22.4681 18.4559 22.4822 18.3583C22.5569 17.8396 22.559 17.3473 22.4589 16.927C22.3584 16.5054 22.1417 16.1102 21.7454 15.8814C21.3492 15.6526 20.8986 15.6625 20.4832 15.7864C20.0691 15.9098 19.6439 16.1577 19.232 16.4818C19.1545 16.5428 19.0768 16.607 18.9989 16.6744ZM18.9989 18.0789C18.9805 18.0996 18.962 18.1204 18.9435 18.1414L18.9989 18.1413L19.0544 18.1414C19.0359 18.1204 19.0174 18.0996 18.9989 18.0789ZM20.3968 18.2174C20.1746 17.9156 19.9458 17.6348 19.7141 17.3787C19.7598 17.3402 19.8052 17.3032 19.8504 17.2677C20.2033 16.99 20.5163 16.8199 20.7688 16.7447C21.0199 16.6698 21.1641 16.7004 21.2454 16.7474C21.3268 16.7944 21.4254 16.9039 21.4861 17.1588C21.5472 17.4151 21.5564 17.7713 21.4924 18.2157C21.4842 18.2726 21.4749 18.3304 21.4644 18.3893C21.1268 18.3167 20.7692 18.2589 20.3968 18.2174ZM19.8461 19.1711C19.5722 19.1516 19.2891 19.1413 18.9989 19.1413C18.7088 19.1413 18.4257 19.1516 18.1517 19.1711C17.9979 19.3986 17.8474 19.6386 17.7023 19.8899C17.5572 20.1412 17.4246 20.3915 17.3046 20.6385C17.4246 20.8855 17.5572 21.1358 17.7023 21.3871C17.8474 21.6384 17.9979 21.8784 18.1518 22.1059C18.4257 22.1254 18.7088 22.1357 18.9989 22.1357C19.2891 22.1357 19.5722 22.1254 19.8461 22.1059C20 21.8784 20.1505 21.6384 20.2955 21.3871C20.4406 21.1358 20.5733 20.8855 20.6933 20.6385C20.5733 20.3915 20.4406 20.1412 20.2956 19.8899C20.1505 19.6386 20 19.3986 19.8461 19.1711ZM21.1892 19.438L21.1616 19.3899L21.1338 19.3419C21.1612 19.3474 21.1885 19.353 21.2156 19.3587C21.2069 19.385 21.1982 19.4114 21.1892 19.438ZM21.1892 21.839L21.1616 21.8871L21.1337 21.9351C21.1612 21.9296 21.1885 21.924 21.2156 21.9183C21.207 21.8919 21.1982 21.8655 21.1892 21.839ZM22.1796 21.649C22.0736 21.3203 21.9449 20.9818 21.7946 20.6385C21.9449 20.2952 22.0736 19.9566 22.1795 19.6279C22.2357 19.6483 22.2905 19.6692 22.3438 19.6905C22.7608 19.8573 23.0646 20.0433 23.256 20.2244C23.4464 20.4044 23.492 20.5445 23.492 20.6385C23.492 20.7325 23.4464 20.8726 23.256 21.0526C23.0646 21.2337 22.7608 21.4197 22.3438 21.5865C22.2905 21.6078 22.2357 21.6287 22.1796 21.649ZM21.4644 22.8877C21.1268 22.9603 20.7692 23.0181 20.3968 23.0596C20.1746 23.3614 19.9458 23.6421 19.7141 23.8983C19.7598 23.9367 19.8053 23.9737 19.8504 24.0093C20.2033 24.2869 20.5163 24.457 20.7688 24.5323C21.0199 24.6072 21.1641 24.5765 21.2455 24.5296C21.3268 24.4826 21.4254 24.3731 21.4861 24.1182C21.5472 23.8619 21.5564 23.5057 21.4924 23.0613C21.4842 23.0044 21.4749 22.9465 21.4644 22.8877ZM18.9989 23.198C19.0174 23.1774 19.0359 23.1566 19.0544 23.1356L18.9989 23.1357L18.9435 23.1356C18.962 23.1566 18.9805 23.1774 18.9989 23.198ZM16.8641 21.9351L16.8363 21.8871L16.8087 21.839C16.7997 21.8655 16.7909 21.8919 16.7823 21.9183C16.8094 21.924 16.8367 21.9296 16.8641 21.9351ZM16.5335 22.8877C16.8711 22.9603 17.2287 23.0181 17.6011 23.0596C17.8233 23.3614 18.0521 23.6421 18.2838 23.8983C18.2381 23.9367 18.1926 23.9737 18.1475 24.0093C17.7946 24.2869 17.4815 24.457 17.229 24.5323C16.9779 24.6072 16.8338 24.5765 16.7524 24.5296C16.671 24.4826 16.5725 24.3731 16.5117 24.1182C16.4507 23.8619 16.4414 23.5057 16.5055 23.0613C16.5137 23.0044 16.523 22.9465 16.5335 22.8877ZM15.8183 21.649C15.9243 21.3203 16.053 20.9818 16.2033 20.6385C16.053 20.2952 15.9243 19.9566 15.8183 19.6279C15.7621 19.6483 15.7074 19.6692 15.654 19.6905C15.2371 19.8573 14.9333 20.0433 14.7419 20.2244C14.5515 20.4044 14.5059 20.5445 14.5059 20.6385C14.5059 20.7325 14.5515 20.8726 14.7419 21.0526C14.9333 21.2337 15.2371 21.4197 15.654 21.5865C15.7074 21.6078 15.7621 21.6287 15.8183 21.649ZM16.7823 19.3587C16.7909 19.385 16.7997 19.4114 16.8087 19.438L16.8363 19.3899L16.8641 19.3419C16.8367 19.3474 16.8094 19.353 16.7823 19.3587ZM18.9989 21.4707C19.4585 21.4707 19.8311 21.0981 19.8311 20.6385C19.8311 20.1789 19.4585 19.8063 18.9989 19.8063C18.5393 19.8063 18.1668 20.1789 18.1668 20.6385C18.1668 21.0981 18.5393 21.4707 18.9989 21.4707Z"
                        fill="black"
                        fill-opacity="0.5"
                        fill-rule="evenodd"
                        shape-rendering="crispEdges"
                      ></path>
                    </g>
                    <path
                      clip-rule="evenodd"
                      d="M16.7524 16.7474C16.8338 16.7004 16.9779 16.6698 17.229 16.7447C17.4815 16.82 17.7945 16.9901 18.1474 17.2677C18.1926 17.3033 18.238 17.3403 18.2837 17.3787C18.052 17.6348 17.8232 17.9156 17.601 18.2174C17.2286 18.2589 16.8711 18.3167 16.5334 18.3893C16.523 18.3305 16.5136 18.2726 16.5054 18.2157C16.4414 17.7713 16.4506 17.4151 16.5117 17.1588C16.5724 16.9039 16.671 16.7944 16.7524 16.7474ZM18.7658 16.4819C18.8433 16.5428 18.921 16.6071 18.9989 16.6744C19.0767 16.6071 19.1545 16.5428 19.2319 16.4819C19.6438 16.1577 20.0691 15.9098 20.4831 15.7864C20.8985 15.6625 21.3491 15.6526 21.7454 15.8814C22.1416 16.1102 22.3584 16.5054 22.4588 16.927C22.559 17.3473 22.5568 17.8396 22.4821 18.3583C22.468 18.4559 22.4513 18.5554 22.4318 18.6565C22.5291 18.6902 22.6236 18.7254 22.7152 18.762C23.2018 18.9567 23.6292 19.201 23.9431 19.4978C24.258 19.7957 24.4919 20.181 24.4919 20.6385C24.4919 21.096 24.258 21.4813 23.9431 21.7792C23.6292 22.076 23.2018 22.3203 22.7152 22.515C22.6236 22.5516 22.5291 22.5868 22.4319 22.6205C22.4513 22.7217 22.468 22.8211 22.4821 22.9187C22.5568 23.4374 22.559 23.9297 22.4588 24.35C22.3584 24.7716 22.1416 25.1668 21.7454 25.3956C21.3491 25.6244 20.8985 25.6145 20.4831 25.4906C20.0691 25.3672 19.6438 25.1193 19.2319 24.7951C19.1545 24.7342 19.0767 24.6699 18.9989 24.6026C18.921 24.6699 18.8433 24.7342 18.7658 24.7952C18.3539 25.1193 17.9286 25.3672 17.5146 25.4906C17.0992 25.6145 16.6486 25.6244 16.2524 25.3956C15.8561 25.1668 15.6394 24.7716 15.5389 24.35C15.4388 23.9297 15.4409 23.4374 15.5156 22.9187C15.5297 22.8211 15.5465 22.7217 15.5659 22.6205C15.4686 22.5868 15.3741 22.5516 15.2826 22.515C14.7959 22.3203 14.3686 22.076 14.0547 21.7792C13.7397 21.4813 13.5059 21.096 13.5059 20.6385C13.5059 20.181 13.7397 19.7957 14.0547 19.4978C14.3686 19.201 14.7959 18.9567 15.2826 18.762C15.3741 18.7254 15.4686 18.6902 15.5659 18.6565C15.5465 18.5554 15.5297 18.4559 15.5157 18.3583C15.4409 17.8396 15.4388 17.3473 15.5389 16.927C15.6394 16.5054 15.8561 16.1102 16.2524 15.8814C16.6486 15.6526 17.0992 15.6625 17.5146 15.7864C17.9287 15.9098 18.3539 16.1577 18.7658 16.4819ZM18.9434 18.1414C18.9619 18.1204 18.9804 18.0996 18.9989 18.079C19.0174 18.0996 19.0358 18.1204 19.0543 18.1414L18.9989 18.1413L18.9434 18.1414ZM19.714 17.3787C19.9457 17.6348 20.1746 17.9156 20.3967 18.2174C20.7691 18.2589 21.1267 18.3167 21.4643 18.3893C21.4748 18.3305 21.4841 18.2726 21.4923 18.2157C21.5563 17.7713 21.5471 17.4151 21.4861 17.1588C21.4253 16.9039 21.3268 16.7944 21.2454 16.7474C21.164 16.7005 21.0199 16.6698 20.7688 16.7447C20.5163 16.82 20.2032 16.9901 19.8503 17.2677C19.8052 17.3033 19.7597 17.3403 19.714 17.3787ZM18.9989 19.1413C19.2891 19.1413 19.5721 19.1516 19.8461 19.1711C20 19.3986 20.1504 19.6386 20.2955 19.8899C20.4406 20.1412 20.5732 20.3915 20.6932 20.6385C20.5732 20.8855 20.4406 21.1358 20.2955 21.3871C20.1504 21.6384 19.9999 21.8784 19.846 22.1059C19.5721 22.1254 19.289 22.1357 18.9989 22.1357C18.7087 22.1357 18.4256 22.1254 18.1517 22.1059C17.9978 21.8784 17.8473 21.6384 17.7023 21.3871C17.5572 21.1358 17.4245 20.8855 17.3045 20.6385C17.4245 20.3915 17.5572 20.1412 17.7022 19.8899C17.8473 19.6386 17.9978 19.3986 18.1517 19.1711C18.4256 19.1516 18.7087 19.1413 18.9989 19.1413ZM21.1615 19.3899L21.1891 19.438C21.1981 19.4115 21.2069 19.385 21.2155 19.3587C21.1884 19.353 21.1611 19.3474 21.1337 19.3419L21.1615 19.3899ZM21.1615 21.8871L21.1891 21.839C21.1981 21.8655 21.2069 21.892 21.2155 21.9183C21.1884 21.924 21.1611 21.9296 21.1337 21.9351L21.1615 21.8871ZM21.7945 20.6385C21.9448 20.9818 22.0735 21.3203 22.1795 21.649C22.2357 21.6287 22.2904 21.6078 22.3438 21.5865C22.7607 21.4197 23.0645 21.2337 23.256 21.0526C23.4463 20.8726 23.4919 20.7325 23.4919 20.6385C23.4919 20.5445 23.4463 20.4044 23.256 20.2244C23.0645 20.0433 22.7607 19.8573 22.3438 19.6905C22.2904 19.6692 22.2357 19.6483 22.1795 19.628C22.0735 19.9567 21.9448 20.2952 21.7945 20.6385ZM20.3967 23.0596C20.7691 23.0181 21.1267 22.9603 21.4643 22.8877C21.4748 22.9466 21.4841 23.0044 21.4923 23.0613C21.5564 23.5057 21.5471 23.8619 21.4861 24.1182C21.4253 24.3731 21.3268 24.4826 21.2454 24.5296C21.164 24.5766 21.0199 24.6072 20.7688 24.5323C20.5163 24.4571 20.2032 24.287 19.8503 24.0093C19.8052 23.9738 19.7597 23.9367 19.714 23.8983C19.9457 23.6422 20.1746 23.3614 20.3967 23.0596ZM19.0543 23.1356C19.0358 23.1566 19.0174 23.1774 18.9989 23.198C18.9804 23.1774 18.9619 23.1566 18.9434 23.1356L18.9989 23.1357L19.0543 23.1356ZM16.8362 21.8871L16.8641 21.9351C16.8366 21.9296 16.8093 21.924 16.7822 21.9183C16.7909 21.892 16.7996 21.8655 16.8086 21.839L16.8362 21.8871ZM17.601 23.0596C17.2286 23.0181 16.871 22.9603 16.5334 22.8877C16.5229 22.9466 16.5136 23.0044 16.5054 23.0613C16.4414 23.5057 16.4506 23.8619 16.5117 24.1182C16.5724 24.3731 16.671 24.4826 16.7524 24.5296C16.8337 24.5766 16.9779 24.6072 17.229 24.5323C17.4815 24.4571 17.7945 24.287 18.1474 24.0093C18.1926 23.9738 18.238 23.9367 18.2837 23.8983C18.052 23.6422 17.8232 23.3614 17.601 23.0596ZM16.2032 20.6385C16.0529 20.9818 15.9242 21.3203 15.8183 21.649C15.7621 21.6287 15.7073 21.6078 15.654 21.5865C15.2371 21.4197 14.9332 21.2337 14.7418 21.0526C14.5514 20.8726 14.5059 20.7325 14.5059 20.6385C14.5059 20.5445 14.5514 20.4044 14.7418 20.2244C14.9332 20.0433 15.2371 19.8573 15.654 19.6905C15.7073 19.6692 15.7621 19.6483 15.8183 19.628C15.9242 19.9567 16.0529 20.2952 16.2032 20.6385ZM16.8086 19.438C16.7996 19.4115 16.7909 19.385 16.7822 19.3587C16.8093 19.353 16.8366 19.3474 16.864 19.3419L16.8362 19.3899L16.8086 19.438ZM19.831 20.6385C19.831 21.0981 19.4585 21.4707 18.9989 21.4707C18.5393 21.4707 18.1667 21.0981 18.1667 20.6385C18.1667 20.1789 18.5393 19.8063 18.9989 19.8063C19.4585 19.8063 19.831 20.1789 19.831 20.6385Z"
                      fill="white"
                      fill-opacity="0.3"
                      fill-rule="evenodd"
                    ></path>
                  </g>
                  <path
                    d="M0.5 4.5C0.5 2.567 2.067 1 4 1H30C30.8284 1 31.5 1.67157 31.5 2.5V38.5C31.5 39.3284 30.8284 40 30 40H4C2.067 40 0.5 38.433 0.5 36.5V4.5Z"
                    stroke="black"
                    stroke-opacity="0.02"
                  ></path>
                </g>
                <defs>
                  <filter
                    color-interpolation-filters="s-rGB"
                    filterUnits="userSpaceOnUse"
                    height="41"
                    id="filter0_iii_439_2988"
                    width="36"
                    x="0"
                    y="0.5"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result="effect1_innerShadow_439_2988"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="effect1_innerShadow_439_2988"
                      mode="normal"
                      result="effect2_innerShadow_439_2988"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="-1"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="effect2_innerShadow_439_2988"
                      mode="normal"
                      result="effect3_innerShadow_439_2988"
                    ></feBlend>
                  </filter>
                  <filter
                    color-interpolation-filters="s-rGB"
                    filterUnits="userSpaceOnUse"
                    height="16.5"
                    id="filter1_di_439_2988"
                    width="16"
                    x="11"
                    y="13"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="0.5"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_439_2988"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_439_2988"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="0.5"></feOffset>
                    <feGaussianBlur stdDeviation="0.25"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result="effect2_innerShadow_439_2988"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_439_2988"
                    x1="16"
                    x2="16"
                    y1="0.5"
                    y2="40.5"
                  >
                    <stop stop-color="white" stop-opacity="0.1"></stop>
                    <stop
                      offset="0.5"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_439_2988"
                    x1="0"
                    x2="8"
                    y1="18.25"
                    y2="18.25"
                  >
                    <stop stop-opacity="0.03"></stop>
                    <stop offset="0.119792" stop-opacity="0.1"></stop>
                    <stop offset="0.291667" stop-opacity="0"></stop>
                    <stop offset="0.505208" stop-opacity="0.02"></stop>
                    <stop offset="0.734375" stop-opacity="0.21"></stop>
                    <stop offset="0.752526" stop-opacity="0.5"></stop>
                    <stop offset="0.852261" stop-opacity="0.15"></stop>
                    <stop offset="1" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_439_2988"
                    x1="0"
                    x2="8"
                    y1="18.25"
                    y2="18.25"
                  >
                    <stop stop-color="white" stop-opacity="0"></stop>
                    <stop
                      offset="0.119792"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0.291667"
                      stop-color="white"
                      stop-opacity="0.96"
                    ></stop>
                    <stop
                      offset="0.505208"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0.752526"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="0.911458" stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_439_2988"
                    x1="2.71429"
                    x2="32.067"
                    y1="4.24102e-07"
                    y2="27.5023"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <clipPath id="clip0_439_2988">
                    <path
                      d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H30C31.1046 0.5 32 1.39543 32 2.5V38.5C32 39.6046 31.1046 40.5 30 40.5H4C1.79086 40.5 0 38.7091 0 36.5V4.5Z"
                      fill="white"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <div class="flex flex-col items-start text-left">
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500;"
                >
                  React Foundations
                </p>
                <p
                  class="text_wrapper hidden md:block"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  0/10 Chapters
                </p>
              </div>
            </button>
            <button
              class="flex w-[50%] cursor-pointer items-center gap-3 rounded-md bg-gray-100 px-3 py-2.5 md:w-auto md:min-w-[225px]"
              type="button"
            >
              <svg
                fill="none"
                height="40"
                viewBox="0 0 32 40"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_iii_126_16757)">
                  <g clip-path="url(#clip0_126_16757)">
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                      fill="#303030"
                    ></path>
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                      fill="url(#paint0_linear_126_16757)"
                    ></path>
                    <rect
                      fill="url(#paint1_linear_126_16757)"
                      height="40"
                      opacity="0.2"
                      width="8"
                    ></rect>
                    <rect
                      fill="url(#paint2_linear_126_16757)"
                      height="40"
                      opacity="0.05"
                      width="8"
                    ></rect>
                    <rect
                      fill="#D6DBDC"
                      height="40"
                      transform="translate(6)"
                      width="26"
                    ></rect>
                    <rect
                      fill="url(#paint3_linear_126_16757)"
                      fill-opacity="0.7"
                      height="40"
                      transform="translate(6)"
                      width="26"
                    ></rect>
                    <g filter="url(#filter1_d_126_16757)">
                      <path
                        d="M20 -8C20 -8.55228 20.4477 -9 21 -9H27C27.5523 -9 28 -8.55228 28 -8V6.79623C28 7.65539 26.9881 8.11457 26.3405 7.54881L24.6585 6.07619C24.2815 5.74629 23.7185 5.74629 23.3415 6.07619L21.6585 7.54881C21.0119 8.11457 20 7.65539 20 6.79623V-8Z"
                        fill="#3291FF"
                      ></path>
                    </g>
                    <g clip-path="url(#clip1_126_16757)">
                      <circle
                        cx="19"
                        cy="20"
                        fill="black"
                        r="7.375"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.25"
                      ></circle>
                      <path
                        d="M21.63 23V17"
                        stroke="url(#paint4_linear_126_16757)"
                        stroke-miterlimit="1.41421"
                        stroke-width="1.25"
                      ></path>
                      <path
                        clip-rule="evenodd"
                        d="M16.995 17.0009V17H15.745V23H16.995V18.968L23.3615 26.7076C23.712 26.4793 24.0434 26.2242 24.353 25.9453L16.9953 17.0006L16.995 17.0009Z"
                        fill="url(#paint5_linear_126_16757)"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </g>
                  <path
                    d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C30.8284 0.5 31.5 1.17157 31.5 2V38C31.5 38.8284 30.8284 39.5 30 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4Z"
                    stroke="black"
                    stroke-opacity="0.02"
                  ></path>
                </g>
                <defs>
                  <filter
                    color-interpolation-filters="s-rGB"
                    filterUnits="userSpaceOnUse"
                    height="41"
                    id="filter0_iii_126_16757"
                    width="36"
                    x="0"
                    y="0"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result="effect1_innerShadow_126_16757"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="effect1_innerShadow_126_16757"
                      mode="normal"
                      result="effect2_innerShadow_126_16757"
                    ></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="-1"></feOffset>
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="effect2_innerShadow_126_16757"
                      mode="normal"
                      result="effect3_innerShadow_126_16757"
                    ></feBlend>
                  </filter>
                  <filter
                    color-interpolation-filters="s-rGB"
                    filterUnits="userSpaceOnUse"
                    height="18.7982"
                    id="filter1_d_126_16757"
                    width="10"
                    x="19"
                    y="-9"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    ></feColorMatrix>
                    <feBlend
                      in2="BackgroundImageFix"
                      mode="normal"
                      result="effect1_dropShadow_126_16757"
                    ></feBlend>
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_126_16757"
                      mode="normal"
                      result="shape"
                    ></feBlend>
                  </filter>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_126_16757"
                    x1="16"
                    x2="16"
                    y1="0"
                    y2="40"
                  >
                    <stop stop-color="white" stop-opacity="0.1"></stop>
                    <stop
                      offset="0.5"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_126_16757"
                    x1="0"
                    x2="8"
                    y1="17.75"
                    y2="17.75"
                  >
                    <stop stop-opacity="0.03"></stop>
                    <stop offset="0.119792" stop-opacity="0.1"></stop>
                    <stop offset="0.291667" stop-opacity="0"></stop>
                    <stop offset="0.505208" stop-opacity="0.02"></stop>
                    <stop offset="0.734375" stop-opacity="0.21"></stop>
                    <stop offset="0.752526" stop-opacity="0.5"></stop>
                    <stop offset="0.852261" stop-opacity="0.15"></stop>
                    <stop offset="1" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_126_16757"
                    x1="0"
                    x2="8"
                    y1="17.75"
                    y2="17.75"
                  >
                    <stop stop-color="white" stop-opacity="0"></stop>
                    <stop
                      offset="0.119792"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0.291667"
                      stop-color="white"
                      stop-opacity="0.96"
                    ></stop>
                    <stop
                      offset="0.505208"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop
                      offset="0.752526"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="0.911458" stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_126_16757"
                    x1="2.71429"
                    x2="32.067"
                    y1="4.24102e-07"
                    y2="27.5023"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint4_linear_126_16757"
                    x1="22.13"
                    x2="22.13"
                    y1="17"
                    y2="23"
                  >
                    <stop stop-color="white"></stop>
                    <stop
                      offset="0.609375"
                      stop-color="white"
                      stop-opacity="0.57"
                    ></stop>
                    <stop
                      offset="0.796875"
                      stop-color="white"
                      stop-opacity="0"
                    ></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint5_linear_126_16757"
                    x1="20.9375"
                    x2="24.5574"
                    y1="21.0625"
                    y2="25.3992"
                  >
                    <stop stop-color="white"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                  </linearGradient>
                  <clipPath id="clip0_126_16757">
                    <path
                      d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                      fill="white"
                    ></path>
                  </clipPath>
                  <clipPath id="clip1_126_16757">
                    <rect
                      fill="white"
                      height="16"
                      transform="translate(11 12)"
                      width="16"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <div class="flex flex-col items-start text-left">
                <p
                  class="text_wrapper"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500;"
                >
                  Learn Next.js
                </p>
                <p
                  class="text_wrapper hidden md:block"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  0/16 Chapters
                </p>
              </div>
              <svg
                class="ml-auto"
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
            </button>
          </div>
        </ModalHeader>
        <ModalContent class="mb-2 py-4">
          <p class="mb-4 leading-5">
            You can update your profile here. Hit the save button when finished.
          </p>
          <div class="mb-1 flex items-baseline justify-between">
            <label for="name">Name</label>
            <input
              class="bg-background text-foreground mt-2 rounded-sm px-4 py-[10px]"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <label for="email">Email</label>
            <input
              class="bg-background text-foreground mt-2 rounded-sm px-4 py-3"
              id="email"
              type="text"
              placeholder="johndoe@gmail.com"
            />
          </div>
        </ModalContent>
        <ModalFooter class="flex justify-end gap-4">
          <button
            class="bg-muted text-muted-foreground focus:ring-ring ring-offset-background focus-visible:ring-ring hover:bg-accent/90 hover:text-accent-foreground rounded-sm border border-none px-4 py-[10px] outline-none transition-colors focus:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick$={() => (showSig.value = false)}
          >
            Cancel
          </button>
          <button
            class="bg-primary text-primary-foreground focus:ring-ring ring-offset-background focus-visible:ring-ring hover:bg-primary/90 rounded-sm border border-none px-4 py-[10px] outline-none transition-colors focus:ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            onClick$={() => (showSig.value = false)}
          >
            Save Changes
          </button>
        </ModalFooter>
        <button
          onClick$={() => (showSig.value = false)}
          class="absolute right-6 top-[26px]"
        >
          <CloseIcon class="h-8 w-8" />
        </button> */}
      </Modal>
    </>
  );
});

export function CloseIcon(props: PropsOf<"svg">, key: string) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
      key={key}
    >
      <path
        fill="currentColor"
        d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}
