import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenis } from "../SmoothScroll/SmoothScroll";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 0,
          force: true,
        });
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });
      }
    });
  }, [location.pathname]);

  return null;
}