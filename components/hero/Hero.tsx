import FlowDiagram from "./FlowDiagram";
const N=["Website","CRM","AI","WhatsApp","Payments","Customers","Analytics","Automation"].map(n=>({n}));
export default function Hero(){return <header className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-16 pt-32 text-white [background-image:radial-gradient(800px_500px_at_75%_30%,rgba(91,140,255,.22),transparent),radial-gradient(600px_400px_at_20%_90%,rgba(70,224,192,.12),transparent)]">
 <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_1fr]"><div>
  <h1 className="text-5xl font-bold leading-[1.02] tracking-tighter sm:text-7xl lg:text-8xl">Your business.<br/><span className="grad-text">Better connected.</span></h1>
  <p className="mt-6 max-w-xl text-lg text-slate-400">CompanyFlow builds websites, software, AI and automation that help modern businesses work smarter, move faster and grow.</p>
  <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-gradient-to-r from-acc to-acc2 px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5">Start a Project →</a><a href="#solutions" className="rounded-full border border-white/15 px-6 py-3.5 font-semibold hover:bg-white/10">Explore Solutions</a></div>
  <p className="mt-9 text-sm tracking-wide text-slate-500">Digital systems • AI • Automation • Software</p></div>
  <FlowDiagram nodes={N}/></div></header>}
