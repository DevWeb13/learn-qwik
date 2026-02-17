import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

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

export default component$(() => {
  return <Slot />;
});
