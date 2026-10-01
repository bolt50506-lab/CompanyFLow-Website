import { Reveal } from "@/components/ui/Reveal";

const FLOW=[["01","Customer touchpoint","Website, WhatsApp or enquiry"],["02","Connected system","CRM, ERP, AI or custom software"],["03","Business action","Booking, payment, follow-up or operations"]];

export default function About(){
 return <section id="about" className="overflow-hidden bg-paper py-28">
  <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
   <Reveal>
    <p className="mb-3 text-sm font-semibold text-acc2">About CompanyFlow</p>
    <h2 className="max-w-[13ch] text-4xl font-bold tracking-tighter sm:text-6xl">Technology should make business flow.</h2>
    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">CompanyFlow is a UK digital technology company specialising in web design and development, custom software, CRM and ERP systems, AI automation, WhatsApp automation and e-commerce solutions. We build connected digital systems for businesses that want their technology to work together.</p>
    <p className="mt-4 max-w-xl leading-7 text-slate-500">We start with how the business actually works, then design the digital experience around the people, processes and systems behind it — from customer websites and online stores to internal software, CRM, ERP and automated workflows.</p>
   </Reveal>
   <Reveal delay={.08}>
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-ink p-6 text-white shadow-2xl shadow-slate-300/30 sm:p-8">
     <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-acc/10 blur-3xl"/>
     <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-[.18em] text-acc">The CompanyFlow approach</p>
      <div className="mt-7 space-y-3">
       {FLOW.map(([n,title,detail],i)=><div key={n} className="relative flex items-center gap-4">
        <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-xs font-semibold text-acc">{n}</div>
        <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[.035] px-4 py-3"><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-slate-400">{detail}</p></div>
        {i<FLOW.length-1&&<span className="absolute left-5 top-10 h-5 w-px bg-gradient-to-b from-acc to-acc2" aria-hidden="true"/>}
       </div>)}
      </div>
      <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-slate-400"><span className="rounded-full border border-white/10 px-3 py-1.5">Web</span><span className="rounded-full border border-white/10 px-3 py-1.5">Software</span><span className="rounded-full border border-white/10 px-3 py-1.5">AI</span><span className="rounded-full border border-white/10 px-3 py-1.5">Automation</span></div>
     </div>
    </div>
   </Reveal>
  </div>
 </section>
}