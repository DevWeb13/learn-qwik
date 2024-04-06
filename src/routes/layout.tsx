// src/routes/layout.tsx

import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { routeAction$, routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Footer from "../components/starter/footer/footer";
import type { CompletedChaptersType } from "~/types/completedChapters";

import { CHAPTERS } from "~/constants/chapters";
import type { ChapterType } from "~/types/chapterType";

export const MobileMenuVisibleContext = createContextId<Signal<boolean>>(
  "docs.mobile-menu-visible-context",
);

export const ChaptersContext = createContextId<Signal<ChapterType[]>>(
  "docs.chapters-context",
);

export const onGet: RequestHandler = async ({ cacheControl, cookie, next }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });

  await next();

  let completedChaptersCookie = cookie
    .get("completedChapters")
    ?.json<CompletedChaptersType>();
  if (!completedChaptersCookie) {
    completedChaptersCookie = [];
    cookie.set("completedChapters", completedChaptersCookie, { path: "/" });
    console.log("Completed chapters cookie set");
  }
};

export const useSetCompletedChaptersCookie = routeAction$(
  async (data, requestEvent) => {
    // console.log(requestEvent);
    const completedChapter = Number(data.goToChapter) - 1;

    let completedChapters = await requestEvent.cookie
      .get("completedChapters")
      ?.json<CompletedChaptersType>();

    if (!completedChapters) {
      completedChapters = [];
    }

    if (!completedChapters.includes(completedChapter)) {
      completedChapters.push(completedChapter);
      requestEvent.cookie.set("completedChapters", completedChapters, {
        path: "/",
      });
    }
  },
);

export const useGetCompletedChaptersCookie = routeLoader$(({ cookie }) => {
  return cookie.get("completedChapters")?.json<CompletedChaptersType>();
});

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const location = useLocation();

  const mobileMenuVisible = useSignal(false);
  useContextProvider(MobileMenuVisibleContext, mobileMenuVisible);
  // Utiliser useTask$ pour réagir aux changements d'URL
  useTask$(({ track }) => {
    track(() => location.url.pathname);
    // Réinitialiser le menu mobile à chaque changement de page
    mobileMenuVisible.value = false;
  });

  const chapters = useSignal<ChapterType[]>(CHAPTERS);
  useContextProvider(ChaptersContext, chapters);

  const completedChaptersCookie = useGetCompletedChaptersCookie();
  const completedChapters = useSignal<CompletedChaptersType>(
    completedChaptersCookie.value ?? [],
  );

  useTask$(({ track }) => {
    track(() => chapters);

    if (completedChapters.value.length === 0) {
      chapters.value.forEach((chapter) => {
        chapter.isCompleted = false;
      });
    }
    if (completedChapters.value.length > 0) {
      completedChapters.value.forEach((chapter) => {
        chapters.value[chapter - 1].isCompleted = true;
      });
    }
  });
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
