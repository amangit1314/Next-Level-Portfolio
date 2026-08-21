"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { jetbrainsMono } from "@/lib/fonts";

interface Pill {
  label: string;
  value: string;
}

const PILLS: Pill[] = [
  { label: "AVAILABILITY", value: "OPEN" },
  { label: "STACK", value: "NEXT.JS / THREE.JS / GSAP" },
  { label: "CORE_ID", value: "AI ENGINEER" },
  { label: "RENDERING", value: "WEBGL" },
];

export function HudTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    // Create GSAP context for cleanup
    contextRef.current = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    });

    return () => {
      contextRef.current?.revert();
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className={`flex gap-4 ${jetbrainsMono.className}`}
        style={{
          width: "200%",
        }}
      >
        {/* First pass */}
        {PILLS.map((pill, idx) => (
          <div
            key={`pill-1-${idx}`}
            className="flex-shrink-0 px-3 py-1.5 rounded border"
            style={{
              backgroundColor: "var(--hud-bg-elevated)",
              borderColor: "var(--hud-border)",
              color: "var(--hud-text-primary)",
            }}
          >
            <span className="font-normal text-sm">{pill.label}</span>
            <span
              className="ml-1 text-sm"
              style={{ color: "var(--hud-text-muted)" }}
            >
              [{pill.value}]
            </span>
          </div>
        ))}

        {/* Duplicate pass for seamless loop */}
        {PILLS.map((pill, idx) => (
          <div
            key={`pill-2-${idx}`}
            className="flex-shrink-0 px-3 py-1.5 rounded border"
            style={{
              backgroundColor: "var(--hud-bg-elevated)",
              borderColor: "var(--hud-border)",
              color: "var(--hud-text-primary)",
            }}
          >
            <span className="font-normal text-sm">{pill.label}</span>
            <span
              className="ml-1 text-sm"
              style={{ color: "var(--hud-text-muted)" }}
            >
              [{pill.value}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
