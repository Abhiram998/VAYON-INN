"use client";

import { useRef, useState, useEffect } from "react";

interface CarouselScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function CarouselScrollWrapper({ children, className = "" }: CarouselScrollWrapperProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
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
      const scrollAmount = clientWidth > 768 ? clientWidth / 2 : clientWidth * 0.8;
      
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative w-full group ${className}`}>
      {/* Left Navigation Arrow (Hidden on mobile) */}
      <button
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={`absolute -left-4 md:-left-6 lg:-left-8 top-[156px] lg:top-[175px] -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-brand-gold/50 bg-surface/80 backdrop-blur-sm hidden md:flex items-center justify-center text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white shadow-md disabled:opacity-0 disabled:pointer-events-none ${
          !canScrollLeft ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-label="Scroll left"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_left</span>
      </button>

      {/* Right Navigation Arrow (Hidden on mobile) */}
      <button
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={`absolute -right-4 md:-right-6 lg:-right-8 top-[156px] lg:top-[175px] -translate-y-1/2 z-50 w-12 h-12 rounded-full border border-brand-gold/50 bg-surface/80 backdrop-blur-sm hidden md:flex items-center justify-center text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-white shadow-md disabled:opacity-0 disabled:pointer-events-none ${
          !canScrollRight ? "opacity-0" : "opacity-0 group-hover:opacity-100"
        }`}
        aria-label="Scroll right"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>chevron_right</span>
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        onScroll={updateScrollButtons}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 pt-4 hide-scrollbar"
      >
        {children}
      </div>
    </div>
  );
}
