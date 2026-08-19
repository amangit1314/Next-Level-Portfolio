# Copilot Eval Results

Run: 2026-08-19T16:05:41.298Z
Score: 11/12

No LLM judge — grounded questions check for the expected fact substring,
refusal questions check for hedging language, tool questions check the
actual tool_calls returned. See docs/eval/golden-questions.json for the set.

| id | type | result | detail |
|---|---|---|---|
| grounded-1 | grounded | FAIL | missing all of: react native, notes of worship, twodays, ttyl, convo |
| grounded-2 | grounded | PASS | mentioned expected fact |
| grounded-3 | grounded | PASS | mentioned expected fact |
| grounded-4 | grounded | PASS | mentioned expected fact |
| grounded-5 | grounded | PASS | mentioned expected fact |
| refusal-1 | refusal | PASS | correctly declined |
| refusal-2 | refusal | PASS | correctly declined |
| refusal-3 | refusal | PASS | correctly declined |
| tool-theme | tool | PASS | called changeTheme |
| tool-scroll | tool | PASS | called scrollToSection |
| tool-search | tool | PASS | called searchProjects |
| tool-resume | tool | PASS | called downloadResume |
