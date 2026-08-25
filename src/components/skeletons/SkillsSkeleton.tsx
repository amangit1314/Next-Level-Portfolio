// Reserves roughly Skills.tsx's real height (header + tabs + one category
// grid + stats row) so the section doesn't jump when Sanity data resolves
// — see [[project_hud_v2_redesign]] perceived-performance pass.
export const SkillsSkeleton = () => (
  <section id="skills" className="v2-section bg-theme-bg-primary relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="v2-grid-bg absolute inset-0 opacity-40" />
    </div>

    <div className="v2-container relative z-10">
      {/* Header */}
      <div className="mb-10 sm:mb-12 space-y-4">
        <div className="h-4 w-40 bg-theme-primary/15 mx-auto animate-pulse" />
        <div className="h-12 w-40 bg-theme-border/25 mx-auto animate-pulse" />
        <div className="h-4 w-72 max-w-full bg-theme-border/20 mx-auto animate-pulse" />
      </div>

      {/* Tabs */}
      <div className="mb-10 flex justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-20 bg-theme-border/20 animate-pulse" />
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-20 bg-theme-border/15 border border-theme-border/30 animate-pulse" />
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-theme-border/30 border border-theme-border/30">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-20 sm:h-24 bg-theme-bg-secondary/30 animate-pulse" />
        ))}
      </div>
    </div>
  </section>
);
