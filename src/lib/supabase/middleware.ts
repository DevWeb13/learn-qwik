import type { RequestEvent } from "@builder.io/qwik-city";
import { CHAPTERS } from "~/constants/chapters";
import { createClient } from "~/lib/supabase/server";

const CHAPTERS_FREE_LIMIT = 6;

function isBotRequest(userAgent: string | null): boolean {
    const botPattern = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver/;
    return botPattern.test(userAgent || "");
}

async function getUser(supabase: any, requestEvent: RequestEvent) {
    const { data: { user } } = await supabase.auth.getUser();
    requestEvent.sharedMap.set("user", user);
    return user;
}

async function getProfile(supabase: any, requestEvent: RequestEvent) {
    const user = await getUser(supabase, requestEvent);
    if (!user) return null; // 🚫 Pas de profil si pas d'utilisateur

    const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (error) {
        console.error("❌ Erreur récupération profil :", error);
        return null;
    }
    requestEvent.sharedMap.set("profile", profile);
    return profile;
}


function getChapterIdFromUrl(pathname: string) {
    const pathSegments = pathname.split("/").filter(Boolean);
    return CHAPTERS.find(c => c.uri === pathSegments[pathSegments.length - 1]);
}

export async function updateSession(requestEvent: RequestEvent) {
    const supabase = createClient(requestEvent);
    
    if (isBotRequest(requestEvent.request.headers.get("user-agent"))) {
        console.log("Bot detected, allowing access without redirection");
        return;
    }
    
    const user = await getUser(supabase, requestEvent);
    
    if (user && requestEvent.url.pathname.startsWith("/auth/login/")) {
        throw requestEvent.redirect(302, "/");
    }
    
    if (!user && (requestEvent.url.pathname.startsWith("/learn") ||
                  requestEvent.url.pathname.startsWith("/auth/logout") ||
                  requestEvent.url.pathname.startsWith("/account"))) {
        console.log("Redirecting to /auth/login");
        throw requestEvent.redirect(302, "/auth/login");
    }
    
    if (user) {
        const profile = await getProfile(supabase, requestEvent);
        
        if (!profile) {
            console.log("⚠️ Aucun profil trouvé pour cet utilisateur.");
            return;
        }

        const { access_status, grace_period_end } = profile;

        // 🔄 Vérifier si l'utilisateur a encore un accès premium
        const isStillPremium =
            access_status === "subscribed" ||
            (access_status === "canceled" && grace_period_end && new Date(grace_period_end) > new Date());

        if (isStillPremium) return; // ✅ Accès autorisé

        // ❌ Sinon, rediriger si l'utilisateur essaie d'accéder à un chapitre premium
        // if (requestEvent.url.pathname.startsWith("/learn/dashboard-app/")) {
        //     const chapter = getChapterIdFromUrl(requestEvent.url.pathname);
            
        //     console.log("Checking chapter access");
        //     console.log("User subscription status:", access_status);
            
        //     if (chapter && chapter.id > CHAPTERS_FREE_LIMIT) {
        //         console.log(`Chapitre ${chapter.id} restreint. Redirection vers /subscribe`);
        //         throw requestEvent.redirect(302, "/subscribe");
        //     }
        // }
    }
}