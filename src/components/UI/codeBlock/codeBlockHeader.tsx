import { component$, useStyles$ } from "@builder.io/qwik";

import { TerminalSvg } from "~/assets/svg/terminalSvg/terminalSvg";
import { CopyButton } from "./copyButton";
import { JavascriptSvg } from "~/assets/svg/javascriptSvg/javascriptSvg";
import { TypescriptSvg } from "~/assets/svg/typescriptSvg/typescriptSvg";
import { FileSvg } from "~/assets/svg/fileSvg/fileSvg";
import { JsonSvg } from "~/assets/svg/jsonSvg";

interface CodeBlockHeaderProps {
  text: string;
  code: string;
  copyButton: boolean;
  icon:
    | "terminal"
    | "javascript"
    | "typescript"
    | "html"
    | "css"
    | "bash"
    | "json";
}

export const CodeBlockHeader = component$<CodeBlockHeaderProps>(
  ({ text, code, copyButton, icon }) => {
    useStyles$(`
  
  .code_block_header {
    padding: 0 12px 0 16px;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px solid var(--ds-gray-400);
    display: flex;
    height: 48px;
    align-items: center;
    background: var(--ds-background-200);
  }

  .code_block_fileName {
    color: var(--ds-gray-900);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    min-width: 0;
    margin: 0 auto 0 0;
  }

  .code_block_iconWrapper {
    width: 16px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .with_icon_icon {
    width: var(--geist-icon-size);
    height: var(--geist-icon-size);
    flex-shrink: 0;
  }


    `);

    const displayIcon = () => {
      switch (icon) {
        case "json":
          return <JsonSvg />;
        case "terminal":
          return <TerminalSvg />;
        case "javascript":
          return <JavascriptSvg />;
        case "typescript":
          return <TypescriptSvg />;
        case "css":
          return <FileSvg />;
        default:
          return null;
      }
    };

    return (
      <div class="code_block_header">
        <div class="code_block_fileName">
          <div aria-hidden="true" class="code_block_iconWrapper">
            {displayIcon()}
          </div>
          <span class="code_block_filename">{text}</span>
        </div>
        {copyButton && <CopyButton code={code} />}
      </div>
    );
  },
);
