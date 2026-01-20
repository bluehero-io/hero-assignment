import { FadeIn } from "@/components/motion/fade-in";
import { HighlightCard } from "@/components/highlight-card";
import { HeroCard } from "@/components/hero-card";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { fetchHeroListings } from "@/lib/supabase/queries";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the home page.
 */
export type HomePageProps = {
  params: Promise<{ lang: string }>;
};

/**
 * Portal home page.
 */
export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);
  const listings = await fetchHeroListings(locale);

  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-indigo-300" />
              {messages.home.heroTag}
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">
              {messages.home.heroTitle}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base text-white/70 md:text-lg">{messages.home.heroSubtitle}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Button>{messages.home.heroCta}</Button>
          </FadeIn>
        </div>
        <div className="grid gap-4">
          {messages.home.stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.1 + index * 0.05}>
              <MetricCard label={stat.label} value={stat.value} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={messages.home.highlightTitle} subtitle={messages.home.highlightSubtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <FadeIn key={listing.id} delay={0.05 + index * 0.05}>
              <HeroCard locale={locale} listing={listing} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading title={messages.home.heroListingsTitle} subtitle={messages.home.heroListingsSubtitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {messages.home.highlights.map((highlight, index) => (
            <FadeIn key={highlight.title} delay={0.05 + index * 0.05}>
              <HighlightCard title={highlight.title} description={highlight.description} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
