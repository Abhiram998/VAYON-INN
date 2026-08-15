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
        {/* Hero Section */}
        <section className="w-full relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={destination.mainImage.url}
            alt={destination.mainImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        </section>

        {/* Content Section */}
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop -mt-32 relative z-10 mb-section-gap">
          <ScrollReveal className="bg-surface p-8 md:p-12 lg:p-16 border border-outline-variant/30 shadow-sm max-w-4xl">
            <Link href="/discover" className="inline-flex items-center text-secondary font-label-caps tracking-widest uppercase mb-8 hover:text-primary transition-colors">
              <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
              Back to Discover
            </Link>
            
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-6">
              {destination.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-body-md text-body-md mb-8 border-b border-outline-variant/30 pb-8">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span> 
                {destination.distance || "Distance Placeholder"}
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>category</span> 
                {destination.category || "Category Placeholder"}
              </span>
            </div>

            <h2 className="font-headline-md text-primary mb-4">About {destination.name}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
              {destination.description}
            </p>

            <div className="bg-surface-container-low p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between border border-surface-variant">
              <div>
                <h3 className="font-headline-md text-primary mb-2">Need assistance?</h3>
                <p className="font-body-md text-on-surface-variant">Our concierge can arrange transportation and tickets.</p>
              </div>
              <button className="mt-6 sm:mt-0 bg-primary text-on-primary font-label-caps text-label-caps uppercase px-6 py-4 hover:bg-on-surface-variant transition-colors tracking-widest w-full sm:w-auto text-center shrink-0">
                Contact Concierge
              </button>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
