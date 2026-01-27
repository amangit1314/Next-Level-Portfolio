"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FiAlertTriangle } from "react-icons/fi";
import { Button } from "@/components/ui/button"; // optional (not used)
import { unbounded } from "@/lib/fonts"; // <-- adjust path if needed

export function BugReportDialog() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/report-bug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          details,
          email,
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });

      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      setTitle("");
      setDetails("");
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Failed to send bug report. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog>
      {/* THEME BUTTON */}
      <DialogTrigger asChild>
        <button
          className="flex items-center space-x-2 px-4 py-2 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:border-theme-primary/50 text-theme-text-muted hover:text-theme-text-primary transition-all duration-300 hover:scale-105"
        >
          <span className={`${unbounded.className} text-xs`}>Report Bug</span>
          <FiAlertTriangle className="w-4 h-4" />
        </button>
      </DialogTrigger>

      {/* THEME-FRIENDLY DIALOG */}
      <DialogContent className="bg-theme-bg-secondary/60 backdrop-blur-xl border border-theme-border/40 shadow-xl rounded-2xl">
        <DialogHeader>
          <DialogTitle
            className={`${unbounded.className} text-sm text-theme-text-primary`}
          >
            Report a bug
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <Input
            required
            placeholder="Short bug title"
            className="bg-theme-bg-secondary/40 border border-theme-border/40 text-theme-text-primary placeholder:text-theme-text-muted"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            required
            placeholder="Describe what went wrong, steps to reproduce…"
            rows={5}
            className="bg-theme-bg-secondary/40 border border-theme-border/40 text-theme-text-primary placeholder:text-theme-text-muted"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Your email (optional)"
            className="bg-theme-bg-secondary/40 border border-theme-border/40 text-theme-text-primary placeholder:text-theme-text-muted"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:border-theme-primary/50 text-theme-text-muted hover:text-theme-text-primary transition-all duration-300"
          >
            <span className={`${unbounded.className} text-xs`}>
              {submitting ? "Sending..." : "Submit bug"}
            </span>
          </button>

          {success && (
            <p className="text-xs text-green-400">
              Thanks! Your bug report was submitted.
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
