"use client";

import { useState, useEffect } from "react";
import type Lenis from "lenis";
import { secondaryFont } from "@/lib/fonts";
import { getLenisInstance } from "@/lib/lenisScroll";

// Track/thumb dimensions in px — kept as constants (not read from the DOM)
// since both are fixed via Tailwind (h-32 / h-8) and the thumb's travel
// range math needs them before render, not after a layout measurement.
const TRACK_H = 128; // h-32
const THUMB_H = 32; // h-8

export function HudScrollSlider() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prefer Lenis's own eased `progress` (0-1, already clamped) over raw
    // window.scrollY — otherwise the thumb tracks the real (instant)
    // scrollTop while Lenis renders an eased position underneath it, and
    // the two visibly disagree mid-scroll. Falls back to a native scroll
    // listener when Lenis isn't mounted (prefers-reduced-motion skips it
    // entirely — see LenisProvider.tsx) or hasn't mounted yet.
    const lenis = getLenisInstance();
    if (lenis) {
      const handleLenisScroll = (instance: Lenis) => setProgress(instance.progress);
      lenis.on("scroll", handleLenisScroll);
      return () => {
        lenis.off("scroll", handleLenisScroll);
      };
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-2">
      {/* Top label */}
      <div
        className={`${secondaryFont.className} text-[10px]`}
        style={{ color: "var(--hud-text-muted)" }}
      >
        00
      </div>

      {/* Track container with moving thumb */}
      <div
        className="relative w-px h-32"
        style={{ backgroundColor: "var(--hud-border)" }}
      >
        {/* Moving thumb — an elongated bar, not a 1x1 dot (that read as
            barely visible/broken, see reference site's own scroll rail).
            -translate-y-1/2 centers the bar on the progress point instead
            of anchoring its top edge there, so it doesn't run off the
            bottom of the track as progress approaches 100%. Accent-flavor
            colored (var(--theme-primary), not the fixed --hud-text-primary)
            so the selected theme actually reaches these standalone pages,
            not just Home/Playground. */}
        <div
          className="absolute w-1 h-8 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundColor: "var(--theme-primary)",
            // Pixel math, not a top:0-100% + translate-y(-50%) — that let
            // the (now 32px-tall) bar poke out past the track's top/bottom
            // edge at progress 0/1. Clamps the bar's travel to keep it
            // fully inside THUMB_H/TRACK_H bounds instead.
            //
            // No CSS transition on `top` — Lenis's `scroll` event already
            // fires the eased position every animation frame; layering a
            // second, independent 150ms transition on top of an already-
            // continuously-updating value fights it and reads as sluggish/
            // lagging rather than smooth (this was a regression from the
            // dot->bar change, not present in the original 1x1 dot).
            top: `${THUMB_H / 2 + progress * (TRACK_H - THUMB_H)}px`,
          }}
        />
      </div>

      {/* Bottom label */}
      <div
        className={`${secondaryFont.className} text-[10px]`}
        style={{ color: "var(--hud-text-muted)" }}
      >
        100
      </div>
    </div>
  );
}
