import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { useLocation } from "@builder.io/qwik-city";

import NavbarMobile from "../navbar-mobile/navbar-mobile";
import Navbar from "../navbar/navbar";
import Popover from "../../lib/qwikUI/popover/popover";

export default component$(() => {
  const loc = useLocation();
  console.log("loc", loc);
  return (
    <header
      class={
        styles.header_header +
        " " +
        (loc.url.pathname === "/learn/" ? styles.header_sticky : "")
      }
    >
      <a
        class={`${styles.skip_nav_link_skipLink}`}
        href="#geist-skip-nav"
        tabIndex={0}
      >
        Skip to content
      </a>
      <nav class={`${styles.navbar_nav}`}>
        <NavbarMobile />
        <Navbar />
        <div class={`${styles.navbar_headerButtons}`}>
          <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/8">
            {/* When funtionnality is added, put the button back */}
            {/* <button
              class={`${styles.navbar_search}`}
              data-variant="large"
              type="button"
            >
              Search documentation...
              <kbd class={`${styles.navbar_kbd}`}>CtrlK</kbd>
            </button>
            <button
              class={`${styles.navbar_search}`}
              data-variant="medium"
              type="button"
            >
              Search...<kbd>⌘K</kbd>
            </button>
            <button
              aria-label="Search documentation"
              class={`${styles.navbar_search}`}
              data-variant="small"
              type="button"
            >
              <svg
                class={`${styles.with_icon}`}
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
                style="color:currentColor"
              >
                <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                <path d="M16 16l4.5 4.5"></path>
              </svg>
            </button> */}
            <p class={`${styles.navbar_search}`} data-variant="large">
              Search documentation...
              <kbd class={`${styles.navbar_kbd}`}>CtrlK</kbd>
            </p>
            <p class={`${styles.navbar_search}`} data-variant="medium">
              Search...<kbd>⌘K</kbd>
            </p>
            <p
              aria-label="Search documentation"
              class={`${styles.navbar_search}`}
              data-variant="small"
            >
              <svg
                class={`${styles.with_icon}`}
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
                style="color:currentColor"
              >
                <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                <path d="M16 16l4.5 4.5"></path>
              </svg>
            </p>
          </Popover>
          <a
            tabIndex={0}
            href="https://vercel.com/new/clone?demo-description=A%20basic%20Qwik%20app%20with%20Tailwind%2C%20Vercel%20edge%20adapter%2C%20and%20pnpm%20using%20the%20default%20template.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3qUUqmfxL9Pj1RSY64p1Qz%2Ffb2d18358bd4518837d4efb178a26a42%2FCleanShot_2023-01-17_at_10.01.53.png&demo-title=Qwik%20Starter%20Kit&demo-url=https%3A%2F%2Fqwik-tw-vercel-starter-kit.vercel.app%2F&from=templates&project-name=Qwik%20Starter%20Kit&repository-name=qwik-starter-kit&repository-url=https%3A%2F%2Fgithub.com%2FBuilderIO%2Fqwik-tw-vercel-starter-kit&skippable-integrations=1"
            type="submit"
            class={`button_base button_button reset_reset navbar_deploy button_secondary button_small button_invert`}
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size:16px"
          >
            <span class={`button_prefix`}>
              <svg
                aria-label="Vercel logomark"
                height="13"
                style="width:auto;overflow:visible"
                viewBox="0 0 74 64"
              >
                <path
                  d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                  fill="var(--geist-foreground)"
                ></path>
              </svg>
            </span>
            <span class={`button_content`}>Deploy</span>
          </a>
          <a
            tabIndex={0}
            href="/"
            type="submit"
            class={`button_base reset_reset button_button button_small button_invert`}
            data-geist-button=""
            data-prefix="false"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size:16px"
          >
            <span class={`button_content`}>Home</span>
          </a>
        </div>
      </nav>
    </header>
  );
});
