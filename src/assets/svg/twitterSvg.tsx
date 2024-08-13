import { component$ } from "@builder.io/qwik";

interface TwitterSvgProps {
  width?: number;
  height?: number;
}

export const TwitterSvg = component$<TwitterSvgProps>(
  ({ height = 16, width = 16 }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 25 25"
        fill="none"
      >
        <rect width={width} height={height} />
        <path
          d="M14.4821 11.6218L21.0389 4H19.4852L13.7919 10.6179L9.24467 4H4L10.8763 14.0074L4 22H5.55385L11.5661 15.0113L16.3683 22H21.613L14.4821 11.6218ZM6.11371 5.16972H8.50031L19.4859 20.8835H17.0993L6.11371 5.16972Z"
          fill="white"
        />
      </svg>
    );
  },
);
