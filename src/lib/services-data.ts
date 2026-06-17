// import flanges from "../assets/prod-flanges.jpg";
import instrument from "../assets/instrument.jpg";
// import tanks from "../assets/prod-tanks.jpg";
import hvac from "../assets/HVAC.jpg";
// import bolts from "../assets/prod-bolts.jpg";
// import bars from "../assets/prod-bars.jpg";
// import valves from "../assets/hero-valves.jpg";
import mechanical from "../assets/Mechanical.jpg";
// import refinery from "../assets/hero-refinery.jpg";
// import storage from "../assets/hero-tanks.jpg";
import pipes from "../assets/pipe.jpg";
// import water from "../assets/ind-water.jpg";

export interface Service {
  slug: string;
  title: string;
  short: string;
  image: string;
  overview: string;
  applications: string[];
  benefits: string[];
  specifications: { label: string; value: string }[];
}

export const services: Service[] = [
  {
    slug: "mechanical",
    title: "Mechanical",
    short:
      "Industrial mechanical products and materials for reliable plant operations.",
    image: mechanical,
    overview:
      "Comprehensive mechanical solutions including industrial control valves, SS flanges, fasteners, tanks, metal products, and raw materials. Designed to support demanding industrial, petrochemical, oil & gas, and manufacturing operations with reliable performance and durability.",
    applications: [
      "Industrial-Control-Valves",
      "SS-Flanges",
      "Industrial Fasteners & Stud Bolts",
    ],
    benefits: [
      "Industrial Tanks - FRP and GRP",
      "Metal Bars & Products",
      "Industrial Raw Materials",
      // "Full traceability & MTC documentation",
    ],
    specifications: [
      { label: "Size Range", value: '1/2" – 60"' },
      { label: "Pressure Class", value: "150# – 2500#" },
      { label: "Materials", value: "CS, SS304/316, Duplex, Inconel" },
      { label: "Standards", value: "API 600, API 6D, ASME B16.34" },
    ],
  },
  {
    slug: "instrumentation",
    title: "Instrumentation",
    short:
      "Process measurement, control, and automation solutions for industry.",
    image: instrument,
    overview:
      "Advanced instrumentation products for accurate monitoring, measurement, and process control. Offering gauges, control valves, sensors, flow meters, transmitters, communication cables, PLC/DCS systems, and automation accessories for industrial applications.",
    applications: [
      "Temperature and pressure Gauge",
      "Control Valves",
      "Level Gauges & Sensors",
      "Flow Meters",
      "Transmitters Thermocouples",
      "Gas Detectors",
    ],
    benefits: [
      "Instrumentation communication Cables",
      "Thermowells",
      "Calibrators & Recorders",
      "Solenoid Valves. Actuators",
      "PLC & DCS",
      "Digital Indicators & Controllers",
      
    ],
    specifications: [
      { label: "Size Range", value: '1/2" – 96"' },
      { label: "Standards", value: "ASME, ANSI, EN, DIN, JIS" },
      { label: "Finish", value: "Machined, Serrated, Stock" },
      { label: "Class", value: "150# – 2500#" },
    ],
  },
  {
    slug: "hvac",
    title: "HVAC",
    short: "Complete HVAC products and services for efficient air management.",
    image: hvac,
    overview:
      "Complete HVAC solutions including ducting materials, air filters, insulation systems, dampers, diffusers, control components, and professional installation services. Designed to ensure efficient air distribution, ventilation, cooling, and indoor air quality.",
    applications: [
      "Air Filters and Accessories",
      "HVAC Ducting Materials",
      "GI Ducts",
      "Flexible Ducts",
      "Pre-Insulated Ducts",
      "Aluminum Ducts",
    ],
    benefits: [
      "Insulation Materials",
      "Dampers, Diffusers, and Grilles",
      "HVAC Control Components and Accessories",
      "Installation Services",
      "HVAC System Installation",
      "Air Distribution System Installation",
      "Ventilation System Installation",
      "Kitchen Exhaust and Fresh Air Systems",
    ],
    specifications: [
      { label: "Grades", value: "B7, B8, B8M, L7, 4.6 – 12.9" },
      { label: "Diameter", value: "M6 – M100" },
      { label: "Standards", value: "ASME B18, ASTM A193/194" },
      { label: "Coating", value: "PTFE, Xylan, HDG, Zn" },
    ],
  },
  {
    slug: "composite-material-supply",
    title: "Composite Material Supply",
    short: "Corrosion-resistant composite materials and piping solutions.",
    image: pipes,
    overview:
      "High-quality composite and industrial material supply solutions including FRP, GRP, and PVC piping systems, FRP/GRP storage tanks, Teflon gasket kits, rubber gaskets, and sealing products. Engineered for corrosion resistance, durability, and long-term industrial performance.",
    applications: [
      "FRP Pipe (Fiber Reinforced Plastic)",
      "GRP Pipe (Glass Reinforced Plastic)",
      "PVC Pipe (Polyvinyl Chloride)",
    ],
    benefits: ["Teflon gas kits", "Rubber gaskets", "FRP tanks", "GRP tanks"],
    specifications: [
      { label: "Capacity", value: "1 KL – 50,000 KL" },
      { label: "Materials", value: "CS, SS304, SS316, Duplex" },
      { label: "Standards", value: "API 650, ASME Sec VIII" },
      { label: "Type", value: "Vertical, Horizontal, Spherical" },
    ],
  },
  // {
  //   slug: "industrial-control-valves",
  //   title: "industrial-control-valves",
  //   short: "Precision flow control for critical process environments.",
  //   image: valves,
  //   overview:
  //     "Globe, ball, butterfly, gate and check valves engineered to meet the toughest pressure, temperature and corrosion requirements across oil & gas, petrochemical and power industries.",
  //   applications: [
  //     "Refineries & petrochemical plants",
  //     "Power generation systems",
  //     "Water & wastewater treatment",
  //     "Marine & offshore platforms",
  //   ],
  //   benefits: [
  //     "Multi-grade materials including SS, Duplex & Super Duplex",
  //     "ANSI, ASME, API & DIN compliant",
  //     "Custom actuation: pneumatic, electric, hydraulic",
  //     "Full traceability & MTC documentation",
  //   ],
  //   specifications: [
  //     { label: "Size Range", value: '1/2" – 60"' },
  //     { label: "Pressure Class", value: "150# – 2500#" },
  //     { label: "Materials", value: "CS, SS304/316, Duplex, Inconel" },
  //     { label: "Standards", value: "API 600, API 6D, ASME B16.34" },
  //   ],
  // },
  // {
  //   slug: "ss-flanges",
  //   title: "ss-flanges",
  //   short: "Stainless steel flanges in every major standard and grade.",
  //   image: flanges,
  //   overview:
  //     "Stocked and custom-fabricated flanges in stainless, carbon and alloy steels. From slip-on to weld-neck, blind and lap-joint, supplied with full mill test certification.",
  //   applications: [
  //     "Pipeline & pipework systems",
  //     "Pressure vessels",
  //     "Process equipment skids",
  //     "Hygienic & sanitary applications",
  //   ],
  //   benefits: [
  //     "ASME B16.5 / B16.47 / EN1092-1",
  //     "SS304, SS304L, SS316, SS316L, Duplex",
  //     "PMI & hardness testing on request",
  //     "Made-to-print fabrication available",
  //   ],
  //   specifications: [
  //     { label: "Size Range", value: '1/2" – 96"' },
  //     { label: "Standards", value: "ASME, ANSI, EN, DIN, JIS" },
  //     { label: "Finish", value: "Machined, Serrated, Stock" },
  //     { label: "Class", value: "150# – 2500#" },
  //   ],
  // },
  // {
  //   slug: "industrial-fasteners",
  //   title: "industrial-fasteners",
  //   short: "High-integrity bolting for pressure-critical assemblies.",
  //   image: bolts,
  //   overview:
  //     "Stud bolts, hex bolts, nuts, washers and gaskets engineered to ASME and ASTM grades. Supplied with PTFE, Xylan, hot-dip galvanised and zinc plated coatings.",
  //   applications: [
  //     "Flange bolting in piping",
  //     "Heat exchangers & boilers",
  //     "Wind turbine assemblies",
  //     "Heavy structural projects",
  //   ],
  //   benefits: [
  //     "A193 B7 / B8 / B8M, A320 L7",
  //     "PTFE Xylan coatings for corrosion",
  //     "Full chemical & mechanical traceability",
  //     "Bulk & project-based dispatching",
  //   ],
  //   specifications: [
  //     { label: "Grades", value: "B7, B8, B8M, L7, 4.6 – 12.9" },
  //     { label: "Diameter", value: "M6 – M100" },
  //     { label: "Standards", value: "ASME B18, ASTM A193/194" },
  //     { label: "Coating", value: "PTFE, Xylan, HDG, Zn" },
  //   ],
  // },
  // {
  //   slug: "industrial-tanks",
  //   title: "industrial-tanks",
  //   short: "Custom-fabricated tanks for process, storage and chemical duties.",
  //   image: storage,
  //   overview:
  //     "Vertical, horizontal, atmospheric and pressure tanks fabricated from CS, SS and exotic alloys. Designed and built to API 650, ASME Sec VIII and customer specifications.",
  //   applications: [
  //     "Bulk crude & product storage",
  //     "Process intermediates",
  //     "Firewater & utility services",
  //     "Chemical & corrosive duty",
  //   ],
  //   benefits: [
  //     "Engineered to API 650 / ASME Sec VIII",
  //     "Capacities from 1 KL to 50,000 KL",
  //     "Internal/external linings available",
  //     "Turnkey site erection support",
  //   ],
  //   specifications: [
  //     { label: "Capacity", value: "1 KL – 50,000 KL" },
  //     { label: "Materials", value: "CS, SS304, SS316, Duplex" },
  //     { label: "Standards", value: "API 650, ASME Sec VIII" },
  //     { label: "Type", value: "Vertical, Horizontal, Spherical" },
  //   ],
  // },
  // {
  //   slug: "frp-tanks",
  //   title: "FRP Tanks",
  //   short: "Fibre-reinforced plastic tanks for aggressive chemical service.",
  //   image: tanks,
  //   overview:
  //     "FRP tanks built using filament-winding and contact-moulding techniques for superior corrosion resistance and long service life in chemical processing environments.",
  //   applications: [
  //     "Acid & alkali storage",
  //     "Effluent treatment plants",
  //     "Plating & finishing industries",
  //     "Pharmaceutical & food processing",
  //   ],
  //   benefits: [
  //     "Excellent chemical resistance",
  //     "Lightweight, easy to transport",
  //     "Custom resins for service media",
  //     "ASTM D3299 / BS 4994 compliant",
  //   ],
  //   specifications: [
  //     { label: "Capacity", value: "100 L – 200 KL" },
  //     { label: "Construction", value: "Filament wound / Hand lay-up" },
  //     { label: "Resin", value: "Isophthalic, Vinylester, Bisphenol" },
  //     { label: "Standards", value: "ASTM D3299, BS 4994" },
  //   ],
  // },
  // {
  //   slug: "grp-tanks",
  //   title: "GRP Tanks",
  //   short: "Glass reinforced plastic tanks for water and process duty.",
  //   image: water,
  //   overview:
  //     "Sectional and panel-type GRP tanks for potable water, firewater and industrial storage. Hygienic, durable and easy to install at site.",
  //   applications: [
  //     "Potable water storage",
  //     "Firewater reservoirs",
  //     "Industrial process water",
  //     "Rooftop & ground tanks",
  //   ],
  //   benefits: [
  //     "Modular panel construction",
  //     "Food-grade, non-toxic",
  //     "UV & corrosion resistant",
  //     "Quick site assembly",
  //   ],
  //   specifications: [
  //     { label: "Capacity", value: "500 L – 1,000 KL" },
  //     { label: "Panel Size", value: "1m x 1m / 0.5m x 1m" },
  //     { label: "Standards", value: "BS EN 13280, WRAS" },
  //     { label: "Type", value: "Sectional / Hot-pressed" },
  //   ],
  // },
  // {
  //   slug: "metal-products",
  //   title: "Metal Bars & Products",
  //   short: "Round, square and bright bars in carbon, alloy and stainless steel.",
  //   image: bars,
  //   overview:
  //     "Comprehensive inventory of metal bars, plates, sheets and structural products in multiple grades, finishes and dimensions for fabrication and machining workshops.",
  //   applications: [
  //     "Machine shops & fabrication",
  //     "Shaft & pin manufacturing",
  //     "Structural projects",
  //     "OEM component supply",
  //   ],
  //   benefits: [
  //     "Wide material grade portfolio",
  //     "Cut-to-length services",
  //     "Mill test certificates included",
  //     "Just-in-time project supply",
  //   ],
  //   specifications: [
  //     { label: "Forms", value: "Round, Square, Hex, Flat" },
  //     { label: "Materials", value: "CS, MS, SS, Alloy, Brass, Cu, Al" },
  //     { label: "Diameter", value: "6mm – 500mm" },
  //     { label: "Standards", value: "ASTM, EN, IS, JIS" },
  //   ],
  // },
  // {
  //   slug: "raw-materials",
  //   title: "Industrial Raw Materials",
  //   short: "Strategic sourcing of ferrous & non-ferrous raw materials.",
  //   image: refinery,
  //   overview:
  //     "End-to-end raw material sourcing for OEMs, fabricators and project EPCs — backed by trusted mill relationships, robust QA and reliable logistics across geographies.",
  //   applications: [
  //     "OEM manufacturing",
  //     "EPC project execution",
  //     "Fabrication workshops",
  //     "Component suppliers",
  //   ],
  //   benefits: [
  //     "Direct mill sourcing",
  //     "Bulk & spot supply",
  //     "PMI / chemical testing",
  //     "Global logistics coordination",
  //   ],
  //   specifications: [
  //     { label: "Categories", value: "Ferrous & Non-ferrous" },
  //     { label: "Forms", value: "Coils, Sheets, Plates, Billets" },
  //     { label: "QA", value: "PMI, MTC, Hardness" },
  //     { label: "Logistics", value: "FOB / CIF / DDP" },
  //   ],
  // },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
