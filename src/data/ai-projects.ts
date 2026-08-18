// Hardcoded AI/Agentic project data
// These merge with Sanity CMS projects as featured AI entries

export interface AIProject {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: {
    asset: {
      url: string;
    };
  };
  link?: string;
  code?: string;
  duration?: string;
  role?: string;
  achievements?: string[];
  isAI: boolean;
  playgroundUrl?: string;
  architectureDiagram?: {
    asset: {
      url: string;
    };
  };
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  // Local-only fields
  _isHardcoded?: boolean;
  blogSlug?: string;
  // Set true to keep an entry in this file (data intact) but exclude it from
  // every page that renders `aiProjects` — e.g. NDA-sensitive work.
  hidden?: boolean;
}

export const aiProjects: AIProject[] = [
  {
    _id: "ai-project-docvision",
    title: "DocVision AI — Document Extraction Agent with Visual Grounding",
    description:
      "An intelligent document extraction agent that uses multimodal LLMs with visual grounding to parse complex documents. The system identifies and extracts structured data from invoices, contracts, and forms by combining OCR with bounding-box-level visual understanding — achieving near-human accuracy on unstructured layouts.",
    technologies: [
      "Python",
      "Vertex AI",
      "Gemini Pro Vision",
      "LangChain",
      "Pydantic",
      "FastAPI",
      "Google Cloud",
      "Docker",
    ],
    duration: "3 months",
    role: "Lead AI Engineer",
    achievements: [
      "Achieved 94.7% field-level extraction accuracy on complex multi-page invoices",
      "Reduced manual document processing time by 85% across 12 document types",
      "Built visual grounding pipeline that maps extracted fields to exact bounding boxes on page",
      "Integrated confidence scoring to auto-route low-confidence extractions for human review",
      "Processed 50K+ documents in production with <2s average latency per page",
    ],
    isAI: true,
    image: {
      asset: {
        url: "/images/docvision.png",
      },
    },
    metrics: [
      { label: "Accuracy", value: "94.7%" },
      { label: "Latency", value: "<2s/page" },
      { label: "Docs Processed", value: "50K+" },
      { label: "Time Saved", value: "85%" },
    ],
    _isHardcoded: true,
    blogSlug: "doc-extraction-agent-visual-grounding",
  },
  {
    _id: "ai-project-npa-intel",
    title: "NPA Intel Pipeline — Automated Notice Extraction & Monitoring",
    description:
      "A production-grade agentic pipeline that scrapes NPA (Non-Performing Asset) web notices daily, extracts structured financial data using Vertex AI, validates it with Pydantic schemas, and stores results for downstream analytics. Runs as an automated cron job at 9 AM IST with zero manual intervention.",
    technologies: [
      "Python",
      "Scrapling",
      "Vertex AI",
      "Pydantic",
      "Google Cloud Scheduler",
      "BigQuery",
      "Cloud Functions",
      "PostgreSQL",
    ],
    duration: "2 months",
    role: "AI Engineer & Architect",
    achievements: [
      "Automated monitoring of 200+ NPA notice sources with daily 9AM cron execution",
      "Built resilient scraping layer using Scrapling with automatic retry and proxy rotation",
      "Structured extraction pipeline with Pydantic validation catches 99.2% of data anomalies",
      "Reduced compliance team manual review effort by 70% through automated categorization",
      "Zero downtime over 6 months of continuous production operation",
    ],
    isAI: true,
    image: {
      asset: {
        url: "/images/npa-pipeline.png",
      },
    },
    metrics: [
      { label: "Sources", value: "200+" },
      { label: "Validation", value: "99.2%" },
      { label: "Uptime", value: "100%" },
      { label: "Effort Saved", value: "70%" },
    ],
    _isHardcoded: true,
    blogSlug: "npa-extraction-pipeline-scrapling-vertex-ai",
    // NDA risk — keep the data here but don't render it anywhere for now.
    hidden: true,
  },
  {
    _id: "ai-project-templateforge",
    title: "TemplateForge AI — Intelligent Document Template Generation",
    description:
      "An AI-powered document generation system that takes raw backend data and produces perfectly formatted documents from dynamic templates. Uses LLM-driven field mapping to automatically match data fields to template placeholders, supporting complex conditional logic, tables, and multi-format output (PDF, DOCX, HTML).",
    technologies: [
      "Python",
      "Vertex AI",
      "Jinja2",
      "WeasyPrint",
      "FastAPI",
      "React",
      "Next.js",
      "PostgreSQL",
    ],
    duration: "2.5 months",
    role: "Full-Stack AI Engineer",
    achievements: [
      "Built dynamic template engine supporting 25+ document types with conditional rendering",
      "LLM-powered field mapping achieves 97% auto-match accuracy on new data schemas",
      "Generates production-ready PDFs in under 3 seconds with pixel-perfect formatting",
      "Integrated approval workflow with version tracking and audit trail",
      "Saved 40 engineering hours per week by eliminating manual document assembly",
    ],
    isAI: true,
    image: {
      asset: {
        url: "/images/templateforge.png",
      },
    },
    metrics: [
      { label: "Templates", value: "25+" },
      { label: "Auto-Match", value: "97%" },
      { label: "Gen Time", value: "<3s" },
      { label: "Hours Saved", value: "40/wk" },
    ],
    _isHardcoded: true,
    blogSlug: "intelligent-template-generation-from-backend-data",
  },
];
