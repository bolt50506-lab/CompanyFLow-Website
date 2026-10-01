"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FlowDiagram from "@/components/hero/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";
import { SOLUTIONS } from "@/lib/data";
const ND=[{n:"Website",d:"Visitors become enquiries, bookings and orders that flow straight into the system."},{n:"Customers",d:"Every touchpoint recorded in one place, not scattered across tools."},{n:"WhatsApp",d:"Conversations become leads, support tickets and follow-ups."},{n:"CRM",d:"Contacts, deals and history stay current without re-typing."},{n:"Automation",d:"Repetitive tasks and replies run in the background, around the clock."},{n:"Analytics",d:"See what's working across the whole business, not one tool at a time."}];
export default function Solutions(){const [i,setI]=useState<number|null>(null);
 return <section id="solutions" className="bg-ink py-28 text-white"><div className="mx-auto max-w-6xl px-6"><Reveal><p className="mb-3 text-sm font-semibold text-acc">Solutions</p><h2 className="max-w-[16ch] text-4xl font-bold tracking-tighter sm:text-6xl">Everything your business needs to move forward.</h2></Reveal></div>
 <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6" tabIndex={0} aria-label="Solutions">{SOLUTIONS.map(([t,d])=><article key={t} className="group relative min-h-[280px] w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[.04] p-7 transition hover:-translate-y-1.5 hover:border-acc">
  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-acc2/20 blur-2xl transition duration-700 group-hover:-translate-x-6 group-hover:translate-y-6"/>
  <h3 className="relative mt-20 text-2xl font-bold tracking-tight">{t}</h3><p className="relative mt-2 text-slate-400">{d}</p><ArrowRight className="absolute bottom-6 right-6 text-acc transition group-hover:translate-x-1"/></article>)}</div>
 <div className="mx-auto mt-14 grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.4fr_1fr]"><FlowDiagram nodes={ND} interactive onActive={setI}/>
  <div className="min-h-[170px] rounded-2xl border border-white/10 p-7" aria-live="polite"><h3 className="mb-2 text-xl font-bold text-acc">{i===null?"Everything connected. One system.":ND[i].n}</h3><p className="text-slate-400">{i===null?"Hover or focus a node to see how each part of your business plugs into CompanyFlow.":ND[i].d}</p></div></div></section>}
