import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Fuel,
  Ship,
  Droplet,
  Zap,
  Building2,
  Cog,
  ShieldCheck,
  Wrench,
  Truck,
  Award,
  Gauge,
  Layers,
  Quote,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import heroRefinery from "../../assets/hero-refinery.jpg";
import heroValves from "../../assets/hero-valves.jpg";
import heroTanks from "../../assets/hero-tanks.jpg";
import aboutTeam from "../../assets/about-team.jpg";
import qualityDark from "../../assets/quality-dark.jpg";
import indPower from "../../assets/ind-power.jpg";
import indOilgas from "../../assets/ind-oilgas.jpg";
import indWater from "../../assets/ind-water.jpg";
import prodBars from "../../assets/prod-bars.jpg";
import { LinkButton } from "../../components/ui/Buttons";
import SectionHeading from "../../components/common/SectionHeading";
import { Link } from "react-router-dom";
import { services } from "../../lib/services-data";



const heroSlides = [
  {
    image: heroRefinery,
    eyebrow: "Industrial Supply Solutions",
    title: ["Engineering Excellence", "Delivered at Scale"],
    sub: "From single-component supply to multi-discipline project execution — trusted across refineries, power plants and process industries.",
  },
  {
    image: heroValves,
    eyebrow: "Flow Control Specialists",
    title: ["Precision-Engineered", "Industrial Valves"],
    sub: "Globe, ball, butterfly, gate and check valves in multiple grades — ANSI, ASME, API & DIN compliant.",
  },
  {
    image: heroTanks,
    eyebrow: "Storage & Process",
    title: ["Reliable Project Execution", "Built to Last"],
    sub: "Custom-fabricated industrial tanks, FRP/GRP solutions and turnkey site support for critical storage duty.",
  },
];

const industries = [
  { name: "Oil & Gas", icon: Fuel, image: indOilgas },
  { name: "Petrochemical", icon: Factory, image: heroRefinery },
  { name: "Power Generation", icon: Zap, image: indPower },
  { name: "Water Treatment", icon: Droplet, image: indWater },
  { name: "Marine", icon: Ship, image: heroTanks },
  { name: "Infrastructure", icon: Building2, image: prodBars },
];

const whyChoose = [
  { icon: Layers, title: "Wide Product Portfolio", desc: "Thousands of SKUs across valves, flanges, fasteners, tanks and raw materials." },
  { icon: Cog, title: "Multiple Material Grades", desc: "CS, MS, SS304/316, Duplex, Super Duplex, Alloy & Special metals." },
  { icon: Wrench, title: "Custom Fabrication", desc: "Made-to-print components engineered to your exact project specifications." },
  { icon: Gauge, title: "Competitive Pricing", desc: "Direct mill sourcing and lean operations to deliver best-in-class value." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "MTC, PMI, hardness and dimensional inspection on every dispatch." },
  { icon: Award, title: "Technical Support", desc: "In-house engineering team for material selection and specification." },
  { icon: Truck, title: "Timely Delivery", desc: "Reliable global logistics — FOB, CIF, DDP supply across continents." },
  { icon: CheckCircle2, title: "Reliable Execution", desc: "Project EPCs, OEMs and end-users rely on us for repeat order success." },
];

const processSteps = [
  { n: "01", t: "Consultation", d: "Understanding your project scope and technical needs." },
  { n: "02", t: "Requirement Analysis", d: "Mapping specifications, codes and delivery windows." },
  { n: "03", t: "Material Selection", d: "Recommending grades, finishes and certifications." },
  { n: "04", t: "Engineering Planning", d: "Detailed engineering, drawings and BOM finalization." },
  { n: "05", t: "Fabrication", d: "Manufacturing under strict process controls." },
  { n: "06", t: "Quality Inspection", d: "PMI, hardness, dimensional and visual QA." },
  { n: "07", t: "Delivery", d: "Packaged, documented and shipped on schedule." },
  { n: "08", t: "Technical Support", d: "Lifetime application & engineering support." },
];

const grades = [
  "Carbon Steel", "Mild Steel", "SS304", "SS304L", "SS316", "SS316L",
  "Duplex 2205", "Super Duplex 2507", "Alloy Steel", "Copper", "Brass", "Aluminium",
  "Inconel 625", "Hastelloy C276", "Monel 400", "Titanium Gr2",
];

const stats = [
  { v: 25, suf: "+", l: "Years Combined Experience" },
  { v: 500, suf: "+", l: "Projects Delivered" },
  { v: 1000, suf: "+", l: "Products Supplied" },
  { v: 99, suf: "%", l: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "MECHFRO consistently delivers high-spec valves on tight project timelines. Their QA documentation is best-in-class.",
    name: "Rohit Sharma",
    role: "Procurement Head, EPC Major",
  },
  {
    quote:
      "From SS316 flanges to custom fabricated tanks, MECHFRO has become our single-source industrial partner.",
    name: "Anjali Verma",
    role: "Project Director, Petrochemical Plant",
  },
  {
    quote:
      "Their technical team understands material selection like few others. Quality, price and delivery — they nail all three.",
    name: "David Mathew",
    role: "Operations Manager, Power Generation",
  },
];

const insights = [
  {
    tag: "Materials",
    title: "Choosing the Right Stainless Grade for Coastal Refineries",
    excerpt: "When chloride exposure is high, SS316L often isn't enough. Here's when Duplex pays back.",
    image: heroValves,
  },
  {
    tag: "Engineering",
    title: "How FRP Tanks Outperform Lined Steel for Acid Service",
    excerpt: "A practical look at lifecycle cost, corrosion resistance and installation speed.",
    image: indWater,
  },
  {
    tag: "Projects",
    title: "Inside a 12,000 KL Tank Farm Delivery in 18 Weeks",
    excerpt: "Lessons from a turnkey storage project executed across two geographies.",
    image: heroTanks,
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <ProductsSection />
      <WhyChooseSection />
      <ProcessSection />
      <GradesSection />
      <FeaturedSlider />
      <StatsSection />
      <QualitySection />
      <BannerSection />
      <TestimonialsSection />
      <InsightsSection />
      <QuoteCtaSection />
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[680px] -mt-20 overflow-hidden bg-brand-dark">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {heroSlides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img
                src={s.image}
                alt={s.title.join(" ")}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/20" />
              <div className="absolute inset-0 blueprint-grid opacity-20" />
              <div className="relative h-full container-x flex items-center pt-20">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl text-white"
                >
                  <span className="eyebrow !text-brand-red">{s.eyebrow}</span>
                  <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                    {s.title[0]}
                    <span className="block" style={{ color: "var(--brand-red)" }}>
                      {s.title[1]}
                    </span>
                  </h1>
                  <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl">{s.sub}</p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <LinkButton to="/services" variant="accent" size="lg" icon={<ArrowRight size={16} />}>
                      Explore Solutions
                    </LinkButton>
                    <LinkButton to="/contact" variant="light" size="lg" icon={<ArrowUpRight size={16} />}>
                      Request Quote
                    </LinkButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Side stats bar */}
      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 flex-col gap-px bg-white/10 backdrop-blur-sm border-l border-white/15">
        {[
          { v: "25+", l: "Years" },
          { v: "500+", l: "Projects" },
          { v: "7", l: "Industries" },
        ].map((s) => (
          <div key={s.l} className="px-6 py-5 text-white text-right">
            <div className="text-2xl font-black">{s.v}</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative" data-aos="fade-right">
          <div className="relative aspect-[5/6] overflow-hidden">
            <img src={aboutTeam} alt="Engineering team" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:right-8 bg-brand-red text-white p-8 max-w-[260px] shadow-elevated">
            <div className="text-5xl font-black leading-none">25+</div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] opacity-90">
              Years of combined engineering & supply expertise
            </p>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-brand-red -z-10" />
        </div>

        <div data-aos="fade-left">
          <span className="eyebrow">About MECHFRO</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black leading-[1.05] text-brand-dark">
            Industrial supply, built on{" "}
            <span style={{ color: "var(--brand-blue)" }}>engineering trust</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-brand-muted leading-relaxed">
            MECHFRO Engineering &amp; Technologies is a multi-disciplinary industrial supply
            partner serving oil &amp; gas, petrochemical, power, water, marine, infrastructure and
            manufacturing sectors. We combine deep technical capability with a relentless focus on
            quality, traceability and on-time delivery.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { t: "Our Mission", d: "Engineer reliable industrial supply that powers safer, more productive plants." },
              { t: "Our Vision", d: "Become the most trusted single-source industrial partner across emerging markets." },
            ].map((b) => (
              <div key={b.t} className="border-l-2 border-brand-red pl-5">
                <h4 className="text-sm uppercase tracking-[0.18em] font-bold text-brand-blue">{b.t}</h4>
                <p className="mt-2 text-sm text-brand-muted leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-3">
            {[
              "Engineered for critical service",
              "Trusted by leading EPCs",
              "Global logistics network",
              "Lifetime technical support",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 text-sm text-brand-dark">
                <CheckCircle2 size={16} className="text-brand-red" /> {x}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <LinkButton to="/about" variant="primary" icon={<ArrowRight size={14} />}>
              More about us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-light relative">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Critical industries,"
            highlight="engineered with precision."
            description="From upstream oil & gas to large-scale infrastructure, our supply portfolio is trusted across the most demanding sectors."
          />
          <LinkButton to="/services" variant="outline" icon={<ArrowRight size={14} />}>
            All Industries
          </LinkButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-brand-border">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-white cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <img
                src={ind.image}
                alt={ind.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
                <ind.icon className="text-brand-red mb-3" size={28} />
                <h3 className="text-xl md:text-2xl font-black">{ind.name}</h3>
                <p className="mt-2 text-xs text-white/0 group-hover:text-white/80 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  Engineered components, fabrication & turnkey supply.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
function ProductsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Products & Solutions"
          title="A complete portfolio for"
          highlight="industrial supply."
          description="Eight specialized product lines engineered for performance, traceability and life-cycle value."
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative overflow-hidden bg-brand-light aspect-[4/5]"
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80}
            >
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">
                0{i + 1}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-xl font-black leading-tight">{s.title}</h3>
                <p className="mt-2 text-xs text-white/0 max-h-0 group-hover:text-white/80 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                  {s.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                  Discover <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE ---------- */
function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-light relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why choose MECHFRO"
          title="Eight reasons leading EPCs"
          highlight="rely on us."
          align="center"
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
          {whyChoose.map((w, i) => (
            <div
              key={w.title}
              className="bg-white p-8 group hover:bg-brand-blue transition-colors duration-500"
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 70}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-brand-light group-hover:bg-brand-red transition-colors">
                <w.icon className="text-brand-blue group-hover:text-white transition-colors" size={26} />
              </div>
              <h3 className="mt-6 text-lg font-black text-brand-dark group-hover:text-white transition-colors">
                {w.title}
              </h3>
              <p className="mt-3 text-sm text-brand-muted group-hover:text-white/70 transition-colors leading-relaxed">
                {w.desc}
              </p>
              <div className="mt-6 text-xs font-bold tracking-[0.18em] text-brand-blue/40 group-hover:text-brand-red transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Engineering process"
          title="From consultation"
          highlight="to lifetime support."
          description="A disciplined, repeatable engineering process ensures every dispatch is delivered to spec, on time."
          invert
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {processSteps.map((p, i) => (
            <div
              key={p.n}
              className="relative bg-brand-dark p-8 hover:bg-white/[0.04] transition-colors"
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 70}
            >
              <span className="text-7xl font-black leading-none text-white/5 absolute top-4 right-4 select-none">
                {p.n}
              </span>
              <div className="relative">
                <span className="text-xs font-bold tracking-[0.22em] text-brand-red">{p.n}</span>
                <h3 className="mt-4 text-xl font-black">{p.t}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MATERIAL GRADES ---------- */
function GradesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-14">
        <SectionHeading
          eyebrow="Material grades"
          title="Engineered to the"
          highlight="right specification."
          description="A broad inventory of ferrous, non-ferrous and specialty alloys — sourced from accredited mills with complete documentation."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border" data-aos="fade-up">
          {grades.map((g, i) => (
            <div
              key={g}
              className="bg-white px-5 py-6 hover:bg-brand-blue hover:text-white transition-colors group cursor-default"
            >
              <span className="text-[10px] font-bold tracking-[0.22em] text-brand-red">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-display font-bold text-sm">{g}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURED SLIDER ---------- */
function FeaturedSlider() {
  return (
    <section className="py-24 md:py-32 bg-brand-light">
      <div className="container-x flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading eyebrow="Featured products" title="In demand across" highlight="global projects." />
        <LinkButton to="/services" variant="outline" icon={<ArrowRight size={14} />}>View all products</LinkButton>
      </div>
      <div className="px-5 lg:px-8">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1440: { slidesPerView: 4 },
          }}
        >
          {services.map((s) => (
            <SwiperSlide key={s.slug}>
              <Link
                to={`/services/${s.slug}`}
                className="group block relative overflow-hidden aspect-[3/4] bg-brand-dark"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="text-[10px] font-bold tracking-[0.22em] text-brand-red">
                    VIEW PRODUCT
                  </span>
                  <h3 className="mt-2 text-xl font-black">
                    {s.title}
                  </h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStart(true); io.disconnect(); } },
      { threshold: 0.2 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 bg-brand-blue text-white overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-20" />
      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.l} className="text-center md:text-left border-l-0 md:border-l border-white/15 md:pl-6" data-aos="fade-up" data-aos-delay={i * 80}>
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

/* ---------- QUALITY ---------- */
function QualitySection() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[400px]">
          <img src={qualityDark} alt="Quality assurance" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        </div>
        <div className="p-10 md:p-20 relative">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="relative">
            <span className="eyebrow !text-brand-red">Quality assurance</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-black leading-[1.05]">
              Every component, <span style={{ color: "var(--brand-red)" }}>inspected.</span>
              <br />Every dispatch, documented.
            </h2>
            <p className="mt-6 text-white/70 max-w-lg">
              Our QA workflow starts at sourcing and ends at site. Mill test certificates, PMI,
              hardness, hydrotesting and dimensional inspection — backed by an in-house engineering
              team and trusted third-party agencies.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {["Mill Test Certificates", "PMI & Spectro Analysis", "Hardness Testing", "Dimensional QA", "Hydrostatic Testing", "Third-party Inspection"].map((q) => (
                <div key={q} className="bg-brand-dark p-5 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-red" />
                  <span className="text-sm font-semibold">{q}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <LinkButton to="/about" variant="accent" icon={<ArrowRight size={14} />}>Our QA Approach</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BANNER ---------- */
function BannerSection() {
  return (
    <section
      className="relative min-h-[420px] flex items-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${heroRefinery})` }}
    >
      <div className="absolute inset-0 bg-brand-blue/85" />
      <div className="container-x relative text-white py-20 text-center">
        <span className="eyebrow !text-white/80 justify-center">Engineering across borders</span>
        <h2 className="mt-5 text-3xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
          Supplying critical components to projects on{" "}
          <span style={{ color: "var(--brand-red)" }}>5 continents.</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-white/80">
          Wherever your project is, MECHFRO is positioned to deliver — fabrication, sourcing, QA and
          logistics, end to end.
        </p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by engineers,"
          highlight="repeatedly."
          align="center"
        />
        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-brand-light p-8 md:p-10 h-full flex flex-col">
                  <Quote className="text-brand-red" size={32} />
                  <p className="mt-6 text-base md:text-lg text-brand-dark leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-6 border-t border-brand-border">
                    <p className="font-display font-bold text-brand-blue">{t.name}</p>
                    <p className="text-xs text-brand-muted uppercase tracking-[0.18em] mt-1">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pb-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------- INSIGHTS ---------- */
function InsightsSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-light">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Latest insights" title="Engineering articles &" highlight="industry updates." />
          <LinkButton to="/about" variant="outline" icon={<ArrowRight size={14} />}>All Insights</LinkButton>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((p, i) => (
            <article key={p.title} className="group bg-white overflow-hidden" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <span className="text-[10px] font-bold tracking-[0.22em] text-brand-red">{p.tag.toUpperCase()}</span>
                <h3 className="mt-3 text-xl font-black text-brand-dark group-hover:text-brand-blue transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
                  Read article <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QUOTE CTA ---------- */
function QuoteCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden bg-brand-blue text-white">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] rounded-full bg-brand-red/20 blur-3xl" />
          <div className="relative p-10 md:p-20 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="eyebrow !text-white/90">Get started</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-black leading-[1.05]">
                Let's engineer your <span style={{ color: "var(--brand-red)" }}>next project</span>.
              </h2>
              <p className="mt-5 text-white/75 max-w-lg">
                Share your specifications. Our engineering team will respond within one business day
                with material recommendations, pricing and delivery timelines.
              </p>
            </div>
            <div className="lg:justify-self-end flex flex-wrap gap-3">
              <LinkButton to="/contact" variant="accent" size="lg" icon={<ArrowRight size={16} />}>
                Request Quote
              </LinkButton>
              <LinkButton to="/services" variant="light" size="lg" icon={<ArrowUpRight size={16} />}>
                Browse Services
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
