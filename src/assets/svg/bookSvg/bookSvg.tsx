import { QwikLogo } from "../qwikLogo/qwikLogo";

export const BookSvg = ({
  width = 160,
  height = 181,
  small = false,
}: {
  width?: number;
  height?: number;
  small?: boolean;
}) => (
  <svg
    fill="none"
    height={small ? 40 : height}
    viewBox="0 0 160 181"
    width={small ? 32 : width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_iii_439_2947)">
      <g clip-path="url(#clip0_439_2947)">
        <path
          d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
          fill="#303030"
        ></path>
        <path
          d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
          fill="url(#paint0_linear_439_2947)"
        ></path>
        <rect
          fill="url(#paint1_linear_439_2947)"
          height="320"
          opacity="0.2"
          width="24"
          y="1"
        ></rect>
        <rect
          fill="url(#paint2_linear_439_2947)"
          height="320"
          opacity="0.05"
          width="24"
          y="1"
        ></rect>
        <rect
          fill="#D6DBDC"
          height="180"
          transform="translate(18 1)"
          width="142"
        ></rect>
        <rect
          fill="url(#paint3_linear_439_2947)"
          fill-opacity="0.7"
          height="180"
          transform="translate(18 1)"
          width="142"
        ></rect>
      </g>

      <path
        d="M6 1.5H158C158.828 1.5 159.5 2.17157 159.5 3V179C159.5 179.828 158.828 180.5 158 180.5H6C2.96244 180.5 0.5 178.038 0.5 175V7C0.5 3.96244 2.96243 1.5 6 1.5Z"
        stroke="black"
        stroke-opacity="0.02"
      ></path>
    </g>
    <g filter="url(#filter1_d_439_2947)">
      <path
        d="M122 1C122 0.447716 122.448 0 123 0H137C137.552 0 138 0.447715 138 1V22.259C138 23.0308 137.163 23.5116 136.496 23.1227L130.504 19.6273C130.193 19.4456 129.807 19.4456 129.496 19.6273L123.504 23.1227C122.837 23.5116 122 23.0308 122 22.259V1Z"
        fill="#3291FF"
      ></path>
    </g>
    <defs>
      <filter
        color-interpolation-filters="s-rGB"
        filterUnits="userSpaceOnUse"
        height="181"
        id="filter0_iii_439_2947"
        width="164"
        x="0"
        y="1"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
          result="effect1_innerShadow_439_2947"
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
          in2="effect1_innerShadow_439_2947"
          mode="normal"
          result="effect2_innerShadow_439_2947"
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
          in2="effect2_innerShadow_439_2947"
          mode="normal"
          result="effect3_innerShadow_439_2947"
        ></feBlend>
      </filter>
      <filter
        color-interpolation-filters="s-rGB"
        filterUnits="userSpaceOnUse"
        height="25.2605"
        id="filter1_d_439_2947"
        width="18"
        x="121"
        y="0"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
          result="effect1_dropShadow_439_2947"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_439_2947"
          mode="normal"
          result="shape"
        ></feBlend>
      </filter>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_439_2947"
        x1="80"
        x2="80"
        y1="1"
        y2="181"
      >
        <stop stop-color="white" stop-opacity="0.1"></stop>
        <stop offset="0.5" stop-color="white" stop-opacity="0"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint1_linear_439_2947"
        x1="0"
        x2="24"
        y1="143"
        y2="143"
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
        id="paint2_linear_439_2947"
        x1="0"
        x2="24"
        y1="143"
        y2="143"
      >
        <stop stop-color="white" stop-opacity="0"></stop>
        <stop offset="0.119792" stop-color="white" stop-opacity="0"></stop>
        <stop offset="0.291667" stop-color="white" stop-opacity="0.96"></stop>
        <stop offset="0.505208" stop-color="white" stop-opacity="0"></stop>
        <stop offset="0.752526" stop-color="white" stop-opacity="0"></stop>
        <stop offset="0.911458" stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint3_linear_439_2947"
        x1="14.8242"
        x2="146.106"
        y1="1.90846e-06"
        y2="149.288"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint4_linear_439_2947"
        x1="132.956"
        x2="138.478"
        y1="155.122"
        y2="161.967"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint5_linear_439_2947"
        x1="134.822"
        x2="134.791"
        y1="145.4"
        y2="153.625"
      >
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <clipPath id="clip0_439_2947">
        <path
          d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
          fill="white"
        ></path>
      </clipPath>
    </defs>
    <div
      class={
        "absolute" + " " + (small ? " left-2.5 top-3.5" : "bottom-3 right-3")
      }
    >
      {small ? <QwikLogo width={16} height={16} /> : <QwikLogo />}
    </div>
  </svg>
);
