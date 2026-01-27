import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <div className="project-card group relative overflow-hidden rounded-3xl bg-linear-to-br from-theme-bg-secondary/90 via-theme-bg-secondary/50 to-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Skeleton className="w-full h-full rounded-none" />
        <div className="absolute top-4 left-4">
          <Skeleton className="h-6 w-12 rounded-full" />
        </div>
        <div className="absolute top-4 right-4 flex gap-2">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-px w-8" />
          <Skeleton className="h-4 w-20 rounded-full" />
        </div>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-lg" />
          <Skeleton className="h-6 w-20 rounded-lg" />
          <Skeleton className="h-6 w-14 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
