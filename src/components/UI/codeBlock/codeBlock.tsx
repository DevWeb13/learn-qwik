// src/components/UI/codeBlock/codeBlock.tsx

import { component$, useSignal, useStyles$, useTask$ } from "@builder.io/qwik";
import { CodeBlockHeader } from "./codeBlockHeader";
import { CopyButton } from "./copyButton";

interface CodeBlockProps {
  code: string;
  text?: string;
  icon?: "terminal" | "javascript" | "typescript" | "html" | "css" | "bash";
  language?: "javascript" | "typescript" | "css" | "bash" | "tsx";
  decorations?: any[];
  copyButton?: boolean;
  hideLineNumbers?: boolean;
  displayCodeBlockHeader?: boolean;
  displayCopyButtonAbsolute?: boolean;
}

export default component$<CodeBlockProps>(
  ({
    code,
    text = "",
    icon = "terminal",
    language = "bash",
    decorations = [],
    copyButton = true,
    hideLineNumbers = false,
    displayCodeBlockHeader = true,
    displayCopyButtonAbsolute = false,
  }) => {
    useStyles$(`

.code_block_wrapper {
    position: relative;
    border: 1px solid var(--ds-gray-400);
    margin: 16px 0;
    border-radius: 6px;
    overflow: hidden;
  }

  .code_block_pre {
   
    padding: var(--padding) 0;
    margin: 0;
    overflow-x: auto;
    background: var(--ds-background-100);
    counter-reset: line;

  }

  .code_block_wrapper.code_block_hasFileName .code_block_pre {
    border-radius: 0 0 6px 6px;
    background: var(--ds-background-100);
  }

  .code_block_code {
    display: grid;
    color: var(--ds-gray-1000);
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 13px!important;
    line-height: 20px;
    font-family: var(--font-mono);
    font-feature-settings: "ss09",none;
    font-variant-ligatures: none;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    hyphens: none;
  }

  .code_block_pre .highlighted_line, .code_block_pre .line {
    height: 20px;
    position: relative;
    padding: 0 var(--padding);
  }

  .code_block_pre .highlighted_line:before, .code_block_pre .line:before {
    display: inline-block;
    counter-increment: line;
    width: 16px;
    font-size: 13px;
    color: var(--ds-gray-600);
    font-family: var(--font-mono);
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;
    text-align: right;
    flex-shrink: 0;
    margin-right: var(--padding);
    z-index: 1;
    content: counter(line);
  }

  .code_block_hideLineNumbers .code_block_pre .highlighted_line:before, .code_block_hideLineNumbers .code_block_pre .line:before {
    display: none;
    color: red;
  }

  @supports (content:"visual text"/"alt text"){
    .code_block_pre .highlighted_line:before, .code_block_pre .line:before {
      content: counter(line) /"";
    }
  }

  .code_block_pre .newLine {
  
    background: #e0f0ff;
    padding: 5.7px 18px;
    border-left: 2px solid #0070f3;
    position: relative;
    
  }

  code {
    font-size: 13px;
  }

  .code_block_with_copy_button_absolute .code_block_copy_button_wrapper {
    opacity: 0;
  }

  .code_block_with_copy_button_absolute:hover .code_block_copy_button_wrapper {
    opacity: 1;
  }

 

  `);

    const codeSig = useSignal("");

    useTask$(async function createHighlightedCode() {
      const { getHighlighterCore } = await import("shiki/core-unwasm.mjs");
      const highlighter = await getHighlighterCore({
        themes: [
          // or a dynamic import if you want to do chunk splitting
          import("shiki/themes/github-light.mjs"),
          import("shiki/themes/github-dark.mjs"),
        ],
        langs: [
          import("shiki/langs/bash.mjs"),
          import("shiki/langs/javascript.mjs"),
          import("shiki/langs/typescript.mjs"),
          import("shiki/langs/tsx.mjs"),
          import("shiki/langs/css.mjs"),
        ],
        // loadWasm: import("shiki/wasm"),
      });
      const codeHighLight = highlighter.codeToHtml(code, {
        lang: language,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        decorations: decorations,
      });
      codeSig.value = codeHighLight;
    });

    // // eslint-disable-next-line qwik/no-use-visible-task
    // useVisibleTask$(async () => {
    //   const { getHighlighterCore } = await import("shiki/core-unwasm.mjs");
    //   const highlighter = await getHighlighterCore({
    //     themes: [
    //       // or a dynamic import if you want to do chunk splitting
    //       import("shiki/themes/github-light.mjs"),
    //       import("shiki/themes/github-dark.mjs"),
    //     ],
    //     langs: [
    //       import("shiki/langs/bash.mjs"),
    //       import("shiki/langs/javascript.mjs"),
    //       import("shiki/langs/typescript.mjs"),
    //       import("shiki/langs/tsx.mjs"),
    //       import("shiki/langs/css.mjs"),
    //     ],
    //     // loadWasm: import("shiki/wasm"),
    //   });
    //   const codeHighLight = highlighter.codeToHtml(code, {
    //     lang: language,
    //     themes: {
    //       light: "github-light",
    //       dark: "github-dark",
    //     },
    //     decorations: decorations,
    //   });
    //   codeSig.value = codeHighLight;
    // });

    return (
      <div
        class={
          "code_block_wrapper code_block_hasFileName not-prose" +
          (hideLineNumbers ? " code_block_hideLineNumbers" : "") +
          (displayCopyButtonAbsolute
            ? " code_block_with_copy_button_absolute"
            : "")
        }
      >
        {displayCodeBlockHeader && (
          <CodeBlockHeader
            text={text}
            code={code}
            copyButton={copyButton}
            icon={icon}
          />
        )}
        {displayCopyButtonAbsolute && <CopyButton code={code} absolute />}
        <div dangerouslySetInnerHTML={codeSig.value} class="code_block_pre" />
      </div>
    );
  },
);
