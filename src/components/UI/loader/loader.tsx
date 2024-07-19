import { component$, useStyles$ } from "@builder.io/qwik";
import Logo from "~/assets/img/android-chrome-512x512.png?jsx";

export const Loader = component$(() => {
  useStyles$(`
    .loader {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: calc(100vh - var(--header-height));
      width: 100%;
      overflow: hidden; /* Ajouté pour garder l'image dans le cadre */
    }

    .loader__inner {
      
      width: 100%; /* Assure que l'élément intérieur prend toute la largeur */
      height: 100%;
    }

    



  

    .loader img {
      width: 100px;
      height: 100px;
      min-width: 100px;
      min-height: 100px;
    
      
      
    }

  
  `);

  return (
    <main class="loader">
      <Logo />
      <div class="px-4 pb-8 md:px-8 md:pb-20">
        <ins
          class="adsbygoogle"
          style="display:flex; text-align:center; justify-content:center;"
          data-ad-format="autorelaxed"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="2125459059"
        ></ins>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={`
  (adsbygoogle = window.adsbygoogle || []).push({});
`}
        />
      </div>
    </main>
  );
});
