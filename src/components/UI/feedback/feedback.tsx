import {
  $,
  component$,
  useSignal,
  useStyles$,
  useTask$,
} from "@builder.io/qwik";
import {
  useGetChapterFeedback,
  useGetChapterFeedbackCounts,
  useSaveChapterFeedback,
} from "~/routes/learn/layout";

type FeedbackReaction = "love" | "happy" | "sad" | "cry";

interface FeedbackProps {
  courseVersion: "Legacy" | "2026";
  chapterNumber: number;
}

export default component$<FeedbackProps>(({ courseVersion, chapterNumber }) => {
  const saveChapterFeedback = useSaveChapterFeedback();
  const chapterFeedback = useGetChapterFeedback();
  const chapterFeedbackCounts = useGetChapterFeedbackCounts();

  const selectedReaction = useSignal<FeedbackReaction | null>(null);
  const message = useSignal("");
  const isFormOpen = useSignal(false);
  const showSuccessToast = useSignal(false);

  const counts =
    chapterFeedbackCounts.value.courseVersion === courseVersion &&
    chapterFeedbackCounts.value.chapterNumber === chapterNumber
      ? {
          love: chapterFeedbackCounts.value.love,
          happy: chapterFeedbackCounts.value.happy,
          sad: chapterFeedbackCounts.value.sad,
          cry: chapterFeedbackCounts.value.cry,
        }
      : {
          love: 0,
          happy: 0,
          sad: 0,
          cry: 0,
        };

  useStyles$(`
      .feedback_inlineWrapper, .feedback_successWrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
      }

      .feedback_inlineTriggerWrapper {
        background: var(--ds-background-100);
        box-shadow: var(--ds-shadow-border-small);
        width: fit-content;
        overflow: hidden;
      }

      .feedback_trigger {
        padding: 10px 12px 10px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
      }

      .feedback_emojisWrapper {
        display: flex;
        align-items: center;
        color: var(--ds-gray-900);
        gap: 6px;
      }

      .feedback_emojiItem {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
      }

      .feedback_emoji {
        background: transparent;
        border: none;
        border-radius: 9999px;
        height: 36px;
        width: 36px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background .2s, border-color .2s, box-shadow .2s;
      }

      .feedback_emoji:hover {
        background: var(--ds-gray-alpha-100);
      }

      .feedback_emoji--selected {
        background: var(--ds-gray-alpha-100);
        box-shadow: inset 0 0 0 1px var(--feedback-selected-color);
      }

      .feedback_emoji--selected:hover {
        background: var(--ds-gray-alpha-100);
      }

      .feedback_theme--2026 {
        --feedback-selected-color: var(--qwik-deep-purple);
      }

      .feedback_theme--legacy {
        --feedback-selected-color: var(--qwik-blue);
      }

      .feedback_emojiCountBadge {
        position: absolute;
        top: 0px;
        right: 0px;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        border-radius: 9999px;
        background: var(--ds-background-100);
        box-shadow: inset 0 0 0 1px var(--ds-gray-alpha-400);
        color: var(--ds-gray-900);
        font-size: 10px;
        line-height: 16px;
        text-align: center;
        pointer-events: none;
      }

      [type=button], [type=reset], [type=submit], button {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
      }

      .feedback_formWrapper {
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .feedback_textarea__iiRZ8 {
        padding: 10px 12px;
        border-radius: 6px;
        border: 1px solid var(--ds-gray-alpha-400);
        transition: border-color .2s;
        background: var(--ds-background-100);
        width: 100%;
        height: 100px;
        resize: none;
        font-size: 14px;
        font-family: var(--font-sans);
      }

      .feedback_textarea__iiRZ8:focus {
        outline: none;
        border-color: var(--ds-gray-700);
      }

      @media (max-width: 640px) {
        .feedback_textarea__iiRZ8 {
          font-size: 16px;
        }
      }

      .feedback_actions {
        display: flex;
        justify-content: flex-end;
        padding: var(--geist-gap-half);
        background: var(--accents-1);
        border-top: 1px solid var(--accents-2);
      }

      .feedback_successText {
        padding: 10px 16px 0 16px;
        text-align: center;
      }
        
      .feedback_toast {
        position: fixed;
        z-index: 9999;
        right: 24px;
        bottom: 24px;
        border-radius: 9999px;
        color: var(--ds-background-100);
        padding: 10px 16px;
        box-shadow: var(--ds-shadow-border-small);
        font-size: 14px;
        line-height: 1;
        opacity: 0;
        transform: translateY(16px);
        animation: feedback-toast-in-out 3s ease forwards;
      }

      .feedback_toast--2026 {
        background: var(--qwik-deep-purple);
      }

      .feedback_toast--legacy {
        background: var(--qwik-blue);
      }

      @keyframes feedback-toast-in-out {
        0% {
          opacity: 0;
          transform: translateY(16px);
        }
        12% {
          opacity: 1;
          transform: translateY(0);
        }
        82% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(16px);
        }
      }

      @media (max-width: 640px) {
        .feedback_toast {
          left: 50%;
          right: auto;
          bottom: 68px;
          transform: translateX(-50%) translateY(16px);
          max-width: calc(100vw - 32px);
          text-align: center;
        }

        @keyframes feedback-toast-in-out {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(16px);
          }
          12% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          82% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(16px);
          }
        }
      }

      .feedback_formContainer {
        overflow: hidden;
        max-height: 0;
        opacity: 0;
        transform: translateY(-8px);
        pointer-events: none;
        transition:
          max-height 0.32s ease,
          opacity 0.22s ease,
          transform 0.22s ease;
      }

      .feedback_formContainer--open {
        max-height: 220px;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
    `);

  const handleReactionClick = $((reaction: FeedbackReaction) => {
    selectedReaction.value = reaction;
    isFormOpen.value = true;
    showSuccessToast.value = false;
  });

  const handleSubmit = $(async () => {
    if (!selectedReaction.value) return;

    await saveChapterFeedback.submit({
      courseVersion,
      chapterNumber,
      reaction: selectedReaction.value,
      message: message.value,
    });
  });

  useTask$(({ track }) => {
    const feedback = track(() => chapterFeedback.value);
    const trackedCourseVersion = track(() => courseVersion);
    const trackedChapterNumber = track(() => chapterNumber);

    selectedReaction.value =
      feedback.courseVersion === trackedCourseVersion &&
      feedback.chapterNumber === trackedChapterNumber
        ? (feedback.reaction as FeedbackReaction | null)
        : null;

    message.value =
      feedback.courseVersion === trackedCourseVersion &&
      feedback.chapterNumber === trackedChapterNumber
        ? (feedback.message ?? "")
        : "";

    isFormOpen.value = false;
    showSuccessToast.value = false;
  });

  useTask$(({ track, cleanup }) => {
    track(() => saveChapterFeedback.value);

    let timeoutId: number | undefined;

    if (saveChapterFeedback.value?.success) {
      const activeElement = document.activeElement as HTMLElement | null;
      activeElement?.blur();

      isFormOpen.value = false;
      showSuccessToast.value = true;

      timeoutId = window.setTimeout(() => {
        showSuccessToast.value = false;
      }, 3000);
    }

    cleanup(() => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    });
  });

  return (
    <div
      class={{
        feedback_inlineWrapper: true,
        "feedback_theme--2026": courseVersion === "2026",
        "feedback_theme--legacy": courseVersion === "Legacy",
      }}
    >
      <div class="feedback_inlineTriggerWrapper" style="border-radius: 30px;">
        <div class="feedback_trigger">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.9375rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Was this helpful?
          </p>

          <span class="feedback_emojisWrapper">
            <div class="feedback_emojiItem">
              <button
                aria-label="Select Love it! emoji"
                class={{
                  feedback_emoji: true,
                  "feedback_emoji--selected": selectedReaction.value === "love",
                }}
                onClick$={() => handleReactionClick("love")}
                type="button"
              >
                <svg
                  data-testid="geist-icon"
                  height="18"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="18"
                  style="color: currentcolor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.5 8.97498H3.875V9.59998C3.875 11.4747 5.81046 12.8637 7.99817 12.8637C10.1879 12.8637 12.125 11.4832 12.125 9.59998V8.97498H11.5H4.5ZM7.99817 11.6137C6.59406 11.6137 5.63842 10.9482 5.28118 10.225H10.7202C10.3641 10.9504 9.40797 11.6137 7.99817 11.6137Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.15295 4.92093L5.375 3.5L4.59705 4.92093L3 5.21885L4.11625 6.39495L3.90717 8L5.375 7.30593L6.84283 8L6.63375 6.39495L7.75 5.21885L6.15295 4.92093ZM11.403 4.92093L10.625 3.5L9.84705 4.92093L8.25 5.21885L9.36625 6.39495L9.15717 8L10.625 7.30593L12.0928 8L11.8837 6.39495L13 5.21885L11.403 4.92093Z"
                    fill="var(--ds-amber-800)"
                  ></path>
                </svg>
              </button>

              {counts.love > 0 && (
                <span class="feedback_emojiCountBadge">{counts.love}</span>
              )}
            </div>

            <div class="feedback_emojiItem">
              <button
                aria-label="Select It’s okay emoji"
                class={{
                  feedback_emoji: true,
                  "feedback_emoji--selected":
                    selectedReaction.value === "happy",
                }}
                onClick$={() => handleReactionClick("happy")}
                type="button"
              >
                <svg
                  data-testid="geist-icon"
                  height="18"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="18"
                  style="color: currentcolor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>

              {counts.happy > 0 && (
                <span class="feedback_emojiCountBadge">{counts.happy}</span>
              )}
            </div>

            <div class="feedback_emojiItem">
              <button
                aria-label="Select Not great emoji"
                class={{
                  feedback_emoji: true,
                  "feedback_emoji--selected": selectedReaction.value === "sad",
                }}
                onClick$={() => handleReactionClick("sad")}
                type="button"
              >
                <svg
                  data-testid="geist-icon"
                  height="18"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="18"
                  style="color: currentcolor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.75 7.75C6.30228 7.75 6.75 7.30228 6.75 6.75C6.75 6.19772 6.30228 5.75 5.75 5.75C5.19772 5.75 4.75 6.19772 4.75 6.75C4.75 7.30228 5.19772 7.75 5.75 7.75ZM11.25 6.75C11.25 7.30228 10.8023 7.75 10.25 7.75C9.69771 7.75 9.25 6.19772 9.25 6.75C9.25 6.19772 9.69771 5.75 10.25 5.75C10.8023 5.75 11.25 6.19772 11.25 6.75ZM11.5249 11.2622L11.8727 11.7814L10.8342 12.4771L10.4863 11.9578C9.94904 11.1557 9.0363 10.6298 8.00098 10.6298C6.96759 10.6298 6.05634 11.1537 5.51863 11.9533L5.16986 12.4719L4.13259 11.7744L4.48137 11.2558C5.2414 10.1256 6.53398 9.37982 8.00098 9.37982C9.47073 9.37982 10.7654 10.1284 11.5249 11.2622Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>

              {counts.sad > 0 && (
                <span class="feedback_emojiCountBadge">{counts.sad}</span>
              )}
            </div>

            <div class="feedback_emojiItem">
              <button
                aria-label="Select Hate it emoji"
                class={{
                  feedback_emoji: true,
                  "feedback_emoji--selected": selectedReaction.value === "cry",
                }}
                onClick$={() => handleReactionClick("cry")}
                type="button"
              >
                <svg
                  data-testid="geist-icon"
                  height="18"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="18"
                  style="color: currentcolor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 9V16H5.5V9H4ZM12 9V16H10.5V9H12Z"
                    fill="var(--ds-blue-700)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 9.57941 13.9367 11.0273 13 12.1536V14.2454C14.8289 12.7793 16 10.5264 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 10.5264 1.17107 12.7793 3 14.2454V12.1536C2.06332 11.0273 1.5 9.57941 1.5 8ZM8 14.5C8.51627 14.5 9.01848 14.4398 9.5 14.3261V15.8596C9.01412 15.9518 8.51269 16 8 16C7.48731 16 6.98588 15.9518 6.5 15.8596V14.3261C6.98152 14.4398 7.48373 14.5 8 14.5ZM3.78568 8.36533C4.15863 7.98474 4.67623 7.75 5.25 7.75C5.82377 7.75 6.34137 7.98474 6.71432 8.36533L7.78568 7.31548C7.14222 6.65884 6.24318 6.25 5.25 6.25C4.25682 6.25 3.35778 6.65884 2.71432 7.31548L3.78568 8.36533ZM10.75 7.75C10.1762 7.75 9.65863 7.98474 9.28568 8.36533L8.21432 7.31548C8.85778 6.65884 9.75682 6.25 10.75 6.25C11.7432 6.25 12.6422 6.65884 13.2857 7.31548L12.2143 8.36533C11.8414 7.98474 11.3238 7.75 10.75 7.75ZM6.25 12H9.75C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>

              {counts.cry > 0 && (
                <span class="feedback_emojiCountBadge">{counts.cry}</span>
              )}
            </div>
          </span>
        </div>

        <div
          class={{
            feedback_formContainer: true,
            "feedback_formContainer--open": isFormOpen.value,
          }}
        >
          <form preventdefault:submit onSubmit$={handleSubmit}>
            <div class="feedback_formWrapper">
              <textarea
                class="feedback_textarea__iiRZ8"
                id="feedback-textarea"
                placeholder="Your feedback..."
                value={message.value}
                onInput$={(_, el) => {
                  message.value = el.value;
                }}
              ></textarea>

              <div
                class="text_wrapper feedback_markdown-tip"
                data-version="v1"
                style="--text-color: var(--ds-gray-900); --text-size: 0.75rem; --text-line-height: 1rem; --text-letter-spacing: initial; --text-weight: 400;"
              >
                Feedback is optional.
              </div>
            </div>

            <div class="feedback_actions" style="justify-content: flex-end;">
              <button
                type="submit"
                class="button_base reset_reset button_button reset_reset button_small button_invert"
                data-geist-button=""
                data-prefix="false"
                data-suffix="false"
                data-version="v1"
                style="--geist-icon-size: 16px;"
                disabled={saveChapterFeedback.isRunning}
              >
                <span class="button_content">
                  {saveChapterFeedback.isRunning ? "Saving..." : "Send"}
                </span>
              </button>
            </div>
          </form>
        </div>

        {saveChapterFeedback.value?.failed && (
          <p class="feedback_successText text-red-600">
            {saveChapterFeedback.value.fieldErrors?.message ||
              saveChapterFeedback.value.error ||
              "An error occurred."}
          </p>
        )}

        {showSuccessToast.value && (
          <div
            class={{
              feedback_toast: true,
              "feedback_toast--2026": courseVersion === "2026",
              "feedback_toast--legacy": courseVersion === "Legacy",
            }}
          >
            Thanks for your feedback.
          </div>
        )}
      </div>
    </div>
  );
});
