import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ChapterHeader from "./ChapterHeader";
import { stackLayers, caseStudies } from "../data/mock";
import { EASE } from "./motionVariants";

const projectTitle = (id) => caseStudies.find((c) => c.id === id)?.title;

const EngineeringStack = () => {
  const [activeId, setActiveId] = useState(stackLayers[0].id);

  return (
    <section id="systems" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <ChapterHeader
          index="02"
          label="Systems"
          title="The engineering stack, as layers."
          description="Not a skills grid. Click a layer to see what it's for and where it shows up in real work below."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-border">
          {stackLayers.map((layer) => {
            const isOpen = activeId === layer.id;
            return (
              <div key={layer.id} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setActiveId((cur) => (cur === layer.id ? null : layer.id))}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors sm:px-7 sm:py-5 ${
                    isOpen ? "bg-primary/10" : "bg-card hover:bg-secondary"
                  }`}
                >
                  <span className={`font-display text-base font-semibold sm:text-lg ${isOpen ? "text-primary" : "text-foreground"}`}>
                    {layer.title}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-none text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden bg-card"
                    >
                      <div className="px-5 pb-6 sm:px-7">
                        <div className="flex flex-wrap gap-2">
                          {layer.technologies.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/90"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{layer.useFor}</p>
                        {projectTitle(layer.project) && (
                          <a
                            href="#work"
                            className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline"
                          >
                            → See it in: {projectTitle(layer.project)}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringStack;
