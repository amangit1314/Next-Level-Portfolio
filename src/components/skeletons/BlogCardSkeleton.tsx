import { Skeleton } from "@/components/ui/skeleton";

interface BlogCardSkeletonProps {
  featured?: boolean;
}

export const BlogCardSkeleton = ({ featured = false }: BlogCardSkeletonProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-theme-bg-secondary/90 via-theme-bg-secondary/50 to-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border h-full">
      {/* Cover Image */}
      <div className={`relative ${featured ? "h-64" : "h-48"} overflow-hidden bg-theme-bg-primary`}>
        <Skeleton className="w-full h-full rounded-none" />
        {featured && (
          <div className="absolute top-3 right-3">
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-px w-3" />
          <Skeleton className="h-3 w-20 rounded-full" />
        </div>
        <Skeleton className={`h-6 ${featured ? "w-3/4" : "w-5/6"}`} />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="flex items-center gap-4 pt-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-5 w-12 rounded-md" />
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-14 rounded-md" />
        </div>
      </div>
    </div>
  );
};
