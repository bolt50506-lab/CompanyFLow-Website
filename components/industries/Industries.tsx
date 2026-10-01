"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INDUSTRIES, INDUSTRY_IMAGES } from "@/lib/data";

export default function Industries(){
 const [k,setK]=useState("Travel");
 return <section id="industries" className="bg-gradient-to-b from-blue-50 to-paper py-28">
  <div className="mx-auto max-w-6xl px-6">
   <p className="mb-3 text-sm font-semibold text-acc2">Industries</p>
   <h2 className="max-w-[20ch] text-4xl font-bold tracking-tighter sm:text-6xl">Technology shaped around your industry.</h2>
   <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
    <div className="flex flex-wrap content-start gap-2.5">
     {Object.keys(INDUSTRIES).map(i=><button key={i} onMouseEnter={()=>setK(i)} onFocus={()=>setK(i)} onClick={()=>setK(i)} aria-pressed={k===i} className={`rounded-full border px-5 py-3 font-semibold transition ${k===i?"border-ink bg-ink text-white":"border-slate-300 bg-white hover:bg-ink hover:text-white"}`}>{i}</button>)}
    </div>
    <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-white/30 bg-ink text-white shadow-[0_20px_60px_rgba(15,23,42,.14)]" aria-live="polite">
     <AnimatePresence mode="wait">
      <motion.div key={k} initial={{opacity:0,scale:1.03}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.99}} transition={{duration:.35}} className="absolute inset-0">
       <img src={INDUSTRY_IMAGES[k]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
       <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/10" />
       <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-acc">Built for {k}</p>
        <h3 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">{k}</h3>
        <p className="max-w-xl font-semibold leading-7 text-slate-200">{INDUSTRIES[k]}</p>
       </div>
      </motion.div>
     </AnimatePresence>
    </div>
   </div>
  </div>
 </section>
}
