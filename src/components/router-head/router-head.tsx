import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

// import * as pwaHead from "@qwikdev/pwa/head";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const hasCanonical = head.links.some((link) => link.rel === "canonical");

  return (
    <>
      <title>{head.title}</title>

      {!hasCanonical && <link rel="canonical" href={loc.url.href} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          type={
            typeof s.props?.type === "string" ? s.props.type : undefined
          }
          dangerouslySetInnerHTML={s.script}
        />
      ))}
    </>
  );
});
