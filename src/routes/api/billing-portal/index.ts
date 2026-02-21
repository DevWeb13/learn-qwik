import { type RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";

export const onPost: RequestHandler = async (requestEvent) => {
  console.log("📢 Requête reçue sur /api/billing-portal");

  const STRIPE_SECRET_KEY = requestEvent.env.get("STRIPE_SECRET_KEY");
  if (!STRIPE_SECRET_KEY) {
    console.error("❌ Erreur : Clé secrète Stripe manquante !");
    requestEvent.json(500, { error: "Clé secrète Stripe manquante" });
    return;
  }

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2025-02-24.acacia",
  });

  const profile = requestEvent.sharedMap.get("profile");

  if (!profile.stripe_customer_id) {
    console.error(
      "❌ Erreur : Aucun abonnement actif trouvé pour cet utilisateur !",
    );
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
    requestEvent.json(500, {
      error: "Erreur lors de la création du portail client Stripe",
    });
  }
};
