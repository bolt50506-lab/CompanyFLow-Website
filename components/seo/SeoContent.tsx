const FAQ = [
  ["What does CompanyFlow do?", "CompanyFlow is a UK digital technology company providing web design and development, custom software, CRM and ERP systems, AI automation, WhatsApp automation and e-commerce solutions."],
  ["Does CompanyFlow build custom business software?", "Yes. CompanyFlow designs and develops custom software around a business's workflows, including customer management, operations, reporting, payments and integrations."],
  ["Can CompanyFlow automate customer enquiries on WhatsApp?", "Yes. WhatsApp automation can connect customer conversations with lead capture, CRM records, follow-ups, support workflows and other business processes."],
  ["Can CompanyFlow build CRM and ERP systems?", "Yes. CompanyFlow builds connected CRM and ERP solutions that bring customer, operational and business data into one workflow."],
  ["Does CompanyFlow work with UK businesses?", "Yes. CompanyFlow is a UK-focused digital technology company serving businesses that need modern websites, software, AI and automation."],
  ["How do I start a project with CompanyFlow?", "Contact CompanyFlow with your business goal, current workflow or problem. The team can then map the required website, software, automation or integration work."],
] as const;

export default function SeoContent() {
  return (
    <section id="faq" className="bg-paper py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-acc2">Frequently asked questions</p>
          <h2 id="faq-heading" className="text-4xl font-bold tracking-tighter sm:text-6xl">Web, software, AI and automation — explained.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn how CompanyFlow helps UK businesses with web design, custom software development, CRM and ERP, AI automation, WhatsApp workflows and e-commerce.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {FAQ.map(([question, answer]) => (
            <details key={question} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-900 marker:hidden">
                {question}
                <span className="float-right text-acc2 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
