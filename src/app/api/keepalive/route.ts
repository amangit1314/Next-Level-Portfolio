// Supabase free-tier projects pause after 7 days with no activity. A daily
// Vercel Cron hit here (see vercel.json) runs a trivial read against the RAG
// table — well inside the inactivity window, so the project never pauses.
// GET only: cron invocations are GET requests.

import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/serverClient";

export async function GET() {
    try {
        const supabase = getSupabaseServerClient();
        const { error } = await supabase.from("portfolio_rag_chunks").select("id").limit(1);

        if (error) {
            console.error("Keepalive ping failed:", error);
            return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
        }

        return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
    } catch (e) {
        console.error("Keepalive ping error:", e);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
