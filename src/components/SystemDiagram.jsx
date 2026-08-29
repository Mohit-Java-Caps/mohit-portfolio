import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

const NODES = [
  { id: "user", label: "USER", x: 320, y: 34, note: "A request enters the system." },
  { id: "api", label: "API", x: 320, y: 122, note: "Spring Boot REST layer — auth, routing, validation." },
  { id: "microservice", label: "MICROSERVICE", x: 148, y: 214, note: "Independently deployable services, one concern each." },
  { id: "eventbus", label: "EVENT BUS", x: 492, y: 214, note: "SNS / SQS — decouples producers from consumers." },
  { id: "data", label: "DATA", x: 148, y: 312, note: "PostgreSQL / MongoDB — persistence and query performance." },
  { id: "queue", label: "QUEUE", x: 492, y: 312, note: "Buffers bursts so downstream consumers aren't overwhelmed." },
  { id: "cloud", label: "CLOUD", x: 320, y: 396, note: "AWS — EC2 / ECS / Lambda running all of the above." },
  { id: "ai", label: "AI", x: 320, y: 456, note: "A Bedrock / RAG layer, added on top — not bolted in front." },
];

const EDGES = [
  ["user", "api"],
  ["api", "microservice"],
  ["api", "eventbus"],
  ["microservice", "data"],
  ["eventbus", "queue"],
  ["data", "cloud"],
  ["queue", "cloud"],
  ["cloud", "ai"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

const SystemDiagram = () => {
  const [active, setActive] = useState(null);
  const reduceMotion = useReducedMotion();
  const activeNode = active ? byId[active] : null;

  return (
    <div className="relative">
      <svg
        viewBox="0 0 640 480"
        role="img"
        aria-label="Animated system architecture diagram: user request flows through an API into microservices and an event bus, into data storage and a queue, up into cloud infrastructure, with an AI layer on top."
        className="h-auto w-full max-w-md mx-auto select-none"
      >
        {EDGES.map(([from, to]) => {
          const a = byId[from];
          const b = byId[to];
          const isLit = active === from || active === to;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={isLit ? "hsl(var(--primary))" : "hsl(var(--border))"}
              strokeWidth={isLit ? 2 : 1.5}
              style={{ transition: "stroke 0.25s ease, stroke-width 0.25s ease" }}
            />
          );
        })}

        {!reduceMotion &&
          EDGES.map(([from, to], i) => {
            const a = byId[from];
            const b = byId[to];
            return (
              <motion.circle
                key={`packet-${from}-${to}`}
                r={3.5}
                fill="hsl(var(--primary))"
                initial={{ cx: a.x, cy: a.y, opacity: 0 }}
                animate={{
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            );
          })}

        {NODES.map((n) => {
          const isActive = active === n.id;
          return (
            <g
              key={n.id}
              tabIndex={0}
              role="button"
              aria-label={`${n.label}: ${n.note}`}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive((cur) => (cur === n.id ? null : cur))}
              onFocus={() => setActive(n.id)}
              onBlur={() => setActive((cur) => (cur === n.id ? null : cur))}
              onClick={() => setActive((cur) => (cur === n.id ? null : n.id))}
              style={{ cursor: "pointer", outline: "none" }}
            >
              <rect
                x={n.x - 58}
                y={n.y - 16}
                width={116}
                height={32}
                rx={7}
                fill={isActive ? "hsl(var(--primary))" : "hsl(var(--card))"}
                stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                strokeWidth={1.5}
                style={{ transition: "fill 0.2s ease, stroke 0.2s ease" }}
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={11}
                fontWeight={600}
                fill={isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"}
                style={{ transition: "fill 0.2s ease" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 h-10 text-center" aria-live="polite">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.p
              key={activeNode.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="text-sm text-muted-foreground"
            >
              <span className="font-mono text-primary">{activeNode.label}</span> — {activeNode.note}
            </motion.p>
          ) : (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
              Hover or tab through the diagram
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SystemDiagram;
