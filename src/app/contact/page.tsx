import { Metadata } from "next";
import { hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${hotelConfig.name}. Whether you are planning a stay or hosting an event, our concierge is at your service.`,
  openGraph: {
    title: `Contact | ${hotelConfig.name}`,
    description: `Get in touch with ${hotelConfig.name}.`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full max-w-[var(--spacing-container-max)] mx-auto pb-section-gap">
      <section className="px-margin-mobile md:px-margin-desktop pt-8 md:pt-16 mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <ScrollReveal>
              <h1 className="font-display-lg-mobile md:font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
                Reach Out
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md font-light">
                Whether you are planning a stay or hosting an event, our concierge is at your service to ensure every detail is perfect.
              </p>
            </ScrollReveal>

            <ScrollReveal className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-gold mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-1">Address</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {hotelConfig.address || "Address Placeholder"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-gold mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>call</span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-1">Telephone</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{hotelConfig.phone || "Phone Placeholder"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-gold mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>chat</span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-1">WhatsApp</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{hotelConfig.phone || "WhatsApp Placeholder"}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-brand-gold mt-1" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-1">Email</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{hotelConfig.email || "Email Placeholder"}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Map Placeholder */}
            <ScrollReveal>
              <div className="w-full h-[300px] bg-surface-container rounded-sm border border-outline-variant/30 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-on-surface-variant font-label-caps text-label-caps tracking-widest uppercase transition-transform duration-500 group-hover:scale-105">
                  [ Interactive Map ]
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal className="bg-surface/70 backdrop-blur-xl border border-outline-variant/30 p-8 md:p-12 rounded-sm relative mt-8 lg:mt-0 shadow-sm">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Send an Inquiry</h2>
            <form className="space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-secondary focus:ring-0 px-0 py-3 font-body-md text-body-md text-primary placeholder-transparent peer transition-all duration-500 outline-none"
                  placeholder="Full Name" 
                  required 
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all duration-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Full Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-secondary focus:ring-0 px-0 py-3 font-body-md text-body-md text-primary placeholder-transparent peer transition-all duration-500 outline-none"
                  placeholder="Email Address" 
                  required 
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all duration-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-secondary focus:ring-0 px-0 py-3 font-body-md text-body-md text-primary placeholder-transparent peer transition-all duration-500 outline-none"
                  placeholder="Phone Number" 
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 -top-3.5 text-on-surface-variant text-sm transition-all duration-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Phone Number
                </label>
              </div>
              
              <div className="relative pt-4">
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-outline-variant/50 focus:border-secondary focus:ring-0 px-0 py-3 font-body-md text-body-md text-primary placeholder-transparent peer resize-none transition-all duration-500 outline-none"
                  placeholder="Your Message" 
                  required 
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-0 text-on-surface-variant text-sm transition-all duration-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-secondary peer-focus:text-sm"
                >
                  Your Message
                </label>
              </div>
              
              <button 
                type="button" 
                className="w-full bg-brand-gold text-white font-label-caps text-label-caps px-8 py-5 uppercase tracking-widest hover:bg-surface-tint transition-colors mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
