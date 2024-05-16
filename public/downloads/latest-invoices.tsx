// @ts-nocheck

import { component$ } from "@builder.io/qwik";
import { HiArrowPathOutline } from "@qwikest/icons/heroicons";
import type { LatestInvoice } from "~/lib/definitions";

interface LatestInvoicesProps {
  latestInvoices: LatestInvoice[];
}

export const LatestInvoices = component$<LatestInvoicesProps>(
  ({ latestInvoices }) => {
    return (
      <div class="flex w-full flex-col md:col-span-4">
        <h2 class="lusitana mb-4 text-xl md:text-2xl">Latest Invoices</h2>
        <div class="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
          <div class="bg-white px-6">
            {latestInvoices.map((invoice, i) => {
              return (
                <div
                  key={invoice.id}
                  class={
                    "flex flex-row items-center justify-between py-4" +
                    (i !== 0 ? " border-t" : "")
                  }
                >
                  <div class="flex items-center">
                    <img
                      src={invoice.image_url}
                      alt={`${invoice.name}'s profile picture`}
                      class="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div class="min-w-0">
                      <p class="truncate text-sm font-semibold md:text-base">
                        {invoice.name}
                      </p>
                      <p class="hidden text-sm text-gray-500 sm:block">
                        {invoice.email}
                      </p>
                    </div>
                  </div>
                  <p
                    class={`lusitana truncate text-sm font-medium md:text-base`}
                  >
                    {invoice.amount}
                  </p>
                </div>
              );
            })}
          </div>
          <div class="flex items-center pb-2 pt-6">
            <HiArrowPathOutline class="h-5 w-5 text-gray-500" />
            <h3 class="ml-2 text-sm text-gray-500 ">Updated just now</h3>
          </div>
        </div>
      </div>
    );
  },
);
