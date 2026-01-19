"use client";

import { useParams } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

/**
 * Props for the locale error state.
 */
export type ErrorStateProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Shared error state for locale routes.
 */
export default function ErrorState({ reset }: ErrorStateProps) {
  const params = useParams<{ lang?: string }>();
  const locale = getSafeLocale(params?.lang as Locale | undefined);
  const messages = getMessages(locale);

  return (
    <div className="glass-panel flex flex-col gap-4 rounded-3xl p-8 text-white">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{messages.error.title}</h1>
        <p className="text-sm text-white/70">{messages.error.subtitle}</p>
      </div>
      <Button onClick={reset}>{messages.error.action}</Button>
    </div>
  );
}
