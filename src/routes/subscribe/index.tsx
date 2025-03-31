import { component$, useStore, useSignal, $ } from "@builder.io/qwik";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export default component$(() => {
  const profile = useProfile();
  const store = useStore({ loading: false });
  const billingPortalUrl = useSignal("");

  const handlePayment = $(async (priceId: string) => {
    store.loading = true;
    const res = await fetch("/api/checkout/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId }),
    });

    const data = await res.json();
    store.loading = false;
    if (data.url) window.location.href = data.url;
  });

  const fetchBillingPortal = $(async () => {
    store.loading = true;
    try {
      const res = await fetch("/api/billing-portal", { method: "POST" });
      if (!res.ok) throw new Error("Erreur API");

      const data = await res.json();
      billingPortalUrl.value = data.url;
      window.location.href = billingPortalUrl.value;
    } catch (error) {
      console.error("❌ Erreur:", error);
    }
    store.loading = false;
  });

  const isTestMode = import.meta.env.PUBLIC_STRIPE_TEST_MODE === "true";

  const monthlyPriceId = isTestMode
    ? import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY_TEST
    : import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY;

  const yearlyPriceId = isTestMode
    ? import.meta.env.PUBLIC_STRIPE_PRICE_YEARLY_TEST
    : import.meta.env.PUBLIC_STRIPE_PRICE_YEARLY;

  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 class="mb-4 text-3xl font-bold text-gray-900">
        Subscribe to continue
      </h1>
      <p class="mb-6 max-w-xl text-center text-gray-700">
        Get full access to all course chapters, Discord server, and exclusive
        resources.
      </p>

      {/* Affiche "Manage my subscription" seulement si l'utilisateur a un abonnement actif */}
      {isSubscriptionActive(profile.value) ? (
        <button
          onClick$={fetchBillingPortal}
          disabled={store.loading}
          class="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
        >
          {store.loading ? "Loading..." : "Manage my subscription"}
        </button>
      ) : (
        <div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg">
            <h2 class="mb-2 text-2xl font-semibold text-gray-900">
              Monthly Subscription
            </h2>
            <p class="text-gray-600">Full access to all content</p>
            <p class="my-4 text-3xl font-bold text-gray-900">€1.99 / month</p>
            <button
              onClick$={() => handlePayment(monthlyPriceId)}
              disabled={store.loading}
              class="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              {store.loading ? "Loading..." : "Choose"}
            </button>
          </div>

          <div class="flex flex-col items-center rounded-2xl border-2 border-blue-600 bg-white p-6 text-center shadow-lg">
            <h2 class="mb-2 text-2xl font-semibold text-blue-900">
              Annual Subscription
            </h2>
            <p class="text-gray-600">Save 2 months!</p>
            <p class="my-4 text-3xl font-bold text-blue-900">€19.99 / year</p>
            <button
              onClick$={() => handlePayment(yearlyPriceId)}
              disabled={store.loading}
              class="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              {store.loading ? "Loading..." : "Choose"}
            </button>
          </div>
        </div>
      )}

      <p class="mt-6 text-gray-600">
        Not sure yet?{" "}
        <a href="/" class="text-blue-600 hover:underline">
          Go back to homepage
        </a>
      </p>
    </div>
  );
});
