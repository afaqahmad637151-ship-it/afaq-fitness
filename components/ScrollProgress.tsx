"use client";

import { useEffect, useRef } from "react";

const PULSE_LENGTH = 400;

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? doc.scrollTop / max : 0;

      if (barRef.current) {
        barRef.current.style.width = `${pct * 100}%`;
      }
      if (pulseRef.current) {
        pulseRef.current.style.strokeDashoffset = `${PULSE_LENGTH - PULSE_LENGTH * pct}`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={barRef}
        id="scroll-progress"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#ff2d55] to-[#00e5ff] z-50 w-0"
      />
      <div id="side-pulse">
        <svg viewBox="0 0 26 220" width="26" height="220" fill="none">
          <path
            d="M13 0 V60 L4 75 L13 90 L20 100 L13 115 V220"
            stroke="rgba(255,255,255,.15)"
            strokeWidth="2"
          />
          <path
            ref={pulseRef}
            d="M13 0 V60 L4 75 L13 90 L20 100 L13 115 V220"
            stroke="url(#pgrad)"
            strokeWidth="2"
            strokeDasharray={PULSE_LENGTH}
            strokeDashoffset={PULSE_LENGTH}
          />
          <defs>
            <linearGradient id="pgrad" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF2D55" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
