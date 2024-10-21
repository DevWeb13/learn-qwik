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
import { routeAction$, routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import type { CompletedChaptersType } from "../types/completedChapters";

import { CHAPTERS } from "~/constants/chapters";
import type { ChapterType } from "../types/chapterType";

import { getCookie, initCookie, setCookie } from "~/utils/cookieManagement";

import PreFooter from "~/components/UI/PreFooter/PreFooter";
import { updateSession } from "~/lib/supabase/middleware";
import { type User } from "@supabase/supabase-js";
import { createClient } from "~/lib/supabase/server";
import MobileMenu from "~/components/mobile-menu/mobile-menu";

export const MobileMenuVisibleContext = createContextId<Signal<boolean>>(
  "docs.mobile-menu-visible-context",
);

export const ChaptersContext = createContextId<Signal<ChapterType[]>>(
  "docs.chapters-context",
);

export const CompletedChaptersContext = createContextId<
  Signal<CompletedChaptersType>
>("docs.completed-chapters-context");

export const onRequest: RequestHandler = async (request) => {
  request.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  request.cacheControl(
    {
      public: false,
      maxAge: 0,
      sMaxAge: 0,
      staleWhileRevalidate: 0,
    },
    "Vercel-CDN-Cache-Control",
  );
  await updateSession(request);
};

export const useUser = routeLoader$<User | null>(async (request) => {
  request.cacheControl({
    public: false,
    maxAge: 0,
    sMaxAge: 0,
    staleWhileRevalidate: 0,
  });

  request.cacheControl(
    {
      public: false,
      maxAge: 0,
      sMaxAge: 0,
      staleWhileRevalidate: 0,
    },
    "Vercel-CDN-Cache-Control",
  );
  const user = request.sharedMap.get("user");
  return user;
});

export const useGetTotalShare = routeLoader$(async (request) => {
  request.cacheControl({
    public: true,
    maxAge: 5,
    sMaxAge: 10,
    staleWhileRevalidate: 60 * 60 * 24 * 365,
  });

  request.cacheControl(
    {
      public: true,
      maxAge: 5,
      sMaxAge: 10,
      staleWhileRevalidate: 60 * 60 * 24 * 365,
    },
    "Vercel-CDN-Cache-Control",
  );
  const supabase = createClient(request);

  // Query the "shares" table to get total_share
  const { data, error } = await supabase
    .from("shares")
    .select("*")
    .limit(1)
    .single();
  // console.log("data", data);

  if (error) {
    throw new Error(
      "Failed to fetch total share: " + (error.message || "No data returned"),
    );
  }

  // Return the total_share from the first row
  const totalShare: number = data.total_share;
  return totalShare;
});

export const useIncrementTotalShare = routeAction$(async (data, request) => {
  const supabase = createClient(request);

  // Use Supabase's RPC to increment the total share
  const { error } = await supabase.rpc("increment_total_share");

  if (error) {
    throw new Error("Failed to increment total share: " + error.message);
  }
});

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toLocaleDateString(),
  };
});

// Check if the environment is production
const isProd = process.env.NODE_ENV === "production";

export default component$(() => {
  if (!isProd) {
    if (isBrowser) {
      console.log("Exécution côté client");
    } else {
      console.log("Exécution côté serveur");
    }
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
      // console.log("DOMContentLoaded");

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

      // Add Adsense script
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091224773462896";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      // Add FundingChoices script
      const script2 = document.createElement("script");
      script2.src =
        "https://fundingchoicesmessages.google.com/i/pub-2091224773462896?ers=1";
      script2.async = true;
      script2.defer = true;
      document.head.appendChild(script2);

      setTimeout(() => {
        firstScroll.value = false;
      }, 500);
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
    track(() => firstScroll.value);

    // Wait for the navigation to finish before reinitializing adsense
    if (location.isNavigating) return;

    if (firstScroll.value) return;

    // reinit adsense for spa navigation
    // console.log("reinit adsense");
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
    <div class={`${location.isNavigating ? "cursor-wait" : ""}`}>
      <div
        class={`flex min-h-screen flex-col overflow-hidden ${location.isNavigating ? "pointer-events-none" : ""}`}
        ref={container}
      >
        <Header />
        <MobileMenu />
        <Slot />

        {location.isNavigating ||
        location.url.pathname.startsWith("/auth") ||
        location.url.pathname.startsWith("/account") ? (
          <div class="flex w-full items-center justify-center">
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
    </div>
  );
});
