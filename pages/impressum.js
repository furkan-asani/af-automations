import React from "react";
import Head from "next/head";
import { Figtree } from "next/font/google";
import Footer from "../../components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function ImpressumPage() {
  return (
    <div className={`${figtree.className} bg-gray-900 text-white min-h-screen`}>
      <Head>
        <title>Impressum | AF Automations</title>
        <meta name="robots" content="noindex,nofollow" />{" "}
        {/* Prevent indexing of legal pages */}
      </Head>

      {/* Simple Navbar - consider a shared component later */}
      <nav className="bg-black text-white shadow-lg backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-semibold sm:ml-[-38px] hover:text-gray-300 transition-colors"
          >
            AF Automations
          </a>
          <div className="flex items-center space-x-6">
            <a
              href="/#social-proof"
              className="hover:text-gray-300 transition-colors"
            >
              Fallstudien
            </a>
            <a
              href="/#footer-contact"
              className="hover:text-gray-300 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-md mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#30D5C8]">
          Impressum
        </h1>

        <div className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl space-y-4 text-gray-300">
          <p className="italic text-center">
            [Hier werden die rechtlich notwendigen Angaben für das Impressum
            eingefügt. Bitte konsultieren Sie einen Anwalt, um sicherzustellen,
            dass alle Anforderungen erfüllt sind.]
          </p>

          {/* Beispielhafte Struktur - Inhalte müssen angepasst werden! */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              Angaben gemäß § 5 TMG:
            </h2>
            <p>Max Mustermann</p>
            <p>Musterstraße 1</p>
            <p>12345 Musterstadt</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              Kontakt:
            </h2>
            <p>Telefon: +49 (0) 123 456789</p>
            <p>E-Mail: info@afautomations.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              Umsatzsteuer-ID:
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
            </p>
            <p>DE123456789</p>
          </section>

          {/* Weitere Abschnitte je nach Bedarf (z.B. Verantwortlich für den Inhalt, Streitschlichtung etc.) */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              Hinweis zur Online-Streitbeilegung:
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#30D5C8] ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      {/* Simple Footer - consider a shared component later */}
      <Footer />
    </div>
  );
}
