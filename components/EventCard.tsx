import Link from "next/link";
import MediaCover from "./MediaCover";
import { EventItem, formatEventDate } from "@/lib/data/events";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-surface transition-colors hover:bg-surface/80"
    >
      <MediaCover
        src={event.cover}
        alt={event.title}
        label={event.title}
        kicker={event.society ?? "Branch"}
        className="aspect-[16/10] w-full"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-label uppercase text-secondary">
            {formatEventDate(event.date)}
          </span>
          {event.status === "past" && (
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.04em] text-secondary/60">
              Past
            </span>
          )}
        </div>
        <h3 className="mt-3 text-[1.05rem] font-medium text-primary transition-colors group-hover:text-tertiary">
          {event.title}
        </h3>
        <p className="mt-2 text-body text-secondary">{event.summary}</p>
        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.02em] text-secondary/70">
          {event.location}
        </p>
      </div>
    </Link>
  );
}
