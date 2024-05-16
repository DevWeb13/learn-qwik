// @ts-nocheck

import { component$ } from "@builder.io/qwik";
import {
  HiBanknotesOutline,
  HiClockOutline,
  HiUserGroupOutline,
  HiInboxOutline,
} from "@qwikest/icons/heroicons";

const iconMap = {
  collected: HiBanknotesOutline,
  customers: HiUserGroupOutline,
  pending: HiClockOutline,
  invoices: HiInboxOutline,
};

export const Card = component$(
  ({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: "invoices" | "customers" | "pending" | "collected";
  }) => {
    const Icon = iconMap[type];

    return (
      <div class="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div class="flex p-4">
          <Icon class="h-5 w-5 text-gray-700" />
          <h3 class="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          class="lusitana
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl"
        >
          {value}
        </p>
      </div>
    );
  },
);
