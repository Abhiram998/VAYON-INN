import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function PreFooterCTA() {
  return (
    <section className="bg-charcoal py-24 md:py-32 w-full">
      <ScrollReveal className="max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-brand-gold mb-6 tracking-wide drop-shadow-sm gold-shimmer">
          Your Sanctuary Awaits
        </h2>
        <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mb-12 font-light">
          Experience the pinnacle of quiet luxury and refined elegance. Let us curate your perfect escape.
        </p>
        <Link
          href="/rooms"
          className="inline-block bg-transparent border border-brand-gold/60 text-brand-gold px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-brand-gold/10 hover:border-brand-gold transition-colors duration-300"
        >
          Reserve Your Stay
        </Link>
      </ScrollReveal>
    </section>
  );
}
