export interface HotelConfig {
  name: string;
  brand: string;
  logo: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  mapLocation: string | null;
  socialLinks: {
    instagram: string | null;
    facebook: string | null;
    twitter: string | null;
  };
}

export const hotelConfig: HotelConfig = {
  name: "VAYON INN",
  brand: "BY NINE9 HOTELS",
  logo: null, // Placeholder
  address: null, // Placeholder
  phone: null, // Placeholder
  email: null, // Placeholder
  mapLocation: null, // Placeholder
  socialLinks: {
    instagram: null, // Placeholder
    facebook: null, // Placeholder
    twitter: null, // Placeholder
  },
};

export interface Room {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number | null;
  size: number | null;
  bedType: string | null;
  maxGuests: number | null;
  amenities: string[];
  featured: boolean;
  images: {
    main: { url: string; alt: string };
    gallery: { url: string; alt: string }[];
  };
}

export const mockRooms: Room[] = [
  {
    id: "r1",
    slug: "room-placeholder-1",
    name: "Executive Room",
    description: "Room description placeholder text.",
    price: null,
    size: null,
    bedType: null,
    maxGuests: null,
    amenities: [],
    featured: true,
    images: {
      main: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp2I_QSm66eVX2Z7ec8C0XHHvmYhTCy06-_KdF4BJMXUWpxxtqfEtALqXrH2BBjCZiijjgOFcSH9YeXgE8iiZpa_PvslCeK_gIi81-kiubz3TaiibP3kEJmSjvVnBW5E-mtoaE84gBkiSIOTUp3LIuOClp7GsaSLquSGwPin6cwey-RcCH9YCdZIkjuvY7dNch_3pUE601zPtT4REa9lpgfahqAU7XOKDxk_jkrMW4vdQxNMWFS1-S",
        alt: "Room interior",
      },
      gallery: [],
    },
  },
  {
    id: "r2",
    slug: "room-placeholder-2",
    name: "Signature Suite",
    description: "Room description placeholder text.",
    price: null,
    size: null,
    bedType: null,
    maxGuests: null,
    amenities: [],
    featured: true,
    images: {
      main: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr7c3w8r-eQhQsUMbAho58ov7W6ot3ZjpmcqV0Ifyr3wwqZj3377zJdlXsm39SJMT8KTuu9HfXRe20XtA-IXyYw2nW8cIJg4dugbHUN7VbzJvsG8XfG_c6Q92bj0m_a2gEooFB10O8B-y8QfZhhvMO0jIdJKS9-E3XKQhN3s7yzDfgvnDRLV9a4OWaN1kVqPuhA1ENhuLuPvQb8QgnWju2wq40y7iAsIV38aYf6iSk0NenhuKh4VSD",
        alt: "Premium Room interior",
      },
      gallery: [],
    },
  },
  {
    id: "r3",
    slug: "room-placeholder-3",
    name: "Penthouse Suite",
    description: "Room description placeholder text.",
    price: null,
    size: null,
    bedType: null,
    maxGuests: null,
    amenities: [],
    featured: true,
    images: {
      main: {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI6Ul8f4_zbvd61FxWmwCDcaUeUB8BpaIQ1OI-7ZCmINboYJQfI_6FXy57AH4Atgvra4iBQpdXXkPFgP-8iGkvac4WcjUse2hzd-RXQM4JpKn6yT6zBDKaVBQNVuPGSkUwEtja_PbppalTQE77QzlMhw23HceGzbFSPDi10Caa1RPFDeKvN9Ot24Y5D82y_N_nGq85qCIQbEvtRdct0XNexzs9KlAiIdnqazaw87HbkiA20maUHtuR",
        alt: "Executive Room interior",
      },
      gallery: [],
    },
  },
];

export interface Destination {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  distance: string | null;
  category: string | null;
  mainImage: {
    url: string;
    alt: string;
  };
}

export const mockDestinations: Destination[] = [
  {
    id: "d1",
    slug: "destination-placeholder-1",
    name: "Destination Placeholder",
    shortDescription: "Short description placeholder.",
    description: "Detailed description placeholder.",
    distance: null,
    category: null,
    mainImage: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1P1lJ7N9zG4-yT4P6V3-6t9hXgL_XW7M7SjZ3Y8F_w4-m7V2gO-5Y1m5C4Z6N4T3P7B_7X3J_q5D6V6X4V_p8J7_W4c9X8R9T7D2G1X6V_m5Z4M8Q4-5W2V_6Z8J6X9_Z5M6Q8P_c2T4W6B8-5X1V6J4T7G4W3Q5_Y8J1-6X3M8X4_V7-5-5-2V_5Z3M4J_c2-1V3Z7_Q8-5J4X7V8T6_w4W1-5M5-3_1V7Z2M3X1-5V_9-3M", // Placeholder
      alt: "Destination placeholder",
    },
  },
];
