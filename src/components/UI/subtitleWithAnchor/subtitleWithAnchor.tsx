// src/components/UI/subtitleWithAnchor/subtitleWithAnchor.tsx

import { component$, createElement } from "@builder.io/qwik";
import { AnchorIcon } from "~/components/icons/anchorIcon";

interface SubtitleWithAnchorProps {
  title: string;
  id: string;
  level?: "h2" | "h3" | "h4" | "h5" | "h6";
}

export default component$<SubtitleWithAnchorProps>(
  ({ title, id, level = "h2" }) => {
    return createElement(
      level,
      { id, "data-docs-heading": "" },
      createElement(
        "a",
        { href: `#${id}` },
        title,
        createElement("span", {}, <AnchorIcon />),
      ),
    );
  },
);
