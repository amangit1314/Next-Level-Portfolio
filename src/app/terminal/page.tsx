"use client";

import React, { useState, useEffect, useRef } from "react";
import { client } from "@/sanity/lib/client";
import { profileQuery, projectsQuery, experiencesQuery, skillsQuery } from "@/sanity/lib/queries";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";

interface TerminalLine {
  text: string;
  type: "input" | "output" | "system" | "error" | "ascii";
}

export default function TerminalPage() {
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [booted, setBooted] = useState(false);
  const [sanityData, setSanityData] = useState<any>({
    profile: null,
    projects: [],
    experiences: [],
    skills: [],
  });

  
  const { currentTheme, setTheme } = useTheme();
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input on click
  useEffect(() => {
    if (booted) {
      inputRef.current?.focus();
    }
  }, [booted]);

  // Scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, booted]);

  // Fetch Sanity Data on Mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profile, projects, experiences, skills] = await Promise.all([
          client.fetch(profileQuery),
          client.fetch(projectsQuery),
          client.fetch(experiencesQuery),
          client.fetch(skillsQuery),
        ]);
        setSanityData({ profile, projects, experiences, skills });
      } catch (e) {
        console.error("Failed to load sanity data for terminal:", e);
      }
    };
    fetchData();
  }, []);

  // Boot sequence animation
  useEffect(() => {
    const sequence = [
      { text: "Initializing Core Dev-Shell v2.4.9...", type: "system" },
      { text: "Loading system assets...", type: "system" },
      { text: "Connecting to Sanity CMS endpoint... SUCCESS", type: "system" },
      { text: "Verifying LLM subagent sync (Groq API)... SUCCESS", type: "system" },
      { text: "All systems nominal. Shell interactive.", type: "system" },
      { text: "", type: "output" },
    ];

    let delay = 200;
    sequence.forEach((line, index) => {
      setTimeout(() => {
        setHistory((prev) => [...prev, line as TerminalLine]);
        if (index === sequence.length - 1) {
          // Render ASCII Art and Help welcome message
          setTimeout(() => {
            setHistory((prev) => [
              ...prev,
              {
                text: `
 █████  ██ ██████   ██████  ██████  ██ ██      ██████  ████████ 
██   ██ ██ ██   ██ ██    ██ ██   ██ ██ ██     ██    ██    ██    
███████ ██ ██████  ██    ██ ██████  ██ ██     ██    ██    ██    
██   ██ ██ ██   ██ ██    ██ ██      ██ ██     ██    ██    ██    
██   ██ ██ ██   ██  ██████  ██      ██ ██████  ██████     ██    
                                                                `,
                type: "ascii",
              },
              { text: "Welcome to the interactive portfolio CLI! (4-5 YOE AI + Full-Stack)", type: "output" },
              { text: "Type 'help' to see list of available commands.", type: "system" },
            ]);
            setBooted(true);
          }, 300);
        }
      }, delay);
      delay += 250;
    });
  }, []);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    // Add to history list
    setHistory((prev) => [...prev, { text: `visitor@amansoni.dev:~$ ${trimmed}`, type: "input" }]);
    setCommandHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (command) {
      case "help":
        printHelp();
        break;
      case "about":
        printAbout();
        break;
      case "skills":
        printSkills();
        break;
      case "projects":
        printProjects();
        break;
      case "experience":
        printExperience();
        break;
      case "contact":
        printContact();
        break;
      case "download":
        triggerDownload();
        break;
      case "theme":
        toggleTheme(args[0]);
        break;
      case "clear":
        setHistory([]);
        break;
      case "exit":
        window.location.href = "/";
        break;
      default:
        setHistory((prev) => [
          ...prev,
          { text: `Command not found: '${command}'. Type 'help' for available commands.`, type: "error" },
        ]);
    }

    setInput("");
  };

  const printHelp = () => {
    const lines = [
      "Available commands:",
      "  about        Display candidate summary & roles",
      "  skills       List technologies categorized",
      "  projects     Show case study projects list",
      "  experience   Show professional experience log",
      "  contact      Display developer contact links",
      "  download     Download / Open the candidate resume PDF",
      "  theme        Change theme (usage: 'theme dark' or 'theme light')",
      "  clear        Clear the screen output logs",
      "  exit         Exit terminal and go back to home page",
    ];
    setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
  };

  const printAbout = () => {
    const profile = sanityData.profile;
    const desc = profile?.longBio || profile?.shortBio || "AI Engineer & Full-Stack Architect (4-5 YOE). Specialize in LangGraph, vector-search pipelines, low latency APIs, and robust front-ends.";
    const lines = [
      `NAME: ${profile?.name || "Aman Soni"}`,
      `ROLE: ${profile?.role || "Senior AI Engineer & Full-Stack Architect"}`,
      `HEADLINE: ${profile?.headline || ""}`,
      "--------------------------------------------------",
      desc,
    ];
    setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
  };

  const printSkills = () => {
    const skills = sanityData.skills;
    if (!skills || skills.length === 0) {
      // Fallback
      setHistory((prev) => [
        ...prev,
        { text: "AI & ML: Python, PyTorch, LangChain, Pinecone, LlamaIndex", type: "output" },
        { text: "Frontend: Next.js, React, TypeScript, TailwindCSS, Framer Motion", type: "output" },
        { text: "Backend: Node.js, Express, PostgreSQL, Redis, WebSockets", type: "output" },
        { text: "Infra: Docker, Kubernetes, AWS, Vercel CI/CD", type: "output" },
      ]);
      return;
    }

    // Categorize
    const cats: { [key: string]: string[] } = {};
    skills.forEach((sk: any) => {
      const cat = sk.category || "General";
      if (!cats[cat]) cats[cat] = [];
      cats[cat].push(sk.name);
    });

    const lines: string[] = [];
    Object.keys(cats).forEach((cat) => {
      lines.push(`[${cat.toUpperCase()}]`);
      lines.push(`  ${cats[cat].join(", ")}`);
    });

    setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
  };

  const printProjects = () => {
    const projects = sanityData.projects;
    if (!projects || projects.length === 0) {
      setHistory((prev) => [...prev, { text: "No projects loaded. Update Sanity database.", type: "error" }]);
      return;
    }

    const lines: string[] = [];
    projects.forEach((proj: any, idx: number) => {
      lines.push(`[${idx + 1}] ${proj.title}`);
      lines.push(`    Role: ${proj.role || "Developer"}`);
      lines.push(`    Tech: ${(proj.technologies || []).join(", ")}`);
      lines.push(`    Link: ${proj.link || "N/A"}`);
      lines.push(`    Code: ${proj.code || "N/A"}`);
      lines.push(`    Description: ${proj.description || ""}`);
      lines.push("");
    });
    setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
  };

  const printExperience = () => {
    const exp = sanityData.experiences;
    if (!exp || exp.length === 0) {
      setHistory((prev) => [
        ...prev,
        { text: "AI & Full-Stack Architect | 4-5 YOE | Distributed Agent Pipelines", type: "output" },
      ]);
      return;
    }

    const lines: string[] = [];
    exp.forEach((work: any) => {
      lines.push(`[${work.year}] ${work.role} - ${work.company}`);
      if (work.description) {
        lines.push(`  ${work.description}`);
      }
      if (work.technologies) {
        lines.push(`  Tech: ${work.technologies.join(", ")}`);
      }
      lines.push("");
    });
    setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
  };

  const printContact = () => {
    const profile = sanityData.profile;
    const lines = [
      "Contact Details:",
      "  GitHub:   github.com/amangit1314",
      "  Mail:     amanic@amanic.dev (dummy/workspace)",
    ];
    if (profile?.socialLinks) {
      const customLines = profile.socialLinks.map((link: any) => `  ${link.platform}: ${link.url}`);
      setHistory((prev) => [...prev, ...customLines.map((l: any) => ({ text: l, type: "output" as const }))]);
    } else {
      setHistory((prev) => [...prev, ...lines.map((l) => ({ text: l, type: "output" as const }))]);
    }
  };

  const triggerDownload = () => {
    const url = sanityData.profile?.resume?.asset?.url;
    if (url) {
      window.open(url, "_blank");
      setHistory((prev) => [...prev, { text: "Resume PDF download triggered.", type: "system" }]);
    } else {
      setHistory((prev) => [...prev, { text: "Resume file not uploaded to Sanity CMS.", type: "error" }]);
    }
  };

  const toggleTheme = (arg?: string) => {
    const themeArg = arg?.toLowerCase();
    if (themeArg === "light") {
      setTheme("coffee-latte");
      setHistory((prev) => [...prev, { text: "Applying Coffee Latte (Light mode)", type: "system" }]);
    } else if (themeArg === "dark" || !themeArg) {
      setTheme("forest-emerald");
      setHistory((prev) => [...prev, { text: "Applying Forest Emerald (Dark mode)", type: "system" }]);
    } else {
      setHistory((prev) => [...prev, { text: "Unknown theme arg. Use 'theme dark' or 'theme light'", type: "error" }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // History Navigation (Arrow Up / Down)
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple Autocomplete
      const commands = ["help", "about", "skills", "projects", "experience", "contact", "download", "theme", "clear", "exit"];
      const match = commands.find((c) => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <div
        className="flex-1 text-green-400 font-mono p-4 pt-20 md:p-8 md:pt-24 flex flex-col relative overflow-hidden select-none"
        onClick={() => inputRef.current?.focus()}
      >
      {/* CRT Scanline and flicker visual effects */}
      <div className="absolute inset-0 pointer-events-none z-40 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />
      <div className="absolute inset-0 pointer-events-none z-40 animate-[flicker_0.15s_infinite] opacity-5 bg-green-500/10" />

      {/* Terminal Title Bar */}
      <div className="flex justify-between items-center bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-t-xl z-10 text-xs text-zinc-400">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div>amansoni.dev - terminal shell</div>
        <div className="opacity-0 sm:opacity-100">Press [TAB] for autocomplete</div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 bg-zinc-950 border-x border-b border-zinc-800 p-4 rounded-b-xl overflow-y-auto no-scrollbar max-h-[85vh] z-10 flex flex-col shadow-inner">
        <div className="space-y-2 flex-1">
          {history.map((line, index) => {
            if (line.type === "ascii") {
              return (
                <pre
                  key={index}
                  className="leading-none text-cyan-400 text-[10px] sm:text-xs overflow-x-auto select-text font-bold whitespace-pre mt-2 mb-4"
                >
                  {line.text}
                </pre>
              );
            }

            let colorClass = "text-green-400";
            if (line.type === "system") colorClass = "text-zinc-500 font-bold";
            if (line.type === "error") colorClass = "text-red-400 font-bold";
            if (line.type === "input") colorClass = "text-white";
            if (line.type === "output") colorClass = "text-green-300/95 select-text";

            return (
              <div
                key={index}
                className={`${colorClass} whitespace-pre-wrap text-sm leading-relaxed`}
              >
                {line.text}
              </div>
            );
          })}

          {booted && (
            <div className="flex items-center text-sm mt-2 text-white">
              <span className="text-cyan-400 font-bold mr-2">visitor@amansoni.dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono p-0 focus:ring-0 cursor-text"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Inline styles for CRT visuals */}
      <style jsx global>{`
        @keyframes flicker {
          0% { opacity: 0.15; }
          50% { opacity: 0.18; }
          100% { opacity: 0.15; }
        }
        input {
          caret-color: #00ff00;
        }
      `}</style>
      </div>
    </div>
  );
}
