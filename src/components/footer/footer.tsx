// src/components/footer/footer.tsx

import { component$ } from "@builder.io/qwik";
// import { useServerTimeLoader } from "~/routes/layout";
import { Link } from "@builder.io/qwik-city";
import { ExternalArrowIcon } from "~/components/icons/externalArrowIcon";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";
import styles from "./footer.module.css";

export default component$(() => {
  // const serverTime = useServerTimeLoader();
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <footer
      class={`flex flex-col items-center p-4 text-sm text-[#666] md:mb-0 ${isSubscribed ? "mb-12" : "mb-40"}`}
    >
      <div class="mt-4 flex flex-wrap items-center justify-center space-x-2">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://www.lareponsedev.fr/"
            target="_blank"
            class={`${styles.anchor} hover:text-[#000]`}
          >
            LaReponseDev
            <ExternalArrowIcon />
          </a>
        </p>
        <span class={styles.spacer}>|</span>
        <Link
          href="/privacy-policy/"
          class={`${styles.anchor} hover:text-[#000]`}
        >
          Privacy Policy
        </Link>
        <span class={styles.spacer}>|</span>
        <Link
          href="/terms-of-use/"
          class={`${styles.anchor} hover:text-[#000]`}
        >
          Terms of Use
        </Link>
      </div>
    </footer>
  );
});
