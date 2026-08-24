import { Metadata } from "next";
import { hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import DiscoverTabs from "@/components/discover/DiscoverTabs";
import DiscoverJsonLd from "@/components/discover/DiscoverJsonLd";

export const metadata: Metadata = {
  title: "Discover Kochi",
  description: `Explore the culture, history, experiences and convenient transport links around ${hotelConfig.name}. Curated destinations just moments away.`,
  openGraph: {
    title: `Discover Kochi | ${hotelConfig.name}`,
    description: `Curated attractions, activities and transit near ${hotelConfig.name}, Edappally, Kochi.`,
    type: "website",
  },
};

export default function DiscoverPage() {
  return (
    <main className="w-full pb-16 md:pb-section-gap">
      <DiscoverJsonLd />

      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto mb-10 md:mb-14 pt-8 md:pt-16">
        <ScrollReveal className="max-w-3xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 md:mb-6 text-primary">
            Discover Kochi
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant font-light">
            Explore the culture, history, experiences and convenient transport
            links around {hotelConfig.name}. Every destination is just moments
            away.
          </p>
        </ScrollReveal>
      </section>

      {/* Tabbed Carousel Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
        <ScrollReveal>
          <DiscoverTabs />
        </ScrollReveal>
      </section>
    </main>
  );
}
