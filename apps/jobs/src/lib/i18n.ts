import { en } from "@/locales/en";
import { nl } from "@/locales/nl";

/**
 * Supported locale codes.
 */
export const locales = ["en", "nl"] as const;

/**
 * Union type of supported locales.
 */
export type Locale = (typeof locales)[number];

const messages = {
  en,
  nl
} satisfies Record<Locale, typeof en>;

/**
 * Determine whether a locale is supported.
 */
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Get localized copy for the provided locale.
 */
export function getMessages(locale: Locale) {
  return messages[locale];
}

/**
 * Select a safe locale fallback.
 */
export function getSafeLocale(value?: string): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return "en";
}
