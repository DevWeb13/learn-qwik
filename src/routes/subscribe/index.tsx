import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
  const store = useStore({ loading: false });

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

  const isTestMode = import.meta.env.PUBLIC_STRIPE_TEST_MODE === "true";

  console.log("isTestMode", isTestMode);

  const monthlyPriceId = isTestMode
    ? import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY_TEST
    : import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY;

  console.log("monthlyPriceId", monthlyPriceId);

  const yearlyPriceId = isTestMode
    ? import.meta.env.PUBLIC_STRIPE_PRICE_YEARLY_TEST
    : import.meta.env.PUBLIC_STRIPE_PRICE_YEARLY;

  console.log("yearlyPriceId", yearlyPriceId);
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 class="mb-4 text-3xl font-bold text-gray-900">
        Abonnez-vous pour continuer
      </h1>
      <p class="mb-6 max-w-xl text-center text-gray-700">
        Accédez à tous les chapitres du cours, au serveur Discord et aux
        nouvelles ressources exclusives.
      </p>

      <div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <div class="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg">
          <h2 class="mb-2 text-2xl font-semibold text-gray-900">
            Abonnement Mensuel
          </h2>
          <p class="text-gray-600">Accès complet à tout le contenu</p>
          <p class="my-4 text-3xl font-bold text-gray-900">1,99€ / mois</p>
          <button
            onClick$={() => handlePayment(monthlyPriceId)}
            disabled={store.loading}
            class="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            {store.loading ? "Chargement..." : "Choisir"}
          </button>
        </div>

        <div class="flex flex-col items-center rounded-2xl border-2 border-blue-600 bg-white p-6 text-center shadow-lg">
          <h2 class="mb-2 text-2xl font-semibold text-blue-900">
            Abonnement Annuel
          </h2>
          <p class="text-gray-600">Économisez 2 mois !</p>
          <p class="my-4 text-3xl font-bold text-blue-900">19,99€ / an</p>
          <button
            onClick$={() => handlePayment(yearlyPriceId)}
            disabled={store.loading}
            class="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            {store.loading ? "Chargement..." : "Choisir"}
          </button>
        </div>
      </div>

      <p class="mt-6 text-gray-600">
        Pas encore sûr ?{" "}
        <a href="/" class="text-blue-600 hover:underline">
          Revenir à l'accueil
        </a>
      </p>
    </div>
  );
});
