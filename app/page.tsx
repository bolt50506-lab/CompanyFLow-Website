import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Solutions from "@/components/solutions/Solutions";
import Products from "@/components/products/Products";
import Industries from "@/components/industries/Industries";
import Process from "@/components/process/Process";
import Work from "@/components/work/Work";
import About from "@/components/about/About";
import Cta from "@/components/cta/Cta";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import { SITE, SOLUTIONS } from "@/lib/data";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "CompanyFlow",
      url: SITE.url,
      logo: `${SITE.url}/logo.svg`,
      description: SITE.description,
      email: "hello@companyflow.co.uk",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: "CompanyFlow",
      url: SITE.url,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#webpage`,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-GB",
    },
    ...SOLUTIONS.map(([name, description]) => ({
      "@type": "Service",
      name,
      description,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: "GB",
    })),
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Solutions />
        <Products />
        <Industries />
        <Process />
        <Work />
        <About />
        <Cta />
        <ContactForm />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
