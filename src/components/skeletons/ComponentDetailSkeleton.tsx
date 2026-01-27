import { Skeleton } from "@/components/ui/skeleton";

export const ComponentDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary pt-20 overflow-x-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Skeleton className="h-6 w-32 mb-8" />

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full mb-8" />
          <div className="flex flex-wrap gap-2 mb-8">
            <Skeleton className="h-6 w-16 rounded-lg" />
            <Skeleton className="h-6 w-20 rounded-lg" />
            <Skeleton className="h-6 w-14 rounded-lg" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-12 w-32 rounded-xl" />
            <Skeleton className="h-12 w-28 rounded-xl" />
          </div>
        </div>

        {/* Preview Image */}
        <Skeleton className="w-full h-96 rounded-2xl mb-12" />

        {/* Dependencies */}
        <div className="mb-12 p-6 bg-theme-bg-tertiary rounded-2xl border border-theme-border">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="flex flex-wrap gap-2">
            <Skeleton className="h-8 w-24 rounded-lg" />
            <Skeleton className="h-8 w-28 rounded-lg" />
            <Skeleton className="h-8 w-20 rounded-lg" />
          </div>
        </div>

        {/* Code Preview */}
        <div className="mb-12">
          <div className="flex items-center justify-between bg-theme-bg-tertiary px-4 py-3 rounded-t-xl border-b border-theme-border">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-10 w-24 rounded-lg" />
          </div>
          <Skeleton className="w-full h-64 rounded-b-xl" />
        </div>

        {/* Content */}
        <div className="space-y-4 mb-12">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </div>
    </div>
  );
};
