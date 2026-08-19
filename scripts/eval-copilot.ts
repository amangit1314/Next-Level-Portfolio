// Golden-question eval for the AI copilot. Deterministic grading only — no
// LLM judge. Same reasoning as repo-rag's docs/eval: an LLM judge grading an
// LLM's answers is a weaker signal than checking for the actual facts/tool
// calls the question requires, and it's slower/costlier to run. Run after
// any change to the system prompt, tools, or retrieval:
//
//   npm run eval
//
// Exercises the exact same runCopilotChat() the API route calls — not a
// reimplementation of the request flow that could drift from production.

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { runCopilotChat } from "../src/features/ai-copilot/services/chatService";
import { ChatRole } from "../src/features/ai-copilot/types";

interface GoldenQuestion {
    id: string;
    type: "grounded" | "refusal" | "tool";
    question: string;
    expectedKeywords?: string[];
    expectedTool?: string;
}

const REFUSAL_PHRASES = [
    "no information", "don't have", "not available", "no evidence", "doesn't indicate",
    "couldn't find", "not aware", "sorry", "no record", "not indicate", "no mention",
    "not found", "no ", // catches "no." / "no," / leading "No, ..." style denials
];

function grade(q: GoldenQuestion, content: string, toolCalls: { function?: { name?: string } }[] | null): { pass: boolean; detail: string } {
    const lower = content.toLowerCase();

    if (q.type === "grounded") {
        const hit = q.expectedKeywords!.some((k) => lower.includes(k.toLowerCase()));
        return { pass: hit, detail: hit ? "mentioned expected fact" : `missing all of: ${q.expectedKeywords!.join(", ")}` };
    }

    if (q.type === "refusal") {
        const hedged = REFUSAL_PHRASES.some((p) => lower.includes(p));
        return { pass: hedged, detail: hedged ? "correctly declined" : "did not hedge — possible hallucination" };
    }

    // tool
    const called = (toolCalls || []).some((tc) => tc.function?.name === q.expectedTool);
    return { pass: called, detail: called ? `called ${q.expectedTool}` : `expected ${q.expectedTool}, got ${JSON.stringify(toolCalls)}` };
}

async function main() {
    const questions: GoldenQuestion[] = JSON.parse(readFileSync(join(__dirname, "../docs/eval/golden-questions.json"), "utf-8"));

    const rows: { id: string; type: string; pass: boolean; detail: string }[] = [];

    for (const q of questions) {
        // Groq's free tier caps tokens/minute; spacing requests out avoids
        // 429s rather than masking them as eval failures.
        await new Promise((r) => setTimeout(r, 6000));
        const outcome = await runCopilotChat([{ role: ChatRole.User, content: q.question }]);
        if (!outcome.ok) {
            rows.push({ id: q.id, type: q.type, pass: false, detail: `request failed: ${outcome.errorText}` });
            continue;
        }
        const { pass, detail } = grade(q, outcome.content, outcome.tool_calls);
        rows.push({ id: q.id, type: q.type, pass, detail });
        console.log(`${pass ? "PASS" : "FAIL"}  ${q.id.padEnd(14)} ${detail}`);
    }

    const passed = rows.filter((r) => r.pass).length;
    console.log(`\n${passed}/${rows.length} passed`);

    const resultsMd = [
        "# Copilot Eval Results",
        "",
        `Run: ${new Date().toISOString()}`,
        `Score: ${passed}/${rows.length}`,
        "",
        "No LLM judge — grounded questions check for the expected fact substring,",
        "refusal questions check for hedging language, tool questions check the",
        "actual tool_calls returned. See docs/eval/golden-questions.json for the set.",
        "",
        "| id | type | result | detail |",
        "|---|---|---|---|",
        ...rows.map((r) => `| ${r.id} | ${r.type} | ${r.pass ? "PASS" : "FAIL"} | ${r.detail} |`),
    ].join("\n");

    writeFileSync(join(__dirname, "../docs/eval/results.md"), resultsMd + "\n");

    if (passed < rows.length) process.exit(1);
}

main().catch((e) => {
    console.error("Eval run failed:", e);
    process.exit(1);
});
