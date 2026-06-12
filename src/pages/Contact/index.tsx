
import { z } from "zod";
import { Mail, Phone, MapPin, ArrowRight, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { services } from "../../lib/services-data";
import Button from "../../components/ui/Buttons";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Tell us a bit more (min 10 chars)"),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact submission", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="container-x relative">
          <span className="eyebrow !text-brand-red">Get in touch</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
            Let's engineer your <span style={{ color: "var(--brand-red)" }}>next project.</span>
          </h1>
          <p className="mt-6 max-w-xl text-white/75 text-lg">
            Share your specifications. Our engineering team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-[1.4fr_1fr] gap-14">
          {/* Form */}
          <div data-aos="fade-up">
            <div className="bg-white border border-brand-border p-8 md:p-10 shadow-card">
              <h2 className="text-2xl md:text-3xl font-black text-brand-dark">Request a quote</h2>
              <p className="mt-2 text-brand-muted">Fill in the form — we'll be in touch within 24 hours.</p>

              {submitted && (
                <div className="mt-6 p-4 bg-brand-blue text-white text-sm flex items-center gap-3">
                  <Send size={16} /> Thanks! Your request has been received. We'll be in touch shortly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name *" error={errors.name?.message}>
                  <input {...register("name")} className={inputCls(!!errors.name)} placeholder="Your name" />
                </Field>
                <Field label="Email *" error={errors.email?.message}>
                  <input type="email" {...register("email")} className={inputCls(!!errors.email)} placeholder="you@company.com" />
                </Field>
                <Field label="Phone *" error={errors.phone?.message}>
                  <input {...register("phone")} className={inputCls(!!errors.phone)} placeholder="+91 ..." />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input {...register("company")} className={inputCls(false)} placeholder="Company name" />
                </Field>
                <Field label="Service of Interest *" error={errors.service?.message} className="md:col-span-2">
                  <select {...register("service")} className={inputCls(!!errors.service)} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Custom</option>
                  </select>
                </Field>
                <Field label="Project Details *" error={errors.message?.message} className="md:col-span-2">
                  <textarea
                    rows={5}
                    {...register("message")}
                    className={inputCls(!!errors.message)}
                    placeholder="Specifications, quantities, delivery timelines..."
                  />
                </Field>
                <div className="md:col-span-2">
                  <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} icon={<ArrowRight size={16} />}>
                    {isSubmitting ? "Submitting..." : "Send Request"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-brand-blue text-white p-8 relative overflow-hidden">
              <div className="blueprint-grid absolute inset-0 opacity-20" />
              <div className="relative">
                <span className="eyebrow !text-brand-red">Reach us</span>
                <h3 className="mt-3 text-2xl font-black">Contact information</h3>
                <ul className="mt-7 space-y-5 text-sm">
                  <InfoRow icon={<Phone size={16} />} label="Phone" value="+91 82863 53007 " href="tel:+919999999999" />
                  <InfoRow icon={<Mail size={16} />} label="Email" value="info@mechfro.com" href="mailto:info@mechfro.com" />
                  <InfoRow icon={<MapPin size={16} />} label="Headquarters" value="Industrial Hub, Mumbai, India" />
                  <InfoRow icon={<Clock size={16} />} label="Hours" value="Mon–Sat, 09:00–18:30 IST" />
                  {/* <InfoRow icon={<Globe size={16} />} label="Supply network" value="5 continents · 24 countries" /> */}
                </ul>
              </div>
            </div>

            {/* <div className="border border-brand-border aspect-[5/4] relative overflow-hidden bg-brand-light">
              <div className="absolute inset-0 grid place-items-center text-center p-6">
                <div>
                  <MapPin className="mx-auto text-brand-red" size={32} />
                  <p className="mt-3 font-display font-bold text-brand-dark">Visit our office</p>
                  <p className="mt-1 text-sm text-brand-muted">Map integration ready</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,27,114,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(235,0,43,0.08),transparent_60%)]" />
            </div> */}

            <div className="border border-brand-border aspect-[5/4] relative overflow-hidden bg-brand-light">
              <iframe
                title="MECHFRO Location"
                src="https://maps.google.com/maps?q=Mumbai,%20Maharashtra,%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label, error, children, className,
}: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={clsx("block", className)}>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-dark">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-brand-red">{error}</p>}
    </label>
  );
}
function inputCls(err: boolean) {
  return clsx(
    "w-full bg-white border px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-blue",
    err ? "border-brand-red" : "border-brand-border",
  );
}
function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const body = (
    <>
      <span className="w-9 h-9 grid place-items-center bg-white/10 text-brand-red shrink-0">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-bold">{label}</div>
        <div className="mt-0.5 font-medium">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 hover:text-brand-red transition-colors">{body}</a>
  ) : (
    <li className="flex items-center gap-4">{body}</li>
  );
}
