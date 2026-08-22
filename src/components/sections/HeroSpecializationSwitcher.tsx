"use client";

// Replaces the old auto-typing "typewriter" tagline — a cliché portfolio
// pattern that's purely passive (watched, not touched). This is
// user-driven instead: clicking a specialization pill swaps the tagline,
// which is a real engagement signal (which pill someone clicks) rather
// than an animation nobody asked to see. Content stays CMS-driven
// (profile.typewriterTexts) — only the pill labels are a local constant,
// see HeroSection.tsx for why.
//
// Animated with GSAP (not Framer, despite this being click- not
// scroll-driven) — a deliberate one-off exception to the site's
// GSAP-owns-scroll/Framer-owns-interaction split, per explicit ask.

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { jetbrainsMono } from "@/lib/fonts";

export interface Specialization {
  label: string;
  tagline: string;
}

export function HeroSpecializationSwitcher({ specializations }: { specializations: Specialization[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);
  const didMount = useRef(false);

  // Step 1: fade the current tagline out, then swap the displayed index
  // once it's invisible — the crossfade's "out" half.
  useGSAP(
    () => {
      if (activeIndex === displayIndex || !textRef.current) return;
      gsap.to(textRef.current, {
        opacity: 0,
        y: -6,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => setDisplayIndex(activeIndex),
      });
    },
    { dependencies: [activeIndex] }
  );

  // Step 2: once the new tagline is actually in the DOM (displayIndex
  // caught up), fade it in — the crossfade's "in" half. Skipped on mount
  // so this doesn't double up with HeroSection's own fadeUp entrance.
  useGSAP(
    () => {
      if (!textRef.current) return;
      if (!didMount.current) {
        didMount.current = true;
        return;
      }
      gsap.fromTo(textRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.22, ease: "power2.out" });
    },
    { dependencies: [displayIndex] }
  );

  if (specializations.length === 0) return null;
  const current = specializations[displayIndex] ?? specializations[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-3">
        {specializations.map((spec, i) => (
          <button
            key={spec.label}
            onClick={() => setActiveIndex(i)}
            className={`px-3 py-1.5 text-xs rounded-none border uppercase tracking-wide transition-colors ${jetbrainsMono.className} ${
              i === activeIndex
                ? "border-theme-primary/70 bg-theme-primary/12 text-theme-primary"
                : "border-theme-border/50 text-theme-text-muted hover:border-theme-primary/30 hover:text-theme-text-secondary"
            }`}
          >
            {spec.label}
          </button>
        ))}
      </div>
      {/* System-readout line, not a marketing sentence — mono, prefixed,
          uppercase label — matches the ticker/menu register instead of
          reading as body copy competing with the bio paragraph below it. */}
      <p ref={textRef} className={`text-xs sm:text-sm tracking-wide ${jetbrainsMono.className}`}>
        <span className="text-theme-primary">{">"} FOCUS:</span>{" "}
        <span className="text-theme-text-secondary">{current.tagline}</span>
      </p>
    </div>
  );
}
