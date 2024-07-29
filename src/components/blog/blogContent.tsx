// src/components/blog/blogContent.tsx

import {
  component$,
  Resource,
  useResource$,
  useStyles$,
} from "@builder.io/qwik";
import { CardNews } from "./cardNews";
import { server$ } from "@builder.io/qwik-city";
import { getEnvVariable } from "~/utils/getEnvVariable";

interface Author {
  login: string;
  avatar_url: string;
  html_url: string;
}

interface Release {
  id: number;
  name: string;
  html_url: string;
  body: string;
  published_at: string;
  author: Author;
}

const fetchReleases = server$(async (): Promise<Release[]> => {
  const token = await getEnvVariable("GITHUB_KEY");
  console.log("Token:", token);

  if (!token) {
    throw new Error("GitHub token not found in environment variables");
  }

  const response = await fetch(
    "https://api.github.com/repos/QwikDev/qwik/releases",
    {
      headers: {
        Authorization: `token ${token}`,
        "Cache-Control": "no-store",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch releases");
  }
  return response.json();
});

export const BlogContent = component$(() => {
  useStyles$(`
    .blog_posts__nCN7i {
    margin-top: 48px;
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
  `);

  const releasesResource = useResource$(async () => {
    return fetchReleases();
  });

  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <div class="prose prose-vercel max-w-none">
          <h1
            class="text_wrapper__i87JK text-3xl font-semibold leading-10 tracking-tighter"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            The latest Qwik news
          </h1>

          <div class="blog_posts__nCN7i">
            <Resource
              value={releasesResource}
              onResolved={(releases) => {
                console.log(releases);
                return (
                  <>
                    {releases.map((release) => (
                      <CardNews key={release.id} release={release} />
                    ))}
                  </>
                );
              }}
              onPending={() => <p>Loading...</p>}
              onRejected={(error) => <p>Error: {error.message}</p>}
            />
          </div>
        </div>
      </div>
    </main>
  );
});
