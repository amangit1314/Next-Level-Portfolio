import type { Metadata } from "next";
import BlogArticleLayout from "../_components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Automating NPA Notice Extraction with Scrapling, Pydantic & Vertex AI",
  description:
    "A deep dive into building an automated pipeline that scrapes NPA notices daily at 9 AM, extracts structured financial data using Vertex AI, and validates with Pydantic schemas.",
  keywords: [
    "NPA Notice Extraction",
    "Scrapling",
    "Vertex AI",
    "Pydantic",
    "Web Scraping",
    "Data Pipeline",
    "Aman Soni",
    "Cron Job Automation",
  ],
  openGraph: {
    title: "Automating NPA Notice Extraction with Scrapling, Pydantic & Vertex AI",
    description:
      "Building a zero-touch pipeline for daily NPA notice monitoring, extraction, and validation.",
    type: "article",
    publishedTime: "2025-12-02T09:00:00Z",
    authors: ["Aman Soni"],
  },
};

const sections = [
  {
    title: "Why Automate NPA Notice Monitoring?",
    content: `Non-Performing Asset (NPA) notices are published across hundreds of bank websites, regulatory portals, and legal notice boards. Financial institutions and compliance teams need to monitor these notices daily to track distressed assets, upcoming auctions, and regulatory actions.

The manual process was brutal — a team of 4 analysts spent their mornings clicking through 200+ sources, copying notice details into spreadsheets, and categorizing them. Error rates were high, coverage was incomplete, and the team was perpetually behind.

The mandate: build a fully automated pipeline that runs at **9 AM IST every day**, scrapes all sources, extracts structured data, validates it, and delivers clean, categorized results to the analytics dashboard — with zero human intervention.`,
  },
  {
    title: "Architecture: The Four-Stage Pipeline",
    content: `The pipeline follows a clear four-stage design:

**Stage 1 — Source Discovery & Scraping (Scrapling)**
Scrapling handles the heavy lifting of web scraping. Unlike traditional scrapers, Scrapling provides resilient selectors that survive minor DOM changes across website redesigns. We configure 200+ source definitions — each specifying the target URL pattern, pagination logic, and content selectors.

**Stage 2 — Raw Content Extraction**
Raw HTML content is cleaned and normalized. Each notice is isolated as a text block with metadata (source URL, scrape timestamp, page context). Tables are extracted separately and converted to structured rows.

**Stage 3 — Structured Extraction (Vertex AI)**
Each raw notice text is sent to Vertex AI's Gemini model with a schema-aware prompt. The model extracts fields like property description, reserve price, auction date, bank name, borrower details, and notice type into a strict Pydantic schema.

**Stage 4 — Validation, Dedup & Storage**
Pydantic validators catch format errors, missing fields, and logical inconsistencies. A deduplication layer compares new notices against existing records using fuzzy matching on key fields. Clean data is stored in PostgreSQL and synced to BigQuery for analytics.`,
  },
  {
    title: "Scrapling: Why Not Selenium or Playwright?",
    content: `Choosing Scrapling over traditional browser automation tools was a critical architectural decision:

\`\`\`python
from scrapling import Fetcher, StealthFetcher

# For static sites - lightning fast
fetcher = Fetcher(auto_match=True)

# For JS-rendered sites - uses stealth mode
stealth = StealthFetcher(headless=True)

# Resilient selectors survive DOM changes
page = fetcher.get(source.url)
notices = page.css(".notice-card")

for notice in notices:
    title = notice.css_first("h3::text")
    details = notice.css_first(".details::text")
\`\`\`

**Speed**: Scrapling's static fetcher processes 200 sources in under 4 minutes vs 30+ minutes with Playwright. For the 15% of sources requiring JavaScript rendering, we use the StealthFetcher selectively.

**Resilience**: Scrapling's \`auto_match\` feature uses fuzzy CSS matching — if a website changes a class name from \`.notice-item\` to \`.notice-card\`, it still finds the right elements. This reduced our maintenance burden by 80%.

**Anti-detection**: The StealthFetcher includes automatic proxy rotation, user-agent randomization, and request throttling — critical for scraping institutional websites without getting blocked.`,
  },
  {
    title: "Structured Extraction with Vertex AI + Pydantic",
    content: `The extraction layer is where raw text becomes actionable data. Each notice goes through a Vertex AI call with a carefully engineered system prompt:

\`\`\`python
class NPANotice(BaseModel):
    """Validated NPA notice extraction schema."""
    property_description: str
    property_type: Literal["residential", "commercial", "land", "industrial"]
    reserve_price: float | None = None
    currency: str = "INR"
    auction_date: date | None = None
    bank_name: str
    borrower_name: str | None = None
    notice_type: Literal["auction", "possession", "demand", "sale"]
    location: str | None = None
    area_sqft: float | None = None
    
    @field_validator("reserve_price")
    @classmethod
    def validate_price(cls, v):
        if v is not None and v <= 0:
            raise ValueError("Reserve price must be positive")
        return v
\`\`\`

The Pydantic model does double duty — it generates the JSON Schema that guides the LLM's output format AND validates the results post-extraction. This eliminates an entire class of data quality bugs.

**Batch processing optimization**: Instead of one API call per notice, we batch 10-15 notices per call with clear delimiters. This reduces Vertex AI costs by ~70% and improves throughput.`,
  },
  {
    title: "The 9 AM Cron: Reliability Engineering",
    content: `A daily cron job that touches 200+ external sources needs serious reliability engineering:

**Google Cloud Scheduler** triggers a Cloud Function at 9:00 AM IST. The function orchestrates the entire pipeline with these safeguards:

**Circuit breaker pattern**: Each source has a failure counter. After 3 consecutive failures, a source is marked "degraded" and skipped for 24 hours with an alert sent to Slack. This prevents one broken website from stalling the entire pipeline.

**Retry with exponential backoff**: Transient failures (timeouts, 5xx errors) get 3 retries with exponential backoff (1s, 4s, 16s). Permanent failures (404, 403) are logged and skipped immediately.

**Idempotency**: Every pipeline run is idempotent. If the cron triggers twice (Cloud Scheduler edge case), the deduplication layer ensures no duplicate notices enter the database.

**Observability**: Every run produces a structured log with metrics — sources scraped, notices extracted, validation failures, processing time per source. A weekly summary email goes to the compliance team showing coverage and data quality trends.

The result: **zero unplanned downtime** over 6 months of continuous operation.`,
  },
  {
    title: "Results & Impact",
    content: `After deploying the pipeline:

• **200+ sources** monitored daily with 100% coverage (up from ~60% manual coverage)
• **99.2% validation pass rate** — only 0.8% of extractions need human correction
• **70% reduction** in compliance team manual review effort (4 analysts → 1 part-time reviewer)
• **Average pipeline runtime: 8 minutes** for full 200-source scrape, extract, and validate cycle
• **Zero downtime** over 6 months with no missed daily runs
• **3,000+ unique NPA notices** cataloged per month

The biggest win wasn't the automation itself — it was the **data quality**. The Pydantic validation layer catches inconsistencies that human analysts routinely missed, like auction dates in the past or reserve prices formatted as text instead of numbers. The structured data now powers downstream analytics that were previously impossible.`,
  },
];

export default function NPAExtractionBlogPage() {
  return (
    <BlogArticleLayout
      title="Automating NPA Notice Extraction with Scrapling, Pydantic & Vertex AI"
      publishedAt="2025-12-02T09:00:00Z"
      readingTime={10}
      author="Aman Soni"
      category="AI & Agents"
      tags={["Scrapling", "Vertex AI", "Pydantic", "Cron Jobs", "Web Scraping", "Data Pipeline"]}
      sections={sections}
    />
  );
}
