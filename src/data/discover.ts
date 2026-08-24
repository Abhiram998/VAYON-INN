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
  slug?: string;
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
    description: 'A captivating blend of medieval Portugal, Holland, and an English village grafted onto the Malabar Coast. Stroll through the cobblestone streets lined with centuries-old trees, vibrant art galleries, and colonial architecture. Allow the scent of aged spice warehouses and freshly brewed local coffee to envelop you as you step back in time in this beautifully preserved coastal settlement.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours (neighborhood)',
    bestTime: 'Morning or late afternoon',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Fort Kochi'),
    slug: 'fort-kochi'
  },
  {
    id: 'p2',
    name: 'Chinese Fishing Nets',
    category: 'place',
    description: "These majestic cantilevered fishing nets, believed to have been introduced by the legendary explorer Zheng He, stand like giant sentinels along the Fort Kochi shoreline. As the sun begins its descent, casting a golden hue over the Arabian Sea, witness the rhythmic, synchronized dance of the local fishermen lowering the teak wood frames into the waters—an enduring symbol of Kochi's maritime legacy.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours',
    bestTime: 'Sunset, 4–6 PM',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Chinese Fishing Nets Fort Kochi'),
    slug: 'chinese-fishing-nets'
  },
  {
    id: 'p3',
    name: 'Mattancherry Palace',
    category: 'place',
    description: 'Also known as the Dutch Palace, this 16th-century architectural marvel houses some of the most exquisite, vivid Kerala murals in existence. The intricate frescoes depict Hindu temple art, epics, and royal artifacts with an unprecedented level of detail and color preservation. It stands as a profound testament to the opulent history and artistic brilliance of the Kochi royal lineage.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '10 AM – 5 PM, closed Fri',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Mattancherry Palace Dutch Palace'),
    slug: 'mattancherry-palace'
  },
  {
    id: 'p4',
    name: 'Jew Town & Paradesi Synagogue',
    category: 'place',
    description: 'Wander through the antique-lined lanes of Jew Town, where the air is thick with the aroma of exotic spices and history. At its heart lies the Paradesi Synagogue, one of the oldest active synagogues in the Commonwealth. Marvel at the hand-painted, willow-pattern floor tiles from Canton, the Belgian glass chandeliers, and the profound silence that permeates this sacred, time-honored sanctuary.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '10 AM – 12 PM & 3 – 5 PM, closed Fri–Sat',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Paradesi Synagogue Jew Town'),
    slug: 'jew-town-paradesi-synagogue'
  },
  {
    id: 'p5',
    name: 'St. Francis Church',
    category: 'place',
    description: "Steeped in quiet reverence, St. Francis Church holds the distinction of being the oldest European church in India, constructed in 1503. Its austere, unadorned facade belies a profound historical significance, serving as the original burial site of the legendary explorer Vasco da Gama. A sanctuary of peace, the church's ancient timber-framed roof echoes with centuries of solemn prayer.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: '9 AM – 6 PM daily',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('St Francis Church Fort Kochi'),
    slug: 'st-francis-church'
  },
  {
    id: 'p6',
    name: 'Santa Cruz Basilica',
    category: 'place',
    description: 'A triumph of Indo-Romano-Gothic architecture, the Santa Cruz Basilica is a breathtaking heritage edifice known for its soaring spires, stunning stained glass windows, and meticulously painted canvas ceiling murals. The hushed interior, illuminated by the soft glow of natural light filtering through the colored glass, offers an atmosphere of profound serenity and architectural grandeur.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: '9 AM – 6 PM daily',
    image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Santa Cruz Basilica Fort Kochi'),
    slug: 'santa-cruz-basilica'
  },
  {
    id: 'p7',
    name: 'Marine Drive',
    category: 'place',
    description: 'A scenic, bustling promenade that frames the edge of the city against the tranquil expanse of the backwaters. Popular for evening strolls, Marine Drive offers panoramic, sweeping views of the harbor and passing ships. As twilight descends, the glittering city skyline reflects perfectly upon the water, creating a mesmerizing backdrop for a leisurely evening boat ride or a peaceful walk.',
    distance: '~9 km',
    travelTime: '~20 min drive',
    hours: 'Open 24 hours',
    bestTime: 'Sunset',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Marine Drive Kochi'),
    slug: 'marine-drive'
  },
  {
    id: 'p8',
    name: 'Cherai Beach',
    category: 'place',
    description: 'An idyllic coastal haven where the tranquil emerald backwaters meet the rolling waves of the Arabian Sea. Located just north of the city, Cherai Beach offers a serene, pristine escape from the urban tempo. Walk along the golden sands lined with swaying palms, and indulge in a moment of pure, uninterrupted coastal tranquility.',
    distance: '~21 km',
    travelTime: '~40 min drive',
    hours: 'Open 24 hours, lifeguards ~9 AM – 6 PM',
    bestTime: 'Early morning or late afternoon',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Cherai Beach'),
    slug: 'cherai-beach'
  },
  {
    id: 'p9',
    name: 'Bolgatty Palace & Island',
    category: 'place',
    description: 'Set upon a lush, verdant island, this meticulously restored Dutch-era palace exudes colonial elegance. Surrounded by manicured gardens, expansive lawns, and a tranquil golf course, Bolgatty Island offers an atmosphere of refined exclusion. It is a picturesque sanctuary that captures the grandeur of a bygone era, perfectly framed by the surrounding waters.',
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Grounds ~9 AM – 6 PM',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Bolgatty Palace'),
    slug: 'bolgatty-palace'
  },
  {
    id: 'p10',
    name: 'Hill Palace, Tripunithura',
    category: 'place',
    description: "Spread across 54 acres of terraced land, Kerala's largest archaeological museum is housed in the opulent former residence of the Kochi royal family. The expansive complex features dozens of traditional buildings, deer parks, and ancient artifacts, offering an immersive, majestic journey into the sovereign heritage and cultural wealth of the region.",
    distance: '~27 km',
    travelTime: '~50 min drive',
    hours: '9 AM – 4:30 PM, closed Mon',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Hill Palace Museum Tripunithura'),
    slug: 'hill-palace'
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
    description: 'Embark on a deeply tranquil journey through the intricate network of Kerala’s backwater canals aboard a traditional, hand-crafted wooden houseboat. Glide silently past emerald paddy fields, swaying palms, and quiet village life. This curated experience, complete with an authentic local lunch prepared on board, offers an unparalleled immersion into the gentle, unhurried rhythm of the backwaters.',
    distance: '~45–60 min to nearest jetty',
    travelTime: '~45–60 min drive',
    hours: 'Day cruises typically 9 AM – 4 PM',
    icon: 'directions_boat',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Alleppey Houseboat Jetty'),
    slug: 'backwater-houseboat'
  },
  {
    id: 'a2',
    name: 'Kathakali & Kalaripayattu Show',
    category: 'activity',
    description: 'Witness the visceral power and vibrant artistry of Kerala’s classical heritage. Kathakali, a profoundly expressive dance-drama featuring elaborate makeup and sweeping gestures, pairs flawlessly with the lightning-fast acrobatics of Kalaripayattu, one of the world’s oldest martial arts. This captivating evening performance in a specialized Fort Kochi theatre is an unforgettable cultural spectacle.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Evening shows typically 5 – 8:30 PM',
    icon: 'theater_comedy',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kerala Kathakali Centre Fort Kochi'),
    slug: 'kathakali-kalaripayattu'
  },
  {
    id: 'a3',
    name: 'Heritage Walking Tour',
    category: 'activity',
    description: 'Step into a living museum with a guided, immersive walk through the storied streets of Jew Town and Mattancherry. Let an expert local guide lead you past centuries-old spice warehouses, eclectic antique shops, and fading colonial facades. This intimate tour reveals the hidden narratives, architectural nuances, and rich multicultural tapestry that define historic Kochi.',
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: 'Morning & evening slots, ~2–3 hrs',
    icon: 'hiking',
    image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8c60f?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Jew Town Mattancherry'),
    slug: 'heritage-walking-tour'
  },
  {
    id: 'a4',
    name: 'Sunset Harbour Cruise',
    category: 'activity',
    description: 'Experience the magic of the Malabar Coast at golden hour. Set sail across the serene harbor as the setting sun casts a brilliant, fiery glow over the water, silhouetting the iconic Chinese fishing nets and Willingdon Island. This elegant, leisurely boat ride offers a breathtaking, unobstructed vantage point of the city transitioning into twilight.',
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Departs ~4:30 – 5:30 PM',
    bestTime: 'Sunset',
    icon: 'sailing',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kochi Harbour Cruise'),
    slug: 'sunset-harbour-cruise'
  },
  {
    id: 'a5',
    name: 'Ayurvedic Spa & Wellness',
    category: 'activity',
    description: 'Surrender to absolute relaxation with traditional Ayurvedic wellness therapies, rooted in thousands of years of ancient Indian healing. From deeply restorative, warm herbal oil massages to holistic rejuvenation treatments, our partnered, certified spa centers provide a serene sanctuary to balance the mind, restore the body, and elevate the spirit.',
    distance: 'Varies by venue',
    travelTime: 'Varies',
    hours: 'Typically 9 AM – 8 PM',
    icon: 'spa',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ayurvedic Spa Kochi'),
    slug: 'ayurvedic-spa'
  },
  {
    id: 'a6',
    name: 'Water Sports at Bolgatty',
    category: 'activity',
    description: 'For those seeking an exhilarating contrast to the city’s historic calm, the waters surrounding Bolgatty Island offer premium aquatic adventure. Glide across the scenic backwaters on a jet-ski, embark on a guided kayaking expedition, or enjoy a spirited banana boat ride. It’s an energetic, refreshing way to experience the natural beauty of the Kochi estuary.',
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Typically 9 AM – 5:30 PM',
    icon: 'kayaking',
    image: 'https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Bolgatty Water Sports'),
    slug: 'bolgatty-water-sports'
  },
  {
    id: 'a7',
    name: 'Spice Market Tour & Tasting',
    category: 'activity',
    description: "Delve into the sensory epicenter of Kochi's legendary spice trade. Navigate the narrow, aromatic corridors of Broadway and Jew Town, where sacks of cardamom, pepper, and cloves have been traded for generations. This guided tasting session demystifies the region's prized botanicals, offering an authentic, flavorful connection to Kerala's culinary soul.",
    distance: '~25 km',
    travelTime: '~45 min drive',
    hours: '9 AM – 7 PM (market hours)',
    icon: 'local_florist',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Spice Market Broadway Ernakulam'),
    slug: 'spice-market-tour'
  },
  {
    id: 'a8',
    name: 'Shopping at Lulu Mall',
    category: 'activity',
    description: "Step into the modern pulse of the city at one of India's most expansive and luxurious retail destinations. Located conveniently at Edappally Junction, Lulu Mall offers an unparalleled, cosmopolitan shopping experience. Featuring premier international brands, fine dining, and world-class entertainment, it provides a sophisticated retreat for the discerning shopper.",
    distance: '~2 km',
    travelTime: '~5–10 min drive',
    hours: '10 AM – 10 PM daily',
    icon: 'local_mall',
    image: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Lulu Mall Edappally'),
    slug: 'lulu-mall'
  },
  {
    id: 'a9',
    name: 'Elephant Sanctuary Day Trip',
    category: 'activity',
    description: 'Venture beyond the city to the lush, riverside environs of the Kodanad Elephant Sanctuary. This exclusive, full-day excursion allows you to respectfully observe and interact with rescued gentle giants. Participate in supervised feeding and bathing rituals along the riverbank, forging a memorable, humbling connection with nature’s most majestic creatures.',
    distance: '~40 km',
    travelTime: '~1 hr 15 min drive',
    hours: '9 AM – 5 PM',
    icon: 'forest',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kodanad Elephant Sanctuary'),
    slug: 'elephant-sanctuary'
  },
  {
    id: 'a10',
    name: 'Kerala Seafood & Café Trail',
    category: 'activity',
    description: "Embark on a curated gastronomic journey through Fort Kochi's celebrated culinary landscape. From savoring the complex, fiery spices of traditional Kerala seafood curries to relaxing in the bohemian ambiance of legendary establishments like the Kashi Art Café. This trail is an elegant exploration of the flavors and artistic spirit that define contemporary Kochi.",
    distance: '~23 km',
    travelTime: '~40 min drive',
    hours: 'Most cafés 8 AM – 8 PM',
    icon: 'restaurant',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Kashi Art Cafe Fort Kochi'),
    slug: 'seafood-cafe-trail'
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
    description: 'The epitome of modern, efficient urban transit. Located just moments away, the Edappally station on the Blue Line provides swift, air-conditioned connectivity across the city’s primary corridors. Impeccably clean and seamlessly integrated into the adjacent luxury retail district, it is the most convenient way to navigate Kochi with ease.',
    distance: '~1–2 km',
    travelTime: '~5 min drive',
    hours: 'First metro ~6:00 AM, last ~10:00 PM',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Edappally Metro Station'),
    slug: 'edappally-metro'
  },
  {
    id: 't2',
    name: 'Ernakulam Town Railway Station',
    category: 'transit',
    description: 'A vital, bustling artery connecting Kochi to the broader Indian subcontinent. Ernakulam Town (North) Station serves a wide array of regional and express passenger trains. Whether arriving from a nearby coastal town or departing on a scenic journey through the Western Ghats, this station offers essential, straightforward connectivity.',
    distance: '~7 km',
    travelTime: '~15–20 min drive',
    hours: 'Station open 24 hrs',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ernakulam Town Railway Station'),
    slug: 'ernakulam-town'
  },
  {
    id: 't3',
    name: 'Ernakulam Junction Station',
    category: 'transit',
    description: "The city's principal, long-distance railway terminus. Ernakulam Junction (South) handles the vast majority of interstate and premium express services, including the prestigious Rajdhani and Shatabdi networks. It stands as the primary gateway for guests traveling cross-country, providing comprehensive rail access to all corners of India.",
    distance: '~9 km',
    travelTime: '~20–25 min drive',
    hours: 'Station open 24 hrs',
    icon: 'train',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Ernakulam Junction Railway Station'),
    slug: 'ernakulam-junction'
  },
  {
    id: 't4',
    name: 'Cochin International Airport',
    category: 'transit',
    description: "A triumph of sustainable infrastructure, Cochin International Airport (COK) holds the distinction of being the world’s first fully solar-powered airport. Featuring expansive, modern terminals infused with traditional Kerala architectural motifs, it offers a seamless, welcoming arrival experience, connecting our guests to major domestic and international hubs.",
    distance: '~23 km',
    travelTime: '~40–45 min drive',
    hours: 'Open 24 hours',
    icon: 'flight',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Cochin International Airport'),
    slug: 'cochin-international-airport'
  },
  {
    id: 't5',
    name: 'Vyttila Mobility Hub',
    category: 'transit',
    description: "An innovative, integrated transport nexus that unifies the city’s mobility networks. Vyttila seamlessly connects interstate luxury coaches, local city buses, and the metro system in one centralized, sprawling facility. It serves as the definitive transfer point for guests looking to effortlessly transition between regional and urban travel modalities.",
    distance: '~11 km',
    travelTime: '~25 min drive',
    hours: 'Open 24 hours',
    icon: 'directions_bus',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=450&fit=crop',
    mapUrl: mapsUrl('Vyttila Mobility Hub'),
    slug: 'vyttila-mobility-hub'
  },
];
