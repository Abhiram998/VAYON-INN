import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | VAYON INN",
    default: "VAYON INN | By Nine9 Hotels",
  },
  description: "Experience quiet luxury and immaculate service in the heart of the city at Vayon Inn.",
  openGraph: {
    title: "VAYON INN",
    description: "Experience quiet luxury and immaculate service.",
    type: "website",
    siteName: "VAYON INN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfairDisplay.variable} ${montserrat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col selection:bg-secondary-container selection:text-on-secondary-container">
        <TopNavBar />
        <main className="flex-grow flex flex-col pt-[96px] md:pt-[112px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
