import Image from 'next/image';
import Link from 'next/link';
import { events } from '../data';

export default async function EventsPage({
  searchParams
}: {
  searchParams?: Promise<{ filter?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const filter =
    resolvedSearchParams?.filter === 'upcoming'
      ? 'upcoming'
      : resolvedSearchParams?.filter === 'past'
        ? 'past'
        : 'all';
  const filteredEvents = filter === 'all' ? events : events.filter((event) => event.status === filter);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Events</div>
          <h1 className="tv-heading mt-2 text-4xl tracking-[-0.04em]">Workshops, sessions, and offline events</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link className={`tv-tag rounded-full px-4 py-2 ${filter === 'all' ? 'text-[color:var(--tv-cyan)]' : 'text-[color:var(--tv-text-secondary)]'}`} href="/events">
            All
          </Link>
          <Link className={`tv-tag rounded-full px-4 py-2 ${filter === 'upcoming' ? 'text-[color:var(--tv-cyan)]' : 'text-[color:var(--tv-text-secondary)]'}`} href="/events?filter=upcoming">
            Upcoming
          </Link>
          <Link className={`tv-tag rounded-full px-4 py-2 ${filter === 'past' ? 'text-[color:var(--tv-cyan)]' : 'text-[color:var(--tv-text-secondary)]'}`} href="/events?filter=past">
            Past
          </Link>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="tv-card rounded-[1.6rem] border border-white/10 p-8 text-center text-sm leading-7 text-[color:var(--tv-text-secondary)]">
          No upcoming events right now — check back soon, or browse{' '}
          <Link href="/events?filter=past" className="text-[color:var(--tv-cyan)]">
            past events
          </Link>
          .
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
          {filteredEvents.map((event) => (
            <article key={event.slug} className="tv-card h-full rounded-[1.6rem] border border-white/10 p-5 sm:p-6">
              <div className="flex h-full flex-col gap-4">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={1200}
                    height={800}
                    className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em] text-[color:var(--tv-cyan)]">
                      {event.subtitle}
                    </span>
                    <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">
                      {event.format}
                    </span>
                    <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">
                      {event.status}
                    </span>
                  </div>
                  <h2 className="tv-heading mt-3 text-2xl tracking-[-0.04em]">{event.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">{event.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-[color:var(--tv-text-secondary)]">
                    <span className="tv-mono">Date: {event.dateLabel}</span>
                    {event.venue ? <span className="tv-mono">Venue: {event.venue}</span> : null}
                    {event.notes?.map((note) => (
                      <span key={note} className="tv-mono">
                        {note}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <div className="grid gap-3 rounded-[1.2rem] border border-white/10 bg-white/3 p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div className="space-y-2">
                        <div className="tv-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--tv-text-secondary)]">Event card</div>
                        <div className="tv-mono text-sm text-[color:var(--tv-cyan)]">{event.dateLabel}</div>
                        <div className="text-xs leading-5 text-[color:var(--tv-text-secondary)]">{event.venue ?? 'Venue / platform sample text'}</div>
                      </div>
                      {event.status === 'upcoming' ? (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="tv-button tv-button-primary inline-flex justify-center rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
                        >
                          Register
                        </a>
                      ) : (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="tv-button inline-flex justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)] hover:text-[color:var(--tv-cyan)]"
                        >
                          View recap
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
