"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { blogBySlugQuery } from "@/sanity/lib/queries";
import { anton, inter, jetbrainsMono } from "@/lib/fonts";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { BlogPostSkeleton } from "@/components/skeletons/BlogPostSkeleton";
import { useProfile } from "@/hooks/useSanityQuery";

interface BlogPost {
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
  content: any[];
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

const BlogPostPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { data: profile } = useProfile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogData = await client.fetch(blogBySlugQuery, { slug });
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
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
        <div className="relative w-full h-96 my-8 rounded-none overflow-hidden border border-theme-border">
          <Image
            src={value.asset.url}
            alt={value.alt || value.caption || "Blog image"}
            fill
            className="object-cover"
          />
          {value.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-theme-bg-primary/80 backdrop-blur-sm p-3">
              <p
                className={`text-sm text-theme-text-secondary text-center ${inter.className}`}
              >
                {value.caption}
              </p>
            </div>
          )}
        </div>
      ),
      code: ({ value }: any) => (
        <div className="relative my-6 group">
          <div className="flex items-center justify-between bg-theme-bg-secondary px-4 py-2 border-b border-theme-border">
            <span
              className={`text-sm text-theme-text-muted ${jetbrainsMono.className}`}
            >
              {value.language || "code"}
            </span>
            <button
              onClick={() => handleCopyCode(value.code)}
              className={`px-3 py-1 text-xs bg-theme-bg-tertiary hover:bg-theme-bg-hover text-theme-text-secondary rounded-none transition-colors ${jetbrainsMono.className}`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre
            className={`bg-theme-bg-primary p-4 overflow-x-auto ${jetbrainsMono.className}`}
          >
            <code className="text-sm text-theme-text-secondary">
              {value.code}
            </code>
          </pre>
        </div>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1
          className={`text-4xl uppercase leading-none text-theme-text-primary mb-6 mt-12 ${anton.className}`}
        >
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2
          className={`text-3xl uppercase leading-none text-theme-text-primary mb-5 mt-10 ${anton.className}`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3
          className={`text-2xl uppercase leading-none text-theme-text-primary mb-4 mt-8 ${anton.className}`}
        >
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4
          className={`text-xl uppercase leading-none text-theme-text-primary mb-3 mt-6 ${anton.className}`}
        >
          {children}
        </h4>
      ),
      normal: ({ children }: any) => (
        <p
          className={`text-theme-text-secondary text-lg leading-relaxed mb-6 ${inter.className}`}
        >
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-theme-primary pl-6 my-6 italic">
          <p className={`text-theme-text-muted text-lg ${inter.className}`}>
            {children}
          </p>
        </blockquote>
      ),
    },
    marks: {
      code: ({ children }: any) => (
        <code
          className={`px-2 py-1 bg-theme-bg-secondary text-theme-primary rounded text-sm ${jetbrainsMono.className}`}
        >
          {children}
        </code>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-theme-primary hover:text-theme-primary-light underline"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => (
        <strong className="font-bold text-theme-text-primary">
          {children}
        </strong>
      ),
      em: ({ children }: any) => <em className="italic">{children}</em>,
    },
    list: {
      bullet: ({ children }: any) => (
        <ul
          className={`list-disc list-inside space-y-2 mb-6 text-theme-text-secondary ${inter.className}`}
        >
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol
          className={`list-decimal list-inside space-y-2 mb-6 text-theme-text-secondary ${inter.className}`}
        >
          {children}
        </ol>
      ),
    },
  };

  if (loading) {
    return (
      <>
        <BlogPostSkeleton />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <div className="min-h-screen bg-theme-bg-primary flex flex-col items-center justify-center pt-20">
          <h1
            className={`text-4xl uppercase leading-none text-theme-text-primary mb-4 ${anton.className}`}
          >
            Blog post not found
          </h1>
          <Link
            href="/blogs"
            className={`text-theme-primary hover:text-theme-primary-light flex items-center gap-2 ${inter.className}`}
          >
            <FiArrowLeft /> Back to Blogs
          </Link>
        </div>
      </>
    );
  }

  const authorName = blog.author || profile?.name || "Anonymous";
  const authorImageUrl =
    blog.authorImage?.asset?.url || profile?.profileImage?.asset?.url;

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80 pt-20">
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          <div className="absolute inset-0 bg-theme-bg-primary/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
          {/* Back Button */}
          <Link
            href="/blogs"
            className={`inline-flex items-center gap-2 uppercase tracking-wide text-theme-primary hover:text-theme-primary-light mb-8 transition-colors ${jetbrainsMono.className}`}
          >
            <FiArrowLeft /> Back to Blogs
          </Link>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 text-xs bg-theme-primary/10 border border-theme-primary/30 text-theme-primary rounded-none uppercase ${jetbrainsMono.className}`}
              >
                {blog.category?.replace("-", " ")}
              </span>
              {blog.featured && (
                <span
                  className={`px-3 py-1 rounded-none text-xs font-bold text-theme-bg-primary theme-gradient-accent uppercase ${jetbrainsMono.className}`}
                >
                  Featured
                </span>
              )}
            </div>

            <h1
              className={`text-4xl md:text-5xl uppercase leading-none text-theme-text-primary mb-6 ${anton.className}`}
            >
              {blog.title}
            </h1>

            <p
              className={`text-xl text-theme-text-secondary mb-8 ${inter.className}`}
            >
              {blog.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-theme-border">
              {/* Author */}
              <div className="flex items-center gap-3">
                {authorImageUrl && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-theme-border-light">
                    <Image
                      src={authorImageUrl}
                      alt={authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <FiUser className="w-4 h-4 text-theme-text-muted" />
                    <span
                      className={`text-theme-text-secondary ${jetbrainsMono.className}`}
                    >
                      {authorName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-theme-text-muted">
                <FiCalendar className="w-4 h-4" />
                <span className={inter.className}>
                  {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Reading Time */}
              {blog.readingTime && (
                <div className="flex items-center gap-2 text-sm text-theme-text-muted">
                  <FiClock className="w-4 h-4" />
                  <span className={inter.className}>
                    {blog.readingTime} min read
                  </span>
                </div>
              )}
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm bg-theme-bg-secondary text-theme-text-secondary rounded-none border border-theme-border ${inter.className}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Cover Image */}
          {blog.coverImage?.asset?.url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-96 rounded-none overflow-hidden mb-12 border border-theme-border"
            >
              <Image
                src={blog.coverImage.asset.url}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Blog Content */}
          {blog.content && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none mb-12"
            >
              <PortableText
                value={blog.content}
                components={portableTextComponents}
              />
            </motion.article>
          )}

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 bg-theme-bg-secondary/40 rounded-none border border-theme-primary/20"
          >
            <h3
              className={`text-2xl uppercase leading-none text-theme-text-primary mb-4 ${anton.className}`}
            >
              Enjoyed this article?
            </h3>
            <p className={`text-theme-text-secondary mb-6 ${inter.className}`}>
              Check out more of my blog posts and tutorials.
            </p>
            <Link
              href="/blogs"
              className={`inline-flex items-center gap-2 px-6 py-3 theme-gradient-accent text-theme-bg-primary rounded-none font-medium hover:opacity-90 transition-all shadow-lg uppercase tracking-wide ${jetbrainsMono.className}`}
            >
              <FiArrowLeft className="rotate-180" />
              Read More Blogs
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
