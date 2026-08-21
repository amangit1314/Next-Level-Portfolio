"use client";

import React, { useState, useEffect } from "react";
import { inter, anton, jetbrainsMono } from "@/lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
import { FiSliders, FiEye, FiCpu, FiPlay, FiRefreshCw } from "react-icons/fi";

interface Chunk {
  text: string;
  startIndex: number;
  endIndex: number;
}

interface DocNode {
  title: string;
  category: string;
  content: string;
  score?: number;
  x: number; // 2D layout coordinates
  y: number;
}

// Portfolio Knowledge Base to Search Over in Playground
const DOCUMENT_COLLECTION: DocNode[] = [
  {
    title: "AI Co-pilot Integration",
    category: "AI",
    content: "Aman built a live, function-calling AI assistant powered by Groq API. It can interact with browser APIs and execute page commands in real-time.",
    x: 20,
    y: 35,
  },
  {
    title: "Three.js Particle Graph",
    category: "Frontend",
    content: "The portfolio's background uses Three.js and custom shader buffers to draw an interactive neural network rendering nodes and connections.",
    x: 80,
    y: 20,
  },
  {
    title: "Sanity CMS Structuring",
    category: "Full Stack",
    content: "Dynamic portfolio schemas created in Sanity CMS provide structured endpoints for profiles, projects, skills, and work logs.",
    x: 50,
    y: 65,
  },
  {
    title: "Vercel Serverless Optimization",
    category: "DevOps",
    content: "Next.js routes are optimized for Vercel Serverless runtimes, using lightweight API requests to minimize cold starts.",
    x: 85,
    y: 75,
  },
  {
    title: "Redis Semantic Caching",
    category: "Full Stack",
    content: "Redis and PGvector are implemented for caching semantic query responses, cutting down API token costs by over 40%.",
    x: 25,
    y: 80,
  },
];

export default function RAGPlayground() {
  
  const [inputText, setInputText] = useState(
    "Aman Soni is a Senior AI Engineer and Full-Stack Architect. He builds high-speed websites with Next.js and integrates ultra-fast Llama models on Vercel. His portfolio features interactive CLI shells and visual RAG simulators."
  );
  
  // Chunking state
  const [chunkSize, setChunkSize] = useState(80);
  const [chunkOverlap, setChunkOverlap] = useState(20);
  const [chunks, setChunks] = useState<Chunk[]>([]);

  // Retrieval state
  const [searchQuery, setSearchQuery] = useState("How does Aman use AI?");
  const [retrievedDocs, setRetrievedDocs] = useState<DocNode[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Generation state
  const [promptText, setPromptText] = useState("");
  const [generatedAnswer, setGeneratedAnswer] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Auto chunking when inputs change
  useEffect(() => {
    performChunking();
  }, [inputText, chunkSize, chunkOverlap]);

  // Handle Chunking logic
  const performChunking = () => {
    if (!inputText) {
      setChunks([]);
      return;
    }
    const result: Chunk[] = [];
    let start = 0;
    const size = Math.max(20, chunkSize);
    const overlap = Math.min(size - 10, chunkOverlap);

    while (start < inputText.length) {
      let end = start + size;
      if (end > inputText.length) {
        end = inputText.length;
      }
      result.push({
        text: inputText.substring(start, end),
        startIndex: start,
        endIndex: end,
      });
      if (end === inputText.length) break;
      start = end - overlap;
    }
    setChunks(result);
  };

  // Simple client-side similarity retrieval (TF-IDF keyword matching score)
  const handleRetrieve = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);

    setTimeout(() => {
      const queryWords = searchQuery.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      
      const scoredDocs = DOCUMENT_COLLECTION.map(doc => {
        let score = 0;
        const text = (doc.title + " " + doc.content).toLowerCase();
        
        queryWords.forEach(word => {
          if (text.includes(word)) {
            score += 1.0;
          }
        });

        // Normalize score between 0 and 1
        const normalized = queryWords.length > 0 ? score / queryWords.length : 0;
        
        return {
          ...doc,
          score: Math.round(normalized * 100) / 100,
        };
      })
      .sort((a, b) => (b.score || 0) - (a.score || 0));

      setRetrievedDocs(scoredDocs);
      setIsSearching(false);

      // Synthesize prompt context
      const contextDocs = scoredDocs.filter(d => (d.score || 0) > 0.1).slice(0, 2);
      const compiledPrompt = `System: Answer the query based ONLY on the following context.
Context:
${contextDocs.map((d, i) => `[Doc ${i+1}] ${d.content}`).join("\n")}

Query: ${searchQuery}
Answer:`;
      setPromptText(compiledPrompt);
      setGeneratedAnswer(""); // Clear previous answer
    }, 600);
  };

  // Run generation via Groq chat route
  const handleGenerate = async () => {
    if (!promptText || isGenerating) return;
    setIsGenerating(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: promptText,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to contact LLM");
      }

      const data = await response.json();
      setGeneratedAnswer(data.content || "No response received.");
    } catch (e: any) {
      console.error(e);
      setGeneratedAnswer("Error generating answer. Make sure GROQ_API_KEY is configured in Vercel.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary text-theme-text-primary overflow-x-hidden">
      
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-theme-primary/30 bg-theme-primary/5 text-xs font-mono text-theme-primary">
            <FiCpu className="animate-spin-slow" />
            <span>AI Engineering Simulator</span>
          </div>
          <h1 className={`text-4xl md:text-6xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
            Visual RAG Explorer
          </h1>
          <p className="max-w-xl mx-auto text-theme-text-muted text-sm md:text-base leading-relaxed">
            See how Retrieval-Augmented Generation splits datasets, searches high-dimensional vector spaces, and constructs prompts.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Step 1: Chunking */}
          <div className="p-6 rounded-3xl bg-theme-bg-secondary/40 backdrop-blur-md border border-theme-border flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl theme-gradient-primary flex items-center justify-center text-theme-bg-primary font-mono text-sm font-bold">1</span>
                <h3 className={`text-xl uppercase leading-none ${anton.className}`}>Document Chunking</h3>
              </div>
              <p className="text-xs text-theme-text-muted">
                Large documents exceed LLM context windows and degrade relevance. We segment text into sliding windows.
              </p>

              <div className="space-y-4">
                <label className="block text-xs font-mono text-theme-text-secondary">Source Document:</label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full h-32 p-3 bg-theme-bg-tertiary/30 border border-theme-border rounded-xl text-xs outline-none focus:border-theme-primary/50 text-theme-text-secondary resize-none"
                />
              </div>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-theme-text-secondary">Chunk Size (chars)</span>
                  <span className="font-mono text-theme-primary">{chunkSize}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="200"
                  value={chunkSize}
                  onChange={(e) => setChunkSize(Number(e.target.value))}
                  className="w-full bg-theme-bg-tertiary h-1.5 rounded-lg appearance-none cursor-pointer accent-[var(--theme-primary)]"
                />

                <div className="flex justify-between items-center text-xs">
                  <span className="text-theme-text-secondary">Overlap (chars)</span>
                  <span className="font-mono text-theme-secondary">{chunkOverlap}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={chunkOverlap}
                  onChange={(e) => setChunkOverlap(Number(e.target.value))}
                  className="w-full bg-theme-bg-tertiary h-1.5 rounded-lg appearance-none cursor-pointer accent-[var(--theme-secondary)]"
                />
              </div>
            </div>

            {/* Chunk Outputs */}
            <div className="mt-6">
              <label className="block text-xs font-mono text-theme-text-muted mb-2">Segmented Output ({chunks.length} chunks):</label>
              <div className="h-44 overflow-y-auto space-y-2 border border-theme-border/50 rounded-xl p-3 bg-theme-bg-secondary/60 no-scrollbar">
                {chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className="p-2.5 pt-7 rounded-lg text-[11px] leading-relaxed border border-theme-border/30 bg-theme-bg-secondary/40 text-theme-text-secondary relative"
                  >
                    <span className="absolute top-2 right-2 z-10 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold text-theme-bg-primary bg-theme-primary">
                      Chunk #{index + 1}
                    </span>
                    {chunk.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Vector Space & Search */}
          <div className="p-6 rounded-3xl bg-theme-bg-secondary/40 backdrop-blur-md border border-theme-border flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl theme-gradient-primary flex items-center justify-center text-theme-bg-primary font-mono text-sm font-bold">2</span>
                <h3 className={`text-xl uppercase leading-none ${anton.className}`}>Vector Space Matcher</h3>
              </div>
              <p className="text-xs text-theme-text-muted">
                Chunks are mapped to dense vector dimensions. similarity queries return the closest matches.
              </p>

              {/* Search Bar */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 bg-theme-bg-tertiary/30 border border-theme-border rounded-xl text-xs focus:border-theme-primary/50 text-theme-text-primary outline-none"
                />
                <button
                  onClick={handleRetrieve}
                  disabled={isSearching}
                  className="px-4 py-2 theme-gradient-primary text-theme-bg-primary text-xs font-semibold rounded-xl flex items-center gap-1.5 hover:shadow-lg transition"
                >
                  <FiPlay />
                  <span>Query</span>
                </button>
              </div>

              {/* 2D Representation Vector Map */}
              <div className="relative w-full h-44 bg-theme-bg-primary border border-theme-border rounded-2xl overflow-hidden shadow-inner">
                {/* Axes */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-theme-border/50" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-theme-border/50" />
                
                {/* Document nodes */}
                {DOCUMENT_COLLECTION.map((doc) => {
                  const resultDoc = retrievedDocs.find(d => d.title === doc.title);
                  const isRetrieved = resultDoc && (resultDoc.score || 0) > 0.1;
                  
                  return (
                    <motion.div
                      key={doc.title}
                      className="absolute w-3.5 h-3.5 rounded-full flex items-center justify-center cursor-help group"
                      style={{ left: `${doc.x}%`, top: `${doc.y}%` }}
                      animate={{
                        scale: isRetrieved ? 1.5 : 1,
                        backgroundColor: isRetrieved ? "#10b981" : "#3f3f46",
                        boxShadow: isRetrieved ? "0 0 12px #10b981" : "none",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Tooltip */}
                      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-theme-primary px-2 py-1 rounded text-[9px] font-semibold text-theme-bg-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                        {doc.title} {resultDoc?.score ? `(Score: ${resultDoc.score})` : ""}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Query Indicator Node */}
                {searchQuery && (
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center shadow-lg"
                    style={{ left: "50%", top: "50%" }}
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: "0 0 15px #06b6d4",
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-theme-bg-secondary text-[8px] px-1 rounded text-theme-primary uppercase font-mono tracking-widest">Query</span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Scored Results */}
            <div className="mt-6">
              <label className="block text-xs font-mono text-theme-text-muted mb-2">Retrieval Score Cards:</label>
              <div className="h-44 overflow-y-auto space-y-2 border border-theme-border/50 rounded-xl p-3 bg-theme-bg-secondary/60 no-scrollbar text-xs">
                {retrievedDocs.length === 0 ? (
                  <div className="text-center text-theme-text-muted py-8 text-xs font-mono">
                    Click Query to run cosine similarity.
                  </div>
                ) : (
                  retrievedDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border flex justify-between items-center transition duration-300
                        ${(doc.score || 0) > 0.1 
                          ? "border-theme-primary/40 bg-theme-primary/5" 
                          : "border-theme-border/30 bg-theme-bg-secondary/20 opacity-60"
                        }
                      `}
                    >
                      <div>
                        <div className="font-semibold text-theme-text-primary">{doc.title}</div>
                        <div className="text-[10px] text-theme-text-muted truncate max-w-[200px]">{doc.content}</div>
                      </div>
                      <div className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg
                        ${(doc.score || 0) > 0.1 ? "bg-theme-primary/10 text-theme-primary" : "bg-theme-bg-secondary text-theme-text-muted"}
                      `}>
                        {doc.score}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Synthesis & LLM */}
          <div className="p-6 rounded-3xl bg-theme-bg-secondary/40 backdrop-blur-md border border-theme-border flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl theme-gradient-primary flex items-center justify-center text-theme-bg-primary font-mono text-sm font-bold">3</span>
                <h3 className={`text-xl uppercase leading-none ${anton.className}`}>LLM Generation</h3>
              </div>
              <p className="text-xs text-theme-text-muted">
                Synthesized instructions are compiled and fed to the LLM to write a verified reply.
              </p>

              {/* Compiled Prompt */}
              <div className="space-y-2">
                <label className="block text-xs font-mono text-theme-text-secondary">Synthesized Prompt Template:</label>
                <textarea
                  value={promptText}
                  readOnly
                  className="w-full h-32 p-3 bg-theme-bg-secondary/60 border border-theme-border rounded-xl text-[11px] outline-none text-theme-text-secondary resize-none font-mono focus:border-theme-primary/50"
                  placeholder="Awaiting prompt compilation from similarity query..."
                />
              </div>

              {/* Run Prompt button */}
              <button
                onClick={handleGenerate}
                disabled={!promptText || isGenerating}
                className="w-full py-3 theme-gradient-primary text-theme-bg-primary text-xs font-bold rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <FiRefreshCw className="animate-spin" />
                    <span>Orchestrating LLM...</span>
                  </>
                ) : (
                  <>
                    <FiCpu />
                    <span>Execute LLM Prompt</span>
                  </>
                )}
              </button>
            </div>

            {/* Answer Output */}
            <div className="mt-6">
              <label className="block text-xs font-mono text-theme-text-muted mb-2">Final Answer Generation:</label>
              <div className="h-44 overflow-y-auto space-y-2 border border-theme-border/50 rounded-xl p-3 bg-theme-bg-secondary/60 no-scrollbar text-xs leading-relaxed text-theme-text-secondary">
                {generatedAnswer ? (
                  <p>{generatedAnswer}</p>
                ) : (
                  <div className="text-center text-theme-text-muted py-8 text-xs font-mono">
                    Awaiting prompt execution...
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
