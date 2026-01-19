/**
 * Props for the SectionHeading component.
 */
export type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

/**
 * Section heading with title and subtitle.
 */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-sm text-white/70">{subtitle}</p>
    </div>
  );
}
