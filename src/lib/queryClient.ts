import { QueryClient } from "@tanstack/react-query";
import { STALE_TIME, GC_TIME } from "@/config/query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME.DEFAULT,
      gcTime: GC_TIME.DEFAULT,
      retry: 1,
    },
  },
});
