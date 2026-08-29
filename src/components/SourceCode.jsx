import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import { sourceRepos } from "../data/mock";
import { fadeUp, staggerContainer, viewportOnce } from "./motionVariants";

const SourceCode = () => (
  <section id="source" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <ChapterHeader
        index="09"
        label="Source Code"
        title="Repositories worth looking at."
        description="Curated, not a wall of every repo. Each one is a real body of written material or working code."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.06)}
        className="mt-12 grid gap-4 sm:grid-cols-2"
      >
        {sourceRepos.map((repo) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            variants={fadeUp}
            className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                  <Github className="h-4 w-4 text-muted-foreground" /> {repo.name}
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{repo.blurb}</p>
            </div>
            <span className="mt-4 font-mono text-[11px] uppercase tracking-wide text-muted-foreground/70">
              {repo.language}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SourceCode;
