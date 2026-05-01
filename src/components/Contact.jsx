import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Loader2, MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
import { personal, socials } from "../data/mock";

const iconMap = { Github, Linkedin, Mail };
const STORAGE_KEY = "mk-portfolio-messages";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (k) => (ev) => setForm((f) => ({ ...f, [k]: ev.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Mock submission — saves to localStorage
    await new Promise((r) => setTimeout(r, 850));
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (_e) {
      // ignore
    }

    setSubmitting(false);
    toast({
      title: "Message sent ✨",
      description: "Thanks! I'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              Contact
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
              style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
            >
              Let's build something{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                great
              </span>
              .
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Open to backend, full-stack and platform-engineering roles — contract or
              full-time. Drop a line and I'll respond within a day.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-medium hover:text-blue-600 dark:hover:text-cyan-300"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <MapPin className="h-4 w-4" />
                </span>
                {personal.location}
              </li>
            </ul>

            <div className="mt-8 flex gap-2">
              {socials.map((s) => {
                const Icon = iconMap[s.icon] || Mail;
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target={s.id === "email" ? "_self" : "_blank"}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] sm:p-8 lg:col-span-3"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-3xl"
            />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Your name
                </label>
                <Input
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Ada Lovelace"
                  className="h-11 rounded-xl border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@company.com"
                  className="h-11 rounded-xl border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <Input
                  value={form.subject}
                  onChange={onChange("subject")}
                  placeholder="Backend role at Acme"
                  className="h-11 rounded-xl border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <Textarea
                  rows={5}
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell me a little about the role / project..."
                  className="rounded-xl border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>
            </div>

            <div className="relative mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Saved locally for now · backend integration coming next.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="h-11 rounded-full bg-slate-900 px-6 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-300"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send message
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
