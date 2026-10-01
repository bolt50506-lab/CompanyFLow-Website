import { Logo } from "@/components/navbar/Navbar";

const L = [
  ["Solutions", "#solutions"],
  ["Industries", "#industries"],
  ["Products", "#products"],
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
  ["Web Design", "/web-design-uk"],
  ["Custom Software", "/custom-software-development"],
  ["CRM & ERP", "/crm-erp-development"],
  ["AI Automation", "/ai-automation"],
  ["WhatsApp", "/whatsapp-automation"],
  ["E-commerce", "/ecommerce-development"],
];

export default function Footer() {
  return (
    <footer className="bg-[#06070a] py-16 text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm">Digital systems that make business flow.</p>
          <a
            href="mailto:alihotspot1@gmail.com"
            className="mt-4 inline-block text-sm text-slate-300 transition hover:text-white"
          >
            alihotspot1@gmail.com
          </a>
        </div>

        <nav aria-label="Footer" className="md:justify-self-end">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {L.map(([n, h]) => (
              <li key={n}>
                <a href={h} className="transition hover:text-white">{n}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="border-t border-white/10 pt-6 text-sm text-slate-500 md:col-span-2">
          CompanyFlow.co.uk — Digital systems for businesses that want to move forward.
        </p>
      </div>
    </footer>
  );
}
