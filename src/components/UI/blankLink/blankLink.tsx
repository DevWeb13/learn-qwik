// src/components/UI/blankLink/blankLink.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface BlankLinkProps {
  href: string;
  text: string;
}

export default component$<BlankLinkProps>(({ href, text }) => {
  return (
    <Link href={href} rel="noopener" target="_blank">
      {text}
      <span class="inline-flex">
        <svg
          class="with-icon_icon__MHUeb"
          data-testid="geist-icon"
          fill="none"
          height="24"
          shape-rendering="geometricPrecision"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          width="24"
          style="color: currentcolor; width: 14px; height: 14px;"
        >
          <path d="M7 17L17 7"></path>
          <path d="M7 7h10v10"></path>
        </svg>
      </span>
    </Link>
  );
});
