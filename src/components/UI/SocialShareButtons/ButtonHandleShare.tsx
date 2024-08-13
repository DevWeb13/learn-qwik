// src/components/UI/SocialShareButtons/ButtonHandleShare.tsx

import { component$ } from "@builder.io/qwik";

interface ButtonHandleShareProps {
  buttonHandleShareStore: {
    isOpen: boolean;
  };
}

export const ButtonHandleShare = component$<ButtonHandleShareProps>(
  ({ buttonHandleShareStore }) => {
    return (
      <button
        class="hidden justify-center  rounded-br-md bg-[#CCCCCC] transition-all duration-300 ease-in-out group-hover/1:right-0 md:relative md:right-12 md:flex md:w-12"
        onClick$={() => {
          buttonHandleShareStore.isOpen = !buttonHandleShareStore.isOpen;
        }}
      >
        {buttonHandleShareStore.isOpen ? (
          <div class="st-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              preserveAspectRatio="xMidYMid meet"
              height="24px"
              width="24px"
              viewBox="0 0 40 40"
            >
              <g>
                <path d="m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z" />
              </g>
            </svg>
          </div>
        ) : (
          <div class="st-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              preserveAspectRatio="xMidYMid meet"
              height="24px"
              width="24px"
              viewBox="0 0 40 40"
            >
              <g>
                <path d="m22.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-10.4 10.4q-0.2 0.3-0.5 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.2-0.2 0.5-0.2t0.5 0.2l10.4 10.4q0.3 0.2 0.3 0.5z" />
              </g>
            </svg>
          </div>
        )}
      </button>
    );
  },
);
