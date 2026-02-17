import { type RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";

export const onPost: RequestHandler = async ({
  request,
  json,
  sharedMap,
  env,
}) => {
  const STRIPE_SECRET_KEY = env.get("STRIPE_SECRET_KEY");
  if (!STRIPE_SECRET_KEY) {
    console.error("❌ Erreur : Clé secrète Stripe manquante !");
    json(500, { error: "Clé secrète stripe manquante" });
  }

  const stripe = new Stripe(STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
  });

  console.log("📢 Requête reçue sur /api/checkout");

  const { priceId } = await request.json();
  console.log("✅ priceId reçu :", priceId);

  // Récupérer le profile connecté via le sharedMap (middleware)
  const profile = sharedMap.get("profile");

  if (!profile) {
    console.error("❌ Erreur : Profil utilisateur non trouvé !");
    json(401, { error: "Profil utilisateur non trouvé" });
  }

  // Récupérer dynamiquement l'URL de l'application
  const origin = request.headers.get("origin") || "https://learn-qwik.com"; // ✅ Fallback en prod

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: profile.email, // ✅ Pré-remplit l'email Stripe avec celui de l'utilisateur
      success_url: `${origin}/learn/dashboard-app/`, // ✅ Dynamique (local ou prod)
      cancel_url: `${origin}/`, // ✅ Dynamique (local ou prod)
    });

    // console.log("✅ Session Stripe créée :", session);
    json(200, { url: session.url });
  } catch (error) {
    console.error("❌ Erreur Stripe:", error);
    json(500, {
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
