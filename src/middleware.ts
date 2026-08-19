import { NextRequest, NextResponse } from "next/server";
import { Route } from "@/types/enums";

// Gates every /dashboard route (except the login page + its auth API) behind
// a session cookie. The cookie value is an opaque secret set by
// /api/dashboard/auth on successful login — never derived from the password
// itself, so it can't be reverse-engineered even if the cookie leaks.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublic =
    pathname === `${Route.Dashboard}/login` || pathname === "/api/dashboard/auth";
  if (!pathname.startsWith(Route.Dashboard) && !pathname.startsWith("/api/dashboard")) {
    return NextResponse.next();
  }
  if (isPublic) {
    return NextResponse.next();
  }

  const session = req.cookies.get("dashboard_session")?.value;
  const expected = process.env.DASHBOARD_SESSION_SECRET;

  if (!expected || session !== expected) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/dashboard/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/dashboard/:path*"],
};
