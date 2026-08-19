// Lists real visitor questions logged since the last review, so you can pick
// good ones to add to docs/eval/golden-questions.json by hand. Deliberately
// not automatic — an unverified real answer promoted straight into the
// golden set would poison the eval with whatever the model happened to say,
// not what's actually correct.
//
//   npm run eval:review

import { getSupabaseServerClient } from "../src/lib/supabase/serverClient";

async function main() {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
        .from("portfolio_copilot_interactions")
        .select("id, question, answer, searched_content, created_at")
        .eq("promoted_to_eval", false)
        .order("created_at", { ascending: false })
        .limit(30);

    if (error) {
        console.error("Failed to fetch interactions:", error);
        process.exit(1);
    }

    if (!data || data.length === 0) {
        console.log("No unreviewed interactions.");
        return;
    }

    console.log(`${data.length} unreviewed interaction(s):\n`);
    for (const row of data) {
        console.log(`[${row.id}] ${row.created_at}`);
        console.log(`  Q: ${row.question}`);
        console.log(`  A: ${row.answer}`);
        console.log(`  searched: ${row.searched_content}\n`);
    }

    console.log(
        "To promote a good one: add it to docs/eval/golden-questions.json manually,\n" +
            "then mark it reviewed with:\n" +
            "  update portfolio_copilot_interactions set promoted_to_eval = true where id in (...);"
    );
}

main().catch((e) => {
    console.error("promote-interactions failed:", e);
    process.exit(1);
});
