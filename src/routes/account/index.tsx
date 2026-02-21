// src/routes/account/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  routeAction$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { AccountContent } from "~/components/account/accountContent";
import { createClient } from "~/lib/supabase/server";
import type { Database } from "~/types/database.types"; // Import des types générés Supabase
import { createDocumentHead } from "~/utils/createDocumentHead";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

// 🔄 Mettre à jour les infos du profil avec l'ID de useProfile()
export const useUpdateProfile = routeAction$(
  async (data, requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile"); // ✅ Utilisation directe de profile

    if (!profile) {
      return requestEvent.fail(404, { error: "User not found." });
    }

    const supabase = createClient(requestEvent);

    const { error } = await supabase
      .from("profiles")
      .update({
        username: data.username || null,
        avatar_url: data.avatar_url || null,
        website: data.website || null,
        phone: data.phone || null,
      })
      .eq("id", profile.id); // ✅ Utilisation de l'ID du profil connecté

    if (error) {
      console.error("❌ Erreur mise à jour profil :", error);
      return requestEvent.fail(500, {
        success: false,
        message: "Error updating user profile.",
        status: "error",
      });
    }

    return {
      success: true,
      message: "User profile updated successfully.",
      status: "success",
    };
  },
  zod$({
    username: z
      .string()
      .optional()
      .refine(
        (val) =>
          (val ?? "") === "" ||
          ((val ?? "").length >= 3 && (val ?? "").length <= 20),
        {
          message: "Username must be between 3 and 20 characters long",
        },
      ),

    avatar_url: z
      .string()
      .optional()
      .refine((val) => val === "" || z.string().url().safeParse(val).success, {
        message: "The avatar URL is not valid",
      }),

    website: z
      .string()
      .optional()
      .refine((val) => val === "" || z.string().url().safeParse(val).success, {
        message:
          "The website URL must be valid and start with 'http' or 'https'",
      }),

    phone: z
      .string()
      .optional()
      .refine((val) => val === "" || /^\+?\d{10,15}$/.test(val ?? ""), {
        message:
          "Phone number must be valid (10 to 15 digits, optionally with +)",
      }),
  }),
);

export const useResetCompletedChapters = routeAction$(
  async (data, requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile") as Profile | null; // ✅ Typage du profil

    if (!profile) {
      return requestEvent.fail(404, {
        success: false,
        message: "User not found.",
        status: "error",
      });
    }

    const supabase = createClient(requestEvent);

    const column =
      data.version === "2026" ? "completedChapters2026" : "completedChapters";

    const versionLabel =
      data.version === "2026" ? "2026 version" : "legacy version";

    const { error } = await supabase
      .from("profiles")
      .update({ [column]: [] })
      .eq("id", profile.id);

    if (error) {
      console.error("❌ Error resetting completed chapters:", error);
      return requestEvent.fail(500, {
        success: false,
        message: `Error resetting completed chapters for ${versionLabel}.`,
        status: "error",
      });
    }

    return {
      success: true,
      message: `Completed chapters for ${versionLabel} reset successfully.`,
      status: "success",
    };
  },
  zod$({
    version: z.enum(["legacy", "2026"]).default("legacy"),
  }),
);

export default component$(() => {
  return <AccountContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Account Page",
  "Manage your account settings.",
  "https://www.learn-qwik.com/metaAccount.png",
  "https://www.learn-qwik.com/account/",
);
