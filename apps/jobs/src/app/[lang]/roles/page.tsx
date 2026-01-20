import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { fetchRoleListings } from "@/lib/supabase/queries";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the roles page.
 */
export type RolesPageProps = {
  params: Promise<{ lang: string }>;
};

/**
 * Roles listing page.
 */
export default async function RolesPage({ params }: RolesPageProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);
  const listings = await fetchRoleListings(locale);

  return (
    <div className="space-y-10">
      <SectionHeading title={messages.roles.title} subtitle={messages.roles.subtitle} />
      <div className="flex flex-wrap gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {messages.roles.filtersLabel}
        </span>
        {messages.roles.filters.map((filter) => (
          <span key={filter} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            {filter}
          </span>
        ))}
      </div>
      <div className="grid gap-4">
        {listings.map((listing, index) => (
          <FadeIn key={listing.id} delay={0.05 + index * 0.05}>
            <div className="glass-panel flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{listing.team}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{listing.title}</h3>
                  <p className="text-sm text-white/70">{listing.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="rounded-full border border-white/20 px-3 py-1">{listing.location}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">{listing.type}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/${locale}/roles/${listing.id}`}>{messages.home.heroCta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
