// src/components/UI/btAddChapter/btAddChapter.tsx

import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useSetProgressCircleCookie } from "~/routes/learn/dashboard-app/layout";

interface BtAddChapterProps {
  goToChapter: number;
  title: string;
}

export default component$<BtAddChapterProps>(({ goToChapter, title }) => {
  const action = useSetProgressCircleCookie();

  const nextUri = title.toLowerCase().replace(/\s+/g, "-");

  // console.log({ nextUri });

  return (
    <div class="w-full md:w-fit">
      <Form action={action}>
        <input type="hidden" name="goToChapter" value={goToChapter} />
        <input type="hidden" name="nextUri" value={nextUri} />
        <button
          type="submit"
          aria-label={"Start Chapter" + " " + goToChapter}
          class="button_base reset_reset button_button  button_large button_invert"
          data-geist-button=""
          data-prefix="false"
          data-suffix="true"
          data-version="v1"
          style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
        >
          <span class="button_content">Start Chapter {goToChapter}</span>
          <span class="button_suffix">
            <svg
              data-testid="geist-icon"
              height="16"
              stroke-linejoin="round"
              viewBox="0 0 16 16"
              width="16"
              style="color: currentcolor;"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </Form>
    </div>
  );
});
