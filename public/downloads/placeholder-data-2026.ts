// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://www.learn-qwik.com/learn/dashboard-app-2026/fetching-data-2026

import type { Customer, Invoice, Revenue, User } from "./definitions-2026";

const users: User[] = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@qwikmail.com",
    password: "123456",
  },
];

const customers: Customer[] = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "3958dc9e-737f-4377-85e9-fec4b6a6442a",
    name: "Hector Simpson",
    email: "hector@simpson.com",
    image_url: "/customers/hector-simpson.png",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "/customers/steven-tey.png",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "/customers/steph-dietz.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    name: "Emil Kowalski",
    email: "emil@kowalski.com",
    image_url: "/customers/emil-kowalski.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
];

const invoices: Invoice[] = [
  {
    id: "9f1c2a44-7d8b-4c91-a2b3-1f3e9a7b6c01",
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2026-01-12",
  },
  {
    id: "2c7e5d90-1a3f-4e88-b7c4-9d1f0a6e2b11",
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2026-02-03",
  },
  {
    id: "6b8a3f21-5c7d-4f91-9e12-3a6d7c2b8f22",
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2025-12-29",
  },
  {
    id: "a7c9d3e1-2f4b-4a56-8c91-0e7d6a3b5c33",
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2026-03-10",
  },
  {
    id: "b3f1d7c8-9a2e-4d71-8b56-2c1a9f4e6d44",
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2026-01-25",
  },
  {
    id: "d8a2c4f1-6b9e-4c33-a7f1-5e2d8b7c9f55",
    customer_id: customers[7].id,
    amount: 54246,
    status: "pending",
    date: "2025-11-16",
  },
  {
    id: "e1b3d9a7-4c2f-4e88-9d61-7a3c2b5f8e66",
    customer_id: customers[6].id,
    amount: 666,
    status: "pending",
    date: "2026-02-14",
  },
  {
    id: "f4c7a1d2-8e3b-4f55-9c12-1b7d6e3a9f77",
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2025-10-09",
  },
  {
    id: "1a9e3d7b-6c4f-4a88-8d22-9f5b1c3e7d88",
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2026-03-01",
  },
  {
    id: "3c5f7a1d-9b2e-4d66-8f91-2a7c4e9b1d99",
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2025-12-07",
  },
  {
    id: "5e1a9c7d-2b4f-4e33-9a81-6c3d7f2b8e10",
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2026-02-19",
  },
  {
    id: "7b2c4e9d-1f3a-4a55-8d71-9c6e2b3f7a21",
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2025-11-03",
  },
  {
    id: "8d3f1a7c-6b2e-4c91-9a52-3f7b1e6c9d32",
    customer_id: customers[2].id,
    amount: 8945,
    status: "paid",
    date: "2026-01-08",
  },
  {
    id: "0f7a3c9d-2b6e-4d55-8c41-7a1e3b9f6d43",
    customer_id: customers[0].id,
    amount: 8945,
    status: "paid",
    date: "2026-03-04",
  },
  {
    id: "4a6d9f1c-3b7e-4e88-9c22-5f1a7d3b8e54",
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2025-10-05",
  },
];

const revenue: Revenue[] = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { customers, invoices, revenue, users };
