import type { RouteNavigate } from "@builder.io/qwik-city";

/**
 * Redirects the user to the Stripe billing portal.
 * @param nav - The navigate function from Qwik's useNavigate().
 */
export const fetchBillingPortal = async (nav: RouteNavigate) => {
  try {
    const res = await fetch("/api/billing-portal", { method: "POST" });
    if (!res.ok) throw new Error("API error");

    const data = await res.json();
    nav(data.url);
  } catch (error) {
    console.error("❌ Billing portal error:", error);
  }
};

