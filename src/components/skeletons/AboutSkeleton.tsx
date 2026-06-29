export const AboutSkeleton = () => (
  <section className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="text-center mb-20 space-y-4">
        <div className="h-4 w-40 bg-theme-primary/20 rounded-full animate-pulse mx-auto" />
        <div className="h-14 w-48 bg-theme-border/30 rounded-xl animate-pulse mx-auto" />
        <div className="h-1 w-24 bg-theme-border/20 rounded-full animate-pulse mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left col — image (matches aspect-[3/4] w-full max-w-md) */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl bg-theme-border/20 animate-pulse" />
          {/* Tech stack card below image */}
          <div className="mt-8 h-24 w-full rounded-2xl bg-theme-border/20 animate-pulse" />
        </div>

        {/* Right col — text content */}
        <div className="space-y-8">
          {/* Experience cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-28 bg-theme-border/20 rounded-2xl animate-pulse" />
            ))}
          </div>
          {/* Heading */}
          <div className="h-10 w-3/4 bg-theme-border/30 rounded-xl animate-pulse" />
          {/* Bio paragraphs */}
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`h-4 bg-theme-border/20 rounded animate-pulse ${i === 3 ? "w-2/3" : "w-full"}`} />
            ))}
          </div>
          {/* Key strengths */}
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-theme-primary/20 animate-pulse flex-shrink-0" />
                <div className={`h-4 bg-theme-border/20 rounded animate-pulse ${i % 2 === 0 ? "w-2/3" : "w-1/2"}`} />
              </div>
            ))}
          </div>
          {/* CTA button */}
          <div className="h-14 w-64 bg-theme-border/20 rounded-2xl animate-pulse" />
        </div>
      </div>
    </div>
  </section>
);
