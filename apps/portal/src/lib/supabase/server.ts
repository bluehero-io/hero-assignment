import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Build a Supabase server client using environment configuration.
 */
export function createSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false
    }
  });
}
