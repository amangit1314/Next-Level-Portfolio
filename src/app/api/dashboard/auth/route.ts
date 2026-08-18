import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const correctPassword = process.env.DASHBOARD_PASSWORD;
    const sessionSecret = process.env.DASHBOARD_SESSION_SECRET;

    if (!correctPassword || !sessionSecret) {
      console.error("DASHBOARD_PASSWORD or DASHBOARD_SESSION_SECRET not set");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    if (password !== correctPassword) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set("dashboard_session", sessionSecret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.delete("dashboard_session");
  return res;
}
