// src/components/blog/cardNews.tsx

import { component$, useStyles$ } from "@builder.io/qwik";

export const CardNews = component$(() => {
  useStyles$(`
element.style {
    --stack-flex: initial;
    --stack-direction: column;
    --stack-align: stretch;
    --stack-justify: flex-start;
    --stack-padding: 12px;
    --stack-gap: 0px;
}

    .blog_post__AYNwO {
    --post-radius: 12px;
    --post-padding: 6px;
    --post-inner-radius: calc(var(--post-radius) - var(--post-padding));
    display: flex;
    width: 100%;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding: var(--post-padding);
    border-radius: var(--post-radius);
    box-shadow: var(--ds-shadow-border-small);
    background: transparent;
}

.blog_title__eH3aB {
    border-radius: 2px;
    width: -moz-fit-content;
    width: fit-content;
}

.blog_readMore__TCXUv {
    height: 36px;
    background: var(--ds-gray-100);
    color: var(--ds-gray-900);
    display: flex;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    border-radius: var(--post-inner-radius) var(--post-inner-radius);
    margin-top: auto;
    transition-property: background, color;
    transition-duration: .2s;
    cursor: pointer;
}
    `);
  return (
    <article class="blog_post__AYNwO">
      <div class="px-4  md:px-6 ">
        <div
          class="stack_stack__iZkUS stack"
          data-version="v1"
          style="--stack-flex: initial; --stack-direction: row; --stack-align: center; --stack-justify: space-between; --stack-padding: 0px; --stack-gap: 0px;"
        >
          <p
            class="text_wrapper__i87JK"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.5rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            May 23rd, 2024
          </p>
          {/* <div class="blog_authors__nCUES">
            <div
              aria-label="Avatar of Delba de Oliveira"
              class="blog_author__dJEks"
              role="img"
              title="Avatar of Delba de Oliveira"
              style="--size: 24px; margin-left: -12px;"
            >
              <img
                alt=""
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                srcset="/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&amp;w=24&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&amp;w=48&amp;q=75 2x"
                src="/_next/image?url=%2Fstatic%2Fteam%2Fdelba.jpg&amp;w=48&amp;q=75"
                style="color: transparent;"
              />
            </div>
            <div
              aria-label="Avatar of Zack Tanner"
              class="blog_author__dJEks"
              data-has-more="0"
              role="img"
              title="Avatar of Zack Tanner"
              style="--size: 24px; margin-left: -11px;"
            >
              <img
                alt=""
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                srcset="/_next/image?url=%2Fstatic%2Fteam%2Fzack.jpg&amp;w=24&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fteam%2Fzack.jpg&amp;w=48&amp;q=75 2x"
                src="/_next/image?url=%2Fstatic%2Fteam%2Fzack.jpg&amp;w=48&amp;q=75"
                style="color: transparent;"
              />
            </div>
          </div> */}
        </div>
        <a
          class="text_wrapper__i87JK blog_title__eH3aB"
          data-version="v1"
          href="/blog/next-15-rc"
          style="--text-color: var(--ds-gray-1000); --text-size: 1.25rem; --text-line-height: 2rem; --text-letter-spacing: -0.020625rem; --text-weight: 600;"
        >
          Next.js 15 RC
        </a>
        <div class="prose prose-vercel blog_prose__AcmB0">
          <p>
            The Next.js 15 Release Candidate (RC) is now available. This early
            version allows you to test the latest features before the upcoming
            stable release.
          </p>
          <ul>
            <li>
              <a href="/blog/next-15-rc#react-19-rc">React RC</a>
            </li>
            <li>
              <a href="/blog/next-15-rc#caching-updates">
                Caching defaults changes
              </a>
            </li>
            <li>
              <a href="/blog/next-15-rc#incremental-adoption-of-partial-prerendering-experimental">
                Incremental Partial Prerendering adoption
              </a>
            </li>
            <li>
              <a href="/blog/next-15-rc#executing-code-after-a-response-with-nextafter-experimental">
                next/after (Experimental)
              </a>
            </li>
            <li>
              <a href="/blog/next-15-rc#create-next-app-updates">
                New create-next-app design
              </a>
            </li>
            <li>
              <a href="/blog/next-15-rc#optimizing-bundling-of-external-packages-stable">
                Bundling external packages (Stable)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a class="blog_readMore__TCXUv" href="/blog/next-15-rc">
        Read More
      </a>
    </article>
  );
});
