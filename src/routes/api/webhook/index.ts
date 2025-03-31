// src/routes/api/webhook/index.ts

import { type RequestHandler } from '@builder.io/qwik-city';
import { handleSubscriptionDeleted, handleSubscriptionUpdated } from "~/lib/stripe/stripeHandlers";
import { createAdminClient } from "~/lib/supabase/server";

export const onPost: RequestHandler = async (requestEvent) => {
    const supabase = createAdminClient(requestEvent);
    const STRIPE_SECRET_KEY = requestEvent.env.get("STRIPE_SECRET_KEY");

    if (!STRIPE_SECRET_KEY) {
        console.error("❌ Erreur : Clé secrète Stripe manquante !");
        requestEvent.json(500, { error: "Clé secrète stripe manquante" });
        return;
    }

    try {
        const event = await requestEvent.request.json();
        console.log("📢 Webhook Stripe reçu :", event.type);

        let response;

        switch (event.type) {
            case "customer.subscription.updated":
                response = await handleSubscriptionUpdated(supabase, event.data.object, STRIPE_SECRET_KEY);
                break;

            case "customer.subscription.deleted":
                console.log("📢 Webhook Stripe reçu :", event.type);
                response = await handleSubscriptionDeleted(supabase, event.data.object);
                break;

            default:
                response = { success: true }; // On ignore les autres événements
        }

        if (response.error) {
            requestEvent.json(400, { error: response.error });
        } else {
            requestEvent.json(200, { received: true });
        }
    } catch (error) {
        console.error("❌ Erreur Webhook Stripe:", error);
        requestEvent.json(400, { error: "Webhook handling error" });
    }
};
