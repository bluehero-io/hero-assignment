import { Suspense } from "react";
import { SearchInput } from "@/components/search-input";
import { SectionHeading } from "@/components/section-heading";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";
import { JobsListingsSection } from "./_components/jobs-listings-section";
import { JobsListingsSkeleton } from "./_components/jobs-listings-skeleton";

/**
 * Props for the jobs page.
 */
export type JobsPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ q?: string | string[] }>;
};

/**
 * Hero jobs listing page.
 */
export default async function JobsPage({ params, searchParams }: JobsPageProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);
  
  const resolvedSearchParams =
    (await (searchParams || Promise.resolve({} as { q?: string | string[] }))) || {};
  const query =
    typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q.trim() : "";

  return (
    <div className="space-y-10">
      <SectionHeading title={messages.jobs.title} subtitle={messages.jobs.subtitle} />
      <SearchInput initialQuery={query} />
      <div className="flex flex-wrap gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {messages.jobs.filtersLabel}
        </span>
        {messages.jobs.filters.map((filter) => (
          <span key={filter} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            {filter}
          </span>
        ))}
      </div>
      <Suspense key={query} fallback={<JobsListingsSkeleton />}>
        <JobsListingsSection locale={locale} query={query} />
      </Suspense>
    </div>
  );
}
