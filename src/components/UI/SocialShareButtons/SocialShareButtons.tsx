import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  const href = loc.url.href;
  console.log(loc);
  useStyles$(`
  .social-share-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .share-text {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .social-share-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .social-share-buttons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
  }
  
  .social-share-buttons a:hover {
    background-color: #e0e0e0;
  }
  
  .social-share-buttons svg {
    width: 24px;
    height: 24px;
  }
  
  `);
  return (
    <div class="social-share-container">
      <p class="share-text">Share this page:</p>
      <div class="social-share-buttons">
        <a
          href={"https://www.facebook.com/sharer/sharer.php?u=" + href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.795c0-3.1 1.894-4.787 4.66-4.787 1.325 0 2.465.099 2.797.143v3.245l-1.918.001c-1.504 0-1.794.714-1.794 1.761v2.308h3.587l-.467 3.295h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
              fill="#1877F2"
            />
            <path
              d="M16.805 24v-9.294h3.12l.467-3.295h-3.587V8.814c0-1.048.29-1.761 1.794-1.761l1.918-.001V3.806c-.332-.044-1.472-.143-2.797-.143-2.766 0-4.66 1.688-4.66 4.787v2.615H9.692v3.295h3.128V24h3.985z"
              fill="#fff"
            />
          </svg>
        </a>
        <a
          href={
            "https://twitter.com/intent/tweet?url=" +
            href +
            "&text=Discover%20Qwik,%20a%20new%20way%20to%20build%20web%20applications!"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Twitter"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.643 4.937c-.835.37-1.73.62-2.675.732.961-.576 1.697-1.488 2.048-2.574-.9.534-1.897.922-2.958 1.13A5.12 5.12 0 0016.432 3c-2.828 0-5.118 2.29-5.118 5.118 0 .4.045.79.131 1.165C7.728 8.943 4.1 7.1 1.67 4.148a5.104 5.104 0 00-.694 2.572c0 1.775.904 3.343 2.278 4.264a5.099 5.099 0 01-2.318-.64v.064c0 2.478 1.762 4.546 4.098 5.016a5.13 5.13 0 01-2.312.088c.652 2.034 2.542 3.517 4.779 3.555a10.285 10.285 0 01-6.37 2.194c-.413 0-.82-.024-1.22-.071A14.52 14.52 0 007.936 21c9.4 0 14.547-7.791 14.547-14.548 0-.222-.005-.444-.015-.665A10.396 10.396 0 0024 4.557a10.13 10.13 0 01-2.357 2.377z"
              fill="#1DA1F2"
            />
          </svg>
        </a>
        <a
          href={
            "https://www.linkedin.com/shareArticle?mini=true&url=" +
            href +
            "&title=Discover%20Qwik,%20a%20new%20way%20to%20build%20web%20applications!"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
        >
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0077B5"
          >
            <title>LinkedIn</title>
            <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.23 0zM7.12 20.45H3.56V8.55h3.56v11.9zM5.34 7.1c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7H9.3V8.55h3.42v1.63h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.62h-.02z" />
          </svg>
        </a>
        <a
          href={
            "https://pinterest.com/pin/create/button/?url=" +
            href +
            "&description=Discover%20Qwik,%20a%20new%20way%20to%20build%20web%20applications!"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Pinterest"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.373 0 0 5.373 0 12c0 4.99 3.657 9.128 8.438 10.291-.117-.875-.223-2.218.047-3.174.242-.832 1.556-5.309 1.556-5.309s-.395-.79-.395-1.958c0-1.834 1.064-3.204 2.392-3.204 1.128 0 1.674.847 1.674 1.861 0 1.136-.722 2.835-1.094 4.415-.312 1.314.664 2.386 1.974 2.386 2.368 0 3.996-3.104 3.996-7.576 0-3.131-2.113-5.48-5.942-5.48-4.334 0-7.036 3.233-7.036 6.872 0 1.243.364 2.125.935 2.803.266.315.303.443.207.802-.073.297-.24 1.012-.311 1.298-.1.396-.409.535-.757.39-2.108-.863-3.079-3.177-3.079-5.761 0-4.301 3.634-9.447 10.828-9.447 5.783 0 9.573 4.191 9.573 8.682 0 5.925-3.3 9.807-8.162 9.807-1.635 0-3.173-.867-3.698-1.896l-1.007 3.826c-.363 1.383-1.347 3.116-2.008 4.165A11.976 11.976 0 0012 24C18.627 24 24 18.627 24 12S18.627 0 12 0z"
              fill="#E60023"
            />
          </svg>
        </a>
      </div>
    </div>
  );
});
