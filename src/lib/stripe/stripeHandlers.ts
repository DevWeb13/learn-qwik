// src/lib/stripe/stripeHandlers.ts

import type { SupabaseClient } from "@supabase/supabase-js";
import Stripe from "stripe";
import {
  getUserByCustomerId,
  getUserByEmail,
  updateUser,
} from "~/lib/supabase/supabaseUtils";
import type { Database } from "~/types/learn-qwik.database.types";

export const handleSubscriptionUpdated = async (
  supabase: SupabaseClient<Database>,
  subscription: Stripe.Subscription,
  stripeSecretKey: string,
): Promise<{ success?: boolean; error?: string }> => {
  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2025-02-24.acacia",
  });

  const customerId = subscription.customer as string;
  const status = subscription.status;
  const currentPeriodEnd = subscription.current_period_end;
  const formattedPeriodEnd = new Date(currentPeriodEnd * 1000);

  let user = await getUserByCustomerId(supabase, customerId);
  if (!user) {
    // Si l'utilisateur n'est pas trouvé, on le recherche par email
    const customer = await stripe.customers.retrieve(customerId);
    if ("email" in customer && customer.email) {
      user = await getUserByEmail(supabase, customer.email);
      if (!user) return { error: "Utilisateur non trouvé" };

      // Mise à jour du stripe_customer_id si nécessaire
      await updateUser(supabase, user.id, {
        stripe_customer_id: customerId,
      });
    } else {
      return { error: "Email du client non trouvé" };
    }
  }

  let accessStatus = "subscribed";

  if (status === "past_due" || status === "unpaid") {
    accessStatus = "grace_period";
  } else if (status === "canceled" || subscription.cancel_at_period_end) {
    accessStatus = "canceled";
  }

  await updateUser(supabase, user.id, {
    access_status: accessStatus,
    grace_period_end: formattedPeriodEnd.toISOString(),
  });

  console.log(`✅ Mise à jour abonnement ${user.id}, statut: ${accessStatus}`);
  return { success: true };
};

export const handleSubscriptionDeleted = async (
  supabase: SupabaseClient<Database>,
  subscription: Stripe.Subscription,
): Promise<{ success?: boolean; error?: string }> => {
  const customerId = subscription.customer as string;
  const currentPeriodEnd = subscription.current_period_end;
  const formattedPeriodEnd = new Date(currentPeriodEnd * 1000);

  let user = await getUserByCustomerId(supabase, customerId);
  if (!user) return { error: "Utilisateur non trouvé" };

  // Mettre à jour le statut en "canceled" avec la date de fin de période
  await updateUser(supabase, user.id, {
    access_status: "free",
    grace_period_end: null,
  });

  console.log(`🚨 Abonnement supprimé pour ${user.id}, access_status: free`);
  return { success: true };
};
