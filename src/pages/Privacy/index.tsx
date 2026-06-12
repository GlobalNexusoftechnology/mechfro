import LegalLayout from "../../components/common/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="January 2026"
    >
      <p>
        MECHFRO Engineering & Technologies ("MECHFRO", "we", "us")
        respects your privacy. This policy explains what information
        we collect, how we use it, and the choices you have.
      </p>

      <h2>Information We Collect</h2>

      <p>
        We collect information you provide through our contact and
        quotation forms, including your name, company, email address,
        phone number, and project requirements.
      </p>

      <h2>How We Use Your Information</h2>

      <ul>
        <li>Respond to inquiries and quotation requests</li>
        <li>Provide technical and project-related information</li>
        <li>Improve our website and services</li>
        <li>Meet legal and contractual obligations</li>
      </ul>

      <h2>Information Sharing</h2>

      <p>
        We do not sell personal information. Data may be shared with
        trusted suppliers, inspection agencies, logistics providers,
        and project partners when necessary to deliver services.
      </p>

      <h2>Your Rights</h2>

      <p>
        You may request access, correction, or deletion of your
        personal information by contacting us.
      </p>

      <h2>Contact Us</h2>

      <p>
        Email us at{" "}
        <a
          href="mailto:info@mechfro.com"
          className="text-brand-red"
        >
          info@mechfro.com
        </a>
      </p>
    </LegalLayout>
  );
}