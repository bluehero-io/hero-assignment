import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

/**
 * Props for the SiteFooter component.
 */
export type SiteFooterProps = {
  locale: Locale;
};

/**
 * Shared site footer.
 */
export function SiteFooter({ locale }: SiteFooterProps) {
  const messages = getMessages(locale);

  return (
    <footer className="glass-panel mx-auto mt-16 w-full max-w-6xl rounded-3xl px-8 py-6 text-sm text-white/70">
      <div className="flex flex-col gap-2">
        <span className="text-white">{messages.footer.title}</span>
        <span>{messages.footer.description}</span>
        <span className="text-white/60">{messages.footer.secondary}</span>
      </div>
    </footer>
  );
}
