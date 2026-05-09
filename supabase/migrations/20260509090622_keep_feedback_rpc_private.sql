-- Keep feedback read RPCs private to avoid exposing SECURITY DEFINER functions
-- through PostgREST. Public chapter pages call them server-side with the
-- service role client instead of granting direct anon/authenticated access.

do $$
begin
  if to_regprocedure('public.get_chapter_feedback_counts(text, integer)') is not null then
    execute 'revoke all on function public.get_chapter_feedback_counts(text, integer) from public, anon, authenticated';
    execute 'grant execute on function public.get_chapter_feedback_counts(text, integer) to service_role';
  end if;

  if to_regprocedure('public.get_public_chapter_feedback(text, integer, integer)') is not null then
    execute 'revoke all on function public.get_public_chapter_feedback(text, integer, integer) from public, anon, authenticated';
    execute 'grant execute on function public.get_public_chapter_feedback(text, integer, integer) to service_role';
  end if;
end $$;
