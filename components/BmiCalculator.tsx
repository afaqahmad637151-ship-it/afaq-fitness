"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

const GAUGE_LENGTH = 251;

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("ENTER YOUR DETAILS");
  const [offsetRatio, setOffsetRatio] = useState(0);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi(null);
      setCategory("ENTER VALID HEIGHT & WEIGHT");
      return;
    }

    const value = w / (h * h);
    setBmi(value);

    let cat: string;
    let ratio: number;
    if (value < 18.5) {
      cat = "UNDERWEIGHT";
      ratio = 0.15;
    } else if (value < 25) {
      cat = "NORMAL WEIGHT";
      ratio = 0.45;
    } else if (value < 30) {
      cat = "OVERWEIGHT";
      ratio = 0.72;
    } else {
      cat = "OBESE";
      ratio = 0.95;
    }
    setCategory(cat);
    setOffsetRatio(ratio);
  };

  const dashOffset = GAUGE_LENGTH - GAUGE_LENGTH * offsetRatio;

  return (
    <section id="bmi" className="section bg-black relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff2d55]/10 blur-[130px] rounded-full" />
      <div className="section-inner relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="eyebrow">Know Your Numbers</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 leading-[0.95]">
            CHECK YOUR
            <br />
            <span className="text-grad">BODY MASS INDEX</span>
          </h2>
          <p className="font-inter text-white/50 mt-6 max-w-md">
            A quick starting point for your transformation plan. Enter your height and weight to
            get an instant, coach-reviewed estimate.
          </p>

          <div className="mt-8 space-y-5 max-w-sm">
            <div>
              <label className="eyebrow block mb-2">Height (cm)</label>
              <input
                type="number"
                placeholder="e.g. 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="field w-full rounded-xl px-4 py-3.5 font-inter"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">Weight (kg)</label>
              <input
                type="number"
                placeholder="e.g. 72"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="field w-full rounded-xl px-4 py-3.5 font-inter"
              />
            </div>
            <MagneticButton onClick={calculate} className="w-full py-4 rounded-full text-sm uppercase tracking-widest">
              Calculate BMI
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className="flex justify-center">
          <div className="glass rounded-3xl p-10 w-full max-w-sm text-center">
            <svg viewBox="0 0 200 120" className="w-full">
              <path
                d="M20 100 A80 80 0 0 1 180 100"
                stroke="rgba(255,255,255,.08)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
              />
              <path
                className="gauge-ring"
                d="M20 100 A80 80 0 0 1 180 100"
                stroke="url(#ggrad)"
                strokeWidth="14"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={GAUGE_LENGTH}
                strokeDashoffset={dashOffset}
              />
              <defs>
                <linearGradient id="ggrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00E5FF" />
                  <stop offset=".5" stopColor="#C0C0C0" />
                  <stop offset="1" stopColor="#FF2D55" />
                </linearGradient>
              </defs>
            </svg>
            <div className="font-display text-6xl -mt-6 text-grad">{bmi ? bmi.toFixed(1) : "--"}</div>
            <div className="eyebrow mt-2">{category}</div>
            <div className="grid grid-cols-4 gap-1 mt-8 text-[10px] font-inter text-white/40">
              <span>Under</span>
              <span>Normal</span>
              <span>Over</span>
              <span>Obese</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
