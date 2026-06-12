import clsx from "clsx";

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  invert = false,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      data-aos="fade-up"
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={clsx(
          "mt-4 text-3xl md:text-5xl font-black leading-[1.05]",
          invert ? "text-white" : "text-brand-dark",
        )}
      >
        {title}{" "}
        {highlight && (
          <span style={{ color: "var(--brand-red)" }}>{highlight}</span>
        )}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-5 text-base md:text-lg leading-relaxed",
            invert ? "text-white/70" : "text-brand-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
