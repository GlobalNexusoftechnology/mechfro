import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

import aboutTeam from "../../assets/about-team.jpg";
import heroRefinery from "../../assets/hero-refinery.jpg";
import heroValves from "../../assets/hero-valves.jpg";
import SectionHeading from "../../components/common/SectionHeading";
import { LinkButton } from "../../components/ui/Buttons";
import { services } from "../../lib/services-data";
import { Link } from "react-router-dom";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About — MECHFRO Engineering & Technologies" },
//       {
//         name: "description",
//         content:
//           "Learn about MECHFRO Engineering & Technologies — our story, mission, values, engineering workflow and quality commitment.",
//       },
//       { property: "og:title", content: "About MECHFRO Engineering & Technologies" },
//       { property: "og:image", content: aboutTeam },
//     ],
//   }),
//   component: About,
// });

const values = [
  { t: "Engineering Integrity", d: "Every recommendation is grounded in data, codes and proven engineering practice." },
  { t: "Quality Without Compromise", d: "We supply only what we'd trust on our own projects. Period." },
  { t: "Long-term Partnership", d: "Repeat business is our north star. We build for relationships, not transactions." },
  { t: "Transparent Execution", d: "Clear timelines, honest pricing, and complete documentation across every order." },
];

const timeline = [
  { y: "2010", t: "Founded", d: "Started with industrial fasteners & flange supply." },
  { y: "2014", t: "Expanded Materials", d: "Added stainless, duplex and alloy grades." },
  { y: "2017", t: "Fabrication", d: "Launched tank and valve fabrication services." },
  { y: "2020", t: "Global Logistics", d: "Established FOB/CIF supply lines to 4 continents." },
  { y: "2024", t: "Engineering Practice", d: "In-house engineering team and turnkey project execution." },
];

const stats = [
  { v: 25, suf: "+", l: "Years Experience" },
  { v: 500, suf: "+", l: "Projects Delivered" },
  { v: 1000, suf: "+", l: "Products Supplied" },
  { v: 99, suf: "%", l: "Client Satisfaction" },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative -mt-20 h-[70vh] min-h-[520px] flex items-end bg-brand-dark overflow-hidden">
        <img src={heroRefinery} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/30" />
        <div className="container-x relative pb-20 pt-32 text-white">
          <span className="eyebrow !text-brand-red">About MECHFRO</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            Engineering supply, <span style={{ color: "var(--brand-red)" }}>industrialized.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/75 text-lg">
            A trusted industrial partner built on decades of combined engineering, sourcing and
            execution expertise.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div data-aos="fade-up">
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-dark leading-[1.05]">
              Built by engineers, <span style={{ color: "var(--brand-blue)" }}>for engineers.</span>
            </h2>
            <p className="mt-6 text-brand-muted text-lg leading-relaxed">
              MECHFRO Engineering &amp; Technologies was founded with a simple belief: industrial
              supply should be engineered, not transactional. From day one, we've combined deep
              technical capability with a relentless focus on quality, traceability and on-time
              delivery — earning the trust of leading EPCs, OEMs and end-users.
            </p>
            <p className="mt-4 text-brand-muted leading-relaxed">
              Today, we support critical projects across oil &amp; gas, petrochemical, power, water,
              marine, infrastructure and manufacturing industries — across geographies, scales and
              specifications.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <img src={aboutTeam} alt="Engineering team" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 max-w-[220px]">
              <p className="text-xs uppercase tracking-[0.22em]">Founded</p>
              <p className="mt-1 text-4xl font-black">2010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-brand-light">
        <div className="container-x">
          <SectionHeading eyebrow="What drives us" title="Mission, vision &" highlight="values." align="center" />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-brand-blue text-white p-10" data-aos="fade-up">
              <span className="text-xs uppercase tracking-[0.22em] text-brand-red font-bold">Mission</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                Engineer reliable industrial supply that powers safer, more productive plants.
              </h3>
            </div>
            <div className="bg-brand-dark text-white p-10" data-aos="fade-up" data-aos-delay="100">
              <span className="text-xs uppercase tracking-[0.22em] text-brand-red font-bold">Vision</span>
              <h3 className="mt-4 text-2xl md:text-3xl font-black leading-tight">
                The most trusted single-source industrial partner across emerging markets.
              </h3>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
            {values.map((v, i) => (
              <div key={v.t} className="bg-white p-8" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="text-xs font-bold tracking-[0.22em] text-brand-red">0{i + 1}</span>
                <h4 className="mt-4 text-lg font-black text-brand-dark">{v.t}</h4>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our journey" title="A decade of" highlight="engineering trust." align="center" />
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-border hidden md:block" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div
                  key={t.y}
                  className={`md:grid md:grid-cols-2 md:gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
                  data-aos="fade-up"
                >
                  <div className={`md:${i % 2 === 0 ? "text-right md:pr-10" : "md:pl-10"}`}>
                    <span className="text-5xl font-black text-brand-blue">{t.y}</span>
                    <h4 className="mt-2 text-xl font-bold text-brand-dark">{t.t}</h4>
                    <p className="mt-2 text-brand-muted">{t.d}</p>
                  </div>
                  <div className="hidden md:flex justify-center relative">
                    <span className="w-4 h-4 bg-brand-red rounded-full ring-8 ring-white shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Industries served */}
      <section className="py-24 md:py-32 bg-brand-light">
        <div className="container-x">
          <SectionHeading eyebrow="Industries we serve" title="From upstream to" highlight="end users." align="center" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Oil & Gas", "Petrochemical", "Power Generation", "Water Treatment", "Marine", "Infrastructure", "Manufacturing", "Fertilizers", "Pharmaceuticals", "Food Processing"].map((i) => (
              <span key={i} className="px-5 py-3 bg-white border border-brand-border text-sm font-semibold text-brand-dark hover:bg-brand-blue hover:text-white transition-colors cursor-default">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative" data-aos="fade-right">
            <img src={heroValves} alt="Quality" loading="lazy" className="w-full aspect-[5/4] object-cover" />
          </div>
          <div data-aos="fade-left">
            <span className="eyebrow">Quality commitment</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black text-brand-dark leading-[1.05]">
              Documented quality, <span style={{ color: "var(--brand-red)" }}>end to end.</span>
            </h2>
            <p className="mt-5 text-brand-muted text-lg">
              Every order we ship is backed by mill test certification, PMI verification, dimensional QA and dispatch documentation tailored to your project's compliance requirements.
            </p>
            <ul className="mt-8 space-y-3">
              {["EN 10204 3.1 / 3.2 MTC", "Positive Material Identification (PMI)", "Hardness & Hydrostatic Testing", "Third-party Inspection Coordination", "Project-specific Documentation"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-brand-dark">
                  <CheckCircle2 size={18} className="text-brand-red" />
                  <span className="font-medium">{x}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <LinkButton to="/services" icon={<ArrowRight size={14} />}>Explore Services</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-24 bg-brand-light">
        <div className="container-x">
          <SectionHeading eyebrow="What we offer" title="Our complete" highlight="capability portfolio." align="center" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group bg-white hover:bg-brand-blue hover:text-white transition-colors p-6 flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.22em] text-brand-red">SERVICE</span>
                  <h3 className="mt-3 text-lg font-black">{s.title}</h3>
                </div>
                <ArrowUpRight className="self-end mt-4 transition-transform group-hover:rotate-45" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} className="relative py-24 bg-brand-blue text-white overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-20" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center md:text-left md:border-l border-white/15 md:pl-6">
            <div className="text-5xl md:text-7xl font-black leading-none">
              {s.v}
              <span className="text-brand-red">{s.suf}</span>
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/70">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
