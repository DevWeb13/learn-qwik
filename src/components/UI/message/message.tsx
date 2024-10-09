import { component$ } from "@builder.io/qwik";

interface Message {
  message: string | undefined;
  status: string;
}

type Props = {
  message: Message;
  classText?: string;
};

export const Message = component$(({ message, classText }: Props) => {
  return (
    <>
      {message.message && (
        <div
          class={
            classText +
            " fade-in w-full border px-4 py-2 text-sm transition-all duration-500 " +
            (message.status === "error" &&
              " border-red-600 bg-red-50 text-red-600 ") +
            (message.status === "warning" &&
              " border-yellow-600 bg-yellow-50 text-yellow-600 ") +
            (message.status === "notice" &&
              " border-sky-600 bg-sky-50 text-sky-600 ") +
            (message.status === "success" &&
              " border-green-600 bg-green-50 text-green-600 ")
          }
        >
          {message.message}
        </div>
      )}
    </>
  );
});
