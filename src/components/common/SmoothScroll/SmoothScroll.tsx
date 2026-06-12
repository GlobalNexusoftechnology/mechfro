import { useEffect } from "react";
import Lenis from "lenis";

export let lenis: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let frame: number;

    const raf = (time: number) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}