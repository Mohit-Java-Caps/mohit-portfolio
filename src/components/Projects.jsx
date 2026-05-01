import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { projects } from "../data/mock";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              Projects
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
              style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
            >
              Work I'm proud of.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              A selection of side-projects that showcase my approach to backend design,
              authentication and Gen-AI integrations.
            </p>
          </div>
          <a
            href="https://github.com/Mohit-Java-Caps"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
          >
            See all on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${p.accent} opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:group-hover:border-cyan-400 dark:group-hover:bg-cyan-400 dark:group-hover:text-slate-900">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <h3
                className="relative mt-6 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
                style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {p.blurb}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {p.description}
              </p>

              <div className="relative mt-6 grid grid-cols-3 gap-2">
                {p.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-center dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {m.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge
                    key={s}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {s}
                  </Badge>
                ))}
              </div>

              <div className="relative mt-7 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                >
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
