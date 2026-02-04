"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiCalendar,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { blogsQuery } from "@/sanity/lib/queries";
import { unbounded, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import { BlogCardSkeleton } from "@/components/skeletons/BlogCardSkeleton";
import SearchFilter from "@/components/SearchFilter";

interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  author?: string;
  authorImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  readingTime?: number;
  featured: boolean;
  publishedAt: string;
}

const categories = [
  { value: "all", label: "All Posts" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-development", label: "Mobile Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "devops", label: "DevOps" },
  { value: "career-tips", label: "Career & Tips" },
  { value: "tutorials", label: "Tutorials" },
  { value: "tech-news", label: "Tech News" },
  { value: "tools-resources", label: "Tools & Resources" },
  { value: "other", label: "Other" },
];

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(blogsQuery);
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.tags?.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchQuery, blogs]);

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
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-linear-to-br bg-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center max-w-5xl w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[...Array(6)].map((_, i) => (
                  <BlogCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const featuredBlogs = filteredBlogs.filter((blog) => blog.featured);
  const regularBlogs = filteredBlogs.filter((blog) => !blog.featured);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section
        ref={containerRef}
        className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-linear-to-br bg-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: bgY1 }}
            className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: bgY2 }}
            className="absolute bottom-1/3 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          <div className="absolute inset-0 bg-theme-bg-primary/40" />
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
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-theme-border-light bg-theme-bg-tertiary/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
              </span>
              <p
                className={`text-sm font-mono text-theme-primary ${unbounded.className}`}
              >
                Blog & Articles
              </p>
            </motion.div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black text-theme-text-primary mb-6 ${unbounded.className}`}
            >
              <span className="theme-text-gradient bg-clip-text">
                Latest Blogs
              </span>
            </h1>

            <p
              className={`text-xl text-theme-text-secondary max-w-3xl mx-auto mb-12 ${inter.className}`}
            >
              Thoughts, tutorials, and insights on web development, design, and
              technology.
            </p>

            {/* Search and Filter */}
            <SearchFilter
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              options={categories}
              placeholder="Search blogs..."
            />

            {/* Results Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`mt-6 text-sm text-theme-text-muted ${inter.className}`}
            >
              Showing {filteredBlogs.length} of {blogs.length} posts
            </motion.p>
          </motion.div>

          {/* Featured Blogs */}
          {featuredBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <h2
                className={`text-2xl font-bold text-theme-text-primary mb-6 flex items-center gap-3 ${unbounded.className}`}
              >
                <span className="text-theme-primary">★</span> Featured Posts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredBlogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} featured />
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Blogs Grid */}
          <div className="flex justify-center items-center max-w-5xl w-ful mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularBlogs.length === 0 && featuredBlogs.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <p
                    className={`text-xl text-theme-text-muted ${inter.className}`}
                  >
                    No blogs found. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                regularBlogs.map((blog) => (
                  <motion.div key={blog._id} variants={itemVariants}>
                    <BlogCard blog={blog} />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsPage;

// Blog Card Component
interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, featured = false }) => {
  return (
    <Link href={`/blogs/${blog.slug.current}`}>
      <div
        className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-theme-bg-secondary/90 via-theme-bg-secondary/50 to-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border hover:border-theme-primary/50 transition-all duration-500 h-full"
        style={{
          background: `
                  radial-gradient(
                    600px circle at var(--mouse-x) var(--mouse-y),
                    rgba(var(--theme-primary-rgb), 0.06),
                    transparent 40%
                  ),
                  linear-gradient(135deg, rgba(var(--theme-bg-rgb), 0.9) 0%, rgba(var(--theme-bg-rgb), 0.7) 100%)
                `,
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-[-2px] bg-gradient-to-r from-theme-primary via-transparent to-theme-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
        </div>

        {/* Cover Image */}
        <div
          className={`relative ${featured ? "h-64" : "h-48"
            } overflow-hidden bg-theme-bg-primary`}
        >
          {blog.coverImage?.asset?.url && (
            <Image
              src={blog.coverImage.asset.url}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/90 to-transparent" />

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 right-3">
              <div
                className={`px-3 py-1 rounded-full text-xs font-bold text-theme-text-primary theme-gradient-accent ${unbounded.className}`}
              >
                Featured
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-gradient-to-r from-theme-primary to-transparent" />
            <span
              className={`text-xs text-theme-primary uppercase tracking-wider ${unbounded.className}`}
            >
              {blog.category?.replace("-", " ")}
            </span>
          </div>

          <h3
            className={`${featured ? "text-2xl" : "text-xl"
              } font-bold text-theme-text-primary group-hover:text-transparent group-hover:theme-text-gradient group-hover:bg-clip-text transition-all line-clamp-2 ${unbounded.className}`}
          >
            {blog.title}
          </h3>

          <p
            className={`text-theme-text-secondary text-sm line-clamp-2 ${inter.className}`}
          >
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 pt-2 text-xs text-theme-text-muted">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              <span className={inter.className}>
                {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            {blog.readingTime && (
              <div className="flex items-center gap-1">
                <FiClock className="w-3 h-3" />
                <span className={inter.className}>
                  {blog.readingTime} min read
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {blog.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 text-xs bg-theme-bg-tertiary/80 text-theme-text-secondary rounded-md ${inter.className}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
