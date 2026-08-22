"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { jetbrainsMono } from "@/lib/fonts";

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
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className={`flex gap-4 ${jetbrainsMono.className}`}
        style={{
          width: "200%",
        }}
      >
        {/* First pass */}
        {PILLS.map((pill, idx) => (
          <TickerPill key={`pill-1-${idx}`} pill={pill} />
        ))}

        {/* Duplicate pass for seamless loop */}
        {PILLS.map((pill, idx) => (
          <TickerPill key={`pill-2-${idx}`} pill={pill} />
        ))}
      </div>
    </div>
  );
}

// Two adjoining chips per stat — a dim label chip next to a bold value chip
// — instead of one combined box. Reads more like a live data readout,
// matches the reference HUD's ticker treatment.
function TickerPill({ pill }: { pill: Pill }) {
  return (
    <div className="flex-shrink-0 flex items-stretch gap-1 text-sm">
      <div
        className="px-2.5 py-1.5 rounded-none border"
        style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
      >
        {pill.label}
      </div>
      <div
        className="px-2.5 py-1.5 rounded-none border font-semibold"
        style={{
          backgroundColor: "var(--hud-bg-elevated)",
          borderColor: "var(--hud-border)",
          color: "var(--hud-text-primary)",
        }}
      >
        {pill.value}
      </div>
    </div>
  );
}
