import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins", // Add this line
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Add this line
});

import { ThemeProvider } from "@/contexts/ThemeContext";
import ScrollProgress from "@/components/ScrollProgress";
import AICopilot from "@/components/AICopilot";

export const metadata: Metadata = {
  metadataBase: new URL("https://amansoni.dev"),
  title: {
    default: "Aman Soni | AI Engineer & Full-Stack Architect — Next Level Portfolio",
    template: "%s | Aman Soni Portfolio",
  },
  description:
    "Aman Soni — Senior AI Engineer & Full-Stack Architect with 4+ years of experience building agentic AI systems, RAG pipelines, document intelligence agents, and production-grade Next.js applications. Explore my next-level portfolio showcasing cutting-edge AI projects and full-stack expertise.",
  keywords: [
    "Aman Soni",
    "Aman Soni Portfolio",
    "Aman Soni Developer",
    "Aman Soni AI Engineer",
    "Next Level Portfolio",
    "AI Engineer Portfolio",
    "Full Stack Developer Portfolio",
    "Senior AI Engineer",
    "Full-Stack Architect",
    "Agentic AI Systems",
    "RAG Pipeline Developer",
    "Document Extraction AI",
    "Vertex AI Developer",
    "Next.js Developer",
    "React Developer India",
    "LangChain Developer",
    "Machine Learning Engineer",
    "Portfolio Website",
  ],
  authors: [{ name: "Aman Soni", url: "https://amansoni.dev" }],
  creator: "Aman Soni",
  publisher: "Aman Soni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amansoni.dev",
    siteName: "Aman Soni — Next Level Portfolio",
    title: "Aman Soni | AI Engineer & Full-Stack Architect Portfolio",
    description:
      "Senior AI Engineer & Full-Stack Architect building next-level agentic AI systems, RAG pipelines, and production-grade applications. 4+ years of experience in Vertex AI, LangChain, Next.js, and distributed systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Soni | AI Engineer & Full-Stack Architect Portfolio",
    description:
      "Explore the next-level portfolio of Aman Soni — building agentic AI systems, document intelligence agents, and full-stack applications.",
    creator: "@AmanSoni",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://amansoni.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="font-inter" suppressHydrationWarning>
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <AICopilot />
        </ThemeProvider>
      </body>
    </html>
  );
}
