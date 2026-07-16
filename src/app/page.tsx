import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { Counter } from '@/components/counter';
import { ParallaxLayer } from '@/components/parallax-layer';
import { InstagramEmbed } from '@/components/instagram-embed';
import { communityGalleryPhotos, events, hackathons, speakers, type Speaker } from './data';

function getUpcomingEvent() {
  return events.find((event) => event.status === 'upcoming');
}

function StatCard({
  label,
  value,
  countTo,
  suffix
}: {
  label: string;
  value?: string;
  countTo?: number;
  suffix?: string;
}) {
  return (
    <div className="tv-card rounded-[1.4rem] border border-white/10 p-5 sm:p-6">
      <div className="tv-mono text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">{label}</div>
      <div className="tv-heading mt-3 text-3xl text-[color:var(--tv-text-primary)] tv-glow">
        {countTo !== undefined ? <Counter target={countTo} suffix={suffix} /> : value}
      </div>
    </div>
  );
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="tv-card rounded-[1.4rem] border border-white/10 p-5 sm:p-6">
      <div className="tv-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">{speaker.event}</div>
      <h3 className="tv-heading mt-2 text-xl tracking-[-0.03em]">{speaker.name}</h3>
      <div className="mt-1 text-sm text-[color:var(--tv-magenta)]">{speaker.role}</div>
      <p className="mt-3 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{speaker.topic}</p>
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
    <main className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <ParallaxLayer speed={0.08} className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="tv-glow-blob h-72 w-72 opacity-[0.14] sm:h-96 sm:w-96"
          style={{ top: '-4rem', left: '-6rem', background: 'var(--tv-cyan)' }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={-0.05} className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="tv-glow-blob h-72 w-72 opacity-[0.10] sm:h-96 sm:w-96"
          style={{ top: '18rem', right: '-8rem', background: 'var(--tv-magenta)' }}
        />
      </ParallaxLayer>

      {/* Hero */}
      <section className="tv-hero-in grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
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
              Running for 1.5+ years now, unpaid, and student-facing from day one.
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

      {/* Stats — each card fades in on its own beat instead of all at once */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Reveal delay={0}>
          <StatCard label="Community" countTo={1000} suffix="+ members" />
        </Reveal>
        <Reveal delay={90}>
          <StatCard label="Events / programs" countTo={10} suffix="+ hosted" />
        </Reveal>
        <Reveal delay={180}>
          <StatCard label="Venue history" value="Microsoft · ThoughtWorks · OpsTree Global" />
        </Reveal>
        <Reveal delay={270}>
          <StatCard label="Team shape" value="8 to 19 across 7 departments" />
        </Reveal>
      </div>

      {/* Highlight event — its own section now, no longer sharing space with the gallery */}
      <Reveal className="mt-14">
        <div className="tv-card rounded-[1.8rem] p-6 sm:p-7">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">
            {hasUpcoming ? 'Upcoming event' : 'Event recap'}
          </div>
          <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="tv-heading text-3xl tracking-[-0.04em]">{highlightEvent.title}</h2>
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
            <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
              <Image src={highlightEvent.image} alt={highlightEvent.title} width={1200} height={800} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Speakers — new. Real names only, grows as more sessions happen. */}
      <Reveal className="mt-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Speakers</div>
            <h2 className="tv-heading mt-2 text-3xl tracking-[-0.04em]">People who've spoken at our sessions</h2>
          </div>
          <Link href="/about" className="tv-mono text-xs uppercase tracking-[0.24em] text-[color:var(--tv-cyan)] hover:opacity-80">
            See all speakers →
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <Reveal key={speaker.name} delay={index * 100}>
              <SpeakerCard speaker={speaker} />
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Community Moments — gallery, on its own now */}
      <Reveal className="mt-14">
        <div className="tv-card rounded-[1.5rem] p-5 sm:p-6">
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
      </Reveal>

      {/* 2025 recap — the year-in-review video, pulled straight from Instagram */}
      <Reveal className="mt-14">
        <div className="tv-card rounded-[1.8rem] p-6 sm:p-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">2025 recap</div>
              <h2 className="tv-heading mt-2 text-3xl tracking-[-0.04em]">A year of Tech Vriksh, in one video</h2>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <InstagramEmbed url="https://www.instagram.com/p/DS6c5UpEkm_/" caption="Tech Vriksh 2025 year-in-review video" />
          </div>
        </div>
      </Reveal>

      {/* Hackathon spotlight + credibility — compact side-by-side, kept short on purpose */}
      <Reveal className="mt-14 grid gap-4 sm:grid-cols-2">
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
      </Reveal>

      {/* Featured events */}
      <Reveal className="mt-14">
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
      </Reveal>

      {/* Final CTA */}
      <Reveal className="mt-14 grid gap-6 rounded-[2rem] border border-white/8 bg-[rgba(20,24,25,0.72)] p-6 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
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
      </Reveal>
    </main>
  );
}
