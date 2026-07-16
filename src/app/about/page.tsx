import Image from 'next/image';
import { teamDepartments } from '../data';

const linkedInIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M19.54 3H4.46C3.65 3 3 3.62 3 4.39v15.22C3 20.38 3.65 21 4.46 21h15.08c.81 0 1.46-.62 1.46-1.39V4.39C21 3.62 20.35 3 19.54 3ZM8.38 18.06H5.7V9.27h2.68v8.79ZM7.04 8.08a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.02 9.98h-2.67v-4.27c0-1.02-.02-2.34-1.43-2.34-1.44 0-1.66 1.12-1.66 2.27v4.34h-2.68V9.27h2.57v1.2h.04c.36-.67 1.24-1.38 2.55-1.38 2.73 0 3.23 1.8 3.23 4.14v4.85Z" />
  </svg>
);

const teamMembers = teamDepartments.flatMap((department) =>
  department.members.map((member) => ({
    ...member,
    department: department.department
  }))
);

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="tv-card tv-card-cyan rounded-[2rem] p-6 sm:p-8">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">About</div>
          <h1 className="tv-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">From seed to shade</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            Tech Vriksh starts with a simple idea: a new member arrives like a seed or sapling. The team adds guidance,
            information, and real exposure to the tech world so that person can grow into a Vriksh and eventually offer shade
            to others.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            The community has been running for 1.5+ years, the team is unpaid, and the founder does not take personal income
            from it. Growth has been steady and practical rather than inflated.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tv-tag rounded-full px-3 py-1 tv-mono text-xs uppercase tracking-[0.2em] text-[color:var(--tv-cyan)]">Real</span>
            <span className="tv-tag rounded-full px-3 py-1 tv-mono text-xs uppercase tracking-[0.2em] text-[color:var(--tv-cyan)]">Relevant</span>
            <span className="tv-tag rounded-full px-3 py-1 tv-mono text-xs uppercase tracking-[0.2em] text-[color:var(--tv-cyan)]">Rooted</span>
          </div>
        </div>
        <aside className="tv-card rounded-[2rem] p-6 sm:p-8">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Founder note</div>
          <p className="mt-4 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            Tech Vriksh was started to close the gap between classroom learning and the kind of practical exposure students need once they leave campus. The goal is simple: create honest, useful events that help people build confidence, context, and momentum.
          </p>
          <div className="mt-6 grid gap-3">
            <div className="tv-tag rounded-[1rem] px-4 py-3 text-sm text-[color:var(--tv-text-secondary)]">Running unpaid</div>
            <div className="tv-tag rounded-[1rem] px-4 py-3 text-sm text-[color:var(--tv-text-secondary)]">Team grew from 8 to 19</div>
            <div className="tv-tag rounded-[1rem] px-4 py-3 text-sm text-[color:var(--tv-text-secondary)]">Hosted at Microsoft, ThoughtWorks & OpsTree Global</div>
          </div>
        </aside>
      </section>

      <section className="mt-8">
        <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Team</div>
        <h2 className="tv-heading mt-2 text-3xl tracking-[-0.04em]">Tech Vriksh team profiles</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.name} className="tv-card rounded-[1.6rem] p-5">
              <div className="overflow-hidden rounded-[1rem] border border-white/10">
                <Image src={member.image} alt={member.name} width={900} height={900} className="aspect-square w-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <div className="tv-heading text-xl">{member.name}</div>
                  <div className="tv-mono mt-1 text-[0.72rem] uppercase tracking-[0.24em] text-[color:var(--tv-cyan)]">{member.role}</div>
                </div>
                <span className="tv-tag rounded-full px-3 py-1 tv-mono text-[0.68rem] uppercase tracking-[0.18em] text-[color:var(--tv-magenta)]">
                  {member.department}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{member.focus}</p>
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--tv-cyan)]/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--tv-cyan)] transition-colors hover:border-[color:var(--tv-cyan)] hover:bg-[color:var(--tv-cyan)]/10"
              >
                {linkedInIcon}
                Connect me
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
