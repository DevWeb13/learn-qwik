import { component$, useSignal, $, useStyles$ } from "@builder.io/qwik";
import CopySvg from "~/assets/svg/copySvg/copySvg";
import ValidSvg from "~/assets/svg/validSvg/validSvg";

interface CopyButtonProps {
  code: string;
  absolute?: boolean;
}

export const CopyButton = component$<CopyButtonProps>(
  ({ code, absolute = false }) => {
    useStyles$(`
 

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
  
  .code_block_copyButton:hover {
    color: var(--ds-gray-1000);
    background: var(--ds-gray-200);
  }
  `);
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
    return (
      <div
        class={`${absolute ? "code_block_copy_button_wrapper absolute right-4 top-4" : "flex gap-[4px]"}`}
      >
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
    );
  },
);
