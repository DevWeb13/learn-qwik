import { type RequestHandler } from '@builder.io/qwik-city';
import { createAdminClient } from "~/lib/supabase/server";
import { handleInvoicePaymentSucceeded, handleSubscriptionUpdated } from "~/lib/stripe/stripeHandlers";

export const onPost: RequestHandler = async (requestEvent) => {
    const supabase = createAdminClient(requestEvent);

    try {
        const event = await requestEvent.request.json();
        console.log("📢 Webhook Stripe reçu :", event.type);

        let response;

        switch (event.type) {
            case "invoice.payment_succeeded":
                response = await handleInvoicePaymentSucceeded(supabase, event.data.object);
                break;

            case "customer.subscription.updated":  // 🔥 NOUVEAU
                response = await handleSubscriptionUpdated(supabase, event.data.object);
                break;

            default:
                console.log("⚠️ Événement Stripe non géré :", event.type);
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
