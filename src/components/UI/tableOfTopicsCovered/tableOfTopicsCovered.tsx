// src/components/UI/tableOfTopicsCovered/tableOfTopicsCovered.tsx

import { component$ } from "@builder.io/qwik";
import { BraceAndSemiColonSvg } from "~/assets/svg/braceAndSemiColonSvg/braceAndSemiColonSvg";
import { FileSvg } from "~/assets/svg/fileSvg/fileSvg";
import { PenSvg } from "~/assets/svg/penSvg/penSvg";
import { TSvg } from "~/assets/svg/tSvg/tSvg";
import { ImageIconSvg } from "~/assets/svg/imageIconSvg/imageIconSvg";
import { ValidIconWithCircleSvg } from "~/assets/svg/validIconWithCircleSvg/validIconWithCircleSvg";
import { RelationPointSvg } from "~/assets/svg/relationPointSvg/relationPointSvg";
import { FolderSvg } from "~/assets/svg/folderSvg/folderSvg";
import { NestedFolderSvg } from "~/assets/svg/nestedFolderSvg/nestedFolderSvg";
import { LinesAndArrowBackSvg } from "~/assets/svg/linesAndArrowBackSvg/linesAndArrowBackSvg";
import { QwikLogo } from "~/assets/svg/qwikLogo/qwikLogo";
import { LinkSvg } from "~/assets/svg/linkSvg/linkSvg";
import { PlanePaperSvg } from "~/assets/svg/planePaperSvg/planePaperSvg";
import { GithubSvg } from "~/assets/svg/githubSvg/githubSvg";
import { VercelSvg } from "~/assets/svg/vercelSvg";
import { PostgresSvg } from "~/assets/svg/postgresSvg";
import { DatabaseSvg } from "~/assets/svg/databaseSvg";
import { TableOfTopicsCoveredHeader } from "./tableOfTopicsCoveredHeader";
import { ServerSvg } from "~/assets/svg/serverSvg";
import { WaterfallSvg } from "~/assets/svg/waterfallSvg";
import { TwoConnectedPointsSvg } from "~/assets/svg/twoConnectedPointsSvg";
import { ClockSvg } from "~/assets/svg/clockSvg";

type TopicType = {
  title: string;
  icon: string;
};

interface TableOfTopicsCoveredProps {
  topics: TopicType[];
}

export default component$<TableOfTopicsCoveredProps>(({ topics }) => {
  const displayIcon = (icon: string) => {
    switch (icon) {
      case "clock":
        return <ClockSvg />;
      case "twoConnectedPoints":
        return <TwoConnectedPointsSvg />;
      case "waterfall":
        return <WaterfallSvg />;
      case "server":
        return <ServerSvg />;
      case "database":
        return <DatabaseSvg />;
      case "postgres":
        return <PostgresSvg />;
      case "vercel":
        return <VercelSvg height={16} />;
      case "github":
        return <GithubSvg />;
      case "planePaper":
        return <PlanePaperSvg />;
      case "link":
        return <LinkSvg />;
      case "qwikLogo":
        return <QwikLogo id="1" width={16} height={16} />;
      case "linesAndArrowBack":
        return <LinesAndArrowBackSvg />;
      case "nestedFolder":
        return <NestedFolderSvg />;
      case "folder":
        return <FolderSvg />;
      case "relationPoint":
        return <RelationPointSvg />;
      case "validIconWithCircle":
        return <ValidIconWithCircleSvg />;
      case "imageIcon":
        return <ImageIconSvg />;
      case "t":
        return <TSvg />;
      case "braceAndSemiColon":
        return <BraceAndSemiColonSvg />;
      case "pen":
        return <PenSvg />;
      case "file":
        return <FileSvg width={16} height={16} strokeWidth={2} />;
      default:
        return null;
    }
  };

  return (
    <div class="not-prose in-this-chapter_wrapper__yrXTP mb-4 rounded-[12px] md:mx-[-64px] md:my-12 md:bg-[#fafafa] md:p-4 md:px-[64px] md:py-12">
      <TableOfTopicsCoveredHeader />
      <div class="bg-vercel-100 mx-auto mt-4 flex w-full max-w-[960px] flex-col rounded-md px-4 py-2 shadow-md md:mt-8">
        {topics.map((topic, index) => (
          <div
            class="border-gray-alpha-400 flex gap-4 border-b px-4 py-3 last-of-type:border-0"
            key={index}
          >
            <div class="mt-1 flex-shrink-0 text-gray-900">
              {displayIcon(topic.icon)}
            </div>
            <p
              class="text_wrapper in-this-chapter_content__QPwZX"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 0.875rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
            >
              {topic.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
});
