import { Skeleton } from "@/components/ui/skeleton";

export const ComponentCardSkeleton = () => {
  return (
    <div className="project-card group relative overflow-hidden rounded-3xl bg-linear-to-br from-theme-bg-secondary/90 via-theme-bg-secondary/50 to-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border">
      <div className="relative bg-theme-bg-secondary backdrop-blur-md rounded-2xl border border-theme-border overflow-hidden h-full">
        {/* Preview Image */}
        <div className="relative h-48 overflow-hidden bg-theme-bg-primary">
          <Skeleton className="w-full h-full rounded-none" />
          <div className="absolute top-3 right-3">
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Skeleton className="h-px w-3" />
            <Skeleton className="h-3 w-16 rounded-full" />
          </div>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="flex flex-wrap gap-2 pt-2">
            <Skeleton className="h-5 w-12 rounded-md" />
            <Skeleton className="h-5 w-16 rounded-md" />
            <Skeleton className="h-5 w-14 rounded-md" />
          </div>
          <div className="pt-4">
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};
