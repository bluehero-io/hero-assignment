/**
 * Props for the MetricCard component.
 */
export type MetricCardProps = {
  label: string;
  value: string;
};

/**
 * Statistic card for quick metrics.
 */
export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="glass-panel flex flex-col gap-2 rounded-2xl px-4 py-3">
      <span className="text-xs uppercase tracking-[0.3em] text-white/60">{label}</span>
      <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
  );
}
