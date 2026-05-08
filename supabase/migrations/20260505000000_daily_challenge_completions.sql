create extension if not exists pgcrypto;

create table public.daily_challenge_completions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  challenge_id text not null,
  challenge_date date not null,
  selected_option_id text not null,
  is_correct boolean not null default false,
  xp_awarded integer not null default 0,
  completed_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint daily_challenge_completions_user_date_key unique (user_id, challenge_date)
);

create index daily_challenge_completions_user_date_idx
  on public.daily_challenge_completions (user_id, challenge_date desc);

alter table public.daily_challenge_completions enable row level security;

create policy "Users can read their own daily challenge completions"
  on public.daily_challenge_completions
  for select
  using (auth.uid() = user_id);

create policy "Users can insert their own daily challenge completions"
  on public.daily_challenge_completions
  for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own daily challenge completions"
  on public.daily_challenge_completions
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
