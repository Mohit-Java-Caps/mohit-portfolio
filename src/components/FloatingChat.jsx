import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ExternalLink } from "lucide-react";
import { EASE } from "./motionVariants";

const CHAT_API_URL = "https://ask-my-portfolio-khaki.vercel.app/api/chat";
const LIVE_DEMO_URL = "https://ask-my-portfolio-khaki.vercel.app/";

const STARTER_QUESTIONS = [
  "What did Mohit build at NextEra Energy?",
  "What's his notice period?",
  "Is he open to contract roles?",
];

// A deliberately quiet launcher: no bounce/pulse loop, no generic "support
// chat" framing. It opens a real RAG chatbot (a separate shipped project,
// see the Source Code chapter) grounded in this site's own verified data.
const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading]);

  const send = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setMessages((m) => [...m, { role: "bot", text: data.answer, mode: data.mode }]);
    } catch (err) {
      setMessages((m) => [...m, { role: "bot", text: err.message || "Network error — try again.", error: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE, delay: 0.3 }}
        aria-label={open ? "Close chat" : "Ask about Mohit"}
        className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full border border-primary/40 bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-black/30 transition hover:bg-primary/90"
      >
        {open ? <X className="h-4 w-4" aria-hidden="true" /> : <MessageCircle className="h-4 w-4" aria-hidden="true" />}
        {open ? "Close" : "Ask about Mohit"}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed bottom-24 right-5 z-50 flex h-[520px] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40"
          >
            <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground">
                  MK
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">Ask My Portfolio</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    RAG assistant · live
                  </p>
                </div>
              </div>
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open full chat in a new tab"
                className="rounded-full p-1.5 text-muted-foreground transition hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-2.5">
                  <p className="text-xs text-muted-foreground">Try one of these:</p>
                  <div className="flex flex-col gap-1.5">
                    {STARTER_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-lg border border-border px-3 py-2 text-left text-xs text-foreground/90 transition hover:border-primary/50 hover:text-primary"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : m.error
                          ? "border border-red-500/30 bg-red-500/10 text-red-200"
                          : "border border-border bg-secondary/60 text-foreground"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-xl border border-border bg-secondary/60 px-3 py-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                maxLength={500}
                className="h-10 flex-1 rounded-full border border-border bg-background px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary/50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:opacity-40"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
