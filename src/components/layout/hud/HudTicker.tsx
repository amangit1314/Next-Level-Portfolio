"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { secondaryFont, primaryFont } from "@/lib/fonts";

interface Pill {
  label: string;
  value: string;
}

const PILLS: Pill[] = [
  { label: "AVAILABILITY", value: "OPEN" },
  { label: "STACK", value: "NEXT.JS / THREE.JS / GSAP" },
  { label: "CORE_ID", value: "AI ENGINEER" },
  { label: "RENDERING", value: "WEBGL" },
];

export function HudTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  // useGSAP (the official React binding) replaces the hand-rolled
  // gsap.context()/useEffect pair — `scope` auto-cleans on unmount and
  // handles React 19 Strict Mode's dev-only double-invoke correctly.
  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: trackRef }
  );

  return (
    // hud-grid-bg + bottom border makes this read as one continuous data
    // strip (reference site's treatment) instead of loose floating pills.
    <div
      className="hud-grid-bg relative overflow-hidden w-full border-b"
      style={{ borderColor: "var(--hud-border)" }}
    >
      <div ref={trackRef} className="flex items-center" style={{ width: "200%" }}>
        {/* First pass */}
        {PILLS.map((pill, idx) => (
          <TickerPill key={`pill-1-${idx}`} pill={pill} />
        ))}

        {/* Duplicate pass for seamless loop */}
        {PILLS.map((pill, idx) => (
          <TickerPill key={`pill-2-${idx}`} pill={pill} />
        ))}
      </div>

      {/* Edge fades — same treatment as Testimonials' marquee, so pills
          scroll out softly instead of hard-clipping at the container edge.
          --hud-bg (not --theme-bg-primary) since this strip lives in the
          HUD chrome's own fixed-monochrome token set, not the v2 theme. */}
      <div
        className="pointer-events-none absolute left-0 top-0 w-8 sm:w-16 h-full z-10"
        style={{ background: "linear-gradient(to right, var(--hud-bg), transparent)" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 w-8 sm:w-16 h-full z-10"
        style={{ background: "linear-gradient(to left, var(--hud-bg), transparent)" }}
      />
    </div>
  );
}

// Label stays a small bordered JetBrains Mono chip; the value is bold Anton
// display text with no box around it — matches the reference's readout feel
// (a bordered tag next to a bold headline word, not two equal boxes). A "|"
// divider separates each stat group instead of relying on gap alone.
function TickerPill({ pill }: { pill: Pill }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-4 py-3">
      <div
        className={`px-2 py-1 rounded-none border text-xs ${secondaryFont.className}`}
        style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
      >
        {pill.label}
      </div>
      <div
        className={`text-lg sm:text-xl uppercase leading-none ${primaryFont.className}`}
        style={{ color: "var(--hud-text-primary)" }}
      >
        {pill.value}
      </div>
      <div className="w-px self-stretch" style={{ backgroundColor: "var(--hud-border)" }} />
    </div>
  );
}
