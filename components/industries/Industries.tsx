"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";
export default function Industries(){const [k,setK]=useState("Travel");
 return <section id="industries" className="bg-gradient-to-b from-blue-50 to-paper py-28"><div className="mx-auto max-w-6xl px-6"><p className="mb-3 text-sm font-semibold text-acc2">Industries</p><h2 className="max-w-[20ch] text-4xl font-bold tracking-tighter sm:text-6xl">Technology shaped around your industry.</h2>
 <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]"><div className="flex flex-wrap content-start gap-2.5">{Object.keys(INDUSTRIES).map(i=><button key={i} onMouseEnter={()=>setK(i)} onFocus={()=>setK(i)} onClick={()=>setK(i)} aria-pressed={k===i} className={`rounded-full border px-5 py-3 font-semibold transition ${k===i?"border-ink bg-ink text-white":"border-slate-300 bg-white hover:bg-ink hover:text-white"}`}>{i}</button>)}</div>
 <div className="flex min-h-[240px] items-end rounded-3xl bg-ink p-10 text-white [background-image:radial-gradient(400px_200px_at_80%_0,rgba(91,140,255,.35),transparent)]" aria-live="polite"><AnimatePresence mode="wait"><motion.div key={k} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}}><h3 className="mb-3 text-4xl font-bold tracking-tight">{k}</h3><p className="font-semibold text-acc">{INDUSTRIES[k]}</p></motion.div></AnimatePresence></div></div></div></section>}
