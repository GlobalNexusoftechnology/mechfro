import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import ServiceDetail from "../pages/ServiceDetail";
import Services from "../pages/Services";
import Home from "../pages/Home";
import MainLayout from "../components/layout/MainLayout";
import ScrollToTop from "../components/common/ScrollToTop/ScrollToTop";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/privacy" element={<Privacy />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/services" element={<Services />} />

          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}