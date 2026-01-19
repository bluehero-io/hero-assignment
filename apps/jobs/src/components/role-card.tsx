import Link from "next/link";
import type { RoleListing } from "@/data/roles";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

/**
 * Props for the RoleCard component.
 */
export type RoleCardProps = {
  locale: Locale;
  listing: RoleListing;
};

/**
 * Card for role listing previews.
 */
export function RoleCard({ locale, listing }: RoleCardProps) {
  const messages = getMessages(locale);

  return (
    <article className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6 text-white">
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-[0.3em] text-white/60">{listing.team}</div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{listing.title}</h3>
          <p className="text-sm text-white/70">{listing.summary}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-white/70">
          <span className="rounded-full border border-white/20 px-3 py-1">{listing.location}</span>
          <span className="rounded-full border border-white/20 px-3 py-1">{listing.type}</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-white/60">{messages.home.heroTag}</span>
        <Button asChild>
          <Link href={`/${locale}/roles/${listing.id}`}>{messages.home.heroCta}</Link>
        </Button>
      </div>
    </article>
  );
}
