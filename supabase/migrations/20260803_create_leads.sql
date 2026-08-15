create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  project_interest text,
  preferred_visit_date date,
  message text,
  source text not null default 'website'
);

alter table public.leads enable row level security;

create policy "service role can manage leads"
  on public.leads
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

