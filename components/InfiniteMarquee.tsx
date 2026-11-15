"use client";

const MARQUEE_ITEMS = [
  "SPATIAL DESIGN",
  "FURNITURE DESIGN",
  "HUMAN-CENTRED ERGONOMICS",
  "PASSIVE CLIMATE STRATEGIES",
  "MATERIAL EXPLORATION",
  "3D VISUALISATION & CAD",
  "SCALE MODEL MAKING",
  "INTERIOR ARCHITECTURE"
];

export default function InfiniteMarquee() {
  return (
    <section className="ticker" aria-label="Design capabilities and focus areas">
      <div className="ticker-track">
        <div className="ticker-segment">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`${item}-${idx}`} className="ticker-item">
              <span>{item}</span>
              <i className="ticker-dot" aria-hidden="true">✳</i>
            </span>
          ))}
        </div>
        <div className="ticker-segment" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`dup-${item}-${idx}`} className="ticker-item">
              <span>{item}</span>
              <i className="ticker-dot" aria-hidden="true">✳</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
