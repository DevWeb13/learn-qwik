import { type RequestHandler } from '@builder.io/qwik-city';
import { createClient } from "~/lib/supabase/server";

export const onPost: RequestHandler = async (requestEvent) => {
    const supabase = createClient(requestEvent);

    try {
        const event = await requestEvent.request.json();
        console.log("📢 Webhook Stripe reçu :", event.type);
        console.log("🔍 Données complètes de l'événement :", JSON.stringify(event, null, 2));

        if (event.type === "checkout.session.completed") {
            const session = event.data.object;
            const email = session.customer_email;

            console.log("✅ Paiement validé pour :", email);

            // Vérifier si on récupère bien l'email
            if (!email) {
                console.error("❌ Erreur : Email non trouvé dans l'événement !");
                 requestEvent.json(400, { error: "Email non trouvé" });
            }

            // Mettre à jour l'utilisateur dans Supabase
            const { error } = await supabase
                .from("profiles")
                .update({ access_status: "subscribed" })
                .eq("email", email);

            if (error) {
                console.error("❌ Erreur Supabase :", error);
                 requestEvent.json(500, { error: error.message });
            }

            console.log("✅ Utilisateur mis à jour dans Supabase !");
        }

        requestEvent.json(200, { received: true });
    } catch (error) {
        console.error("❌ Erreur Webhook Stripe:", error);
        requestEvent.json(400, { error: "Webhook handling error" });
    }
};
