// src/components/releases/releasesContent.tsx

import {
  component$,
  Resource,
  useResource$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { server$, useLocation } from "@builder.io/qwik-city";
import { marked } from "marked";
import { getEnvVariable } from "~/utils/getEnvVariable";
import { Pagination } from "../UI/pagination/pagination";
import { CardNews } from "./cardNews";
import { CardNewsSkeleton } from "./cardNewsSkeleton"; // Importer le composant skeleton

/* Types */
export type Author = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export type Contributor = {
  login: string;
  avatar_url: string;
};

export type Release = {
  id: number;
  name: string;
  html_url: string;
  body: string;
  published_at: string;
  author: Author;
  tag_name: string;
  tarball_url: string;
  zipball_url: string;
  contributors: Contributor[];
};

type SafeRelease = {
  id: number;
  name: string;
  html_url: string;
  body: string;
  published_at: string;
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  tag_name: string;
  tarball_url: string;
  zipball_url: string;
  contributors: Contributor[];
};

/* Server */
const fetchReleases = server$(
  async (page = 1, per_page = 6): Promise<SafeRelease[]> => {
    const token = await getEnvVariable("GITHUB_KEY");

    if (!token) {
      throw new Error("GitHub token not found in environment variables");
    }

    const response = await fetch(
      `https://api.github.com/repos/QwikDev/qwik/releases?page=${page}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch releases");
    }

    const releases: any[] = await response.json();

    const safeReleases: SafeRelease[] = [];

    for (const release of releases) {
      const body = adjustReleaseBodyLinks(release.body, release.tag_name);
      const contributorLogins = extractContributorsFromBody(body);
      const contributors =
        await fetchUniqueContributorAvatars(contributorLogins);

      safeReleases.push({
        id: release.id,
        name: release.name,
        html_url: release.html_url,
        body,
        published_at: release.published_at,
        author: {
          login: release.author?.login,
          avatar_url: release.author?.avatar_url,
          html_url: release.author?.html_url,
        },
        tag_name: release.tag_name,
        tarball_url: release.tarball_url,
        zipball_url: release.zipball_url,
        contributors,
      });
    }

    return safeReleases;
  },
);

const fetchUniqueContributorAvatars = async (
  usernames: string[],
): Promise<Contributor[]> => {
  const token = await getEnvVariable("GITHUB_KEY");

  if (!token) {
    throw new Error("GitHub token not found in environment variables");
  }

  const uniqueUsernames = Array.from(new Set(usernames)); // Supprime les doublons
  const avatars = await Promise.all(
    uniqueUsernames.map(async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await response.json();
      return { login: username, avatar_url: data.avatar_url };
    }),
  );

  return avatars;
};

/* Utils */
const adjustReleaseBodyLinks = (body: string, tagName: string): string => {
  if (body) {
    // Transformer les liens vers les fichiers changelog
    body = body.replace(/\[Changelog\]\((packages\/[^)]+)\)/g, (match, p1) => {
      return `[Changelog](https://github.com/QwikDev/qwik/blob/${tagName}/${p1})`;
    });

    // Transformer les mentions d'auteurs en liens vers leurs profils GitHub
    body = body.replace(/(^|\s)@(\w+)/g, (match, p1, p2) => {
      return `${p1}[@${p2}](https://github.com/${p2})`;
    });

    // Convertir Markdown en HTML
    let htmlBody = marked.parse(body) as string;

    // Ajouter les attributs target="_blank" et rel="noopener noreferrer" à tous les liens HTML
    htmlBody = htmlBody.replace(
      /<a /g,
      '<a target="_blank" rel="noopener noreferrer" ',
    );

    // Formater les liens des pull requests pour qu'ils apparaissent sous la forme #1234
    htmlBody = htmlBody.replace(
      /<a target="_blank" rel="noopener noreferrer" href="https:\/\/github\.com\/QwikDev\/qwik\/pull\/(\d+)">https:\/\/github\.com\/QwikDev\/qwik\/pull\/\d+<\/a>/g,
      (match, p1) => {
        return `<a target="_blank" rel="noopener noreferrer" href="https://github.com/QwikDev/qwik/pull/${p1}">#${p1}</a>`;
      },
    );

    return htmlBody;
  }
  return body;
};

const extractContributorsFromBody = (body: string): string[] => {
  const contributorsRegex = /@(\w+)/g;
  const matches = body.match(contributorsRegex);
  return matches ? matches.map((match) => match.slice(1)) : [];
};

/* Component */
export const ReleasesContent = component$(() => {
  useStyles$(`
    .blog_posts__nCN7i {
      margin-top: 48px;
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    }
    .load-more-trigger {
      height: 1px;
    }
  `);

  const loc = useLocation();

  const releasesResource = useResource$<Release[]>(async ({ track }) => {
    track(() => loc.url.pathname);
    track(() => loc.url.searchParams.get("page")); // 👈 ajout crucial ici

    const page = Number(loc.url.searchParams.get("page") || "1");
    const newReleases = await fetchReleases(page, 6);
    return newReleases;
  });

  const container = useSignal<HTMLElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => releasesResource.loading === false);
    // reinit adsense for spa navigation
    // console.log("reinit adsense");
    const adsbygoogles = container.value?.querySelectorAll(".adsbygoogle");
    adsbygoogles?.forEach((adsbygoogle) => {
      adsbygoogle.setAttribute("data-adsbygoogle-status", ""); // Réinitialiser l'attribut de statut
      adsbygoogle.setAttribute("data-ad-status", ""); // Réinitialiser l'attribut de statut
      adsbygoogle.innerHTML = ""; // Supprimer le contenu de l'élément
      // @ts-ignore
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore
        window.adsbygoogle = window.adsbygoogle || [];
        // @ts-ignore
        window.adsbygoogle.push({});
      }
    });
  });

  return (
    <main ref={container}>
      <div class="relative mx-auto max-w-screen-xl px-4 py-4 md:py-10">
        <div class=" max-w-none">
          <h1 class="text_wrapper__i87JK text-3xl font-semibold leading-10 tracking-tighter">
            The latest news releases from the Qwik team
          </h1>

          <div class="blog_posts__nCN7i">
            <Resource
              value={releasesResource}
              onResolved={(releases) => {
                return (
                  <>
                    {releases.map((release, index) => (
                      <CardNews
                        key={release.id}
                        release={release}
                        index={index}
                      />
                    ))}
                  </>
                );
              }}
              onPending={() => (
                <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CardNewsSkeleton key={index} />
                  ))}
                </>
              )}
              onRejected={(error) => <p>Error: {error.message}</p>}
            />
          </div>
          <div class="mt-5 flex w-full justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
});
