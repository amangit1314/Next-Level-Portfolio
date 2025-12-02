"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiSearch, FiFilter } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { componentsQuery } from "@/sanity/lib/queries";
import { unbounded, inter } from "@/lib/fonts";
import Header from "@/components/Header";

interface Component {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    description: string;
    category: string;
    tags: string[];
    previewImage: {
        asset: {
            _id: string;
            url: string;
        };
    };
    difficulty: string;
    publishedAt: string;
}

const categories = [
    { value: "all", label: "All Components" },
    { value: "buttons", label: "Buttons" },
    { value: "forms", label: "Forms" },
    { value: "cards", label: "Cards" },
    { value: "navigation", label: "Navigation" },
    { value: "modals", label: "Modals" },
    { value: "animations", label: "Animations" },
    { value: "layout", label: "Layout" },
    { value: "data-display", label: "Data Display" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
];

const difficultyColors = {
    beginner: "from-green-500 to-emerald-500",
    intermediate: "from-yellow-500 to-orange-500",
    advanced: "from-red-500 to-pink-500",
};

const ComponentsPage = () => {
    const [components, setComponents] = useState<Component[]>([]);
    const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const containerRef = useRef<HTMLElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const { scrollYProgress } = useScroll({
        // target: isMounted ? containerRef : undefined,
        offset: ["start end", "end start"],
    });

    const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    // Fetch components from Sanity
    useEffect(() => {
        const fetchComponents = async () => {
            try {
                const data = await client.fetch(componentsQuery);
                setComponents(data);
                setFilteredComponents(data);
            } catch (error) {
                console.error("Error fetching components:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, []);

    // Filter components
    useEffect(() => {
        let filtered = components;

        if (selectedCategory !== "all") {
            filtered = filtered.filter((comp) => comp.category === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(
                (comp) =>
                    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    comp.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        setFilteredComponents(filtered);
    }, [selectedCategory, searchQuery, components]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                    <div className="text-white text-xl">Loading components...</div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <section
                ref={containerRef}
                className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-purple-950/20"
            >
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        style={{ y: bgY1 }}
                        className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
                    />
                    <motion.div
                        style={{ y: bgY2 }}
                        className="absolute bottom-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <p className={`text-sm font-mono text-purple-400 ${unbounded.className}`}>
                                Component Library
                            </p>
                        </motion.div>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 ${unbounded.className}`}>
                            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                                UI Components
                            </span>
                        </h1>

                        <p className={`text-xl text-neutral-300 max-w-3xl mx-auto mb-12 ${inter.className}`}>
                            A collection of beautifully crafted, reusable React components. Copy, paste, and customize to build your next project faster.
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                            {/* Search */}
                            <div className="flex-1 relative">
                                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                <input
                                    type="text"
                                    placeholder="Search components..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full pl-12 pr-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-all ${inter.className}`}
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="relative">
                                <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className={`pl-12 pr-8 py-3 bg-zinc-900/80 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all cursor-pointer appearance-none ${inter.className}`}
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.value} value={cat.value}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Results Count */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`mt-6 text-sm text-zinc-500 ${inter.className}`}
                        >
                            Showing {filteredComponents.length} of {components.length} components
                        </motion.p>
                    </motion.div>

                    {/* Components Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredComponents.length === 0 ? (
                            <div className="col-span-full text-center py-20">
                                <p className={`text-xl text-zinc-400 ${inter.className}`}>
                                    No components found. Try adjusting your filters.
                                </p>
                            </div>
                        ) : (
                            filteredComponents.map((component) => (
                                <motion.div
                                    key={component._id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="group"
                                >
                                    <Link href={`/components/${component.slug.current}`}>
                                        <div className="relative bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800/70 hover:border-purple-500/50 transition-all duration-500 overflow-hidden h-full">
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Preview Image */}
                                            <div className="relative h-48 overflow-hidden bg-zinc-950">
                                                {component.previewImage?.asset?.url && (
                                                    <Image
                                                        src={component.previewImage.asset.url}
                                                        alt={component.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />

                                                {/* Difficulty Badge */}
                                                {component.difficulty && (
                                                    <div className="absolute top-3 right-3">
                                                        <div
                                                            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${difficultyColors[component.difficulty as keyof typeof difficultyColors] ||
                                                                "from-zinc-500 to-zinc-600"
                                                                } capitalize ${unbounded.className}`}
                                                        >
                                                            {component.difficulty}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                                                    <span className={`text-xs text-purple-400 uppercase tracking-wider ${unbounded.className}`}>
                                                        {component.category}
                                                    </span>
                                                </div>

                                                <h3
                                                    className={`text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all ${unbounded.className}`}
                                                >
                                                    {component.title}
                                                </h3>

                                                <p className={`text-zinc-400 text-sm line-clamp-2 ${inter.className}`}>
                                                    {component.description}
                                                </p>

                                                {/* Tags */}
                                                {component.tags && component.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {component.tags.slice(0, 3).map((tag, idx) => (
                                                            <span
                                                                key={idx}
                                                                className={`px-2 py-1 text-xs bg-zinc-800/80 text-zinc-300 rounded-md ${inter.className}`}
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {component.tags.length > 3 && (
                                                            <span className={`px-2 py-1 text-xs text-zinc-500 ${inter.className}`}>
                                                                +{component.tags.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                                {/* View Details */}
                                                <div className="pt-4">
                                                    <div className={`inline-flex items-center gap-2 text-sm text-purple-400 group-hover:text-purple-300 transition-colors ${unbounded.className}`}>
                                                        <span>View Details</span>
                                                        <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ComponentsPage;
