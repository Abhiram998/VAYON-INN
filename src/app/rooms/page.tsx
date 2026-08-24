import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter">
          {mockRooms.map((room, index) => (
            <ScrollReveal key={room.id} delay={index * 150} className="group flex flex-col">
              {/* Fixed Aspect Ratio Image */}
              <Link href={`/rooms/${room.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-surface-container-high rounded-sm mb-6">
                <Image
                  src={room.images.main.url}
                  alt={room.images.main.alt}
                  fill
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
              </Link>

              {/* Card Body */}
              <div className="flex flex-col flex-grow px-1">
                {/* Room Title */}
                <h2 className="font-headline-md text-2xl md:text-headline-md text-primary mb-3">
                  {room.name}
                </h2>

                {/* Specs Row */}
                <div className="flex flex-wrap gap-4 font-body-md text-sm sm:text-body-md text-on-surface-variant mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>square_foot</span>
                    {room.size ? `${room.size} sq m` : "Size Placeholder"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>bed</span>
                    {room.bedType || "Bed Placeholder"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>group</span>
                    Up to {room.maxGuests || 2} Guests
                  </span>
                </div>

                {/* Description */}
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant/80 line-clamp-2 mb-6">
                  {room.description}
                </p>

                {/* Price + Buttons (pushed to bottom) */}
                <div className="mt-auto gold-divider pt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="font-headline-md text-2xl md:text-headline-md text-primary">
                      {room.price ? `$${room.price}` : "POA"}{" "}
                      <span className="font-body-md text-sm text-on-surface-variant">/ night</span>
                    </span>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="flex-1 sm:flex-none text-center border border-brand-gold/40 text-brand-gold font-label-caps text-label-caps uppercase px-5 py-3 hover:bg-brand-gold/10 transition-colors duration-300 tracking-widest"
                      >
                        View Details
                      </Link>
                      <button className="flex-1 sm:flex-none bg-brand-gold text-white font-label-caps text-label-caps uppercase px-5 py-3 hover:bg-on-surface-variant transition-colors duration-300 shadow-sm tracking-widest">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
