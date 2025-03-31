// src/utils/subscription.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import { createAdminClient } from "~/lib/supabase/server";
import type { Database } from "~/types/database.types";

/**
 * Defines the `Profile` type based on `profiles.Row` from the database schema.
 */
type Profile = Database["public"]["Tables"]["profiles"]["Row"];

/**
 * Updates the status of expired subscriptions to "free"
 */
export async function updateExpiredSubscriptions(requestEvent: RequestEvent) {
  const supabase = createAdminClient(requestEvent);
  
  // Récupérer tous les utilisateurs avec un abonnement annulé
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("access_status", "canceled");

  if (error) {
    console.error("❌ Erreur lors de la récupération des profils:", error);
    return;
  }

  const now = new Date();

  // Mettre à jour les abonnements expirés
  for (const profile of profiles) {
    if (profile.grace_period_end && new Date(profile.grace_period_end) < now) {
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ access_status: "free" })
        .eq("id", profile.id);

      if (updateError) {
        console.error(`❌ Erreur lors de la mise à jour du profil ${profile.id}:`, updateError);
      } else {
        console.log(`✅ Profil ${profile.id} mis à jour en "free"`);
      }
    }
  }
}

/**
 * Checks if a user's subscription is active.
 * @param profile - The user's profile from Supabase.
 * @returns `true` if the subscription is active, `false` otherwise.
 */
export function isSubscriptionActive(profile: Profile | null): boolean {
  if (!profile) return false;

  const { access_status, grace_period_end } = profile;

  // L'utilisateur a un abonnement actif
  if (access_status === "subscribed") {
    return true;
  }

  // L'utilisateur a un abonnement en période de grâce
  if (access_status === "grace_period") {
    return true;
  }

  // L'utilisateur a annulé mais est encore dans sa période de grâce
  if (
    access_status === "canceled" &&
    grace_period_end &&
    new Date(grace_period_end) > new Date()
  ) {
    return true;
  }

  // L'abonnement est expiré ou n'existe pas
  return false;
}
