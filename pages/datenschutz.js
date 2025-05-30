import React from "react";
import Head from "next/head";
import { Figtree } from "next/font/google";
import Footer from "../../components/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function DatenschutzPage() {
  return (
    <div className={`${figtree.className} bg-gray-900 text-white min-h-screen`}>
      <Head>
        <title>Datenschutzerklärung | AF Automations</title>
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
          Datenschutzerklärung
        </h1>

        <div className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl space-y-6 text-gray-300">
          <p className="italic text-center">
            [Hier werden die rechtlich notwendigen Angaben für die
            Datenschutzerklärung eingefügt. Bitte konsultieren Sie einen Anwalt,
            um sicherzustellen, dass alle Anforderungen der DSGVO und anderer
            relevanter Gesetze erfüllt sind.]
          </p>

          {/* Beispielhafte Struktur - Inhalte müssen angepasst werden! */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2 text-gray-200">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>
            <p>Wie erfassen wir Ihre Daten? ...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Datenschutz
            </h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>...</p>
            <h3 className="text-xl font-medium mt-4 mb-2 text-gray-200">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist: [Name und Kontaktdaten des Verantwortlichen hier
              einfügen - siehe Impressum]
            </p>
            <p>...</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-100">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies.
              Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten
              keine Viren. Cookies dienen dazu, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>...</p>
            <h3 className="text-xl font-medium mt-4 mb-2 text-gray-200">
              Kontaktformular
            </h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde.
            </p>
            <p>...</p>
          </section>

          {/* Fügen Sie hier weitere Abschnitte hinzu, die für Ihre Website relevant sind, z.B.:
            - Server-Log-Dateien
            - Analyse-Tools (z.B. Google Analytics)
            - Newsletterdaten
            - Social Media Plugins
            - Rechte der betroffenen Person (Auskunft, Berichtigung, Löschung etc.)
            - Widerspruchsrecht
            - SSL-/TLS-Verschlüsselung
            - Änderungen dieser Datenschutzerklärung
          */}
        </div>
      </main>

      {/* Simple Footer - consider a shared component later */}
      <Footer />
    </div>
  );
}
