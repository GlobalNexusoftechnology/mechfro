import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / duration) * 100);

      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setHidden(true), 400);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--brand-blue)] transition-all duration-700 ${
        hidden
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />

      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[var(--brand-red)]/20 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Mechanical Logo */}
        <div className="relative w-40 h-40">

          {/* Outer Gear */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 animate-[spin_12s_linear_infinite]"
          >
            <Gear color="var(--brand-red)" />
          </svg>

          {/* Inner Gear */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 scale-75 animate-[spin_8s_linear_infinite_reverse]"
          >
            <Gear color="var(--brand-light)" />
          </svg>

          {/* Center MF */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="70"
              height="70"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient
                  id="mfGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="var(--brand-red)" />
                  <stop offset="100%" stopColor="var(--brand-blue)" />
                </linearGradient>
              </defs>

              <path
                d="M20 80V20L50 50L80 20V80"
                fill="none"
                stroke="url(#mfGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M55 80V25H80"
                fill="none"
                stroke="var(--brand-light)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Center Glow */}
          <span
            className="absolute inset-0 m-auto w-4 h-4 rounded-full"
            style={{
              background: "white",
              boxShadow: "0 0 30px 8px rgba(235,0,43,0.6)",
            }}
          />
        </div>

        {/* Brand */}
        <div className="mt-8 text-center">
          <h2
            className="text-2xl font-extrabold tracking-[0.25em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-[var(--brand-red)]">MECH</span>
            <span className="text-[var(--brand-light)]">FRO</span>
          </h2>

          <p className="mt-2 text-white/70 text-[11px] uppercase tracking-[0.35em]">
            Engineering & Technology
          </p>
        </div>

        {/* Progress */}
        <div className="mt-8 w-56 h-[4px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-150"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg,var(--brand-red),var(--brand-blue),var(--brand-light))",
            }}
          />
        </div>

        <div
          className="mt-3 text-sm font-medium"
          style={{ color: "var(--brand-light)" }}
        >
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}

function Gear({ color }: { color: string }) {
  return (
    <g>
      <circle
        cx="50"
        cy="50"
        r="36"
        fill="none"
        stroke={color}
        strokeWidth="5"
      />

      {[...Array(12)].map((_, i) => {
        const angle = (i * 360) / 12;

        return (
          <rect
            key={i}
            x="47"
            y="4"
            width="6"
            height="14"
            fill={color}
            rx="1"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </g>
  );
}