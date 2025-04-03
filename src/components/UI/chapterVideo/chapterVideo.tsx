import { component$ } from "@builder.io/qwik";

interface ChapterVideoProps {
  videoId: string;
  title?: string;
  description?: string;
}

export const ChapterVideo = component$(
  ({ videoId, title, description }: ChapterVideoProps) => {
    return (
      <div class="mt-10">
        <h2 class="mb-2 text-xl font-semibold">
          {title || "📺 Chapter video"}
        </h2>
        <p class="mb-4">
          {description && <>{description} </>}
          This chapter is presented by{" "}
          <a
            href="https://www.youtube.com/@RumNCode"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 underline hover:text-blue-800"
          >
            RumNCode 🥃
          </a>
          , a <span class="font-medium">Qwik Hero</span> from the official
          Discord community.
        </p>
        <div class="aspect-video w-full overflow-hidden rounded shadow-md">
          <iframe
            class="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Learn Qwik with RumNCode 🥃"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
      </div>
    );
  },
);
