"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { queryClient } from "@/lib/queryClient";

// Profile data goes through react-query's useProfile() (hooks/useSanityQuery.ts)
// everywhere now — react-query already dedupes identical query keys across
// components, so a dedicated ProfileContext/Provider was redundant
// infrastructure duplicating what the query client already does. Removed
// 2026-08-19 (see docs/DECISIONS.md).
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <ThemeProvider>{children}</ThemeProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
}
