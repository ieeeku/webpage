import CursorGrid from "./CursorGrid";

const affiliations = [
  "IEEE",
  "IEEE Nepal Section",
  "Kathmandu University",
  "Inter-Departmental Club",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-texture relative overflow-hidden border-b border-secondary/20"
    >
    <CursorGrid/>
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <p className="font-mono text-label uppercase text-tertiary">
          # IEEE Kathmandu University Student Branch
        </p>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div>
            <h1 className="text-display-sm text-primary md:text-display">
              Bridging gap between
              <br />
              Academia and Industry.
            </h1>

            <p className="mt-6 max-w-md text-body text-secondary">
              We are a student-driven community focused on bridging academia,
              research, and industry through practical engineering and
              innovation.
            </p>

            <p className="mt-6 max-w-md text-body text-secondary">
              Our mission is to take learning beyond the classroom. By fostering
              a culture of scientific inquiry and hands-on exploration in
              computing, cybersecurity, and hardware design, we empower students
              to collaborate, share knowledge, and graduate industry-ready.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="rounded-md bg-tertiary px-5 py-3 font-mono text-label uppercase text-on-primary transition-opacity hover:opacity-90"
              >
                Apply for membership
              </a>
              <a
                href="/events"
                className="rounded-md border border-secondary/40 px-5 py-3 font-mono text-label uppercase text-primary transition-colors hover:border-tertiary hover:text-tertiary"
              >
                View events
              </a>
            </div>
          </div>

          {/* Signature element: a terminal-style status card */}
          <div className="self-start rounded-lg border border-secondary/25 bg-surface font-mono text-[0.8rem] shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-1.5 border-b border-secondary/20 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
              <span className="ml-2 text-[0.68rem] text-secondary">
                branch.sh
              </span>
            </div>
            <div className="space-y-2 px-4 py-5 leading-relaxed">
              <p className="text-secondary">
                <span className="text-tertiary">$</span> branch --info
              </p>
              <p>
                <span className="text-secondary">chapter</span>{" "}
                <span className="text-primary">IEEE KU Student Branch</span>
              </p>
              <p>
                <span className="text-secondary">campus</span>{" "}
                <span className="text-primary">Dhulikhel, Kavrepalanchowk, Nepal</span>
              </p>
              <p>
                <span className="text-secondary">established</span>{" "}
                <span className="text-primary">2023</span>
              </p>
              <p>
                <span className="text-secondary">revived</span>{" "}
                <span className="text-primary">2026</span>
              </p>
              <p>
                <span className="text-secondary">members</span>{" "}
                <span className="text-primary">20+ active</span>
              </p>
              <p>
                <span className="text-secondary">status</span>{" "}
                <span className="text-tertiary">● active</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations strip */}
      <div className="border-t border-secondary/20 bg-neutral/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-6 py-6 md:px-10">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.04em] text-secondary">
            Affiliated with
          </span>
          {affiliations.map((name) => (
            <span
              key={name}
              className="font-mono text-[0.7rem] uppercase tracking-[0.02em] text-secondary/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
