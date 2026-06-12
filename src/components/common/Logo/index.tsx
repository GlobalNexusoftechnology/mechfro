import clsx from "clsx";
import { Link } from "react-router-dom";
// import NewLogo from "@/assets/transparent-logo.png";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ variant = "dark", showTagline = true, className }: LogoProps) {
  const sub = variant === "light" ? "text-white/70" : "text-brand-muted";
  return (
    <Link to="/" className={clsx("inline-flex flex-col leading-none font-display", className)}>
      <span className="text-2xl md:text-[1.7rem] font-black tracking-tight">
        <span style={{ color: "var(--brand-red)" }}>MECH</span>
        <span style={{ color: "var(--brand-blue)" }}>FRO</span>
      </span>
      {showTagline && (
        <span className={clsx("mt-1 text-[0.6rem] uppercase tracking-[0.22em] font-semibold text-brand-muted")}>
          Engineering &amp; Technologies
        </span>
      )}
      {/* <img src={NewLogo} alt="Mechfro Logo" className="h-20 w-auto" /> */}
    </Link>
  );
}
