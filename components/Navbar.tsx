"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/content";
import MagneticLink from "./MagneticLink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navItems[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = navItems[0].href;
      navItems.forEach((item) => {
        const el = document.getElementById(item.href.slice(1));
        if (el && window.scrollY >= el.offsetTop - window.innerHeight * 0.5) {
          current = item.href;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "glass" : ""
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-5">
          <a href="#home" className="font-display text-2xl md:text-3xl tracking-widest z-50">
            AFAQ <span className="text-grad">FITNESS</span>
          </a>

          <ul className="hidden lg:flex items-center gap-9 font-inter text-[13px] tracking-wide uppercase text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={`nav-link ${active === item.href ? "active" : ""}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <MagneticLink
            href="#membership"
            variant="primary"
            className="hidden lg:inline-flex px-6 py-2.5 text-[12px] uppercase tracking-widest rounded-full"
          >
            Join Now
          </MagneticLink>

          <button
            className="lg:hidden z-50 text-white"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/[0.98] backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden ${
          mobileOpen ? "open" : ""
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-display text-4xl"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
