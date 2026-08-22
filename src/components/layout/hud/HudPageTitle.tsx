import Link from "next/link";
import { anton, jetbrainsMono } from "@/lib/fonts";
import { Route } from "@/types/enums";

interface HudPageTitleProps {
  title: string;
  breadcrumb: string[];
}

// breadcrumb is always ["HOME", <current page>] across every call site
// (Projects/Blogs/Components) — first segment links to Home, the rest is
// the current page and stays plain text (nowhere useful to navigate to).
export function HudPageTitle({ title, breadcrumb }: HudPageTitleProps) {
  const [first, ...rest] = breadcrumb;
  return (
    <div className="text-right pt-24 sm:pt-32">
      <p
        className={`${jetbrainsMono.className} text-xs uppercase tracking-widest mb-4 [color:var(--hud-text-muted)]`}
      >
        <Link
          href={Route.Home}
          className="cursor-pointer font-normal transition-all hover:font-bold hover:[color:var(--theme-primary)]"
        >
          {first}
        </Link>
        {rest.length > 0 && ` / ${rest.join(" / ")}`}
      </p>
      <h1
        className={`${anton.className} text-6xl sm:text-8xl lg:text-9xl font-bold leading-none [color:var(--hud-text-primary)]`}
      >
        {title}
      </h1>
      {/* Accent mark — same idea as About/Skills' underline, and the one
          spot on this page that reaches the accent-flavor system at all
          (breadcrumb/title stay neutral, matching Hero's name treatment). */}
      <div className="w-16 h-0.5 ml-auto mt-4" style={{ backgroundColor: "var(--theme-primary)" }} />
    </div>
  );
}
