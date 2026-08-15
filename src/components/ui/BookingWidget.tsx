"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingWidget() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate mock booking check
    setTimeout(() => {
      setLoading(false);
      router.push("/rooms");
    }, 800);
  };

  return (
    <div className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-[var(--spacing-container-max)] mx-auto bg-surface/85 backdrop-blur-2xl border border-outline-variant/30 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 py-8 md:p-8 rounded-sm">
        <form
          onSubmit={handleCheckAvailability}
          className="flex flex-col md:flex-row items-end gap-4 md:gap-gutter"
        >
          <div className="w-full md:w-1/4">
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">
              Check-in
            </label>
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                calendar_today
              </span>
              <input
                type="date"
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 pl-10 py-3 text-body-md text-on-surface transition-colors cursor-pointer outline-none"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/4">
            <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">
              Check-out
            </label>
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                calendar_today
              </span>
              <input
                type="date"
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 pl-10 py-3 text-body-md text-on-surface transition-colors cursor-pointer outline-none"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/4 flex gap-4">
            <div className="w-1/2">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">
                Guests
              </label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 text-body-md text-on-surface transition-colors cursor-pointer appearance-none outline-none">
                <option>1 Adult</option>
                <option selected>2 Adults</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
              </select>
            </div>
            <div className="w-1/2">
              <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">
                Rooms
              </label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-secondary focus:ring-0 py-3 text-body-md text-on-surface transition-colors cursor-pointer appearance-none outline-none">
                <option selected>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </div>
          </div>
          
          <div className="w-full md:w-1/4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-on-secondary px-6 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-on-secondary-container transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Checking..." : "Check Availability"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
