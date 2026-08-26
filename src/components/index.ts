// Sections
export { default as HeroSection } from "./sections/HeroSection";
export { default as AboutSection } from "./sections/AboutSection";
export { default as Skills } from "./sections/Skills";
export { default as Experience } from "./sections/Experience";
export { default as Projects } from "./sections/Projects";
export { default as Testimonials } from "./sections/Testimonials";
export { default as Contact } from "./sections/Contact";

// Layout
// Header/Footer/MobileBottomNav are NOT re-exported here anymore — their
// rendered output was replaced site-wide by
// src/components/layout/hud/HudChrome.tsx (mounted once in layout.tsx;
// MobileBottomNav's section-jump links folded into HudMenu's SECTIONS
// group). Header.tsx itself still exists for its data exports
// (pageLinks, sectionLinks — imported directly from "./layout/Header").
export { Providers } from "./layout/Providers";

// Features
export { default as AICopilot } from "@/features/ai-copilot/components/AICopilot";
export { BugReportDialog } from "./features/BugReportDialog";

// Cards
export { default as ExperienceCard } from "./cards/ExperienceCard";
export { default as ProjectCard } from "./cards/ProjectCard";
export { default as SkillCard } from "./cards/SkillCard";
export { default as TestimonialCard } from "./cards/TestimonialCard";

// Primitives
export { default as Magnetic } from "./primitives/Magnetic";
