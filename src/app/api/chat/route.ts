import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";

// Simple in-memory rate limiting to protect API key
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_LIMIT = 15; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in ms

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const clientData = ipRequestCounts.get(ip);

    if (!clientData) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (now > clientData.resetTime) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    clientData.count++;
    return clientData.count > RATE_LIMIT_LIMIT;
}

export async function POST(req: NextRequest) {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { error: "Rate limit exceeded. Please try again in a minute." },
            { status: 429 }
        );
    }

    // 2. Read Request
    let body;
    try {
        body = await req.json();
    } catch (e) {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { messages } = body;
    if (!messages || !Array.isArray(messages)) {
        return NextResponse.json({ error: "Missing messages array" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        console.error("GROQ_API_KEY environment variable is not defined");
        return NextResponse.json(
            { error: "AI Chat is currently unavailable (API Configuration error)" },
            { status: 500 }
        );
    }

    // 3. Fetch Candidate Information dynamically from Sanity CMS
    let candidateContext = "";
    try {
        const profile = await client.fetch(profileQuery);
        if (profile) {
            candidateContext = `
CANDIDATE PROFILE CONTEXT:
- Name: ${profile.name}
- Role: ${profile.role} (Senior AI Engineer & Full-Stack Architect)
- Headline: ${profile.headline}
- Key Strengths: ${(profile.keyStrengths || []).join(", ")}
- Tech Preview: ${(profile.techStackPreview || []).join(", ")}
- Stats: ${JSON.stringify(profile.stats || {})}
- Experience Areas: ${JSON.stringify(profile.experienceAreas || {})}
- Bio: ${profile.longBio || profile.shortBio || ""}
`;
        }
    } catch (e) {
        console.error("Failed to fetch candidate profile from Sanity for LLM system prompt:", e);
        // Fallback context if Sanity query fails
        candidateContext = `
CANDIDATE PROFILE CONTEXT:
- Name: Candidate (AI Engineer & Full-Stack Architect)
- Role: Senior AI Engineer & Full Stack developer with 4-5 YOE.
`;
    }

    // 4. Construct System Instruction
    const systemInstruction = {
        role: "system",
        content: `You are the "AI Portfolio Co-pilot", a premium, extremely fast interactive AI assistant for ${candidateContext.match(/Name: (.*)/)?.[1] || "the candidate"}'s developer portfolio.
Your job is to answer inquiries about the candidate's skills, experience, projects, and credentials.

GUIDELINES:
1. Be professional, direct, and technically precise.
2. Keep responses highly concise (max 2-3 sentences or 60 words). Recruiter time is highly valuable.
3. Highlight actual AI credentials: agent orchestration, vector embeddings, RAG optimization, low-latency backends, and Next.js interfaces.
4. You have access to tools. If the user asks you to perform an action (like changing themes, scrolling to a section, searching projects, or opening the resume), invoke the corresponding tool. Do NOT explain that you are invoking a tool, simply return the tool call.

${candidateContext}
`
    };

    // Prepare messages payload
    const apiMessages = [systemInstruction, ...messages];

    // Define function-calling tools supported by Groq
    const tools = [
        {
            type: "function",
            function: {
                name: "changeTheme",
                description: "Change the visual interface color theme of the portfolio website between light and dark mode.",
                parameters: {
                    type: "object",
                    properties: {
                        theme: {
                            type: "string",
                            enum: ["light", "dark"],
                            description: "The visual mode to apply."
                        }
                    },
                    required: ["theme"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "scrollToSection",
                description: "Smooth scroll the recruiter's browser window to a specific section on the page (home, about, skills, experience, projects, contact).",
                parameters: {
                    type: "object",
                    properties: {
                        section: {
                            type: "string",
                            enum: ["home", "about", "skills", "experience", "projects", "contact"],
                            description: "The section anchor name."
                        }
                    },
                    required: ["section"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "searchProjects",
                description: "Search, filter, or query the projects grid by a technology, tag, or word (e.g. 'Next.js', 'Python', 'RAG').",
                parameters: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            description: "The search keyword."
                        }
                    },
                    required: ["query"]
                }
            }
        },
        {
            type: "function",
            function: {
                name: "downloadResume",
                description: "Open the candidate's resume/CV PDF document in a new window or trigger a download.",
                parameters: {
                    type: "object",
                    properties: {}
                }
            }
        }
    ];

    // 5. Query Groq API
    try {
        const modelName = process.env.GROQ_MODEL_NAME || "llama-3.3-70b-versatile";
        
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: modelName,
                messages: apiMessages,
                temperature: 0.3,
                max_tokens: 250,
                tools,
                tool_choice: "auto"
            })
        });

        if (!groqResponse.ok) {
            const errorText = await groqResponse.text();
            console.error("Groq API returned an error:", errorText);
            return NextResponse.json(
                { error: "Error communicating with Groq API" },
                { status: groqResponse.status }
            );
        }

        const data = await groqResponse.json();
        
        // Extract content or tool calls
        const choice = data.choices?.[0];
        if (!choice) {
            return NextResponse.json({ error: "Empty response from LLM" }, { status: 500 });
        }

        const message = choice.message;

        return NextResponse.json({
            role: "assistant",
            content: message.content || "",
            tool_calls: message.tool_calls || null
        });

    } catch (e: any) {
        console.error("Error inside chat route handler:", e);
        return NextResponse.json(
            { error: "Internal Server Error in chat handler" },
            { status: 500 }
        );
    }
}
