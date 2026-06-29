export const HeroSkeleton = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-theme-bg-primary via-transparent to-theme-primary-dark/10">
    <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto px-4 py-20 w-full">
      {/* Text side */}
      <div className="space-y-8 text-center lg:text-left">
        {/* Badge */}
        <div className="h-8 w-48 bg-theme-primary/20 rounded-full animate-pulse mx-auto lg:mx-0" />
        <div className="space-y-3">
          <div className="h-16 w-3/4 bg-theme-border/30 rounded-xl animate-pulse mx-auto lg:mx-0" />
          <div className="h-16 w-2/3 bg-theme-border/30 rounded-xl animate-pulse mx-auto lg:mx-0" />
          <div className="h-8 w-1/2 bg-theme-primary/20 rounded-lg animate-pulse mx-auto lg:mx-0" />
        </div>
        {/* Bio */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-theme-border/20 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-theme-border/20 rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-theme-border/20 rounded animate-pulse" />
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-1 text-center lg:text-left">
              <div className="h-8 w-16 bg-theme-primary/20 rounded animate-pulse mx-auto lg:mx-0" />
              <div className="h-3 w-20 bg-theme-border/20 rounded animate-pulse mx-auto lg:mx-0" />
            </div>
          ))}
        </div>
        {/* CTAs */}
        <div className="flex gap-4 justify-center lg:justify-start">
          <div className="h-12 w-36 bg-theme-primary/30 rounded-xl animate-pulse" />
          <div className="h-12 w-32 bg-theme-border/20 rounded-xl animate-pulse" />
        </div>
        {/* Social links */}
        <div className="flex gap-3 justify-center lg:justify-start pt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-11 h-11 bg-theme-border/20 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
      {/* Image side — matches w-80 h-80 lg:w-96 lg:h-96 rounded-3xl */}
      <div className="flex justify-center">
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-theme-border/20 animate-pulse" />
      </div>
    </div>
  </section>
);
