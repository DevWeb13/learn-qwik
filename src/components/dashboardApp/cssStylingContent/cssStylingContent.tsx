// src/components/dashboardApp/cssStylingContent/cssStylingContent.tsx

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
      <PageTitle chapterNumber={2} chapterTitle="CSS Styling" />
      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={2}
          text="Well done! You've learned about the different ways of styling a Next.js application."
        />
        <GoToNextChapterBlock
          goToChapter={3}
          title="Optimizing Fonts and Images"
          text="Continue working on your home page by adding a hero image and a custom font."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});
