import { NextRequest, NextResponse } from "next/server";

// Reads from Vercel's Web Analytics REST API (already tracking pageviews via
// @vercel/analytics in layout.tsx). Requires DASHBOARD_VERCEL_TOKEN — a
// personal access token with read access, created at vercel.com/account/tokens
// — plus the project/team ids, which are stable and safe to hardcode here
// (they're not secrets, just identifiers).
const PROJECT_ID = "prj_U5AQqPuW0E7Rtq8zeqRWW5oZGxUk";
const TEAM_ID = "team_vlfgDUYGtAAj2zIvll7g3luP";
const VERCEL_API = "https://api.vercel.com";

async function vercelFetch(path: string, token: string) {
  const res = await fetch(`${VERCEL_API}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Vercel API ${res.status}: ${body}`);
  }
  return res.json();
}

export async function GET(req: NextRequest) {
  const token = process.env.DASHBOARD_VERCEL_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "DASHBOARD_VERCEL_TOKEN not configured on the server" },
      { status: 500 }
    );
  }

  const days = Number(req.nextUrl.searchParams.get("days") ?? 30);
  const until = new Date();
  const since = new Date(until.getTime() - days * 24 * 60 * 60 * 1000);
  const range = `projectId=${PROJECT_ID}&teamId=${TEAM_ID}&since=${since.toISOString()}&until=${until.toISOString()}`;

  // Vercel's Web Analytics API caps `by=day` aggregation at 62 days of range
  // ("invalid_group_by" 400 beyond that) — fall back to weekly buckets for
  // the 90d view instead of erroring the whole request.
  const bucket = days > 62 ? "week" : "day";

  try {
    const [totals, daily, topPages, topReferrers] = await Promise.all([
      vercelFetch(`/v1/query/web-analytics/visits/count?${range}`, token),
      vercelFetch(`/v1/query/web-analytics/visits/aggregate?${range}&by=${bucket}`, token),
      vercelFetch(
        `/v1/query/web-analytics/visits/aggregate?${range}&by=requestPath&limit=8`,
        token
      ),
      vercelFetch(
        `/v1/query/web-analytics/visits/aggregate?${range}&by=referrerHostname&limit=8`,
        token
      ),
    ]);

    return NextResponse.json({
      totals: totals.data,
      daily: daily.data,
      topPages: topPages.data,
      topReferrers: topReferrers.data,
      range: { since: since.toISOString(), until: until.toISOString(), days, bucket },
    });
  } catch (e) {
    console.error("Dashboard analytics fetch failed:", e);
    const message = e instanceof Error ? e.message : "Unknown error";
    // 402/403 from Vercel usually means Web Analytics API access needs a
    // higher plan tier — surface that distinctly rather than a generic 500.
    const isPlanIssue = message.includes("402") || message.includes("403");
    return NextResponse.json(
      {
        error: isPlanIssue
          ? "Vercel Web Analytics API access requires a plan that includes it (Pro or higher)."
          : "Failed to fetch analytics.",
        detail: message,
      },
      { status: 502 }
    );
  }
}
