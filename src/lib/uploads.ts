// Client-side attachment upload to Supabase Storage (no backend — see CLAUDE.md).
// Files go to a public bucket under an unguessable UUID path; the resulting URLs
// are sent along in the Web3Forms email. Bucket + policy setup: docs/supabase-setup.sql.
// Without both env vars set at build time, uploads are disabled and the form
// shows `fileUnavailable` instead of a file picker.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const BUCKET = "request-attachments";

export const uploadsEnabled = Boolean(SUPABASE_URL && SUPABASE_KEY);

export const MAX_FILES = 5;
export const MAX_FILE_BYTES = 10 * 1024 * 1024;
const EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp", "heic", "heif", "pdf", "doc", "docx", "xls", "xlsx"];
export const ACCEPT = EXTENSIONS.map((e) => `.${e}`).join(",");

export type FileError = "fileTooMany" | "fileTooLarge" | "fileType";

export function validateFiles(files: File[]): FileError | null {
  if (files.length > MAX_FILES) return "fileTooMany";
  // Check by extension: HEIC and Office files often arrive with an empty MIME type.
  if (files.some((f) => !EXTENSIONS.includes(f.name.split(".").pop()?.toLowerCase() ?? ""))) return "fileType";
  if (files.some((f) => f.size > MAX_FILE_BYTES)) return "fileTooLarge";
  return null;
}

function safeName(name: string) {
  return name.normalize("NFKD").replace(/[^\w.-]+/g, "_").slice(-100);
}

/** Uploads all files in parallel and returns their public URLs. Throws if any upload fails. */
export async function uploadFiles(files: File[], folder: string): Promise<string[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Uploads not configured");
  const date = new Date().toISOString().slice(0, 10);
  // New-style publishable keys (sb_publishable_…) aren't JWTs and go in `apikey` only.
  const headers: Record<string, string> = { apikey: SUPABASE_KEY, "x-upsert": "false" };
  if (!SUPABASE_KEY.startsWith("sb_")) headers.Authorization = `Bearer ${SUPABASE_KEY}`;

  return Promise.all(
    files.map(async (file) => {
      const path = `${folder}/${date}/${crypto.randomUUID()}/${safeName(file.name)}`;
      const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
        method: "POST",
        headers: { ...headers, "content-type": file.type || "application/octet-stream" },
        body: file,
      });
      if (!res.ok) throw new Error(`Upload failed (${res.status})`);
      return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
    })
  );
}
