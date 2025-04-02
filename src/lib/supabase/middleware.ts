import type { RequestEvent } from "@builder.io/qwik-city";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { createClient } from "~/lib/supabase/server";
import { getUserById } from "~/lib/supabase/supabaseUtils";
import { Database } from "~/types/database.types";
import { isSubscriptionActive } from "~/utils/subscription";

function isBotRequest(userAgent: string | null): boolean {
  const botPattern =
    /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver/;
  return botPattern.test(userAgent || "");
}

async function getUser(
  supabase: SupabaseClient<Database>,
  requestEvent: RequestEvent
): Promise<User | null> {
  const { data } = await supabase.auth.getUser();
  const user = data.user || null;

  console.log("📢 Appel à Supabase pour récupérer l'user →", user?.id);
  requestEvent.sharedMap.set("user", user);
  return user;
}

async function getProfile(
  supabase: SupabaseClient<Database>,
  requestEvent: RequestEvent,
  user: User
): Promise<Database["public"]["Tables"]["profiles"]["Row"] | null> {
  if (!user) return null;

  console.log("📢 Appel à Supabase pour récupérer le profile via getUserById");

  const profile = await getUserById(supabase, user.id);

  if (!profile) {
    console.warn("⚠️ Aucun profil trouvé (getUserById) pour :", user.id);
    return null;
  }

  console.log("✅ Profil trouvé :", profile.id);

  try {
    requestEvent.sharedMap.set("profile", profile);
    console.log("✅ Profil mis dans sharedMap");
  } catch (e) {
    console.error("❌ Erreur lors du set sharedMap :", e);
  }

  return profile;
}

export async function updateSession(requestEvent: RequestEvent) {
  const supabase = createClient(requestEvent);
  const pathname = requestEvent.url.pathname;

  console.log("🚦 Middleware activé sur :", pathname);

  if (isBotRequest(requestEvent.request.headers.get("user-agent"))) {
    console.log("🤖 Bot détecté → accès autorisé");
    return;
  }

  const user = await getUser(supabase, requestEvent);

  if (user && pathname.startsWith("/auth/login")) {
    console.log("🔁 Utilisateur connecté sur /auth/login → redirect /");
    throw requestEvent.redirect(302, "/");
  }

  if (
    !user &&
    (pathname.startsWith("/learn") ||
      pathname.startsWith("/account") ||
      pathname.startsWith("/auth/logout"))
  ) {
    console.log("🔒 Non connecté → redirection /auth/login");
    throw requestEvent.redirect(302, "/auth/login");
  }

  if (user) {
    const profile = await getProfile(supabase, requestEvent, user);

    if (!profile) {
      console.warn("⚠️ Profil non trouvé après getUserById → pas de sharedMap");
      return;
    }

    // Ce check est pour les accès premium (non utile ici, mais safe)
    if (isSubscriptionActive(profile)) {
      console.log("✅ Accès premium confirmé via isSubscriptionActive");
      return;
    }
  }

  console.log("✅ Fin du middleware sans redirection");
}
