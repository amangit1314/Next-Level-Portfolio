"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 8;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Particle configuration
        const count = 90;
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);

        const areaRange = 12; // boundaries of float space

        for (let i = 0; i < count; i++) {
            // Spread nodes in 3D box
            positions[i * 3] = (Math.random() - 0.5) * areaRange;
            positions[i * 3 + 1] = (Math.random() - 0.5) * areaRange;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 5; // flatter depth

            // Soft random velocities
            velocities[i * 3] = (Math.random() - 0.5) * 0.012;
            velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.006;
        }

        // Particle Geometry
        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        // Particle Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.12,
            color: 0x10b981, // Emerald-500
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Line Segments for Connections
        const maxConnections = 200;
        const linePositions = new Float32Array(maxConnections * 2 * 3);
        const lineColors = new Float32Array(maxConnections * 2 * 3);

        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(linePositions, 3)
        );
        lineGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(lineColors, 3)
        );

        const lineMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            opacity: 0.45,
            blending: THREE.AdditiveBlending,
            linewidth: 1,
        });

        const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(lineSegments);

        // Mouse Tracker
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        // Clock & Frame control
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const delta = clock.getDelta();
            
            // Smooth mouse interpolations
            mouseX += (targetMouseX - mouseX) * 0.08;
            mouseY += (targetMouseY - mouseY) * 0.08;

            // Project mouse position to ThreeJS coordinates
            // (Z = 0 plane approximation)
            const mousePos = new THREE.Vector3(mouseX * 12, -mouseY * 8, 0);

            // Fetch positions attribute
            const posAttr = particlesGeometry.attributes.position;
            const posArray = posAttr.array as Float32Array;

            let lineIndex = 0;

            // Update node positions and calculate lines
            for (let i = 0; i < count; i++) {
                // Move nodes
                posArray[i * 3] += velocities[i * 3];
                posArray[i * 3 + 1] += velocities[i * 3 + 1];
                posArray[i * 3 + 2] += velocities[i * 3 + 2];

                // Boundary bounce
                const limitX = areaRange / 2;
                const limitY = 6;
                const limitZ = 3;

                if (Math.abs(posArray[i * 3]) > limitX) {
                    velocities[i * 3] *= -1;
                    posArray[i * 3] = Math.sign(posArray[i * 3]) * limitX;
                }
                if (Math.abs(posArray[i * 3 + 1]) > limitY) {
                    velocities[i * 3 + 1] *= -1;
                    posArray[i * 3 + 1] = Math.sign(posArray[i * 3 + 1]) * limitY;
                }
                if (Math.abs(posArray[i * 3 + 2]) > limitZ) {
                    velocities[i * 3 + 2] *= -1;
                    posArray[i * 3 + 2] = Math.sign(posArray[i * 3 + 2]) * limitZ;
                }

                // Vector for current node
                const nodePos = new THREE.Vector3(
                    posArray[i * 3],
                    posArray[i * 3 + 1],
                    posArray[i * 3 + 2]
                );

                // Mouse interaction - repel slightly
                const distToMouse = nodePos.distanceTo(mousePos);
                if (distToMouse < 2.5) {
                    const forceDir = nodePos.clone().sub(mousePos).normalize();
                    const force = (2.5 - distToMouse) * 0.015;
                    posArray[i * 3] += forceDir.x * force;
                    posArray[i * 3 + 1] += forceDir.y * force;
                    nodePos.x = posArray[i * 3];
                    nodePos.y = posArray[i * 3 + 1];
                }

                // Connect with other nodes
                for (let j = i + 1; j < count; j++) {
                    const otherPos = new THREE.Vector3(
                        posArray[j * 3],
                        posArray[j * 3 + 1],
                        posArray[j * 3 + 2]
                    );

                    const dist = nodePos.distanceTo(otherPos);

                    // Connect if close enough
                    if (dist < 2.6 && lineIndex < maxConnections) {
                        const idx = lineIndex * 2;
                        
                        // Line Node 1
                        linePositions[idx * 3] = nodePos.x;
                        linePositions[idx * 3 + 1] = nodePos.y;
                        linePositions[idx * 3 + 2] = nodePos.z;

                        // Line Node 2
                        linePositions[(idx + 1) * 3] = otherPos.x;
                        linePositions[(idx + 1) * 3 + 1] = otherPos.y;
                        linePositions[(idx + 1) * 3 + 2] = otherPos.z;

                        // Calculate fade relative to distance
                        const alpha = Math.max(0, 1.0 - dist / 2.6);

                        // Vertex 1 Color (Emerald: r=0.06, g=0.72, b=0.5)
                        lineColors[idx * 3] = 0.06 * alpha;
                        lineColors[idx * 3 + 1] = 0.72 * alpha;
                        lineColors[idx * 3 + 2] = 0.50 * alpha;

                        // Vertex 2 Color (Cyan: r=0.02, g=0.71, b=0.83)
                        lineColors[(idx + 1) * 3] = 0.02 * alpha;
                        lineColors[(idx + 1) * 3 + 1] = 0.71 * alpha;
                        lineColors[(idx + 1) * 3 + 2] = 0.83 * alpha;

                        lineIndex++;
                    }
                }
            }

            // Tell ThreeJS arrays need rerendering
            posAttr.needsUpdate = true;
            lineGeometry.attributes.position.needsUpdate = true;
            lineGeometry.attributes.color.needsUpdate = true;
            lineGeometry.setDrawRange(0, lineIndex * 2);

            // Subtle camera movement
            camera.position.x += (mouseX * 2.0 - camera.position.x) * 0.05;
            camera.position.y += (-mouseY * 1.5 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        // Listeners
        const handleMouseMove = (event: MouseEvent) => {
            targetMouseX = (event.clientX / window.innerWidth) - 0.5;
            targetMouseY = (event.clientY / window.innerHeight) - 0.5;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(frameId);

            if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
                containerRef.current.removeChild(renderer.domElement);
            }

            particlesGeometry.dispose();
            particlesMaterial.dispose();
            lineGeometry.dispose();
            lineMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen"
        />
    );
};

export default HeroBackground;
