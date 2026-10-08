import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  ["01","Clarity","Complex problems become simple experiences when every decision has a purpose."],
  ["02","Craft","We care about the details users notice and the engineering details they never should."],
  ["03","Impact","Good technology should create measurable value, not just look impressive."],
];

const process = [
  ["01","Discover","We understand the business, customers, constraints and the real problem behind the request."],
  ["02","Design","We turn that understanding into a clear experience, system architecture and measurable plan."],
  ["03","Build","We engineer the product, website, integrations and automation for real-world use."],
  ["04","Improve","We launch, measure, optimise and keep improving as the business grows."],
];

const people = [
  ["Ali Ahmed","Founder & Technology Lead","Product, software and digital systems"],
  ["Product","Strategy & Experience","Turning complex requirements into clear journeys"],
  ["Engineering","Software & Automation","Building the systems behind the experience"],
];

export default function CompanyPage() {
  return (
    <div className="cf-company min-h-screen overflow-hidden bg-[#050706] text-white">
      <Navbar />

      <main>
        <section className="cf-company-hero relative flex min-h-[780px] items-center">
          <div className="cf-orb cf-orb-one" />
          <div className="cf-orb cf-orb-two" />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
            <Reveal>
              <p className="mb-7 text-xs font-bold uppercase tracking-[.22em] text-[#a8ff3e]">About CompanyFlow</p>
              <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[.84] tracking-[-.075em]">
                We build<br /><span className="text-[#a8ff3e]">what matters.</span>
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-[#aeb6af] sm:text-xl">
                CompanyFlow is a digital product studio creating software, websites, ecommerce experiences and automation that move real businesses forward.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/contact/" className="cf-green-button">Start a conversation <span>↗</span></a>
                <a href="#story" className="cf-outline-button">Explore our story <span>↓</span></a>
              </div>
            </Reveal>

            <Reveal delay={.1} className="relative">
              <div className="cf-hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88"
                  alt="CompanyFlow team collaborating"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050706]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs uppercase tracking-[.14em] backdrop-blur-md">Built around real businesses</span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#a8ff3e] text-xl text-[#050706]">↗</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-6 sm:grid-cols-3 lg:px-10">
            {[["10+","Products shipped"],["500+","Business users"],["100%","Focused on outcomes"]].map(([n,l],i)=>(
              <div key={n} className={`cf-stat-cell ${i !== 2 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""}`}>
                <strong>{n}</strong><span>{l}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="story" className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
            <Reveal>
              <p className="cf-eyebrow">Our story</p>
              <h2 className="cf-big-heading">Technology should feel human.</h2>
            </Reveal>
            <Reveal delay={.08}>
              <p className="max-w-3xl text-xl leading-9 text-[#a0a8a1]">
                We started CompanyFlow with one belief: businesses should not have to choose between powerful technology and a great experience.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#747d75]">
                Our work connects strategy, design and engineering into products people actually want to use—from customer-facing websites and online stores to internal software, CRM, ERP and automated workflows.
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#747d75]">
                We stay close to the problem, build around the way the business really operates and keep improving after launch.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10 lg:pb-40">
          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div><p className="cf-eyebrow">How we work</p><h2 className="cf-big-heading">Simple thinking.<br />Serious execution.</h2></div>
              <p className="max-w-md text-base leading-7 text-[#747d75]">A focused workflow that turns a business problem into a useful, measurable digital system.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map(([n,t,d],i)=>(
              <Reveal key={n} delay={i*.05}>
                <article className="cf-process-card group">
                  <span className="text-xs font-bold tracking-[.18em] text-[#a8ff3e]">{n} /</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <span className="cf-card-arrow">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#080b09]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-32 lg:grid-cols-[.85fr_1.15fr] lg:px-10 lg:py-40">
            <Reveal>
              <p className="cf-eyebrow">The CompanyFlow approach</p>
              <h2 className="cf-big-heading">One flow from idea to impact.</h2>
              <div className="mt-9">
                <button className="cf-play" aria-label="Play CompanyFlow introduction"><span>▶</span></button>
                <p className="mt-4 text-xs uppercase tracking-[.16em] text-[#69716b]">How we work</p>
              </div>
            </Reveal>
            <div className="space-y-4">
              {process.map(([n,t,d],i)=>(
                <Reveal key={n} delay={i*.06}>
                  <div className="cf-step">
                    <span>{n}</span>
                    <div><h3>{t}</h3><p>{d}</p></div>
                    <b>↗</b>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <Reveal>
            <p className="cf-eyebrow">What drives us</p>
            <h2 className="cf-big-heading">Our principles.</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {principles.map(([n,t,d],i)=>(
              <Reveal key={n} delay={i*.06}>
                <article className="cf-principle"><span>{n}</span><h3>{t}</h3><p>{d}</p></article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[#080b09] py-32 lg:py-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
                <div><p className="cf-eyebrow">The people behind the work</p><h2 className="cf-big-heading">One team.<br />Many disciplines.</h2></div>
                <p className="max-w-md text-base leading-7 text-[#747d75]">Product, design, development and automation working together around one goal: making your business better.</p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {people.map(([name,role,desc],i)=>(
                <Reveal key={name} delay={i*.06}>
                  <article className="cf-person">
                    <div className="cf-avatar">{i === 0 ? "AA" : i === 1 ? "P" : "E"}</div>
                    <div><h3>{name}</h3><p>{role}</p><span>{desc}</span></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="cf-lime-cta">
              <div><p>CompanyFlow</p><h2>Have a problem<br />worth solving?</h2></div>
              <a href="/contact/" className="cf-dark-button">Start a conversation <span>↗</span></a>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-28 text-center lg:px-10 lg:pb-40">
          <Reveal>
            <p className="cf-eyebrow">CompanyFlow</p>
            <h2 className="mx-auto mt-4 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[.86] tracking-[-.07em]">Let's build<br />something useful.</h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[#747d75]">Tell us what you are trying to improve, automate or launch. We'll help turn the idea into a practical digital product.</p>
            <a href="/contact/" className="cf-green-button mt-9 inline-flex">Talk to CompanyFlow <span>↗</span></a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
