import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { mockDestinations, hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = mockDestinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: destination.name,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | ${hotelConfig.name}`,
      description: destination.description,
      images: [
        {
          url: destination.mainImage.url,
          width: 1200,
          height: 630,
          alt: destination.mainImage.alt,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return mockDestinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationDetailsPage({ params }: Props) {
  const { slug } = await params;
  const destination = mockDestinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  // Schema.org JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": destination.name,
    "description": destination.description,
    "image": destination.mainImage.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full">
        {/* Hero Image */}
        <section className="w-full relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={destination.mainImage.url}
            alt={destination.mainImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        </section>

        {/* Content Section */}
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop -mt-32 relative z-10 pb-16 md:pb-24">
          <ScrollReveal className="bg-surface p-8 md:p-12 lg:p-16 border border-outline-variant/30 shadow-sm max-w-4xl">
            {/* Back Link */}
            <Link href="/discover" className="inline-flex items-center text-brand-gold font-label-caps text-label-caps tracking-widest uppercase mb-10 hover:text-brand-gold/80 transition-colors duration-300 group">
              <span className="material-symbols-outlined mr-2 text-[18px] group-hover:-translate-x-1 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
              Back to Discover
            </Link>

            {/* Title */}
            <span className="font-label-caps text-label-caps text-brand-gold/70 uppercase tracking-[0.2em] block mb-4">
              {destination.category || "Destination"}
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
              {destination.name}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-body-md text-body-md mb-10 gold-divider pb-8">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                {destination.distance || "Distance Placeholder"}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl text-brand-gold/50" style={{ fontVariationSettings: "'FILL' 0" }}>category</span>
                {destination.category || "Category Placeholder"}
              </span>
            </div>

            {/* Description */}
            <ScrollReveal>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">About {destination.name}</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed mb-6">
                {destination.description}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light leading-relaxed">
                Our concierge team has curated this destination as one of the finest experiences available to our guests. Whether you seek relaxation, adventure, or cultural enrichment, this location promises an unforgettable journey just moments from {hotelConfig.name}.
              </p>
            </ScrollReveal>

            {/* Concierge CTA */}
            <ScrollReveal className="mt-12">
              <div className="gold-divider pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="font-headline-md text-xl md:text-2xl text-primary mb-2">Need assistance?</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant font-light">Our concierge can arrange transportation and tickets.</p>
                </div>
                <Link
                  href="/contact"
                  className="border border-brand-gold/40 text-brand-gold font-label-caps text-label-caps uppercase px-8 py-4 hover:bg-brand-gold/10 transition-colors duration-300 tracking-widest w-full sm:w-auto text-center shrink-0 whitespace-nowrap"
                >
                  Contact Concierge
                </Link>
              </div>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
