// src/components/learn/dashboardApp/handlingErrorsContent/tryCatchFinallySoluceTwo.tsx

import { component$ } from "@builder.io/qwik";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const TryCatchFinallySoluceTwo = component$(() => {
  return (
    <CodeBlock
      code={`export const updateInvoice = async function (data: { id: string, customerId: string, amount: number, status: string }) {
  const amountInCents = Math.round(data.amount * 100);

  let pool;
  

  try {
    pool = await getPool();

    await pool.query(
      \`UPDATE invoices
       SET customer_id = $1, amount = $2, status = $3
       WHERE id = $4\`,
      [data.customerId, amountInCents, data.status, data.id],
    );

    return {
      success: true,
      id: data.id,
      customerId: data.customerId,
      amount: amountInCents,
      status: data.status,
    };
  } catch (error) {
    console.error('Error updating invoice:', error);
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
