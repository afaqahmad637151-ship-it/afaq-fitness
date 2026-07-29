import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000000",
        ash: "#0d0d0d",
        charcoal: "#151515",
        crimson: "#ff2d55",
        electric: "#00e5ff",
        silver: "#c0c0c0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grad-brand": "linear-gradient(90deg, #FF2D55, #00E5FF)",
      },
      keyframes: {
        "pulse-scroll": {
          from: { transform: "translate(0,-50%)" },
          to: { transform: "translate(-50%,-50%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        ripple: {
          to: { transform: "scale(3)", opacity: "0" },
        },
      },
      animation: {
        "pulse-scroll": "pulse-scroll 8s linear infinite",
        marquee: "marquee 28s linear infinite",
        ripple: "ripple .6s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
