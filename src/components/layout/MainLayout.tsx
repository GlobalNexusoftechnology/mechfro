import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../common/Loader";

export default function MainLayout() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 700,
        once: true,
        offset: 60,
        easing: "ease-out-cubic",
      });
    });
  }, []);

  return (
    <>
      <Loader />
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}