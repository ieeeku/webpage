import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaCover from "@/components/MediaCover";
import { events, getEventBySlug, formatEventDate } from "@/lib/data/events";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const event = getEventBySlug(params.slug);
  return { title: event ? event.title : "Event" };
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <main>
      <div className="mx-auto max-w-4xl px-6 pt-10 md:px-10">
        <Link
          href="/events"
          className="font-mono text-label uppercase text-secondary transition-colors hover:text-tertiary"
        >
          ← All events
        </Link>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-8 md:px-10">
        <MediaCover
          src={event.cover}
          alt={event.title}
          label={event.title}
          kicker={event.society ?? "Branch"}
          className="aspect-[16/9] w-full rounded-lg"
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-label uppercase text-tertiary">
            {formatEventDate(event.date)}
          </span>
          {event.time && (
            <span className="font-mono text-label uppercase text-secondary">
              · {event.time}
            </span>
          )}
          {event.status === "past" && (
            <span className="rounded-sm border border-secondary/30 px-2 py-0.5 font-mono text-[0.62rem] uppercase text-secondary">
              Past event
            </span>
          )}
        </div>

        <h1 className="mt-4 text-display-sm text-primary">{event.title}</h1>
        <p className="mt-2 font-mono text-[0.78rem] uppercase tracking-[0.02em] text-secondary">
          {event.location}
        </p>

        <div className="mt-8 space-y-4">
          {event.description.map((paragraph, i) => (
            <p key={i} className="text-body text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-secondary/25 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.02em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-10">
            <p className="font-mono text-label uppercase text-secondary">Gallery</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {event.gallery.map((src) => (
                <MediaCover
                  key={src}
                  src={src}
                  alt={`${event.title} photo`}
                  label={event.title}
                  className="aspect-[4/3] w-full rounded-md"
                />
              ))}
            </div>
          </div>
        )}

        {event.status === "upcoming" && event.registerUrl && (
          <a
            href={event.registerUrl}
            className="mt-10 inline-block rounded-md bg-tertiary px-6 py-3 font-mono text-label uppercase text-on-primary transition-opacity hover:opacity-90"
          >
            Register interest
          </a>
        )}
      </article>
    </main>
  );
}
