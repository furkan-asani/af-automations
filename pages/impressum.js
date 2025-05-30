import React from "react";
import Head from "next/head";
import { Figtree } from "next/font/google";
import Footer from "../components/Footer";

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

        <div className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl space-y-6 text-gray-300">
          <div>
            <p className="font-semibold text-lg mb-1">Angaben gemäß § 5 DDG:</p>
            <p>Furkan Asani</p>
            <p>Hörgelstraße 15</p>
            <p>76228 Karlsruhe</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Vertreten durch:</p>
            <p>Furkan Asani</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Kontakt:</p>
            <p>Telefon: 01578-0960327</p>
            <p>E-Mail: furkan.asani@gmx.de</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Umsatzsteuer-ID:</p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              DE362657356
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">Wirtschafts-ID:</p>
            <p>N/A</p>
          </div>

          <div>
            <p className="font-semibold text-lg mb-1">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
            </p>
            <p>Furkan Asani</p>
            <p>Hörgelstraße 15</p>
            <p>76228 Karlsruhe</p>
          </div>

          <hr className="border-slate-600 my-6" />

          <section>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
              Haftungsausschluss
            </h3>
            <h4 className="text-xl font-medium mb-2 text-gray-200">
              Haftung für Inhalte
            </h4>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            <h4 className="text-xl font-medium mb-2 text-gray-200">
              Haftung für Links
            </h4>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
              Urheberrecht
            </h3>
            <p className="mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
              Datenschutz
            </h3>
            <p className="mb-4">
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
              darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht
              veröffentlichten Kontaktdaten durch Dritte zur Übersendung von
              nicht ausdrücklich angeforderter Werbung und
              Informationsmaterialien wird hiermit ausdrücklich widersprochen.
              Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
              Schritte im Falle der unverlangten Zusendung von
              Werbeinformationen, etwa durch Spam-Mails, vor.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
              Google Analytics
            </h3>
            <p className="mb-4">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. (\'\'Google\'\'). Google Analytics verwendet sog.
              \'\'Cookies\'\', Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre
              Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an
              einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre
              Nutzung der Website auszuwerten, um Reports über die
              Websiteaktivitäten für die Websitebetreiber zusammenzustellen und
              um weitere mit der Websitenutzung und der Internetnutzung
              verbundene Dienstleistungen zu erbringen. Auch wird Google diese
              Informationen gegebenenfalls an Dritte übertragen, sofern dies
              gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
              Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
              IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende
              Einstellung Ihrer Browser Software verhindern; wir weisen Sie
              jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht
              sämtliche Funktionen dieser Website voll umfänglich nutzen können.
              Durch die Nutzung dieser Website erklären Sie sich mit der
              Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
              beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">
              Google AdSense
            </h3>
            <p className="mb-4">
              Diese Website benutzt Google Adsense, einen Webanzeigendienst der
              Google Inc., USA (\'\'Google\'\'). Google Adsense verwendet sog.
              \'\'Cookies\'\' (Textdateien), die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglicht. Google Adsense verwendet auch sog. \'\'Web Beacons\'\'
              (kleine unsichtbare Grafiken) zur Sammlung von Informationen.
              Durch die Verwendung des Web Beacons können einfache Aktionen wie
              der Besucherverkehr auf der Webseite aufgezeichnet und gesammelt
              werden. Die durch den Cookie und/oder Web Beacon erzeugten
              Informationen über Ihre Benutzung dieser Website (einschließlich
              Ihrer IP-Adresse) werden an einen Server von Google in den USA
              übertragen und dort gespeichert. Google wird diese Informationen
              benutzen, um Ihre Nutzung der Website im Hinblick auf die Anzeigen
              auszuwerten, um Reports über die Websiteaktivitäten und Anzeigen
              für die Websitebetreiber zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              zu erbringen. Auch wird Google diese Informationen gegebenenfalls
              an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder
              soweit Dritte diese Daten im Auftrag von Google verarbeiten.
              Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der
              Google in Verbindung bringen. Das Speichern von Cookies auf Ihrer
              Festplatte und die Anzeige von Web Beacons können Sie verhindern,
              indem Sie in Ihren Browser-Einstellungen \'\'keine Cookies
              akzeptieren\'\' wählen (Im MS Internet-Explorer unter \'\'Extras -
              Internetoptionen - Datenschutz - Einstellung\'\'; im Firefox unter
              \'\'Extras - Einstellungen - Datenschutz - Cookies\'\'); wir
              weisen Sie jedoch darauf hin, dass Sie in diesem Fall
              gegebenenfalls nicht sämtliche Funktionen dieser Website voll
              umfänglich nutzen können. Durch die Nutzung dieser Website
              erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten
              durch Google in der zuvor beschriebenen Art und Weise und zu dem
              zuvor benannten Zweck einverstanden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <p className="text-sm text-slate-400 mt-6 text-center">
            Impressum von Impressum-Generator.de. Powered by Franziska
            Hasselbach, Bonn.
          </p>
        </div>
      </main>

      {/* Simple Footer - consider a shared component later */}
      <Footer />
    </div>
  );
}
