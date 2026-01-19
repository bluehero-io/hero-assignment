import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

/**
 * Props for the SiteHeader component.
 */
export type SiteHeaderProps = {
  locale: Locale;
};

/**
 * Shared site header with navigation.
 */
export function SiteHeader({ locale }: SiteHeaderProps) {
  const messages = getMessages(locale);

  return (
    <header className="glass-panel sticky top-6 z-20 mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-full px-6 py-3">
      <div className="flex items-center gap-3 text-sm font-semibold text-white">
        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
        {messages.nav.brand}
      </div>
      <nav className="hidden items-center gap-5 text-sm text-white/80 md:flex">
        {messages.nav.primaryLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
      <Button>{messages.nav.cta}</Button>
    </header>
  );
}
