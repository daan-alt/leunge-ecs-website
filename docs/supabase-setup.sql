-- One-time setup for form attachments (src/lib/uploads.ts).
-- Run in the Supabase SQL editor of the project whose URL/publishable key are set as
-- NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (GitHub secrets
-- SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY, see .github/workflows/deploy.yml).

-- Public bucket: files are readable by anyone with the (unguessable, UUID-based) link
-- that ends up in the notification email. 10 MB limit matches MAX_FILE_BYTES.
insert into storage.buckets (id, name, public, file_size_limit)
values ('request-attachments', 'request-attachments', true, 10485760)
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit;

-- Visitors may only upload. No select/update/delete policy, so nobody can list,
-- overwrite or remove files through the API; public links still work.
create policy "Website visitors can upload request attachments"
on storage.objects for insert to anon
with check (bucket_id = 'request-attachments');
