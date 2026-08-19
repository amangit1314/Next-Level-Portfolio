// Server-only Supabase client, service-role key. Used by the RAG reindex
// script and the chat route's searchContent tool — never imported from
// client components. The `portfolio_rag_chunks` table's RLS policy only
// grants access to the service role (see the migration in Supabase),
// so the anon key can't read this table even if it were used here.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// No generated Database types for this project yet — untyped client is a
// deliberate, small trade-off (two tables total: portfolio_rag_chunks +
// whatever ApplyPilot owns) rather than standing up `supabase gen types` for
// this scope. Revisit if the schema grows.
let _client: SupabaseClient | null = null;

export function getSupabaseServerClient(): SupabaseClient {
    if (_client) return _client;

    const url = process.env.SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
        throw new Error(
            "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set — required for RAG (reindex script + searchContent tool)."
        );
    }

    _client = createClient(url, serviceRoleKey, {
        auth: { persistSession: false },
    });
    return _client;
}
