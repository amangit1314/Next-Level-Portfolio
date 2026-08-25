import { Inter, JetBrains_Mono, Maven_Pro, Momo_Signature, Orbitron, Righteous, Silkscreen, Space_Grotesk, Unbounded } from "next/font/google";

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const mavenPro = Maven_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const righteous = Righteous({
  weight: ["400"],
  subsets: ["latin"],
});

export const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// decorative signature font — used in Header logo only
export const signature = Momo_Signature({
  weight: ["400"],
  subsets: ["latin"],
});

// Bold geometric grotesk — an earlier primaryFont candidate (2026-08-25),
// replaced same-day by Orbitron below for a more distinctly futuristic/
// sci-fi HUD read. Left defined (unaliased) rather than deleted — a
// reasonable fallback if Orbitron's wide tracking proves awkward on
// longer headings like "Professional Experience".
export const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

// Futuristic/sci-fi geometric display face — giant page titles in the HUD
// chrome + every section heading site-wide. The archetypal "HUD console"
// display font (wide tracking, uppercase-friendly), matching this
// project's sharp-corner data-console identity far more distinctly than
// Space Grotesk's neutral modern-grotesk read did.
export const orbitron = Orbitron({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

// Pixel/bitmap retro-digital display face — tried as primaryFont
// (2026-08-25) at explicit request despite a flagged risk: pixel fonts
// read as "retro arcade" rather than "sleek sci-fi HUD," and tend to
// look blocky/low-res rather than crisp at hero-heading sizes (96px+).
// Only ships weight 400/700, no lowercase-specific design (effectively
// caps-only in practice). Left defined, unaliased, if reverted.
export const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Semantic aliases — every consumer imports these two, never the concrete
// fonts above directly. The HUD chrome + every section heading site-wide
// has exactly two font roles: a bold display face for big headings
// (primaryFont) and a monospace face for technical/terminal-style text —
// labels, stats, status readouts (secondaryFont). Swapping either font
// is a one-line change here instead of a repo-wide rename — the anton
// -> Space Grotesk -> Orbitron -> Silkscreen churn (2026-08-25, all same
// day) is exactly the pain this alias layer exists to avoid repeating.
// Don't reintroduce a direct concrete-font import at a new call site —
// import the alias.
export const primaryFont = silkscreen;
export const secondaryFont = jetbrainsMono;
