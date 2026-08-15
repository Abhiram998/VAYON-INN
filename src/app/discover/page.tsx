import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { mockDestinations, hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Explore Nearby",
  description: `Discover the rich tapestry of culture, nature, and history just moments from ${hotelConfig.name}. Curated experiences await.`,
  openGraph: {
    title: `Explore Nearby | ${hotelConfig.name}`,
    description: `Discover curated experiences and attractions near ${hotelConfig.name}.`,
    type: "website",
  },
};

export default function DiscoverPage() {
  return (
    <main className="w-full pb-16 md:pb-section-gap">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto mb-12 md:mb-section-gap pt-8 md:pt-16">
        <ScrollReveal className="max-w-3xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 md:mb-6 text-primary">
            Explore Nearby
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant font-light">
            Discover the rich tapestry of culture, nature, and history just moments from {hotelConfig.name}. Curated experiences await.
          </p>
        </ScrollReveal>
      </section>

      {/* Destinations Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-gutter mb-16 md:mb-section-gap">
        {mockDestinations.map((destination) => (
          <ScrollReveal key={destination.id} className="group relative overflow-hidden bg-surface-container rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors duration-300 flex flex-col">
            <Link href={`/discover/${destination.slug}`} className="flex flex-col flex-grow">
              <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={destination.mainImage.url}
                  alt={destination.mainImage.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center space-x-2 transition-transform duration-1000 group-hover:-translate-y-1 shadow-sm">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {destination.category === "Nature" ? "directions_walk" : "directions_car"}
                  </span>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest">{destination.distance || "Distance Placeholder"}</span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-surface-container">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-headline-md text-[28px] md:text-headline-md leading-tight transition-colors duration-300 group-hover:text-secondary text-primary">
                    {destination.name}
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center border-t border-outline-variant pt-6 mt-auto">
                  <div className="flex items-center space-x-2 text-on-surface-variant">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                    <span className="font-body-md text-sm md:text-body-md">{destination.distance || "Distance Placeholder"}</span>
                  </div>
                  <button className="flex items-center space-x-2 text-secondary hover:text-on-surface transition-colors duration-300 font-label-caps text-label-caps uppercase group/btn tracking-widest">
                    <span>View Details</span>
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover/btn:translate-x-1" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </section>
    </main>
  );
}
