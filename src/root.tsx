// src/root.tsx

import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "./global.css";
import "./button.css";

export const runtime = "node";

// Check if the environment is production
const isProd = process.env.NODE_ENV === "production";
console.log("isProd", isProd);

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />

        <QwikPartytown forward={["gtag", "dataLayer.push"]} />

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

        {/* Google Analytics */}
        <script
          type="text/partytown"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D5GX3GMZR7"
        ></script>
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5GX3GMZR7');
          `}
        />

        {/* Google AdSense */}
        <script
          type="text/partytown"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091224773462896"
          crossOrigin="anonymous"
        />

        {/* Google Funding Choices */}
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
            fetch('https://fundingchoicesmessages.google.com/i/pub-2091224773462896?ers=1', { mode: 'no-cors' })
              .then(response => response.text())
              .then(scriptContent => {
                const script = document.createElement('script');
                script.textContent = scriptContent;
                document.head.appendChild(script);
              })
              .catch(error => console.error('Error fetching the script:', error));
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
        <meta name="theme-color" content="#ffffff" />

        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
