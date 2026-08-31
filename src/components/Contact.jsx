import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Code2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { personal, socials } from "../data/mock";
import ChapterHeader from "./ChapterHeader";
import { fadeUp, viewportOnce } from "./motionVariants";

const iconMap = { Mail, Github, Linkedin, Code2 };

const Contact = () => {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const mailtoHref = () => {
    const subject = form.subject || `Portfolio contact from ${form.name || "a visitor"}`;
    const body = `${form.message}${form.name ? `\n\n— ${form.name}` : ""}`;
    return `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="connect" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <ChapterHeader index="10" label="Connect" title="Have a system worth building?" description="Let's build it." />

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <a href={`mailto:${personal.email}`} className="font-medium hover:text-primary">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {personal.location}
              </li>
            </ul>

            <div className="mt-8 flex gap-2">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target={s.id === "email" ? "_self" : "_blank"}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 font-mono text-xs text-foreground/90 transition hover:border-primary/50 hover:text-primary"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />} {s.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-6 lg:col-span-3 sm:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Your name</label>
                <Input value={form.name} onChange={onChange("name")} placeholder="Ada Lovelace" className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject</label>
                <Input value={form.subject} onChange={onChange("subject")} placeholder="Backend role at Acme" className="h-11" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                <Textarea
                  rows={5}
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell me a little about the role / project..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <p className="text-xs text-muted-foreground">Opens your email client — nothing is stored.</p>
              <a href={mailtoHref()}>
                <Button type="button" className="h-11 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" /> Send message
                </Button>
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
