"use client";

// Custom cursor trace — a short tapering line that follows the pointer,
// composited with mix-blend-mode: difference so it inverts whatever's
// underneath (works over any HUD panel without needing its own theme
// color). This is a 2D canvas, not WebGL: the confirmed technique behind
// the reference site's cursor effect (read from its own computed styles
// — a fixed full-viewport <canvas> with mix-blend-mode: difference) is a
// 2D compositing trick, not a 3D scene, so a WebGL renderer here would
// just be the wrong tool for the same real effect. A prior attempt at
// this (GSAP quickTo-driven dot+ring, commit 6a1b8c2) was reverted
// (63ef98a) for reading as a generic lag-follower, not this. The
// distinguishing move here is the difference-blend inversion + a drawn
// trail (not two static shapes chasing the pointer).
//
// Desktop-with-a-real-mouse only (pointer:fine) and skipped entirely
// under prefers-reduced-motion — same guards as HudBootLoader/HeroBackground.
// pointer-events-none throughout, so it never blocks a real click.

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 14;
const LERP = 0.25;

export function HudCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let headX = targetX;
    let headY = targetY;
    const trail: { x: number; y: number }[] = Array.from({ length: TRAIL_LENGTH }, () => ({ x: headX, y: headY }));

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);

    let frameId: number;
    const draw = () => {
      headX += (targetX - headX) * LERP;
      headY += (targetY - headY) * LERP;
      trail.push({ x: headX, y: headY });
      trail.shift();

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.strokeStyle = "#ffffff";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < trail.length; i++) {
        const t = i / trail.length; // 0 (oldest/tail) -> 1 (newest/head)
        ctx.globalAlpha = t * 0.9;
        ctx.lineWidth = t * 3.5;
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        ctx.stroke();
      }

      // Solid head dot anchors the trail to the actual (lagged) cursor position.
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(headX, headY, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      frameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[70] pointer-events-none"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
