import { topPlaces, topActivities } from "@/data/discover";
import type { DiscoverItem } from "@/data/discover";

function toTouristAttractionSchema(item: DiscoverItem) {
  return {
    "@type": "TouristAttraction",
    name: item.name,
    description: item.description,
    url: item.mapUrl,
    image: item.image,
    isAccessibleForFree: true,
    touristType: item.category === "place" ? "Sightseeing" : "Cultural",
  };
}

export default function DiscoverJsonLd() {
  const items = [...topPlaces, ...topActivities];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Discover Kochi — Attractions near VAYON INN",
    description:
      "Curated tourist attractions, activities and transit information near VAYON INN, Edappally, Kochi.",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: toTouristAttractionSchema(item),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
