"use client";

// Hover: letters "jitter" — each character independently bounces/floats
// with a randomized, per-character offset/rotation/scale loop while
// hovered, unsynchronized so it reads as organic zero-gravity motion
// rather than one uniform wave. Un-hover settles every letter back to
// its exact resting position — idle always looks untouched.
//
// Framer Motion, not GSAP/canvas: a hover-triggered, per-element spring
// animation is squarely Framer's job per this repo's animation split
// (CLAUDE.md), and far simpler than the particle-canvas version it
// replaces — no pixel sampling, no ResizeObserver, no canvas at all,
// just CSS transforms on real DOM text nodes. That also means full text
// selection/SEO for free instead of needing an aria-label workaround for
// a canvas overlay (still adding one below, since splitting into
// per-character spans has its own screen-reader spelling-out problem).
//
// Replaced the canvas/particle-scatter version (ParticleHeading) after
// live feedback — the scatter read as too vague/diffuse even after a
// boldness pass; the explicit ask was zero-gravity bouncy letters
// instead. Don't reintroduce particle sampling here without a fresh ask.

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

interface JitterHeadingProps {
  className?: string;
  style?: React.CSSProperties;
  children: string;
}

// Deterministic stand-in for Math.random() — a pure function of the
// character + its index, so the same text always produces the same
// per-letter jitter (stable across re-renders, no reshuffling mid-hover)
// without needing state/effects to work around react-hooks/purity
// (useMemo's callback runs during render; calling an actually-impure
// function like Math.random() there is exactly what that rule flags).
// Knuth's multiplicative hash constant; output normalized to [0, 1).
function seededRandom(char: string, index: number): number {
  let h = (index + 1) * 2654435761;
  for (let i = 0; i < char.length; i++) {
    h = Math.imul(h ^ char.charCodeAt(i), 2654435761);
    h ^= h >>> 15;
  }
  return (h >>> 0) / 4294967295;
}

export function JitterHeading({ className = "", style, children }: JitterHeadingProps) {
  const [hovered, setHovered] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  // One seed per character, generated once per mount/text-change — stable
  // across re-renders so the jitter doesn't reshuffle mid-hover.
  const chars = useMemo(
    () => Array.from(children).map((char, i) => ({ char, seed: seededRandom(char, i) })),
    [children]
  );

  // Native mouseleave alone isn't reliable here: once hovered, the letters
  // themselves translate/rotate under an otherwise-stationary cursor, and
  // the browser only re-checks "is the pointer still over this element"
  // on the next real pointer-move event — if the mouse doesn't move again
  // after the jitter carries the letters away from it, no mouseleave ever
  // fires and the animation is stuck on forever. Fix: while hovered, also
  // track real cursor position against this wrapper's static (untransformed)
  // bounding box on every window mousemove, and force hover off the moment
  // it's actually outside — independent of whatever the letters are doing.
  useEffect(() => {
    if (!hovered) return;
    const checkStillInside = (e: MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inside) setHovered(false);
    };
    window.addEventListener("mousemove", checkStillInside);
    return () => window.removeEventListener("mousemove", checkStillInside);
  }, [hovered]);

  return (
    <span
      ref={wrapRef}
      className={`relative block ${className}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Real text for screen readers/SEO — the split spans below are decorative. */}
      <span className="sr-only">{children}</span>

      <span aria-hidden="true">
        {chars.map((c, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={{ whiteSpace: c.char === " " ? "pre" : undefined }}
            animate={
              hovered
                ? {
                    y: [0, -10 - c.seed * 8, 4, -3, 0],
                    x: [0, (c.seed - 0.5) * 6, 0],
                    rotate: [0, (c.seed - 0.5) * 24, 0],
                    scale: [1, 1.15, 0.95, 1.05, 1],
                  }
                : { y: 0, x: 0, rotate: 0, scale: 1 }
            }
            transition={
              hovered
                ? {
                    duration: 1.1 + c.seed * 0.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: c.seed * 0.3,
                  }
                : { duration: 0.4, ease: "easeOut" }
            }
          >
            {c.char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
