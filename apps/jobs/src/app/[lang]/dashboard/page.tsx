import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the dashboard page.
 */
export type DashboardPageProps = {
  params: { lang: string };
};

/**
 * Hiring dashboard page.
 */
export default function DashboardPage({ params }: DashboardPageProps) {
  const locale = getSafeLocale(params.lang as Locale);
  const messages = getMessages(locale);

  return (
    <div className="space-y-10">
      <SectionHeading title={messages.dashboard.title} subtitle={messages.dashboard.subtitle} />
      <div className="glass-panel rounded-3xl p-8 text-white">
        <SectionHeading
          title={messages.dashboard.pipelineTitle}
          subtitle={messages.dashboard.pipelineSubtitle}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {messages.dashboard.pipeline.map((item, index) => (
            <FadeIn key={item.stage} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl border border-white/20 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{item.stage}</div>
                <div className="mt-2 text-2xl font-semibold">{item.value}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>{messages.dashboard.actions.primary}</Button>
          <Button variant="ghost">{messages.dashboard.actions.secondary}</Button>
        </div>
      </div>
    </div>
  );
}
