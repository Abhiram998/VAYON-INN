import Link from "next/link";
import { hotelConfig } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer className="bg-charcoal w-full py-[var(--spacing-section-gap)] border-t border-brand-gold/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
        <div className="md:col-span-1 mb-10 md:mb-0">
          <Link href="/" className="block mb-6">
            <span className="font-display-lg text-headline-md tracking-tighter gold-shimmer block">
              {hotelConfig.name}
            </span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-brand-gold/60 block mt-1">
              {hotelConfig.brand}
            </span>
          </Link>
          <p className="font-body-md text-body-md text-white/40 font-light">
            © {new Date().getFullYear()} {hotelConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-2">
            Explore
          </p>
          <Link
            href="/about"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href="/rooms"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Suites
          </Link>
          <Link
            href="/dining"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Private Dining
          </Link>
          <Link
            href="/wellness"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Wellness
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-2">
            Legal
          </p>
          <Link
            href="/privacy"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-2">
            Connect
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:contact@luminagrand.com"
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                mail
              </span>
            </a>
            <a
              href="tel:+1234567890"
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Call Us"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                call
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
