// src/components/UI/feedback/feedback.tsx

import {
  $,
  component$,
  useSignal,
  useStyles$,
  useTask$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import {
  useFeedbackAuthState,
  useGetChapterFeedback,
  useGetChapterFeedbackCounts,
  useGetPublicChapterFeedback,
  useSaveChapterFeedback,
} from "~/routes/learn/layout";

type FeedbackReaction = "love" | "happy" | "sad" | "cry";

interface FeedbackProps {
  courseVersion: "Legacy" | "2026";
  chapterNumber: number;
}

const UNAUTHORIZED_ERROR = "You must be signed in to leave feedback.";

const REACTION_OPTIONS: {
  value: FeedbackReaction;
  label: string;
  emoji: string;
}[] = [
  { value: "love", label: "Love it!", emoji: "🤩" },
  { value: "happy", label: "It’s okay", emoji: "🙂" },
  { value: "sad", label: "Not great", emoji: "🙁" },
  { value: "cry", label: "Hate it", emoji: "😭" },
];

const REACTION_EMOJIS: Record<FeedbackReaction, string> = {
  love: "🤩",
  happy: "🙂",
  sad: "🙁",
  cry: "😭",
};

const getReactionEmoji = (reaction: string | null | undefined): string => {
  if (!reaction) return "🙂";

  return REACTION_EMOJIS[reaction as FeedbackReaction];
};

export default component$<FeedbackProps>(({ courseVersion, chapterNumber }) => {
  const saveChapterFeedback = useSaveChapterFeedback();
  const chapterFeedback = useGetChapterFeedback();
  const chapterFeedbackCounts = useGetChapterFeedbackCounts();
  const feedbackAuthState = useFeedbackAuthState();
  const publicFeedback = useGetPublicChapterFeedback();

  const selectedReaction = useSignal<FeedbackReaction | null>(null);
  const message = useSignal("");
  const isFormOpen = useSignal(false);
  const showSuccessToast = useSignal(false);
  const showLoginPrompt = useSignal(false);
  const displayConsent = useSignal(true);

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
        transition: background .2s, border-color .2s, box-shadow .2s, transform .2s;
        font-size: 18px;
        line-height: 1;
      }

      .feedback_emoji:hover {
        background: var(--ds-gray-alpha-100);
        transform: translateY(-1px);
      }

      .feedback_emoji--selected {
        background: var(--ds-gray-alpha-100);
        box-shadow: inset 0 0 0 1px var(--feedback-selected-color);
      }

      .feedback_emoji--selected:hover {
        background: var(--ds-gray-alpha-100);
      }

      .feedback_theme--2026 {
        --feedback-selected-color: var(--qwik-dark-purple);
      }

      .feedback_theme--legacy {
        --feedback-selected-color: var(--qwik-dark-blue);
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
        max-height: 320px;
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      .feedback_authPrompt {
        padding: 0 16px 16px 16px;
        text-align: center;
      }

      .feedback_authPromptActions {
        display: flex;
        justify-content: center;
        padding-top: 8px;
      }

      .feedback_authLink {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        padding: 10px 14px;
        text-decoration: none;
        font-size: 14px;
        line-height: 1;
        box-shadow: inset 0 0 0 1px var(--ds-gray-alpha-400);
        color: var(--ds-gray-1000);
        transition: background .2s, box-shadow .2s;
      }

      .feedback_authLink:hover {
        background: var(--ds-gray-alpha-100);
      }

      .feedback_consentLabel {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        font-size: 12px;
        line-height: 1.4;
        color: var(--ds-gray-900);
        cursor: pointer;
      }

      .feedback_consentLabel input {
        margin-top: 2px;
        flex-shrink: 0;
      }

      .feedback_publicList {
        padding: 12px 16px 16px;
        border-top: 1px solid var(--accents-2);
      }

      .feedback_publicTitle {
        margin: 0 0 10px;
        font-size: 13px;
        line-height: 1.2;
        font-weight: 600;
        color: var(--ds-gray-1000);
      }

      .feedback_publicItems {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .feedback_publicItem {
        padding: 10px 12px;
        border-radius: 10px;
        background: var(--ds-gray-alpha-100);
      }

      .feedback_publicMeta {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 6px;
      }

      .feedback_publicReaction {
        font-size: 16px;
        line-height: 1;
      }

      .feedback_publicAuthor {
        margin: 0;
        font-size: 12px;
        line-height: 1.3;
        color: var(--ds-gray-900);
      }

      .feedback_publicMessage {
        margin: 0;
        font-size: 14px;
        line-height: 1.45;
        color: var(--ds-gray-1000);
      }
    `);

  const handleReactionClick = $((reaction: FeedbackReaction) => {
    if (!feedbackAuthState.value.isAuthenticated) {
      selectedReaction.value = null;
      isFormOpen.value = false;
      showSuccessToast.value = false;
      showLoginPrompt.value = true;
      return;
    }

    selectedReaction.value = reaction;
    isFormOpen.value = true;
    showSuccessToast.value = false;
    showLoginPrompt.value = false;
  });

  const handleSubmit = $(async () => {
    if (!feedbackAuthState.value.isAuthenticated) {
      selectedReaction.value = null;
      isFormOpen.value = false;
      showLoginPrompt.value = true;
      return;
    }

    if (!selectedReaction.value) return;

    await saveChapterFeedback.submit({
      courseVersion,
      chapterNumber,
      reaction: selectedReaction.value,
      message: message.value,
      displayConsent: displayConsent.value,
    });
  });

  useTask$(({ track }) => {
    const feedback = track(() => chapterFeedback.value);
    const trackedCourseVersion = track(() => courseVersion);
    const trackedChapterNumber = track(() => chapterNumber);
    const isAuthenticated = track(
      () => feedbackAuthState.value.isAuthenticated,
    );

    const isCurrentFeedback =
      feedback.courseVersion === trackedCourseVersion &&
      feedback.chapterNumber === trackedChapterNumber;

    selectedReaction.value = isCurrentFeedback
      ? (feedback.reaction as FeedbackReaction | null)
      : null;

    message.value = isCurrentFeedback ? feedback.message : "";

    displayConsent.value =
      isCurrentFeedback && typeof feedback.displayConsent === "boolean"
        ? feedback.displayConsent
        : true;

    isFormOpen.value = false;
    showSuccessToast.value = false;

    if (isAuthenticated) {
      showLoginPrompt.value = false;
    }
  });

  useTask$(({ track, cleanup }) => {
    const result = track(() => saveChapterFeedback.value);

    let timeoutId: number | undefined;

    if (result?.failed && result.error === UNAUTHORIZED_ERROR) {
      selectedReaction.value = null;
      isFormOpen.value = false;
      showSuccessToast.value = false;
      showLoginPrompt.value = true;
    }

    if (result?.success) {
      const activeElement = document.activeElement as HTMLElement | null;
      activeElement?.blur();

      isFormOpen.value = false;
      showLoginPrompt.value = false;
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
      <div class="feedback_inlineTriggerWrapper rounded-xl">
        <div class="feedback_trigger">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 0.9375rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Was this helpful?
          </p>

          <span class="feedback_emojisWrapper">
            {REACTION_OPTIONS.map((option) => (
              <div key={option.value} class="feedback_emojiItem">
                <button
                  aria-label={`Select ${option.label} emoji`}
                  class={{
                    feedback_emoji: true,
                    "feedback_emoji--selected":
                      selectedReaction.value === option.value,
                  }}
                  onClick$={() => handleReactionClick(option.value)}
                  type="button"
                >
                  <span aria-hidden="true">{option.emoji}</span>
                </button>

                {counts[option.value] > 0 && (
                  <span class="feedback_emojiCountBadge">
                    {counts[option.value]}
                  </span>
                )}
              </div>
            ))}
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

              <p
                class="text_wrapper feedback_markdown-tip"
                style="--text-color: var(--ds-gray-900); --text-size: 0.75rem; --text-line-height: 1rem; --text-letter-spacing: initial; --text-weight: 400;"
              >
                Feedback is optional.
              </p>

              <label class="feedback_consentLabel" for="feedback-consent">
                <input
                  id="feedback-consent"
                  type="checkbox"
                  checked={displayConsent.value}
                  onChange$={(_, el) => {
                    displayConsent.value = el.checked;
                  }}
                />
                <span>
                  I agree that my feedback may be displayed publicly with my
                  name.
                </span>
              </label>
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

        {showLoginPrompt.value && !feedbackAuthState.value.isAuthenticated && (
          <div class="feedback_authPrompt">
            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
            >
              You must be signed in to leave feedback.
            </p>

            <div class="feedback_authPromptActions">
              <Link
                href={feedbackAuthState.value.loginHref}
                class="feedback_authLink"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}

        {saveChapterFeedback.value?.failed &&
          saveChapterFeedback.value.error !== UNAUTHORIZED_ERROR && (
            <p class="feedback_successText text-red-600">
              {saveChapterFeedback.value.fieldErrors?.message ||
                saveChapterFeedback.value.error ||
                "An error occurred."}
            </p>
          )}

        {publicFeedback.value.length > 0 && (
          <div class="feedback_publicList">
            <p class="feedback_publicTitle">What learners said</p>

            <div class="feedback_publicItems">
              {publicFeedback.value.map((item) => (
                <article key={item.id} class="feedback_publicItem">
                  <p class="feedback_publicMeta">
                    <span class="feedback_publicReaction" aria-hidden="true">
                      {getReactionEmoji(item.reaction)}
                    </span>
                    <span class="feedback_publicAuthor">
                      {item.display_name}
                    </span>
                  </p>
                  <p class="feedback_publicMessage">“{item.message}”</p>
                </article>
              ))}
            </div>
          </div>
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
