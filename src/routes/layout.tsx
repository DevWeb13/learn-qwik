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
  useVisibleTask$,
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

  const container = useSignal<HTMLElement>();

  const firstScroll = useSignal(true);

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
    "DOMContentLoaded",
    $(() => {
      console.log("DOMContentLoaded");

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

  useOnDocument(
    "scroll",
    $(() => {
      if (!firstScroll.value) {
        return;
      }
      console.log("scroll");
      // Add Adsense script
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091224773462896";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Add Funding Choices script
      const script2 = document.createElement("script");
      script2.src =
        "https://fundingchoicesmessages.google.com/i/pub-2091224773462896?ers=1";
      script2.async = true;
      script2.defer = true;
      document.head.appendChild(script2);

      firstScroll.value = false;
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

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => location.isNavigating);

    console.log("location.isNavigating", location.isNavigating);

    // Wait for the navigation to finish before reinitializing adsense
    if (location.isNavigating) return;

    // reinit adsense for spa navigation
    console.log("reinit adsense");
    const adsbygoogles = container.value?.querySelectorAll(".adsbygoogle");
    adsbygoogles?.forEach((adsbygoogle) => {
      adsbygoogle.setAttribute("data-adsbygoogle-status", ""); // Réinitialiser l'attribut de statut
      adsbygoogle.setAttribute("data-ad-status", ""); // Réinitialiser l'attribut de statut
      adsbygoogle.innerHTML = ""; // Supprimer le contenu de l'élément
      // @ts-ignore
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore
        window.adsbygoogle = window.adsbygoogle || [];
        // @ts-ignore
        window.adsbygoogle.push({});
      }
    });
  });

  return (
    <div class="overflow-hidden" ref={container}>
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
          </div>
          <Footer />
        </>
      )}
    </div>
  );
});
