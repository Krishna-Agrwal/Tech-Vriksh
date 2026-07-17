'use client';

import dynamic from 'next/dynamic';
import type { StateMemberCount } from '@/app/data';

const IndiaMap = dynamic(() => import('@/components/india-map').then((mod) => mod.IndiaMap), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] w-full items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/5">
      <span className="tv-mono text-xs uppercase tracking-[0.24em] text-[color:var(--tv-text-secondary)]">Loading map…</span>
    </div>
  )
});

export function IndiaMapLoader({ data }: { data: StateMemberCount[] }) {
  return <IndiaMap data={data} />;
}
