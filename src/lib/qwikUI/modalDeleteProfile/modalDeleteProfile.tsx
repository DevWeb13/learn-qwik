import { component$, Signal, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@qwik-ui/headless";
import { HiTrashOutline } from "@qwikest/icons/heroicons";

import { useDeleteProfileAction } from "~/routes/auth/deleteProfile";
import { Tables } from "~/types/database.types";
import { isSubscriptionActive } from "~/utils/subscription";

export type ModalDeleteProfileProps = {
  profile: Signal<Tables<"profiles"> | null>;
};

export const ModalDeleteProfile = component$<ModalDeleteProfileProps>(
  ({ profile }) => {
    const showModal = useSignal(false);
    const nav = useNavigate();
    const deleteProfileAction = useDeleteProfileAction();

    console.log("profile", profile.value);

    // 🔥 Vérifier si l'utilisateur a un abonnement actif
    const hasActiveSubscription = isSubscriptionActive(profile.value);
    const subscriptionEndDate = profile.value?.grace_period_end
      ? new Date(profile.value.grace_period_end).toLocaleDateString()
      : null;

    return (
      <>
        <div class="flex flex-col gap-4">
          <button
            onClick$={() => {
              showModal.value = true;
            }}
            class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
          >
            Delete Account <HiTrashOutline class="h-4 w-4 stroke-[2]" />
          </button>

          <button
            onClick$={() => {
              nav("/");
            }}
            class="flex w-full justify-center rounded-sm border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>

        <Modal
          bind:show={showModal}
          class="bottom-sheet shadow-dark-medium bg-background text-foreground fixed mx-auto max-h-[80%] max-w-[80%] rounded-md border-0 p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100 md:max-w-[50%]"
        >
          <div class="flex flex-col gap-4">
            <ModalHeader>
              <h2 class="text-2xl font-semibold">Delete Account</h2>
            </ModalHeader>
            <ModalContent>
              {hasActiveSubscription ? (
                <p>
                  You have an active subscription. If you delete your account,
                  your subscription will be canceled, but you will still have
                  access until{" "}
                  <span class="font-semibold text-blue-500">
                    {subscriptionEndDate}
                  </span>
                  . After this date, your account and all associated data will
                  be permanently deleted.
                </p>
              ) : (
                <p>
                  Are you sure you want to permanently delete your account? This
                  action cannot be undone.
                </p>
              )}

              {/* 🔥 Affichage de l'erreur si échec */}
              {deleteProfileAction.value?.failed && (
                <p class="mt-2 text-sm text-red-600">
                  {deleteProfileAction.value.message}
                </p>
              )}
            </ModalContent>
            <ModalFooter class="flex flex-col gap-4">
              <button
                disabled={deleteProfileAction.isRunning}
                onClick$={async () => {
                  await deleteProfileAction.submit({
                    userId: profile.value?.id,
                    hasActiveSubscription,
                  });
                }}
                class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
              >
                Delete Account <HiTrashOutline class="h-4 w-4 stroke-[2]" />
              </button>
              <button
                onClick$={() => {
                  showModal.value = false;
                  nav("/");
                }}
                class="flex w-full justify-center rounded-sm border border-transparent bg-gray-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
              >
                Cancel
              </button>
            </ModalFooter>
          </div>
        </Modal>
      </>
    );
  },
);
