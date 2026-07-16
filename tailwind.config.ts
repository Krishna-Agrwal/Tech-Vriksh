import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        tv: {
          bg: 'var(--tv-bg)',
          'bg-alt': 'var(--tv-bg-alt)',
          cyan: 'var(--tv-cyan)',
          'cyan-muted': 'var(--tv-cyan-muted)',
          magenta: 'var(--tv-magenta)',
          'magenta-muted': 'var(--tv-magenta-muted)',
          green: 'var(--tv-green)',
          'green-light': 'var(--tv-green-light)',
          'text-primary': 'var(--tv-text-primary)',
          'text-secondary': 'var(--tv-text-secondary)'
        }
      }
    }
  },
  plugins: []
};

export default config;
