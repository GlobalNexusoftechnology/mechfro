import LegalLayout from "../../components/common/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="January 2026"
    >
      <p>
        These Terms & Conditions govern your use of the MECHFRO
        Engineering & Technologies website, products, services,
        quotations, and communications. By using our website or
        engaging with our services, you agree to these terms.
      </p>

      <h2>Website Use</h2>

      <p>
        The information provided on this website is for general
        informational purposes only. Product specifications,
        availability, pricing, and technical details may change
        without notice and are subject to confirmation through
        official quotations.
      </p>

      <h2>Quotations & Orders</h2>

      <p>
        All quotations are valid only for the period specified in the
        quotation document. Orders are accepted subject to agreed
        payment terms, delivery schedules, and product availability.
      </p>

      <h2>Quality & Inspection</h2>

      <p>
        Products may be supplied with relevant quality documentation,
        including test certificates where applicable. Additional
        inspections, certifications, or testing requirements may incur
        additional charges.
      </p>

      <h2>Limitation of Liability</h2>

      <p>
        MECHFRO shall not be liable for indirect, incidental,
        consequential, or special damages arising from the use,
        installation, handling, or misuse of supplied products.
      </p>

      <h2>Intellectual Property</h2>

      <p>
        All content, trademarks, logos, graphics, and materials on
        this website are the property of MECHFRO Engineering &
        Technologies unless otherwise stated. Unauthorized use,
        reproduction, or distribution is prohibited.
      </p>

      <h2>Governing Law</h2>

      <p>
        These terms shall be governed by and interpreted in accordance
        with the laws of India. Any disputes arising from these terms
        shall be subject to the jurisdiction of the courts in Mumbai,
        Maharashtra.
      </p>

      <h2>Contact Us</h2>

      <p>
        For questions regarding these Terms & Conditions, please
        contact us at{" "}
        <a
          href="mailto:info@mechfro.com"
          className="text-brand-red"
        >
          info@mechfro.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}