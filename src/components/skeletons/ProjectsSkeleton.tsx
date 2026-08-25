// Reserves roughly Projects.tsx's (home section) real height (header + 2
// featured cards + view-all link) so the section doesn't jump when Sanity
// data resolves — see [[project_hud_v2_redesign]] perceived-performance
// pass. Not to be confused with ProjectListRowSkeleton (the /projects page).
export const ProjectsSkeleton = () => (
  <section id="projects" className="v2-section bg-theme-bg-primary relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="v2-grid-bg absolute inset-0" />
    </div>

    <div className="v2-container relative z-10">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-20 space-y-4">
        <div className="h-4 w-40 bg-theme-primary/15 mx-auto animate-pulse" />
        <div className="h-12 w-72 max-w-full bg-theme-border/25 mx-auto animate-pulse" />
        <div className="h-4 w-96 max-w-full bg-theme-border/20 mx-auto animate-pulse" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:gap-10 md:gap-16">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-64 sm:h-72 lg:h-[380px] bg-theme-bg-secondary/40 border border-theme-border/40 animate-pulse" />
        ))}
      </div>

      {/* View all */}
      <div className="text-center mt-10 sm:mt-16">
        <div className="inline-block h-12 w-48 bg-theme-border/20 animate-pulse" />
      </div>
    </div>
  </section>
);
