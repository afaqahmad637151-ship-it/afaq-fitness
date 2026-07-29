"use client";

import { useRef } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import gsap from "gsap";
import { trainers, type Trainer } from "@/data/content";
import Reveal from "./Reveal";

function TrainerCard({ trainer }: { trainer: Trainer }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (ref.current) gsap.to(ref.current, { y: -10, duration: 0.4, ease: "power3.out" });
  };
  const handleLeave = () => {
    if (ref.current) gsap.to(ref.current, { y: 0, duration: 0.4, ease: "power3.out" });
  };

  return (
    <Reveal>
      <div
        ref={ref}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
      >
        <div className="relative h-96 overflow-hidden rounded-2xl">
          <img
            src={trainer.img}
            alt={trainer.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-[#ff2d55]/50 transition-all duration-500 rounded-2xl" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 group-hover:-translate-y-2">
          <h4 className="font-display text-2xl">{trainer.name}</h4>
          <p className="font-inter text-white/60 text-xs mt-1">
            {trainer.role} · {trainer.exp}
          </p>
          <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center">
              <Instagram className="w-3.5 h-3.5" />
            </span>
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center">
              <Facebook className="w-3.5 h-3.5" />
            </span>
            <span className="w-8 h-8 rounded-full glass flex items-center justify-center">
              <Linkedin className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Trainers() {
  return (
    <section id="trainers" className="section bg-[#0a0a0a] relative">
      <div className="section-inner">
        <Reveal className="text-center mb-16">
          <span className="eyebrow">Meet The Team</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3">EXPERT TRAINERS</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.name} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}
