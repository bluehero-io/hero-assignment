import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the employer dashboard page.
 */
export type EmployerPageProps = {
  params: Promise<{ lang: string }>;
};

/**
 * Employer dashboard page.
 */
export default async function EmployerPage({ params }: EmployerPageProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);

  return (
    <div className="space-y-10">
      <SectionHeading title={messages.employer.title} subtitle={messages.employer.subtitle} />
      <div className="glass-panel rounded-3xl p-8 text-white">
        <SectionHeading
          title={messages.employer.pipelineTitle}
          subtitle={messages.employer.pipelineSubtitle}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {messages.employer.pipeline.map((item, index) => (
            <FadeIn key={item.stage} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl border border-white/20 p-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{item.stage}</div>
                <div className="mt-2 text-2xl font-semibold">{item.value}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button>{messages.employer.actions.primary}</Button>
          <Button variant="ghost">{messages.employer.actions.secondary}</Button>
        </div>
      </div>
    </div>
  );
}
