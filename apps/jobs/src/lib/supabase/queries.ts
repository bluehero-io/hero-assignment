import type { RoleListing } from "@/data/roles";
import type { Locale } from "@/lib/i18n";
import { getRoleListings } from "@/data/roles";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Fetch role listings from a public view, falling back to locale content.
 */
export async function fetchRoleListings(locale: Locale): Promise<RoleListing[]> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return getRoleListings(locale);
  }

  const { data, error } = await supabase
    .schema("public")
    .from("role_listings_view")
    .select("id,title,team,location,type,summary")
    .order("id");

  if (error || !data) {
    return getRoleListings(locale);
  }

  return data;
}
