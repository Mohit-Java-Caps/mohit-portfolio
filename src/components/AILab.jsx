import React from "react";
import ChapterHeader from "./ChapterHeader";
import PipelineDiagram from "./PipelineDiagram";
import { ragStages, ragCapabilityNote, ragTech } from "../data/mock";

const AILab = () => {
  const nodes = ragStages.map((s) => ({ id: s.id, label: s.label, detail: s.explanation }));

  return (
    <section id="ai-lab" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ChapterHeader
          index="04"
          label="AI Lab"
          title="Where software engineering meets intelligent systems."
          description="A RAG pipeline, staged out. Click through it — each stage is a real architectural decision, not a buzzword."
        />

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <PipelineDiagram nodes={nodes} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {ragTech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/80">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{ragCapabilityNote}</p>
      </div>
    </section>
  );
};

export default AILab;
