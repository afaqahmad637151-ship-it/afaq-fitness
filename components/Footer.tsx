import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="font-display text-3xl tracking-widest">
            AFAQ <span className="text-grad">FITNESS</span>
          </div>
          <p className="font-display tracking-[0.2em] text-white/40 mt-3 text-sm">
            TRAIN HARD • STAY STRONG
          </p>
          <p className="font-inter text-white/40 text-sm mt-5 max-w-xs">
            Premium personal training and transformation coaching in the heart of Islamabad.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Quick Links</div>
          <ul className="space-y-3 font-inter text-sm text-white/50">
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-white transition-colors">
                Programs
              </a>
            </li>
            <li>
              <a href="#trainers" className="hover:text-white transition-colors">
                Trainers
              </a>
            </li>
            <li>
              <a href="#membership" className="hover:text-white transition-colors">
                Membership
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Services</div>
          <ul className="space-y-3 font-inter text-sm text-white/50">
            <li>Personal Training</li>
            <li>Strength &amp; Conditioning</li>
            <li>Nutrition Coaching</li>
            <li>CrossFit</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Contact</div>
          <ul className="space-y-3 font-inter text-sm text-white/50">
            <li>Blue Area, Islamabad</li>
            <li>+92 300 1234567</li>
            <li>hello@afaqfitness.com</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#ff2d55] hover:text-[#ff2d55] transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#00e5ff] hover:text-[#00e5ff] transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs font-inter text-white/30">
        <span>© 2026 Afaq Fitness. All Rights Reserved.</span>
        <span>Designed for peak performance.</span>
      </div>
    </footer>
  );
}
