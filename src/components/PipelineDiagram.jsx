import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Linear architecture diagram for a case study. Row on desktop, stacked column
// on mobile — a real re-layout, not a shrunk copy of the desktop version.
const PipelineDiagram = ({ nodes }) => {
  const [active, setActive] = useState(null);
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <div>
      <div className="flex flex-col items-stretch gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
        {nodes.map((n, i) => (
          <React.Fragment key={n.id}>
            <button
              onClick={() => setActive((cur) => (cur === n.id ? null : n.id))}
              aria-pressed={active === n.id}
              className={`flex-1 rounded-lg border px-3 py-2.5 font-mono text-xs font-semibold transition-colors sm:min-w-[120px] sm:flex-initial sm:text-[13px] ${
                active === n.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/50"
              }`}
            >
              {n.label}
            </button>
            {i < nodes.length - 1 && (
              <ChevronRight
                aria-hidden="true"
                className="mx-auto h-4 w-4 flex-none rotate-90 text-muted-foreground sm:rotate-0"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-3 min-h-[2.5rem]" aria-live="polite">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.p
              key={activeNode.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="rounded-lg bg-secondary px-4 py-2.5 text-sm text-foreground/90"
            >
              <span className="font-mono text-primary">{activeNode.label}</span> — {activeNode.detail}
            </motion.p>
          ) : (
            <p className="px-1 py-2.5 font-mono text-xs uppercase tracking-wide text-muted-foreground/70">
              Tap a node to see its role
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PipelineDiagram;
