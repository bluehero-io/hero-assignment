import type { HeroListing } from "@/data/hero";
import type { Locale } from "@/lib/i18n";
import { getHeroListings } from "@/data/hero";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Fetch hero listings from a public view, falling back to locale content.
 */
export async function fetchHeroListings(locale: Locale): Promise<HeroListing[]> {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return getHeroListings(locale);
  }

  const { data, error } = await supabase
    .schema("public")
    .from("hero_listings_view")
    .select("id,title,team,location,type,summary")
    .order("id");

  if (error || !data) {
    return getHeroListings(locale);
  }

  return data;
}
