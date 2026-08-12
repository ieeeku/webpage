const stats = [
  { value: "20+", label: "Active members" },
  { value: "25+", label: "Expected Events per year" },
  { value: "1", label: "Societies & groups(WIP planned)" },
  { value: "2023", label: "Branch established" },
];

export default function Stats() {
  return (
    <section className="border-b border-secondary/20 bg-surface/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-secondary/20 px-4 sm:grid-cols-2 sm:divide-y-0 md:px-10 lg:grid-cols-4 lg:divide-x">
        {stats.map((stat) => (
          <div key={stat.label} className="px-3 py-8 sm:px-6 md:px-8 md:py-10">
            <p className="text-h1 text-primary">{stat.value}</p>
            <p className="mt-1 font-mono text-label uppercase text-secondary">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
