import { MessageCircle, Mail } from "lucide-react";

export default function DirectContact() {
  const whatsapp = "https://wa.me/923407465567?text=Hi%20CompanyFlow%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  return (
    <div className="mb-6 rounded-3xl border border-slate-200 bg-ink p-7 text-white sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acc">Talk to CompanyFlow</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">Prefer a direct conversation?</h2>
      <p className="mt-2 max-w-xl text-slate-300">Message us on WhatsApp or send an email and we’ll get back to you.</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white transition hover:scale-[1.02]">
          <MessageCircle className="h-5 w-5" /> WhatsApp +92 340 7465567
        </a>
        <a href="mailto:alihotspot1@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
          <Mail className="h-5 w-5" /> alihotspot1@gmail.com
        </a>
      </div>
    </div>
  );
}
