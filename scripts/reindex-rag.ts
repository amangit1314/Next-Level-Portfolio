// Rebuilds the RAG index in Supabase from current Sanity content. Run this
// manually after editing projects/skills/experience in Sanity Studio:
//
//   npm run reindex
//
// Not automatic/webhook-triggered — content changes rarely enough (edited by
// hand in Studio, not user-generated) that a manual step is the right amount
// of infrastructure. One row per Sanity document; each doc's fields are
// flattened into a short text block and embedded whole — no sub-chunking
// needed at this content size (a project description isn't a full-repo file).

import { client } from "../src/sanity/lib/client";
import { experiencesQuery, projectsQuery, skillsQuery } from "../src/sanity/lib/queries";
import { embedTexts } from "../src/lib/ai/embeddings";
import { getSupabaseServerClient } from "../src/lib/supabase/serverClient";

interface IndexRow {
    source_type: string;
    source_id: string;
    title: string;
    content: string;
}

function projectToRow(p: {
    _id: string;
    title: string;
    description?: string;
    technologies?: string[];
    role?: string;
    duration?: string;
    achievements?: string[];
}): IndexRow {
    const content = [
        p.description,
        p.technologies?.length ? `Technologies: ${p.technologies.join(", ")}` : null,
        p.role ? `Role: ${p.role}` : null,
        p.duration ? `Duration: ${p.duration}` : null,
        p.achievements?.length ? `Achievements: ${p.achievements.join("; ")}` : null,
    ]
        .filter(Boolean)
        .join("\n");

    return { source_type: "project", source_id: p._id, title: p.title, content };
}

function skillToRow(s: { _id: string; name: string; category?: string; proficiency?: number }): IndexRow {
    const content = [s.category ? `Category: ${s.category}` : null, s.proficiency ? `Proficiency: ${s.proficiency}/100` : null]
        .filter(Boolean)
        .join("\n");

    return { source_type: "skill", source_id: s._id, title: s.name, content: content || s.name };
}

function experienceToRow(e: {
    _id: string;
    role: string;
    company: string;
    year?: string;
    description?: string;
    technologies?: string[];
}): IndexRow {
    const content = [
        e.year ? `Period: ${e.year}` : null,
        e.description,
        e.technologies?.length ? `Technologies: ${e.technologies.join(", ")}` : null,
    ]
        .filter(Boolean)
        .join("\n");

    return { source_type: "experience", source_id: e._id, title: `${e.role} at ${e.company}`, content };
}

async function main() {
    console.log("Fetching Sanity content...");
    const [projects, skills, experiences] = await Promise.all([
        client.fetch(projectsQuery),
        client.fetch(skillsQuery),
        client.fetch(experiencesQuery),
    ]);

    const rows: IndexRow[] = [
        ...(projects || []).map(projectToRow),
        ...(skills || []).map(skillToRow),
        ...(experiences || []).map(experienceToRow),
    ];

    if (rows.length === 0) {
        console.log("No content found to index. Exiting.");
        return;
    }

    console.log(`Embedding ${rows.length} items (${summarizeCounts(rows)})...`);
    const embeddings = await embedTexts(rows.map((r) => `${r.title}\n${r.content}`));

    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("portfolio_rag_chunks").upsert(
        rows.map((row, i) => ({ ...row, embedding: embeddings[i], updated_at: new Date().toISOString() })),
        { onConflict: "source_type,source_id" }
    );

    if (error) {
        console.error("Upsert failed:", error);
        process.exit(1);
    }

    console.log(`Indexed ${rows.length} items into portfolio_rag_chunks.`);
}

function summarizeCounts(rows: IndexRow[]): string {
    const counts = rows.reduce<Record<string, number>>((acc, r) => {
        acc[r.source_type] = (acc[r.source_type] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(counts)
        .map(([type, count]) => `${count} ${type}`)
        .join(", ");
}

main().catch((e) => {
    console.error("Reindex failed:", e);
    process.exit(1);
});
