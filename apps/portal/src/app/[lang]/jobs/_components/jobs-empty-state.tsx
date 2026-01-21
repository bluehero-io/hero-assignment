import { FadeIn } from "@/components/motion/fade-in";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

export type JobsEmptyStateProps = {
  query: string;
  locale: Locale;
};

export function JobsEmptyState({ query, locale }: JobsEmptyStateProps) {
  const messages = getMessages(locale);

  return (
    <FadeIn delay={0.1}>
      <div className="glass-panel rounded-3xl p-12 text-center text-white">
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
            <svg
              className="h-8 w-8 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{messages.jobs.searchNoResults}</h3>
            {query && (
              <p className="text-sm text-white/70">
                {messages.jobs.searchNoResultsSubtitle.replace("{query}", query)}
              </p>
            )}
            <p className="text-xs text-white/60">{messages.jobs.searchNoResultsHint}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

