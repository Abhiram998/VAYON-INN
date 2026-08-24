import Link from "next/link";
import { hotelConfig } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer className="bg-charcoal w-full py-16 md:py-24 border-t border-brand-gold/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
        <div className="md:col-span-1 mb-4 md:mb-0">
          <Link href="/" className="block mb-6">
            <span className="font-display-lg text-headline-md tracking-tighter gold-shimmer block">
              {hotelConfig.name}
            </span>
            <span className="font-label-caps text-[10px] uppercase tracking-widest text-brand-gold/60 block mt-1">
              {hotelConfig.brand}
            </span>
          </Link>
          <p className="font-body-md text-body-md text-white/40 font-light leading-relaxed">
            © {new Date().getFullYear()} {hotelConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-2">
            Explore
          </p>
          <Link
            href="/rooms"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Rooms &amp; Suites
          </Link>
          <Link
            href="/gallery"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/discover"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Destinations
          </Link>
          <Link
            href="/contact"
            className="font-body-md text-body-md text-white/60 hover:text-brand-gold underline-offset-4 hover:underline transition-colors duration-300"
          >
            Contact
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

        <div className="flex flex-col space-y-6">
          <p className="font-label-caps text-label-caps text-brand-gold uppercase tracking-widest mb-0">
            Connect
          </p>
          <div className="flex space-x-4">
            <a
              href={`mailto:${hotelConfig.email || "contact@vayoninn.com"}`}
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Email Us"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                mail
              </span>
            </a>
            <a
              href={`tel:${hotelConfig.phone || "+1234567890"}`}
              className="text-white/50 hover:text-brand-gold transition-colors duration-300"
              aria-label="Call Us"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                call
              </span>
            </a>
          </div>
          {/* VIP Newsletter Input */}
          <div className="space-y-3">
            <p className="font-body-md text-sm text-white/40 font-light">Stay informed with exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-transparent border-0 border-b border-brand-gold/30 text-white/80 placeholder-white/30 py-2 px-0 text-sm focus:border-brand-gold focus:ring-0 outline-none transition-colors duration-500 font-body-md"
              />
              <button
                type="button"
                className="ml-3 text-brand-gold hover:text-brand-gold-light transition-colors duration-300 shrink-0"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
