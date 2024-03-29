// src/components/UI/codeBlock/codeBlock.tsx

import {
  component$,
  useSignal,
  useStyles$,
  // useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { CodeBlockHeader } from "./codeBlockHeader";

interface CodeBlockProps {
  text: string;
  code: string;
}

export default component$<CodeBlockProps>(({ text, code }) => {
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

 

  `);

  const codeSig = useSignal("");

  // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(
  //   async function createHighlightedCode() {
  //     let modifiedCode: string = code;

  //     let partsOfCode = modifiedCode.split(splitCommentStart);
  //     if (partsOfCode.length > 1) {
  //       modifiedCode = partsOfCode[1];
  //     }

  //     partsOfCode = modifiedCode.split(splitCommentEnd);
  //     if (partsOfCode.length > 1) {
  //       modifiedCode = partsOfCode[0];
  //     }

  //     const str = await codeToHtml(modifiedCode, {
  //       lang: language,
  //       themes: {
  //         light: "poimandres",
  //         dark: "poimandres",
  //       },
  //     });
  //     codeSig.value = str.toString();
  //   },
  //   { strategy: "document-idle" },
  // );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const { getHighlighterCore } = await import("shiki/core-unwasm.mjs");
    const highlighter = await getHighlighterCore({
      themes: [import("shiki/themes/github-light.mjs")],
      langs: [import("shiki/langs/bash.mjs")],
      // loadWasm: await import("shiki/wasm"),
    });
    const codeHighLight = highlighter.codeToHtml(code, {
      lang: "bash",
      theme: "github-light",
    });
    codeSig.value = codeHighLight;
  });

  return (
    <div
      class={
        "code_block_wrapper code_block_hasFileName not-prose" +
        (text === "Terminal" ? " code_block_hideLineNumbers" : "")
      }
    >
      <CodeBlockHeader text={text} code={code} />
      <div dangerouslySetInnerHTML={codeSig.value} class="code_block_pre"></div>
    </div>
  );
});
