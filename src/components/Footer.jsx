import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personal } from "../data/mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-200/70 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 font-bold text-white">
            MK
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {personal.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <Mail className="h-4 w-4" />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-4 text-xs font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            <ArrowUp className="h-3.5 w-3.5" /> Top
          </button>
        </div>
      </div>
      <div className="border-t border-slate-200/70 dark:border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-4 text-center text-xs text-slate-500 dark:text-slate-500 sm:px-8">
          Designed & built by {personal.firstName} · React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
