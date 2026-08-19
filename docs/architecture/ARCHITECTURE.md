# Next-Level-Portfolio — Architecture Guide

> Full folder-by-folder reference lives in `/CLAUDE.md` (Explored Map + Folder
> Structure sections) — that's the source of truth for "what's where" and is
> kept current every session. This doc covers what CLAUDE.md doesn't: request
> lifecycles, data flow, and deployment shape.

## Stack summary

Next.js 16 (App Router, React 19) · TypeScript strict · Tailwind v4 +
shadcn/ui · Framer Motion 12 · Sanity v5 (CMS) · Zustand (client UI state) ·
react-query (server/CMS state) · Groq (AI Copilot inference) · Vercel
(hosting).

## Data flow

### CMS content (Sanity)

```
Sanity Studio (embedded at /studio) → Sanity dataset
        → src/sanity/lib/queries.ts (GROQ)
        → client-side fetch (useEffect + client.fetch(), or a
          useSanityQuery.ts react-query hook for anything counted/derived)
        → section component
```

All Sanity fetches are currently client-side — no server components fetch
CMS data yet (tracked as a known gap, see CLAUDE.md → Known Issues). The one
exception: `ProfileContext` centralizes the single `profileQuery` fetch so
Hero/About/Skills don't each issue their own.

### AI Copilot (`/api/chat`)

```
AICopilot.tsx (client)
  → POST /api/chat  { messages }
      → rate limit check (in-memory, per-IP, 15 req/min)
      → client.fetch(profileQuery) — pulls live candidate context from Sanity
      → builds system prompt + tool definitions (changeTheme, scrollToSection,
        searchProjects, downloadResume)
      → Groq REST API (openai/gpt-oss-120b), tool_choice: "auto"
      → returns { content, tool_calls }
  → AICopilot.tsx dispatches tool_calls into the app (uiStore, theme context, etc.)
```

This is a system-prompt-stuffed chat with function calling — not RAG.
There's no retrieval step (no embeddings, no vector search); the profile
context is fetched fresh and stuffed into the prompt on every request. See
`docs/planning/` for where this is headed.

## Deployment

Single Vercel project. `metadataBase` set to `amansoni.dev`. No preview-env
divergence documented yet (no `vercel.ts`, env vars managed via Vercel
dashboard / `.env.local`).

## Where to look next

- Decision history → `docs/DECISIONS.md`
- Roadmap / in-flight plans → `docs/planning/`
- Brainstorming specs & plans (superpowers skill output) → `docs/superpowers/`
