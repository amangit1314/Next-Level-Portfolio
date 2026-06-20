"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiUser, FiArrowLeft, FiShare2 } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogSection {
  title: string;
  content: string;
}

interface BlogArticleLayoutProps {
  title: string;
  publishedAt: string;
  readingTime: number;
  author: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
}

export default function BlogArticleLayout({
  title,
  publishedAt,
  readingTime,
  author,
  category,
  tags,
  sections,
}: BlogArticleLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = (content: string) => {
    // Split by code blocks first
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, i) => {
      if (part.startsWith("```")) {
        const lines = part.split("\n");
        const langLine = lines[0].replace("```", "").trim();
        const code = lines.slice(1, -1).join("\n");
        return (
          <div key={i} className="my-6 rounded-xl overflow-hidden border border-theme-border/50">
            {langLine && (
              <div className="px-4 py-2 bg-theme-bg-tertiary/80 border-b border-theme-border/50 text-xs font-mono text-theme-text-muted uppercase tracking-wider">
                {langLine}
              </div>
            )}
            <pre className="p-4 bg-theme-bg-primary/80 overflow-x-auto">
              <code className="text-sm font-mono text-theme-text-secondary leading-relaxed">
                {code}
              </code>
            </pre>
          </div>
        );
      }

      // Process inline formatting for non-code content
      return part.split("\n\n").map((paragraph, j) => {
        if (!paragraph.trim()) return null;

        // Bold text handling
        const formattedText = paragraph.split(/(\*\*.*?\*\*)/g).map((segment, k) => {
          if (segment.startsWith("**") && segment.endsWith("**")) {
            return (
              <strong key={k} className="text-theme-text-primary font-semibold">
                {segment.slice(2, -2)}
              </strong>
            );
          }
          // Inline code
          return segment.split(/(`[^`]+`)/g).map((codeSeg, l) => {
            if (codeSeg.startsWith("`") && codeSeg.endsWith("`")) {
              return (
                <code
                  key={`${k}-${l}`}
                  className="px-1.5 py-0.5 bg-theme-bg-tertiary/60 text-theme-primary rounded text-sm font-mono"
                >
                  {codeSeg.slice(1, -1)}
                </code>
              );
            }
            return <span key={`${k}-${l}`}>{codeSeg}</span>;
          });
        });

        // Check if it's a bullet point list
        if (paragraph.trim().startsWith("•") || paragraph.trim().startsWith("- ")) {
          const items = paragraph.split("\n").filter((line) => line.trim());
          return (
            <ul key={`${i}-${j}`} className="space-y-2 my-4">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 text-theme-text-secondary leading-relaxed ${inter.className}`}
                >
                  <span className="w-1.5 h-1.5 bg-theme-primary rounded-full mt-2.5 shrink-0" />
                  <span>{item.replace(/^[•\-]\s*/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        // Check if line starts with a number (ordered list)
        if (/^\d+\./.test(paragraph.trim())) {
          const items = paragraph.split("\n").filter((line) => line.trim());
          return (
            <ol key={`${i}-${j}`} className="space-y-2 my-4 list-decimal list-inside">
              {items.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-theme-text-secondary leading-relaxed ${inter.className}`}
                >
                  {item.replace(/^\d+\.\s*/, "")}
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p
            key={`${i}-${j}`}
            className={`text-theme-text-secondary leading-relaxed mb-4 ${inter.className}`}
          >
            {formattedText}
          </p>
        );
      });
    });
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <article className="relative min-h-screen bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-theme-secondary/5 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 lg:py-32">
          {/* Back Link */}
          <motion.a
            href="/blogs"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-sm text-theme-text-muted hover:text-theme-primary transition-colors mb-8 group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </motion.a>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-theme-primary/30 bg-theme-primary/5 text-theme-primary text-xs font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-theme-primary rounded-full" />
              {category}
            </div>

            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-6 leading-tight ${unbounded.className}`}
            >
              {title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-theme-text-muted mb-6">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span className={inter.className}>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <span className={inter.className}>
                  {new Date(publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span className={inter.className}>{readingTime} min read</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs rounded-lg bg-theme-bg-tertiary/60 text-theme-text-secondary border border-theme-border/40 ${inter.className}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-theme-border to-transparent mb-12" />

          {/* Article Body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {sections.map((section, idx) => (
              <section key={idx}>
                <h2
                  className={`text-2xl md:text-3xl font-bold text-theme-text-primary mb-6 ${unbounded.className}`}
                >
                  {section.title}
                </h2>
                <div className="prose-theme">{renderContent(section.content)}</div>
              </section>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 p-8 rounded-2xl bg-theme-bg-secondary/50 border border-theme-border/50 text-center"
          >
            <h3
              className={`text-xl font-bold text-theme-text-primary mb-3 ${unbounded.className}`}
            >
              Interested in my work?
            </h3>
            <p
              className={`text-theme-text-secondary mb-6 ${inter.className}`}
            >
              Check out my other projects and get in touch if you&apos;d like to collaborate.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/projects"
                className="px-6 py-3 theme-gradient-primary rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="/#contact"
                className="px-6 py-3 border border-theme-border rounded-xl text-theme-text-secondary font-semibold text-sm hover:border-theme-primary hover:text-theme-primary transition-all"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-16 w-full border-t border-theme-border/50 relative bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary overflow-hidden">
          <Footer />
        </footer>
      </article>
    </>
  );
}
