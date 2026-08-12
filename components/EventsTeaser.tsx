import Link from "next/link";
import EventCard from "./EventCard";
import { getUpcomingEvents } from "@/lib/data/events";

export default function EventsTeaser() {
  const events = getUpcomingEvents(3);

  return (
    <section className="border-b border-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-10 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-label uppercase text-tertiary">
              # Upcoming
            </p>
            <h2 className="mt-3 text-h1 text-primary">On the calendar.</h2>
          </div>
          <Link
            href="/events"
            className="font-mono text-label uppercase text-secondary transition-colors hover:text-tertiary"
          >
            View all events →
          </Link>
        </div>

        {events.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-8 text-body text-secondary">
            No upcoming events yet. Check the full events page for past highlights.
          </p>
        )}
      </div>
    </section>
  );
}
