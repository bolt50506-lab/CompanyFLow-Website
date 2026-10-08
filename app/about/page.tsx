import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050706]">
        <section className="relative flex min-h-[78vh] items-end overflow-hidden bg-[#050706] px-6 pb-20 pt-32 text-white sm:px-10 lg:px-16 lg:pb-28">
          <div className="absolute left-[-10%] top-[15%] h-[480px] w-[480px] rounded-full bg-[#a8ff3e]/10 blur-[130px]" />
          <div className="absolute bottom-[-25%] right-[-5%] h-[520px] w-[520px] rounded-full bg-[#35ff91]/10 blur-[140px]" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="cf-eyebrow">CompanyFlow / Company</p>
            <h1 className="mt-7 max-w-6xl text-[clamp(4.5rem,12vw,11rem)] font-semibold leading-[.78] tracking-[-.085em]">
              We build<br /><span className="text-[#a8ff3e]">what matters.</span>
            </h1>
            <div className="mt-12 flex max-w-2xl items-start justify-between gap-8 border-t border-white/10 pt-7 text-sm text-[#89938c]">
              <span>Digital products<br />for real businesses.</span>
              <span className="max-w-xs">Software, websites, ecommerce, AI and automation connected into one flow.</span>
            </div>
          </div>
        </section>
        <About />
        <section className="bg-[#050706] px-6 pb-28 text-white sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              ["Vision","Make technology feel simple, useful and connected."],
              ["Mission","Build digital systems that create measurable business value."],
              ["Approach","Understand first. Design clearly. Build properly. Improve continuously."]
            ].map(([title,body])=>(
              <div key={title} className="rounded-[28px] border border-white/10 bg-[#090d0a] p-8">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a8ff3e]">{title}</p>
                <p className="mt-14 text-2xl leading-tight tracking-[-.04em] text-white">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
