// src/components/blog/cardNews.tsx

import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import sanitizeHtml from "sanitize-html";
import { formatDate } from "~/utils/formatDate";
import type { Release } from "./blogContent";
import { Link } from "@builder.io/qwik-city";
import { FileSvg } from "~/assets/svg/fileSvg/fileSvg";

type CardNewsProps = {
  release: Release;
  index: number;
};

type DataAdSlot = {
  [key: number]: string;
};

export const CardNews = component$<CardNewsProps>(({ release, index }) => {
  const dataAdSlot: DataAdSlot = useStore({
    1: "7279099184",
    2: "5921119204",
    3: "9330547454",
    4: "5391302443",
    5: "4078220776",
    6: "7042629183",
  });

  useStylesScoped$(`
    .container-body > :global(table th) {
     text-align: left;
     padding-left: 0.5rem;
     border: 1px solid #e2e8f0;
  }

   .container-body > :global(table td) {
     padding: 0 0.5rem;
     border: 1px solid #e2e8f0;
  }

  .container-body > :global(h2) {
      font-weight: bold;
    }

    .container-body > :global(h3) {
      font-weight: bold;
    }

   

    .container-body > :global(table a) {
      color: #3b82f6;
    }

     .container-body > :global(table a:hover) {
      color: #1e40af; /* Correspond à hover:text-blue-700 */
      text-decoration: underline;
    }

    .container-body > :global(ul li a) {
      color: #3b82f6;
      word-break: break-word; /* Ajout pour casser les mots longs */
      white-space: pre-wrap; /* Ajout pour autoriser le retour à la ligne */
      overflow-wrap: break-word; /* Ajout pour casser les mots longs */
    }

    .container-body > :global(p a) {
      color: #3b82f6;
      word-break: break-word; /* Ajout pour casser les mots longs */
      white-space: pre-wrap; /* Ajout pour autoriser le retour à la ligne */
      overflow-wrap: break-word; /* Ajout pour casser les mots longs */
    }

     .container-body > :global(ul li a:hover) {
      color: #1e40af; /* Correspond à hover:text-blue-700 */
    }

    .container-body > :global(ul li) {
     
      list-style: initial; 
      margin-left: 1rem;
      margin-bottom: 0.5rem;
    }


    `);

  return (
    <article class="mb-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 p-4 shadow-md">
      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-600">{formatDate(release.published_at)}</p>
      </div>
      <Link
        href={release.html_url}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-2 block text-xl font-bold text-blue-500 hover:text-blue-700 hover:underline"
      >
        {release.name}
      </Link>
      <div>
        <div
          class="container-body  mt-2 flex flex-col gap-2 text-gray-700"
          dangerouslySetInnerHTML={sanitizeHtml(release.body)}
        />
      </div>
      <div class="my-2 flex flex-col gap-2 border-t">
        <h2 class="mt-4 font-bold text-gray-700">Assets:</h2>
        <ul class="flex flex-col gap-1 text-base">
          <li>
            <Link
              href={release.zipball_url}
              class="flex items-center gap-1 text-blue-500 hover:text-blue-700 hover:underline"
            >
              <FileSvg />
              Source code (zip)
            </Link>
          </li>
          <li>
            <Link
              href={release.tarball_url}
              class="flex items-center gap-1 text-blue-500 hover:text-blue-700 hover:underline"
            >
              <FileSvg />
              Source code (tar.gz)
            </Link>
          </li>
        </ul>
      </div>
      <div class="my-2 flex flex-grow flex-col gap-2 border-t">
        {release.contributors.length > 0 && (
          <>
            <h2 class="mt-4 font-bold text-gray-700">Contributors:</h2>
            <ul class="flex flex-wrap gap-2">
              {release.contributors.map((contributor) => (
                <li key={contributor.login} title={contributor.login}>
                  <a
                    href={`https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      class="h-10 w-10 rounded-full"
                      width={30}
                      height={30}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div class="px-4 md:px-8">
        <ins
          class="adsbygoogle"
          style="display:flex; justify-content:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot={dataAdSlot[index]}
        ></ins>
      </div>
    </article>
  );
});
