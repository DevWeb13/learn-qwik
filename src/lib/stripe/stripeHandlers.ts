import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/types/database.types";
import Stripe from "stripe";
import { getUserByEmail, getUserByCustomerId, updateUser } from "~/lib/supabase/supabaseUtils";

export const handleInvoicePaymentSucceeded = async (
  supabase: SupabaseClient<Database>, 
  invoice: Stripe.Invoice
): Promise<{ success?: boolean; error?: string }> => {

  const customerId = invoice.customer as string;
  const subscriptionId = invoice.subscription;
  const email = invoice.customer_email; // 🔹 On récupère l'email

  console.log("✅ Paiement d'abonnement confirmé !");
  console.log("🔹 ID client Stripe :", customerId);
  console.log("🔹 ID abonnement Stripe :", subscriptionId);
  console.log("🔹 Email utilisateur :", email);

  if (!customerId || !subscriptionId || !email) {
      console.error("❌ Erreur : ID client, abonnement ou email manquant !");
      return { error: "Données Stripe incomplètes" };
  }

  // 🛑 Tenter de récupérer l'utilisateur via stripe_customer_id
  let user = await getUserByCustomerId(supabase, customerId);

  // 🟡 Si l'utilisateur n'est pas trouvé via stripe_customer_id, chercher via email
  if (!user) {
      console.log("⚠️ Utilisateur non trouvé via stripe_customer_id, recherche via email...");
      user = await getUserByEmail(supabase, email);

      if (!user) {
          return { error: "Utilisateur non trouvé via email non plus, problème critique." };
      }

      // 🔹 Associer le stripe_customer_id à l'utilisateur
      const updateCustomerId = await updateUser(supabase, user.id, { stripe_customer_id: customerId });

      if (!updateCustomerId) {
          return { error: "Erreur mise à jour stripe_customer_id" };
      }

      console.log(`✅ stripe_customer_id ajouté à l'utilisateur ${user.id}`);
  }

  // 🕒 Déterminer la date d'expiration
  const currentPeriodEnd = invoice.period_end || Math.floor(Date.now() / 1000);
  const newExpirationDate = new Date(currentPeriodEnd * 1000);
  console.log("📅 Expire le :", newExpirationDate.toISOString());

  // Comparer avec la date actuelle
  const currentGracePeriod = user.grace_period_end ? new Date(user.grace_period_end) : null;

  if (currentGracePeriod && currentGracePeriod > newExpirationDate) {
      console.log("✅ L'utilisateur a déjà une période plus longue, pas de mise à jour.");
      return { success: true };
  }

  // 🔄 Mettre à jour access_status et grace_period_end
  const success = await updateUser(supabase, user.id, {
      access_status: "subscribed",
      grace_period_end: newExpirationDate.toISOString()
  });

  if (!success) return { error: "Erreur mise à jour utilisateur" };

  console.log(`✅ Utilisateur ${user.id} mis à jour en subscribed avec expiration ${newExpirationDate.toISOString()}`);
  return { success: true };
};

export const handleSubscriptionUpdated = async (
  supabase: SupabaseClient<Database>, 
  subscription: Stripe.Subscription
): Promise<{ success?: boolean; error?: string }> => {

  const customerId = subscription.customer as string;
  const status = subscription.status; // active, past_due, canceled, etc.
  const cancelAtPeriodEnd = subscription.cancel_at_period_end; // ✅ Vérifier si l'utilisateur a annulé
  const currentPeriodEnd = subscription.current_period_end;
  const newExpirationDate = new Date(currentPeriodEnd * 1000);
  
  console.log("🔄 Mise à jour d'un abonnement !");
  console.log("🔹 ID client Stripe :", customerId);
  console.log("🔹 Statut :", status);
  console.log("🔹 Annulation en fin de période :", cancelAtPeriodEnd ? "✅ OUI" : "❌ NON");
  console.log("📅 Nouvelle date d'expiration :", newExpirationDate.toISOString());

  if (!customerId) {
      console.error("❌ Erreur : ID client Stripe manquant !");
      return { error: "Données Stripe incomplètes" };
  }

  // 🔎 Récupérer l'utilisateur via stripe_customer_id
  const user = await getUserByCustomerId(supabase, customerId);
  if (!user) return { error: "Utilisateur non trouvé" };

  // 🔄 Déterminer le bon `access_status`
  let accessStatus = "subscribed"; // Par défaut
  if (status === "past_due" || status === "unpaid") {
      accessStatus = "grace_period"; // Laisser un accès temporaire
  } else if (status === "canceled" || cancelAtPeriodEnd) { 
      accessStatus = "canceled"; // L'utilisateur a annulé, mais il garde l'accès
  }

  // 🔄 Mettre à jour Supabase
  const success = await updateUser(supabase, user.id, {
      access_status: accessStatus
  });

  if (!success) return { error: "Erreur mise à jour utilisateur" };

  console.log(`✅ Utilisateur ${user.id} mis à jour : status=${accessStatus}, expiration=${newExpirationDate.toISOString()}`);
  return { success: true };
};
