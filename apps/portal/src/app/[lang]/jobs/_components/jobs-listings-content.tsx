import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { fetchHeroListings } from "@/lib/supabase/queries";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { JobsEmptyState } from "./jobs-empty-state";

export type JobsListingsContentProps = {
  locale: Locale;
  query: string;
};

export async function JobsListingsContent({
  locale,
  query
}: JobsListingsContentProps) {
  const messages = getMessages(locale);

  const listings = await fetchHeroListings(locale);

  const filteredListings =
    query.length > 0
      ? listings.filter((listing) =>
          listing.title.toLowerCase().includes(query.toLowerCase())
        )
      : listings;

  if (filteredListings.length === 0) {
    return <JobsEmptyState query={query} locale={locale} />;
  }

  return (
    <div className="grid gap-4" aria-live="polite" aria-atomic="true">
      {filteredListings.map((listing, index) => (
        <FadeIn key={listing.id} delay={0.05 + index * 0.05}>
          <div className="glass-panel flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                {listing.team}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{listing.title}</h3>
                <p className="text-sm text-white/70">{listing.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-white/70">
                <span className="rounded-full border border-white/20 px-3 py-1">
                  {listing.location}
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1">
                  {listing.type}
                </span>
              </div>
            </div>
            <Button asChild>
              <Link href={`/${locale}/jobs/${listing.id}`}>{messages.home.heroCta}</Link>
            </Button>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

