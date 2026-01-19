import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

/**
 * Shape of a role listing card.
 */
export type RoleListing = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: string;
  summary: string;
};

/**
 * Return role listings for the selected locale.
 */
export function getRoleListings(locale: Locale): RoleListing[] {
  return getMessages(locale).roles.listings as unknown as RoleListing[];
}
