import type { Signal } from "@builder.io/qwik";
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  HiExclamationTriangleOutline,
  HiTrashOutline,
  HiXMarkOutline,
} from "@qwikest/icons/heroicons";
import { Message } from "~/components/UI/message/message";
import { useDeleteProfileAction } from "~/routes/auth/deleteProfile";
import type { Tables } from "~/types/learn-qwik.database.types";

export type ModalDeleteProfileProps = {
  profile: Signal<Tables<"profiles"> | null>;
};

export const ModalDeleteProfile = component$<ModalDeleteProfileProps>(
  ({ profile }) => {
    const showModal = useSignal(false);
    const deleteProfileAction = useDeleteProfileAction();

    const openModal = $(() => {
      showModal.value = true;
    });

    const closeModal = $(() => {
      if (deleteProfileAction.isRunning) return;
      showModal.value = false;
    });

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && !deleteProfileAction.isRunning) {
          showModal.value = false;
        }
      };

      document.addEventListener("keydown", onKeyDown);

      cleanup(() => {
        document.removeEventListener("keydown", onKeyDown);
      });
    });

    return (
      <>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick$={openModal}
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:ring-offset-2"
          >
            <HiTrashOutline class="h-4 w-4 stroke-2" />
            Delete account
          </button>

          <Link
            href="/"
            class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-(--qwik-dirty-black)! shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>

        {showModal.value && (
          <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
              type="button"
              aria-label="Close modal"
              disabled={deleteProfileAction.isRunning}
              onClick$={closeModal}
              class="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            />

            <div class="relative z-10 w-full max-w-lg overflow-hidden rounded-4xl border border-red-500/10 bg-white shadow-[0_20px_60px_rgba(17,24,39,0.16)]">
              <div class="bg-[linear-gradient(180deg,rgba(239,68,68,0.08),rgba(255,255,255,0))] p-6 md:p-7">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex items-start gap-4">
                    <div class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                      <HiExclamationTriangleOutline class="h-6 w-6 stroke-2" />
                    </div>

                    <div class="min-w-0">
                      <h2 class="text-2xl font-semibold text-(--qwik-dirty-black)">
                        Confirm account deletion
                      </h2>
                      <p class="mt-2 text-sm leading-6 text-gray-600">
                        You are about to permanently delete your Learn Qwik
                        account.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-label="Close modal"
                    disabled={deleteProfileAction.isRunning}
                    onClick$={closeModal}
                    class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    <HiXMarkOutline class="h-5 w-5 stroke-2" />
                  </button>
                </div>

                <div class="mt-6 space-y-4">
                  <div class="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p class="text-sm font-semibold text-red-700">
                      This action cannot be undone
                    </p>
                    <p class="mt-2 text-sm leading-6 text-red-800">
                      Your account, profile, and associated authentication data
                      will be permanently removed.
                    </p>
                  </div>

                  <div class="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                    <p class="text-sm font-medium text-(--qwik-dirty-black)">
                      Final confirmation
                    </p>
                    <p class="mt-2 text-sm leading-6 text-gray-700">
                      Only continue if you are absolutely sure you want to
                      delete this account.
                    </p>
                  </div>

                  <div class="min-h-[72px]">
                    {deleteProfileAction.value?.failed ? (
                      <Message
                        message={{
                          message: deleteProfileAction.value.message,
                          status: "error",
                        }}
                      />
                    ) : (
                      <p class="text-xs leading-5 text-gray-500">
                        Closing this window will cancel the deletion request.
                      </p>
                    )}
                  </div>
                </div>

                <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    disabled={deleteProfileAction.isRunning}
                    onClick$={async () => {
                      await deleteProfileAction.submit({
                        userId: profile.value?.id,
                      });
                    }}
                    class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    <HiTrashOutline class="h-4 w-4 stroke-2" />
                    {deleteProfileAction.isRunning
                      ? "Deleting account..."
                      : "Permanently delete account"}
                  </button>

                  <button
                    type="button"
                    disabled={deleteProfileAction.isRunning}
                    onClick$={closeModal}
                    class="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-(--qwik-dirty-black) shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                  >
                    Keep my account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  },
);
