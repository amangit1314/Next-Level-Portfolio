"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiEye, FiUsers, FiLogOut, FiRefreshCw } from "react-icons/fi";
import { inter, jetbrainsMono, anton } from "@/lib/fonts";

interface DailyPoint {
  timestamp: string;
  pageviews?: number;
  visitors?: number;
}

interface BreakdownPoint {
  requestPath?: string;
  referrerHostname?: string;
  pageviews?: number;
  visitors?: number;
}

interface AnalyticsData {
  totals: { pageviews: number; visitors: number };
  daily: DailyPoint[];
  topPages: BreakdownPoint[];
  topReferrers: BreakdownPoint[];
  range: { since: string; until: string; days: number; bucket: "day" | "week" };
}

const RANGE_OPTIONS = [7, 30, 90];

function formatBucketLabel(timestamp: string | undefined, bucket: "day" | "week") {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const formatted = date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  return bucket === "week" ? `Week of ${formatted}` : formatted;
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<{ error: string; detail?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const fetchData = async (range: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/dashboard/analytics?days=${range}`);
      const body = await res.json();
      if (!res.ok) {
        setError(body);
        return;
      }
      setData(body);
    } catch {
      setError({ error: "Network error fetching analytics." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(days);
  }, [days]);

  const handleLogout = async () => {
    await fetch("/api/dashboard/auth", { method: "DELETE" });
    router.push("/dashboard/login");
  };

  const maxDaily = data ? Math.max(1, ...data.daily.map((d) => d.pageviews ?? 0)) : 1;

  return (
    <div className="min-h-screen bg-theme-bg-primary px-4 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-2xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
              Portfolio Analytics
            </h1>
            <p className={`text-xs text-theme-text-muted mt-1 ${inter.className}`}>
              Private — pulled live from Vercel Web Analytics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchData(days)}
              className="p-2 rounded-none border border-theme-border/50 text-theme-text-muted hover:text-theme-primary hover:border-theme-primary/40 transition-colors"
              title="Refresh"
            >
              <FiRefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={handleLogout}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-none border border-theme-border/50 text-theme-text-muted hover:text-red-400 hover:border-red-400/40 transition-colors ${inter.className}`}
            >
              <FiLogOut className="w-3.5 h-3.5" />
              Log out
            </button>
          </div>
        </div>

        {/* Range selector */}
        <div className="flex gap-2 mb-6">
          {RANGE_OPTIONS.map((r) => (
            <button
              key={r}
              onClick={() => setDays(r)}
              className={`text-xs px-3 py-1.5 rounded-none border transition-colors uppercase tracking-wide ${jetbrainsMono.className} ${
                days === r
                  ? "border-theme-primary/70 bg-theme-primary/12 text-theme-primary"
                  : "border-theme-border/50 text-theme-text-muted hover:border-theme-primary/30"
              }`}
            >
              {r}d
            </button>
          ))}
        </div>

        {error && (
          <div className="rounded-none border border-red-400/30 bg-red-400/5 p-5 mb-6">
            <p className={`text-sm text-red-400 font-semibold ${inter.className}`}>{error.error}</p>
            {error.detail && (
              <p className={`text-xs text-theme-text-muted mt-1 ${inter.className}`}>{error.detail}</p>
            )}
          </div>
        )}

        {loading && !data && (
          <p className={`text-sm text-theme-text-muted ${inter.className}`}>Loading…</p>
        )}

        {data && (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-none border border-theme-border/40 bg-theme-bg-secondary/30 p-5">
                <div className="flex items-center gap-2 text-theme-text-muted mb-2">
                  <FiEye className="w-3.5 h-3.5" />
                  <span className={`text-xs uppercase tracking-wide ${inter.className}`}>Pageviews</span>
                </div>
                <div className={`text-3xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
                  {data.totals?.pageviews?.toLocaleString() ?? 0}
                </div>
              </div>
              <div className="rounded-none border border-theme-border/40 bg-theme-bg-secondary/30 p-5">
                <div className="flex items-center gap-2 text-theme-text-muted mb-2">
                  <FiUsers className="w-3.5 h-3.5" />
                  <span className={`text-xs uppercase tracking-wide ${inter.className}`}>Visitors</span>
                </div>
                <div className={`text-3xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
                  {data.totals?.visitors?.toLocaleString() ?? 0}
                </div>
              </div>
            </div>

            {/* Daily chart */}
            <div className="rounded-none border border-theme-border/40 bg-theme-bg-secondary/30 p-5 mb-8">
              <h2 className={`text-xs uppercase tracking-wide text-theme-text-muted mb-4 ${inter.className}`}>
                Pageviews per {data.range.bucket}
              </h2>
              <div className="relative flex items-end gap-1 h-32">
                {hoveredIdx !== null && data.daily[hoveredIdx] && (
                  <div
                    className={`absolute -top-9 z-10 -translate-x-1/2 rounded-none border border-theme-border/50 bg-theme-bg-primary px-2.5 py-1.5 text-xs whitespace-nowrap shadow-lg ${inter.className}`}
                    style={{ left: `${((hoveredIdx + 0.5) / data.daily.length) * 100}%` }}
                  >
                    <span className="text-theme-text-primary font-semibold">
                      {data.daily[hoveredIdx].pageviews ?? 0} views
                    </span>
                    <span className="text-theme-text-muted ml-1.5">
                      {formatBucketLabel(data.daily[hoveredIdx].timestamp, data.range.bucket)}
                    </span>
                  </div>
                )}
                {data.daily.map((d, i) => (
                  <motion.div
                    key={d.timestamp ?? i}
                    initial={{ height: 0 }}
                    animate={{ height: `${((d.pageviews ?? 0) / maxDaily) * 100}%` }}
                    transition={{ duration: 0.4, delay: i * 0.01 }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className={`flex-1 min-w-[2px] rounded-t-sm transition-colors ${
                      hoveredIdx === i ? "bg-theme-primary" : "bg-theme-primary/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Top pages + referrers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-none border border-theme-border/40 bg-theme-bg-secondary/30 p-5">
                <h2 className={`text-xs uppercase tracking-wide text-theme-text-muted mb-4 ${inter.className}`}>
                  Top Pages
                </h2>
                <ul className="space-y-2">
                  {data.topPages.map((p, i) => (
                    <li key={i} className={`flex justify-between text-sm ${inter.className}`}>
                      <span className="text-theme-text-secondary truncate max-w-[70%]">
                        {p.requestPath || "/"}
                      </span>
                      <span className="text-theme-text-primary font-semibold">{p.pageviews ?? 0}</span>
                    </li>
                  ))}
                  {data.topPages.length === 0 && (
                    <li className={`text-xs text-theme-text-muted ${inter.className}`}>No data yet.</li>
                  )}
                </ul>
              </div>
              <div className="rounded-none border border-theme-border/40 bg-theme-bg-secondary/30 p-5">
                <h2 className={`text-xs uppercase tracking-wide text-theme-text-muted mb-4 ${inter.className}`}>
                  Top Referrers
                </h2>
                <ul className="space-y-2">
                  {data.topReferrers.map((r, i) => (
                    <li key={i} className={`flex justify-between text-sm ${inter.className}`}>
                      <span className="text-theme-text-secondary truncate max-w-[70%]">
                        {r.referrerHostname || "Direct"}
                      </span>
                      <span className="text-theme-text-primary font-semibold">{r.pageviews ?? 0}</span>
                    </li>
                  ))}
                  {data.topReferrers.length === 0 && (
                    <li className={`text-xs text-theme-text-muted ${inter.className}`}>No data yet.</li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
