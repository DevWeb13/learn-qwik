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

async function getUserSubscription(supabase: any, userId: string) {
    const { data: profile, error } = await supabase
        .from("profiles")
        .select("access_status")
        .eq("id", userId)
        .single();
    
    return profile?.access_status === "subscribed";
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
        const isSubscribed = await getUserSubscription(supabase, user.id);
        if (isSubscribed) return;
        
        if (requestEvent.url.pathname.startsWith("/learn/dashboard-app/")) {
            const chapter = getChapterIdFromUrl(requestEvent.url.pathname);
            
            console.log("Checking chapter access");
            console.log("User subscription status:", isSubscribed ? "Premium" : "Free");
            console.log("chapterUri:", chapter?.uri);
            
            if (chapter && chapter.id > CHAPTERS_FREE_LIMIT) {
                console.log(`Chapitre ${chapter.id} restreint. Redirection vers /subscribe`);
                throw requestEvent.redirect(302, "/subscribe");
            }
        }
    }
}
