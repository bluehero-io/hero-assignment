import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSafeLocale, locales } from "@/lib/i18n";

/**
 * Props for the locale layout.
 */
export type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

/**
 * Generate static locale paths.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * Locale-aware layout with shared navigation.
 */
export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang);

  return (
    <div className="min-h-screen px-6 pb-16 pt-10">
      <SiteHeader locale={locale} />
      <main className="mx-auto mt-12 w-full max-w-6xl">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
