// src/components/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import Feedback from "../../UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";

export default component$(() => {
  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <PageTitle chapterNumber={3} chapterTitle="Optimizing Fonts and Images" />
      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={3}
          text="
          You've learned how to optimize fonts and images using Qwik."
        />
        <GoToNextChapterBlock
          goToChapter={4}
          title="Creating Layouts and Pages"
          text="Let's create your dashboard routes using nested layouts and pages!"
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
