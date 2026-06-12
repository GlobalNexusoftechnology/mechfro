import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "../../components/common/SectionHeading";
import { services } from "../../lib/services-data";
import { LinkButton } from "../../components/ui/Buttons";
import heroValves from "../../assets/hero-valves.jpg";
import { Link } from "react-router-dom";



export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative -mt-20 h-[60vh] min-h-[460px] bg-brand-dark flex items-end overflow-hidden">
        <img src={heroValves} alt="" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
        <div className="container-x relative pb-16 pt-32 text-white">
          <span className="eyebrow !text-brand-red">Services & Solutions</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            Engineered supply, <span style={{ color: "var(--brand-red)" }}>by category.</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/75 text-lg">
            Eight specialized product lines, all delivered with full engineering support.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our services" title="What we" highlight="supply & build." align="center" />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-white border border-brand-border overflow-hidden hover:shadow-elevated transition-all"
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
              >
                <div className="aspect-[5/3] overflow-hidden relative">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-black text-brand-dark group-hover:text-brand-blue transition-colors">{s.title}</h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed line-clamp-3">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                    View details <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark max-w-3xl mx-auto leading-tight">
            Don't see what you need? <span style={{ color: "var(--brand-red)" }}>Let's engineer it.</span>
          </h2>
          <p className="mt-5 text-brand-muted max-w-xl mx-auto">
            Our team handles custom fabrication, special grades and turnkey project supply.
          </p>
          <div className="mt-10">
            <LinkButton to="/contact" variant="accent" size="lg" icon={<ArrowRight size={16} />}>
              Speak to an engineer
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
