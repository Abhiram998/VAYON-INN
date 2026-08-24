"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { DiscoverItem } from "@/data/discover";

interface DiscoverCarouselProps {
  items: DiscoverItem[];
}

export default function DiscoverCarousel({ items }: DiscoverCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll, items]);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by approximately one card width + gap
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 300;
    const distance = cardWidth + 24; // card + gap
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }

  return (
    <div className="relative group/carousel">
      {/* Arrow buttons — desktop only */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous destinations"
        className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-outline items-center justify-center bg-surface/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
          canScrollLeft
            ? "opacity-0 group-hover/carousel:opacity-100 hover:bg-surface-container hover:border-brand-gold text-on-surface"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          arrow_left_alt
        </span>
      </button>

      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        aria-label="Next destinations"
        className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-outline items-center justify-center bg-surface/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
          canScrollRight
            ? "opacity-0 group-hover/carousel:opacity-100 hover:bg-surface-container hover:border-brand-gold text-on-surface"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          arrow_right_alt
        </span>
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4 -mb-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item) => (
          <article
            key={item.id}
            data-card
            className="flex-shrink-0 w-[82vw] sm:w-[48vw] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] bg-surface-container rounded-xl overflow-hidden border border-outline-variant hover:border-brand-gold/50 transition-all duration-300 group flex flex-col"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Image — 4:3 ratio */}
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-dim">
              <Image
                src={item.image}
                alt={`${item.name} in Kochi`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 82vw, (max-width: 768px) 48vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-headline-md text-base md:text-lg leading-snug text-on-surface mb-1.5 line-clamp-2">
                {item.name}
              </h3>

              <p className="font-body-md text-sm text-on-surface-variant line-clamp-2 mb-3 flex-grow">
                {item.description}
              </p>

              {/* Metadata row */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-on-surface-variant mb-2.5">
                <span className="inline-flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    {item.icon || "directions_car"}
                  </span>
                  <span>{item.distance}</span>
                </span>
                {item.travelTime && item.travelTime !== "Varies" && (
                  <span className="inline-flex items-center gap-1">
                    <span>·</span>
                    <span>{item.travelTime}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-xs text-on-surface-variant mb-3">
                <span
                  className="material-symbols-outlined text-[15px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  schedule
                </span>
                <span className="line-clamp-1">{item.hours}</span>
              </div>

              {item.bestTime && (
                <div className="flex items-center gap-1 text-xs text-brand-gold/80 mb-3 -mt-1">
                  <span
                    className="material-symbols-outlined text-[15px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    wb_twilight
                  </span>
                  <span>Best time · {item.bestTime}</span>
                </div>
              )}

              {/* Directions link */}
              <a
                href={item.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-gold font-label-caps text-[11px] uppercase tracking-widest hover:text-brand-gold-light transition-colors mt-auto pt-2 border-t border-outline-variant/50 group/link"
              >
                <span>Directions</span>
                <span
                  className="material-symbols-outlined text-sm group-hover/link:translate-x-0.5 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Hide scrollbar via CSS */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
