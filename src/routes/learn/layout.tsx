// src/routes/learn/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, routeLoader$, z, zod$ } from "@builder.io/qwik-city";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";
import { createClient } from "~/lib/supabase/server";
import type { Database } from "~/types/database.types";

function getChapterContextFromPathname(pathname: string): {
  courseVersion: "Legacy" | "2026" | null;
  chapterNumber: number | null;
} {
  if (pathname.startsWith("/learn/dashboard-app-2026/")) {
    const courseVersion = "2026" as const;
    const basePath = "/learn/dashboard-app-2026/";

    const currentChapter =
      pathname === basePath
        ? CHAPTERS2026.find((chapter) => chapter.uri === "")
        : CHAPTERS2026.find(
            (chapter) => `${basePath}${chapter.uri}/` === pathname,
          );

    return {
      courseVersion,
      chapterNumber: currentChapter?.id ?? null,
    };
  }

  if (pathname.startsWith("/learn/dashboard-app/")) {
    const courseVersion = "Legacy" as const;
    const basePath = "/learn/dashboard-app/";

    const currentChapter =
      pathname === basePath
        ? CHAPTERS.find((chapter) => chapter.uri === "")
        : CHAPTERS.find((chapter) => `${basePath}${chapter.uri}/` === pathname);

    return {
      courseVersion,
      chapterNumber: currentChapter?.id ?? null,
    };
  }

  return {
    courseVersion: null,
    chapterNumber: null,
  };
}

export const usePutCompletedChapters = routeAction$(
  async (data, requestEvent) => {
    const { completedChapter, version } = data;

    const profile = requestEvent.sharedMap.get("profile");
    const userId = profile?.id;

    if (!userId || !profile) {
      return requestEvent.fail(400, { error: "Missing parameters" });
    }

    const supabase = createClient(requestEvent);

    // 🔥 On choisit dynamiquement la bonne clé
    const columnName =
      version === "2026" ? "completedChapters2026" : "completedChapters";

    const currentChapters = profile[columnName] || [];

    // ✅ Évite requête inutile
    if (currentChapters.includes(completedChapter)) {
      console.log(
        "✅ Chapitre déjà complété, aucune requête Supabase nécessaire.",
      );
      return { success: true };
    }

    const updatedChapters = [
      ...new Set([...currentChapters, completedChapter]),
    ];

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ [columnName]: updatedChapters })
      .eq("id", userId);

    if (updateError) {
      return requestEvent.fail(500, { error: "Failed to update" });
    }

    // ✅ Mise à jour en mémoire
    requestEvent.sharedMap.set("profile", {
      ...profile,
      [columnName]: updatedChapters,
    });

    return { success: true };
  },
  zod$({
    completedChapter: z.coerce.number().int().nonnegative(),
    version: z.enum(["2026", "Legacy"]),
  }),
);

export const useSaveChapterFeedback = routeAction$(
  async (data, requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile") as
      | Database["public"]["Tables"]["profiles"]["Row"]
      | null;

    if (!profile) {
      return requestEvent.fail(401, {
        error: "Unauthorized",
      });
    }

    const supabase = createClient(requestEvent);

    const { error } = await supabase.from("chapter_feedback").upsert(
      {
        user_id: profile.id,
        courseVersion: data.courseVersion,
        chapterNumber: data.chapterNumber,
        reaction: data.reaction,
        message: data.message,
      },
      {
        onConflict: "user_id,courseVersion,chapterNumber",
      },
    );

    if (error) {
      return requestEvent.fail(500, {
        error: "Failed to save chapter feedback: " + error.message,
      });
    }

    return {
      success: true,
    };
  },
  zod$(
    z.object({
      courseVersion: z.enum(["Legacy", "2026"]),
      chapterNumber: z.number().int().min(0),
      reaction: z.enum(["love", "happy", "sad", "cry"]),
      message: z.string(),
    }),
  ),
);

export const useGetChapterFeedback = routeLoader$(async (requestEvent) => {
  const profile = requestEvent.sharedMap.get("profile") as
    | Database["public"]["Tables"]["profiles"]["Row"]
    | null;

  if (!profile) {
    return {
      reaction: null,
      message: "",
      courseVersion: null,
      chapterNumber: null,
    };
  }

  const { courseVersion, chapterNumber } = getChapterContextFromPathname(
    requestEvent.url.pathname,
  );

  if (!courseVersion || chapterNumber === null) {
    return {
      reaction: null,
      message: "",
      courseVersion: null,
      chapterNumber: null,
    };
  }

  const supabase = createClient(requestEvent);

  const { data, error } = await supabase
    .from("chapter_feedback")
    .select("reaction, message")
    .eq("user_id", profile.id)
    .eq("courseVersion", courseVersion)
    .eq("chapterNumber", chapterNumber)
    .maybeSingle();

  if (error) {
    console.error("Failed to load chapter feedback:", error.message);

    return {
      reaction: null,
      message: "",
      courseVersion,
      chapterNumber,
    };
  }

  return {
    reaction: data?.reaction ?? null,
    message: data?.message ?? "",
    courseVersion,
    chapterNumber,
  };
});

export const useGetChapterFeedbackCounts = routeLoader$(
  async (requestEvent) => {
    const { courseVersion, chapterNumber } = getChapterContextFromPathname(
      requestEvent.url.pathname,
    );

    if (!courseVersion || chapterNumber === null) {
      return {
        love: 0,
        happy: 0,
        sad: 0,
        cry: 0,
        courseVersion: null,
        chapterNumber: null,
      };
    }

    const supabase = createClient(requestEvent);

    const { data, error } = await supabase.rpc("get_chapter_feedback_counts", {
      p_course_version: courseVersion,
      p_chapter_number: chapterNumber,
    });

    if (error) {
      console.error("Failed to load chapter feedback counts:", error.message);

      return {
        love: 0,
        happy: 0,
        sad: 0,
        cry: 0,
        courseVersion,
        chapterNumber,
      };
    }

    const row = Array.isArray(data) ? data[0] : data;

    return {
      love: Number(row?.love ?? 0),
      happy: Number(row?.happy ?? 0),
      sad: Number(row?.sad ?? 0),
      cry: Number(row?.cry ?? 0),
      courseVersion,
      chapterNumber,
    };
  },
);

export default component$(() => {
  return <Slot />;
});
