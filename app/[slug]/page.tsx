import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const SERVICES = {
  "web-design-uk": {
    label: "Web Design & Development",
    title: "Web Design & Development for UK Businesses",
    description: "CompanyFlow builds fast, modern websites for UK businesses that need a stronger digital presence, clearer customer journeys and measurable enquiries.",
    intro: "Your website should explain what you do quickly, build trust and make the next step obvious. CompanyFlow combines strategy, UX, responsive development and conversion-focused content to create websites that work as part of your business—not just as a brochure.",
    points: ["Responsive websites built around real customer journeys", "Clear service pages and calls to action for stronger enquiries", "Technical foundations designed for speed, accessibility and search visibility", "Analytics-ready structures that make future optimisation easier"],
    uses: ["Company websites and service businesses", "Professional services and local businesses", "Landing pages for campaigns and new services", "Website redesigns where the current site no longer represents the business"],
  },
  "custom-software-development": {
    label: "Custom Software",
    title: "Custom Software Development for Growing Businesses",
    description: "CompanyFlow develops custom business software for UK companies that need workflows, portals or internal tools beyond off-the-shelf software.",
    intro: "When spreadsheets, disconnected tools or manual processes start slowing a team down, custom software can connect the workflow around the way the business actually operates. CompanyFlow designs and builds practical systems around your processes, users and data.",
    points: ["Customer and staff portals tailored to your workflow", "Internal dashboards, approval flows and operational tools", "API integrations that connect existing services and data", "Scalable architecture with a clear path for future features"],
    uses: ["Operational systems replacing spreadsheet-heavy processes", "Client portals and account areas", "Booking, order or case-management workflows", "Industry-specific software where generic tools create gaps"],
  },
  "crm-erp-development": {
    label: "CRM & ERP Development",
    title: "CRM & ERP Systems for Connected Business Operations",
    description: "CompanyFlow builds CRM and ERP systems that connect customers, sales, operations, records and business data in one practical workflow.",
    intro: "A CRM or ERP should reflect how your team works. CompanyFlow builds connected business systems that bring customer information, operational records, tasks and reporting together so teams can spend less time moving data between tools.",
    points: ["Customer, lead and account management", "Sales pipelines, tasks and follow-up workflows", "Operations, records, orders and internal approvals", "Dashboards and reporting built around the information your team needs"],
    uses: ["Businesses outgrowing spreadsheets", "Teams working across several disconnected systems", "Service companies managing customers and projects", "Operations that need central records and role-based workflows"],
  },
  "ai-automation": {
    label: "AI & Business Automation",
    title: "AI Automation for UK Businesses",
    description: "CompanyFlow helps UK businesses automate repetitive work with practical AI workflows, integrations and human handover where it matters.",
    intro: "AI is most useful when it removes friction from a real workflow. CompanyFlow identifies repetitive tasks, connects the systems involved and introduces AI where it can save time, improve response speed or help teams handle more enquiries.",
    points: ["AI-assisted customer conversations and lead qualification", "Automated summaries, routing, notifications and follow-ups", "Workflow automation across websites, CRM and business systems", "Human handover for situations that require staff judgement"],
    uses: ["Lead capture and qualification", "Customer support and enquiry handling", "Internal summaries and repetitive administration", "Follow-up workflows that otherwise depend on manual reminders"],
  },
  "whatsapp-automation": {
    label: "WhatsApp Automation",
    title: "WhatsApp Automation for Customer Enquiries and Sales",
    description: "CompanyFlow builds WhatsApp automation workflows for enquiries, lead capture, customer support, follow-ups and business operations.",
    intro: "For businesses that already communicate with customers on WhatsApp, automation can turn conversations into structured workflows. CompanyFlow connects WhatsApp conversations with business logic, customer records and follow-up processes while keeping people involved when needed.",
    points: ["Automated responses for common customer questions", "Lead capture and qualification from WhatsApp conversations", "CRM-connected follow-ups and notifications", "Human takeover for complex or high-value conversations"],
    uses: ["Sales enquiries and lead qualification", "Appointment and booking conversations", "Customer support and status updates", "Follow-up campaigns and internal notifications"],
  },
  "ecommerce-development": {
    label: "E-commerce Development",
    title: "E-commerce Development for Growing Brands",
    description: "CompanyFlow creates conversion-focused e-commerce experiences that make products easier to discover, buy and return to.",
    intro: "A successful online store needs more than a catalogue. CompanyFlow focuses on the complete customer journey—from discovery and product information to checkout, retention and the operational workflows behind each order.",
    points: ["Responsive storefronts designed around product discovery", "Clear navigation, product information and conversion paths", "Commerce integrations and operational workflows", "Foundations for analytics, retention and ongoing optimisation"],
    uses: ["New online stores and brand launches", "E-commerce redesigns and conversion improvements", "Product catalogues with complex business requirements", "Stores that need better links between customers, orders and operations"],
  },
  "business-automation": {
    label: "Business Automation",
    title: "Business Automation That Connects Your Workflow",
    description: "CompanyFlow automates practical business processes across websites, CRM, messaging, internal systems and everyday operations.",
    intro: "Automation should remove repetitive steps without making the business harder to understand. CompanyFlow maps the workflow first, then connects systems and automates the right handoffs so information moves where it needs to go.",
    points: ["Automated lead routing, notifications and follow-ups", "Data synchronisation between business tools", "Approval, task and status workflows", "Automation designed with clear exceptions and human handover"],
    uses: ["Sales and lead-management workflows", "Customer onboarding and follow-up", "Internal operations and approvals", "Reporting, notifications and cross-system data movement"],
  },
} as const;

type ServiceSlug = keyof typeof SERVICES;

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES[params.slug as ServiceSlug];
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/${params.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE.url}/${params.slug}`,
      siteName: "CompanyFlow",
      locale: "en_GB",
      type: "website",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES[params.slug as ServiceSlug];
  if (!service) notFound();

  const related = Object.entries(SERVICES).filter(([slug]) => slug !== params.slug).slice(0, 3);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE.url}/${params.slug}#service`,
        name: service.label,
        description: service.description,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "GB",
        url: `${SITE.url}/${params.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: service.label, item: `${SITE.url}/${params.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <header className="border-b border-white/10 bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40">
          <Link href="/" className="text-sm text-acc hover:underline">← CompanyFlow UK</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-acc">{service.label}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/#contact" className="rounded-full bg-gradient-to-r from-acc to-acc2 px-6 py-3.5 font-semibold text-ink">Start a Project →</a>
            <Link href="/" className="rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white hover:bg-white/10">Explore CompanyFlow</Link>
          </div>
        </div>
      </header>
      <main id="top" className="bg-paper text-ink">
        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">What we build</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technology designed around the way your business works.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{service.description}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <h2 className="text-xl font-bold">Core capabilities</h2>
              <ul className="mt-5 space-y-4">
                {service.points.map((point) => <li key={point} className="flex gap-3 text-slate-600"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-acc" />{point}</li>)}
              </ul>
            </div>
          </div>
        </section>
        <section className="border-y border-slate-200 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Where it helps</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Practical use cases for growing teams.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.uses.map((use) => <div key={use} className="rounded-2xl border border-slate-200 p-6"><h3 className="font-semibold">{use}</h3><p className="mt-2 text-sm leading-6 text-slate-500">We shape the workflow around your customers, team and existing systems.</p></div>)}
            </div>
          </div>
        </section>
        <section className="bg-ink py-20 text-white sm:py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acc">The CompanyFlow approach</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Understand the workflow first. Then build the technology.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">We start with the business problem, map the people and processes involved, design the experience and then build the digital system around it.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-300"><span className="rounded-full border border-white/10 px-4 py-2">01 Discover</span><span className="rounded-full border border-white/10 px-4 py-2">02 Design</span><span className="rounded-full border border-white/10 px-4 py-2">03 Build</span><span className="rounded-full border border-white/10 px-4 py-2">04 Improve</span></div>
          </div>
        </section>
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Related services</p><h2 className="mt-3 text-3xl font-bold tracking-tight">Build the wider digital system.</h2></div>
              <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-ink">Back to all solutions →</Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map(([slug, item]) => <Link key={slug} href={`/${slug}`} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"><p className="text-sm font-semibold text-acc">{item.label}</p><h3 className="mt-2 font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{item.description}</p></Link>)}
            </div>
          </div>
        </section>
        <section className="border-t border-slate-200 bg-blue-50 py-16">
          <div className="mx-auto max-w-3xl px-6 text-center"><h2 className="text-3xl font-bold tracking-tight">Have a workflow you want to improve?</h2><p className="mt-4 leading-7 text-slate-600">Tell CompanyFlow what is slowing the business down and we can map the right digital approach.</p><a href="/#contact" className="mt-7 inline-flex rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:opacity-90">Talk to CompanyFlow →</a></div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
