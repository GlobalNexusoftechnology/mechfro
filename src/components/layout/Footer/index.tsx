import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo";
import { services } from "../../../lib/services-data";



const industries = [
  "Oil & Gas",
  "Petrochemical",
  "Power Generation",
  "Water Treatment",
  "Marine",
  "Infrastructure",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-30" />
      <div className="relative">
        {/* CTA strip */}
        <div className="container-x py-14 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="eyebrow !text-brand-red">Let's build</p>
            <h3 className="mt-3 text-3xl md:text-4xl font-black max-w-xl leading-tight">
              Ready to engineer your next industrial project?
            </h3>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-brand-red px-7 h-14 text-sm font-semibold uppercase tracking-[0.14em] hover:brightness-110 transition"
          >
            Request a Quote
            <ArrowUpRight size={18} className="transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-sm">
              MECHFRO Engineering &amp; Technologies is a trusted industrial supply and engineering
              partner, delivering valves, flanges, fasteners, tanks and raw materials to projects
              worldwide.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Phone size={14} className="text-brand-red" />
                <span>+91 82863 53007 </span>
              </a>
              <a href="mailto:info@mechfro.com" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Mail size={14} className="text-brand-red" />
                <span>info@mechfro.com</span>
              </a>
              <p className="flex items-start gap-3 text-white/80">
                <MapPin size={14} className="text-brand-red mt-1" />
                Industrial Hub, Mumbai, India
              </p>
            </div>
            {/* <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-white/15 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition"
                  aria-label="social"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-bold mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-brand-red transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-bold mb-5">Industries</h4>
            <ul className="space-y-3 text-sm text-white/60">
              {industries.map((i) => (
                <li key={i} className="hover:text-brand-red transition cursor-pointer">{i}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-white font-bold mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-brand-red">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-red">All Services</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-red">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-red">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© {new Date().getFullYear()} MECHFRO Engineering &amp; Technologies. All rights reserved.</p>
            <p>Designed & Managed by <a href="https://giganexustechnology.com" className="hover:text-brand-red">Giga Nexus Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
