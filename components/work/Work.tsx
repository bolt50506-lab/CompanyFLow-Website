"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { WORK } from "@/lib/data";

export default function Work() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const move = (direction: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const amount = Math.min(viewport.clientWidth * 0.86, 390);
    viewport.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => move(1), 3600);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="work" className="overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-acc">Our True Mastery</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tighter sm:text-6xl">Projects That Shows Our Excellence</h2>
        </Reveal>
      </div>

      <div
        ref={viewportRef}
        className="mt-12 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <div className="flex w-max gap-5 pl-6 pr-6 lg:pl-[max(24px,calc((100vw-1152px)/2))] lg:pr-[max(24px,calc((100vw-1152px)/2))]">
          {WORK.map((project, index) => (
            <motion.article
              key={project.slug}
              className="group w-[calc(100vw-48px)] shrink-0 overflow-hidden rounded-[10px] border border-[#23B2935E] bg-[radial-gradient(circle_at_center,#103B57_0%,#181C14_100%)] p-5 sm:w-[calc(50vw-30px)] lg:w-[calc((100vw-96px)/4)] lg:max-w-[345px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
              whileHover={{ y: -6 }}
            >
              <Link href={"/project/" + project.slug} className="block h-full">
                <div className="flex min-h-[520px] flex-col">
                  <div className="relative mx-auto mt-2 aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10131a]/35 via-transparent to-transparent" />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-acc">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h3>
                    <p className="mt-4 min-h-[62px] text-sm leading-6 text-slate-300">{project.description}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-acc px-5 py-3 font-semibold text-ink transition group-hover:bg-white">
                    Explore <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-end gap-3 px-6">
        <button type="button" onClick={() => move(-1)} aria-label="Previous projects" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-acc hover:text-acc">
          <ChevronLeft size={21} />
        </button>
        <button type="button" onClick={() => move(1)} aria-label="Next projects" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-acc hover:text-acc">
          <ChevronRight size={21} />
        </button>
      </div>
    </section>
  );
}
