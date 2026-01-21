import type { Locale } from "@/lib/i18n";
import { JobsListingsContent } from "./jobs-listings-content";

export type JobsListingsSectionProps = {
  locale: Locale;
  query: string;
};

export function JobsListingsSection({ locale, query }: JobsListingsSectionProps) {
  return <JobsListingsContent locale={locale} query={query} />;
}

