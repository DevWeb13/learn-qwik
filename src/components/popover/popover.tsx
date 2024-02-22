import { Slot, component$, useStyles$ } from "@builder.io/qwik";
import { Popover, PopoverTrigger } from "@qwik-ui/headless";

interface PopoverProps {
  popoverText?: string;
  issueLink?: string;
}

export default component$<PopoverProps>(
  ({
    popoverText = "Any help is valuable, to contribute to the project: ",
    issueLink = "",
  }) => {
    useStyles$(`
  .my-transition {
    transition: opacity 0.5s, display 0.5s, overlay 0.5s;
    transition-behavior: allow-discrete;
    opacity: 0;
  }

  .popover-showing {
    opacity: 1;
  }

  .popover-closing {
    opacity: 0;
  }
  `);

    return (
      <>
        <PopoverTrigger popovertarget={`hero-id ${issueLink}`}>
          <Slot />
        </PopoverTrigger>
        <Popover
          id={`hero-id ${issueLink}`}
          class="shadow-dark-medium my-transition bg-var(--ds-gray-1000) rounded-md border-2 border-slate-300 px-3 py-1 opacity-0"
        >
          {popoverText}
          {issueLink && (
            <>
              <br />{" "}
              <a
                href={issueLink}
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                {issueLink}
              </a>
            </>
          )}
        </Popover>
      </>
    );
  },
);
