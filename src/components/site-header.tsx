import Image from 'next/image';
import Link from 'next/link';
import { communityJoinUrl, techVrikshLogoUrl } from '@/app/data';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/hackathons', label: 'Hackathons' },
  { href: '/about', label: 'About' },
  { href: '/join', label: 'Join' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[rgba(17,17,17,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-[0_0_18px_rgba(107,239,215,0.18)]">
            <Image src={techVrikshLogoUrl} alt="Tech Vriksh logo" width={72} height={72} className="h-full w-full object-cover" priority />
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="tv-heading text-lg leading-none tracking-[0.2em] text-[color:var(--tv-text-primary)]">TECH VRIKSH</span>
            <span className="tv-mono mt-1 text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--tv-text-secondary)]">Real. Relevant. Rooted.</span>
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-end gap-2 overflow-x-auto text-sm text-[color:var(--tv-text-secondary)] sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition-colors hover:text-[color:var(--tv-cyan)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={communityJoinUrl}
            target="_blank"
            rel="noreferrer"
            className="tv-button tv-button-primary ml-2 rounded-full px-4 py-2 text-sm font-medium text-[color:var(--tv-text-primary)]"
          >
            Join Now
          </a>
        </nav>
      </div>
    </header>
  );
}