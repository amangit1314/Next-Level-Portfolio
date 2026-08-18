import type { Metadata } from "next";

// Belt-and-suspenders alongside robots.ts disallowing /dashboard/ — this also
// stops it rendering in search results even if a crawler ignores robots.txt.
export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false, nocache: true },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
