"use client";

import { services, type Service } from "@/data/content";
import Reveal from "./Reveal";
import { useTilt } from "@/hooks/useTilt";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <Reveal>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative glass rounded-2xl p-7 tilt cursor-pointer overflow-hidden"
      >
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,45,85,.35), transparent 50%, rgba(0,229,255,.35))",
            filter: "blur(14px)",
          }}
        />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#ff2d55]/15 transition-colors">
            <Icon className="w-5 h-5 text-[#ff2d55] group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-display text-2xl tracking-wide">{service.title}</h3>
          <p className="font-inter text-white/50 text-sm mt-3 leading-relaxed">{service.desc}</p>
          <div className="numtag mt-6">0{index + 1}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="section bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#ff2d55]/5 blur-[150px] rounded-full" />
      <div className="section-inner relative z-10">
        <Reveal className="text-center mb-16">
          <span className="eyebrow">What We Offer</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3">TRAINING PROGRAMS</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
