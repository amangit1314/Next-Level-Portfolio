import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min — Sanity content doesn't change that often
      gcTime: 1000 * 60 * 10,   // keep in cache 10 min after unmount
      retry: 1,
    },
  },
});
