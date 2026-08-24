import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PreFooterCTA from "@/components/ui/PreFooterCTA";
import { mockRooms } from "@/lib/mockData";

export default function RoomsPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-8 md:pt-16 pb-section-gap">
      {/* Page Header & Booking Widget */}
      <section className="w-full max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-section-gap">
        <ScrollReveal className="mb-12 md:mb-24">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
            Our Suites & Rooms
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
            Discover a sanctuary of modern minimalism and immaculate service. Each space is designed to provide unparalleled comfort and quiet luxury.
          </p>
        </ScrollReveal>

        {/* Glassmorphism Booking Bar */}
        <ScrollReveal className="bg-surface/70 backdrop-blur-xl border border-outline-variant/30 rounded-lg p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-gutter items-end shadow-sm relative z-10">
          <div className="w-full">
            <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 tracking-widest">
              Check In
            </label>
            <div className="border-b border-outline-variant focus-within:border-brand-gold transition-colors flex items-center py-2">
              <span className="material-symbols-outlined text-brand-gold/50 mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
              <input
                type="date"
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-primary outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 tracking-widest">
              Check Out
            </label>
            <div className="border-b border-outline-variant focus-within:border-brand-gold transition-colors flex items-center py-2">
              <span className="material-symbols-outlined text-brand-gold/50 mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_today</span>
              <input
                type="date"
                className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-primary outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 tracking-widest">
              Guests
            </label>
            <div className="border-b border-outline-variant focus-within:border-brand-gold transition-colors flex items-center py-2">
              <span className="material-symbols-outlined text-brand-gold/50 mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
              <select className="w-full bg-transparent border-none p-0 focus:ring-0 font-body-md text-body-md text-primary appearance-none outline-none">
                <option>1 Guest</option>
                <option selected>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
          </div>
          <div className="w-full sm:col-span-2 lg:col-span-1 lg:w-auto flex lg:shrink-0 gap-4 mt-4 lg:mt-0">
            <button className="w-full bg-brand-gold text-white font-label-caps text-label-caps uppercase px-6 py-4 hover:bg-on-surface-variant transition-colors duration-300 tracking-widest">
              Check Availability
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Room Listing Section */}
      <section className="w-full max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        {/* Filters */}
        <ScrollReveal className="flex flex-wrap gap-6 mb-12 border-b border-outline-variant/30 pb-4">
          <span className="font-label-caps text-label-caps uppercase text-on-surface-variant py-2 mr-2 hidden sm:inline-block tracking-widest">Filters:</span>
          <button className="font-body-md text-body-md text-brand-gold border-b border-brand-gold pb-1">All Rooms</button>
          <button className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold transition-colors pb-1">Executive Rooms</button>
          <button className="font-body-md text-body-md text-on-surface-variant hover:text-brand-gold transition-colors pb-1">Signature Suites</button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 md:gap-y-24 lg:gap-gutter">
          {mockRooms.map((room, index) => {
            if (index === 0) {
              // Room 1 (Spans 8 cols on lg, 1 on md)
              return (
                <ScrollReveal key={room.id} className="col-span-1 md:col-span-1 lg:col-span-8 group">
                  <Link href={`/rooms/${room.slug}`} className="block">
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[614px] overflow-hidden mb-6 bg-surface-container-high rounded-sm">
                      <Image
                        src={room.images.main.url}
                        alt={room.images.main.alt}
                        fill
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-sm">
                        <span className="font-label-caps text-[10px] sm:text-xs uppercase text-primary tracking-widest">Signature Suite</span>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-4 px-2">
                      <div className="max-w-xl w-full">
                        <h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-2">{room.name}</h2>
                        <div className="flex flex-wrap gap-4 font-body-md text-sm sm:text-body-md text-on-surface-variant mb-4">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>square_foot</span> {room.size ? `${room.size} sq m` : "Size Placeholder"}</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>bed</span> {room.bedType || "Bed Placeholder"}</span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>balcony</span> Private Balcony</span>
                        </div>
                        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant/80 line-clamp-3 lg:line-clamp-2">
                          {room.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-start lg:items-end shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
                        <span className="font-display-lg-mobile text-3xl md:text-display-lg-mobile text-primary mb-4">
                          {room.price ? `$${room.price}` : "POA"} <span className="font-body-md text-sm md:text-body-md text-on-surface-variant">/ night</span>
                        </span>
                        <div className="flex gap-4 w-full lg:w-auto">
                          <button className="flex-1 lg:flex-none border border-brand-gold/40 text-brand-gold font-label-caps text-[10px] sm:text-label-caps uppercase px-4 sm:px-6 py-3 hover:bg-brand-gold/10 transition-colors duration-300 tracking-widest">
                            View Room
                          </button>
                          <button className="flex-1 lg:flex-none bg-brand-gold text-white font-label-caps text-[10px] sm:text-label-caps uppercase px-4 sm:px-6 py-3 hover:bg-on-surface-variant transition-colors duration-300 shadow-sm tracking-widest">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            } else if (index === 1) {
              // Room 2 (Spans 4 cols on lg, 1 on md)
              return (
                <ScrollReveal key={room.id} className="col-span-1 md:col-span-1 lg:col-span-4 group lg:mt-32">
                  <Link href={`/rooms/${room.slug}`} className="block">
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] overflow-hidden mb-6 bg-surface-container-high rounded-sm">
                      <Image
                        src={room.images.main.url}
                        alt={room.images.main.alt}
                        fill
                        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                    <div className="px-2">
                      <h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-2">{room.name}</h2>
                      <div className="flex flex-wrap gap-3 font-body-md text-sm sm:text-body-md text-on-surface-variant mb-4">
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] sm:text-[16px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>square_foot</span> {room.size ? `${room.size} sq m` : "Size Placeholder"}</span>
                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] sm:text-[16px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>bed</span> {room.bedType || "Bed Placeholder"}</span>
                      </div>
                      <div className="flex flex-wrap items-end justify-between mt-6 border-t border-outline-variant/30 pt-4 gap-4">
                        <span className="font-headline-md text-2xl md:text-headline-md text-primary">
                          {room.price ? `$${room.price}` : "POA"} <span className="font-body-md text-sm md:text-body-md text-on-surface-variant text-sm">/ nt</span>
                        </span>
                        <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-brand-gold group-hover:text-primary transition-colors flex items-center gap-1 tracking-widest">
                          Explore <span className="material-symbols-outlined text-[14px] sm:text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            } else {
              // Room 3+ (Spans 12 cols - full width bleed feature)
              return (
                <ScrollReveal key={room.id} className="col-span-1 md:col-span-2 lg:col-span-12 group relative w-full h-[450px] sm:h-[550px] lg:h-[716px] overflow-hidden rounded-sm mt-8 lg:mt-0">
                  <Link href={`/rooms/${room.slug}`} className="block w-full h-full">
                    <Image
                      src={room.images.main.url}
                      alt={room.images.main.alt}
                      fill
                      className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 lg:via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-on-primary">
                      <div className="max-w-2xl w-full">
                        <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-sm mb-4">
                          <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-on-primary tracking-widest">The Penthouse Collection</span>
                        </div>
                        <h2 className="font-display-lg-mobile text-4xl sm:text-5xl md:font-display-lg md:text-display-lg text-on-primary mb-4 drop-shadow-lg">{room.name}</h2>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 font-body-md text-sm sm:text-body-md text-on-primary/90 mb-4 md:mb-0">
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>square_foot</span> {room.size ? `${room.size} sq m` : "Size Placeholder"}</span>
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>king_bed</span> {room.bedType || "Bed Placeholder"}</span>
                          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-[16px] sm:text-[18px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>pool</span> Private Plunge Pool</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end shrink-0 w-full md:w-auto">
                        <span className="font-display-lg-mobile text-3xl md:text-display-lg-mobile text-on-primary mb-4 drop-shadow-lg">{room.price ? `$${room.price}` : "POA"}</span>
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                          <button className="w-full sm:w-auto bg-transparent backdrop-blur-md border border-brand-gold/40 text-brand-gold font-label-caps text-[10px] sm:text-label-caps uppercase px-6 py-4 sm:py-3 hover:bg-brand-gold/10 transition-colors duration-300 tracking-widest">
                            View Details
                          </button>
                          <button className="w-full sm:w-auto bg-brand-gold text-white font-label-caps text-[10px] sm:text-label-caps uppercase px-6 py-4 sm:py-3 hover:bg-surface-tint transition-colors duration-300 tracking-widest">
                            Inquire Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            }
          })}
        </div>
      </section>

      <PreFooterCTA />
    </div>
  );
}
