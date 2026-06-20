import type { Metadata } from "next";
import BlogArticleLayout from "../_components/BlogArticleLayout";

export const metadata: Metadata = {
  title: "Intelligent Template Generation: From Raw Backend Data to Production Documents",
  description:
    "How Aman Soni designed an AI-powered document generation system that automatically maps backend data to templates and produces pixel-perfect PDFs, eliminating 40 hours of manual work per week.",
  keywords: [
    "Template Generation AI",
    "Document Automation",
    "PDF Generation",
    "Vertex AI",
    "FastAPI",
    "Aman Soni",
    "Jinja2",
    "WeasyPrint",
  ],
  openGraph: {
    title: "Intelligent Template Generation: From Raw Backend Data to Production Documents",
    description:
      "AI-powered document generation eliminating 40 hours of manual work per week.",
    type: "article",
    publishedTime: "2026-01-20T09:00:00Z",
    authors: ["Aman Soni"],
  },
};

const sections = [
  {
    title: "The Manual Document Assembly Problem",
    content: `In almost every enterprise, there's a hidden productivity sink: someone manually takes data from a backend system, opens a Word template, pastes values into the right fields, formats tables, adjusts conditional sections, and exports to PDF. Multiply this across 25 document types — loan agreements, compliance reports, client proposals, audit summaries — and you're looking at 40+ engineering hours per week burned on document assembly.

The existing "solution" was a collection of hardcoded scripts, each tied to a specific template version. Every template change required a developer to update the script, test it, and deploy. Template versioning was a nightmare — the team couldn't tell which script version matched which template version.

My brief: build a **single, intelligent system** that takes any backend data payload, matches it to the right template, fills it dynamically (including conditional logic and computed fields), and outputs production-quality PDFs. And make it work for new templates without writing new code.`,
  },
  {
    title: "System Architecture",
    content: `The system has four core layers:

**1. Template Registry**
Templates are stored as enhanced Jinja2 documents with metadata headers. Each template declares its required fields, optional fields, conditional blocks, and output format. The registry supports versioning with automatic rollback.

**2. LLM-Powered Field Mapper**
When new data arrives, the field mapper uses Vertex AI to automatically match source data fields to template placeholders. This is the intelligence layer — it handles field name mismatches (e.g., \`customer_full_name\` → \`client_name\`), type conversions, and computed fields.

**3. Rendering Engine**
Jinja2 processes the template with mapped data. For PDF output, WeasyPrint handles HTML-to-PDF conversion with CSS-based page layout, headers/footers, and page numbering. The engine supports conditional sections, dynamic tables, and embedded calculations.

**4. Approval & Audit Trail**
Generated documents enter a review queue. Reviewers can approve, reject (with comments), or request regeneration. Every generation is logged with the exact data, template version, and mapper decisions for full auditability.`,
  },
  {
    title: "The LLM Field Mapper: The Intelligence Core",
    content: `The field mapper is what makes this system genuinely intelligent rather than just another template engine. Here's how it works:

\`\`\`python
class FieldMapping(BaseModel):
    """Single field mapping decision."""
    template_field: str
    source_field: str | None
    transform: str | None = None  # e.g., "uppercase", "format_currency"
    confidence: float
    reasoning: str

class MappingResult(BaseModel):
    """Complete mapping for a template."""
    mappings: list[FieldMapping]
    unmapped_required: list[str]  # Required fields with no source match
    warnings: list[str]
\`\`\`

When a new data payload arrives for a template, the mapper sends both the template's field schema and the data payload to Vertex AI with this prompt pattern:

\`\`\`python
mapper_prompt = f"""
You are a data mapping specialist. Given:
1. Template fields: {template_schema}
2. Source data keys: {list(source_data.keys())}
3. Sample source values: {sample_values}

Map each template field to the best matching source field.
Consider: semantic meaning, data types, naming conventions.
If a transform is needed (date formatting, currency, etc.), specify it.
Return confidence 0.0-1.0 for each mapping.
"""
\`\`\`

The result: **97% auto-match accuracy** on previously unseen data schemas. The 3% that need manual mapping are flagged with low confidence scores, and the mapper learns from corrections over time.`,
  },
  {
    title: "Template Design: Beyond Simple Placeholders",
    content: `Real-world documents need more than \`{{field_name}}\` replacements. Our Jinja2 templates support:

**Conditional Sections**
\`\`\`jinja2
{% if loan_type == "secured" %}
  <div class="collateral-section">
    <h3>Collateral Details</h3>
    <p>Property: {{ collateral_description }}</p>
    <p>Valuation: {{ collateral_value | format_currency }}</p>
  </div>
{% endif %}
\`\`\`

**Dynamic Tables** that grow based on data:
\`\`\`jinja2
<table>
  <thead><tr><th>Item</th><th>Amount</th></tr></thead>
  <tbody>
    {% for item in line_items %}
    <tr>
      <td>{{ item.description }}</td>
      <td>{{ item.amount | format_currency }}</td>
    </tr>
    {% endfor %}
    <tr class="total">
      <td>Total</td>
      <td>{{ line_items | sum(attribute='amount') | format_currency }}</td>
    </tr>
  </tbody>
</table>
\`\`\`

**Computed Fields** using custom Jinja2 filters:
- \`format_currency\`: Locale-aware currency formatting
- \`format_date\`: Date formatting with timezone support
- \`number_to_words\`: "₹1,50,000" → "One Lakh Fifty Thousand Rupees"
- \`mask_pii\`: Partial masking for sensitive fields in draft mode

Each template undergoes automated testing — a test data fixture is rendered on every template version change, and the output is visually compared against the previous version using pixel-diff.`,
  },
  {
    title: "PDF Rendering with WeasyPrint",
    content: `WeasyPrint converts CSS-styled HTML to pixel-perfect PDFs. The key advantage over alternatives like wkhtmltopdf is WeasyPrint's excellent CSS Paged Media support:

**Page Layout Control**
\`\`\`css
@page {
  size: A4;
  margin: 2cm 1.5cm;
  @top-right { content: "Page " counter(page) " of " counter(pages); }
  @bottom-center { content: "Confidential — Generated on " attr(data-date); }
}

@page :first {
  margin-top: 0;  /* Full bleed cover page */
}
\`\`\`

**Performance optimization**: Raw WeasyPrint rendering for complex templates took 8-12 seconds. We optimized this to under 3 seconds through:
1. Pre-compiling CSS stylesheets (saves ~2s per render)
2. Image optimization — all embedded logos/headers are pre-compressed and cached
3. Font subsetting — only embedding used glyphs reduces PDF size by 60%
4. Async rendering with a worker pool for concurrent document generation

The rendering pipeline handles 500+ documents per hour on a single Cloud Run instance, scaling horizontally for burst loads.`,
  },
  {
    title: "Results & Business Impact",
    content: `The TemplateForge system transformed document operations:

• **25+ document types** supported with a single system (previously 25 separate scripts)
• **97% auto-match accuracy** on new data schemas — near-zero mapping configuration for new templates
• **Under 3 seconds** for end-to-end generation (data in → PDF out)
• **40 engineering hours saved per week** — previously spent on manual document assembly
• **Zero template-code coupling** — business users can modify templates without developer involvement
• **Full audit trail** on every generated document with version tracking

The most impactful metric wasn't technical — it was organizational. Template changes that previously required a sprint planning ticket, developer assignment, and deployment cycle now take 15 minutes. The compliance team can update legal language, formatting, and conditional logic independently, with the system automatically validating that all required fields are still mapped.

This project reinforced a key principle: **the best AI systems don't replace humans, they eliminate the tedious parts so humans can focus on judgment and quality**.`,
  },
];

export default function TemplateGenBlogPage() {
  return (
    <BlogArticleLayout
      title="Intelligent Template Generation: From Raw Backend Data to Production Documents"
      publishedAt="2026-01-20T09:00:00Z"
      readingTime={9}
      author="Aman Soni"
      category="AI & Agents"
      tags={["Template Engine", "Vertex AI", "PDF Generation", "FastAPI", "Next.js"]}
      sections={sections}
    />
  );
}
