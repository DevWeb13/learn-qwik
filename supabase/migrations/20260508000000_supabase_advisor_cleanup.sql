-- Supabase Advisor cleanup:
-- - remove direct broad updates on shares
-- - stop exposing internal SECURITY DEFINER helpers through PostgREST RPC
-- - optimize auth.uid() calls in Daily Qwik Lab RLS policies

do $$
begin
  if to_regclass('public.shares') is not null then
    execute 'drop policy if exists "Allow authenticated users to update shares" on public.shares';
  end if;
end $$;

do $$
begin
  if to_regprocedure('public.handle_new_user()') is not null then
    execute 'revoke all on function public.handle_new_user() from public, anon, authenticated';
    execute 'grant execute on function public.handle_new_user() to service_role';
  end if;

  if to_regprocedure('public.handle_user_update()') is not null then
    execute 'revoke all on function public.handle_user_update() from public, anon, authenticated';
    execute 'grant execute on function public.handle_user_update() to service_role';
  end if;

  if to_regprocedure('public.get_chapter_feedback_counts(text, integer)') is not null then
    execute 'revoke all on function public.get_chapter_feedback_counts(text, integer) from public, anon, authenticated';
    execute 'grant execute on function public.get_chapter_feedback_counts(text, integer) to service_role';
  end if;

  if to_regprocedure('public.get_public_chapter_feedback(text, integer, integer)') is not null then
    execute 'revoke all on function public.get_public_chapter_feedback(text, integer, integer) from public, anon, authenticated';
    execute 'grant execute on function public.get_public_chapter_feedback(text, integer, integer) to service_role';
  end if;
end $$;

drop policy if exists "Users can read their own daily challenge completions"
  on public.daily_challenge_completions;

create policy "Users can read their own daily challenge completions"
  on public.daily_challenge_completions
  for select
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own daily challenge completions"
  on public.daily_challenge_completions;

create policy "Users can insert their own daily challenge completions"
  on public.daily_challenge_completions
  for insert
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own daily challenge completions"
  on public.daily_challenge_completions;

create policy "Users can update their own daily challenge completions"
  on public.daily_challenge_completions
  for update
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can read their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can read their own daily challenge preferences"
  on public.daily_challenge_preferences
  for select
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can insert their own daily challenge preferences"
  on public.daily_challenge_preferences
  for insert
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update their own daily challenge preferences"
  on public.daily_challenge_preferences;

create policy "Users can update their own daily challenge preferences"
  on public.daily_challenge_preferences
  for update
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can read their own daily challenge email sends"
  on public.daily_challenge_email_sends;

create policy "Users can read their own daily challenge email sends"
  on public.daily_challenge_email_sends
  for select
  using ((select auth.uid()) = user_id);
