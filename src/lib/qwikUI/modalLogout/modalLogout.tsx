import { component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@qwik-ui/headless";
import { HiArrowRightOnRectangleOutline } from "@qwikest/icons/heroicons";
import { useSignoutAction } from "~/routes/auth/logout";

export const ModalLogout = component$(() => {
  const showSig = useSignal(false);
  const nav = useNavigate();
  const signoutAction = useSignoutAction();

  return (
    <>
      <div class="flex flex-col gap-4">
        <button
          onClick$={() => {
            showSig.value = true;
          }}
          class="flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          <HiArrowRightOnRectangleOutline class="h-5 w-5 stroke-[2]" /> Logout
        </button>
        <button
          onClick$={() => {
            nav("/");
          }}
          class="flex w-full items-center justify-center gap-2 rounded-md bg-gray-500 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Cancel
        </button>
      </div>

      <Modal
        bind:show={showSig}
        class="bottom-sheet fixed max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-xl backdrop:backdrop-blur-md dark:border-gray-700 dark:bg-gray-900"
      >
        <div class="flex flex-col gap-4">
          <ModalHeader>
            <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
              Confirm Logout
            </h2>
          </ModalHeader>

          <ModalContent>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Are you sure you want to log out from Learn Qwik?
            </p>
            {signoutAction.value?.failed && (
              <p class="mt-2 text-sm text-red-600">
                {signoutAction.value.message}
              </p>
            )}
          </ModalContent>

          <ModalFooter class="flex flex-col gap-4">
            <button
              disabled={signoutAction.isRunning}
              onClick$={() => {
                signoutAction.submit();
              }}
              class="flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:bg-gray-400"
            >
              <HiArrowRightOnRectangleOutline class="h-5 w-5 stroke-[2]" />{" "}
              Logout
            </button>

            <button
              onClick$={() => {
                showSig.value = false;
                nav("/");
              }}
              class="flex w-full items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
            >
              Cancel
            </button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
});
