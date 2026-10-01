"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { STEPS } from "@/lib/data";
export default function Process(){
 const ref=useRef<HTMLDivElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:["start 70%","end 60%"]});const h=useSpring(scrollYProgress,{stiffness:120,damping:30});
 return <section className="bg-ink py-28 text-white"><div className="mx-auto max-w-6xl px-6"><p className="mb-3 text-sm font-semibold text-acc">How it works</p><h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">From idea to system.</h2>
 <div ref={ref} className="relative mt-14 max-w-xl pl-14"><div className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-white/10"/><motion.div style={{scaleY:h}} className="absolute left-[19px] top-0 h-full w-0.5 origin-top bg-gradient-to-b from-acc to-acc2"/>
 {STEPS.map(([n,t,d])=><motion.div key={n} initial={{opacity:.3}} whileInView={{opacity:1}} viewport={{margin:"-40% 0px -40% 0px"}} className="relative pb-20"><span className="absolute -left-14 top-0 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-ink text-sm font-semibold">{n}</span><h3 className="mb-2 text-3xl font-bold tracking-tight">{t}</h3><p className="text-slate-400">{d}</p></motion.div>)}</div></div></section>}
