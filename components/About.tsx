import { Target, Activity } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="section bg-black relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#ff2d55]/10 blur-[120px] rounded-full" />

      <div className="section-inner grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <Reveal className="relative">
          <div className="relative rounded-2xl overflow-hidden grad-border">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-[560px] object-cover"
              alt="Afaq Fitness gym interior"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl px-7 py-6 w-[220px]">
            <Counter target={12} className="text-grad" />
            <div className="eyebrow mt-1">Years Of Excellence</div>
          </div>
        </Reveal>

        <Reveal>
          <span className="eyebrow">Who We Are</span>
          <h2 className="font-display text-5xl md:text-6xl mt-4 leading-[0.95]">
            MORE THAN A GYM.
            <br />
            <span className="text-grad">A TRANSFORMATION LAB.</span>
          </h2>
          <p className="font-inter text-white/60 mt-6 leading-relaxed">
            Afaq Fitness was built on one belief — that world-class coaching should feel personal,
            not industrial. Every program blends elite training science with real human
            accountability, inside a space engineered for focus and intensity.
          </p>
          <p className="font-inter text-white/60 mt-4 leading-relaxed">
            From your first assessment to your hundredth session, our coaches track your data,
            adapt your plan, and push you past plateaus most gyms never help you break.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <Counter target={4500} />
              <div className="eyebrow mt-1">Members Trained</div>
            </div>
            <div>
              <Counter target={35} />
              <div className="eyebrow mt-1">Expert Coaches</div>
            </div>
            <div>
              <Counter target={98} suffix="%" />
              <div className="eyebrow mt-1">Satisfaction</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <div className="glass rounded-xl px-5 py-4 flex items-center gap-3">
              <Target className="w-5 h-5 text-[#ff2d55]" />
              <span className="text-sm font-inter">Goal-Driven Programming</span>
            </div>
            <div className="glass rounded-xl px-5 py-4 flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#00e5ff]" />
              <span className="text-sm font-inter">Data-Backed Coaching</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section-inner mt-28 relative z-10">
        <Reveal className="text-center mb-16">
          <span className="eyebrow">Our Journey</span>
          <h3 className="font-display text-4xl md:text-5xl mt-3">BUILT ONE REP AT A TIME</h3>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
          <Reveal>
            <div className="numtag">2014</div>
            <div className="w-full h-[2px] bg-gradient-to-r from-[#ff2d55] to-transparent my-4" />
            <h4 className="font-display text-2xl">FOUNDED</h4>
            <p className="font-inter text-white/50 text-sm mt-2">Afaq Fitness opens its first private studio.</p>
          </Reveal>
          <Reveal>
            <div className="numtag">2017</div>
            <div className="w-full h-[2px] bg-gradient-to-r from-[#ff2d55] to-[#00e5ff] my-4" />
            <h4 className="font-display text-2xl">EXPANSION</h4>
            <p className="font-inter text-white/50 text-sm mt-2">Full strength &amp; conditioning floor launched.</p>
          </Reveal>
          <Reveal>
            <div className="numtag">2021</div>
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00e5ff] to-[#ff2d55] my-4" />
            <h4 className="font-display text-2xl">2,000+ MEMBERS</h4>
            <p className="font-inter text-white/50 text-sm mt-2">Community crosses a major milestone.</p>
          </Reveal>
          <Reveal>
            <div className="numtag">2026</div>
            <div className="w-full h-[2px] bg-gradient-to-r from-[#ff2d55] to-transparent my-4" />
            <h4 className="font-display text-2xl">NEW ERA</h4>
            <p className="font-inter text-white/50 text-sm mt-2">Premium flagship studio &amp; app launch.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
