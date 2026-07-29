"use client";

import { useState } from "react";
import { ZoomIn, X } from "lucide-react";
import { galleryImages } from "@/data/content";
import Reveal from "./Reveal";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="section bg-[#0a0a0a]">
        <div className="section-inner">
          <Reveal className="text-center mb-16">
            <span className="eyebrow">Inside The Studio</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">GALLERY</h2>
          </Reveal>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryImages.map((src) => (
              <Reveal key={src} className="relative break-inside-avoid rounded-xl overflow-hidden group">
                <button
                  type="button"
                  onClick={() => setActive(src)}
                  className="relative block w-full cursor-pointer"
                  aria-label="Open image"
                >
                  <img
                    src={src}
                    alt="Afaq Fitness gallery"
                    className="w-full object-cover transition-all duration-700 grayscale-[.3] group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            <X className="w-9 h-9" />
          </button>
          <img
            src={active}
            alt="Enlarged gallery view"
            className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
