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
import { isBrowser } from "@builder.io/qwik/build";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import type { CompletedChaptersType } from "~/types/completedChapters";

import { CHAPTERS } from "~/constants/chapters";
import type { ChapterType } from "~/types/chapterType";

import { getCookie, initCookie, setCookie } from "~/utils/cookieManagement";
import { Loader } from "~/components/UI/loader/loader";
import PreFooter from "~/components/UI/PreFooter/PreFooter";

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

// export const useGetCompletedChaptersCookie = routeLoader$(({ cookie }) => {
//   return cookie.get("completedChapters")?.json<CompletedChaptersType>();
// });

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toLocaleDateString(),
  };
});

export default component$(() => {
  if (isBrowser) {
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
    console.log("location.url.pathname", location.url.pathname);
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
      // console.log("completedChaptersCookie", completedChaptersCookie);

      if (!completedChaptersCookie) {
        return initCookie("completedChapters", 365);
      }

      if (completedChaptersCookie.length === 0) {
        return chapters.value.forEach((chapter) => {
          chapter.isCompleted = false;
        });
      }

      if (completedChaptersCookie.length > 0) {
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
      if (chapter.isCompleted) {
        setCookie("completedChapters", chapter.id, 365);
      }
    });
  });

  return (
    <div class="overflow-hidden">
      <Header />
      {location.isNavigating ? <Loader /> : <Slot />}

      {location.isNavigating ? (
        <div class="absolute bottom-0 flex w-full items-center justify-center">
          <Footer />
        </div>
      ) : (
        <>
          <PreFooter />
          <div class="px-4 pb-8 md:px-8 md:pb-20">
            <ins
              class="adsbygoogle"
              style="display:flex; text-align:center; justify-content:center;"
              data-ad-format="autorelaxed"
              data-ad-client="ca-pub-2091224773462896"
              data-ad-slot="2125459059"
            ></ins>
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={`
  (adsbygoogle = window.adsbygoogle || []).push({});
`}
            />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
});
