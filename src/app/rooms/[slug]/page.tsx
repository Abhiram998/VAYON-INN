import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { mockRooms, hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = mockRooms.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: room.name,
    description: room.description,
    openGraph: {
      title: `${room.name} | ${hotelConfig.name}`,
      description: room.description,
      images: [
        {
          url: room.images.main.url,
          width: 1200,
          height: 630,
          alt: room.images.main.alt,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return mockRooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailsPage({ params }: Props) {
  const { slug } = await params;
  const room = mockRooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const similarRooms = mockRooms.filter((r) => r.id !== room.id).slice(0, 2);

  // Schema.org JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": room.name,
    "description": room.description,
    "image": room.images.main.url,
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": room.maxGuests || 2
    },
    "bed": {
      "@type": "BedDetails",
      "typeOfBed": room.bedType || "Standard"
    },
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": room.size || 0,
      "unitCode": "SQM"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Main Content Canvas */}
      <main className="w-full">
        {/* Hero Gallery (Bleed Layout) */}
        <section className="w-full relative h-[614px] md:h-[819px] mb-16 md:mb-section-gap overflow-hidden">
          <Image
            src={room.images.main.url}
            alt={room.images.main.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Glass Title Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-margin-desktop">
            <div className="bg-surface/70 backdrop-blur-xl border border-outline-variant/20 max-w-2xl p-6 md:p-12">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-4">
                The Premium Collection
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4 drop-shadow-sm">
                {room.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>square_foot</span> 
                  {room.size ? `${room.size} sq m` : "Size Placeholder"}
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>group</span> 
                  Up to {room.maxGuests || 2} Guests
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>bed</span> 
                  {room.bedType || "Bed Placeholder"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content & Booking Sidebar Container */}
        <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter mb-section-gap">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-16 md:space-y-section-gap">
            {/* Description */}
            <ScrollReveal>
              <h2 className="font-headline-md text-headline-md text-primary mb-6 md:mb-8 border-b border-outline-variant pb-4">
                A Sanctuary of Elegance
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                {room.description}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Floor-to-ceiling windows provide sweeping views of the surrounding landscape, allowing natural light to illuminate the space throughout the day. Whether you are traveling for business or leisure, this suite provides a sophisticated retreat that caters to your every need.
              </p>
            </ScrollReveal>

            {/* Amenities (Bento Grid Style) */}
            <ScrollReveal>
              <h2 className="font-headline-md text-headline-md text-primary mb-6 md:mb-8 border-b border-outline-variant pb-4">
                Suite Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: "wifi", text: "High-Speed Wi-Fi" },
                  { icon: "tv", text: "65\" Smart TV" },
                  { icon: "coffee_maker", text: "Espresso Machine" },
                  { icon: "local_bar", text: "Mini Bar" },
                  { icon: "ac_unit", text: "Climate Control" },
                  { icon: "room_service", text: "24/7 Room Service" }
                ].map((amenity, idx) => (
                  <div key={idx} className="group bg-surface-container-low p-6 flex flex-col items-center text-center border border-surface-variant transition-all duration-700 hover:bg-surface-container hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                    <span className="material-symbols-outlined text-3xl text-secondary mb-4 transition-transform duration-700 group-hover:scale-110" style={{ fontVariationSettings: "'FILL' 0" }}>
                      {amenity.icon}
                    </span>
                    <h3 className="font-body-md text-body-md text-primary">{amenity.text}</h3>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Secondary Gallery */}
            <ScrollReveal>
              <h2 className="font-headline-md text-headline-md text-primary mb-6 md:mb-8 border-b border-outline-variant pb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter">
                <div className="h-64 md:h-80 bg-surface-variant overflow-hidden relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI014omjBVVoAA6ca-B9A0N4jF1EC8HXpc9wTU57I4kKaK9s8NT7wwmE8adONrD4uWOychCg0pVuvVGUynduwncn9bRjRZ3o1lJPzLOf-8clgK26pu0FCz_v_EpbHhS8vCOU31ubon0dUBCesIpQ-npPEPph3QfHjIdg-BuOK9p3R-Xu8meqH3wnTqFoSNfp5sEwrgNp9VGvrMpXUefGZ2uczGQIOpPtXGrukcWF9DQpvGqwiZqigU"
                    alt="Luxury hotel bathroom featuring a large freestanding soaking tub"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="h-64 md:h-80 bg-surface-variant overflow-hidden relative group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIcN8rn-z9VC_R-n3AzWORPsdx8XKF4RDqFY3-ZDWMFoEgeoPhd3U-zq4a8y-9A7kg1auo5A6Z4ZntRvCqKvANZc9XqiTG54zcXIADIBxsQSm457VCEJ9H0e6Ofnb7l23PgLR9eF_WG0TnFanbEcaAVxIY70ptBR-nFU9sQDrd6ueM1PtUcrvg3ggMLJLSSYA0ZAI7aUE9paau7GJSPCR0WcoBAKtLfxFMnfO-7zCGdhu04JWJjMJh"
                    alt="Stylish hotel room sitting area with modern armchair"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4 relative">
            <div id="booking" className="lg:sticky top-32 bg-surface-container-lowest border border-outline-variant p-6 md:p-8 shadow-sm transition-all duration-1000">
              <div className="mb-8">
                <span className="font-body-md text-body-md text-on-surface-variant line-through block mb-1">
                  From {room.price ? `$${room.price + 200}` : "POA"}
                </span>
                <div className="flex items-end gap-2">
                  <span className="font-headline-lg text-headline-lg text-primary leading-none">
                    {room.price ? `$${room.price}` : "POA"}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant pb-1">/ night</span>
                </div>
              </div>
              <form className="space-y-6">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-b border-outline hover:border-secondary transition-colors pb-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">Check-In</label>
                    <input
                      type="date"
                      className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-primary focus:ring-0 cursor-pointer outline-none"
                    />
                  </div>
                  <div className="border-b border-outline hover:border-secondary transition-colors pb-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">Check-Out</label>
                    <input
                      type="date"
                      className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-primary focus:ring-0 cursor-pointer outline-none"
                    />
                  </div>
                </div>
                {/* Guests */}
                <div className="border-b border-outline hover:border-secondary transition-colors pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant block mb-2 uppercase">Guests</label>
                  <select className="w-full bg-transparent border-none p-0 font-body-md text-body-md text-primary focus:ring-0 cursor-pointer outline-none appearance-none">
                    <option>2 Adults, 0 Children</option>
                    <option>1 Adult, 0 Children</option>
                    <option>2 Adults, 1 Child</option>
                  </select>
                </div>
                {/* CTA */}
                <button
                  type="button"
                  className="w-full bg-primary text-on-primary font-label-caps text-label-caps py-4 mt-8 uppercase tracking-widest hover:bg-surface-tint transition-colors"
                >
                  Reserve Suite
                </button>
              </form>
              <div className="mt-6 text-center">
                <span className="font-body-md text-body-md text-on-surface-variant text-sm">Free cancellation until 48 hours prior</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms Section */}
        <section className="bg-surface-container-low py-16 md:py-section-gap">
          <div className="max-w-[var(--spacing-container-max)] mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12 text-center">
                Discover More
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {similarRooms.map((r) => (
                <ScrollReveal key={r.id}>
                  <Link href={`/rooms/${r.slug}`} className="group block relative overflow-hidden bg-surface-container-lowest">
                    <div className="h-64 md:h-72 overflow-hidden relative">
                      <Image
                        src={r.images.main.url}
                        alt={r.images.main.alt}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-headline-md text-headline-md text-primary mb-2">{r.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="font-body-md text-body-md text-on-surface-variant">
                          From {r.price ? `$${r.price}` : "POA"} / night
                        </span>
                        <span className="material-symbols-outlined text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ fontVariationSettings: "'FILL' 0" }}>
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
