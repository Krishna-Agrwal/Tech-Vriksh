import Image from 'next/image';
import { communityInstagramUrl, communityJoinUrl, communityLinkedInUrl } from '../data';

// TODO(Krishna): move this into ../data.ts alongside your other exports once
// you've finalized real apply-links for each department. For now every role
// points at the general community join form.
const openRoles = [
  {
    title: 'WhatsApp Community Management',
    blurb: 'Keep the groups active, welcoming, and spam-free. Run polls, surface questions to the right people.',
    commitment: '3-5 hrs/week',
  },
  {
    title: 'Social Media Management',
    blurb: 'Plan and post across Instagram and LinkedIn, turn event recaps into content, track what lands.',
    commitment: '4-6 hrs/week',
  },
  {
    title: 'Video Editing',
    blurb: 'Cut event highlights, reels, and workshop clips. Bring raw footage to something people share.',
    commitment: 'Per-project',
  },
];

// TODO(Krishna): swap in real photos/links once available (per your notes,
// these are the pending items) — currently text-only so nothing looks fake.
const recentActivity = [
  {
    label: 'Bootcamp',
    title: 'Ethereum Build Camp',
    detail: '8-day virtual bootcamp by Aya Community — Tech Vriksh as event partner.',
  },
  {
    label: 'In-person',
    title: 'Road to Devcon 8, Delhi NCR',
    detail: 'Co-organized meetup bringing the Ethereum Build Camp community together offline.',
  },
  {
    label: 'Workshop',
    title: 'Ctrl + Future: Agentic Observability',
    detail: 'Hands-on session hosted at OpsTree Global, Noida — part of the ongoing Ctrl + Future series.',
  },
];

const faqs = [
  {
    q: 'Is there a cost to join?',
    a: 'No. Joining the community and applying to a role are both free.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No. Roles start with a trial period so you can learn the workflow and we can see it\u2019s a good fit, both ways.',
  },
  {
    q: 'Is this remote or in-person?',
    a: 'Most day-to-day work (WhatsApp, social, editing) is remote. Events and workshops happen in and around Delhi NCR.',
  },
  {
    q: 'What happens after I apply?',
    a: 'You\u2019ll hear back by email with next steps, usually within a few days, and start with a short trial period before full onboarding.',
  },
];

export default function JoinPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="tv-card tv-card-cyan rounded-[2rem] p-6 sm:p-8">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Join</div>
          <h1 className="tv-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Join, learn, grow, pass it on</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            Tech Vriksh treats members like a sapling being rooted properly: useful information, real exposure, and a community
            that can help you become the person who gives shade later.
          </p>
          <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10">
            <Image src="/sample/community-01.svg" alt="Sample community banner" width={1200} height={900} className="h-56 w-full object-cover" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={communityJoinUrl}
              target="_blank"
              rel="noreferrer"
              className="tv-button tv-button-primary rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]"
            >
              Join the Community
            </a>
            <span className="tv-tag rounded-full px-4 py-3 text-sm text-[color:var(--tv-text-secondary)]">Google Form community sign-up</span>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Quick links</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <a
                href={communityJoinUrl}
                target="_blank"
                rel="noreferrer"
                className="tv-button tv-button-primary rounded-[1.2rem] border border-white/10 p-4 text-left"
              >
                <div className="tv-heading text-xl">Join Form</div>
                <div className="mt-1 text-sm text-[color:var(--tv-text-secondary)]">Get into the community list</div>
              </a>
              <a
                href={communityInstagramUrl}
                target="_blank"
                rel="noreferrer"
                className="tv-button rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-left"
              >
                <div className="tv-heading text-xl">Instagram</div>
                <div className="mt-1 text-sm text-[color:var(--tv-text-secondary)]">See posts, reels, and updates</div>
              </a>
              <a
                href={communityLinkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="tv-button rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-left"
              >
                <div className="tv-heading text-xl">LinkedIn</div>
                <div className="mt-1 text-sm text-[color:var(--tv-text-secondary)]">Follow the company page</div>
              </a>
            </div>
          </div>

          <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">How joining works</div>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
              <li><span className="tv-heading text-[color:var(--tv-text-primary)]">1. Fill the form.</span> Tell us what you're into and how much time you've got.</li>
              <li><span className="tv-heading text-[color:var(--tv-text-primary)]">2. Trial period.</span> Try the role for real before committing long-term \u2014 no pressure either way.</li>
              <li><span className="tv-heading text-[color:var(--tv-text-primary)]">3. Full onboarding.</span> Get added to the team channels and start shipping.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Open roles</div>
            <span className="tv-tag rounded-full px-3 py-1 text-xs text-[color:var(--tv-text-secondary)]">Hiring now</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {openRoles.map((role) => (
              <div key={role.title} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                <div className="tv-heading text-lg">{role.title}</div>
                <p className="mt-2 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{role.blurb}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="tv-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">{role.commitment}</span>
                  <a
                    href={communityJoinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="tv-button tv-button-primary rounded-full px-3 py-1.5 text-xs font-medium text-[color:var(--tv-text-primary)]"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
        <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Recent activity</div>
          <ul className="mt-4 space-y-4">
            {recentActivity.map((item) => (
              <li key={item.title} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                <span className="tv-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--tv-text-secondary)]">{item.label}</span>
                <div className="tv-heading mt-1 text-lg">{item.title}</div>
                <p className="mt-1 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">What happens after joining</div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
            <li>Receive event updates and community notes in one place.</li>
            <li>Get early visibility on workshops, sessions, and offline events.</li>
            <li>Stay close to the team if you want to help, volunteer, or collaborate.</li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <div className="tv-card rounded-[1.6rem] p-5 sm:p-6">
          <div className="tv-mono text-xs uppercase tracking-[0.32em] text-[color:var(--tv-text-secondary)]">Frequently asked</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                <div className="tv-heading text-base">{item.q}</div>
                <p className="mt-2 text-sm leading-6 text-[color:var(--tv-text-secondary)]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
