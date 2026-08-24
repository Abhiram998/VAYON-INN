import Link from "next/link";
import { hotelConfig } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer className="bg-surface-container w-full py-[var(--spacing-section-gap)] border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
        <div className="md:col-span-1 mb-10 md:mb-0">
          <Link href="/" className="block mb-6">
            <span className="font-display-lg text-headline-md tracking-tighter text-brand-gold block">
              {hotelConfig.name}
            </span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant block mt-1">
              {hotelConfig.brand}
            </span>
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant font-light">
            © {new Date().getFullYear()} {hotelConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-2">
            Explore
          </p>
          <Link
            href="/about"
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            About Us
          </Link>
          <Link
            href="/rooms"
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            Suites
          </Link>
          <Link
            href="/dining"
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            Private Dining
          </Link>
          <Link
            href="/wellness"
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
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
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold underline-offset-4 hover:underline opacity-90 hover:opacity-100 transition-opacity"
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
              className="text-on-surface-variant hover:text-brand-gold transition-colors"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                mail
              </span>
            </a>
            <a
              href="tel:+1234567890"
              className="text-on-surface-variant hover:text-brand-gold transition-colors"
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
