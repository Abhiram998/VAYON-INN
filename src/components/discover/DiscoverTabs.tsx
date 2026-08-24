"use client";

import { useState } from "react";
import { topPlaces, topActivities, gettingHere } from "@/data/discover";
import DiscoverEditorial from "./DiscoverEditorial";

const tabs = [
  { key: "places", label: "Top Places", data: topPlaces },
  { key: "activities", label: "Top Activities", data: topActivities },
  { key: "transit", label: "Getting Here", data: gettingHere },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function DiscoverTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("places");
  const activeData = tabs.find((t) => t.key === activeTab)!;

  return (
    <div>
      {/* Tab switcher */}
      <div
        className="flex gap-1 mb-16 md:mb-24 border-b border-outline-variant/40"
        role="tablist"
        aria-label="Destination categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`tabpanel-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-4 md:px-6 py-3 font-label-caps text-[11px] md:text-label-caps uppercase tracking-widest transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-2 ${
              activeTab === tab.key
                ? "text-brand-gold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {tab.label}
            {/* Active underline */}
            <span
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold transition-transform duration-300 origin-left ${
                activeTab === tab.key ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Tab panel */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-label={activeData.label}
      >
        <DiscoverEditorial items={activeData.data} />
      </div>
    </div>
  );
}
