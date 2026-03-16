// src/lib/supabase/middleware.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { createClient } from "~/lib/supabase/server";
import { getProfileById } from "~/lib/supabase/supabaseUtils";
import type { Database } from "~/types/learn-qwik.database.types";

function matchesRoute(currentPath: string, route: string): boolean {
  return currentPath === route || currentPath.startsWith(`${route}/`);
}

async function getProfile(
  supabase: SupabaseClient<Database>,
  user: User,
): Promise<Database["public"]["Tables"]["profiles"]["Row"] | null> {
  const profile = await getProfileById(supabase, user.id);

  return profile;
}

export async function updateSession(requestEvent: RequestEvent) {
  const currentPath = requestEvent.url.pathname;
  const nextPath = `${requestEvent.url.pathname}${requestEvent.url.search}`;

  // -----------------------------
  // 1. Bypass bots (SEO)
  // -----------------------------
  const userAgent = requestEvent.request.headers.get("user-agent") || "";
  const isBot =
    /bot|crawl|spider|slurp|ahrefs|semrush|mj12|dotbot|bingbot|yandex|google-inspectiontool/i.test(
      userAgent,
    );

  if (isBot) {
    return;
  }

  const supabase = createClient(requestEvent);

  // -----------------------------
  // 2. Récupération utilisateur
  // -----------------------------
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("[AUTH] getUser failed:", error.message);
  }

  requestEvent.sharedMap.set("user", user ?? null);

  // -----------------------------
  // 3. Routes protégées / guest-only
  // -----------------------------
  const protectedRoutes = ["/account", "/auth/logout"];
  const guestOnlyRoutes = ["/auth/login"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    matchesRoute(currentPath, route),
  );

  const isGuestOnlyRoute = guestOnlyRoutes.some((route) =>
    matchesRoute(currentPath, route),
  );

  // Non connecté -> accès refusé seulement aux routes privées
  if (!user && isProtectedRoute) {
    throw requestEvent.redirect(
      302,
      `/auth/login/?next=${encodeURIComponent(nextPath)}`,
    );
  }

  // Déjà connecté -> pas besoin de revoir login
  if (user && isGuestOnlyRoute) {
    throw requestEvent.redirect(302, "/");
  }

  // -----------------------------
  // 4. Profil + abonnement si connecté
  // -----------------------------
  if (!user) {
    requestEvent.sharedMap.set("profile", null);
    return;
  }

  const profile = await getProfile(supabase, user);

  if (!profile) {
    console.warn("⚠️ Aucun profil trouvé (getProfileById) pour :", user.id);
    requestEvent.sharedMap.set("profile", null);
    return null;
  }

  requestEvent.sharedMap.set("profile", profile);
}
