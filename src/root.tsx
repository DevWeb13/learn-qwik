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

// Check if the environment is production
const isProd = process.env.NODE_ENV === "production";
console.log("isProd", isProd);

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

        {/* Google AdSense */}
        {/* <meta name="google-adsense-account" content="ca-pub-2091224773462896" /> */}

        {isProd && (
          <>
            {/* Monetag Start */}
            <meta name="monetag" content="be058b8fbdb0e4d7a510628a7fcd45b2" />

            {/* Monetag End */}

            {/* NotificationPush */}
            {/* <script
              src="https://vaugroar.com/pfe/current/tag.min.js?z=7385671"
              data-cfasync="false"
              async
            /> */}
            {/* PushPushGo Up-Right*/}
            {/* Full screen */}
            {/* <script
              async
              data-cfasync="false"
              src="//thubanoa.com/1?z=7385739"
            ></script> */}
            {/* <script
              dangerouslySetInnerHTML={`
              (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('oaphoace.net',7385740,document.createElement('script'))
              `}
            /> */}

            {/* Glad Tag */}
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={`
              (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('punoocke.com',7385723,document.createElement('script'))
    `}
            />

            {/* Monetag End */}
          </>
        )}

        {/* Google tag (gtag.js) Start */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D5GX3GMZR7"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-D5GX3GMZR7');
  `}
        />
        {/* Google tag (gtag.js) End */}

        {/* Vercel Analytics Start */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
`}
        />
        <script defer src="/_vercel/insights/script.js" />
        {/* Vercel Analytics End */}

        {/* Cool Qwik trick to know what code is being executed and when 👇 */}
        {!isProd && (
          <script
            dangerouslySetInnerHTML={`document.addEventListener('qsymbol', (e) => console.log(e.detail));`}
          />
        )}

        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
