// src/routes/account/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  routeAction$,
  routeLoader$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { AccountContent } from "~/components/account/accountContent";
import {
  computeDailyChallengeStats,
  getTodayDateKey,
  type DailyChallengeCompletionSummary,
} from "~/constants/dailyChallenges";
import { createClient } from "~/lib/supabase/server";
import type { Database } from "~/types/learn-qwik.database.types"; // Import des types générés Supabase
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

export const useDailyChallengeAccountStats = routeLoader$(
  async (requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile") as Profile | null;
    const todayDateKey = getTodayDateKey();

    if (!profile) {
      return {
        emailOptIn: false,
        loadError: "",
        stats: computeDailyChallengeStats([], todayDateKey),
        todayDateKey,
      };
    }

    const supabase = createClient(requestEvent);

    const { data, error } = await supabase
      .from("daily_challenge_completions")
      .select(
        "challenge_id, challenge_date, completed_date, is_correct, xp_awarded",
      )
      .eq("user_id", profile.id)
      .order("challenge_date", { ascending: false })
      .limit(180);

    const { data: preference, error: preferenceError } = await supabase
      .from("daily_challenge_preferences")
      .select("email_opt_in")
      .eq("user_id", profile.id)
      .maybeSingle();

    if (preferenceError) {
      console.error(
        "Failed to load Daily Qwik Lab email preference:",
        preferenceError,
      );
    }

    if (error) {
      console.error("Failed to load account daily challenge stats:", error);

      return {
        emailOptIn: preference?.email_opt_in ?? false,
        loadError: "Daily Qwik Lab stats could not be loaded yet.",
        stats: computeDailyChallengeStats([], todayDateKey),
        todayDateKey,
      };
    }

    const completions: DailyChallengeCompletionSummary[] = data.map(
      (completion) => ({
        challengeDate: completion.challenge_date,
        challengeId: completion.challenge_id,
        completedDate: completion.completed_date,
        isCorrect: completion.is_correct,
        xpAwarded: completion.xp_awarded,
      }),
    );

    return {
      emailOptIn: preference?.email_opt_in ?? false,
      loadError: "",
      stats: computeDailyChallengeStats(completions, todayDateKey),
      todayDateKey,
    };
  },
);

export const useUpdateDailyEmailPreference = routeAction$(
  async (data, requestEvent) => {
    const profile = requestEvent.sharedMap.get("profile") as Profile | null;

    if (!profile) {
      return requestEvent.fail(404, {
        message: "User not found.",
        status: "error",
        success: false,
      });
    }

    const supabase = createClient(requestEvent);
    const emailOptIn = data.email_opt_in === "true";

    const { error } = await supabase.from("daily_challenge_preferences").upsert(
      {
        email_opt_in: emailOptIn,
        updated_at: new Date().toISOString(),
        user_id: profile.id,
      },
      { onConflict: "user_id" },
    );

    if (error) {
      console.error("Failed to update Daily Qwik Lab email preference:", error);

      return requestEvent.fail(500, {
        message: "Daily Qwik Lab email preference could not be saved.",
        status: "error",
        success: false,
      });
    }

    return {
      emailOptIn,
      message: emailOptIn
        ? "Daily Qwik Lab emails enabled."
        : "Daily Qwik Lab emails disabled.",
      status: "success",
      success: true,
    };
  },
  zod$({
    email_opt_in: z.string().optional(),
  }),
);

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

    const versionLabel =
      data.version === "2026" ? "2026 version" : "legacy version";

    const updatePayload: ProfileUpdate =
      data.version === "2026"
        ? { completedChapters2026: [] }
        : { completedChapters: [] };

    const { error } = await supabase
      .from("profiles")
      .update(updatePayload)
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

export const head: DocumentHead = createDocumentHead2026({
  title: "Account Page",
  description: "Manage your account settings.",
  imageUrl: "https://www.learn-qwik.com/metaAccount.png",
  url: "https://www.learn-qwik.com/account/",
  type: "website",
  robots: "noindex, nofollow",
});
