import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-margin-mobile py-24">
      <span className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-6">Error</span>
      <h1 className="font-display-lg text-display-lg text-primary mb-4">404</h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Page Not Found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-10 font-light leading-relaxed">
        We couldn&apos;t find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
      </p>
      <Link
        href="/"
        className="border border-brand-gold/40 text-brand-gold px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-brand-gold/10 transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}
