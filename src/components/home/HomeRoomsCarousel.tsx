"use client";

import { useRef, useState, useEffect } from "react";
import RoomCard from "@/components/ui/RoomCard";
import type { Room } from "@/lib/mockData";

interface HomeRoomsCarouselProps {
  rooms: Room[];
}

export default function HomeRoomsCarousel({ rooms }: HomeRoomsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      // Scroll by one card width + gap (approx 320px + 24px) or just the container width
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth * 0.8;
      
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div 
      className="relative w-full group"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-brand-gold/50 bg-surface/80 backdrop-blur-sm flex items-center justify-center text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white disabled:opacity-0 disabled:pointer-events-none shadow-sm ${
          !canScrollLeft ? "opacity-0" : "opacity-0 md:opacity-100 md:group-hover:opacity-100"
        }`}
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_left</span>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-brand-gold/50 bg-surface/80 backdrop-blur-sm flex items-center justify-center text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white disabled:opacity-0 disabled:pointer-events-none shadow-sm ${
          !canScrollRight ? "opacity-0" : "opacity-0 md:opacity-100 md:group-hover:opacity-100"
        }`}
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollButtons}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-4 hide-scrollbar px-margin-mobile md:px-margin-desktop"
      >
        {rooms.map((room) => (
          <div key={room.id} className="snap-start shrink-0">
            <RoomCard
              room={room}
              variant="carousel"
              className="w-[85vw] sm:w-[400px] lg:w-[450px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
