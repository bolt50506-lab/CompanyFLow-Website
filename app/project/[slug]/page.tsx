import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SITE, WORK } from "@/lib/data";

export function generateStaticParams() {
  return WORK.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = WORK.find((item) => item.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title + " | CompanyFlow",
    description: project.description,
    alternates: { canonical: SITE.url + "/project/" + project.slug },
    openGraph: { title: project.title + " | CompanyFlow", description: project.description, url: SITE.url + "/project/" + project.slug, siteName: "CompanyFlow", type: "website" },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = WORK.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-ink text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(35,178,147,.18),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <Link href="/#work" className="text-sm font-semibold text-acc hover:underline">← Back to projects</Link>
              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-acc">{project.category}</p>
              <h1 className="mt-4 text-5xl font-bold tracking-tighter sm:text-7xl">{project.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{project.intro}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="/#contact" className="rounded-lg bg-acc px-6 py-3.5 font-semibold text-ink">Start a Project →</a>
                <Link href="/#work" className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold hover:bg-white/10">View More Work</Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[14px] border border-[#23B2935E] bg-[radial-gradient(circle_at_center,#103B57_0%,#181C14_100%)] p-5">
              <img src={project.image} alt={project.title} className="aspect-square w-full rounded-xl object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 text-ink sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">The challenge</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built around the real business problem.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">{project.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">The CompanyFlow solution</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Technology shaped around the workflow.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1118] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 sm:grid-cols-3">
              {project.stats.map(([value, label]) => (
                <div key={label} className="border-t border-white/10 pt-5">
                  <div className="text-5xl font-bold tracking-tighter text-acc sm:text-6xl">{value}</div>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-paper py-20 text-ink sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What went into the project.</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.capabilities.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold shadow-sm">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink py-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-acc">More CompanyFlow work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">See how we build around different businesses.</h2>
            <Link href="/#work" className="mt-8 inline-flex rounded-lg bg-acc px-6 py-3.5 font-semibold text-ink">Explore All Projects →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
