import { anton, jetbrainsMono } from "@/lib/fonts";

interface HudPageTitleProps {
  title: string;
  breadcrumb: string[];
}

export function HudPageTitle({ title, breadcrumb }: HudPageTitleProps) {
  return (
    <div className="text-right pt-24 sm:pt-32">
      <p
        className={`${jetbrainsMono.className} text-xs uppercase tracking-widest mb-4 [color:var(--hud-text-muted)]`}
      >
        {breadcrumb.join(" / ")}
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
