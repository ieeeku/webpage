const areas = [
  {
    tag: "R&D",
    title: "Research & Innovation",
    body: "Encouraging research, experimentation, and innovative ideas that address real-world challenges."
  },
  {
    tag: "AIC",
    title: "Academia–Industry Connection",
    body: "Bridging students with industry professionals and creating opportunities for collaboration and knowledge exchange."
  },
  {
    tag: "TECH",
    title: "Technical Development",
    body: "Building practical technical skills through workshops, projects, hackathons, seminars, and hands-on learning."
  },
  {
    tag: "GIN",
    title: "Global IEEE Network",
    body: "Connecting students with the global IEEE community and providing opportunities to participate in international initiatives."
  },
  {
    tag: "COMM",
    title: "Community & STEM Outreach",
    body: "Promoting STEM education and technology through outreach programs, awareness activities, and community engagement."
  },
];

export default function FocusAreas() {
  return (
    <section className="border-b border-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-label uppercase text-tertiary">
              # What we run
            </p>
            <h2 className="mt-3 text-h1 text-primary">Five areas, one branch.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.tag}
              // 'relative' creates the container for the absolute glowing border
              className="group relative rounded-lg bg-surface p-6 text-primary transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Glowing Border Layer */}
              <div className="absolute -inset-[1px] -z-10 rounded-lg bg-gradient-to-r from-sky-500 to-sky-700 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              {/* Sharp Inner Border Line */}
              <div className="absolute inset-0 -z-10 rounded-lg border border-sky-500/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="font-mono text-label uppercase text-tertiary">
                {area.tag}
              </span>
              <h3 className="mt-3 text-[1.05rem] font-medium">{area.title}</h3>
              <p className="mt-2 text-body text-secondary">{area.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};   
