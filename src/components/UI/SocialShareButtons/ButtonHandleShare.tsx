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
      <div class="hidden justify-center rounded-br-md  bg-[#CCCCCC]  group-hover/1:right-0 md:relative md:right-12 md:flex">
        {buttonHandleShareStore.isOpen ? (
          <div class="st-left">
            <img
              alt="arrow_left sharing button"
              src="https://platform-cdn.sharethis.com/img/arrow_left.svg"
              width={24}
              height={24}
            />
          </div>
        ) : (
          <div class="st-right">
            <img
              alt="arrow_right sharing button"
              src="https://platform-cdn.sharethis.com/img/arrow_right.svg"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
    );
  },
);
