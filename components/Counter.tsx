"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  target: number;
  suffix?: string;
  className?: string;
};

export default function Counter({ target, suffix = "", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => setValue(Math.floor(obj.val)),
        });
      },
    });

    return () => trigger.kill();
  }, [target]);

  return (
    <div ref={ref} className={`font-display text-4xl md:text-5xl text-white ${className}`}>
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}
