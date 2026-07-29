import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import MagneticLink from "./MagneticLink";

export default function Membership() {
  return (
    <section id="membership" className="section bg-black relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00e5ff]/10 blur-[130px] rounded-full" />
      <div className="section-inner relative z-10">
        <Reveal className="text-center mb-16">
          <span className="eyebrow">Membership</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3">CHOOSE YOUR PLAN</h2>
          <p className="font-inter text-white/50 max-w-xl mx-auto mt-4">
            Flexible plans built for every stage of your transformation. Cancel anytime, upgrade
            whenever you&apos;re ready to push harder.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <Reveal className="glass rounded-2xl p-8">
            <div className="eyebrow">Basic</div>
            <div className="flex items-end gap-2 mt-4">
              <span className="font-display text-6xl">$39</span>
              <span className="text-white/40 mb-2">/mo</span>
            </div>
            <p className="font-inter text-white/50 text-sm mt-3">
              Perfect for getting started with structured training.
            </p>
            <ul className="mt-8 space-y-4 font-inter text-sm text-white/70">
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Full gym floor access
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Group class access
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Locker &amp; shower access
              </li>
              <li className="flex gap-3 items-center text-white/30">
                <X className="w-4 h-4" /> Personal coaching
              </li>
              <li className="flex gap-3 items-center text-white/30">
                <X className="w-4 h-4" /> Nutrition plan
              </li>
            </ul>
            <MagneticLink
              href="#contact"
              variant="outline"
              className="block text-center mt-9 py-3.5 rounded-full text-sm uppercase tracking-widest"
            >
              Join Now
            </MagneticLink>
          </Reveal>

          <Reveal className="relative rounded-2xl p-8 grad-border bg-gradient-to-b from-[#1a0d10] to-[#0d1418] lg:-translate-y-6 lg:scale-[1.04]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-primary text-[11px] tracking-widest uppercase px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <div className="eyebrow">Premium</div>
            <div className="flex items-end gap-2 mt-4">
              <span className="font-display text-7xl text-grad">$89</span>
              <span className="text-white/40 mb-3">/mo</span>
            </div>
            <p className="font-inter text-white/60 text-sm mt-3">
              The complete Afaq transformation experience.
            </p>
            <ul className="mt-8 space-y-4 font-inter text-sm text-white/80">
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#00e5ff]" /> Unlimited gym access 24/7
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#00e5ff]" /> 4x personal coaching sessions
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#00e5ff]" /> Custom nutrition coaching
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#00e5ff]" /> Recovery &amp; sauna suite
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#00e5ff]" /> Priority booking
              </li>
            </ul>
            <MagneticLink
              href="#contact"
              variant="primary"
              className="block text-center mt-9 py-3.5 rounded-full text-sm uppercase tracking-widest"
            >
              Join Now
            </MagneticLink>
          </Reveal>

          <Reveal className="glass rounded-2xl p-8">
            <div className="eyebrow">Standard</div>
            <div className="flex items-end gap-2 mt-4">
              <span className="font-display text-6xl">$59</span>
              <span className="text-white/40 mb-2">/mo</span>
            </div>
            <p className="font-inter text-white/50 text-sm mt-3">
              For members ready to train with real structure.
            </p>
            <ul className="mt-8 space-y-4 font-inter text-sm text-white/70">
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Unlimited gym access
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> 1x personal coaching / mo
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Group class access
              </li>
              <li className="flex gap-3 items-center">
                <Check className="w-4 h-4 text-[#ff2d55]" /> Locker &amp; shower access
              </li>
              <li className="flex gap-3 items-center text-white/30">
                <X className="w-4 h-4" /> Nutrition plan
              </li>
            </ul>
            <MagneticLink
              href="#contact"
              variant="outline"
              className="block text-center mt-9 py-3.5 rounded-full text-sm uppercase tracking-widest"
            >
              Join Now
            </MagneticLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
