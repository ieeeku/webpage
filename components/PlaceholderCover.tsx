export default function PlaceholderCover({
  label,
  kicker,
  className = "",
}: {
  label: string;
  kicker?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-neutral ${className}`}
    >
      <div
        className="grid-texture absolute inset-0 opacity-60"
        aria-hidden="true"
      />
      <div className="absolute inset-0 border border-secondary/15" aria-hidden="true" />
      <div className="relative px-6 text-center">
        {kicker && (
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-tertiary">
            {kicker}
          </p>
        )}
        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.02em] text-secondary">
          {label}
        </p>
      </div>
    </div>
  );
}
