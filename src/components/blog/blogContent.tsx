// src/components/blog/blogContent.tsx

import {
  component$,
  Resource,
  useResource$,
  useStyles$,
  useSignal,
  useStore,
  useVisibleTask$,
  $,
  useTask$,
} from "@builder.io/qwik";
import { CardNews } from "./cardNews";
import { CardNewsSkeleton } from "./cardNewsSkeleton"; // Importer le composant skeleton
import { server$, useLocation } from "@builder.io/qwik-city";
import { getEnvVariable } from "~/utils/getEnvVariable";
import { marked } from "marked";

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

/* Server */
const fetchReleases = server$(
  async (page: number = 1, per_page: number = 6): Promise<Release[]> => {
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

    const releases: Release[] = await response.json();

    for (const release of releases) {
      release.body = adjustReleaseBodyLinks(release.body, release.tag_name);

      const contributorLogins = extractContributorsFromBody(release.body);
      release.contributors =
        await fetchUniqueContributorAvatars(contributorLogins);
    }

    return releases;
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
export const BlogContent = component$(() => {
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

  const page = useSignal(1);
  const triggerRef = useSignal<Element>();
  const releasesStore = useStore<{ releases: Release[]; loading: boolean }>({
    releases: [],
    loading: false,
  });

  const location = useLocation();
  const releasesResource = useResource$<Release[]>(async ({ track }) => {
    track(() => page.value);
    track(() => location.url.pathname);
    releasesStore.loading = true;
    const newReleases = await fetchReleases(page.value, 6);
    releasesStore.releases = [...releasesStore.releases, ...newReleases];
    releasesStore.loading = false;
    return releasesStore.releases;
  });

  const loadMoreReleases = $(() => {
    if (!releasesStore.loading) {
      page.value++;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreReleases();
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      },
    );

    if (triggerRef.value) {
      observer.observe(triggerRef.value);
    }

    cleanup(() => observer.disconnect());
  });

  // const location = useLocation();
  // useTask$(({ track }) => {
  //   track(() => location.url.pathname);

  //   if (location.url.pathname === "/blog") {
  //     page.value = 1;
  //     releasesStore.releases = [];
  //     releasesStore.loading = false;
  //   }
  // });

  const container = useSignal<HTMLElement>();

  // Réinitialisation des publicités AdSense
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => releasesStore.loading);

    if (container.value) {
      const adsbygoogle = container.value.querySelectorAll(".adsbygoogle");
      adsbygoogle.forEach(() => {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("Adsense error:", e);
        }
      });
    }
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
                    {releases.map((release) => (
                      <CardNews key={release.id} release={release} />
                    ))}
                  </>
                );
              }}
              onPending={() => (
                <>
                  {releasesStore.releases.map((release) => (
                    <CardNews key={release.id} release={release} />
                  ))}
                  {Array.from({ length: 6 }).map((_, index) => (
                    <CardNewsSkeleton key={index} />
                  ))}
                </>
              )}
              onRejected={(error) => <p>Error: {error.message}</p>}
            />
          </div>
          <div ref={triggerRef} class="load-more-trigger"></div>
        </div>
      </div>
    </main>
  );
});
