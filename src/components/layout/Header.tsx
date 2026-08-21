// Data-only now — the actual header/sidebar UI this file used to render was
// replaced globally by HudChrome.tsx (components/layout/hud/), which reuses
// pageLinks/sectionLinks from here instead of duplicating them. The render
// component (and its ThemeSwitcher/Magnetic/motion-variant dependencies)
// was 400+ lines of dead code kept alive only by these two arrays — trimmed
// rather than left importable-but-unreachable.
import {
  FiBriefcase,
  FiFileText,
  FiGithub,
  FiHome,
  FiLayers,
  FiMail,
  FiBookOpen,
  FiSliders,
  FiTerminal,
} from "react-icons/fi";
import { Route, SectionId, SectionLabel } from "@/types/enums";

// PAGE-LEVEL NAV (top bar)
export const pageLinks = [
  { name: "Home", path: Route.Home, icon: FiHome },
  { name: "Projects", path: Route.Projects, icon: FiGithub },
  { name: "Playground", path: Route.Playground, icon: FiSliders },
  { name: "Terminal", path: Route.Terminal, icon: FiTerminal },
  { name: "Components", path: Route.Components, icon: FiLayers },
  { name: "Blogs", path: Route.Blogs, icon: FiFileText },
];

// SECTION NAV (used only on home page, by MobileBottomNav)
export const sectionLinks = [
  { name: SectionLabel.Intro, id: SectionId.Home, icon: FiHome },
  { name: SectionLabel.About, id: SectionId.About, icon: FiBriefcase },
  { name: SectionLabel.Skills, id: SectionId.Skills, icon: FiLayers },
  { name: SectionLabel.Experience, id: SectionId.Experience, icon: FiBookOpen },
  { name: SectionLabel.Projects, id: SectionId.Projects, icon: FiGithub },
  { name: SectionLabel.Contact, id: SectionId.Contact, icon: FiMail },
];
