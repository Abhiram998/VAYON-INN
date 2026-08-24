import Image from "next/image";
import Link from "next/link";
import BookingWidget from "@/components/ui/BookingWidget";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mockRooms, mockDestinations, hotelConfig } from "@/lib/mockData";

export default function Home() {
  const featuredRooms = mockRooms.filter((room) => room.featured).slice(0, 3);
  const featuredDestinations = mockDestinations.slice(0, 3); // using mock dest

  return (
    <>
      {/* 1. Full-screen wallpaper-style Hero */}
      <section className="relative w-full h-[100dvh] md:h-[90vh] min-h-[600px] flex items-center justify-center pt-24">
        {/* Next.js Optimized Image with lazy loading disabled for LCP */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUs1AwI8kzQi0_JYswSLR8RisRVWsNFrMjpeFVlRAn8oBeMnPjTsHKfiK7jiuHkLjC_10kM-YmcQXpn4WdJCZjHD93GnNymULeqBY9JpVZvYKXO4vtNBzSLW62ZVvZ2z7h20cL71cQ9Eg20zR2jQBEU-N0Z4jq49a9QTWK-ddZERbsQ4tByNK5TKXTZp75BOgQkwgE7ugUdrOpLOdLvBQWyh5oX9CG-bDSx-tfVMRizY3QR4ZNX0Mk"
            alt="Vayon Inn Luxury Entrance"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto flex flex-col items-center mt-[-10vh]">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 drop-shadow-2xl leading-tight">
            Your Stay, Beautifully Elevated
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/90 mb-10 max-w-2xl font-light tracking-wide text-base md:text-body-lg">
            Experience quiet luxury and immaculate service in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="#booking"
              className="bg-brand-gold text-white px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors backdrop-blur-sm shadow-2xl text-center"
            >
              Book Now
            </Link>
            <Link
              href="/rooms"
              className="bg-transparent border border-on-primary text-on-primary px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-colors backdrop-blur-sm text-center"
            >
              Explore Rooms
            </Link>
          </div>
        </div>

        {/* 3. Mock Booking Widget */}
        <div id="booking">
          <BookingWidget />
        </div>
      </section>

      {/* Spacer for Overlapping Widget */}
      <div className="h-48 md:h-32"></div>

      {/* 4. About / Hotel Introduction */}
      <ScrollReveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 md:col-start-2 relative z-10 mb-10 md:mb-0">
            <h2 className="font-label-caps text-label-caps text-brand-gold/70 uppercase tracking-[0.2em] mb-6">
              The Philosophy
            </h2>
            <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">
              A Sanctuary of Refined Elegance
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 font-light">
              Nestled in the vibrant heart of the metropolis, {hotelConfig.name} offers an unparalleled escape. Every detail is meticulously curated to provide an atmosphere of poised tranquility. Discover spaces that inspire and restore.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-brand-gold font-label-caps text-label-caps uppercase tracking-widest border-b border-brand-gold pb-1 hover:text-brand-gold/80 hover:border-brand-gold/80 transition-colors group"
            >
              Discover Our Story
              <span
                className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* 5. Featured Rooms */}
      <ScrollReveal className="py-section-gap bg-surface-container-lowest overflow-hidden gold-divider">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-4">
              Accommodations
            </h2>
            <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Rooms & Suites
            </h3>
          </div>
        </div>

        <div className="pb-8 w-full overflow-hidden relative">
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-gutter w-max px-4 md:px-margin-desktop">
            {/* Duplicate array to create two identical halves for seamless -50% translation */}
            {[...featuredRooms, ...featuredRooms, ...featuredRooms, ...featuredRooms, ...featuredRooms, ...featuredRooms].map((room, idx) => (
              <Link href={`/rooms/${room.slug}`} key={`${room.id}-${idx}`} className="group block w-[85vw] md:w-[400px] shrink-0">
                <div className="aspect-[4/5] relative overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src={room.images.main.url}
                    alt={room.images.main.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 85vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex justify-between items-start whitespace-normal">
                  <div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{room.name}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {room.size ? `${room.size} sq m` : "Size Placeholder"} / {room.bedType || "Bed Placeholder"}
                    </p>
                  </div>
                  <p className="font-body-lg text-body-lg text-brand-gold shrink-0 ml-4">
                    {room.price ? `From $${room.price}` : "Price TBD"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* 6. Hotel Amenities / Experience */}
      <ScrollReveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto text-center gold-divider">
        <h2 className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-4">
          Curated Moments
        </h2>
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-20 max-w-2xl mx-auto">
          Elevate Your Senses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-gutter lg:gap-gutter">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-outline-variant flex items-center justify-center mb-6 text-brand-gold/50 bg-surface transition-colors hover:bg-surface-container">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>spa</span>
            </div>
            <h4 className="font-headline-md text-xl md:text-2xl text-on-surface mb-4">Serenity Spa</h4>
            <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xs">
              Bespoke treatments designed to rejuvenate mind, body, and spirit in a tranquil setting.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-outline-variant flex items-center justify-center mb-6 text-brand-gold/50 bg-surface transition-colors hover:bg-surface-container">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>restaurant</span>
            </div>
            <h4 className="font-headline-md text-xl md:text-2xl text-on-surface mb-4">Fine Dining</h4>
            <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xs">
              Culinary excellence featuring locally sourced ingredients prepared by Michelin-starred chefs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-outline-variant flex items-center justify-center mb-6 text-brand-gold/50 bg-surface transition-colors hover:bg-surface-container">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>fitness_center</span>
            </div>
            <h4 className="font-headline-md text-xl md:text-2xl text-on-surface mb-4">Wellness Center</h4>
            <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-xs">
              State-of-the-art equipment and personalized fitness programs.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* 7. Gallery Preview */}
      <ScrollReveal className="py-section-gap bg-surface-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-4">Gallery</h2>
            <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Visual Journey</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Using mock placeholders for gallery */}
            <div className="relative aspect-square">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1P1lJ7N9zG4-yT4P6V3-6t9hXgL_XW7M7SjZ3Y8F_w4-m7V2gO-5Y1m5C4Z6N4T3P7B_7X3J_q5D6V6X4V_p8J7_W4c9X8R9T7D2G1X6V_m5Z4M8Q4-5W2V_6Z8J6X9_Z5M6Q8P_c2T4W6B8-5X1V6J4T7G4W3Q5_Y8J1-6X3M8X4_V7-5-5-2V_5Z3M4J_c2-1V3Z7_Q8-5J4X7V8T6_w4W1-5M5-3_1V7Z2M3X1-5V_9-3M" alt="Gallery preview 1" fill className="object-cover" />
            </div>
            <div className="relative aspect-square md:col-span-2 md:row-span-2">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2I_QSm66eVX2Z7ec8C0XHHvmYhTCy06-_KdF4BJMXUWpxxtqfEtALqXrH2BBjCZiijjgOFcSH9YeXgE8iiZpa_PvslCeK_gIi81-kiubz3TaiibP3kEJmSjvVnBW5E-mtoaE84gBkiSIOTUp3LIuOClp7GsaSLquSGwPin6cwey-RcCH9YCdZIkjuvY7dNch_3pUE601zPtT4REa9lpgfahqAU7XOKDxk_jkrMW4vdQxNMWFS1-S" alt="Gallery preview 2" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1P1lJ7N9zG4-yT4P6V3-6t9hXgL_XW7M7SjZ3Y8F_w4-m7V2gO-5Y1m5C4Z6N4T3P7B_7X3J_q5D6V6X4V_p8J7_W4c9X8R9T7D2G1X6V_m5Z4M8Q4-5W2V_6Z8J6X9_Z5M6Q8P_c2T4W6B8-5X1V6J4T7G4W3Q5_Y8J1-6X3M8X4_V7-5-5-2V_5Z3M4J_c2-1V3Z7_Q8-5J4X7V8T6_w4W1-5M5-3_1V7Z2M3X1-5V_9-3M" alt="Gallery preview 3" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr7c3w8r-eQhQsUMbAho58ov7W6ot3ZjpmcqV0Ifyr3wwqZj3377zJdlXsm39SJMT8KTuu9HfXRe20XtA-IXyYw2nW8cIJg4dugbHUN7VbzJvsG8XfG_c6Q92bj0m_a2gEooFB10O8B-y8QfZhhvMO0jIdJKS9-E3XKQhN3s7yzDfgvnDRLV9a4OWaN1kVqPuhA1ENhuLuPvQb8QgnWju2wq40y7iAsIV38aYf6iSk0NenhuKh4VSD" alt="Gallery preview 4" fill className="object-cover" />
            </div>
            <div className="relative aspect-square">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI6Ul8f4_zbvd61FxWmwCDcaUeUB8BpaIQ1OI-7ZCmINboYJQfI_6FXy57AH4Atgvra4iBQpdXXkPFgP-8iGkvac4WcjUse2hzd-RXQM4JpKn6yT6zBDKaVBQNVuPGSkUwEtja_PbppalTQE77QzlMhw23HceGzbFSPDi10Caa1RPFDeKvN9Ot24Y5D82y_N_nGq85qCIQbEvtRdct0XNexzs9KlAiIdnqazaw87HbkiA20maUHtuR" alt="Gallery preview 5" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-block bg-transparent border border-brand-gold/40 text-brand-gold px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-brand-gold/10 transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* 8. Nearby Destinations */}
      <ScrollReveal className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto gold-divider">
        <h2 className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-4">Discover</h2>
        <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12">Nearby Attractions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredDestinations.map(dest => (
            <Link href={`/discover/${dest.slug}`} key={dest.id} className="group block">
              <div className="relative aspect-video overflow-hidden mb-4">
                <Image src={dest.mainImage.url} alt={dest.mainImage.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{dest.name}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">{dest.shortDescription}</p>
              <p className="font-label-caps text-brand-gold uppercase">{dest.distance || "Distance Placeholder"}</p>
            </Link>
          ))}
        </div>
      </ScrollReveal>

      {/* 9. Location / Google Maps placeholder */}
      <ScrollReveal className="py-section-gap bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-label-caps text-label-caps text-brand-gold uppercase tracking-[0.2em] mb-4">Location</h2>
            <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Find Us</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              {hotelConfig.address || "123 Hotel Address Placeholder, City, Country"}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-2">
              <span className="font-semibold">Phone:</span> {hotelConfig.phone || "Phone Placeholder"}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              <span className="font-semibold">Email:</span> {hotelConfig.email || "Email Placeholder"}
            </p>
            <Link href="/contact" className="inline-flex items-center text-brand-gold font-label-caps text-label-caps uppercase tracking-widest border-b border-brand-gold pb-1 hover:text-brand-gold/80 hover:border-brand-gold/80 transition-colors group">
              Get Directions
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_right_alt</span>
            </Link>
          </div>
          <div className="w-full aspect-square md:aspect-video bg-surface-dim flex items-center justify-center relative border border-outline-variant">
            <span className="text-on-surface-variant font-label-caps tracking-widest uppercase">Map Placeholder</span>
          </div>
        </div>
      </ScrollReveal>

      {/* 10. Final Booking CTA */}
      <ScrollReveal className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-high">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwF6-tJ8I03DY5SRDfPVWgxx3ef313BHxIOOFptTttUmBaKSWujgDlHFPKWMHv5ISfy5lbIKUjkj_fP1Is9XSyFR9pgLoW45Cv50a1eH0jj4GoZdeayQA3SfTswtoM8zr07_ZK8MxACAeiDF9kJqAYjk9baWH1CKyZWikP0dczNnO1Uj-RlTTx71H6stxofkpQWXsJg250R4PBGXis-OZhkENWHB3OIf2O8e1Zn-ZOKoToSiB6yscM"
            alt="Soft blurred abstract background for booking call to action"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">
            Make Your Stay Memorable
          </h2>
          <Link
            href="#booking"
            className="inline-block bg-brand-gold text-white px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-surface-variant transition-colors shadow-xl"
          >
            Reserve Your Experience
          </Link>
        </div>
      </ScrollReveal>
    </>
  );
}
