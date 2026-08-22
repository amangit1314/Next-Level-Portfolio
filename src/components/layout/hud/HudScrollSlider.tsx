"use client";

import { useState, useEffect } from "react";
import { jetbrainsMono } from "@/lib/fonts";

export function HudScrollSlider() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
        className={`${jetbrainsMono.className} text-[10px]`}
        style={{ color: "var(--hud-text-muted)" }}
      >
        00
      </div>

      {/* Track container with moving thumb */}
      <div
        className="relative w-px h-32"
        style={{ backgroundColor: "var(--hud-border)" }}
      >
        {/* Moving thumb indicator — accent-flavor colored (var(--theme-primary),
            not the fixed --hud-text-primary) so the selected theme actually
            reaches these standalone pages, not just Home/Playground. */}
        <div
          className="absolute w-1 h-1 rounded-full left-1/2 -translate-x-1/2"
          style={{
            backgroundColor: "var(--theme-primary)",
            top: `${progress * 100}%`,
          }}
        />
      </div>

      {/* Bottom label */}
      <div
        className={`${jetbrainsMono.className} text-[10px]`}
        style={{ color: "var(--hud-text-muted)" }}
      >
        100
      </div>
    </div>
  );
}
