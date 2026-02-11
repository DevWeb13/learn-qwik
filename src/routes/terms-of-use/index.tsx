import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
        <article
          class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
          style="min-height: calc(100vh - 103px);"
        >
          <div class="prose prose-vercel max-w-none">
            <PageTitle chapterNumber={0} chapterTitle="Terms of Use" />

            <p>
              Welcome to our Terms of Use page! At Learn Qwik, we are committed
              to protecting your privacy and ensuring that your personal data is
              handled safely and responsibly. This policy outlines our practices
              regarding the collection, use, and protection of your information.
            </p>
            <p>
              By using our website, you agree to be bound by these terms. If you
              do not agree with any part of these terms, please do not use our
              website.
            </p>
            <p>
              These terms apply to all visitors, users, and other individuals
              who access or use our website, including but not limited to our
              mobile applications, social media accounts, and any other online
              platforms or services.
            </p>
            <p>
              Our website is owned and operated by LaReponseDev, a company based
              in France. We may update these terms from time to time, and we
              encourage you to review this page regularly for any changes. Your
              continued use of our website after any changes constitutes your
              acceptance of those changes.
            </p>
            <h2>1. Terms</h2>
            <p>
              By accessing or using our website, you are agreeing to be bound by
              these terms. If you do not agree with any part of these terms,
              please do not use our website.
            </p>
            <p>
              Our website is provided for your personal, non-commercial use
              only. It is not intended for resale, and it may not be
              redistributed in any form. You may not use our website for any
              illegal or unauthorized purpose.
            </p>
            <p>
              You may not use our website to engage in any activity that is
              illegal, fraudulent, harmful, or violates any applicable laws or
              regulations. Additionally, you may not use our website to engage
              in any activity that could harm minors or individuals with
              disabilities.
            </p>
            <p>
              You may not use our website to engage in any activity that is
              discriminatory, racist, or otherwise violates any applicable laws
              or regulations.
            </p>
            <p>
              You may not use our website to engage in any activity that is
              defamatory, threatening, or otherwise violates any applicable laws
              or regulations.
            </p>
            <p>
              We reserve the right to terminate your account or remove content
              from our website at any time for any reason, including but not
              limited to violating these terms or laws.
            </p>
            <p>
              We reserve the right to modify or update these terms at any time.
              Your continued use of our website after any changes constitutes
              your acceptance of those changes.
            </p>
            <h2>2. Privacy Policy</h2>
            <p>
              Please review our{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link> to understand
              how we collect, use, and protect your information.
            </p>
            <h2>3. Copyright Policy</h2>
            <p>
              We respect the intellectual property rights of others and reserve
              all rights, title, and interest in and to our website, its
              content, and any software, applications, or other materials
              provided through our website.
            </p>
            <p>
              We do not claim ownership of any intellectual property rights in
              our website, including but not limited to logos, trademarks,
              service marks, domain names, and content (text, images, videos,
              audio, software, applications, or other materials).
            </p>
            <p>
              You may not use our website to infringe on the intellectual
              property rights of others without our prior written consent.
            </p>
            <p>
              We reserve the right to terminate your account or remove content
              from our website at any time for any reason, including but not
              limited to violating these terms or laws.
            </p>
            <p>
              We reserve the right to modify or update these terms at any time.
              Your continued use of our website after any changes constitutes
              your acceptance of those changes.
            </p>
            <h2>4. Disclaimer</h2>
            <p>
              We do not guarantee the accuracy, completeness, or reliability of
              our website or any information, content, or materials provided
              through our website. We disclaim all liability for any errors or
              omissions in our website or any information, content, or materials
              provided through our website. We reserve the right to update,
              change, or discontinue our website at any time without prior
              notice.
            </p>
            <p>
              We do not guarantee the security of our website or any
              information, content, or materials provided through our website.
              You should use your own discretion and discretion in evaluating
              any information, content, or materials provided through our
              website.
            </p>
            <p>
              We do not guarantee that our website will be available at all
              times. We may experience technical difficulties or other issues
              that could affect the accessibility, functionality, or performance
              of our website. We reserve the right to discontinue our website at
              any time without prior notice.
            </p>
            <p>
              We do not guarantee that our website will be free of bugs, errors,
              or other issues. You should use your own discretion and discretion
              in evaluating any information, content, or materials provided
              through our website.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Terms of Use",
  "Terms of Use",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/terms-of-use/",
);
