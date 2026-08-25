// Reserves roughly Experience.tsx's real height (header + 3 timeline
// cards + CTA) so the section doesn't jump when Sanity data resolves —
// see [[project_hud_v2_redesign]] perceived-performance pass.
export const ExperienceSkeleton = () => (
  <section id="experience" className="v2-section bg-theme-bg-secondary/30 relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="v2-grid-bg absolute inset-0" />
    </div>

    <div className="v2-container relative z-10">
      {/* Header */}
      <div className="mb-16 space-y-4 text-center">
        <div className="h-4 w-24 bg-theme-primary/15 mx-auto animate-pulse" />
        <div className="h-12 w-80 max-w-full bg-theme-border/25 mx-auto animate-pulse" />
      </div>

      {/* Timeline cards */}
      <div className="relative max-w-3xl mx-auto space-y-7">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="pl-10 sm:pl-14">
            <div className="h-40 bg-theme-bg-secondary/80 border border-theme-border/60 animate-pulse" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 max-w-3xl mx-auto h-32 bg-theme-bg-secondary/80 border border-theme-border/60 animate-pulse" />
    </div>
  </section>
);
