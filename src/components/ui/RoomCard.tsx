import Image from "next/image";
import Link from "next/link";
import { Room } from "@/lib/mockData";

interface RoomCardProps {
  room: Room;
  className?: string;
}

export default function RoomCard({ room, className = "" }: RoomCardProps) {
  return (
    <div className={`group flex flex-col w-full h-full overflow-hidden ${className}`}>
      {/* Fixed Aspect Ratio Image */}
      <Link href={`/rooms/${room.slug}`} className="relative w-full aspect-[4/3] flex-shrink-0 overflow-hidden bg-surface-container-high rounded-sm block">
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
      <div className="flex flex-col flex-grow pt-6 space-y-4 whitespace-normal px-1">
        {/* Room Title */}
        <h2 className="font-headline-md text-2xl md:text-headline-md text-primary">
          {room.name}
        </h2>

        {/* Specs Row */}
        <div className="flex flex-wrap gap-4 font-body-md text-sm sm:text-body-md text-on-surface-variant">
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
        <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant/80 line-clamp-2">
          {room.description}
        </p>

        {/* Price + Buttons (pushed to bottom) */}
        <div className="mt-auto gold-divider pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-headline-md text-2xl md:text-headline-md text-primary shrink-0">
              {room.price ? `$${room.price}` : "POA"}{" "}
              <span className="font-body-md text-sm text-on-surface-variant">/ night</span>
            </span>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                href={`/rooms/${room.slug}`}
                className="flex-1 sm:flex-none text-center border border-brand-gold/40 text-brand-gold font-label-caps text-label-caps uppercase px-5 py-3 hover:bg-brand-gold/10 transition-colors duration-300 tracking-widest whitespace-nowrap"
              >
                Details
              </Link>
              <button className="flex-1 sm:flex-none bg-brand-gold text-white font-label-caps text-label-caps uppercase px-5 py-3 hover:bg-on-surface-variant transition-colors duration-300 shadow-sm tracking-widest whitespace-nowrap">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
