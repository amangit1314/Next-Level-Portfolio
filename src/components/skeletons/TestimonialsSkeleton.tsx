// Reserves roughly Testimonials.tsx's real height (header + marquee row)
// so the section doesn't jump when Sanity data resolves — see
// [[project_hud_v2_redesign]] perceived-performance pass.
export const TestimonialsSkeleton = () => (
  <section id="testimonials" className="v2-section bg-theme-bg-primary relative">
    <div className="absolute inset-0 pointer-events-none">
      <div className="v2-grid-bg absolute inset-0" />
    </div>

    <div className="v2-container relative z-10">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 space-y-4">
        <div className="h-4 w-32 bg-theme-primary/15 mx-auto animate-pulse" />
        <div className="h-12 w-56 max-w-full bg-theme-border/25 mx-auto animate-pulse" />
        <div className="h-4 w-64 max-w-full bg-theme-border/20 mx-auto animate-pulse" />
      </div>

      {/* Marquee row */}
      <div className="flex gap-4 overflow-hidden py-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="shrink-0 w-72 h-40 bg-theme-bg-secondary/40 border border-theme-border/40 animate-pulse" />
        ))}
      </div>
    </div>
  </section>
);
