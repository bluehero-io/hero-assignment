import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

/**
 * Shape of a hero listing card.
 */
export type HeroListing = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

/**
 * Return hero listings for the selected locale.
 */
export function getHeroListings(locale: Locale): HeroListing[] {
  return getMessages(locale).jobs.listings;
}
