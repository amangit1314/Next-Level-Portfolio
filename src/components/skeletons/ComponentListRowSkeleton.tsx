import { Skeleton } from "@/components/ui/skeleton";

export const ComponentListRowSkeleton = () => {
  return (
    <div className="flex items-start gap-6 py-8 border-b" style={{ borderColor: "var(--hud-border)" }}>
      <Skeleton className="h-8 w-8 flex-shrink-0" />
      <div className="flex-1 min-w-0 space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-4 w-full max-w-md" />
        <Skeleton className="h-4 w-2/3 max-w-sm" />
      </div>
      <Skeleton className="hidden sm:block h-[140px] w-[180px] flex-shrink-0" />
    </div>
  );
};
