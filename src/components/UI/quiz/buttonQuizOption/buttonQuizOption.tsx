import { component$ } from "@builder.io/qwik";

interface ButtonQuizOptionProps {
  letter: string;
  text: string;
  store: { userResponse: string; displayChooseOption: boolean };
  active: boolean;
}

export const ButtonQuizOption = component$<ButtonQuizOptionProps>(
  ({ letter, text, store, active }) => {
    return (
      <button
        class="border-gray-alpha-400 hover:bg-vercel-100 flex w-full items-center gap-3 border-b p-3 text-left text-sm text-gray-900 transition-colors first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-none md:p-4 md:text-base"
        type="button"
        onClick$={() => {
          store.displayChooseOption = false;
          store.userResponse = letter; // Modifier la valeur du signal
        }}
      >
        <div
          aria-hidden="true"
          class={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-center  font-medium  transition-colors ${active ? "bg-blue-900 text-blue-100" : "bg-blue-300 text-blue-900"}`}
        >
          {letter}
        </div>
        {text}
      </button>
    );
  },
);
