import LearnQwikLogo from "~/assets/img/android-chrome-192x192.png?jsx";

interface FeFloodDuplicateProps {
  result: string;
}

const StopBlockTwoDuplicate = () => (
  <>
    <stop stop-color="white" stop-opacity="0"></stop>
    <stop offset="0.119792" stop-color="white" stop-opacity="0"></stop>
    <stop offset="0.291667" stop-color="white" stop-opacity="0.96"></stop>
    <stop offset="0.505208" stop-color="white" stop-opacity="0"></stop>
    <stop offset="0.752526" stop-color="white" stop-opacity="0"></stop>
    <stop offset="0.911458" stop-color="white"></stop>
    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
  </>
);

const StopBlockOneDuplicate = () => (
  <>
    <stop stop-opacity="0.03"></stop>
    <stop offset="0.119792" stop-opacity="0.1"></stop>
    <stop offset="0.291667" stop-opacity="0"></stop>
    <stop offset="0.505208" stop-opacity="0.02"></stop>
    <stop offset="0.734375" stop-opacity="0.21"></stop>
    <stop offset="0.752526" stop-opacity="0.5"></stop>
    <stop offset="0.852261" stop-opacity="0.15"></stop>
    <stop offset="1" stop-opacity="0"></stop>
  </>
);

const FeFloodDuplicate = ({ result }: FeFloodDuplicateProps) => (
  <>
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
    <feBlend in2="shape" mode="normal" result={result}></feBlend>
  </>
);

interface BookSvgProps {
  small?: boolean;
  id: string;
}

export const BookSvg = ({ small, id }: BookSvgProps) =>
  small ? (
    <>
      <svg
        fill="none"
        height="40"
        viewBox="0 0 32 40"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#filter0_iii_${id})`}>
          <g clip-path={`url(#clip0_${id})`}>
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
              fill="#303030"
            ></path>
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
              fill={`url(#paint0_linear_${id})`}
            ></path>
            <rect
              fill={`url(#paint1_linear_${id})`}
              height="40"
              opacity="0.2"
              width="8"
            ></rect>
            <rect
              fill={`url(#paint2_linear_${id})`}
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
              fill={`url(#paint3_linear_${id})`}
              fill-opacity="0.7"
              height="40"
              transform="translate(6)"
              width="26"
            ></rect>
            <g filter={`url(#filter1_d_${id})`}>
              <path
                d="M20 -8C20 -8.55228 20.4477 -9 21 -9H27C27.5523 -9 28 -8.55228 28 -8V6.79623C28 7.65539 26.9881 8.11457 26.3405 7.54881L24.6585 6.07619C24.2815 5.74629 23.7185 5.74629 23.3415 6.07619L21.6585 7.54881C21.0119 8.11457 20 7.65539 20 6.79623V-8Z"
                fill="#3291FF"
              ></path>
            </g>
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
            id={`filter0_iii_${id}`}
            width="36"
            x="0"
            y="0"
          >
            <FeFloodDuplicate result={`effect1_innerShadow_${id}`} />

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
              in2={`effect1_innerShadow_${id}`}
              mode="normal"
              result={`effect2_innerShadow_${id}`}
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
              in2={`effect2_innerShadow_${id}`}
              mode="normal"
              result={`effect3_innerShadow_${id}`}
            ></feBlend>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_${id}`}
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
            id={`paint1_linear_${id}`}
            x1="0"
            x2="8"
            y1="17.75"
            y2="17.75"
          >
            <StopBlockOneDuplicate />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint2_linear_${id}`}
            x1="0"
            x2="8"
            y1="17.75"
            y2="17.75"
          >
            <StopBlockTwoDuplicate />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint3_linear_${id}`}
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
            id={`paint4_linear_${id}`}
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
            <stop offset="0.796875" stop-color="white" stop-opacity="0"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint5_linear_${id}`}
            x1="20.9375"
            x2="24.5574"
            y1="21.0625"
            y2="25.3992"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <clipPath id={`clip0_${id}`}>
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H30C31.1046 0 32 0.895431 32 2V38C32 39.1046 31.1046 40 30 40H4C1.79086 40 0 38.2091 0 36V4Z"
              fill="white"
            ></path>
          </clipPath>
          <clipPath id={`clip1_${id}`}>
            <rect
              fill="white"
              height="16"
              transform="translate(11 12)"
              width="16"
            ></rect>
          </clipPath>
        </defs>
      </svg>
      <div class="absolute left-1.5 top-2.5 w-[24px]">
        <LearnQwikLogo alt="Learn Qwik Logo" />
      </div>
    </>
  ) : (
    <>
      <svg
        fill="none"
        height="181"
        viewBox="0 0 160 181"
        width="160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter={`url(#filter0_iii_${id})`}>
          <g clip-path={`url(#clip0_${id})`}>
            <path
              d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
              fill="#303030"
            ></path>
            <path
              d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
              fill={`url(#paint0_linear_${id})`}
            ></path>
            <rect
              fill={`url(#paint1_linear_${id})`}
              height="320"
              opacity="0.2"
              width="24"
              y="1"
            ></rect>
            <rect
              fill={`url(#paint2_linear_${id})`}
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
              fill={`url(#paint3_linear_${id})`}
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
        <g filter={`url(#filter1_d_${id})`}>
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
            id={`filter0_iii_${id}`}
            width="164"
            x="0"
            y="1"
          >
            <FeFloodDuplicate result={`effect1_innerShadow_${id}`} />

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
              in2={`effect1_innerShadow_${id}`}
              mode="normal"
              result={`effect2_innerShadow_${id}`}
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
              in2={`effect2_innerShadow_${id}`}
              mode="normal"
              result={`effect3_innerShadow_${id}`}
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="s-rGB"
            filterUnits="userSpaceOnUse"
            height="25.2605"
            id={`filter1_d_${id}`}
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
              result={`effect1_dropShadow_${id}`}
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2={`effect1_dropShadow_${id}`}
              mode="normal"
              result="shape"
            ></feBlend>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint0_linear_${id}`}
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
            id={`paint1_linear_${id}`}
            x1="0"
            x2="24"
            y1="143"
            y2="143"
          >
            <StopBlockOneDuplicate />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint2_linear_${id}`}
            x1="0"
            x2="24"
            y1="143"
            y2="143"
          >
            <StopBlockTwoDuplicate />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={`paint3_linear_${id}`}
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
            id={`paint4_linear_${id}`}
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
            id={`paint5_linear_${id}`}
            x1="134.822"
            x2="134.791"
            y1="145.4"
            y2="153.625"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <clipPath id={`clip0_${id}`}>
            <path
              d="M0 7.00001C0 3.6863 2.68629 1 6 1H158C159.105 1 160 1.89543 160 3V179C160 180.105 159.105 181 158 181H6C2.6863 181 0 178.314 0 175V7.00001Z"
              fill="white"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <div class="absolute bottom-3 right-3 w-[40px]">
        <LearnQwikLogo alt="Learn Qwik Logo" />
      </div>
    </>
  );
