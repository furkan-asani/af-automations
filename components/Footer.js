import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer-contact" // Keep id if it's used for navigation, or remove if only for styling context
      className="bg-black text-white py-12 text-center"
    >
      <p className="mb-3 text-gray-300">
        © {new Date().getFullYear()} AF Automations. Alle Rechte vorbehalten.
      </p>
      <p className="text-sm text-gray-400 mb-4">
        Intelligente Automatisierung für die moderne Anwaltskanzlei.
        <a
          href="mailto:info@afautomations.de"
          className="underline hover:text-[#30D5C8] ml-2 transition-colors"
        >
          Kontaktieren Sie uns
        </a>
      </p>
      <div className="text-sm text-gray-400 space-x-4">
        <a
          href="/impressum"
          className="underline hover:text-[#30D5C8] transition-colors"
        >
          Impressum
        </a>
        <span>|</span>
        <a
          href="/datenschutz"
          className="underline hover:text-[#30D5C8] transition-colors"
        >
          Datenschutz
        </a>
      </div>
    </footer>
  );
};

export default Footer;
