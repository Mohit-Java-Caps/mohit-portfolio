import React from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const CHAPTERS = [
  { href: "#identity", index: "01" },
  { href: "#systems", index: "02" },
  { href: "#work", index: "03" },
  { href: "#ai-lab", index: "04" },
  { href: "#mindset", index: "05" },
  { href: "#journey", index: "06" },
  { href: "#problem-solving", index: "07" },
  { href: "#capabilities", index: "08" },
  { href: "#source", index: "09" },
  { href: "#connect", index: "10" },
];

// Fixed wayfinding rail: mirrors the chapter numbering used in each ChapterHeader,
// so the site's own "system" metaphor doubles as real navigation. Desktop only —
// there's no room for it once the layout drops to a single column.
const ChapterRail = () => {
  const active = useActiveSection(CHAPTERS, "#identity");

  const handleClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Chapter navigation"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
    >
      {CHAPTERS.map((c) => {
        const isActive = active === c.href;
        return (
          <button
            key={c.href}
            onClick={() => handleClick(c.href)}
            aria-label={`Jump to chapter ${c.index}`}
            aria-current={isActive}
            className="group relative flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`font-mono text-[10px] transition-opacity ${
                isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100"
              } absolute -right-8 whitespace-nowrap`}
            >
              {c.index}
            </span>
            <span
              className={`block rounded-full transition-all ${
                isActive ? "h-2.5 w-2.5 bg-primary" : "h-1.5 w-1.5 bg-border group-hover:bg-primary/60"
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

export default ChapterRail;
