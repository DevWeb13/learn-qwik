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

// function getChapterIdFromUrl(pathname: string) {
//     const pathSegments = pathname.split("/").filter(Boolean);
//     return CHAPTERS.find(c => c.uri === pathSegments[pathSegments.length - 1]);
// }

async function getUser(supabase: SupabaseClient<Database>, requestEvent: RequestEvent): Promise<User | null> {
    // console.log("📢 Appel à Supabase pour récupérer l'user");
    
    const { data } = await supabase.auth.getUser();
    const user = data.user || null;
    
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

  requestEvent.sharedMap.set("profile", profile);
  return profile;
}


export async function updateSession(requestEvent: RequestEvent) {
    const supabase = createClient(requestEvent);

    const userAgent = requestEvent.request.headers.get("user-agent");
    console.log("userAgent", userAgent);
    
    if (isBotRequest(requestEvent.request.headers.get("user-agent"))) {
        console.log("Bot detected, allowing access without redirection");
        return;
    }

    const user = await getUser(supabase, requestEvent);
    
    if (user && requestEvent.url.pathname.startsWith("/auth/login/")) {
        throw requestEvent.redirect(302, "/");
    }
    
    if (!user &&
        !requestEvent.url.pathname.startsWith("/auth/login") && // ✅ Évite la boucle infinie
        (requestEvent.url.pathname.startsWith("/learn") ||
         requestEvent.url.pathname.startsWith("/auth/logout") ||
         requestEvent.url.pathname.startsWith("/account"))) {
        console.log("Redirecting to /auth/login");
        throw requestEvent.redirect(302, "/auth/login/");
    }
    
    
    if (user) {
        const profile = await getProfile(supabase, requestEvent, user);
        
        if (!profile) {
            console.log("⚠️ Aucun profil trouvé pour cet utilisateur.");
            return;
        }

        // 🔄 Vérifier si l'utilisateur a encore un accès premium
        if (isSubscriptionActive(profile)) return; // ✅ Accès autorisé

        // ❌ Sinon, rediriger si l'utilisateur essaie d'accéder à un chapitre premium
        // if (requestEvent.url.pathname.startsWith("/learn/dashboard-app/")) {
        //     const chapter = getChapterIdFromUrl(requestEvent.url.pathname);
            
        //     console.log("Checking chapter access");
        //     console.log("User subscription status:", profile.access_status);
            
        //     if (chapter && chapter.id > CHAPTERS_FREE_LIMIT) {
        //         console.log(`Chapitre ${chapter.id} restreint. Redirection vers /subscribe`);
        //         throw requestEvent.redirect(302, "/subscribe");
        //     }
        // }
    }
}