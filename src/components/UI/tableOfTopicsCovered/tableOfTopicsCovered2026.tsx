// src/components/UI/tableOfTopicsCovered/tableOfTopicsCovered.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { TableOfTopicsCoveredHeader } from "./tableOfTopicsCoveredHeader";

type TopicType = {
  title: string;
  emoji: string;
  anchor?: string;
};

interface TableOfTopicsCoveredProps {
  topics: TopicType[];
}

export default component$<TableOfTopicsCoveredProps>(({ topics }) => {
  return (
    <div class="not-prose  mb-4 w-full rounded-xl  md:my-12 md:bg-[#fafafa] md:p-4  md:py-12">
      <TableOfTopicsCoveredHeader />
      <div class="bg-vercel-100 mx-auto mt-4 flex w-full max-w-240 flex-col rounded-md px-4 py-2 shadow-md md:mt-8">
        {topics.map((topic, index, array) => (
          <>
            <Link
              href={"#" + topic.anchor}
              class=" flex gap-4  px-4 py-3 "
              key={index}
            >
              <div class=" text-xl">{topic.emoji}</div>
              <p class="text_wrapper in-this-chapter_content__QPwZX">
                {topic.title}
              </p>
            </Link>

            {index !== array.length - 1 && (
              <div class="flex h-0.5 w-full bg-gray-200" />
            )}
          </>
        ))}
      </div>
    </div>
  );
});
