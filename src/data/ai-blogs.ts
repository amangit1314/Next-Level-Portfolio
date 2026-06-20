// Hardcoded AI blog metadata
// These merge with Sanity CMS blogs as featured AI entries

export interface AIBlog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  category: string;
  tags: string[];
  coverImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  author: string;
  authorImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  readingTime: number;
  featured: boolean;
  publishedAt: string;
  _isHardcoded?: boolean;
  _isStaticPage?: boolean;
}

export const aiBlogs: AIBlog[] = [
  {
    _id: "ai-blog-docvision",
    title: "Building a Document Extraction Agent with Visual Grounding",
    slug: { current: "doc-extraction-agent-visual-grounding" },
    excerpt:
      "How I built a production-grade document extraction agent that combines multimodal LLMs with bounding-box visual grounding to achieve 94.7% accuracy on complex unstructured documents.",
    category: "ai-agents",
    tags: ["Vertex AI", "Visual Grounding", "Document AI", "LangChain", "Pydantic", "Agentic AI"],
    coverImage: {
      asset: {
        _id: "docvision-cover",
        url: "/images/docvision.png",
      },
    },
    author: "Aman Soni",
    readingTime: 12,
    featured: true,
    publishedAt: "2025-11-15T09:00:00Z",
    _isHardcoded: true,
    _isStaticPage: true,
  },
  {
    _id: "ai-blog-npa-pipeline",
    title: "Automating NPA Notice Extraction with Scrapling, Pydantic & Vertex AI",
    slug: { current: "npa-extraction-pipeline-scrapling-vertex-ai" },
    excerpt:
      "A deep dive into building an automated pipeline that scrapes NPA notices daily, extracts structured financial data using Vertex AI, and validates everything with Pydantic schemas.",
    category: "ai-agents",
    tags: ["Scrapling", "Vertex AI", "Pydantic", "Cron Jobs", "Web Scraping", "Data Pipeline"],
    coverImage: {
      asset: {
        _id: "npa-pipeline-cover",
        url: "/images/npa-pipeline.png",
      },
    },
    author: "Aman Soni",
    readingTime: 10,
    featured: true,
    publishedAt: "2025-12-02T09:00:00Z",
    _isHardcoded: true,
    _isStaticPage: true,
  },
  {
    _id: "ai-blog-templateforge",
    title: "Intelligent Template Generation: From Raw Backend Data to Production Documents",
    slug: { current: "intelligent-template-generation-from-backend-data" },
    excerpt:
      "How I designed an AI-powered document generation system that automatically maps backend data to templates and produces pixel-perfect PDFs — eliminating 40 hours of manual work per week.",
    category: "ai-agents",
    tags: ["Template Engine", "Vertex AI", "PDF Generation", "FastAPI", "Next.js", "Automation"],
    coverImage: {
      asset: {
        _id: "templateforge-cover",
        url: "/images/templateforge.png",
      },
    },
    author: "Aman Soni",
    readingTime: 9,
    featured: false,
    publishedAt: "2026-01-20T09:00:00Z",
    _isHardcoded: true,
    _isStaticPage: true,
  },
];
