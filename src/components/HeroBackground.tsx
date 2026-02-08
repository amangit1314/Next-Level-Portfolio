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
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Objects
        // 1. Wireframe Sphere
        const geometry = new THREE.IcosahedronGeometry(2.5, 1);
        const material = new THREE.MeshBasicMaterial({
            color: 0xa855f7, // purple-500
            wireframe: true,
            transparent: true,
            opacity: 0.15,
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // 2. Particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles in a wider area
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
        );

        // Create a texture for particles (optional, but simple circle is better than square)
        // For now using simple points
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            color: 0xec4899, // pink-500
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Mouse
        let mouseX = 0;
        let mouseY = 0;

        // Animation
        let frameId: number;
        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            // Rotate sphere
            sphere.rotation.y = elapsedTime * 0.1;
            sphere.rotation.x = elapsedTime * 0.05;

            // Rotate particles based on mouse
            // Smooth interpolation could be added here
            particlesMesh.rotation.y = mouseY * 0.2 + elapsedTime * 0.05;
            particlesMesh.rotation.x = mouseX * 0.2;

            // Pulse effect scale
            // sphere.scale.setScalar(1 + Math.sin(elapsedTime * 0.5) * 0.05);

            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
        };

        animate();

        // Event Listeners
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX / window.innerWidth - 0.5;
            mouseY = event.clientY / window.innerHeight - 0.5;
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

            geometry.dispose();
            material.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0 opacity-60 mix-blend-screen"
        />
    );
};

export default HeroBackground;
