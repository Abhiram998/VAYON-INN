/**
 * Discover — Destinations, Activities & Transit data for VAYON INN.
 *
 * Reference location: Ponekkara / Edappally, Ernakulam, Kochi 682024
 * Google Maps: https://maps.app.goo.gl/cbpxp9pXVwPYf5tM7?g_st=aw
 *
 * IMPORTANT:
 * - Distances and travel times are manually curated approximations, NOT live API results.
 * - Opening hours labeled "verify" are best-effort and may change.
 * - Image URLs are temporary Unsplash placeholders — replace with self-hosted assets
 *   under /public/images/discover/[slug].jpg before production.
 */

export interface DiscoverItem {
  id: string;
  name: string;
  category: 'place' | 'activity' | 'transit';
  description: string;
  distance: string;
  travelTime: string;
  hours: string;
  bestTime?: string;
  image: string;
  mapUrl: string;
  icon?: string;
}

// ---------------------------------------------------------------------------
// Helper to build Google Maps search URLs
// ---------------------------------------------------------------------------
function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ' Kochi')}`;
}

// ---------------------------------------------------------------------------
// 1. TOP PLACES TO VISIT IN KOCHI (10)
// ---------------------------------------------------------------------------
export const topPlaces: DiscoverItem[] = [
  {
    id: 'p1',
    name: 'Fort Kochi',
    category: 'place',
    description: 'Colonial-era streets lined with art galleries, cafés and centuries of Dutch, Portuguese and British heritage.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours (neighborhood)',
    bestTime: 'Morning or late afternoon',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb20e10a4?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Fort Kochi'),
  },
  {
    id: 'p2',
    name: 'Chinese Fishing Nets',
    category: 'place',
    description: "Giant cantilevered fishing nets on the Fort Kochi shoreline — Kochi's most photographed landmark.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours',
    bestTime: 'Sunset, 4–6 PM',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Chinese Fishing Nets Fort Kochi'),
  },
  {
    id: 'p3',
    name: 'Mattancherry Palace',
    category: 'place',
    description: '16th-century palace famous for vivid Kerala murals depicting Hindu temple art and royal artifacts.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '10 AM – 5 PM, closed Fri — verify before visiting',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Mattancherry Palace Dutch Palace'),
  },
  {
    id: 'p4',
    name: 'Jew Town & Paradesi Synagogue',
    category: 'place',
    description: 'Antique-lined lanes around one of the oldest active synagogues in the Commonwealth.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '10 AM – 12 PM & 3 – 5 PM, closed Fri–Sat — verify before visiting',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Paradesi Synagogue Jew Town'),
  },
  {
    id: 'p5',
    name: 'St. Francis Church',
    category: 'place',
    description: "Oldest European church in India (1503) and Vasco da Gama's original burial site.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: '9 AM – 6 PM daily',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('St Francis Church Fort Kochi'),
  },
  {
    id: 'p6',
    name: 'Santa Cruz Basilica',
    category: 'place',
    description: 'Heritage basilica known for its stunning stained glass windows and painted ceiling murals.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: '9 AM – 6 PM daily',
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Santa Cruz Basilica Fort Kochi'),
  },
  {
    id: 'p7',
    name: 'Marine Drive',
    category: 'place',
    description: 'Scenic backwater-facing promenade popular for evening walks, sunset views and boat rides.',
    distance: '~9 km',
    travelTime: '~20 min drive',
    hours: 'Open 24 hours',
    bestTime: 'Sunset',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Marine Drive Kochi'),
  },
  {
    id: 'p8',
    name: 'Cherai Beach',
    category: 'place',
    description: 'Where the backwaters and the Arabian Sea sit side by side — a serene beach getaway north of the city.',
    distance: '~21 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours, lifeguards ~9 AM – 6 PM',
    bestTime: 'Early morning or late afternoon',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Cherai Beach'),
  },
  {
    id: 'p9',
    name: 'Bolgatty Palace & Island',
    category: 'place',
    description: 'Dutch-era palace turned heritage hotel, set on an island with lush gardens and a golf course.',
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Grounds ~9 AM – 6 PM — verify before visiting',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Bolgatty Palace'),
  },
  {
    id: 'p10',
    name: 'Hill Palace, Tripunithura',
    category: 'place',
    description: "Kerala's largest archaeological museum housed in the former Kochi royal residence.",
    distance: '~27 km',
    travelTime: '~50 min drive',
    hours: '9 AM – 4:30 PM, closed Mon — verify before visiting',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Hill Palace Museum Tripunithura'),
  },
];

// ---------------------------------------------------------------------------
// 2. TOP ACTIVITIES IN KOCHI (10)
// ---------------------------------------------------------------------------
export const topActivities: DiscoverItem[] = [
  {
    id: 'a1',
    name: 'Backwater Houseboat Day Cruise',
    category: 'activity',
    description: 'Glide through the backwater canals on a traditional Kerala houseboat — lunch included on most tours.',
    distance: '~45–60 min to nearest jetty',
    travelTime: '~45–60 min drive',
    hours: 'Day cruises typically 9 AM – 4 PM',
    icon: 'directions_boat',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Alleppey Houseboat Jetty'),
  },
  {
    id: 'a2',
    name: 'Kathakali & Kalaripayattu Show',
    category: 'activity',
    description: 'Classical Kerala dance-drama and martial arts performed live at a Fort Kochi cultural centre.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Evening shows typically 5 – 8:30 PM',
    icon: 'theater_comedy',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kerala Kathakali Centre Fort Kochi'),
  },
  {
    id: 'a3',
    name: 'Heritage Walking Tour',
    category: 'activity',
    description: 'Guided walk through the spice markets, antique shops and colonial-era lanes of Jew Town & Mattancherry.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: 'Morning & evening slots, ~2–3 hrs',
    icon: 'hiking',
    image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8c60f?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Jew Town Mattancherry'),
  },
  {
    id: 'a4',
    name: 'Sunset Harbour Cruise',
    category: 'activity',
    description: 'Boat ride past the harbour, Chinese fishing nets and Willingdon Island during golden hour.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Departs ~4:30 – 5:30 PM',
    bestTime: 'Sunset',
    icon: 'sailing',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kochi Harbour Cruise'),
  },
  {
    id: 'a5',
    name: 'Ayurvedic Spa & Wellness',
    category: 'activity',
    description: 'Traditional Kerala Ayurvedic massage and wellness treatments at a certified centre.',
    distance: 'Varies by venue',
    travelTime: 'Varies',
    hours: 'Typically 9 AM – 8 PM',
    icon: 'spa',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ayurvedic Spa Kochi'),
  },
  {
    id: 'a6',
    name: 'Water Sports at Bolgatty',
    category: 'activity',
    description: 'Jet-skiing, banana boat rides and kayaking on the scenic backwaters near Bolgatty Island.',
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Typically 9 AM – 5:30 PM',
    icon: 'kayaking',
    image: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Bolgatty Water Sports'),
  },
  {
    id: 'a7',
    name: 'Spice Market Tour & Tasting',
    category: 'activity',
    description: "Explore Broadway and Jew Town's centuries-old spice trade with a guided tasting session.",
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '9 AM – 7 PM (market hours)',
    icon: 'local_florist',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Spice Market Broadway Ernakulam'),
  },
  {
    id: 'a8',
    name: 'Shopping at Lulu Mall',
    category: 'activity',
    description: "One of India's largest shopping malls, right at Edappally Junction — walkable from the metro.",
    distance: '~2 km',
    travelTime: '~5–10 min drive',
    hours: '10 AM – 10 PM daily',
    icon: 'local_mall',
    image: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Lulu Mall Edappally'),
  },
  {
    id: 'a9',
    name: 'Elephant Sanctuary Day Trip',
    category: 'activity',
    description: 'A day with rescued elephants near Kodanad, including supervised feeding and bathing.',
    distance: '~40 km',
    travelTime: '~1 hr 15 min drive',
    hours: '9 AM – 5 PM',
    icon: 'forest',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kodanad Elephant Sanctuary'),
  },
  {
    id: 'a10',
    name: 'Kerala Seafood & Café Trail',
    category: 'activity',
    description: "Sample Kerala seafood curries and Fort Kochi's celebrated art cafés like Kashi Art Café.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Most cafés 8 AM – 8 PM',
    icon: 'restaurant',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kashi Art Cafe Fort Kochi'),
  },
];

// ---------------------------------------------------------------------------
// 3. GETTING HERE & ESSENTIALS (5)
// ---------------------------------------------------------------------------
export const gettingHere: DiscoverItem[] = [
  {
    id: 't1',
    name: 'Edappally Metro Station',
    category: 'transit',
    description: 'Nearest Kochi Metro stop on the Blue Line, right at Edappally Junction next to Lulu Mall.',
    distance: '~1–2 km',
    travelTime: '~5 min drive',
    hours: 'First metro ~6:00 AM, last ~10:00 PM',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Edappally Metro Station'),
  },
  {
    id: 't2',
    name: 'Ernakulam Town Railway Station',
    category: 'transit',
    description: 'The closer of the two main city rail stations, serving regional and express trains.',
    distance: '~7 km',
    travelTime: '~15–20 min drive',
    hours: 'Station open 24 hrs — check individual train schedules',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ernakulam Town Railway Station'),
  },
  {
    id: 't3',
    name: 'Ernakulam Junction Station',
    category: 'transit',
    description: "Ernakulam's main long-distance rail terminus for inter-state and express services.",
    distance: '~9 km',
    travelTime: '~20–25 min drive',
    hours: 'Station open 24 hrs — check individual train schedules',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ernakulam Junction Railway Station'),
  },
  {
    id: 't4',
    name: 'Cochin International Airport',
    category: 'transit',
    description: "Kerala's busiest airport (COK), connecting Kochi to major domestic and international cities.",
    distance: '~23 km',
    travelTime: '~40–45 min drive',
    hours: 'Open 24 hours',
    icon: 'flight',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Cochin International Airport'),
  },
  {
    id: 't5',
    name: 'Vyttila Mobility Hub',
    category: 'transit',
    description: "Kochi's main interstate and city bus terminal, also connected to the metro network.",
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Open 24 hours',
    icon: 'directions_bus',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Vyttila Mobility Hub'),
  },
];
