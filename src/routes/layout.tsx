// src/routes/layout.tsx

import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useOnDocument,
  useSignal,
  useTask$,
  $,
} from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Footer from "../components/starter/footer/footer";
import type { CompletedChaptersType } from "~/types/completedChapters";

import { CHAPTERS } from "~/constants/chapters";
import type { ChapterType } from "~/types/chapterType";

import { getCookie, initCookie, setCookie } from "~/utils/cookieManagement";

export const MobileMenuVisibleContext = createContextId<Signal<boolean>>(
  "docs.mobile-menu-visible-context",
);

export const ChaptersContext = createContextId<Signal<ChapterType[]>>(
  "docs.chapters-context",
);

export const CompletedChaptersContext = createContextId<
  Signal<CompletedChaptersType>
>("docs.completed-chapters-context");

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });

  cacheControl(
    {
      maxAge: 5,
      staleWhileRevalidate: 60 * 60 * 24 * 365,
    },
    "Vercel-CDN-Cache-Control",
  );

  // await next();

  // let completedChaptersCookie = cookie
  //   .get("completedChapters")
  //   ?.json<CompletedChaptersType>();
  // if (!completedChaptersCookie) {
  //   completedChaptersCookie = [];
  //   cookie.set("completedChapters", completedChaptersCookie, { path: "/" });
  //   console.log("Completed chapters cookie set");
  // }
};

// export const useSetCompletedChaptersCookie = routeAction$(
//   (data, requestEvent) => {
//     // console.log(requestEvent);
//     const completedChapter = Number(data.goToChapter) - 1;

//     let completedChapters = requestEvent.cookie
//       .get("completedChapters")
//       ?.json<CompletedChaptersType>();

//     if (!completedChapters) {
//       completedChapters = [];
//     }

//     if (!completedChapters.includes(completedChapter)) {
//       completedChapters.push(completedChapter);
//       requestEvent.cookie.set("completedChapters", completedChapters, {
//         path: "/",
//       });
//     }
//   },
// );

export const useGetCompletedChaptersCookie =
  routeLoader$<CompletedChaptersType>(({ cookie }) => {
    return cookie.get("completedChapters")?.json<CompletedChaptersType>() || [];
  });

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const isClient = typeof window !== "undefined";

  if (isClient) {
    console.log("Exécution côté client");
  } else {
    console.log("Exécution côté serveur");
  }

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

  useOnDocument(
    "load",
    $(() => {
      const completedChaptersCookie: number[] | undefined =
        getCookie("completedChapters");
      console.log("completedChaptersCookie", completedChaptersCookie);

      if (!completedChaptersCookie) {
        return initCookie("completedChapters", 365);
      }

      if (completedChaptersCookie.length === 0) {
        return chapters.value.forEach((chapter) => {
          chapter.isCompleted = false;
        });
      }

      if (completedChaptersCookie.length > 0) {
        console.log("completedChaptersCookieTTT", completedChaptersCookie);
        const newChapters = [...chapters.value];

        completedChaptersCookie.forEach((chapter) => {
          newChapters[chapter - 1].isCompleted = true;
        });
        chapters.value = newChapters;
      }
    }),
  );

  useTask$(({ track }) => {
    track(() => chapters.value);

    chapters.value.forEach((chapter) => {
      console.log("Chapitre", chapter.id, chapter.isCompleted);
      if (chapter.isCompleted) {
        setCookie("completedChapters", chapter.id, 365);
      }
    });
  });

  // const completedChaptersCookie = getCookie("completedChapters");
  // console.log("completedChaptersCookie", completedChaptersCookie);

  // useOnDocument(
  //   "load",
  //   $(() => {
  //     if (!completedChaptersCookie) {
  //       setCookie("completedChapters", JSON.stringify([]), 365);
  //     }
  //   }),
  // );

  // const completedChapters = useSignal<CompletedChaptersType>([]);
  // useContextProvider(CompletedChaptersContext, completedChapters);

  // const completedChapters = useGetCompletedChapters();

  // useTask$(({ track }) => {
  //   track(() => completedChapters.value);

  //   // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  //   if (!completedChapters.value) return;

  //   console.log("completedChapters", completedChapters.value);

  //   if (completedChapters.value.length === 0) {
  //     chapters.value.forEach((chapter) => {
  //       chapter.isCompleted = false;
  //     });
  //   }

  //   if (completedChapters.value.length > 0) {
  //     completedChapters.value.forEach((chapter) => {
  //       chapters.value[chapter - 1].isCompleted = true;
  //     });
  //   }
  // });

  // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(() => {
  //   const cookieValue = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("completedChapters="))
  //     ?.split("=")[1];

  //   if (cookieValue) {
  //     const parsedValue: CompletedChaptersType = JSON.parse(
  //       decodeURIComponent(cookieValue),
  //     );
  //     completedChapters.value = parsedValue;
  //   }
  // });

  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
