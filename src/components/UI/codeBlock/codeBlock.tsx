// src/components/UI/codeBlock/codeBlock.tsx

import { component$, useStore, useStyles$, useTask$ } from "@builder.io/qwik";
import { CodeBlockHeader } from "./codeBlockHeader";

import type { JSX } from "@builder.io/qwik/jsx-runtime";

interface CodeBlockProps {
  icon: JSX.Element;
  text: string;
  code: string;
}

export default component$<CodeBlockProps>(({ icon, text, code }) => {
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
    --shiki-color-text: var(--ds-gray-1000);
    --shiki-color-background: transparent;
    --shiki-token-constant: var(--ds-blue-900);
    --shiki-token-string: var(--ds-green-900);
    --shiki-token-comment: var(--ds-gray-900);
    --shiki-token-keyword: var(--ds-pink-900);
    --shiki-token-parameter: var(--ds-amber-900);
    --shiki-token-function: var(--ds-purple-900);
    --shiki-token-string-expression: var(--ds-green-900);
    --shiki-token-punctuation: var(--ds-gray-1000);
    --shiki-token-link: var(--ds-green-900);
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

  const store = useStore({
    codeHighLight: "" as string,
  });

  useTask$(async () => {
    const { getHighlighterCore } = await import("shiki/core");
    const highlighter = await getHighlighterCore({
      themes: [await import("shiki/themes/github-light.mjs")],
      langs: [await import("shiki/langs/bash.mjs")],
      loadWasm: await import("shiki/wasm"),
    });
    const codeHighLight = highlighter.codeToHtml(code, {
      lang: "bash",
      theme: "github-light",
    });
    store.codeHighLight = codeHighLight;
  });

  return (
    <div
      class={
        "code_block_wrapper code_block_hasFileName not-prose" +
        (text === "Terminal" ? " code_block_hideLineNumbers" : "")
      }
    >
      <CodeBlockHeader icon={icon} text={text} code={code} />
      <div
        dangerouslySetInnerHTML={store.codeHighLight}
        class="code_block_pre"
      ></div>
    </div>
  );
});
