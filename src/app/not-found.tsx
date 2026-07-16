import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-4">
      <div className="tv-card rounded-[2rem] p-8 text-center">
        <h1 className="tv-heading text-4xl">Page not found</h1>
        <p className="mt-3 text-sm leading-7 text-[color:var(--tv-text-secondary)]">
          The route does not exist yet or the slug needs to be corrected.
        </p>
        <Link href="/" className="mt-6 inline-flex tv-button tv-button-primary rounded-full px-5 py-3 text-sm font-medium text-[color:var(--tv-text-primary)]">
          Go home
        </Link>
      </div>
    </main>
  );
}
