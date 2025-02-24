// src/components/learn/dashboardApp/handlingErrorsContent/tryCatchFinallySoluceOne.tsx

import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const TryCatchFinallySoluceOne = component$(() => {
  return (
    <CodeBlock
      code={`export const createInvoice = async function (data: { customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);
  const date = new Date().toISOString().split('T')[0];

  let pool;

  try {
    pool = await getPool();

    await pool.query(
      \`INSERT INTO invoices (customer_id, amount, status, date)
      VALUES ($1, $2, $3, $4)\`,
      [data.customerId, amountInCents, data.status, date],
    );

    return {
      success: true,
      customerId: data.customerId,
      amount: amountInCents,
      status: data.status,
      date: date
    };
  } catch (error) {
    console.error('Error creating invoice:', error);
    return {
      success: false,
    }
  } finally {
    if (pool) await pool.end();
  }
};`}
      icon="typescript"
      language="tsx"
      text="src/lib/actions.ts"
    />
  );
});
