import { component$, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  useStyles$(`
    .dark-plus {
      padding: 18px 15px;
      border-radius: 0.375rem;
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246 / var(--tw-bg-opacity));
    }

    
  
   
  `);
  return (
    <pre
      tabIndex={0}
      data-language="bash"
      data-theme="default"
      class="dark-plus"
    >
      <code data-language="bash" data-theme="default" style="display:grid">
        <span data-line="">
          <span style="color:var(--ds-gray-900); font-weight: bolder;">
            qwik-dashboard
          </span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">README.md</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">package.json</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">public</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">favicon.svg</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">src</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">components</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">router-head</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)"> </span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">router-head.tsx</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">entry.ssr.tsx</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">global.css</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">root.tsx</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">routes</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--ds-gray-900)"> </span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">index.tsx</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--ds-gray-900)"> </span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">layout.tsx</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">│</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--ds-gray-900)"> </span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">service-worker.ts</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">├──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">tsconfig.json</span>
        </span>
        <span data-line="">
          <span style="color:var(--ds-gray-900)">└──</span>
          <span style="color:#D4D4D4"> </span>
          <span style="color:var(--shiki-token-string)">vite.config.ts</span>
        </span>
      </code>
    </pre>
  );
});
