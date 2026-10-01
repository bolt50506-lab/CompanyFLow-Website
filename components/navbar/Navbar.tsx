"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/data";

export function Logo({ light = true, href = "/" }: { light?: boolean; href?: string }) {
  return <a href={href} aria-label="CompanyFlow home" className={`flex items-center gap-2 text-xl font-bold tracking-tight ${light ? "text-white" : ""}`}>
    <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden><path d="M4 22c7 0 7-12 14-12h10" stroke="#46e0c0" strokeWidth="3" fill="none" strokeLinecap="round"/><circle cx="28" cy="10" r="3" fill="#5b8cff"/></svg>
    Company<span className="font-normal text-acc">Flow</span>
  </a>;
}

export default function Navbar() {
  const pathname = usePathname();
  const [s, setS] = useState(false), [o, setO] = useState(false), [a, setA] = useState("");
  const home = pathname === "/";
  const target = (h: string) => home ? h : `/${h}`;

  useEffect(() => {
    const f = () => setS(scrollY > 40);
    f(); addEventListener("scroll", f, { passive: true });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setA("#" + e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    if (home) NAV.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el); });
    return () => { removeEventListener("scroll", f); io.disconnect(); };
  }, [home]);

  return <nav aria-label="Main" className={`fixed inset-x-0 top-0 z-50 border-b pt-[env(safe-area-inset-top)] transition ${s ? "border-white/10 bg-ink/70 backdrop-blur-xl" : "border-transparent"}`}>
    <a href={home ? "#top" : "/"} className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
      <Logo />
      <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
        {NAV.map(([n, h]) => <li key={h}><a href={target(h)} className={`relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-acc after:transition-transform hover:after:scale-x-100 ${a === h ? "text-white after:scale-x-100" : "after:scale-x-0"}`}>{n}</a></li>)}
      </ul>
      <a href={target("#contact")} className="hidden rounded-full bg-gradient-to-r from-acc to-acc2 px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 md:block">Start a Project →</a>
      <button className="text-white md:hidden" aria-label="Toggle menu" aria-expanded={o} onClick={() => setO(!o)}>{o ? <X /> : <Menu />}</button>
    </div>
    {o && <ul className="space-y-4 bg-ink px-6 py-5 text-slate-200 md:hidden">
      {NAV.map(([n, h]) => <li key={h}><a href={target(h)} onClick={() => setO(false)}>{n}</a></li>)}
      <li><a href={target("#contact")} onClick={() => setO(false)} className="font-semibold text-acc">Start a Project →</a></li>
    </ul>}
  </nav>;
}