create extension if not exists pgcrypto;

alter table public.daily_challenge_completions
  add column if not exists completed_date date;

update public.daily_challenge_completions
set completed_date = coalesce(
  completed_date,
  (completed_at at time zone 'Europe/Paris')::date,
  challenge_date
)
where completed_date is null;

alter table public.daily_challenge_completions
  alter column completed_date set default ((now() at time zone 'Europe/Paris')::date),
  alter column completed_date set not null;

create index if not exists daily_challenge_completions_weekly_idx
  on public.daily_challenge_completions (challenge_date desc, user_id);

create index if not exists daily_challenge_completions_completed_date_idx
  on public.daily_challenge_completions (user_id, completed_date desc);

create table if not exists public.daily_challenge_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  email_opt_in boolean not null default false,
  unsubscribe_token text not null default encode(gen_random_bytes(24), 'hex'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint daily_challenge_preferences_user_id_key unique (user_id),
  constraint daily_challenge_preferences_unsubscribe_token_key unique (unsubscribe_token)
);

create index if not exists daily_challenge_preferences_email_opt_in_idx
  on public.daily_challenge_preferences (email_opt_in)
  where email_opt_in = true;

alter table public.daily_challenge_preferences enable row level security;

drop policy if exists "Users can read their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can read their own daily challenge preferences"
  on public.daily_challenge_preferences
  for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can insert their own daily challenge preferences"
  on public.daily_challenge_preferences
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can update their own daily challenge preferences"
  on public.daily_challenge_preferences
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.daily_challenge_email_sends (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  challenge_date date not null,
  resend_email_id text,
  status text not null default 'queued',
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint daily_challenge_email_sends_user_date_key unique (user_id, challenge_date),
  constraint daily_challenge_email_sends_status_check check (status in ('queued', 'sent', 'failed'))
);

create index if not exists daily_challenge_email_sends_date_status_idx
  on public.daily_challenge_email_sends (challenge_date desc, status);

alter table public.daily_challenge_email_sends enable row level security;

drop policy if exists "Users can read their own daily challenge email sends"
  on public.daily_challenge_email_sends;

create policy "Users can read their own daily challenge email sends"
  on public.daily_challenge_email_sends
  for select
  using (auth.uid() = user_id);
