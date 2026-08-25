"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface HudMediaFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * The list-row thumbnail treatment shared by ProjectListRow/BlogListRow/
 * ComponentListRow — a plain bordered <Image> skinned as a HUD readout:
 * an animated scanline sweep + static corner brackets. Non-scroll,
 * continuous ambient animation → Framer (see CLAUDE.md "Animation split"),
 * not GSAP/useScrollReveal.
 */
export function HudMediaFrame({ src, alt, width = 180, height = 140, className }: HudMediaFrameProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden border ${className ?? ""}`}
      style={{ borderColor: "var(--hud-border)", width, height }}
    >
      <Image src={src} alt={alt} width={width} height={height} className="object-cover w-full h-full" />

      {!reducedMotion && (
        <motion.div
          aria-hidden
          className="absolute inset-x-0 h-px"
          style={{ background: "var(--theme-primary)", opacity: 0.5 }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Corner brackets — static, matches --hud-border like the rest of the chrome */}
      {(["top-0 left-0 border-t border-l", "top-0 right-0 border-t border-r", "bottom-0 left-0 border-b border-l", "bottom-0 right-0 border-b border-r"] as const).map(
        (pos) => (
          <span
            key={pos}
            aria-hidden
            className={`absolute w-2.5 h-2.5 ${pos}`}
            style={{ borderColor: "var(--theme-primary)" }}
          />
        )
      )}
    </div>
  );
}
