const WORDS = ["STRENGTH", "DISCIPLINE", "TRANSFORMATION", "POWER", "ENDURANCE", "RESULTS"];

function MarqueeSet() {
  return (
    <span className="flex gap-10 pr-10">
      {WORDS.map((word, i) => (
        <span key={word} className="flex items-center gap-10">
          <span>{word}</span>
          <span className={i % 2 === 0 ? "text-[#ff2d55]" : "text-[#00e5ff]"}>◆</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="relative bg-[#0d0d0d] border-y border-white/10 py-4 overflow-hidden">
      <div className="marquee-track font-display text-2xl md:text-3xl tracking-widest text-white/25 gap-10">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
}
