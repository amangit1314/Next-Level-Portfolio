"use client";

// The hero's "dot-matrix portrait" — samples the profile photo's pixels
// into a Three.js point cloud (the reference site's actual technique, not
// a generic 3D shape). Points fly in from scattered positions on mount,
// then the whole cloud idles with a gentle cursor-driven tilt.
//
// Bails to null (caller renders the plain <Image> instead) on no WebGL,
// prefers-reduced-motion, or if the image can't be read as pixel data —
// e.g. a CORS-tainted canvas from a misconfigured asset host. Never a
// broken/blank hero.

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const INTRO_DURATION = 2.2;
const SAMPLE_SIZE = 96; // downsampled image resolution — point count is roughly this squared / step
const SAMPLE_STEP = 2; // read every Nth pixel row/col — keeps point count sane
const LUMINANCE_THRESHOLD = 25; // below this, a pixel is "background" and skipped

interface SampledPoint {
    x: number;
    y: number;
    z: number;
    brightness: number;
}

function supportsWebGL(): boolean {
    try {
        const canvas = document.createElement("canvas");
        return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    } catch {
        return false;
    }
}

// Draws the image to an offscreen canvas and samples pixels above the
// luminance threshold into normalized [-1.5, 1.5]-ish local space.
async function sampleImageToPoints(imageUrl: string): Promise<SampledPoint[]> {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error("Image failed to load"));
        img.src = imageUrl;
    });

    const canvas = document.createElement("canvas");
    canvas.width = SAMPLE_SIZE;
    canvas.height = SAMPLE_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("2D context unavailable");

    // Cover-fit into the square sample canvas, same idea as CSS object-fit: cover.
    const scale = Math.max(SAMPLE_SIZE / img.width, SAMPLE_SIZE / img.height);
    const drawW = img.width * scale;
    const drawH = img.height * scale;
    ctx.drawImage(img, (SAMPLE_SIZE - drawW) / 2, (SAMPLE_SIZE - drawH) / 2, drawW, drawH);

    // Throws if the canvas got CORS-tainted — caller's try/catch handles it.
    const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);

    const points: SampledPoint[] = [];
    for (let py = 0; py < SAMPLE_SIZE; py += SAMPLE_STEP) {
        for (let px = 0; px < SAMPLE_SIZE; px += SAMPLE_STEP) {
            const i = (py * SAMPLE_SIZE + px) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
            if (luminance < LUMINANCE_THRESHOLD) continue;

            points.push({
                x: (px / SAMPLE_SIZE - 0.5) * 3,
                y: -(py / SAMPLE_SIZE - 0.5) * 3,
                z: (Math.random() - 0.5) * 0.3,
                brightness: luminance / 255,
            });
        }
    }
    return points;
}

function PointCloud({ points, skipIntro }: { points: SampledPoint[]; skipIntro: boolean }) {
    const pointsRef = useRef<THREE.Points>(null);
    const groupRef = useRef<THREE.Group>(null);
    const startTime = useRef<number | null>(null);
    const pointer = useRef({ x: 0, y: 0 });

    // Target (final) positions and colors are pure derivations of the
    // `points` prop — plain consts, not refs (reading a ref's .current
    // during render, e.g. in the JSX below, is itself a purity violation;
    // useFrame's closure over these is fine since it isn't render).
    // scattered uses useState's lazy initializer specifically because it
    // calls Math.random() — a useMemo/plain-const recompute would call it
    // impurely on every render; useState's functional form runs exactly once.
    const targets = useMemo(() => new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), [points]);
    const colors = useMemo(() => new Float32Array(points.flatMap((p) => [p.brightness, p.brightness, p.brightness])), [points]);
    const [scattered] = useState(
        () => new Float32Array(points.flatMap(() => [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]))
    );

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
        const geometry = pointsRef.current?.geometry;
        const group = groupRef.current;
        if (!geometry || !group) return;

        if (startTime.current === null) startTime.current = clock.getElapsedTime();
        const elapsed = skipIntro ? INTRO_DURATION : clock.getElapsedTime() - startTime.current;
        const positionAttr = geometry.attributes.position as THREE.BufferAttribute;

        if (elapsed < INTRO_DURATION) {
            // Ease-out lerp from scattered -> target position per point.
            const t = Math.min(1, elapsed / INTRO_DURATION);
            const eased = 1 - Math.pow(1 - t, 3);
            for (let i = 0; i < targets.length; i++) {
                positionAttr.array[i] = THREE.MathUtils.lerp(scattered[i], targets[i], eased);
            }
            positionAttr.needsUpdate = true;
            group.rotation.y = (1 - eased) * Math.PI * 0.5;
        } else {
            // Idle: snap to target (intro's lerp already lands there at t=1),
            // gentle constant rotation + cursor tilt on the whole group.
            group.rotation.y += 0.0015;
            group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -pointer.current.y * 0.15, 0.05);
            group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, pointer.current.x * 0.1, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" args={[targets.slice(), 3]} />
                    <bufferAttribute attach="attributes-color" args={[colors, 3]} />
                </bufferGeometry>
                <pointsMaterial size={0.02} vertexColors sizeAttenuation transparent opacity={0.9} />
            </points>
        </group>
    );
}

export function ParticlePortrait({ imageUrl }: { imageUrl: string }) {
    const [points, setPoints] = useState<SampledPoint[] | null>(null);
    const [failed, setFailed] = useState(false);
    const [skipIntro, setSkipIntro] = useState(false);

    useEffect(() => {
        // Capability checks (WebGL, prefers-reduced-motion) can only run
        // client-side post-mount, not during the initial render pass Next.js
        // does for "use client" components — same documented exception as
        // HudStatusBar.tsx's mounted flag and the earlier HeroScene attempt.
        if (!supportsWebGL()) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFailed(true);
            return;
        }
        setSkipIntro(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        sampleImageToPoints(imageUrl)
            .then(setPoints)
            .catch((e) => {
                console.error("ParticlePortrait: failed to sample image", e);
                setFailed(true);
            });
    }, [imageUrl]);

    if (failed || !points) return null;

    return (
        <div className="absolute inset-0" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                <PointCloud points={points} skipIntro={skipIntro} />
            </Canvas>
        </div>
    );
}
