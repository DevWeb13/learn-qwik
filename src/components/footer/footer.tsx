import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";
import { ExternalArrowIcon } from "~/components/icons/externalArrowIcon";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex justify-center p-4 text-sm text-[#666]">
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://www.lareponsedev.com/"
          target="_blank"
          class={`${styles.anchor} hover:text-[#000]`}
        >
          LaReponseDev
          <ExternalArrowIcon />
        </a>
      </p>
      <span class={styles.spacer}>|</span>
      <Link href="/privacy" class={`${styles.anchor} hover:text-[#000]`}>
        Privacy Policy
      </Link>
      <span class={styles.spacer}>|</span>
      <p>{serverTime.value.date}</p>
    </footer>
  );
});
