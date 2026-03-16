import { component$ } from "@builder.io/qwik";

interface Message {
  message: string | undefined;
  status: string;
}

type Props = {
  message: Message;
  classText?: string;
};

export const Message = component$(({ message, classText = "" }: Props) => {
  return (
    <>
      {message.message && (
        <div
          class={
            classText +
            " fade-in w-full rounded-xl border px-4 py-3 text-sm leading-6 shadow-sm transition-all duration-500 " +
            (message.status === "error" &&
              " border-red-200 bg-red-50 text-red-700 ") +
            (message.status === "warning" &&
              " border-yellow-200 bg-yellow-50 text-yellow-700 ") +
            (message.status === "notice" &&
              " border-sky-200 bg-sky-50 text-sky-700 ") +
            (message.status === "success" &&
              " border-green-200 bg-green-50 text-green-700 ")
          }
        >
          {message.message}
        </div>
      )}
    </>
  );
});
