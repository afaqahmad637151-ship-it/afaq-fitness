"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParticlesCanvas from "./ParticlesCanvas";
import MagneticLink from "./MagneticLink";

type Props = {
  revealed: boolean;
};

export default function Hero({ revealed }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealed || !rootRef.current) return;
    const items = rootRef.current.querySelectorAll<HTMLElement>(".hero-reveal");
    gsap.timeline().to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    });
  }, [revealed]);

  return (
    <section id="home" ref={rootRef} className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-lifting-a-barbell-in-a-gym-4832-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <ParticlesCanvas />

      <div className="absolute -top-40 left-1/3 w-[600px] h-[900px] bg-[#ff2d55]/10 blur-[120px] rotate-12 z-[1]" />
      <div className="absolute -top-20 right-0 w-[500px] h-[800px] bg-[#00e5ff]/10 blur-[120px] -rotate-12 z-[1]" />

      <div className="relative z-10 w-full section-inner px-0 pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-6 opacity-0 translate-y-10 hero-reveal">
          <span className="w-8 h-[1px] bg-[#ff2d55]" />
          <span className="eyebrow">Islamabad&apos;s Premium Training Studio</span>
        </div>

        <h1 className="font-display leading-[0.85] opacity-0 translate-y-10 hero-reveal">
          <span className="block text-[16vw] md:text-[9vw] lg:text-[8vw]">AFAQ</span>
          <span className="block text-[16vw] md:text-[9vw] lg:text-[8vw] text-grad">FITNESS</span>
        </h1>

        <p className="font-display tracking-[0.2em] text-lg md:text-2xl text-white/80 mt-4 opacity-0 translate-y-10 hero-reveal">
          TRAIN HARD <span className="text-[#ff2d55]">•</span> STAY STRONG{" "}
          <span className="text-[#00e5ff]">•</span> TRANSFORM YOURSELF
        </p>

        <p className="font-inter text-white/60 max-w-xl mt-6 text-base md:text-lg opacity-0 translate-y-10 hero-reveal">
          Push your limits. Build strength. Transform your body with premium fitness coaching
          engineered around you.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 opacity-0 translate-y-10 hero-reveal">
          <MagneticLink href="#membership" variant="primary" className="px-8 py-4 rounded-full text-sm uppercase tracking-widest">
            Join Now
          </MagneticLink>
          <MagneticLink href="#programs" variant="outline" className="px-8 py-4 rounded-full text-sm uppercase tracking-widest">
            Explore Programs
          </MagneticLink>
          <MagneticLink href="#contact" variant="ghost" className="px-2 py-4 text-sm uppercase tracking-widest">
            Contact Us
          </MagneticLink>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] rotate-90 origin-center translate-y-4">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent mt-6" />
      </div>
    </section>
  );
}
