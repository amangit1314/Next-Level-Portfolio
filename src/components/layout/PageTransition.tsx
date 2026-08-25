"use client";

// Replaces app/template.tsx. Next.js templates remount on every navigation
// (that's the whole point — the previous instance is already gone by the
// time the new one mounts), so they can only ever animate an entrance;
// Next's own docs call this out explicitly — templates don't support exit
// animations. That's exactly why route changes still read as a hard cut
// even with template.tsx's fade+blur+slide in place: the outgoing page
// vanished instantly, and the incoming one just fades in after.
//
// This component instead lives in layout.tsx, one level up — it does NOT
// remount on navigation (the root layout doesn't either), so AnimatePresence
// here can see both the outgoing `children` (previous pathname's key) and
// the incoming one, and actually run an exit before the enter. `mode="wait"`
// holds the enter until the exit finishes, so nothing overlaps.
//
// Only wraps {children} (the page content) — HudChrome/AICopilot/
// MobileBottomNav stay outside, mounted once, untouched by route changes.

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }}
        // Exit gets its own, shorter transition — mode="wait" runs exit then
        // enter sequentially, so a symmetric 0.4s/0.4s would make every nav
        // feel like an 0.8s wait. Quick exit + slightly longer enter reads
        // as fast while still avoiding the old hard cut.
        exit={{ opacity: 0, y: -12, filter: "blur(6px)", transition: { duration: 0.25, ease: "easeIn" } }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
