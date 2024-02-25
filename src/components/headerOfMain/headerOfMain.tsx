import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="style_container relative z-10 mb-4 h-[67px] w-full max-w-[1072px] lg:-mx-12 lg:mb-8">
      <aside
        class="bg-vercel-200 style_nonSticky__jA3GX z-10 flex h-[52px] w-full max-w-[1072px] items-center rounded-full px-3 py-3 lg:h-[auto] lg:w-full"
        style="background-clip: padding-box;"
      >
        <div class="md:hidden">
          <button
            type="submit"
            aria-label="View Chapters"
            class="button_base button_button reset_reset geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert"
            data-geist-button
            data-prefix="false"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onPointerEnter$={(e) => {
              const target = e.target as HTMLElement; // Assertion de type pour HTMLElement

              target.setAttribute("data-hover", "");
            }}
            onPointerLeave$={(e) => {
              const target = e.target as HTMLElement; // Assertion de type pour HTMLElement

              target.removeAttribute("data-hover");
            }}
          >
            <span class="button_content button_flex">
              <svg
                data-testid="geist-icon"
                height="16"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style="color: var(--ds-gray-900);"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.5 4C3.19036 4 3.75 3.44036 3.75 2.75C3.75 2.05964 3.19036 1.5 2.5 1.5C1.80964 1.5 1.25 2.05964 1.25 2.75C1.25 3.44036 1.80964 4 2.5 4ZM2.5 9.25C3.19036 9.25 3.75 8.69036 3.75 8C3.75 7.30964 3.19036 6.75 2.5 6.75C1.80964 6.75 1.25 7.30964 1.25 8C1.25 8.69036 1.80964 9.25 2.5 9.25ZM3.75 13.25C3.75 13.9404 3.19036 14.5 2.5 14.5C1.80964 14.5 1.25 13.9404 1.25 13.25C1.25 12.5596 1.80964 12 2.5 12C3.19036 12 3.75 12.5596 3.75 13.25ZM6.75 2H6V3.5H6.75H14.25H15V2H14.25H6.75ZM6.75 7.25H6V8.75H6.75H14.25H15V7.25H14.25H6.75ZM6.75 12.5H6V14H6.75H14.25H15V12.5H14.25H6.75Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div class="hidden md:block">
          <nav aria-label="Main" data-orientation="horizontal" dir="ltr">
            <div style="position: relative;">
              <ul data-orientation="horizontal" dir="ltr">
                <li>
                  <span
                    class="tooltip_container"
                    data-testid="legacy/tooltip-trigger"
                    data-version="v1"
                    tabIndex={-1}
                  >
                    <button
                      type="submit"
                      aria-expanded="false"
                      aria-controls="radix-:rjb:-content-nav"
                      aria-label="View Chapters"
                      id="radix-:rjb:-trigger-nav"
                      data-state="closed"
                      data-radix-collection-item=""
                      class="button_base reset_reset button_button reset_reset style_button__ft10U geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert"
                      data-geist-button=""
                      data-prefix="false"
                      data-suffix="false"
                      data-version="v1"
                      style="--geist-icon-size: 16px;"
                    >
                      <span class="button_content button_flex">
                        <svg
                          data-testid="geist-icon"
                          height="16"
                          stroke-linejoin="round"
                          viewBox="0 0 16 16"
                          width="16"
                          style="color: var(--ds-gray-900);"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 4C3.19036 4 3.75 3.44036 3.75 2.75C3.75 2.05964 3.19036 1.5 2.5 1.5C1.80964 1.5 1.25 2.05964 1.25 2.75C1.25 3.44036 1.80964 4 2.5 4ZM2.5 9.25C3.19036 9.25 3.75 8.69036 3.75 8C3.75 7.30964 3.19036 6.75 2.5 6.75C1.80964 6.75 1.25 7.30964 1.25 8C1.25 8.69036 1.80964 9.25 2.5 9.25ZM3.75 13.25C3.75 13.9404 3.19036 14.5 2.5 14.5C1.80964 14.5 1.25 13.9404 1.25 13.25C1.25 12.5596 1.80964 12 2.5 12C3.19036 12 3.75 12.5596 3.75 13.25ZM6.75 2H6V3.5H6.75H14.25H15V2H14.25H6.75ZM6.75 7.25H6V8.75H6.75H14.25H15V7.25H14.25H6.75ZM6.75 12.5H6V14H6.75H14.25H15V12.5H14.25H6.75Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-3 mr-4 hidden h-8 w-[1px] lg:block"
        ></div>
        <div class="ml-3 flex items-center gap-3 lg:ml-0">
          <div class="relative hidden lg:block">
            <svg
              fill="none"
              height="40"
              viewBox="0 0 32 40"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_iii_126_16757)">
                <g clip-path="url(#clip0_126_16757)">
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                    fill="#303030"
                  ></path>
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                    fill="url(#paint0_linear_126_16757)"
                  ></path>
                  <rect
                    fill="url(#paint1_linear_126_16757)"
                    height="40"
                    opacity="0.2"
                    width="8"
                  ></rect>
                  <rect
                    fill="url(#paint2_linear_126_16757)"
                    height="40"
                    opacity="0.05"
                    width="8"
                  ></rect>
                  <rect
                    fill="#D6DBDC"
                    height="40"
                    transform="translate(6)"
                    width="26"
                  ></rect>
                  <rect
                    fill="url(#paint3_linear_126_16757)"
                    fill-opacity="0.7"
                    height="40"
                    transform="translate(6)"
                    width="26"
                  ></rect>
                  <g filter="url(#filter1_d_126_16757)">
                    <path
                      d="M20 -8C20 -8.55228 20.4477 -9 21 -9H27C27.5523 -9 28 -8.55228 28 -8V6.79623C28 7.65539 26.9881 8.11457 26.3405 7.54881L24.6585 6.07619C24.2815 5.74629 23.7185 5.74629 23.3415 6.07619L21.6585 7.54881C21.0119 8.11457 20 7.65539 20 6.79623V-8Z"
                      fill="#3291FF"
                    ></path>
                  </g>
                  {/* <g clip-path="url(#clip1_126_16757)">
                    <circle
                      cx="19"
                      cy="20"
                      fill="black"
                      r="7.375"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.25"
                    ></circle>
                    <path
                      d="M21.63 23V17"
                      stroke="url(#paint4_linear_126_16757)"
                      stroke-miterlimit="1.41421"
                      stroke-width="1.25"
                    ></path>
                    <path
                      clip-rule="evenodd"
                      d="M16.995 17.0009V17H15.745V23H16.995V18.968L23.3615 26.7076C23.712 26.4793 24.0434 26.2242 24.353 25.9453L16.9953 17.0006L16.995 17.0009Z"
                      fill="url(#paint5_linear_126_16757)"
                      fill-rule="evenodd"
                    ></path>
                  </g> */}
                </g>
                <path
                  d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C30.8284 0.5 31.5 1.17157 31.5 2V38C31.5 38.8284 30.8284 39.5 30 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4Z"
                  stroke="black"
                  stroke-opacity="0.02"
                ></path>
              </g>
              <defs>
                <filter
                  color-interpolation-filters="s-rGB"
                  filterUnits="userSpaceOnUse"
                  height="41"
                  id="filter0_iii_126_16757"
                  width="36"
                  x="0"
                  y="0"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="4"></feOffset>
                  <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect1_innerShadow_126_16757"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="effect1_innerShadow_126_16757"
                    mode="normal"
                    result="effect2_innerShadow_126_16757"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="-1"></feOffset>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="effect2_innerShadow_126_16757"
                    mode="normal"
                    result="effect3_innerShadow_126_16757"
                  ></feBlend>
                </filter>
                <filter
                  color-interpolation-filters="s-rGB"
                  filterUnits="userSpaceOnUse"
                  height="18.7982"
                  id="filter1_d_126_16757"
                  width="10"
                  x="19"
                  y="-9"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_126_16757"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_126_16757"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                </filter>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_126_16757"
                  x1="16"
                  x2="16"
                  y1="0"
                  y2="40"
                >
                  <stop stop-color="white" stop-opacity="0.1"></stop>
                  <stop offset="0.5" stop-color="white" stop-opacity="0"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint1_linear_126_16757"
                  x1="0"
                  x2="8"
                  y1="17.75"
                  y2="17.75"
                >
                  <stop stop-opacity="0.03"></stop>
                  <stop offset="0.119792" stop-opacity="0.1"></stop>
                  <stop offset="0.291667" stop-opacity="0"></stop>
                  <stop offset="0.505208" stop-opacity="0.02"></stop>
                  <stop offset="0.734375" stop-opacity="0.21"></stop>
                  <stop offset="0.752526" stop-opacity="0.5"></stop>
                  <stop offset="0.852261" stop-opacity="0.15"></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint2_linear_126_16757"
                  x1="0"
                  x2="8"
                  y1="17.75"
                  y2="17.75"
                >
                  <stop stop-color="white" stop-opacity="0"></stop>
                  <stop
                    offset="0.119792"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="0.291667"
                    stop-color="white"
                    stop-opacity="0.96"
                  ></stop>
                  <stop
                    offset="0.505208"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="0.752526"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop offset="0.911458" stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint3_linear_126_16757"
                  x1="2.71429"
                  x2="32.067"
                  y1="4.24102e-07"
                  y2="27.5023"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint4_linear_126_16757"
                  x1="22.13"
                  x2="22.13"
                  y1="17"
                  y2="23"
                >
                  <stop stop-color="white"></stop>
                  <stop
                    offset="0.609375"
                    stop-color="white"
                    stop-opacity="0.57"
                  ></stop>
                  <stop
                    offset="0.796875"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint5_linear_126_16757"
                  x1="20.9375"
                  x2="24.5574"
                  y1="21.0625"
                  y2="25.3992"
                >
                  <stop stop-color="white"></stop>
                  <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                </linearGradient>
                <clipPath id="clip0_126_16757">
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
                    fill="white"
                  ></path>
                </clipPath>
                <clipPath id="clip1_126_16757">
                  <rect
                    fill="white"
                    height="16"
                    transform="translate(11 12)"
                    width="16"
                  ></rect>
                </clipPath>
              </defs>
              <div class="absolute left-2.5 top-3.5">
                <svg
                  height="16"
                  preserveAspectRatio="xMidYMid"
                  viewBox="-3.523 -.15 262.378 275.068"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <linearGradient id="a">
                    <stop offset="0" stop-color="#4340c4" />
                    <stop offset=".12" stop-color="#4642c8" />
                    <stop offset="1" stop-color="#594ee4" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="22.347%"
                    x2="77.517%"
                    xlink:href="#a"
                    y1="49.545%"
                    y2="50.388%"
                  />
                  <linearGradient
                    id="c"
                    x1="38.874%"
                    x2="60.879%"
                    y1="49.845%"
                    y2="50.385%"
                  >
                    <stop offset="0" stop-color="#4340c4" />
                    <stop offset=".74" stop-color="#534adb" />
                    <stop offset="1" stop-color="#594ee4" />
                  </linearGradient>
                  <linearGradient
                    id="d"
                    x1="-.004%"
                    x2="100.123%"
                    y1="49.529%"
                    y2="50.223%"
                  >
                    <stop offset="0" stop-color="#4340c4" />
                    <stop offset=".23" stop-color="#4340c4" />
                    <stop offset=".6" stop-color="#4f48d5" />
                    <stop offset="1" stop-color="#594ee4" />
                  </linearGradient>
                  <linearGradient
                    id="e"
                    x1="35.4%"
                    x2="64.895%"
                    y1="49.459%"
                    y2="50.085%"
                  >
                    <stop offset="0" stop-color="#0080ff" />
                    <stop offset="1" stop-color="#00b9ff" />
                  </linearGradient>
                  <linearGradient
                    id="f"
                    x1="-.243%"
                    x2="100.411%"
                    y1="49.366%"
                    y2="50.467%"
                  >
                    <stop offset="0" stop-color="#0080ff" />
                    <stop offset=".17" stop-color="#008bff" />
                    <stop offset=".47" stop-color="#00a7ff" />
                    <stop offset=".63" stop-color="#00b9ff" />
                    <stop offset="1" stop-color="#00b9ff" />
                  </linearGradient>
                  <linearGradient
                    id="g"
                    x1="-.125%"
                    x2="100.225%"
                    y1="49.627%"
                    y2="50.101%"
                  >
                    <stop offset="0" stop-color="#00b9ff" />
                    <stop offset=".3" stop-color="#0080ff" />
                    <stop offset=".6" stop-color="#2d67f1" />
                    <stop offset=".86" stop-color="#4d55e8" />
                    <stop offset="1" stop-color="#594ee4" />
                  </linearGradient>
                  <linearGradient
                    id="h"
                    x1="4.557%"
                    x2="99.354%"
                    xlink:href="#a"
                    y1="50.184%"
                    y2="51.298%"
                  />
                  <path
                    d="m175.05 236.86 25.163-15.072 49.298-86.93-76.287 89.098z"
                    fill="url(#b)"
                  />
                  <path
                    d="m242.337 80.408-4.926-9.4-1.932-3.663-.2.196-25.818-47.015c-6.477-11.876-18.83-19.295-32.451-19.452l-25.074.206 36.214 113.52-23.958 23.331 8.924 86.245 73.769-84.021c10.005-11.587 11.97-28.09 4.92-41.646l-9.466-18.302z"
                    fill="url(#c)"
                  />
                  <path
                    d="m201.113 72.256-43.18-70.907-74.523-1.346c-13.245-.153-25.58 6.57-32.53 17.867l-43.87 83.877 34.443-33.334 43.248-60.057 97.894 112.153 18.3-18.626c8.397-8.142 5.54-19.558.22-29.625z"
                    fill="url(#d)"
                  />
                  <path
                    d="m97.784 95.26-13.262-86.464-73.148 88.03c-12.328 11.935-14.897 30.662-6.419 45.49l42.98 74.727c6.553 11.464 18.755 18.577 32.024 18.729l42.945.49-51.444-116.655z"
                    fill="url(#e)"
                  />
                  <path
                    d="m173.227 223.9-101.847-104.878-13.196 12.59c-10.812 10.248-11.106 27.332-.728 37.921l43.99 66.384 70.65.907 1.127-12.926z"
                    fill="url(#f)"
                  />
                  <path
                    d="m101.584 235.903 72.292-11.6 47.704 49.465z"
                    fill="url(#g)"
                  />
                  <path
                    d="m173.111 224.483 27.168-3.457 24.096 49.915c1.06 2.06-1.719 3.977-3.373 2.302z"
                    fill="url(#h)"
                  />
                  <path
                    d="m182.708 120.058-98.028-111.458 12.502 85.958-26.022 24.222 101.772 105.372-7.595-85.905 17.37-18.192z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </svg>
          </div>
          <div class="animation-fadeIn flex flex-col">
            <p
              class="text_wrapper text_truncate"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.8125rem; --xs-text-line-height: 1.125rem; --xs-text-weight: 500; --xs-text-letter-spacing: initial; --sm-text-size: 0.8125rem; --sm-text-line-height: 1.125rem; --sm-text-weight: 500; --sm-text-letter-spacing: initial; --smd-text-size: 0.8125rem; --smd-text-line-height: 1.125rem; --smd-text-weight: 500; --smd-text-letter-spacing: initial; --md-text-size: 0.8125rem; --md-text-line-height: 1.125rem; --md-text-weight: 500; --md-text-letter-spacing: initial; --lg-text-size: 0.875rem; --lg-text-line-height: 1.25rem; --lg-text-weight: 500; --lg-text-letter-spacing: initial;"
            ></p>
            <p
              class={`text_wrapper text_truncate`}
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
            >
              Introduction
            </p>
          </div>
        </div>
        <div class="animation-fadeIn ml-auto hidden flex-col lg:flex">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 500; --text-align: right;"
          >
            0%
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-600); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400; --text-align: right;"
          >
            0/16 chapters
          </p>
        </div>
        <div class="ml-auto mr-2 lg:hidden">
          <div
            class="gauge_circle gauge_animate"
            data-geist-progress-circle=""
            data-version="v1"
            style="--circle-size: 100px; --circumference: 267.0353755551324; --percent-to-px: 2.670353755551324px; --gap-percent: 0; --offset-factor: 0;"
          >
            <svg
              fill="none"
              height="20"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="20"
            >
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke="var(--ds-gray-alpha-400)"
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="42.5"
                stroke-width="15"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke="var(--ds-blue-700)"
                style="opacity: 0; --stroke-percent: 0;"
              ></circle>
            </svg>
          </div>
        </div>
        <div class="hidden lg:block">
          <div
            class="gauge_circle gauge_animate ml-4"
            data-geist-progress-circle=""
            data-version="v1"
            style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 0; --offset-factor: 0;"
          >
            <svg
              fill="none"
              height="32"
              stroke-width="2"
              viewBox="0 0 100 100"
              width="32"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arcSecondary"
                stroke="var(--ds-gray-alpha-400)"
                style="opacity: 1; --stroke-percent: 99;"
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke-width="10"
                stroke-dashoffset="0"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="gauge_arc"
                data-geist-progress-circle-fg=""
                stroke="var(--ds-blue-700)"
                style="opacity: 0; --stroke-percent: 0;"
              ></circle>
            </svg>
          </div>
        </div>
        <div
          aria-hidden="true"
          class="bg-gray-alpha-400 ml-4 mr-3 hidden h-8 w-[1px] lg:block"
        ></div>
        <span
          class="tooltip_container"
          data-testid="legacy/tooltip-trigger"
          data-version="v1"
          tabIndex={-1}
        >
          <button
            type="submit"
            aria-label="Scroll to top"
            class="button_base reset_reset button_button reset_reset geist-new-themed geist-new-tertiary geist-new-tertiary-fill button_tertiary button_shape button_circle button_small button_invert"
            data-geist-button=""
            data-prefix="false"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
          >
            <span class="button_content button_flex">
              <svg
                data-testid="geist-icon"
                height="16"
                stroke-linejoin="round"
                viewBox="0 0 16 16"
                width="16"
                style="color: var(--ds-gray-900);"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.70711 1.39644C8.31659 1.00592 7.68342 1.00592 7.2929 1.39644L2.21968 6.46966L1.68935 6.99999L2.75001 8.06065L3.28034 7.53032L7.25001 3.56065V14.25V15H8.75001V14.25V3.56065L12.7197 7.53032L13.25 8.06065L14.3107 6.99999L13.7803 6.46966L8.70711 1.39644Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>
        </span>
      </aside>
    </div>
  );
});
