"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00e5ff]/10 blur-[130px] rounded-full" />
      <div className="section-inner relative z-10">
        <Reveal className="text-center mb-16">
          <span className="eyebrow">Real Results</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3">MEMBER STORIES</h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="glass rounded-2xl p-10 text-center">
                    <div className="flex justify-center gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF2D55] text-[#FF2D55]" />
                      ))}
                    </div>
                    <p className="font-inter text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="mt-6 font-display text-xl">{t.name}</div>
                    <div className="eyebrow mt-1">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "24px" : "10px",
                  background: i === index ? "linear-gradient(90deg,#FF2D55,#00E5FF)" : "rgba(255,255,255,.2)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
