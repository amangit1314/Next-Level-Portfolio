# AI Copilot Restructure — Spec

Date: 2026-08-19
Status: Approved

## Why

Portfolio's folder convention drifted from sibling repos (`aman-starter-kit`,
`CareerSpire`): no `src/lib/ai/`, no `src/features/<domain>/`, AI Copilot's
service logic (system prompt, tool defs, rate limiting) inlined in
`app/api/chat/route.ts` (227 lines). Restructure precedes the AI-feature
roadmap so new RAG/eval work lands in the right place the first time.

## Approach (B — earn-your-keep, not cargo-culted)

Only `src/features/` where real domain logic exists. Sections (Hero, Skills,
Projects, ...) stay in `components/sections/` — page composition, not domains.

## Changes

1. **`src/lib/ai/groq.ts`** — raw Groq chat-completions client extracted from
   the inline `fetch()` in `route.ts`. Takes `messages`, `tools`, returns the
   parsed choice.
2. **`src/features/ai-copilot/`**
   - `components/AICopilot.tsx` — moved from `components/features/`
   - `services/systemPrompt.ts` — candidate-context + system-instruction builder (Sanity `profileQuery`)
   - `services/tools.ts` — tool definitions (changeTheme, scrollToSection, searchProjects, downloadResume)
   - `types.ts` — `ChatMessage`, tool-call types
   - `hooks/useCopilotChat.ts` — deferred to a follow-up pass (component keeps its own state for now; extracting the hook is a mechanical follow-up, not blocking)
3. **`app/api/chat/route.ts`** shrinks to: rate-limit → `systemPrompt.build()` → `tools` → `lib/ai/groq.ts` → response.
4. **`src/constants/socialLinks.tsx`** replaces `src/utils/constants.tsx`.
   Only `SOCIAL_LINKS` survives (used by `Contact.tsx`). Dead exports deleted:
   `EXPERIENCES`, `PROJECTS`, `TESTIMONIALS`, `CONTACT` — all superseded by Sanity, zero live imports.
5. **Skipped**: `src/config/`, `src/schemas/` — no zod/config need yet (YAGNI).

## Import updates required

- `src/app/layout.tsx`: `@/components/features/AICopilot` → `@/features/ai-copilot/components/AICopilot`
- `src/components/sections/Contact.tsx`: `@/utils/constants` → `@/constants/socialLinks`

## Verification

- `npm run lint` clean
- `tsc --noEmit` clean
- Chat still works end-to-end (manual smoke test via dev server) — tool calls unaffected since client contract (`content`, `tool_calls`) unchanged.
