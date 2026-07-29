"use client";

import { useEffect, useState } from "react";

type Props = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18;
        if (next >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setFading(true);
            window.setTimeout(() => {
              setHidden(true);
              onComplete();
            }, 700);
          }, 300);
          return 100;
        }
        return next;
      });
    }, 180);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  const displayProgress = Math.min(progress, 100);

  return (
    <div id="loader" style={{ opacity: fading ? 0 : 1, transition: "opacity .7s ease" }}>
      <div className="font-display text-5xl md:text-7xl tracking-widest">
        AFAQ<span className="text-grad">.</span>
      </div>
      <div className="mt-6 w-56 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <div
          className="h-full bg-gradient-to-r from-[#ff2d55] to-[#00e5ff]"
          style={{ width: `${displayProgress}%` }}
        />
      </div>
      <div className="mt-4 eyebrow">LOADING {Math.floor(displayProgress)}%</div>
    </div>
  );
}
