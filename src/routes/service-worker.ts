// /*
//  * WHAT IS THIS FILE?
//  *
//  * The service-worker.ts file is used to have state of the art prefetching.
//  * https://qwik.builder.io/qwikcity/prefetching/overview/
//  *
//  * Qwik uses a service worker to speed up your site and reduce latency, ie, not used in the traditional way of offline.
//  * You can also use this file to add more functionality that runs in the service worker.
//  */
// import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";

// setupServiceWorker();

// addEventListener("install", () => self.skipWaiting());

// addEventListener("activate", () => self.clients.claim());

// declare const self: ServiceWorkerGlobalScope;

import { setupServiceWorker } from "@builder.io/qwik-city/service-worker";

declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME = `cache-${new Date().toISOString()}`;

setupServiceWorker();

// Utiliser ExtendableEvent pour le type d'événement
self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        // Liste des ressources à mettre en cache
        "/manifest.json",
      ]);
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log(`Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Ignorer les requêtes POST et les requêtes vers des origines différentes
  if (event.request.method === "POST" || url.origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((networkResponse) => {
          if (
            !networkResponse.ok &&
            url.pathname.startsWith("/_vercel/insights/")
          ) {
            // Gérer spécifiquement les erreurs pour le script Vercel Insights
            return new Response("", { status: 404 });
          }

          if (!networkResponse.ok) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
      .catch(() => {
        if (url.pathname.startsWith("/_vercel/insights/")) {
          // Fournir une réponse vide pour les erreurs liées à Vercel Insights en mode hors ligne
          return new Response("", { status: 404 });
        }

        // Pour les requêtes GET hors ligne, montrer une page de secours
        return caches.match("/offline.html").then((offlineResponse) => {
          return (
            offlineResponse || new Response("Page hors ligne non disponible")
          );
        });
      }),
  );
});
