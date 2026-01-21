export function JobsListingsSkeleton() {
  return (
    <div className="grid gap-4" aria-label="Loading listings">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="glass-panel flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex-1 space-y-2">
            <div className="h-3 w-24 animate-pulse rounded-full bg-white/10" />
            <div className="space-y-2">
              <div className="h-5 w-48 animate-pulse rounded-full bg-white/10" />
              <div className="h-4 w-full max-w-md animate-pulse rounded-full bg-white/10" />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="h-6 w-24 animate-pulse rounded-full bg-white/10" />
              <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
            </div>
          </div>
          <div className="h-10 w-32 animate-pulse rounded-full bg-white/10 md:ml-4" />
        </div>
      ))}
    </div>
  );
}

