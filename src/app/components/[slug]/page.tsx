"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowLeft, FiPackage, FiCalendar } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { componentBySlugQuery } from "@/sanity/lib/queries";
import { unbounded, inter, jetbrainsMono } from "@/lib/fonts";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

interface ComponentDetail {
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
    previewCode?: {
        code: string;
        language: string;
    };
    content: any[];
    dependencies?: string[];
    difficulty: string;
    liveDemo?: string;
    codeRepository?: string;
    publishedAt: string;
}

const difficultyColors = {
    beginner: "from-green-500 to-emerald-500",
    intermediate: "from-yellow-500 to-orange-500",
    advanced: "from-red-500 to-pink-500",
};

const ComponentDetailPage = () => {
    const params = useParams();
    const slug = params?.slug as string;
    const [component, setComponent] = useState<ComponentDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchComponent = async () => {
            try {
                const data = await client.fetch(componentBySlugQuery, { slug });
                setComponent(data);
            } catch (error) {
                console.error("Error fetching component:", error);
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchComponent();
        }
    }, [slug]);

    const handleCopyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Portable Text components for rich content
    const portableTextComponents = {
        types: {
            image: ({ value }: any) => (
                <div className="relative w-full h-96 my-8 rounded-xl overflow-hidden">
                    <Image
                        src={value.asset.url}
                        alt={value.alt || "Component image"}
                        fill
                        className="object-cover"
                    />
                </div>
            ),
            code: ({ value }: any) => (
                <div className="relative my-6 group">
                    <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 rounded-t-xl border-b border-zinc-800">
                        <span className={`text-sm text-zinc-400 ${unbounded.className}`}>
                            {value.language || "code"}
                        </span>
                        <button
                            onClick={() => handleCopyCode(value.code)}
                            className={`px-3 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md transition-colors ${unbounded.className}`}
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <pre className={`bg-zinc-950 p-4 rounded-b-xl overflow-x-auto ${jetbrainsMono.className}`}>
                        <code className="text-sm text-zinc-300">{value.code}</code>
                    </pre>
                </div>
            ),
        },
        block: {
            h1: ({ children }: any) => (
                <h1 className={`text-4xl font-bold text-white mb-6 mt-12 ${unbounded.className}`}>
                    {children}
                </h1>
            ),
            h2: ({ children }: any) => (
                <h2 className={`text-3xl font-bold text-white mb-5 mt-10 ${unbounded.className}`}>
                    {children}
                </h2>
            ),
            h3: ({ children }: any) => (
                <h3 className={`text-2xl font-bold text-white mb-4 mt-8 ${unbounded.className}`}>
                    {children}
                </h3>
            ),
            normal: ({ children }: any) => (
                <p className={`text-zinc-300 leading-relaxed mb-4 ${inter.className}`}>
                    {children}
                </p>
            ),
        },
        marks: {
            code: ({ children }: any) => (
                <code className={`px-2 py-1 bg-zinc-900 text-purple-400 rounded text-sm ${jetbrainsMono.className}`}>
                    {children}
                </code>
            ),
            link: ({ children, value }: any) => (
                <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                >
                    {children}
                </a>
            ),
        },
    };

    if (loading) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-black flex items-center justify-center pt-20">
                    <div className="text-white text-xl">Loading component...</div>
                </div>
            </>
        );
    }

    if (!component) {
        return (
            <>
                <Header />
                <div className="min-h-screen bg-black flex flex-col items-center justify-center pt-20">
                    <h1 className={`text-4xl font-bold text-white mb-4 ${unbounded.className}`}>
                        Component not found
                    </h1>
                    <Link
                        href="/components"
                        className={`text-purple-400 hover:text-purple-300 flex items-center gap-2 ${inter.className}`}
                    >
                        <FiArrowLeft /> Back to Components
                    </Link>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-purple-950/20 pt-20">
                {/* Background Effects */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
                    {/* Back Button */}
                    <Link
                        href="/components"
                        className={`inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors ${unbounded.className}`}
                    >
                        <FiArrowLeft /> Back to Components
                    </Link>

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className={`px-3 py-1 text-xs bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-full uppercase ${unbounded.className}`}>
                                {component.category}
                            </span>
                            {component.difficulty && (
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${difficultyColors[component.difficulty as keyof typeof difficultyColors] ||
                                        "from-zinc-500 to-zinc-600"
                                        } capitalize ${unbounded.className}`}
                                >
                                    {component.difficulty}
                                </span>
                            )}
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <FiCalendar className="w-4 h-4" />
                                <span className={inter.className}>
                                    {new Date(component.publishedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </span>
                            </div>
                        </div>

                        <h1 className={`text-4xl md:text-5xl font-black text-white mb-6 ${unbounded.className}`}>
                            {component.title}
                        </h1>

                        <p className={`text-xl text-zinc-300 mb-8 ${inter.className}`}>
                            {component.description}
                        </p>

                        {/* Tags */}
                        {component.tags && component.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-8">
                                {component.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`px-3 py-1 text-sm bg-zinc-900/80 text-zinc-300 rounded-lg border border-zinc-800 ${inter.className}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {component.liveDemo && (
                                <a
                                    href={component.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 ${unbounded.className}`}
                                >
                                    <FiExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            )}
                            {component.codeRepository && (
                                <a
                                    href={component.codeRepository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all border border-zinc-800 ${unbounded.className}`}
                                >
                                    <FiGithub className="w-4 h-4" />
                                    View Code
                                </a>
                            )}
                        </div>
                    </motion.div>

                    {/* Preview Image */}
                    {component.previewImage?.asset?.url && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 border border-zinc-800"
                        >
                            <Image
                                src={component.previewImage.asset.url}
                                alt={component.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Dependencies */}
                    {component.dependencies && component.dependencies.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mb-12 p-6 bg-zinc-900/80 rounded-2xl border border-zinc-800"
                        >
                            <h2 className={`text-xl font-bold text-white mb-4 flex items-center gap-2 ${unbounded.className}`}>
                                <FiPackage className="w-5 h-5 text-purple-400" />
                                Dependencies
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {component.dependencies.map((dep, idx) => (
                                    <code
                                        key={idx}
                                        className={`px-3 py-1 bg-zinc-950 text-purple-400 rounded-lg text-sm ${jetbrainsMono.className}`}
                                    >
                                        {dep}
                                    </code>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Preview Code */}
                    {component.previewCode && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-12"
                        >
                            <div className="flex items-center justify-between bg-zinc-900 px-4 py-3 rounded-t-xl border-b border-zinc-800">
                                <h2 className={`text-lg font-bold text-white ${unbounded.className}`}>
                                    Component Code
                                </h2>
                                <button
                                    onClick={() => handleCopyCode(component.previewCode!.code)}
                                    className={`px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors ${unbounded.className}`}
                                >
                                    {copied ? "Copied!" : "Copy Code"}
                                </button>
                            </div>
                            <pre className={`bg-zinc-950 p-6 rounded-b-xl overflow-x-auto ${jetbrainsMono.className}`}>
                                <code className="text-sm text-zinc-300">{component.previewCode.code}</code>
                            </pre>
                        </motion.div>
                    )}

                    {/* Blog Content */}
                    {component.content && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="prose prose-invert prose-lg max-w-none mb-12"
                        >
                            <PortableText
                                value={component.content}
                                components={portableTextComponents}
                            />
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ComponentDetailPage;
