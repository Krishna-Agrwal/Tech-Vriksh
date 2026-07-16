import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { hackathons } from '../../data';

export default async function HackathonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const hackathon = hackathons.find((item) => item.slug === resolvedParams.slug);

  if (!hackathon) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="tv-card tv-card-cyan rounded-[2rem] p-6 sm:p-8">
        <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-magenta)]">{hackathon.heroMetric}</div>
        <h1 className="tv-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">{hackathon.title}</h1>
        <p className="mt-2 text-sm text-[color:var(--tv-cyan)]">{hackathon.tagline}</p>
        <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10">
          <Image src={hackathon.coverImage} alt={hackathon.title} width={1400} height={820} className="h-72 w-full object-cover" />
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">{hackathon.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={hackathon.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="tv-button tv-button-primary rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
          >
            Register
          </a>
          <Link href="/hackathons" className="tv-button rounded-full border border-white/10 px-5 py-3 text-sm font-medium hover:text-[color:var(--tv-cyan)]">
            Back to hackathons
          </Link>
        </div>
      </div>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="tv-card rounded-[1.8rem] p-6">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Tracks</div>
          <div className="mt-4 space-y-4">
            {hackathon.tracks.map((track) => (
              <div key={track.name} className="rounded-[1.2rem] border border-white/8 bg-white/3 p-4">
                <div className="tv-mono text-sm uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">{track.name}</div>
                <p className="mt-2 text-sm leading-7 text-[color:var(--tv-text-secondary)]">{track.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs leading-6 text-[color:var(--tv-text-secondary)]">
            {hackathon.notes.map((note) => (
              <div key={note} className="tv-mono">
                {note}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="tv-card rounded-[1.8rem] p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Sponsors</div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
              {hackathon.sponsors.map((item) => (
                <li key={item} className="tv-tag rounded-[1rem] px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
          <div className="tv-card rounded-[1.8rem] p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Prizes & FAQ</div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
              {hackathon.prizes.map((item) => (
                <div key={item} className="tv-tag rounded-[1rem] px-4 py-3">
                  {item}
                </div>
              ))}
              {hackathon.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1rem] border border-white/8 bg-white/3 p-4">
                  <div className="tv-heading text-lg text-[color:var(--tv-text-primary)]">{faq.question}</div>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
