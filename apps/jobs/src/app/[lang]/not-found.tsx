import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the locale not-found view.
 */
export type NotFoundProps = {
  params?: { lang?: string };
};

/**
 * Locale-aware not-found view.
 */
export default function NotFound({ params }: NotFoundProps) {
  const locale = getSafeLocale(params?.lang as Locale | undefined);
  const messages = getMessages(locale);

  return (
    <div className="glass-panel flex flex-col gap-4 rounded-3xl p-8 text-white">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{messages.notFound.title}</h1>
        <p className="text-sm text-white/70">{messages.notFound.subtitle}</p>
      </div>
      <Button asChild>
        <Link href={`/${locale}`}>{messages.notFound.action}</Link>
      </Button>
    </div>
  );
}
