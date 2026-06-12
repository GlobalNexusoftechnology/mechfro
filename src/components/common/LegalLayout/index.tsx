import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({ eyebrow, title, updated, children }: Props) {
  return (
    <div className="bg-white">
      <section className="relative -mt-20 pt-32 pb-16 bg-brand-dark text-white">
        <div className="blueprint-grid absolute inset-0 opacity-30" />
        <div className="container-x relative">
          <span className="eyebrow !text-brand-red">{eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black leading-[1]">{title}</h1>
          <p className="mt-4 text-white/60 text-sm">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x max-w-3xl">
          <article
            className="space-y-5 text-brand-dark leading-relaxed
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-brand-blue [&_h2]:mt-12 [&_h2]:mb-3
              [&_p]:text-brand-muted [&_li]:text-brand-muted [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
              [&_a]:text-brand-red [&_a]:underline"
          >
            {children}
          </article>
        </div>
      </section>
    </div>
  );
}
