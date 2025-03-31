import { type RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";
import { createClient } from "~/lib/supabase/server";

export const onPost: RequestHandler = async (requestEvent) => {
  console.log("📢 Requête reçue sur /api/billing-portal");

  const STRIPE_SECRET_KEY = requestEvent.env.get("STRIPE_SECRET_KEY");
  if (!STRIPE_SECRET_KEY) {
    console.error("❌ Erreur : Clé secrète Stripe manquante !");
    requestEvent.json(500, { error: "Clé secrète Stripe manquante" });
    return;
  }

  const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2025-02-24.acacia" });

  // Récupérer l'utilisateur connecté
  const user = requestEvent.sharedMap.get("user");
  if (!user) {
    console.error("❌ Erreur : Utilisateur non authentifié !");
    requestEvent.json(401, { error: "Utilisateur non authentifié" });
    return;
  }

  // 🔹 Utiliser `requestEvent` au lieu de `request`
  const supabase = createClient(requestEvent);
  
  // Récupérer le stripe_customer_id du profil
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();

  if (error || !profile.stripe_customer_id) {
    console.error("❌ Erreur : Aucun abonnement actif trouvé pour cet utilisateur !");
    requestEvent.json(400, { error: "Aucun abonnement actif trouvé" });
    return;
  }

  try {
    // Créer une session du portail client Stripe
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: "https://www.learn-qwik.com/account", // Redirige après la gestion
    });

    console.log("✅ URL Stripe générée :", portalSession.url);
    requestEvent.json(200, { url: portalSession.url });

  } catch (error) {
    console.error("❌ Erreur Stripe :", error);
    requestEvent.json(500, { error: "Erreur lors de la création du portail client Stripe" });
  }
};
