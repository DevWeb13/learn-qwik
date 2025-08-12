// src/lib/supabase/middleware.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import { SupabaseClient, User } from "@supabase/supabase-js";
// import { CHAPTERS } from "~/constants/chapters";
import { createClient } from "~/lib/supabase/server";
import { getUserById } from "~/lib/supabase/supabaseUtils";
import { Database } from "~/types/database.types";
import { isSubscriptionActive } from "~/utils/subscription";

// const CHAPTERS_FREE_LIMIT = 6;

function isBotRequest(userAgent: string | null): boolean {
  if (!userAgent) return false;
  const botPattern = /bot|crawl|slurp|spider|ahrefs/i;
  return botPattern.test(userAgent.toLowerCase());
}

async function getUser(
  supabase: SupabaseClient<Database>,
  requestEvent: RequestEvent,
): Promise<User | null> {
  // console.log("📢 Appel à Supabase pour récupérer l'user");

  const { data } = await supabase.auth.getUser();
  const user = data.user || null;

  requestEvent.sharedMap.set("user", user);
  return user;
}

async function getProfile(
  supabase: SupabaseClient<Database>,
  requestEvent: RequestEvent,
  user: User,
): Promise<Database["public"]["Tables"]["profiles"]["Row"] | null> {
  if (!user) return null;

  console.log("📢 Appel à Supabase pour récupérer le profile via getUserById");

  const profile = await getUserById(supabase, user.id);

  if (!profile) {
    console.warn("⚠️ Aucun profil trouvé (getUserById) pour :", user.id);
    return null;
  }

  requestEvent.sharedMap.set("profile", profile);
  return profile;
}

export async function updateSession(requestEvent: RequestEvent) {
  const userAgent = requestEvent.request.headers.get("user-agent");

  const path = requestEvent.url.pathname;

  if (isBotRequest(userAgent)) {
    return;
  }

  const PUBLIC_PATHS = ["/blog"];
  if (PUBLIC_PATHS.some((p) => path.startsWith(p))) return;

  const supabase = createClient(requestEvent);
  const user = await getUser(supabase, requestEvent);

  if (user && requestEvent.url.pathname.startsWith("/auth/login/")) {
    throw requestEvent.redirect(302, "/");
  }

  if (
    !user &&
    !requestEvent.url.pathname.startsWith("/auth/login") &&
    (requestEvent.url.pathname.startsWith("/learn") ||
      requestEvent.url.pathname.startsWith("/auth/logout") ||
      requestEvent.url.pathname.startsWith("/account") ||
      requestEvent.url.pathname.startsWith("/games/game/path"))
  ) {
    const next = requestEvent.url.pathname;
    console.log("Redirecting to /auth/login", next);
    throw requestEvent.redirect(302, "/auth/login/?next=" + next);
  }

  if (user) {
    let profile = await getProfile(supabase, requestEvent, user);

    // ✅ Si aucun profil trouvé, on le crée maintenant
    if (!profile) {
      console.log("➡️ Création d'un nouveau profil Supabase (après login)");

      const email = user.email;
      const metadata = user.user_metadata;
      const full_name = metadata?.full_name ?? null;
      const avatar_url = metadata?.avatar_url ?? null;

      const { error: insertError } = await supabase.from("profiles").insert({
        id: user.id,
        email: user.email || "", // Assure que email est une string
        full_name,
        avatar_url,
        access_status: "free",
        completedChapters: [],
      } satisfies Database["public"]["Tables"]["profiles"]["Insert"]);

      if (insertError) {
        console.error(
          "❌ Erreur lors de la création du profil :",
          insertError.message,
        );
      } else {
        console.log("✅ Profil créé avec succès pour", email);
      }

      // 🔁 Recharge le profil après l'insertion
      profile = await getUserById(supabase, user.id);
      if (profile) {
        requestEvent.sharedMap.set("profile", profile);
      }
    }

    // 🔄 Vérifie l'abonnement si profil dispo
    if (profile && isSubscriptionActive(profile)) return;
  }
}
