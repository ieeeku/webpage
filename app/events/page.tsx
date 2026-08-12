import type { Metadata } from "next";
import EventCard from "@/components/EventCard";
import { getUpcomingEvents, getPastEvents } from "@/lib/data/events";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <main>
      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:px-10 md:pt-20">
          <p className="font-mono text-label uppercase text-tertiary"># Events</p>
          <h1 className="mt-3 text-display-sm text-primary">
            Workshops, build nights, and delegations.
          </h1>
          <p className="mt-4 max-w-lg text-body text-secondary">
            Everything the branch runs, from weekly open labs to conference
            delegations. Each society keeps its own rhythm — filter by tag on
            the card, or browse everything below.
          </p>
        </div>
      </section>

      <section className="border-b border-secondary/20">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <p className="font-mono text-label uppercase text-secondary">
            Upcoming — {upcoming.length}
          </p>
          {upcoming.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="mt-6 text-body text-secondary">
              Nothing scheduled right now — check back soon.
            </p>
          )}
        </div>
      </section>

      {past.length > 0 && (
        <section>
          <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
            <p className="font-mono text-label uppercase text-secondary">
              Past — {past.length}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {past.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
