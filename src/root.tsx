import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
// import { QwikPartytown } from "./components/partytown/partytown";

import "./global.css";
import "./button.css";

export const runtime = "node";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        {/* Google tag (gtag.js)  */}
        <script
          defer
          src="https://www.googletagmanager.com/gtag/js?id=G-D5GX3GMZR7"
        />
        <script
          defer
          type="text/javascript"
          dangerouslySetInnerHTML={`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D5GX3GMZR7');
  `}
        />

        {/* <QwikPartytown forward={["dataLayer.push"]} />

        <script
          type="text/partytown"
          async
          dangerouslySetInnerHTML={`
          <!-- Google Tag Manager -->
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M2HL6LDG');
          <!-- End Google Tag Manager -->
            `}
        />

        <script
          type="text/partytown"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D5GX3GMZR7"
        ></script>
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
          <!-- Google tag (gtag.js) -->
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D5GX3GMZR7');
          `}
        /> */}

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
`}
        />

        <script defer src="/_vercel/insights/script.js" />

        {/* Google AdSense */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2091224773462896"
          crossOrigin="anonymous"
        ></script> */}
        <link rel="manifest" href="/manifest.json" />

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
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2HL6LDG"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
