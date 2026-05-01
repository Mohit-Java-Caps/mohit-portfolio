import React from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { experiences } from "../data/mock";

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
            Experience
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            Production systems, real impact.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A focused timeline of where I've shipped, scaled and optimised code that
            people actually depend on.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/40 via-cyan-400/30 to-transparent sm:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative sm:pl-16"
              >
                <span
                  aria-hidden
                  className="absolute left-2.5 top-3 hidden h-3 w-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 ring-4 ring-white dark:ring-slate-950 sm:block"
                />

                <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-md transition-colors hover:border-blue-500/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/40 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Building2 className="h-3.5 w-3.5" />
                          {exp.company}
                          <span className="text-slate-400">•</span>
                          <span className="text-blue-600 dark:text-cyan-400">{exp.client}</span>
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-blue-600 dark:text-cyan-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
