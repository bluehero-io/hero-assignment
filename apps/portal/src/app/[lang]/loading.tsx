"use client";

import { useParams } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Shared loading state for locale routes.
 */
export default function LoadingState() {
  const params = useParams<{ lang?: string }>();
  const locale = getSafeLocale(params?.lang as Locale | undefined);
  const messages = getMessages(locale);

  return (
    <div className="glass-panel flex animate-pulse flex-col gap-3 rounded-3xl p-8 text-white">
      <span className="text-lg font-semibold">{messages.loading.title}</span>
      <span className="text-sm text-white/70">{messages.loading.subtitle}</span>
    </div>
  );
}
