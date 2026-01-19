/**
 * Props for the HighlightCard component.
 */
export type HighlightCardProps = {
  title: string;
  description: string;
};

/**
 * Highlight card used on the home page.
 */
export function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
  );
}
