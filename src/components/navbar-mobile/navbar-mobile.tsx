import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogoWithText } from "~/assets/svg/qwikLogo/qwikLogoWithText";
import { VercelSvg } from "~/assets/svg/vercelSvg";
import { MobileMenuVisibleContext } from "~/routes/layout";
import Popover from "../../lib/qwikUI/popover/popover";
import styles from "./navbar-mobile.module.css";

export default component$(() => {
  const mobileMenuVisible = useContext(MobileMenuVisibleContext);

  return (
    <div class={`${styles.navbar_mobileTop}`}>
      <div
        class={`${styles.stack_stack} stack`}
        data-version="v1"
        style="--stack-flex:initial;--stack-direction:row;--stack-align:center;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:4px"
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          data-testid="navbar/vercel-logo"
          href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=learn"
          aria-label="Go to Vercel homepage"
          title="Go to Vercel homepage"
        >
          <VercelSvg />
        </a>
        <svg height="32" viewBox="0 0 32 32" width="32">
          <path
            d="M22 5L9 28"
            stroke="var(--accents-2)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        <Link
          class={`${styles.navbar_mobileLogo} `}
          title="Go to the homepage"
          href="/"
        >
          <QwikLogoWithText width={"80"} height={"26"} />
        </Link>
      </div>
      <div class={`${styles.navbar_mobileTopRight}`}>
        <button
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
        <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/3">
          {/* When funtionnality is added, put the button back */}
          <div
            aria-label="Search documentation"
            class={`${styles.navbar_search}`}
            data-variant="small"
            // type="button"
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
          </div>
        </Popover>

        <button
          aria-label="open menu"
          class={`${styles.navbar_menuButton} ${mobileMenuVisible.value ? styles.open : ""}`}
          type="button"
          onClick$={() => (mobileMenuVisible.value = !mobileMenuVisible.value)}
        >
          <div class={`${styles.menu_toggle_wrap}`}></div>
        </button>
      </div>
    </div>
  );
});
