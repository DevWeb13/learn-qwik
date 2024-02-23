import { component$ } from "@builder.io/qwik";
import styles from "./navbar.module.css";
import Popover from "../../lib/qwikUI/popover/popover";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={`${styles.navbar_links}`}>
      <div
        class={`${styles.stack_stack} stack}`}
        data-version="v1"
        style="--stack-flex:initial;--stack-direction:row;--stack-align:center;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:4px"
      >
        <a
          class={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          data-testid="navbar/vercel-logo"
          href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=learn"
          aria-label="Go to Vercel homepage"
          title="Go to Vercel homepage"
        >
          <svg
            aria-label="Vercel logomark"
            height="22"
            role="img"
            style="width:auto;overflow:visible"
            viewBox="0 0 74 64"
          >
            <path
              d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
              fill="var(--geist-foreground)"
            ></path>
          </svg>
        </a>
        <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
          <path
            d="M22 5L9 28"
            stroke="var(--accents-2)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <Link
          aria-label="Go to the homepage"
          class={`${styles.navbar_logo} ${styles.link}`}
          title="Go to the homepage"
          data-state="closed"
          style="-webkit-touch-callout:none"
          href="/"
        >
          <svg
            aria-label="Logo Qwik"
            fill="none"
            role="img"
            viewBox="0 0 167 53"
            xmlns="http://www.w3.org/2000/svg"
            height="28"
            width="90"
            class="qwik-logo"
          >
            <path
              d="M81.9545 46.5859H75.5513V35.4045C73.4363 36.8579 71.0496 37.5749 68.4884 37.5749C65.0151 37.5749 62.4344 36.6253 60.8239 34.6487C59.2134 32.6915 58.3984 29.2034 58.3984 24.2231C58.3984 19.1266 59.3492 15.5997 61.2702 13.5456C63.23 11.4721 66.3734 10.4644 70.7004 10.4644C74.7946 10.4644 78.5201 11.0264 81.9545 12.131V46.5859ZM75.5513 16.278C74.096 15.8323 72.4661 15.6191 70.7004 15.6191C68.5272 15.6191 66.9749 16.1811 66.1017 17.3244C65.2479 18.4871 64.7823 20.6962 64.7823 23.9712C64.7823 27.0524 65.1897 29.1065 66.0435 30.2304C66.8973 31.335 68.3719 31.897 70.5452 31.897C73.3781 31.897 75.5513 30.7343 75.5513 29.2809V16.278Z"
              fill="currentColor"
            ></path>
            <path
              d="M91.133 11.1426C93.4033 17.4406 95.3242 23.7386 96.993 30.0948C99.205 23.5836 101.087 17.2856 102.542 11.1426H108.15C110.265 17.4406 112.031 23.7386 113.447 30.0948C115.97 23.196 117.949 16.8787 119.404 11.1426H125.71C123.033 20.173 120.064 28.777 116.785 36.8966H109.256C108.402 32.3039 107.044 26.7617 105.22 20.1536C104.056 25.2889 102.445 30.8893 100.33 36.8966H92.8018C90.2793 27.5174 87.5434 18.9522 84.6328 11.1426H91.133Z"
              fill="currentColor"
            ></path>
            <path
              d="M132.832 7.55758C129.999 7.55758 129.203 6.85996 129.203 3.97257C129.203 1.39523 130.018 0.794495 132.832 0.794495C135.665 0.794495 136.46 1.39523 136.46 3.97257C136.46 6.85996 135.665 7.55758 132.832 7.55758ZM129.649 11.1426H136.053V36.8966H129.649V11.1426Z"
              fill="currentColor"
            ></path>
            <path
              d="M166.303 11.1426C161.763 17.5956 158.581 21.5295 156.815 22.9441C158.27 23.8937 162.17 28.8933 167.002 36.916H159.628C153.613 27.7887 150.742 23.8549 149.325 23.2542V36.916H142.922V0H149.325V23.2348C150.78 22.169 153.963 18.1382 158.872 11.1426H166.303Z"
              fill="currentColor"
            ></path>
            <path
              d="M40.973 52.5351L32.0861 43.6985L31.9503 43.7179V43.621L13.0511 24.9595L17.708 20.4637L14.9721 4.76715L1.99103 20.8513C-0.220992 23.0798 -0.628467 26.7036 0.962635 29.3778L9.07337 42.8265C10.3152 44.9 12.566 46.1402 14.9915 46.1208L19.0081 46.082L40.973 52.5351Z"
              fill="#18B6F6"
            ></path>
            <path
              d="M45.8232 20.5411L44.038 17.2468L43.1066 15.5609L42.738 14.902L42.6992 14.9408L37.8094 6.47238C36.587 4.34075 34.2974 3.02301 31.8137 3.04239L27.5255 3.15865L14.7384 3.19741C12.313 3.21679 10.101 4.49577 8.87853 6.56927L1.09766 21.9945L15.0101 4.72831L33.2496 24.7656L30.0091 28.0406L31.9495 43.7178L31.9689 43.679V43.7178H31.9301L31.9689 43.7565L33.4824 45.2293L40.8364 52.4187C41.1469 52.7094 41.6514 52.3606 41.4379 51.9924L36.8975 43.0589L44.8142 28.4282L45.0664 28.1375C45.1634 28.0212 45.2604 27.905 45.3381 27.7887C46.8904 25.6764 47.1038 22.8472 45.8232 20.5411Z"
              fill="#AC7EF4"
            ></path>
            <path
              d="M33.3076 24.6882L15.0099 4.74774L17.61 20.3668L12.9531 24.882L31.9105 43.6985L30.203 28.0794L33.3076 24.6882Z"
              fill="white"
            ></path>
          </svg>
        </Link>
      </div>
      <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/4">
        {/* <a class="" href="/showcase" >
          Showcase
        </a> */}
        <p class={styles.replaceLink}>Showcase</p>
      </Popover>
      <a
        class={styles.link}
        title="Documentation"
        href="https://qwik.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
        <svg
          aria-hidden="true"
          class={`${styles.navbar_externalArrow}`}
          height="7"
          viewBox="0 0 6 6"
          width="7"
        >
          <path
            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
            fill="var(--accents-3)"
          ></path>
        </svg>
      </a>
      <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/5">
        {/* <a class={styles.link} href="/blog">
        Blog
      </a> */}
        <p class={styles.replaceLink}>Blog</p>
      </Popover>

      <a
        class={styles.link}
        rel="canonical noreferrer"
        target="_blank"
        href="https://vercel.com/analytics?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=learn"
      >
        Analytics
        <svg
          aria-hidden="true"
          class={`${styles.navbar_externalArrow}`}
          height="7"
          viewBox="0 0 6 6"
          width="7"
        >
          <path
            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
            fill="var(--accents-3)"
          ></path>
        </svg>
      </a>
      <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/6">
        {/* <a class={styles.link} href="/templates">
        Templates
      </a> */}
        <p class={styles.replaceLink}>Templates</p>
      </Popover>
      <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/7">
        {/* <a class={styles.link} href="/enterprise">
        Enterprise
      </a> */}
        <p class={styles.replaceLink}>Enterprise</p>
      </Popover>
    </div>
  );
});
