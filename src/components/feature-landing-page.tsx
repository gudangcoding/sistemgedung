import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { serviceImages } from "@/lib/media";
import { breadcrumbJsonLd, faqJsonLd, serializeJsonLd, siteName, siteOrigin } from "@/lib/site";

type Faq = { question: string; answer: string };
type LandingLink = { href: string; label: string };

export type FeatureLandingContent = {
  path: string;
  title: string;
  serviceType: string;
  eyebrow: string;
  lead: string;
  intro: string;
  features: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: Faq[];
  relatedLinks: LandingLink[];
  note: string;
};

export function FeatureLandingPage({ content }: { content: FeatureLandingContent }) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteOrigin}${content.path}/#service`,
    name: content.title,
    serviceType: content.serviceType,
    description: content.lead,
    url: `${siteOrigin}${content.path}`,
    image: `${siteOrigin}${serviceImages.software}`,
    provider: { "@id": `${siteOrigin}/#organization` },
    areaServed: { "@type": "Country", name: "Indonesia" },
    audience: { "@type": "BusinessAudience", audienceType: "Pengelola gedung dan apartemen" },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Jasa aplikasi building management", path: "/layanan/software" },
              { name: content.title, path: content.path },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(content.faqs)) }}
      />

      <section className="inner-hero">
        <div className="container">
          <div className="article-breadcrumb">
            <Link href="/">Beranda</Link><span>/</span>
            <Link href="/layanan/software">Layanan aplikasi</Link><span>/</span>
            <span>{content.eyebrow}</span>
          </div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1>{content.title}</h1>
          <p className="inner-lead">{content.lead}</p>
          <div className="page-visual">
            <Image
              src={serviceImages.software}
              alt={`${content.title} untuk operasional apartemen dan gedung`}
              width={1200}
              height={630}
              sizes="(max-width: 1180px) 100vw, 1180px"
              priority
            />
          </div>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Diskusikan kebutuhan <span>↗</span></Link>
            <Link className="text-link" href="/harga">Lihat sewa aplikasi dan paket <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>RUANG LINGKUP</Eyebrow><h2>{content.serviceType}</h2></div>
            <p>{content.intro}</p>
          </div>
          <div className="capability-grid">
            {content.features.map((feature, index) => (
              <article className="capability-card" key={feature.title}>
                <span className="card-number">0{index + 1} / 0{content.features.length}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <p className="pricing-term">{content.note}</p>
        </div>
      </section>

      <section className="section go-live-section">
        <div className="container">
          <div className="section-heading go-live-heading">
            <div><Eyebrow>LANGKAH IMPLEMENTASI</Eyebrow><h2>Mulai dari alur kerja<br /><span>yang ingin dirapikan.</span></h2></div>
            <p>Ruang lingkup, ketersediaan modul, dan estimasi dikonfirmasi bersama sebelum implementasi.</p>
          </div>
          <div className="go-live-grid">
            {content.process.map((step, index) => (
              <article className="go-live-step" key={step.title}>
                <span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="services-editorial">
            <div><Eyebrow>TOPIK TERKAIT</Eyebrow><h3>Pelajari pilihan sistem dan prosesnya.</h3></div>
            <div className="feature-related-links">
              {content.relatedLinks.map((link) => <Link className="text-link" href={link.href} key={link.href}>{link.label} <span>→</span></Link>)}
              <Link className="text-link" href="/layanan/software">Jasa aplikasi web &amp; mobile gedung <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <Eyebrow>PERTANYAAN UMUM</Eyebrow>
            <h2>Pastikan kebutuhan<br /><span>sesuai alur properti.</span></h2>
            <p>Diskusikan proses yang digunakan pengelola dan modul yang perlu diverifikasi.</p>
            <Link className="text-link" href="/demo">Ajukan diskusi <span>→</span></Link>
          </div>
          <div className="faq-list">
            {content.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>＋</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <Eyebrow>{siteName} · APARTEMEN &amp; GEDUNG</Eyebrow>
          <h2>Mulai dengan kebutuhan<br /><span>yang paling penting.</span></h2>
          <p className="inner-lead">Coba demo, bahas proses pengelolaan, lalu konfirmasi ketersediaan fitur, ruang lingkup, dan estimasi sebelum mengambil keputusan.</p>
          <Link className="button button-dark" href="/demo">Jadwalkan diskusi <span>↗</span></Link>
        </div>
      </section>
    </article>
  );
}
