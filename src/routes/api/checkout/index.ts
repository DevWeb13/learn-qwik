import { type RequestHandler } from '@builder.io/qwik-city';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia'
});

export const onPost: RequestHandler = async ({ request, json, sharedMap, }) => {
  console.log("📢 Requête reçue sur /api/checkout");

  const { priceId } = await request.json();
  console.log("✅ priceId reçu :", priceId);

  // Récupérer l'utilisateur connecté depuis Supabase
  const user = sharedMap.get("user");
  if (!user) {
      console.error("❌ Erreur : Utilisateur non authentifié !");
       json(401, { error: "Utilisateur non authentifié" });
  }

  // Récupérer dynamiquement l'URL de l'application
  const origin = request.headers.get("origin") || "https://learn-qwik.com"; // ✅ Fallback en prod


  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          mode: 'subscription',
          line_items: [{ price: priceId, quantity: 1 }],
          customer_email: user.email, // ✅ Pré-remplit l'email Stripe avec celui de l'utilisateur
          success_url: `${origin}/learn/dashboard-app/`,  // ✅ Dynamique (local ou prod)
          cancel_url: `${origin}/subscribe/`,  // ✅ Dynamique (local ou prod)
      });

      console.log("✅ Session Stripe créée :", session);
       json(200, { url: session.url });

  } catch (error) {
      console.error("❌ Erreur Stripe:", error);
       json(500, { error: error instanceof Error ? error.message : "Unknown error" });
  }
};

