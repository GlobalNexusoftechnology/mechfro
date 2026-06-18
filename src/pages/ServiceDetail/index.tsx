import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { services } from "../../lib/services-data";
import { Link, useParams, Navigate } from "react-router-dom"; import { LinkButton } from "../../components/ui/Buttons";
import SectionHeading from "../../components/common/SectionHeading";
import { InfoRow } from "../Contact";


export default function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative -mt-20 h-[65vh] min-h-[520px] bg-brand-dark flex items-end overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/20" />
        <div className="container-x relative pb-16 pt-32 text-white">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/60">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-brand-red">{service.title}</span>
          </div>
          <span className="eyebrow !text-brand-red mt-6">Engineered supply</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-[0.95] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-lg">{service.short}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-14">
          <div data-aos="fade-up">
            <span className="eyebrow">Overview</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-brand-dark leading-tight">
              Built for critical service environments.
            </h2>
            <p className="mt-6 text-brand-muted text-lg leading-relaxed">{service.overview}</p>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div>
                {/* <h3 className="text-sm uppercase tracking-[0.22em] text-brand-red font-bold">Applications</h3> */}
                <ul className="mt-5 space-y-3">
                  {service.applications.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-brand-dark">
                      <span className="w-1.5 h-1.5 bg-brand-red mt-2.5 shrink-0" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {/* <h3 className="text-sm uppercase tracking-[0.22em] text-brand-red font-bold">Benefits</h3> */}
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-brand-dark">
                      <span className="w-1.5 h-1.5 bg-brand-red mt-2.5 shrink-0" /> {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications card */}
          <aside className="bg-brand-blue text-white p-8 md:p-10 sticky top-28 h-fit" data-aos="fade-left">
            <div className=" text-white relative overflow-hidden">
              {/* <div className="blueprint-grid absolute inset-0" /> */}
              <div className="relative">
                <span className="eyebrow !text-brand-red">Reach us</span>
                <h3 className="mt-3 text-2xl font-black">Contact information</h3>
                <ul className="mt-7 space-y-5 text-sm">
                  <InfoRow icon={<Phone size={16} />} label="Phone" value="+91 82863 53007 " href="tel:+919999999999" />
                  <InfoRow icon={<Mail size={16} />} label="Email" value="info@mechfro.com" href="mailto:info@mechfro.com" />
                  <InfoRow icon={<MapPin size={16} />} label="Headquarters" value="Mechfro Engineering and Techlonology, 15 no. Building, Flat 12 No.,   LIG Colony, Kurla west, Mumbai - 400070., India" />
                  <InfoRow icon={<Clock size={16} />} label="Hours" value="Mon–Sat, 09:00–18:30 IST" />
                  {/* <InfoRow icon={<Globe size={16} />} label="Supply network" value="5 continents · 24 countries" /> */}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-brand-light">
        <div className="container-x">
          <SectionHeading eyebrow="Gallery" title="Engineered" highlight="in detail." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.gallery?.slice(0, 6).map((img, i) => (
              <div key={i} className="overflow-hidden aspect-[4/3] group" data-aos="zoom-in" data-aos-delay={i * 60}>
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 md:py-28 bg-brand-dark text-white relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="container-x relative grid lg:grid-cols-2 gap-10 items-center">
          <h2 className="text-3xl md:text-5xl font-black leading-[1.05]">
            Need a quote for <span style={{ color: "var(--brand-red)" }}>{service.title}</span>?
          </h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <LinkButton to="/contact" variant="accent" size="lg" icon={<ArrowRight size={16} />}>Request Quote</LinkButton>
            <LinkButton to="/services" variant="light" size="lg">All Services</LinkButton>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Related solutions" title="You might also" highlight="be looking for." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group block border border-brand-border overflow-hidden hover:shadow-elevated transition">
                <div className="aspect-[5/3] overflow-hidden">
                  <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-brand-dark group-hover:text-brand-blue">{r.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
