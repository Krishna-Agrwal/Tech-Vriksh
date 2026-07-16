import Image from 'next/image';
import Link from 'next/link';
import { hackathons } from '@/app/data';

export default function HackathonsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Hackathons</div>
        <h1 className="tv-heading mt-2 text-4xl tracking-[-0.04em]">Flagship builds and prep series</h1>
        <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
          The list is intentionally short. HackVriksh is treated as the primary hackathon, with the pre-hackathon series shown separately.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {hackathons.map((hackathon, index) => (
          <article key={hackathon.slug} className={`tv-card rounded-[1.8rem] p-6 ${index === 0 ? 'tv-card-cyan' : ''}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="tv-mono text-xs uppercase tracking-[0.3em] text-[color:var(--tv-magenta)]">{hackathon.heroMetric}</div>
                <h2 className="tv-heading mt-3 text-3xl tracking-[-0.04em]">{hackathon.title}</h2>
                <div className="mt-2 text-sm text-[color:var(--tv-text-secondary)]">{hackathon.tagline}</div>
              </div>
              <span className="tv-tag rounded-full px-3 py-1 tv-mono text-xs uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">Detail page</span>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
                <Image src={hackathon.coverImage} alt={hackathon.title} width={1400} height={820} className="h-56 w-full object-cover" />
              </div>
              <div className="flex flex-col justify-between rounded-[1.4rem] border border-white/10 bg-white/4 p-4">
                <div>
                  <div className="tv-mono text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--tv-text-secondary)]">What’s inside</div>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--tv-text-secondary)]">{hackathon.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/hackathons/${hackathon.slug}`}
                    className="tv-button tv-button-primary rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
                  >
                    Open detail page
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
