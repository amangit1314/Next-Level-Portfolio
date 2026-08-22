"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";
import { inter, anton, jetbrainsMono } from "@/lib/fonts";

export default function DashboardLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body?.error || "Incorrect password");
        return;
      }
      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm rounded-none border border-theme-border/50 bg-theme-bg-secondary/40 p-8"
      >
        <div className="flex items-center gap-2 mb-6">
          <FiLock className="w-4 h-4 text-theme-primary" />
          <h1 className={`text-lg uppercase leading-none text-theme-text-primary ${anton.className}`}>
            Dashboard
          </h1>
        </div>

        <label
          className={`block text-xs text-theme-text-muted mb-2 ${inter.className}`}
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full px-3 py-2.5 rounded-none border border-theme-border/60 bg-theme-bg-primary/60 text-sm text-theme-text-primary focus:outline-none focus:border-theme-primary/50 transition-colors ${inter.className}`}
        />

        {error && (
          <p className={`mt-3 text-xs text-red-400 ${inter.className}`}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className={`w-full mt-5 py-2.5 rounded-none bg-theme-primary text-theme-on-primary text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity uppercase tracking-wide ${jetbrainsMono.className}`}
        >
          {loading ? "Checking..." : "Enter"}
        </button>
      </motion.form>
    </div>
  );
}
