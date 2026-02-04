"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 z-50 origin-[0%]"
            style={{
                scaleX,
                background: "linear-gradient(to right, #8B5CF6, #EC4899, #3B82F6)",
            }}
        />
    );
};

export default ScrollProgress;
