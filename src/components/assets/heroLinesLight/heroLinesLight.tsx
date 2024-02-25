import { component$ } from "@builder.io/qwik";
import styles from "./heroLinesLight.module.css";

export default component$(() => {
  return (
    <svg
      class={`${styles.hero_linesLight} absolute top-0`}
      fill="none"
      height="215"
      viewBox="0 0 460 215"
      width="460"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 30H460"
        opacity="0.12"
        stroke="url(#paint0_linear_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M58 154H402"
        opacity="0.12"
        stroke="url(#paint1_linear_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M138.5 215L138.5 -2.38419e-06"
        opacity="0.12"
        stroke="url(#paint2_linear_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M150 30C150 27.6266 149.296 25.3065 147.978 23.3332C146.659 21.3598 144.785 19.8217 142.592 18.9134C140.399 18.0052 137.987 17.7676 135.659 18.2306C133.331 18.6936 131.193 19.8365 129.515 21.5147C127.836 23.1929 126.694 25.3311 126.231 27.6589C125.768 29.9867 126.005 32.3995 126.913 34.5922C127.822 36.7849 129.36 38.6591 131.333 39.9776C133.307 41.2962 135.627 42 138 42"
        opacity="0.12"
        stroke="url(#paint3_angular_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M230.5 186L230.5 18"
        opacity="0.12"
        stroke="url(#paint4_linear_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M322.5 215L322.5 -3.45707e-06"
        opacity="0.12"
        stroke="url(#paint5_linear_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <path
        d="M310 154C310 156.373 310.704 158.693 312.022 160.667C313.341 162.64 315.215 164.178 317.408 165.087C319.601 165.995 322.013 166.232 324.341 165.769C326.669 165.306 328.807 164.164 330.485 162.485C332.164 160.807 333.306 158.669 333.769 156.341C334.232 154.013 333.995 151.601 333.087 149.408C332.178 147.215 330.64 145.341 328.667 144.022C326.693 142.704 324.373 142 322 142"
        opacity="0.12"
        stroke="url(#paint6_angular_24_5808)"
        stroke-dasharray="2 2"
      ></path>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_24_5808"
          x1="0"
          x2="460"
          y1="30"
          y2="30"
        >
          <stop stop-opacity="0"></stop>
          <stop offset="0.115"></stop>
          <stop offset="0.893678"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_24_5808"
          x1="58"
          x2="402"
          y1="154"
          y2="154"
        >
          <stop stop-opacity="0"></stop>
          <stop offset="0.115"></stop>
          <stop offset="0.893678"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_24_5808"
          x1="138.5"
          x2="138.5"
          y1="215"
          y2="-1.2815e-05"
        >
          <stop stop-opacity="0"></stop>
          <stop offset="0.333333"></stop>
          <stop offset="0.666667"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(138 30) rotate(90) scale(12)"
          gradientUnits="userSpaceOnUse"
          id="paint3_angular_24_5808"
          r="1"
        >
          <stop></stop>
          <stop offset="0.5" stop-opacity="0.34"></stop>
          <stop offset="1"></stop>
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint4_linear_24_5808"
          x1="230.5"
          x2="230.5"
          y1="186"
          y2="18"
        >
          <stop stop-opacity="0"></stop>
          <stop offset="0.333333"></stop>
          <stop offset="0.666667"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint5_linear_24_5808"
          x1="322.5"
          x2="322.5"
          y1="215"
          y2="-1.2815e-05"
        >
          <stop stop-opacity="0"></stop>
          <stop offset="0.333333"></stop>
          <stop offset="0.666667"></stop>
          <stop offset="1" stop-opacity="0"></stop>
        </linearGradient>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(322 154) rotate(-90) scale(12)"
          gradientUnits="userSpaceOnUse"
          id="paint6_angular_24_5808"
          r="1"
        >
          <stop></stop>
          <stop offset="0.5" stop-opacity="0.34"></stop>
          <stop offset="1"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
});
