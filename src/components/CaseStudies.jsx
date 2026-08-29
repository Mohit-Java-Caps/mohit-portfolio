import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import PipelineDiagram from "./PipelineDiagram";
import { caseStudies } from "../data/mock";
import { fadeUp, viewportOnce, EASE } from "./motionVariants";

const Row = ({ label, children }) => (
  <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
    <p className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">{label}</p>
    <div className="text-sm leading-relaxed text-foreground/90 sm:text-base">{children}</div>
  </div>
);

const CaseStudyCard = ({ study, defaultOpen }) => {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className={`overflow-hidden rounded-2xl border bg-card ${
        study.flagship ? "border-primary/40" : "border-border"
      }`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-primary">
            {study.tag}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{study.org}</span>
        </div>
        <h3 className="font-display mt-3 text-2xl font-semibold text-foreground sm:text-3xl">{study.title}</h3>

        <div className="mt-4">
          <Row label="Problem">{study.problem}</Row>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-primary"
        >
          {open ? "Hide incident report" : "View incident report"}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 border-t border-border pt-6">
                {study.architecture && (
                  <div>
                    <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-primary">Architecture</p>
                    <PipelineDiagram nodes={study.architecture.nodes} />
                  </div>
                )}

                {study.decisions?.map((d) => (
                  <Row key={d.q} label={`Why ${d.q.replace(/^Why\s*/i, "")}`}>
                    {d.a}
                  </Row>
                ))}

                {study.implementation && <Row label="Implementation">{study.implementation}</Row>}
                {study.challenge && <Row label="Challenge">{study.challenge}</Row>}
                {study.optimization && <Row label="Optimization">{study.optimization}</Row>}

                {study.result && (
                  <div>
                    <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-primary">Result</p>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {study.result.map((r) => (
                        <div key={r.label} className="rounded-xl border border-border bg-secondary/50 p-3">
                          <p className="font-display text-lg font-semibold text-foreground">{r.value}</p>
                          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/80">
                        {s}
                      </span>
                    ))}
                  </div>
                  {study.github && (
                    <a
                      href={study.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" /> Source
                    </a>
                  )}
                </div>

                {study.aiLabLink && (
                  <a href="#ai-lab" className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline">
                    → Related: AI Lab
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

const CaseStudies = () => (
  <section id="work" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <ChapterHeader
        index="03"
        label="Work"
        title="System case studies, not project cards."
        description="Each one reads like an incident report: the problem, the architecture, the decisions made under constraint, and what the result actually was."
      />

      <div className="mt-12 space-y-6">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} defaultOpen={study.flagship} />
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
