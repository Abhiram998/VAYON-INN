import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { DiscoverItem } from "@/data/discover";

interface DiscoverEditorialProps {
  items: DiscoverItem[];
}

export default function DiscoverEditorial({ items }: DiscoverEditorialProps) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <ScrollReveal
            key={item.id}
            className="min-h-[80vh] sm:min-h-[70vh] flex items-center py-16 gold-divider"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
              {/* Image Column */}
              <div
                className={`relative w-full aspect-[4/3] lg:aspect-[3/4] max-h-[600px] lg:max-h-[70vh] overflow-hidden bg-surface-container-high rounded-sm ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.name} in Kochi`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text Column */}
              <div
                className={`flex flex-col justify-center ${
                  isEven
                    ? "lg:order-1 lg:pr-8 xl:pr-12"
                    : "lg:order-2 lg:pl-8 xl:pl-12"
                }`}
              >
                {/* Category Label */}
                <span className="font-label-caps text-label-caps text-brand-gold/70 uppercase tracking-[0.2em] block mb-4">
                  {item.category === "place"
                    ? "Destination"
                    : item.category === "activity"
                    ? "Experience"
                    : "Transit"}
                </span>

                {/* Destination Name */}
                <h2 className="font-headline-lg text-4xl lg:text-5xl text-primary mb-6 leading-tight">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-10">
                  {item.description}
                </p>

                {/* Specs */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-lg text-brand-gold/50"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {item.icon || "directions_car"}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant font-light">
                      {item.distance} · {item.travelTime}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-lg text-brand-gold/50"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      schedule
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant font-light">
                      {item.hours}
                    </span>
                  </div>

                  {item.bestTime && (
                    <div className="flex items-center gap-3">
                      <span
                        className="material-symbols-outlined text-lg text-brand-gold/50"
                        style={{ fontVariationSettings: "'FILL' 0" }}
                      >
                        wb_twilight
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant font-light">
                        Best time · {item.bestTime}
                      </span>
                    </div>
                  )}
                </div>

                {/* Directions Link */}
                <a
                  href={item.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-gold font-label-caps text-label-caps uppercase tracking-widest border-b border-brand-gold/30 pb-1 hover:text-brand-gold/80 hover:border-brand-gold/60 transition-colors duration-300 group self-start"
                >
                  Get Directions
                  <span
                    className="material-symbols-outlined ml-2 text-[18px] group-hover:translate-x-1 transition-transform duration-300"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
