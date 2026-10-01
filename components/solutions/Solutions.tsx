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
  const [i, setI] = useState<number | null>(null);

  return (
    <section id="solutions" className="bg-ink py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold text-acc">Solutions</p>
          <h2 className="max-w-[16ch] text-4xl font-bold tracking-tighter sm:text-6xl">
            Everything your business needs to move forward.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Solutions">
          {SOLUTIONS.map(([t, d], index) => (
            <Reveal key={t} delay={index * 0.06}>
              <article className="group relative flex min-h-[250px] h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-7 transition duration-500 hover:-translate-y-1.5 hover:border-acc/60 hover:bg-white/[.06] hover:shadow-[0_18px_50px_rgba(0,0,0,.18)]">
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-acc2/20 blur-2xl transition duration-700 group-hover:-translate-x-6 group-hover:translate-y-6" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  0{index + 1}
                </span>
                <div className="relative mt-auto pr-8">
                  <h3 className="text-2xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-2 text-slate-400">{d}</p>
                </div>
                <ArrowRight
                  className="absolute bottom-7 right-7 text-acc transition duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <FlowDiagram nodes={ND} interactive onActive={setI} />
          <div
            className="min-h-[170px] rounded-2xl border border-white/10 bg-white/[.02] p-7"
            aria-live="polite"
          >
            <h3 className="mb-2 text-xl font-bold text-acc">
              {i === null ? "Everything connected. One system." : ND[i].n}
            </h3>
            <p className="text-slate-400">
              {i === null
                ? "Hover or focus a node to see how each part of your business plugs into CompanyFlow."
                : ND[i].d}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
