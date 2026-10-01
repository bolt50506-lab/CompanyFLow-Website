"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/data";
import FlowDiagram from "@/components/hero/FlowDiagram";

const ND = [
  { n: "Website", d: "Visitors become enquiries, bookings and orders that flow straight into the system." },
  { n: "Customers", d: "Every touchpoint recorded in one place, not scattered across tools." },
  { n: "WhatsApp", d: "Conversations become leads, support tickets and follow-ups." },
  { n: "CRM", d: "Contacts, deals and history stay current without re-typing." },
  { n: "Automation", d: "Repetitive tasks and replies run in the background, around the clock." },
  { n: "Analytics", d: "See what's working across the whole business, not one tool at a time." },
];

export default function Solutions() {
  const [solutionIndex, setSolutionIndex] = useState(0);
  const [nodeIndex, setNodeIndex] = useState<number | null>(null);
  const selected = SOLUTIONS[solutionIndex];
  const node = nodeIndex === null ? null : ND[nodeIndex];

  return (
    <section id="solutions" className="bg-ink py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold text-acc">Solutions</p>
          <h2 className="max-w-[16ch] text-4xl font-bold tracking-tighter sm:text-6xl">Everything your business needs to move forward.</h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Solutions">
          {SOLUTIONS.map(([t, d, image], index) => (
            <Reveal key={t} delay={index * 0.06}>
              <button type="button" onClick={() => setSolutionIndex(index)} onFocus={() => setSolutionIndex(index)} aria-pressed={solutionIndex === index}
                className={`group relative flex min-h-[250px] h-full w-full flex-col overflow-hidden rounded-3xl border p-7 text-left transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(0,0,0,.3)] ${solutionIndex === index ? "border-acc/70" : "border-white/10"}`}>
                <img src={image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/20" />
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-acc2/20 blur-2xl transition duration-700 group-hover:-translate-x-6 group-hover:translate-y-6" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">0{index + 1}</span>
                <div className="relative mt-auto pr-8"><h3 className="text-2xl font-bold tracking-tight">{t}</h3><p className="mt-2 text-slate-300">{d}</p></div>
                <ArrowRight className={`absolute bottom-7 right-7 text-acc transition duration-300 ${solutionIndex === index ? "translate-x-1" : "group-hover:translate-x-1"}`} aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] lg:grid lg:grid-cols-[1.05fr_1fr]">
            <div className="relative min-h-[300px] overflow-hidden"><img src={selected[2]} alt="" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/20 to-ink/80" /></div>
            <div className="flex min-h-[300px] flex-col justify-center p-8 sm:p-10"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-acc">Selected solution</p><h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{selected[0]}</h3><p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">{selected[1]}</p></div>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FlowDiagram nodes={ND} interactive onActive={setNodeIndex} />
          <div className="min-h-[170px] rounded-2xl border border-white/10 bg-white/[.02] p-7" aria-live="polite"><h3 className="mb-2 text-xl font-bold text-acc">{node ? node.n : "Everything connected. One system."}</h3><p className="text-slate-400">{node ? node.d : "Hover or focus a node to see how each part of your business plugs into CompanyFlow."}</p></div>
        </div>
      </div>
    </section>
  );
}
