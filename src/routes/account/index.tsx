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
import { createDocumentHead } from "~/utils/createDocumentHead";

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
  async (_, requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile"); // ✅ Récupération du profil connecté

    if (!profile) {
      return requestEvent.fail(404, { error: "User not found." });
    }

    const supabase = createClient(requestEvent);

    // ✅ Réinitialiser la progression en mettant `completedChapters` à un tableau vide
    const { error } = await supabase
      .from("profiles")
      .update({ completedChapters: [] })
      .eq("id", profile.id);

    if (error) {
      console.error("❌ Erreur lors de la réinitialisation :", error);
      return requestEvent.fail(500, {
        success: false,
        message: "Error resetting completed chapters.",
        status: "error",
      });
    }

    return {
      success: true,
      message: "Completed chapters reset successfully.",
      status: "success",
    };
  },
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
