import { component$, useStyles$, $, useSignal } from "@builder.io/qwik";
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import CopySvg from "~/assets/svg/copySvg/copySvg";
import ValidSvg from "~/assets/svg/validSvg/validSvg";

interface CodeBlockHeaderProps {
  icon: JSX.Element;
  text: string;
  code: string;
}

export const CodeBlockHeader = component$<CodeBlockHeaderProps>(
  ({ icon, text, code }) => {
    const copySuccess = useSignal(false); // État pour le feedback visuel

    const copyCode = useSignal(code);

    const copyToClipboard = $(() => {
      navigator.clipboard
        .writeText(copyCode.value)
        .then(() => {
          console.log("Texte copié avec succès !");

          copySuccess.value = true; // Affiche l'icône de validation
          console.log("copySuccess.value", copySuccess.value);

          // Retour à l'icône de copie après 2 secondes
          setTimeout(() => {
            copySuccess.value = false;
            console.log("copySuccess.value", copySuccess.value);
          }, 2000);
        })
        .catch((err) => {
          console.error("Erreur lors de la copie : ", err);
        });
    });

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

  .code_block_actions {
    display: flex;
    gap: 4px;
  }

  .code_block_copyButton {
    height: 32px;
    width: 32px;
    border-radius: var(--geist-radius);
    border: none;
    color: var(--ds-gray-900);
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    position: relative;
    transition: background .2s ease;
  }
    `);
    return (
      <div class="code_block_header">
        <div class="code_block_fileName">
          <div aria-hidden="true" class="code_block_iconWrapper">
            {icon}
          </div>
          <span class="code_block_filenameP">{text}</span>
        </div>
        <div class="code_block_actions">
          <button
            aria-label="Copy code"
            class="code_block_copyButton"
            type="button"
            onClick$={copyToClipboard}
            style={`display: ${copySuccess.value ? "none" : "flex"};`}
          >
            <CopySvg />
          </button>
          <div
            aria-label="Copy code"
            class="code_block_copyButton"
            style={`display: ${copySuccess.value ? "flex" : "none"};`}
            onClick$={copyToClipboard}
          >
            <ValidSvg />
          </div>
        </div>
      </div>
    );
  },
);
