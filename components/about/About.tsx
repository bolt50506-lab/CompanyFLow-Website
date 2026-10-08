import { Reveal } from "@/components/ui/Reveal";

const FLOW = [
  ["01","Discover","Understand the business, customers and the real problem."],
  ["02","Design","Turn the problem into a clear digital experience and system."],
  ["03","Build","Engineer the website, software, automation and integrations."],
  ["04","Improve","Launch, measure and continuously make the flow better."],
];

const STATS = [["10+","Products & platforms"],["500+","Users reached"],["100%","Built around outcomes"]];

export default function About(){
 return (
  <section id="about" className="cf-home-company relative overflow-hidden bg-[#050706] py-28 text-white sm:py-36">
   <div className="cf-home-company-glow cf-home-company-glow-a"/>
   <div className="cf-home-company-glow cf-home-company-glow-b"/>
   <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
     <Reveal>
      <p className="cf-eyebrow">About CompanyFlow</p>
      <h2 className="mt-5 max-w-[10ch] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[.86] tracking-[-.07em]">
       We build <span className="text-[#a8ff3e]">what matters.</span>
      </h2>
     </Reveal>
     <Reveal delay={.08}>
      <p className="max-w-2xl text-lg leading-8 text-[#9ca69e] sm:text-xl">
       CompanyFlow connects websites, software, ecommerce, AI and automation into digital systems that help real businesses move faster.
      </p>
      <a href="/about/" className="cf-home-company-link mt-7 inline-flex">Explore CompanyFlow <span>↗</span></a>
     </Reveal>
    </div>

    <div className="mt-20 grid gap-3 lg:grid-cols-4">
     {FLOW.map(([n,title,detail],i)=>(
      <Reveal key={n} delay={i*.06}>
       <article className="cf-home-company-card">
        <span>{n}</span>
        <h3>{title}</h3>
        <p>{detail}</p>
        <b>↗</b>
       </article>
      </Reveal>
     ))}
    </div>

    <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
     <Reveal>
      <div className="cf-home-company-story">
       <div>
        <p className="cf-eyebrow">One connected flow</p>
        <h3>From the first customer touchpoint to the final business action.</h3>
       </div>
       <div className="cf-home-company-line">
        <span>Website</span><i>→</i><span>CRM / ERP</span><i>→</i><span>AI + Automation</span><i>→</i><span>Growth</span>
       </div>
      </div>
     </Reveal>
     <Reveal delay={.08}>
      <div className="cf-home-company-stats">
       {STATS.map(([n,l])=><div key={n}><strong>{n}</strong><span>{l}</span></div>)}
      </div>
     </Reveal>
    </div>
   </div>
  </section>
 );
}
