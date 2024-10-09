import { component$, Slot, useSignal } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
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
      <button
        onClick$={() => {
          showSig.value = true;
        }}
        class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
      >
        Logout <HiArrowRightOnRectangleOutline class="h-4 w-4 stroke-[2]" />
      </button>

      <Modal
        bind:show={showSig}
        class="bottom-sheet shadow-dark-medium bg-background text-foreground fixed  max-h-[80%]   max-w-[80%] rounded-md border-0 p-[28px] backdrop:backdrop-blur backdrop:backdrop-brightness-50 dark:backdrop:backdrop-brightness-100"
      >
        <div class="flex flex-col gap-4">
          <ModalHeader>
            <h2 class="text-2xl font-semibold">Logout</h2>
          </ModalHeader>
          <ModalContent>
            <p>Are you sure you want to logout?</p>
          </ModalContent>
          <ModalFooter class="flex flex-col gap-4">
            <button
              disabled={signoutAction.isRunning}
              onClick$={() => {
                signoutAction.submit();
              }}
              class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
              Logout{" "}
              <HiArrowRightOnRectangleOutline class="h-4 w-4 stroke-[2]" />
            </button>
            <button
              onClick$={() => {
                showSig.value = false;
                nav("/");
              }}
              class="flex w-full justify-center rounded-sm border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
              Cancel
            </button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
});
