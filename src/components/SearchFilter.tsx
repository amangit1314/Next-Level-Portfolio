"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiFilter, FiChevronDown, FiCheck } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";

interface SearchFilterProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    categories?: string[];
    options?: { value: string; label: string }[];
    placeholder?: string;
    className?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    options,
    placeholder = "Search...",
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Normalize options
    const filterOptions = options || [
        { value: "All", label: "All Categories" },
        ...(categories?.map((cat) => ({ value: cat, label: cat })) || []),
    ];

    const currentLabel = filterOptions.find((opt) => opt.value === selectedCategory)?.label || selectedCategory;

    return (
        <div className={`flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto mb-12 px-4 ${className}`}>
            {/* Search Input */}
            <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <FiSearch className="h-5 w-5 text-theme-text-muted group-focus-within:text-theme-primary transition-colors duration-300" />
                </div>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`block w-full pl-11 pr-4 py-4
            bg-theme-bg-secondary/30 backdrop-blur-xl border border-theme-border 
            rounded-xl text-theme-text-primary placeholder-theme-text-muted
            focus:bg-theme-bg-secondary focus:ring-1 focus:ring-theme-primary/50 focus:border-theme-primary/50
            transition-all duration-300 outline-hidden ${inter.className}`}
                    placeholder={placeholder}
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-theme-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Custom Dropdown */}
            <div className="relative min-w-[220px]" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative w-full text-left pl-11 pr-10 py-4
            bg-theme-bg-secondary/30 backdrop-blur-xl border border-theme-border 
            rounded-xl text-theme-text-primary 
            hover:border-theme-primary/50 hover:bg-theme-bg-secondary/50
            focus:outline-none focus:ring-1 focus:ring-theme-primary/50
            transition-all duration-300 cursor-pointer group ${inter.className}`}
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiFilter className="h-5 w-5 text-theme-text-muted group-hover:text-theme-primary transition-colors duration-300" />
                    </div>

                    <span className="block truncate">{currentLabel}</span>

                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <FiChevronDown
                            className={`h-4 w-4 text-theme-text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                    </div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-50 w-full mt-2 max-h-60 overflow-y-auto 
                    bg-theme-bg-secondary/95 backdrop-blur-2xl border border-theme-border 
                    rounded-xl shadow-2xl no-scrollbar"
                        >
                            <div className="p-1">
                                {filterOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => {
                                            setSelectedCategory(opt.value);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-between
                                    ${selectedCategory === opt.value
                                                ? "bg-theme-primary/10 text-theme-primary font-medium"
                                                : "text-theme-text-secondary hover:bg-theme-bg-tertiary hover:text-theme-text-primary"
                                            } ${inter.className}`}
                                    >
                                        <span>{opt.label}</span>
                                        {selectedCategory === opt.value && (
                                            <FiCheck className="w-4 h-4" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SearchFilter;
