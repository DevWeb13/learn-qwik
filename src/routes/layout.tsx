import { Analytics } from "@vercel/analytics/react";
import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header/header";
import Footer from "../components/starter/footer/footer";

export const MobileMenuVisibleContext = createContextId<Signal<boolean>>(
  "docs.mobile-menu-visible-context",
);

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const location = useLocation();
  const mobileMenuVisible = useSignal(false);

  useContextProvider(MobileMenuVisibleContext, mobileMenuVisible);

  // Utiliser useTask$ pour réagir aux changements d'URL
  useTask$(({ track }) => {
    track(() => location.url.pathname);
    // Réinitialiser le menu mobile à chaque changement de page
    mobileMenuVisible.value = false;
  });

  return (
    <>
      <Header />
      <Slot />
      <Footer />
      <Analytics />
    </>
  );
});
