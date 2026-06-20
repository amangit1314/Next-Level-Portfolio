import type { Metadata } from "next";
import BlogArticleLayout from "../_components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Building a Document Extraction Agent with Visual Grounding",
  description:
    "How Aman Soni built a production-grade document extraction agent combining multimodal LLMs with bounding-box visual grounding to achieve 94.7% accuracy on complex unstructured documents.",
  keywords: [
    "Document Extraction AI",
    "Visual Grounding",
    "Vertex AI",
    "Gemini Pro Vision",
    "Multimodal LLM",
    "Aman Soni",
    "Agentic AI",
  ],
  openGraph: {
    title: "Building a Document Extraction Agent with Visual Grounding",
    description:
      "A deep dive into production-grade document AI with visual grounding, achieving 94.7% accuracy.",
    type: "article",
    publishedTime: "2025-11-15T09:00:00Z",
    authors: ["Aman Soni"],
  },
};

const sections = [
  {
    title: "The Problem: Unstructured Documents at Scale",
    content: `Every enterprise deals with a flood of unstructured documents — invoices, contracts, legal notices, purchase orders. Traditional OCR tools extract raw text but lose all spatial context. They can't tell the difference between a vendor name and a line-item description when both sit in the same text blob.

I was tasked with building an extraction system that not only reads text from documents but **understands where each piece of information lives on the page** — and maps it to structured output with field-level confidence scores.

The goal was clear: achieve near-human accuracy on 12+ document types while processing thousands of pages daily with sub-2-second latency.`,
  },
  {
    title: "Architecture Overview",
    content: `The system follows a three-stage pipeline:

**Stage 1 — Document Ingestion & Pre-processing**
Documents enter via a FastAPI endpoint (PDF, images, or scanned TIFFs). Each page is converted to a high-resolution image and run through layout analysis to detect text regions, tables, and key-value blocks.

**Stage 2 — Multimodal Extraction with Visual Grounding**
Each page image is sent to Gemini Pro Vision via Vertex AI with a carefully engineered prompt. The prompt includes the document type schema (defined as Pydantic models) and asks the model to extract each field AND return its bounding box coordinates on the page.

The key innovation is the **visual grounding** — the model doesn't just extract "Invoice #12345", it returns the exact pixel coordinates where that text appears, enabling downstream verification and human review UIs.

**Stage 3 — Validation & Confidence Routing**
Extracted data is validated against Pydantic schemas. Fields below a confidence threshold (tuned per document type) are automatically flagged for human review. High-confidence extractions flow directly into the downstream database.`,
  },
  {
    title: "The Visual Grounding Pipeline",
    content: `Visual grounding was the hardest engineering challenge. Here's how the prompt engineering works:

The system prompt instructs the model to return JSON with each field containing both the extracted value and normalized bounding box coordinates (x, y, width, height as percentages of page dimensions).

\`\`\`python
extraction_prompt = """
Analyze this document image and extract the following fields.
For EACH field, return:
- "value": the extracted text
- "confidence": 0.0 to 1.0
- "bbox": [x, y, width, height] as percentages of page size

Schema: {schema_json}

Return valid JSON only.
"""
\`\`\`

The Pydantic model enforces the output structure:

\`\`\`python
class ExtractedField(BaseModel):
    value: str
    confidence: float = Field(ge=0.0, le=1.0)
    bbox: list[float] = Field(min_length=4, max_length=4)

class InvoiceExtraction(BaseModel):
    invoice_number: ExtractedField
    vendor_name: ExtractedField
    total_amount: ExtractedField
    line_items: list[LineItemExtraction]
\`\`\`

This approach gives us structured, validated output with spatial grounding on every single field — something that traditional OCR pipelines simply cannot achieve.`,
  },
  {
    title: "Handling Edge Cases at Scale",
    content: `Production document AI is 20% model work and 80% edge case handling. Key challenges we solved:

**Multi-page documents**: For multi-page invoices, we maintain cross-page context by passing previous page extractions as context to subsequent pages. This lets the model understand that a line-items table spanning 3 pages is one continuous entity.

**Low-quality scans**: We built a pre-processing pipeline with adaptive binarization, deskewing, and noise reduction. Documents below a quality threshold trigger an enhanced processing path with multiple extraction attempts.

**Table extraction**: Tables are the hardest layout element. We use a two-pass approach — first detecting table boundaries via layout analysis, then extracting cell-level content with the multimodal model. Row/column alignment is verified geometrically using the bounding boxes.

**Confidence calibration**: Raw model confidence scores aren't well-calibrated. We trained a lightweight calibration model on 5,000 human-verified extractions to map raw scores to true accuracy probabilities.`,
  },
  {
    title: "Results & Production Metrics",
    content: `After 3 months of development and iterative refinement:

• **94.7% field-level accuracy** across 12 document types (invoices, contracts, POs, tax forms, etc.)
• **<2 second average latency** per page on Vertex AI with batch optimization
• **85% reduction** in manual processing time for the operations team
• **50,000+ documents** processed in the first 6 months of production
• **99.8% uptime** with automatic failover and retry logic

The visual grounding feature became the killer differentiator — enabling a review UI where human operators can click on any extracted field and see it highlighted on the original document. This cut review time by an additional 60% compared to traditional side-by-side comparison.`,
  },
  {
    title: "Key Technical Decisions",
    content: `**Why Vertex AI over OpenAI?** — Data residency requirements mandated Google Cloud. Vertex AI's Gemini Pro Vision matched GPT-4V quality on our document benchmarks while offering better batch processing APIs and VPC-level security.

**Why Pydantic for validation?** — Pydantic's strict type enforcement catches extraction errors at the schema level before they reach the database. Its JSON Schema generation also powers the model's output format instructions.

**Why bounding boxes over text spans?** — Text spans require a separate OCR step and are fragile to OCR errors. Bounding boxes work directly on the image representation, making the system end-to-end and eliminating OCR as a failure point.

This project solidified my belief that the future of document processing is multimodal-first, with traditional OCR serving only as a fallback.`,
  },
];

export default function DocExtractionBlogPage() {
  return (
    <BlogArticleLayout
      title="Building a Document Extraction Agent with Visual Grounding"
      publishedAt="2025-11-15T09:00:00Z"
      readingTime={12}
      author="Aman Soni"
      category="AI & Agents"
      tags={["Vertex AI", "Visual Grounding", "Document AI", "LangChain", "Pydantic"]}
      sections={sections}
    />
  );
}
