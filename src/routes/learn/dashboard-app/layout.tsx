// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";

import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import { createClient } from "~/lib/supabase/server";

export const useGetCurrentChapterIndexInString = routeLoader$(
  (requestEvent) => {
    const pathname = requestEvent.url.pathname;
    if (pathname.includes("getting-started")) return "0";
    if (pathname.includes("css-styling")) return "1";
    if (pathname.includes("optimizing-fonts-and-images")) return "2";
    if (pathname.includes("creating-layouts-and-pages")) return "3";
    if (pathname.includes("navigating-between-pages")) return "4";
    if (pathname.includes("setting-up-your-database")) return "5";
    if (pathname.includes("fetching-data")) return "6";
    if (pathname.includes("optimizing-data-fetching")) return "7";
    if (pathname.includes("streaming")) return "8";
    if (pathname.includes("adding-search-and-pagination")) return "9";
    if (pathname.includes("mutating-data")) return "10";
    return "Introduction";
  },
);

export const usePutCompletedChapters = routeAction$(
  async (data, requestEvent) => {
    const { completedChapter } = data;

    const profile = requestEvent.sharedMap.get("profile");
    const userId = profile?.id;
    const completedChapters = profile?.completedChapters || [];

    if (!userId) {
      return requestEvent.fail(400, { error: "Missing parameters" });
    }

    // ✅ Vérification locale avant d'aller sur Supabase
    if (completedChapters.includes(completedChapter)) {
      console.log(
        "✅ Chapitre déjà complété, aucune requête Supabase nécessaire.",
      );
      return { success: true };
    }

    const supabase = createClient(requestEvent);

    // ✅ Ajout sécurisé du chapitre et suppression des doublons
    const updatedChapters = [
      ...new Set([...completedChapters, Number(completedChapter)]),
    ];

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ completedChapters: updatedChapters })
      .eq("id", userId);

    if (updateError) {
      return requestEvent.fail(500, { error: "Failed to update" });
    }

    // ✅ Met à jour le profil en mémoire pour éviter des requêtes inutiles après
    requestEvent.sharedMap.set("profile", {
      ...profile,
      completedChapters: updatedChapters,
    });

    return { success: true };
  },
);

export default component$(() => {
  return (
    <>
      <main>
        <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <HeaderOfMain />
          <article
            class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
            style="min-height: calc(100vh - 103px);"
          >
            <Slot />
          </article>
        </div>
      </main>
    </>
  );
});
