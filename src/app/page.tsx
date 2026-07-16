import Image from 'next/image';
import Link from 'next/link';
import { communityGalleryPhotos, events, hackathons } from './data';

function getUpcomingEvent() {
  return events.find((event) => event.status === 'upcoming');
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="tv-card rounded-[1.4rem] border border-white/10 p-5 sm:p-6">
      <div className="tv-mono text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">{label}</div>
      <div className="tv-heading mt-3 text-3xl text-[color:var(--tv-text-primary)] tv-glow">{value}</div>
    </div>
  );
}

export default function HomePage() {
  const upcomingEvent = getUpcomingEvent();
  const hasUpcoming = Boolean(upcomingEvent);
  // Falls back to the most recent event only for display purposes when nothing is upcoming.
  // hasUpcoming is what controls the "Register" vs "View recap" branching below —
  // never assume this fallback event is actually open for registration.
  const highlightEvent = upcomingEvent ?? events[0];
  const flagshipHackathon = hackathons[0];
  const featuredStatusLabel = hasUpcoming ? 'Upcoming highlight' : 'Recent highlight';
  const featuredEvents = ['ctrl-future', 'snap-the-lens', 'techpath-1o-discover-decide-dominate']
    .map((slug) => events.find((event) => event.slug === slug))
    .filter((event): event is NonNullable<typeof event> => Boolean(event));

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-[color:var(--tv-text-secondary)]">
            <span className="tv-mono uppercase tracking-[0.32em] text-[color:var(--tv-cyan)]">Real. Relevant. Rooted.</span>
          </div>
          <div className="max-w-3xl space-y-5">
            <div className="tv-mono text-sm uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">{featuredStatusLabel}</div>
            <h1 className="tv-heading text-5xl leading-[0.96] tracking-[-0.05em] text-[color:var(--tv-text-primary)] sm:text-6xl lg:text-7xl">
              Tech events for engineering students that stay <span className="tv-glow text-[color:var(--tv-cyan)]">practical</span>,
              <span className="tv-glow text-[color:var(--tv-cyan)]"> honest</span>, and rooted in real work.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[color:var(--tv-text-secondary)] sm:text-lg">
              Tech Vriksh runs free offline and online tech events to connect engineering education with industry experience.
              The work is unpaid, the community is student-facing, and the focus stays on what people can actually use.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/join"
              className="tv-button tv-button-primary rounded-full px-6 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
            >
              Join the Community
            </Link>
            <Link
              href="/hackathons"
              className="tv-button rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[color:var(--tv-text-primary)] hover:border-[color:var(--tv-cyan)]/40 hover:text-[color:var(--tv-cyan)]"
            >
              View Hackathons
            </Link>
          </div>
        </div>

        <div className="tv-card tv-card-cyan rounded-[2rem] p-5 sm:p-6">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">At a glance</div>
          <div className="mt-5 space-y-4 border-l border-white/10 pl-4 sm:pl-5">
            <div>
              <div className="tv-mono text-sm uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">{featuredStatusLabel}</div>
              <div className="tv-heading mt-2 text-2xl leading-tight">{highlightEvent.title}</div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{highlightEvent.description}</p>
            </div>
            <div className="tv-divider h-px w-full" />
            <div>
              <div className="tv-mono text-sm uppercase tracking-[0.24em] text-[color:var(--tv-magenta)]">Flagship hackathon</div>
              <div className="tv-heading mt-2 text-2xl leading-tight">{flagshipHackathon.title}</div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{flagshipHackathon.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Community" value="1000+ members" />
        <StatCard label="Events / programs" value="10+ hosted" />
        <StatCard label="Venue history" value="Microsoft · ThoughtWorks · OpsTree Global" />
        <StatCard label="Team shape" value="8 to 19 across 7 departments" />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="tv-card rounded-[1.8rem] p-6 sm:p-7">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">
            {hasUpcoming ? 'Upcoming event' : 'Event recap'}
          </div>
          <h2 className="tv-heading mt-3 text-3xl tracking-[-0.04em]">{highlightEvent.title}</h2>
          <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-white/10">
            <Image src={highlightEvent.image} alt={highlightEvent.title} width={1200} height={800} className="h-52 w-full object-cover" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--tv-text-secondary)]">
            <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em]">{highlightEvent.subtitle}</span>
            <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em]">{highlightEvent.format}</span>
            <span className="tv-tag rounded-full px-3 py-1 tv-mono uppercase tracking-[0.2em]">{highlightEvent.status}</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">{highlightEvent.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {hasUpcoming ? (
              <a
                href={highlightEvent.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="tv-button tv-button-primary rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
              >
                Register
              </a>
            ) : (
              <a
                href={highlightEvent.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="tv-button rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)] hover:border-[color:var(--tv-cyan)]/40 hover:text-[color:var(--tv-cyan)]"
              >
                View recap
              </a>
            )}
            <Link href="/events" className="tv-button rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:text-[color:var(--tv-cyan)]">
              See all events
            </Link>
          </div>
          <div className="mt-5 text-xs leading-6 text-[color:var(--tv-text-secondary)]">
            {highlightEvent.notes?.map((note) => (
              <div key={note} className="tv-mono">
                {note}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="tv-card rounded-[1.5rem] p-5 sm:p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.3em] text-[color:var(--tv-magenta)]">Hackathon spotlight</div>
            <h3 className="tv-heading mt-3 text-2xl">HackVriksh</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
              The flagship hackathon page is kept intentionally flexible for sponsor, track, and prize updates.
            </p>
            <Link className="mt-5 inline-flex text-sm text-[color:var(--tv-cyan)]" href="/hackathons/hackvriksh-code-create-cultivate">
              Open detail page
            </Link>
          </div>
          <div className="tv-card rounded-[1.5rem] p-5 sm:p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.3em] text-[color:var(--tv-cyan)]">Credibility note</div>
            <h3 className="tv-heading mt-3 text-2xl">Hosted at Microsoft, ThoughtWorks & OpsTree Global</h3>
            <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
              That venue history is shown as plain text, not a logo strip, so the site stays factual instead of looking templated.
            </p>
          </div>
          <div className="tv-card rounded-[1.5rem] p-5 sm:p-6 sm:col-span-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="tv-mono text-xs uppercase tracking-[0.3em] text-[color:var(--tv-text-secondary)]">Community photos</div>
                <h3 className="tv-heading mt-2 text-2xl tracking-[-0.04em]">Sample event moments and team frames</h3>
              </div>
              <div className="tv-mono text-xs uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">Photo-style sample layout</div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-12">
              {communityGalleryPhotos.map((src, index) => {
                const isFeatured = index === 0;

                return (
                  <div
                    key={src}
                    className={`group relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5 ${isFeatured ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}`}
                  >
                    <Image
                      src={src}
                      alt={`Community sample ${index + 1}`}
                      width={1200}
                      height={900}
                      className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${isFeatured ? 'aspect-[4/3] md:aspect-[11/8] md:h-full' : 'aspect-[4/3]'}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3">
                      <div className="tv-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--tv-text-secondary)]">Sample frame {index + 1}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Home events</div>
            <h2 className="tv-heading mt-2 text-3xl tracking-[-0.04em]">Three event stories from the archive</h2>
          </div>
          <div className="tv-mono text-xs uppercase tracking-[0.24em] text-[color:var(--tv-text-secondary)]">Photo highlights from the shared sets</div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {featuredEvents.map((event) => (
            <article key={event.slug} className="tv-card flex h-full flex-col rounded-[1.8rem] border border-white/10 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="tv-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--tv-magenta)]">{event.subtitle}</div>
                  <h3 className="tv-heading mt-2 text-2xl tracking-[-0.04em]">{event.title}</h3>
                </div>
                <span className="tv-tag rounded-full px-3 py-1 tv-mono text-[0.68rem] uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">{event.dateLabel}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">{event.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {event.galleryImages?.slice(0, 4).map((src, index) => (
                  <div key={`${event.slug}-${src}`} className="overflow-hidden rounded-[1rem] border border-white/10 bg-white/5">
                    <Image src={src} alt={`${event.title} photo ${index + 1}`} width={1200} height={900} className="aspect-[4/3] w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="tv-button tv-button-primary inline-flex rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]">
                  View event link
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 rounded-[2rem] border border-white/8 bg-[rgba(20,24,25,0.72)] p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-magenta)]">Final call</div>
          <h2 className="tv-heading mt-3 text-3xl tracking-[-0.04em]">If the format feels useful, join the community.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            The membership link is intentionally simple. No extra flow, no fake funnel, just one place to enter the community.
          </p>
        </div>
        <Link href="/join" className="tv-button tv-button-secondary rounded-full px-6 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]">
          Join the Community
        </Link>
      </section>
    </main>
  );
}
