import Image from "next/image";
import { Metadata } from "next";
import { hotelConfig } from "@/lib/mockData";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Explore the impeccable design, serene spaces, and refined atmosphere of ${hotelConfig.name}.`,
  openGraph: {
    title: `Gallery | ${hotelConfig.name}`,
    description: `Explore the impeccable design, serene spaces, and refined atmosphere of ${hotelConfig.name}.`,
    type: "website",
  },
};

const galleryImages = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIG2bA7KBvziJuR_wZu0329W7tMQ8v0ym77kqjqZ5VsahHcSvwXb-b3-sV8nfDwxylOP7zfHpTm_cWwWd76YeNj14yT4xn1DJAJ3Ra_GVv3i3WB67odn2Lw3GWhqAXfBq5cdMJDlpMG62Gv1m0zs8WPGKU7q50L21LVF1Wt9bouauyae_3o9zf5R_XR5vQ_aomPQjOsoHseDJBkayIP8VSz_Ng0RNLfMXwaW75YTrxN3vpU23BEuYU",
    alt: "Luxurious modern hotel suite with city skyline view",
    span: "col-span-1 md:row-span-2 lg:row-span-2",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqE6jkCHhxxVNoP1Cc1GC8QTPt0wcCNYkjY_i7DZFQbaE8otXmQO6Oc4r_M4U-Z3k2tOc2sCpHeNHx5P4tSZ58rpPCp-heH86r6JbGW9G8RFm0ZozKpyNYcYJcnzG0a3ZDmarzZRgnYYzPzPNdrmgB6-8l3KWiMU34io61pO0vsNZbgK3L10hGOFbL1EPTQp1Cu98IzBGTKbD1mh1TIbqlLfej8nBGorvpl8t63W3fTqoer1kOjCZJ",
    alt: "Sophisticated fine dining table setting with crystal glassware",
    span: "col-span-1 md:row-span-3 lg:row-span-3",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhkRW5-gx0zutNzebiAguFn8aMg5JUjGmyVM8By4xH20hOcf79rDPygw-T2q9IImPWF7IRB7VmzqHuKE7iGrX9q-X_kAqANFa4a0tRs38UKI_kBc26WvafRXQfAQ6odX38bgxGEGpSS3chCPgND-80aRKM5ofwvS0Bbk-75JOolS0O5EcvzpCXgGt0QnOpujk8imEWlTx1wXR-jXFoPDdHH6IF1KZY4JhmUj30hMtciQPvY1CCmlsP",
    alt: "Tranquil indoor swimming pool in high-end wellness spa",
    span: "col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDioIhUo7xLaqjJnJeVoF0pUCIO77i9zVMmCPzZ0zRKtgLb4jqHL5mkyGhemhW9XxoaPTCQ9eSzQZZSoA8_Uh3ZKakrijm5RKze7E4B8FIUTOvjcYkCse8CYEbjRZoPZBr9HfSNciUr1RKIoP2CBGmU-bdpkNn4hatKHhcwA1WUY3GmqKXg0boLTTWqkfynXZsL04fRRK8Mi56YrOP6pY8hZ_hE4nO25ZXc9LoQ25qcUFdopXOP7bP",
    alt: "Grand hotel lobby with white marble floors and contemporary chandelier",
    span: "col-span-1 md:row-span-3 lg:row-span-3",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwCOt0ucj5y0ENZ88PbWr1zzHwl6gSeNwJFQ4U2bK53-1raCPC10NqwI5JJme2og7oVOZwPeaGwT_M8c9lrdqEhArmk8puDoGqeJHJFt1nBARj4sAQ96tvHzIx6-yvquOcDgjOEZbNOS3awrkctZhzRqKX-XyCjYTIshhCDgXeyEKcfW1ferqE1BlpJTK-DsQOBLlGxOeI0NZ4qna09yMRJKvtuONjqnK6Bnr1Xv5E5I3mZhZIP21v",
    alt: "Artisanal cocktail on a sleek marble bar counter in an elite lounge",
    span: "col-span-1 md:row-span-2 lg:row-span-2",
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmj1y6z4v_T9f8MSwXiLVAj4lDVcWZo5T4cEFd_i3_hdf4sR3JQOIFYIckVE7skWcz3WPGB7PAuxmeyFNB3We4katv3jzuVxSKAHZx4o3ZvFpZjigQ0LnL_xY2cVIkRW7AU9lcBxmi_efHP2xVzBZ6KSWmMkpS5wiUOBNq4S6CKd87XVnBPc2Bk0Bd_PblLo_mupbn_6Nc_2rz59TdaV70KgTN7ijssO58Ir_Xniy9A-mCwx_jYsiZ",
    alt: "High-end private balcony with modern outdoor furniture",
    span: "col-span-1 md:row-span-3 lg:row-span-3",
  },
];

export default function GalleryPage() {
  return (
    <main className="w-full max-w-[var(--spacing-container-max)] mx-auto pb-section-gap">
      {/* Gallery Header */}
      <section className="px-margin-mobile md:px-margin-desktop pt-8 md:pt-16 pb-16">
        <ScrollReveal>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
            A Vision of Luxury
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
            Explore the impeccable design, serene spaces, and refined atmosphere of {hotelConfig.name}. Every detail is crafted to provide an unparalleled experience of modern luxury.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal className="flex flex-wrap gap-6 mt-12 border-b border-outline-variant/30 pb-4">
          <button className="font-label-caps text-label-caps text-primary border-b border-brand-gold pb-1 uppercase tracking-widest">
            All Spaces
          </button>
          <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-brand-gold pb-1 uppercase tracking-widest transition-colors duration-500">
            Rooms & Suites
          </button>
          <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-brand-gold pb-1 uppercase tracking-widest transition-colors duration-500">
            Gastronomy
          </button>
          <button className="font-label-caps text-label-caps text-on-surface-variant hover:text-brand-gold pb-1 uppercase tracking-widest transition-colors duration-500">
            Wellness
          </button>
        </ScrollReveal>
      </section>

      {/* Masonry Gallery */}
      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} className={`relative overflow-hidden bg-surface-container rounded-sm group ${image.span}`}>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal className="flex justify-center mt-16">
          <button className="bg-transparent border border-brand-gold text-brand-gold font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-brand-gold/10 transition-colors duration-500">
            Load More Spaces
          </button>
        </ScrollReveal>
      </section>
    </main>
  );
}
