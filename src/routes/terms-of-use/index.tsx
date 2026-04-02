import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export default component$(() => {
  return (
    <main>
      <div class="relative mx-auto max-w-5xl px-4 py-4 md:py-10">
        <article
          class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
          style="min-height: calc(100vh - 103px);"
        >
          <div class="prose prose-vercel max-w-none">
            <PageTitle number={0} title="Terms of Use" />

            <p>
              Welcome to our Terms of Use page. These terms govern your access
              to and use of Learn Qwik and its related services.
            </p>
            <p>
              By accessing or using this website, you agree to be bound by these
              terms. If you do not agree with any part of them, you must not use
              Learn Qwik.
            </p>
            <p>
              These terms apply to all visitors, users, and other individuals
              who access or use Learn Qwik, including its website and related
              online services.
            </p>
            <p>
              Learn Qwik is operated by LaReponseDev, based in France. We may
              update these terms from time to time, and your continued use of
              the website after any changes are published means you accept the
              revised terms.
            </p>

            <h2>1. Use of the Website</h2>
            <p>
              By accessing or using Learn Qwik, you agree to use the website
              only in compliance with applicable laws and these terms.
            </p>
            <p>
              You must not use the website for any unlawful, fraudulent, harmful
              or abusive purpose. In particular, you must not attempt to disrupt
              the website, gain unauthorized access to any account or system, or
              interfere with the normal operation of the service.
            </p>
            <p>
              You must not post, transmit, or distribute any content that is
              illegal, defamatory, threatening, discriminatory, hateful,
              obscene, or otherwise harmful.
            </p>

            <h2>2. Accounts and Access</h2>
            <p>
              Some parts of Learn Qwik may require an account. You are
              responsible for maintaining the confidentiality of your login
              credentials and for any activity carried out through your account.
            </p>
            <p>
              We reserve the right to suspend or terminate access to the website
              or to specific services at any time if these terms are violated or
              if such action is necessary to protect the platform, its users, or
              its operators.
            </p>

            <h2>3. Privacy</h2>
            <p>
              Please review our{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link> to understand
              how we collect, use, and protect personal data.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              Unless otherwise stated, Learn Qwik and all content made available
              on the website, including text, design elements, graphics, logos,
              and other materials, are protected by applicable intellectual
              property laws.
            </p>
            <p>
              You may not reproduce, copy, distribute, modify, publish, or
              exploit any part of the website or its content without prior
              written authorization, except where such use is permitted by law.
            </p>

            <h2>5. Third-Party Links and Services</h2>
            <p>
              Learn Qwik may contain links to third-party websites or services.
              These links are provided for convenience only. We do not control
              and are not responsible for the content, policies, or practices of
              third-party services.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              Learn Qwik is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. We do not guarantee that the website will
              always be available, secure, error-free, or free from bugs or
              interruptions.
            </p>
            <p>
              We make reasonable efforts to provide accurate and up-to-date
              information, but we do not guarantee the completeness, accuracy,
              or reliability of any content made available on the website.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Learn Qwik and
              its operator shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to the use of, or inability to use, the website or its
              services.
            </p>
            <p>
              Nothing in these terms excludes liability where such exclusion is
              not permitted under applicable law.
            </p>

            <h2>8. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use at any time. The updated version
              will be published on this page. Continued use of Learn Qwik after
              the publication of changes constitutes acceptance of the revised
              terms.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms of Use are governed by French law. Any dispute related
              to the use of Learn Qwik shall be subject to the jurisdiction of
              the competent courts of Marseille, except where mandatory legal
              provisions provide otherwise.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Terms of Use",
  description:
    "Read the Learn Qwik Terms of Use, including access rules, account responsibilities, acceptable use, and service limitations.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/terms-of-use/",
  type: "website",
  robots: "noindex, nofollow",
});
