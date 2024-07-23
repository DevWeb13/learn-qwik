// src/components/learn/dashboardApp/addingSearchAndPaginationContent/addingSearchAndPaginationContent.tsx

import { component$ } from "@builder.io/qwik";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

export const AddingSearchAndPaginationContent = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={10}
          chapterTitle="Adding Search and Pagination"
        />
        <p>
          In the previous chapter, you improved your dashboard's initial loading
          performance with streaming. Now let's move on to the{" "}
          <code>/invoices</code> page, and learn how to add search and
          pagination!
        </p>
        <TableOfTopicsCovered
          topics={[
            {
              title:
                "Learn how to use the Qwik-City APIs: useLocation() and useNavigate()",
              icon: "qwikLogo",
            },
            {
              title: "Implement search and pagination using URL search params.",
              icon: "magnifyingGlass",
            },
          ]}
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Starting code" id="starting-code" />
        <p>
          First, you must <span class="font-bold">download</span>{" "}
          <code>'invoices.zip'</code> folder, unzip and place them in the{" "}
          <code>'src/components/ui'</code> folder:
        </p>
        <ul>
          <li>
            <a href="/downloads/invoices.zip" download="invoices.zip">
              <code>invoices.zip 💾</code>
            </a>
          </li>
        </ul>
        <p>
          Second, you must <span class="font-bold">download</span>{" "}
          <code>'button.tsx'</code> and <code>search.tsx</code> files and place
          them in the <code>'src/components/ui'</code> folder:
        </p>
        <ul>
          <li>
            <a href="/downloads/button.tsx" download="button.tsx">
              <code>button.tsx 💾</code>
            </a>
          </li>
          <li>
            <a href="/downloads/search.tsx" download="search.tsx">
              <code>search.tsx 💾</code>
            </a>
          </li>
        </ul>
        <p>
          Third, inside your{" "}
          <code>'src/routes/dashboard/invoices/index.tsx'</code> file, paste the
          following code:
        </p>
        <CodeBlock
          code={`// src/routes/dashboard/invoices/index.tsx

import { component$ } from "@builder.io/qwik";
import { Pagination } from "~/components/ui/invoices/pagination";
import { Search } from "~/components/ui/search";
import { Table } from "~/components/ui/invoices/table";
import { CreateInvoice } from "~/components/ui/invoices/buttons";

export default component$(() => {
  return (
    <div class="w-full">
      <div class="flex w-full items-center justify-between">
        <h1 class="lusitana text-2xl">Invoices</h1>
      </div>
      <div class="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Table />
      <div class="mt-5 flex w-full justify-center">
        <Pagination />
      </div>
    </div>
  );
});`}
          language="tsx"
          icon="typescript"
          text="src/routes/dashboard/invoices/index.tsx"
        />
        <p>
          Spend some time familiarizing yourself with the page and the
          components you'll be working with:
        </p>
        <ol class="list-decimal">
          <li>
            <code>{"<Search />"}</code> allows users to search for specific
            invoices.
          </li>
          <li>
            <code>{"<Pagination />"}</code> allows users to navigate between
            pages of invoices.
          </li>
          <li>
            <code>{"<Table />"}</code> displays the invoices.
          </li>
        </ol>
        <p>
          Your search functionality will span the client and the server. When a
          user searches for an invoice on the client, the URL params will be
          updated, data will be fetched on the server, and the table will
          re-render on the server with the new data.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Why use URL search params?"
          id="why-use-url-search-params?"
        />
        <p>
          As mentioned above, you'll be using URL search params to manage the
          search state. This pattern may be new if you're used to doing it with
          client side state.
        </p>
        <p>
          There are a couple of benefits of implementing search with URL params:
        </p>
        <ul>
          <li>
            <span class="font-bold">Bookmarkable and Shareable URLs</span>:
            Since the search parameters are in the URL, users can bookmark the
            current state of the application, including their search queries and
            filters, for future reference or sharing.
          </li>
          <li>
            <span class="font-bold">
              Server-Side Rendering and Initial Load
            </span>
            : URL parameters can be directly consumed on the server to render
            the initial state, making it easier to handle server rendering.
          </li>
          <li>
            <span class="font-bold">Analytics and Tracking</span>: Having search
            queries and filters directly in the URL makes it easier to track
            user behavior without requiring additional client-side logic.
          </li>
        </ul>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Adding the search functionality"
          id="adding-the-search-functionality"
        />
        <p>
          These are the Qwik-City functions that you'll use to implement the
          search functionality:
        </p>
        <ul>
          <li>
            <code>
              <span class="font-bold">useLocation()</span>
            </code>{" "}
            - Provides the current URL and params. It also determines if the app
            is currently navigating, which is useful for showing a loading
            indicator.
          </li>
          <li>
            <code>
              <span class="font-bold">useNavigate()</span>
            </code>{" "}
            - Returns a function that programmatically navigates to the next
            page without requiring a user click or causing a full-page reload.
            This function can be called with a string argument to "push" a new
            path, or without arguments to cause an SPA refresh of the page. This
            is the API used by the <code>&lt;Link&gt;</code> component
            internally to support SPA navigation.
          </li>
        </ul>
        <p>Here's a quick overview of the implementation steps:</p>
        <ol class="list-decimal">
          <li>Capture the user's input.</li>
          <li>Update the URL with the search params.</li>
          <li>Keep the URL in sync with the input field.</li>
          <li>Update the table to reflect the search query.</li>
        </ol>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="1. Capturing the user's input"
          id="1.-capturing-the-user's-input"
          level="h3"
        />
        <p>
          Go into the <code>&lt;Search&gt;</code> Component (
          <code>/app/ui/search.tsx</code>):
        </p>
        <p>
          Create a new <code>handleSearch</code> function, and add an{" "}
          <code>onInput$</code> listener to the <code>&lt;input&gt;</code>{" "}
          element. <code>onInput$</code> will invoke <code>handleSearch</code>{" "}
          whenever the input value changes.
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const handleSearch = $(function handleSearch(term: string) {
    console.log("searching for", term);
  });
  return (
    <div class="relative flex flex-1 flex-shrink-0">
      <label for="search" class="sr-only">
        Search
      </label>
      <input
        class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onInput$={(e) => {
          const inputValue = (e.target as HTMLInputElement).value;
          handleSearch(inputValue);
        }}
      />
      <HiMagnifyingGlassOutline class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 2, character: 0 },
              end: { line: 2, character: 49 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 6, character: 0 },
              end: { line: 8, character: 5 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 17, character: 0 },
              end: { line: 20, character: 10 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Test that it's working correctly by opening the console in your
          Developer Tools, then type into the search field. You should see the
          search term logged to the console.
        </p>
        <p>
          Great! You're capturing the user's search input. Now, you need to
          update the URL with the search term.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="2. Updating the URL with the search params"
          id="2.-updating-the-url-with-the-search-params"
          level="h3"
        />
        <p>
          Import the <code>useLocation()</code> function from{" "}
          <code>@builder.io/qwik-city</code>, and assign a variable.
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();

  const handleSearch = $(function handleSearch(term: string) {
    console.log("Search term: ", term);
  });
  // ...
}`}
          language="tsx"
          icon="typescript"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 52 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 28 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          The <code>'loc'</code> variable now contains the current URL and
          search params. You can use this for acces to the searchParams.
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;

  const handleSearch = $(function handleSearch(term: string) {
    console.log("Search term: ", term);
  });
  // ...
}`}
          language="tsx"
          icon="typescript"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 8, character: 0 },
              end: { line: 8, character: 44 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Inside <code>handleSearch,</code> create a new{" "}
          <BlankLink
            href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"
            text="URLSearchParams"
          />{" "}
          instance using your new <code>searchParams</code> variable.
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;

  const handleSearch = $(function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
  });
  // ...
}`}
          language="tsx"
          icon="typescript"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 11, character: 0 },
              end: { line: 11, character: 53 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          <code>URLSearchParams</code> is a Web API that provides utility
          methods for manipulating the URL query parameters. Instead of creating
          a complex string literal, you can use it to get the params string like{" "}
          <code>?page=1&amp;query=a</code>.
        </p>
        <p>
          Next, <code>set</code> the params string based on the user’s input. If
          the input is empty, you want to <code>delete</code> it:
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;

  const handleSearch = $(function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
  });
  // ...
}`}
          language="tsx"
          icon="typescript"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 12, character: 0 },
              end: { line: 16, character: 5 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now that you have the query string. You can recover the pathname with{" "}
          <code>'loc'</code> variable and use <code>useNavigate()</code>{" "}
          function to update the URL.
        </p>
        <p>
          Import <code>useNavigate()</code> from{" "}
          <code>@builder.io/qwik-city</code> and use the <code>nav()</code>{" "}
          method inside <code>handleSearch()</code>:
        </p>
        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;
  const pathname = loc.url.pathname;
  const nav = useNavigate();

  const handleSearch = $(function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    nav(\`\${pathname}?\${params.toString()}\`, {
      replaceState: true,
    });
  });
  // ...
}`}
          language="tsx"
          icon="typescript"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 65 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 9, character: 0 },
              end: { line: 10, character: 28 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 19, character: 0 },
              end: { line: 21, character: 7 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>Here's a breakdown of what's happening:</p>
        <ul>
          <li>
            <code>{"${pathname}"}</code> is the current URL path, in your cas,{" "}
            <code>"dashboard/invoices</code>
          </li>
          <li>
            As the user types into the search bar,{" "}
            <code>params.toString()</code> translates this input into a
            URL-friendly format.
          </li>
          <li>
            <code>{"nav(${pathname}?${params.toString()})"}</code> updates the
            URL with the user's search data. For example,{" "}
            <code>/dashboard/invoices?query=lee</code> if the user searches for
            "Lee".
          </li>
          <li>
            The URL is updated without reloading the page, thanks to Qwik SPA
            navigation (which you learned about in the chapter on{" "}
            <a href="/learn/dashboard-app/navigating-between-pages">
              navigating between pages
            </a>
            ).
          </li>
          <li>
            The <code>`replaceState: true`</code> option in the `nav` function
            is used to replace the current state in the browser's history
            instead of adding a new entry. This means that when the URL is
            updated with the search term, the current navigation does not add a
            new history entry. This is particularly useful for dynamic URL
            updates, such as search filters or pagination parameters, where you
            do not want to clutter the browser's history with each change. Thus,
            if the user presses the back button, they won't go through each
            previous search step but directly return to the page they were on
            before performing the search.
          </li>
        </ul>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="3. Keeping the URL and input in sync"
          id="3.-keeping-the-url-and-input-in-sync"
          level="h3"
        />
        <p>
          To ensure the input field is in sync with the URL and will be
          populated when sharing, you can pass a <code>defaultValue</code> to
          input by reading from <code>searchParams</code>:
        </p>
        <CodeBlock
          code={`<input
  class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  placeholder={placeholder}
  onInput$={(e) => {
    const inputValue = (e.target as HTMLInputElement).value;
    handleSearch(inputValue);
  }}
  defaultValue={searchParams.get("query")?.toString()}
/>`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/search.tsx"
          hideLineNumbers
          decorations={[
            {
              start: { line: 7, character: 0 },
              end: { line: 7, character: 54 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <blockquote class="p-3 text-sm">
          <p>
            <strong>
              <code>defaultValue</code> vs. <code>value</code> / Controlled vs.
              Uncontrolled
            </strong>
          </p>
          <p>
            In Qwik, if you want to ensure that the input field reflects the
            current URL parameters and updates accordingly, you should use the{" "}
            <code>value</code> attribute. This makes the input a controlled
            component, ensuring that Qwik manages the input's state based on the
            URL parameters.
          </p>
          <p>
            Using <code>defaultValue</code> only sets the initial value of the
            input when the component is first rendered. It does not update the
            input value when the URL parameters change. Therefore, using value
            is necessary to keep the input in sync with the URL parameters.
          </p>
        </blockquote>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="4. Updating the table to reflect the search query"
          id="4.-updating-the-table-to-reflect-the-search-query"
          level="h3"
        />
        <p>
          Finally, you need to update the table component to reflect the search
          query.
        </p>
        <p>Navigate back to the invoices page.</p>
        <p>
          In <code>src/components/ui/invoices/table.tsx</code> component:
        </p>
        <ul>
          <li>
            Import <code>useLocation()</code> from{" "}
            <code>@builder.io/qwik-city</code> and attribute it to a variable.
          </li>
          <li>
            Import <code>Resource</code> and <code>useResource$</code> from{" "}
            <code>@builder.io/qwik</code>
          </li>
          <li>
            Use <code>useResource$</code> for fetching the invoices data.
          </li>
          <li>
            Use <code>Resource</code> component for rendering the invoices data.
          </li>
          <li>
            Import <code>InvoicesTableSkeleton</code> use when{" "}
            <code>Resource</code> is <code>onPending</code>
          </li>
        </ul>
        <p>
          Here's the updated <code>table.tsx</code> component:
        </p>
        <CodeBlock
          code={`// src/components/ui/invoices/table.tsx

import { UpdateInvoice, DeleteInvoice } from "~/components/ui/invoices/buttons";
import { InvoiceStatus } from "~/components/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "~/lib/utils";

import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { fetchFilteredInvoices } from "~/lib/data";
import { InvoicesTableSkeleton } from "../skeletons";

export const Table = component$(() => {
  const loc = useLocation();

  const invoicesResource = useResource$(async ({ track }) => {
    track(() => loc.url.search); // Track the URL search params
    const searchParams = loc.url.searchParams;
    const query = searchParams.get("query") || "";
    const currentPage = Number(searchParams.get("page")) || 1;
    const filteredInvoices = await fetchFilteredInvoices(query, currentPage);
    return filteredInvoices;
  });
  return (
    <Resource
      value={invoicesResource}
      onResolved={(invoices) => {
        return (
          <div class="mt-6 flow-root">
            <div class="inline-block min-w-full align-middle">
              <div class="rounded-lg bg-gray-50 p-2 md:pt-0">
                <div class="md:hidden">
                  {invoices.map((invoice) => (
                    <div
                      key={invoice.id}
                      class="mb-2 w-full rounded-md bg-white p-4"
                    >
                      <div class="flex items-center justify-between border-b pb-4">
                        <div>
                          <div class="mb-2 flex items-center">
                            <img
                              src={invoice.image_url}
                              class="mr-2 rounded-full"
                              width={28}
                              height={28}
                              alt={\`\${invoice.name}'s profile picture\`}
                            />
                            <p>{invoice.name}</p>
                          </div>
                          <p class="text-sm text-gray-500">{invoice.email}</p>
                        </div>
                        <InvoiceStatus status={invoice.status} />
                      </div>
                      <div class="flex w-full items-center justify-between pt-4">
                        <div>
                          <p class="text-xl font-medium">
                            {formatCurrency(invoice.amount)}
                          </p>
                          <p>{formatDateToLocal(invoice.date)}</p>
                        </div>
                        <div class="flex justify-end gap-2">
                          <UpdateInvoice />
                          <DeleteInvoice />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <table class="hidden min-w-full text-gray-900 md:table">
                  <thead class="rounded-lg text-left text-sm font-normal">
                    <tr>
                      <th scope="col" class="px-4 py-5 font-medium sm:pl-6">
                        Customer
                      </th>
                      <th scope="col" class="px-3 py-5 font-medium">
                        Email
                      </th>
                      <th scope="col" class="px-3 py-5 font-medium">
                        Amount
                      </th>
                      <th scope="col" class="px-3 py-5 font-medium">
                        Date
                      </th>
                      <th scope="col" class="px-3 py-5 font-medium">
                        Status
                      </th>
                      <th scope="col" class="relative py-3 pl-6 pr-3">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    {invoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        class="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                      >
                        <td class="whitespace-nowrap py-3 pl-6 pr-3">
                          <div class="flex items-center gap-3">
                            <img
                              src={invoice.image_url}
                              class="rounded-full"
                              width={28}
                              height={28}
                              alt={\`\${invoice.name}'s profile picture\`}
                            />
                            <p>{invoice.name}</p>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-3">
                          {invoice.email}
                        </td>
                        <td class="whitespace-nowrap px-3 py-3">
                          {formatCurrency(invoice.amount)}
                        </td>
                        <td class="whitespace-nowrap px-3 py-3">
                          {formatDateToLocal(invoice.date)}
                        </td>
                        <td class="whitespace-nowrap px-3 py-3">
                          <InvoiceStatus status={invoice.status} />
                        </td>
                        <td class="whitespace-nowrap py-3 pl-6 pr-3">
                          <div class="flex justify-end gap-3">
                            <UpdateInvoice />
                            <DeleteInvoice />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      }}
      onPending={() => <InvoicesTableSkeleton />}
      onRejected={(error) => {
        console.error(error);
        return <div>Error</div>;
      }}
    />
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/table.tsx"
        />
        <p>
          We miss him <code>fetchFilteredInvoices()</code> function that fetches
          the invoices data. You can create this function at the end of the{" "}
          <code>lib/data.ts</code> file:
        </p>
        <CodeBlock
          code={`// src/lib/data.ts
            
// ...

import { InvoicesTable, LatestInvoiceRaw, Revenue } from './definitions';

// ..

const ITEMS_PER_PAGE = 6;

export const fetchFilteredInvoices = server$(async function (
  query: string,
  currentPage: number,
) {
  console.log('query', query);
  console.log('currentPage', currentPage);
  const pool = await getPool();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const invoices = await pool.query<InvoicesTable>(\`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE $1 OR
        customers.email ILIKE $1 OR
        invoices.amount::text ILIKE $1 OR
        invoices.date::text ILIKE $1 OR
        invoices.status ILIKE $1
      ORDER BY invoices.date DESC
      LIMIT $2 OFFSET $3
    \`, [\`%\${query}%\`, ITEMS_PER_PAGE, offset]);

    // console.log('invoices', invoices);
    await pool.end();

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
});`}
          icon="typescript"
          language="tsx"
          text="src/lib/data.ts"
          hideLineNumbers
        />

        <p>
          With these changes in place, go ahead and test it out. If you search
          for a term, you'll update the URL, which will send a new request to
          the server, data will be fetched on the server, and only the invoices
          that match your query will be returned.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Best practice: Debouncing"
          id="best-practice:-debouncing"
          level="h3"
        />

        <p>
          Congratulations! You've implemented search with Qwik! But there's
          something you can do to optimize it.
        </p>

        <p>
          Inside your <code>handleSearch</code> function, add the following{" "}
          <code>console.log</code>:
        </p>

        <CodeBlock
          code={`// src/components/ui/search.tsx
// ..
const handleSearch = $(function handleSearch(term: string) {
  console.log(\`Searching... \${term}\`);

  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set("query", term);
  } else {
    params.delete("query");
  }
  nav(\`\${pathname}?\${params.toString()}\`, {
    replaceState: true,
  });
});
// ..`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 3, character: 0 },
              end: { line: 3, character: 38 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Then type "Emil" into your search bar and check the console in dev
          tools. What is happening?
        </p>

        <CodeBlock
          code={`Searching... E
Searching... Em
Searching... Emi
Searching... Emil`}
          icon="terminal"
          language="bash"
          text="Console output"
        />

        <p>
          You're updating the URL on every keystroke, and therefore querying
          your database on every keystroke! This isn't a problem as our
          application is small, but imagine if your application had thousands of
          users, each sending a new request to your database on each keystroke.
        </p>

        <p>
          <strong>Debouncing</strong> is a programming practice that limits the
          rate at which a function can fire. In our case, you only want to query
          the database when the user has stopped typing.
        </p>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>How Debouncing Works:</strong>
          </p>
          <ol>
            <li>
              <strong>Trigger Event</strong>: When an event that should be
              debounced (like a keystroke in the search box) occurs, a timer
              starts.
            </li>
            <li>
              <strong>Wait</strong>: If a new event occurs before the timer
              expires, the timer is reset.
            </li>
            <li>
              <strong>Execution</strong>: If the timer reaches the end of its
              countdown, the debounced function is executed.
            </li>
          </ol>
        </blockquote>

        <p>
          For this, we will create our own hook: <code>useDebouncer()</code>
        </p>

        <p>
          In the <code>src/</code> folder create <code>/hooks/</code> folder.
        </p>

        <p>
          Inside the <code>hooks/</code> folder, create a new file called{" "}
          <code>debouncer.ts</code>
        </p>

        <p>
          Here's the code for the <code>debouncer.ts</code> file:
        </p>

        <CodeBlock
          code={`// src/hooks/debouncer.ts

import { $, useSignal, type QRL } from "@builder.io/qwik";

export const useDebouncer = (fn: QRL<(args: any) => void>, delay: number) => {
  const timeoutId = useSignal<number>();

  return $((args: any) => {
    clearTimeout(timeoutId.value);
    timeoutId.value = Number(setTimeout(() => fn(args), delay));
  });
};`}
          icon="typescript"
          language="tsx"
          text="src/hooks/debouncer.ts"
        />

        <p>
          This hook will take two arguments: the function you want to debounce
          and the delay in milliseconds. It will return a new function that will
          debounce the original function.
        </p>

        <p>
          Now, import <code>useDebouncer</code> into your{" "}
          <code>search.tsx</code> file:
        </p>

        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";
import { useDebouncer } from "~/hooks/useDebouncer";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;
  const pathname = loc.url.pathname;
  const nav = useNavigate();

  const handleSearch = $(function handleSearch(term: string) {
    console.log(\`Searching... \${term}\`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    nav(\`\${pathname}?\${params.toString()}\`, {
      replaceState: true,
    });
  });

  const debouncedSearch = useDebouncer(handleSearch, 300);

  return (
    <div class="relative flex flex-1 flex-shrink-0">
      <label for="search" class="sr-only">
        Search
      </label>
      <input
        class="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onInput$={(e) => {
          const inputValue = (e.target as HTMLInputElement).value;
          debouncedSearch(inputValue);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <HiMagnifyingGlassOutline class="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
});`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 52 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 27, character: 0 },
              end: { line: 27, character: 58 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 39, character: 0 },
              end: { line: 39, character: 38 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Now, when you type into the search bar, you'll see that the console
          only logs the search term once you've stopped typing for 300
          milliseconds.
        </p>

        <CodeBlock
          code={`Searching... Emil`}
          icon="terminal"
          language="bash"
          text="Console output"
        />

        <p>
          By debouncing, you can reduce the number of requests sent to your
          database, thus saving resources.
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <Quiz
          question="What problem does debouncing solve in the search feature?"
          options={[
            {
              text: "It speeds up database queries",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "It makes the URL bookmarkable",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "It prevents a new database query on every keystroke",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "It helps in SEO optimization",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Check the section above!"
          responseText="That's right! Debouncing prevents a new database query on every keystroke, thus saving resources."
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Adding pagination"
          id="adding-pagination"
          level="h2"
        />

        <p>
          After introducing the search feature, you'll notice the table displays
          only 6 invoices at a time. This is because the{" "}
          <code>fetchFilteredInvoices()</code> function in <code>data.ts</code>{" "}
          returns a maximum of 6 invoices per page.
        </p>

        <p>
          Adding pagination allows users to navigate through the different pages
          to view all the invoices. Let's see how you can implement pagination
          using URL params, just like you did with search.
        </p>

        <p>
          At the end <code>src/lib/data</code> file paste the following code:
        </p>

        <CodeBlock
          code={`// src/lib/data.ts
// ...
export const fetchInvoicesPages = server$(async function (query: string) {
  const pool = await getPool();
  try {
    const count = await pool.query(\`SELECT COUNT(*)
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
      customers.name ILIKE $1 OR
      customers.email ILIKE $1 OR
      invoices.amount::text ILIKE $1 OR
      invoices.date::text ILIKE $1 OR
      invoices.status ILIKE $1
      \`, [\`%\${query}%\`]);

  const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    await pool.end();
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
});`}
          icon="typescript"
          language="javascript"
          text="src/lib/data.ts"
        />

        <p>
          This function will return the total number of pages based on the
          search query. For example, if there are 12 invoices that match the
          search query, and each page displays 6 invoices, then the total number
          of pages would be 2.
        </p>

        <p>
          Now, in the <code>src/components/ui/invoices/pagination.tsx</code>{" "}
          file, import:
        </p>

        <ul>
          <li>
            <code>useLocation()</code> from <code>@builder.io/qwik-city</code>
          </li>
          <li>
            <code>Resource</code> and <code>useResource$</code> from{" "}
            <code>@builder.io/qwik</code>
          </li>
          <li>
            <code>fetchInvoicesPages()</code> function from{" "}
            <code>lib/data</code>
          </li>
          <li>
            <code>generatePagination()</code> function from{" "}
            <code>src/lib/utils</code>
          </li>
        </ul>

        <p>
          We use <code>useResource$</code> to fetch the total number of pages
          and <code>Resource</code> to render the pagination.
        </p>

        <p>
          Here's the updated <code>pagination.tsx</code> file:
        </p>

        <CodeBlock
          code={`// src/components/ui/invoices/pagination.tsx

import {
  HiArrowLeftOutline,
  HiArrowRightOutline,
} from "@qwikest/icons/heroicons";
import { Link, useLocation } from "@builder.io/qwik-city";
import { generatePagination } from "~/lib/utils";
import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { fetchInvoicesPages } from "~/lib/data";

export const Pagination = component$(() => {
  const loc = useLocation();
  const currentPage = Number(loc.url.searchParams.get("page")) || 1;

  const totalPagesResource = useResource$(async () => {
    const searchParams = loc.url.searchParams;
    const query = searchParams.get("query") || "";
    return fetchInvoicesPages(query);
  });

  return (
    <>
      <Resource
        value={totalPagesResource}
        onResolved={(totalPages) => {
          const allPages = generatePagination(currentPage, totalPages);
          return (
            <div class="inline-flex">
              <PaginationArrow
                direction="left"
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
              />

              <div class="flex -space-x-px">
                {allPages.map((page, index) => {
                  let position:
                    | "first"
                    | "last"
                    | "single"
                    | "middle"
                    | undefined;

                  if (index === 0) position = "first";
                  if (index === allPages.length - 1) position = "last";
                  if (allPages.length === 1) position = "single";
                  if (page === "...") position = "middle";

                  return (
                    <PaginationNumber
                      key={page}
                      href={createPageURL(page)}
                      page={page}
                      position={position}
                      isActive={currentPage === page}
                    />
                  );
                })}
              </div>

              <PaginationArrow
                direction="right"
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
              />
            </div>
          );
        }}
        onPending={() => null}
        onRejected={(error) => {
          console.error(error);
          return <div>Error</div>;
        }}
      />
    </>
  );
});

const PaginationNumber = component$(
  //...
);

const PaginationArrow = component$(
 //...
);`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/pagination.tsx"
        />

        <p>
          The changes made to the pagination aim to make the component more
          dynamic and synchronize it with the URL parameters. Here is a summary
          of the main modifications:
        </p>

        <ul>
          <li>
            <code>useLocation</code>: Allows access to URL parameters to
            determine the current page and search query. This synchronizes the
            URL state with the component.
          </li>
          <li>
            <code>currentPage</code> constant determined the current page from
            the <code>page</code> parameter.
          </li>
          <li>
            <code>useResource$</code>: Facilitates asynchronous data fetching
            (such as the total number of pages) based on the current search
            parameters. This makes the component more dynamic and responsive to
            URL changes.
          </li>
          <li>
            <code>Resource</code>: Manages conditional rendering based on the
            resource state (loading, success, error). This allows displaying the
            pagination only when the necessary data is available.
          </li>
          <li>
            <code>generatePagination</code>: Generates a list of pages to
            display in the pagination. This function is called after
            successfully fetching the total number of pages.
          </li>
          <li>
            <code>PaginationArrow</code> and <code>PaginationNumber</code>:
            Individual components to display navigation arrows and page numbers,
            respectively. Their state is determined based on the current page
            and total number of pages.
          </li>
          <li>
            <code>createPageURL</code>: Dynamically constructs the pagination
            links based on the current page and URL parameters, ensuring smooth
            navigation between pages.
          </li>
        </ul>

        <p>
          The last function, <code>createPageURL</code>, do not exist yet. We
          will create it in the next steps. 👇
        </p>

        <CodeBlock
          code={`// src/components/ui/invoices/pagination.tsx

// ...

export const Pagination = component$(() => {
  const loc = useLocation();
  const currentPage = Number(loc.url.searchParams.get("page")) || 1;

  const totalPagesResource = useResource$(async ({ track }) => {
    // ...
  });

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(loc.url.searchParams);
    params.set("page", pageNumber.toString());
    return \`\${loc.url.pathname}?\${params.toString()}\`;
  };

  return (
    <>
      <Resource
        // ...
      />
    </>
  );
});
// ...`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/invoices/pagination.tsx"
          hideLineNumbers
          decorations={[
            {
              start: { line: 12, character: 0 },
              end: { line: 16, character: 4 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>Here's a breakdown of what's happening:</p>
        <ul>
          <li>
            <code>createPageURL</code> creates an instance of the current search
            parameters.
          </li>
          <li>
            Then, it updates the "page" parameter to the provided page number.
          </li>
          <li>
            Finally, it constructs the full URL using the pathname and updated
            search parameters.
          </li>
        </ul>

        <p>
          The rest of the <code>&lt;Pagination&gt;</code> component deals with
          styling and different states (first, last, active, disabled, etc). We
          won't go into detail for this course, but feel free to look through
          the code to see where <code>createPageURL</code> is being called.
        </p>

        <p>
          Finally, when the user types a new search query, you want to reset the
          page number to 1. You can do this by updating the{" "}
          <code>handleSearch</code> function in your <code>&lt;Search&gt;</code>{" "}
          component:
        </p>

        <CodeBlock
          code={`// src/components/ui/search.tsx

import { component$, $ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import { HiMagnifyingGlassOutline } from "@qwikest/icons/heroicons";
import { useDebouncer } from "~/hooks/useDebouncer";

export const Search = component$(({ placeholder }: { placeholder: string }) => {
  const loc = useLocation();
  const searchParams = loc.url.searchParams;
  const pathname = loc.url.pathname;
  const nav = useNavigate();

  const handleSearch = $(function handleSearch(term: string) {

    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    nav(\`\${pathname}?\${params.toString()}\`, { replaceState: true });
  });

  // ...`}
          icon="typescript"
          language="tsx"
          text="src/components/ui/search.tsx"
          decorations={[
            {
              start: { line: 16, character: 0 },
              end: { line: 16, character: 28 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Summary" id="" />

        <p>
          Congratulations! You've just implemented search and pagination using
          URL Params and Next.js APIs.
        </p>

        <p>To summarize, in this chapter:</p>

        <ul>
          <li>
            You've handled search and pagination with URL search parameters
            instead of client state.
          </li>
          <li>
            You've fetched data asynchronously using Qwik's{" "}
            <code>useResource$</code>.
          </li>
          <li>
            You're using the <code>useLocation</code> hook for smoother,
            client-side transitions.
          </li>
          <li>You've implemented debouncing to optimize the search feature.</li>
          <li>
            You've dynamically constructed pagination links using the
            <code>createPageURL</code> function.
          </li>
          <li>
            You've managed conditional rendering based on the resource state
            with Qwik's <code>Resource</code> component.
          </li>
        </ul>

        <p>
          These patterns differ from what you may be used to when working with
          client-side React, but hopefully, you now better understand the
          benefits of using URL search params and lifting this state to the
          server.
        </p>

        <p>Well done !</p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Source code" id="source-code" />
        <p>
          You can find the source code for chapter 10 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/24-chapter-11-adding-search-and-pagination"
            text="GitHub"
          />
          .
        </p>

        <div class="px-4 md:px-8">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9037123747"
          ></ins>
        </div>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={10}
          text="You've learned how to stream components with <Resource /> and loading skeletons."
        />
        <GoToNextChapterBlock
          goToChapter={11}
          title="Mutating data"
          text="Learn how to update data in your database."
          disabledButton
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});
