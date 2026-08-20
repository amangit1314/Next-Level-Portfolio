"use client";

// Hero's 3D background — an "AI core" orb (glowing distort-shader sphere +
// particle field) that plays a short intro sequence on mount, then settles
// into a cursor-reactive idle state. Lives behind HeroSection's text/CTAs —
// pointer-events stay off the canvas so clicks always reach the real UI;
// cursor tracking uses its own window listener instead of relying on R3F's
// built-in pointer state (which needs the canvas to receive pointer events).
//
// Bails out entirely (renders null, caller keeps today's static glow
// background) when the device can't support it — prefers-reduced-motion,
// or no WebGL context. Never a broken/blank hero.

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const INTRO_DURATION = 2.4; // seconds

function supportsWebGL(): boolean {
    try {
        const canvas = document.createElement("canvas");
        return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
        return false;
    }
}

function AICore({ skipIntro }: { skipIntro: boolean }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const startTime = useRef<number | null>(null);
    // Normalized [-1, 1] cursor position, updated by a window listener rather
    // than R3F's pointer state — the canvas has pointer-events: none so
    // clicks pass through to the real hero content in front of it.
    const pointer = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            pointer.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };
        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    useFrame(({ clock }) => {
        const mesh = meshRef.current;
        if (!mesh) return;

        if (startTime.current === null) startTime.current = clock.getElapsedTime();
        const elapsed = skipIntro ? INTRO_DURATION : clock.getElapsedTime() - startTime.current;

        if (elapsed < INTRO_DURATION) {
            // Intro: scale up from nothing, with two hard "glitch" snaps
            // (abrupt jumps, not eased) partway through — reads as an edited
            // cut rather than a smooth animation.
            const t = elapsed / INTRO_DURATION;
            const glitch1 = t > 0.35 && t < 0.4;
            const glitch2 = t > 0.68 && t < 0.72;
            const baseScale = Math.min(1, t * 1.3);
            mesh.scale.setScalar(glitch1 || glitch2 ? baseScale * 1.15 : baseScale);
            mesh.rotation.y = t * Math.PI * 3;
            mesh.position.x = glitch1 ? 0.15 : glitch2 ? -0.1 : 0;
        } else {
            // Idle: gentle constant rotation + cursor-driven tilt/offset.
            mesh.scale.setScalar(1);
            mesh.rotation.y += 0.0025;
            mesh.position.x = THREE.MathUtils.lerp(mesh.position.x, pointer.current.x * 0.4, 0.05);
            mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, pointer.current.y * 0.3, 0.05);
            mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, -pointer.current.y * 0.2, 0.05);
            mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, pointer.current.x * 0.15, 0.05);
        }
    });

    return (
        <>
            <mesh ref={meshRef} scale={0}>
                <icosahedronGeometry args={[1.4, 4]} />
                <MeshDistortMaterial
                    color="#6366f1"
                    emissive="#4338ca"
                    emissiveIntensity={0.6}
                    distort={0.4}
                    speed={2}
                    roughness={0.15}
                    metalness={0.6}
                />
            </mesh>
            <Sparkles count={80} scale={4.5} size={2} speed={0.3} color="#a5b4fc" />
        </>
    );
}

export function HeroScene() {
    const [ready, setReady] = useState(false);
    const [skipIntro, setSkipIntro] = useState(false);

    useEffect(() => {
        if (!supportsWebGL()) return; // stay null — caller's static fallback shows instead
        setSkipIntro(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        setReady(true);
    }, []);

    if (!ready) return null;

    return (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={1.2} color="#818cf8" />
                <AICore skipIntro={skipIntro} />
            </Canvas>
        </div>
    );
}
