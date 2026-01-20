import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { fetchRoleListings } from "@/lib/supabase/queries";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the role detail page.
 */
export type RoleDetailPageProps = {
  params: Promise<{ lang: string; id: string }>;
};

/**
 * Detailed role command view.
 */
export default async function RoleDetailPage({ params }: RoleDetailPageProps) {
  const { lang, id } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);
  const listings = await fetchRoleListings(locale);
  const listing = listings.find((item) => item.id === id);

  if (!listing) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <section className="glass-panel rounded-3xl p-8 text-white">
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-white/60">{listing.team}</div>
          <h1 className="text-3xl font-semibold">{listing.title}</h1>
          <p className="text-sm text-white/70">{listing.summary}</p>
          <div className="flex flex-wrap gap-3 text-xs text-white/70">
            <span className="rounded-full border border-white/20 px-3 py-1">{listing.location}</span>
            <span className="rounded-full border border-white/20 px-3 py-1">{listing.type}</span>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>{messages.roleDetail.actions.primary}</Button>
          <Button variant="ghost">{messages.roleDetail.actions.secondary}</Button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-panel rounded-3xl p-6 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            {messages.roleDetail.sections.mission}
          </h2>
          <p className="mt-4 text-sm text-white/70">{listing.summary}</p>
        </div>
        <div className="glass-panel rounded-3xl p-6 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            {messages.roleDetail.sections.outcomes}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-white/70">
            {messages.roleDetail.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
        <div className="glass-panel rounded-3xl p-6 text-white">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            {messages.roleDetail.sections.traits}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-white/70">
            {messages.roleDetail.traits.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
