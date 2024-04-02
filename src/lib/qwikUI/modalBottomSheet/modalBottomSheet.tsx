import {
  PropsOf,
  Signal,
  Slot,
  component$,
  useContext,
  useSignal,
  useStore,
  useStyles$,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@qwik-ui/headless";
import { BookSvg } from "~/assets/svg/bookSvg/bookSvg";
import ModalLink from "~/components/UI/modalLink/modalLink";
import { ChapterType } from "~/types/chapterType";
import { CompletedChaptersType } from "~/types/completedChapters";
import { findCompletedChapters } from "~/utils/findCompletedChapters";

interface ModalBottomSheetProps {
  chapters: ChapterType[];
}

export default component$<ModalBottomSheetProps>(({ chapters }) => {
  const showSig = useSignal(false);

  const location = useLocation();

  const store = useStore({
    completedChapters: findCompletedChapters(chapters) as CompletedChaptersType,
  });

  useStyles$(`
    
    `);

  return (
    <>
      <button
        onClick$={() => {
          showSig.value = true;
          store.completedChapters = findCompletedChapters(chapters);
        }}
      >
        <Slot />
      </button>
      <Modal
        bind:show={showSig}
        class="bottom-sheet shadow-dark-medium bg-background text-foreground fixed bottom-0 mb-0 max-h-[80%] min-w-full max-w-[25rem] rounded-md border-0 p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
      >
        <div class="new-dialog_inner">
          <ModalHeader>
            <div class="flex gap-3 p-3">
              <button
                class=" flex w-[50%] cursor-pointer items-center gap-3 rounded-md bg-gray-100 px-3 py-2.5 hover:bg-gray-100 md:w-auto md:min-w-[225px]"
                type="button"
                onClick$={() => {
                  showSig.value = false;
                }}
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
                    {store.completedChapters.length}/16 Chapters
                  </p>
                </div>
              </button>
            </div>
          </ModalHeader>
          <div class="border-gray-alpha-400 border-t p-2 pt-0">
            <ModalContent>
              <div class="py-2">
                <Link
                  class="group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 hover:bg-gray-100"
                  href="/learn/dashboard-app"
                  onClick$={() => {
                    showSig.value = false;
                  }}
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
                </Link>
              </div>
              <div class="border-gray-alpha-400 flex flex-col border-t py-2">
                <div class="flex flex-col">
                  {chapters.map((chapter, id) => (
                    <ModalLink
                      key={chapter.title}
                      id={chapter.id}
                      title={chapter.title}
                      uri={chapter.uri}
                      completedChapters={store.completedChapters}
                      active={
                        "/learn/dashboard-app/" + chapter.uri + "/" ===
                        location.url.pathname
                      }
                      showSig={showSig}
                    />
                  ))}
                </div>
              </div>
            </ModalContent>
            <ModalFooter>
              <div class="border-gray-alpha-400 grid grid-cols-2 border-t pt-2">
                <Link
                  class="group flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 hover:bg-gray-100"
                  href={location.url.pathname}
                  onClick$={() => {
                    showSig.value = false;
                  }}
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
                    Coming soon 🚧
                  </p>
                </Link>
              </div>
            </ModalFooter>
          </div>
        </div>
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
