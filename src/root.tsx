// src/root.tsx

import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikPartytown } from "./components/partytown/partytown";
import { RouterHead } from "./components/router-head/router-head";

import "./button.css";
import "./global.css";

const themeInitializerScript = `
(() => {
  const storageKey = "learn-qwik-theme";
  let theme = "light";

  try {
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  } catch {
    theme = "light";
  }

  const root = document.documentElement;
  root.classList.toggle("dark-theme", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", theme === "dark" ? "#080b18" : "#ffffff");
  }
})();
`;

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#ffffff" />
        <script dangerouslySetInnerHTML={themeInitializerScript} />

        <QwikPartytown forward={["gtag", "dataLayer.push"]} />

        {/* Google Analytics ? */}
        <script
          async
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-D5GX3GMZR7"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function() {
              dataLayer.push(arguments);
              }
              gtag('js', new Date());
            gtag('config', 'G-D5GX3GMZR7');
          `}
        />

        {/* Google Tag Manager */}
        <script
          type="text/partytown"
          async
          dangerouslySetInnerHTML={`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-M2HL6LDG');
                `}
        />

        <script
          type="text/partytown"
          async
          dangerouslySetInnerHTML={`
            (function() {
              function signalGooglefcPresent() {
                if (!window.frames['googlefcPresent']) {
                  if (document.body) {
                    const iframe = document.createElement('iframe');
                    
                    iframe.name = 'googlefcPresent';
                    document.body.appendChild(iframe);
                  } else {
                    setTimeout(signalGooglefcPresent, 0);
                  }
                }
              }
              signalGooglefcPresent();
            })();
          `}
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <meta name="apple-mobile-web-app-title" content="Learn Qwik" />
        <meta name="application-name" content="Learn Qwik" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en" class="min-h-svh max-w-svw">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
