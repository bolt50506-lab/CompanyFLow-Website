"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MessageCircle, Plane, FlaskConical, ShoppingBag, Bot, Database, Zap, BarChart3, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { WORK } from "@/lib/data";

type FlowNode = readonly [string, LucideIcon];

const SYSTEMS: Array<{
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  nodes: FlowNode[];
}> = [
  { icon: Bot, tag: "AI CUSTOMER AUTOMATION", title: WORK[0][0], description: WORK[0][1], nodes: [["WhatsApp", MessageCircle], ["AI Agent", Bot], ["CRM", Database], ["Follow-up", Zap]] },
  { icon: Plane, tag: "TRAVEL TECHNOLOGY", title: WORK[1][0], description: WORK[1][1], nodes: [["Search", Plane], ["Booking", CheckCircle2], ["Customer", Database], ["Operations", BarChart3]] },
  { icon: FlaskConical, tag: "HEALTHCARE TECHNOLOGY", title: WORK[2][0], description: WORK[2][1], nodes: [["Registration", CheckCircle2], ["Tests", FlaskConical], ["Report", BarChart3], ["WhatsApp", MessageCircle]] },
  { icon: ShoppingBag, tag: "COMMERCE EXPERIENCE", title: WORK[3][0], description: WORK[3][1], nodes: [["Discover", ShoppingBag], ["Cart", CheckCircle2], ["Checkout", Zap], ["Retention", BarChart3]] },
];

function FlowPreview({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e13] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(91,140,255,.14),transparent_55%)]" />
      <div className="relative flex min-h-[150px] flex-col justify-center gap-3">
        {nodes.map(([label, Icon], i) => (
          <div key={label} className="flex items-center gap-2">
            <motion.div className="flex flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2.5" initial={{ opacity: 0.55 }} animate={{ opacity: [0.55, 1, 0.55] }} transition={{ duration: 3, delay: i * 0.45, repeat: Infinity, ease: "easeInOut" }}>
              <Icon size={14} className="text-acc" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300">{label}</span>
              <span className="ml-auto text-[10px] uppercase tracking-wider text-slate-600">connected</span>
            </motion.div>
            {i < nodes.length - 1 && <motion.span className="h-4 w-px bg-gradient-to-b from-acc to-acc2" animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.7, 1, 0.7] }} transition={{ duration: 1.8, delay: i * 0.45, repeat: Infinity }} aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="overflow-hidden bg-ink pb-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold text-acc">Featured work</p>
          <h2 className="max-w-[14ch] text-4xl font-bold tracking-tighter sm:text-6xl">Systems in motion.</h2>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">Real business workflows, connected into systems that keep information moving from the first customer interaction to the next action.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {SYSTEMS.map((system, i) => {
            const Icon = system.icon;
            const isActive = active === i;
            return (
              <Reveal key={system.title} delay={(i % 2) * 0.08}>
                <motion.article onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} tabIndex={0} className={`group relative h-full overflow-hidden rounded-3xl border bg-[#10131a] p-5 outline-none transition duration-500 ${
                  isActive ? "border-acc/40 shadow-[0_20px_70px_rgba(70,224,192,.08)]" : "border-white/10"
                }`} whileHover={{ y: -5 }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[.05]"><Icon size={19} className="text-acc" aria-hidden="true" /></div>
                      <div><p className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">{system.tag}</p><h3 className="mt-1 text-xl font-bold tracking-tight">{system.title}</h3></div>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acc" aria-hidden="true" />
                  </div>
                  <FlowPreview nodes={system.nodes} />
                  <p className="mt-4 text-sm leading-6 text-slate-400">{system.description}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d1118] p-7 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(70,224,192,.10),transparent_45%)]" />
            <div className="relative">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-acc">One connected ecosystem</p><h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">One business. Multiple systems. One flow.</h3></div>
                <p className="max-w-md text-sm leading-6 text-slate-400">Websites, conversations, customers, operations and analytics can work together instead of living in separate tools.</p>
              </div>
              <div className="mt-9 grid gap-2 sm:grid-cols-5">
                {["Website", "Customers", "CRM", "Automation", "Analytics"].map((label, i) => (
                  <div key={label} className="relative flex items-center gap-2">
                    <motion.div className="relative z-10 flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[.04] px-3 py-3 text-xs font-semibold text-slate-300" animate={active === i % SYSTEMS.length ? { borderColor: "rgba(70,224,192,.5)" } : { borderColor: "rgba(255,255,255,.1)" }}>{label}</motion.div>
                    {i < 4 && <motion.div className="absolute left-[70%] hidden h-px w-[30%] bg-gradient-to-r from-acc to-acc2 sm:block" animate={{ opacity: [0.25, 0.9, 0.25] }} transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <dl className="mt-16 grid gap-6 sm:grid-cols-3">
          {[["24/7", "Automated workflows"], ["1", "Connected business ecosystem"], ["∞", "Possibilities to automate"]].map(([v, l]) => (
            <div key={l} className="border-t border-white/10 pt-5"><dt className="grad-text text-7xl font-bold tracking-tighter">{v}</dt><dd className="text-slate-400">{l}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}