import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personal } from "../data/mock";
import { useMode } from "../context/ModeContext";

const microDetails = (mode) => [
  { label: "STATUS", value: "● ONLINE" },
  { label: "BUILD", value: "v2026.1" },
  { label: "ENGINE", value: "JAVA / SPRING" },
  { label: "REGION", value: "AWS" },
  { label: "MODE", value: mode === "engineering" ? "ENGINEERING" : "OVERVIEW" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const { mode } = useMode();

  return (
    <footer className="relative border-t border-border bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div
          aria-label="Portfolio status metadata — a UI motif, not real infrastructure telemetry"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-6 font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
        >
          {microDetails(mode).map((d) => (
            <span key={d.label}>
              {d.label} <span className="text-primary">{d.value}</span>
            </span>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">
              MK
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{personal.name}</p>
              <p className="text-xs text-muted-foreground">
                {personal.role} · © {year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground/80 transition hover:border-primary/50 hover:text-primary"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Top
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-muted-foreground sm:px-8">
          Designed & built by {personal.firstName} · React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
