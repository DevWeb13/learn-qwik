// src/components/blog/cardNews.tsx

import { component$, useStyles$ } from "@builder.io/qwik";

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

interface CardNewsProps {
  release: Release;
}

export const CardNews = component$<CardNewsProps>(({ release }) => {
  useStyles$(``);

  return (
    <article class="flex flex-col rounded-xl border p-2">
      <div class="flex flex-col p-3">
        <div class="flex flex-row items-center justify-between">
          <p class="">{new Date(release.published_at).toLocaleDateString()}</p>
          <div class="flex ">
            {/* <img
              src={}
              alt={` avatar`}
              width={24}
              height={24}
            /> */}
          </div>
        </div>
        <a
          class="text_wrapper__i87JK blog_title__eH3aB"
          data-version="v1"
          href={release.html_url}
          style="--text-color: var(--ds-gray-1000); --text-size: 1.25rem; --text-line-height: 2rem; --text-letter-spacing: -0.020625rem; --text-weight: 600;"
        >
          {release.name}
        </a>
        <div class="prose prose-vercel blog_prose__AcmB0">
          <p>
            {release.body.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
      <a class="blog_readMore__TCXUv" href={release.html_url}>
        Read More
      </a>
    </article>
  );
});
