import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center px-margin-mobile">
      <h1 className="font-display-lg text-display-lg text-primary mb-4">404</h1>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Page Not Found</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-8">
        We couldn't find the page you were looking for. It might have been removed, renamed, or did not exist in the first place.
      </p>
      <Link
        href="/"
        className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors"
      >
        Return Home
      </Link>
    </main>
  );
}
