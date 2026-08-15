"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hotelConfig } from "@/lib/mockData";

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "bg-surface/90 backdrop-blur-xl border-outline-variant/30 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-[var(--spacing-container-max)] mx-auto relative">
        <Link href="/" className="flex flex-col items-start" onClick={() => setIsOpen(false)}>
          <span className="font-display-lg text-headline-md tracking-tighter text-primary">
            {hotelConfig.name}
          </span>
          <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">
            {hotelConfig.brand}
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`pb-1 transition-colors duration-300 ${
              pathname === "/" ? "text-primary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Home
          </Link>
          <Link
            href="/rooms"
            className={`pb-1 transition-colors duration-300 ${
              pathname.startsWith("/rooms") ? "text-primary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Rooms
          </Link>
          <Link
            href="/gallery"
            className={`pb-1 transition-colors duration-300 ${
              pathname === "/gallery" ? "text-primary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/discover"
            className={`pb-1 transition-colors duration-300 ${
              pathname.startsWith("/discover") ? "text-primary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Destinations
          </Link>
          <Link
            href="/contact"
            className={`pb-1 transition-colors duration-300 ${
              pathname === "/contact" ? "text-primary border-b border-secondary" : "text-on-surface-variant hover:text-secondary"
            }`}
          >
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="hidden md:inline-flex bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors"
        >
          Book Now
        </button>
        <button 
          type="button" 
          className="md:hidden text-primary" 
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant/30 shadow-lg py-4 flex flex-col px-margin-mobile">
          <Link href="/" className="py-3 text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/20" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/rooms" className="py-3 text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/20" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link href="/gallery" className="py-3 text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/20" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/discover" className="py-3 text-on-surface-variant hover:text-primary transition-colors border-b border-outline-variant/20" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link href="/contact" className="py-3 text-on-surface-variant hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          <button
            type="button"
            className="w-full mt-4 bg-primary text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest transition-colors hover:bg-on-surface-variant"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
