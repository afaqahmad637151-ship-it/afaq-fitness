"use client";

import { useRef, type MouseEvent } from "react";
import gsap from "gsap";

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const handleMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * 14,
      rotateX: -py * 14,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
  };

  return { ref, handleMouseMove, handleMouseLeave };
}
