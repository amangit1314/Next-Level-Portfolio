import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (!payload?.title || !payload?.details) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_BUG_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("N8N_BUG_WEBHOOK_URL not set");
      return NextResponse.json({ error: "Server config error" }, { status: 500 });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("n8n webhook error:", await res.text());
      return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
