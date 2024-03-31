// src/components/UI/subtitleWithAnchor/subtitleWithAnchor.tsx

import { component$, createElement } from "@builder.io/qwik";

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
        createElement(
          "span",
          {},
          createElement(
            "svg",
            { viewBox: "0 0 16 16", height: "0.7em", width: "0.7em" },
            createElement(
              "g",
              { "stroke-width": "1.2", fill: "none", stroke: "currentColor" },
              createElement("path", {
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-miterlimit": "10",
                d: "M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698",
              }),
              createElement("path", {
                fill: "none",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-miterlimit": "10",
                d: "M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698",
              }),
            ),
          ),
        ),
      ),
    );
  },
);
