import { Skeleton } from "@/components/ui/skeleton";

// Matches ProjectListRow's actual shape (index + tags + title + description +
// thumbnail, in a row) — the old ProjectCardSkeleton was a rounded-3xl card,
// which would flash a completely different layout right before the real
// indexed list renders. Fixed monochrome, same as ProjectListRow itself.
export const ProjectListRowSkeleton = () => {
    return (
        <div className="flex items-start gap-6 py-8 border-b" style={{ borderColor: "var(--hud-border)" }}>
            <Skeleton className="h-8 w-8 flex-shrink-0" />
            <div className="flex-1 min-w-0 space-y-3">
                <div className="flex gap-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-7 w-2/3" />
                <Skeleton className="h-4 w-full max-w-md" />
            </div>
            <Skeleton className="hidden sm:block h-20 w-32 flex-shrink-0" />
        </div>
    );
};
