import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";

export const GuidesScrollWrapper = component$(() => {
  useStylesScoped$(`
.guides_guidesScrollWrapper__X_Ocn {
    position: relative;
    display: flex;
    height: 348px;
}

.guides_guidesListScrollView__ih_Nc {
    display: flex;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    position: relative;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

    .guides_guidesListScrollView__ih_Nc {
    padding: 4em 0;
}

.guides_bookSpacer__OLoiP {
    width: calc((100vw - var(--geist-page-width)) / 2);
}

.guides_bookPerspective__1DMxp {
    perspective: 900px;
    margin-right: 1em;
}

.guides_bookRotateWrapper__Z22Ip {
    cursor: pointer;
    --book-depth: 56px;
    --book-border-radius: 5.4px 1.8px 1.8px 5.4px;
    --hover-rotate: -20deg;
    --hover-scale: 1.066;
    --hover-translate-x: -0.5em;
    transform: rotate(0deg);
    position: relative;
    transform-style: preserve-3d;
    width: var(--book-width);
    height: var(--book-height);
    transition: transform .6s ease;
    box-shadow: none;
}

.guides_bookRotateWrapper__Z22Ip:hover {
        transform: rotateY(var(--hover-rotate)) scale(var(--hover-scale)) translateX(var(--hover-translate-x));
    }


.guides_book__j9vP8 {
    width: var(--book-width);
    height: var(--book-height);
    min-width: var(--book-width);
    min-height: var(--book-height);
    border-radius: var(--book-border-radius);
    background: linear-gradient(180deg, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, 0) 50%, hsla(0, 0%, 100%, 0) 100%), var(--book-color);
    box-shadow: 0 1.8px 3.6px rgba(0, 0, 0, .05), 0 10.8px 21.6px rgba(0, 0, 0, .08), inset 0 -.9px 0 rgba(0, 0, 0, .1), inset 0 1.8px 1.8px hsla(0, 0%, 100%, .1), inset 3.6px 0 3.6px rgba(0, 0, 0, .1);
    display: flex;
}

.guides_bookRotateWrapper__Z22Ip>:first-child {
    position: absolute;
    width: var(--book-width);
    height: var(--book-height);
}

.guides_bookRotateWrapper__Z22Ip .guides_side__D9UwQ {
    background: linear-gradient(90deg, var(--accents-3) 0, transparent 30%), linear-gradient(var(--geist-background), var(--accents-1));
    height: calc(var(--book-height) - 2* 3px);
    width: calc(var(--book-depth) - 2px);
    top: 3px;
    position: absolute;
    transform: translateX(calc(var(--book-width) - var(--book-depth) / 2 - 3px)) rotateY(90deg) translateX(calc(var(--book-depth) / 2));
}

.guides_book__j9vP8 .guides_bind__9COxI {
    height: 100%;
    min-width: 24px;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 12%, hsla(0, 0%, 100%, .25) 29.25%, hsla(0, 0%, 100%, 0) 50.5%, hsla(0, 0%, 100%, 0) 75.25%, hsla(0, 0%, 100%, .25) 91%, hsla(0, 0%, 100%, 0)), linear-gradient(90deg, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1) 12%, transparent 30%, rgba(0, 0, 0, .02) 50%, rgba(0, 0, 0, .2) 73.5%, rgba(0, 0, 0, .5) 75.25%, rgba(0, 0, 0, .15) 85.25%, transparent);
    opacity: .2;

}

.guides_book__j9vP8 .guides_cover__skh_f {
    padding: 1.5rem 1.25rem;
}

.guides_book__j9vP8 .guides_cover__skh_f p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.01em;
    color: var(--subtitle-color);
    text-shadow: var(--text-shadow);
}

.space-y-2>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(.5rem* calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(.5rem* var(--tw-space-y-reverse));
}

.guides_carouselControls__I_6T7 {
    height: 0;
    width: 0;
    border: none;
}

@media (min-width: 976px) {
  .guides_carouselControls__I_6T7 {
    display: none;
  }
}

fieldset, legend {
    padding: 0;
}
fieldset {
    margin: 0;
}

.guides_slideControl__ZgnAB {
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 1.5em;
    display: flex;
    align-items: center;
}

.guides_right__lPNfI {
    right: 1em;
}

.guides_left__l6yRf {
    left: 1em;
}

.circle-button_button__q1__M {
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsla(0, 0%, 67%, .1);
    transition: background .2s;
    cursor: pointer;
}

.circle-button_button__q1__M:hover {
  background: hsla(0, 0%, 67%, .4);
  }



    `);

  const containerRef = useSignal<HTMLDivElement>();
  const sliderRef = useSignal<HTMLDivElement>();
  const position = useSignal(0);

  const scroll = $(function scroll(direction: "left" | "right") {
    console.log("Scrolling ", direction);
    const NUMBER_OF_BOOKS = 5;
    const TOTAL_WIDTH = 1120;
    const BOOK_WIDTH = TOTAL_WIDTH / NUMBER_OF_BOOKS;
    const containerWidth = containerRef.value?.clientWidth || 0;

    if (direction === "left") {
      position.value = Math.max(position.value - BOOK_WIDTH, 0);
    } else {
      const maxScroll = TOTAL_WIDTH - containerWidth;
      position.value = Math.min(position.value + BOOK_WIDTH, maxScroll);
    }

    if (sliderRef.value) {
      sliderRef.value.style.transform = `translateX(-${position.value}px)`;
    }
  });

  return (
    <div class="guides_guidesScrollWrapper__X_Ocn overflow-x-hidden">
      <div
        ref={containerRef}
        class="stack_stack__iZkUS stack guides_guidesListScrollView__ih_Nc"
        data-version="v1"
        style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
      >
        <div
          ref={sliderRef}
          class="absolute flex w-full items-center justify-between px-4 md:px-1"
          style="transition: transform 0.6s ease"
        >
          <div class="guides_bookSpacer__OLoiP md:hidden"></div>
          <a
            class="guides_bookPerspective__1DMxp"
            rel="noopener noreferrer"
            target="_blank"
            href="https://qwikschool.com/"
          >
            <div
              class="guides_bookRotateWrapper__Z22Ip"
              style="--book-height: 220px; --book-width: 204px; --book-color: var(--ds-gray-400); --subtitle-color: var(--ds-gray-1000);"
            >
              <div
                class="stack_stack__iZkUS stack guides_book__j9vP8"
                data-version="v1"
                style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
              >
                <div class="guides_bind__9COxI"></div>
                <div
                  class="stack_stack__iZkUS stack guides_cover__skh_f flex"
                  data-version="v1"
                  style="--stack-flex:1;--stack-direction:column;--stack-align:stretch;--stack-justify:space-between;--stack-padding:0px;--stack-gap:0px"
                >
                  <div class="flex flex-col justify-between space-y-2">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Qwik school
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:0.8125rem;--text-line-height:1.125rem;--text-letter-spacing:initial;--text-weight:400;color:var(--ds-gray-900)"
                    >
                      By creator of Qwik 'Miško Hevery' 🦾
                      <br />
                      and 'Shai Reznik' 💪
                    </p>
                  </div>
                </div>
              </div>
              <div class="guides_side__D9UwQ"></div>
              <div class="guides_back__SaY73"></div>
            </div>
          </a>

          <a
            class="guides_bookPerspective__1DMxp"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gOUlY-uCHurFIpqogsdOnw"
          >
            <div
              class="guides_bookRotateWrapper__Z22Ip"
              style="--book-height: 220px; --book-width: 204px; --book-color: var(--ds-gray-400); --subtitle-color: var(--ds-gray-1000);"
            >
              <div
                class="stack_stack__iZkUS stack guides_book__j9vP8"
                data-version="v1"
                style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
              >
                <div class="guides_bind__9COxI"></div>
                <div
                  class="stack_stack__iZkUS stack guides_cover__skh_f flex"
                  data-version="v1"
                  style="--stack-flex:1;--stack-direction:column;--stack-align:stretch;--stack-justify:space-between;--stack-padding:0px;--stack-gap:0px"
                >
                  <div class="flex flex-col justify-between space-y-2">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Qwik Crash Course (first look)
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:0.8125rem;--text-line-height:1.125rem;--text-letter-spacing:initial;--text-weight:400;color:var(--ds-gray-900)"
                    >
                      YouTube channel
                      <br />
                      By 'Net Ninja'
                    </p>
                  </div>
                </div>
              </div>
              <div class="guides_side__D9UwQ"></div>
              <div class="guides_back__SaY73"></div>
            </div>
          </a>
          <a
            class="guides_bookPerspective__1DMxp"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLkswEDcfBXYcl1gW7L5zyCVF9LpGhlOqu"
          >
            <div
              class="guides_bookRotateWrapper__Z22Ip"
              style="--book-height: 220px; --book-width: 204px; --book-color: var(--ds-gray-400); --subtitle-color: var(--ds-gray-1000);"
            >
              <div
                class="stack_stack__iZkUS stack guides_book__j9vP8"
                data-version="v1"
                style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
              >
                <div class="guides_bind__9COxI"></div>
                <div
                  class="stack_stack__iZkUS stack guides_cover__skh_f flex"
                  data-version="v1"
                  style="--stack-flex:1;--stack-direction:column;--stack-align:stretch;--stack-justify:space-between;--stack-padding:0px;--stack-gap:0px"
                >
                  <div class="flex flex-col justify-between space-y-2">
                    <p
                      class="text_wrapper column "
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Qwik JS - How to Build a Full Stack SAAS Application
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:0.8125rem;--text-line-height:1.125rem;--text-letter-spacing:initial;--text-weight:400;color:var(--ds-gray-900)"
                    >
                      YouTube channel
                      <br />
                      By 'Code Raiders'
                    </p>
                  </div>
                </div>
              </div>
              <div class="guides_side__D9UwQ"></div>
              <div class="guides_back__SaY73"></div>
            </div>
          </a>
          <a
            class="guides_bookPerspective__1DMxp"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@RumNCode/featured"
          >
            <div
              class="guides_bookRotateWrapper__Z22Ip"
              style="--book-height: 220px; --book-width: 204px; --book-color: var(--ds-gray-400); --subtitle-color: var(--ds-gray-1000);"
            >
              <div
                class="stack_stack__iZkUS stack guides_book__j9vP8"
                data-version="v1"
                style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
              >
                <div class="guides_bind__9COxI"></div>
                <div
                  class="stack_stack__iZkUS stack guides_cover__skh_f flex"
                  data-version="v1"
                  style="--stack-flex:1;--stack-direction:column;--stack-align:stretch;--stack-justify:space-between;--stack-padding:0px;--stack-gap:0px"
                >
                  <div class="flex flex-col justify-between space-y-2">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Qwik comparison for React developers
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:0.8125rem;--text-line-height:1.125rem;--text-letter-spacing:initial;--text-weight:400;color:var(--ds-gray-900)"
                    >
                      YouTube channel
                      <br />
                      By 'RumNCode 🥃'
                    </p>
                  </div>
                </div>
              </div>
              <div class="guides_side__D9UwQ"></div>
              <div class="guides_back__SaY73"></div>
            </div>
          </a>
          <a
            class="guides_bookPerspective__1DMxp"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.lareponsedev.fr/"
          >
            <div
              class="guides_bookRotateWrapper__Z22Ip"
              style="--book-height: 220px; --book-width: 204px; --book-color: var(--ds-gray-400); --subtitle-color: var(--ds-gray-1000);"
            >
              <div
                class="stack_stack__iZkUS stack guides_book__j9vP8"
                data-version="v1"
                style="--stack-flex:initial;--stack-direction:row;--stack-align:stretch;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:0px"
              >
                <div class="guides_bind__9COxI"></div>
                <div
                  class="stack_stack__iZkUS stack guides_cover__skh_f flex"
                  data-version="v1"
                  style="--stack-flex:1;--stack-direction:column;--stack-align:stretch;--stack-justify:space-between;--stack-padding:0px;--stack-gap:0px"
                >
                  <div class="flex flex-col justify-between space-y-2">
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-1000);--text-size:1rem;--text-line-height:1.5rem;--text-letter-spacing:initial;--text-weight:500"
                    >
                      Do you have a guide to Qwik?
                    </p>
                    <p
                      class="text_wrapper"
                      data-version="v1"
                      style="--text-color:var(--ds-gray-900);--text-size:0.8125rem;--text-line-height:1.125rem;--text-letter-spacing:initial;--text-weight:400;color:var(--ds-gray-900)"
                    >
                      Get it here!
                      <br /> Contact me
                    </p>
                  </div>
                </div>
              </div>
              <div class="guides_side__D9UwQ"></div>
              <div class="guides_back__SaY73"></div>
            </div>
          </a>
          <div class="guides_bookSpacer__OLoiP md:hidden"></div>
        </div>
      </div>
      <fieldset
        aria-controls="carousel"
        aria-label="carousel buttons"
        class="guides_carouselControls__I_6T7"
      >
        <div class="guides_left__l6yRf guides_slideControl__ZgnAB">
          <button
            aria-label="Previous Slide"
            class="circle-button_button__q1__M"
            type="button"
            onClick$={() => {
              scroll("left");
            }}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="14"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 8 14"
              width="8"
            >
              <path d="M7 13L1 7L4 4L7 1"></path>
            </svg>
          </button>
        </div>
        <div class="guides_right__lPNfI guides_slideControl__ZgnAB">
          <button
            aria-label="Next slide"
            class="circle-button_button__q1__M"
            type="button"
            onClick$={() => {
              scroll("right");
            }}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="14"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 8 14"
              width="8"
            >
              <path d="M1 13L7 7L1 1"></path>
            </svg>
          </button>
        </div>
      </fieldset>
    </div>
  );
});
