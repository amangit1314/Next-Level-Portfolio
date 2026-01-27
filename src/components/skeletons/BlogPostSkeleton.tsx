import { Skeleton } from "@/components/ui/skeleton";

export const BlogPostSkeleton = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Skeleton className="h-6 w-32 mb-8" />

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          <Skeleton className="h-12 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full mb-8" />
          <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-theme-border">
            <div className="flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <Skeleton className="h-6 w-16 rounded-lg" />
            <Skeleton className="h-6 w-20 rounded-lg" />
            <Skeleton className="h-6 w-14 rounded-lg" />
          </div>
        </div>

        {/* Cover Image */}
        <Skeleton className="w-full h-96 rounded-2xl mb-12" />

        {/* Content */}
        <div className="space-y-4 mb-12">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-64 w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-linear-to-br from-theme-primary/10 to-theme-secondary/10 rounded-2xl border border-theme-primary/20">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-full mb-6" />
          <Skeleton className="h-12 w-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
