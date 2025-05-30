import React from "react";
import Head from "next/head";
import { Figtree } from "next/font/google";
import Footer from "../components/Footer";

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
        <div className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl space-y-6 text-gray-300">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#30D5C8]">
            Datenschutz&shy;erkl&auml;rung
          </h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Allgemeine Hinweise
            </h3>{" "}
            <p>
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick
              dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
              Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
              Datenschutzerkl&auml;rung.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Datenerfassung auf dieser Website
            </h3>{" "}
            <h4 className="text-lg font-medium mt-4 mb-1 text-gray-200">
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </h4>{" "}
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
              Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
              dieser Datenschutzerkl&auml;rung entnehmen.
            </p>{" "}
            <h4 className="text-lg font-medium mt-4 mb-1 text-gray-200">
              Wie erfassen wir Ihre Daten?
            </h4>{" "}
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>{" "}
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>{" "}
            <h4 className="text-lg font-medium mt-4 mb-1 text-gray-200">
              Wof&uuml;r nutzen wir Ihre Daten?
            </h4>{" "}
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
              k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
              Sofern &uuml;ber die Website Vertr&auml;ge geschlossen oder
              angebahnt werden k&ouml;nnen, werden die &uuml;bermittelten Daten
              auch f&uuml;r Vertragsangebote, Bestellungen oder sonstige
              Auftragsanfragen verarbeitet.
            </p>{" "}
            <h4 className="text-lg font-medium mt-4 mb-1 text-gray-200">
              Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
            </h4>{" "}
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
              Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
              Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
              f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
              Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
              Aufsichtsbeh&ouml;rde zu.
            </p>{" "}
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
              Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Analyse-Tools und Tools von Dritt&shy;anbietern
            </h3>{" "}
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen.
            </p>{" "}
            <p>
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerkl&auml;rung.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              2. Hosting
            </h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <h3 className="text-xl font-medium mt-4 mb-2 text-gray-200">
              Externes Hosting
            </h3>{" "}
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters / der Hoster gespeichert. Hierbei kann es sich v.&nbsp;a.
              um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
              Daten, die &uuml;ber eine Website generiert werden, handeln.
            </p>{" "}
            <p>
              Das externe Hosting erfolgt zum Zwecke der Vertragserf&uuml;llung
              gegen&uuml;ber unseren potenziellen und bestehenden Kunden (Art. 6
              Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
              und effizienten Bereitstellung unseres Online-Angebots durch einen
              professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung
              die Speicherung von Cookies oder den Zugriff auf Informationen im
              Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
              Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>{" "}
            <p>
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
              verarbeiten, wie dies zur Erf&uuml;llung seiner Leistungspflichten
              erforderlich ist und unsere Weisungen in Bezug auf diese Daten
              befolgen.
            </p>{" "}
            <p>Wir setzen folgende(n) Hoster ein:</p>
            <p className="pl-4">
              {" "}
              {/* Indent for clarity */}
              Vercel (Vercel Inc, 340 S Lemon Ave #4133, Walnut, CA 91789,
              U.S.A.)
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              3. Allgemeine Hinweise und Pflicht&shy;informationen
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Datenschutz
            </h3>{" "}
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer
              pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>{" "}
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
              Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
              Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
              erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </p>{" "}
            <p>
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Hinweis zur verantwortlichen Stelle
            </h3>{" "}
            <p>
              Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
              dieser Website ist:
            </p>{" "}
            <div className="pl-4 space-y-1">
              {" "}
              {/* Indent and space out contact details */}
              <p>Furkan Asani</p>
              <p>H&ouml;rgelstra&szlig;e 15</p>
              <p>76228 Wolfartsweier</p>
              <p>
                Telefon: 01578 0960 327
                <br />
                E-Mail: furkan.asani@gmx.de
              </p>
            </div>
            <p>
              Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
              Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten
              (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Speicherdauer
            </h3>{" "}
            <p>
              Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
              speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
              Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
              L&ouml;schersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
              sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
              f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
              (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen);
              im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall
              dieser Gr&uuml;nde.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
              auf dieser Website
            </h3>{" "}
            <p>
              Sofern Sie in die Datenverarbeitung eingewilligt haben,
              verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
              besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
              werden. Im Falle einer ausdr&uuml;cklichen Einwilligung in die
              &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt
              die Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49
              Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies
              oder in den Zugriff auf Informationen in Ihr Endger&auml;t
              (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt
              die Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25
              Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind
              Ihre Daten zur Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
              vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir
              Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
              Weiteren verarbeiten wir Ihre Daten, sofern diese zur
              Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind
              auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
              Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
              Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber die
              jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in
              den folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung
              informiert.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Empf&auml;nger von personenbezogenen Daten
            </h3>{" "}
            <p>
              Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
              verschiedenen externen Stellen zusammen. Dabei ist teilweise auch
              eine &Uuml;bermittlung von personenbezogenen Daten an diese
              externen Stellen erforderlich. Wir geben personenbezogene Daten
              nur dann an externe Stellen weiter, wenn dies im Rahmen einer
              Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
              hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
              Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach
              Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
              sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz
              von Auftragsverarbeitern geben wir personenbezogene Daten unserer
              Kunden nur auf Grundlage eines g&uuml;ltigen Vertrags &uuml;ber
              Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
              Verarbeitung wird ein Vertrag &uuml;ber gemeinsame Verarbeitung
              geschlossen.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>{" "}
            <p>
              Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
              ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Widerspruchsrecht gegen die Datenerhebung in besonderen
              F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>{" "}
            <p className="bg-slate-700 p-4 rounded-md">
              {" "}
              {/* Highlight this important block */}
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
              GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
              GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
              EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
              GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
              DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
              DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
              WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
              VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
              SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
              &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
              AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
              (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>{" "}
            <p>
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
              STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Beschwerde&shy;recht bei der zust&auml;ndigen
              Aufsichts&shy;beh&ouml;rde
            </h3>{" "}
            <p>
              Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
              Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
              insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
            </h3>{" "}
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen,
              maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
              die direkte &Uuml;bertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Auskunft, Berichtigung und L&ouml;schung
            </h3>{" "}
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
              Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten
              k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Recht auf Einschr&auml;nkung der Verarbeitung
            </h3>{" "}
            <p>
              Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
              jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
              Verarbeitung besteht in folgenden F&auml;llen:
            </p>{" "}
            <ul className="list-disc list-inside pl-4 space-y-2">
              {" "}
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
                der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
                der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
                verlangen.
              </li>{" "}
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
                Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
                Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben
                Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>{" "}
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </li>{" "}
            </ul>{" "}
            <p>
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
              ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
              oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
              nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
              eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
              Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              SSL- bzw. TLS-Verschl&uuml;sselung
            </h3>{" "}
            <p>
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
              &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
              verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &bdquo;http://&ldquo; auf
              &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>{" "}
            <p>
              Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
              k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
              Dritten mitgelesen werden.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Widerspruch gegen Werbe-E-Mails
            </h3>{" "}
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht
              ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht
              ausdr&uuml;cklich angeforderter Werbung und
              Informationsmaterialien wird hiermit widersprochen. Die Betreiber
              der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im
              Falle der unverlangten Zusendung von Werbeinformationen, etwa
              durch Spam-E-Mails, vor.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">Cookies</h3>{" "}
            <p>
              Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
              Cookies sind kleine Datenpakete und richten auf Ihrem
              Endger&auml;t keinen Schaden an. Sie werden entweder
              vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endger&auml;t gespeichert. Session-Cookies werden nach Ende Ihres
              Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf
              Ihrem Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen
              oder eine automatische L&ouml;schung durch Ihren Webbrowser
              erfolgt.
            </p>{" "}
            <p>
              Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von
              Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
              Dienstleistungen von Drittunternehmen innerhalb von Webseiten
              (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>{" "}
            <p>
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
              nicht funktionieren w&uuml;rden (z.&nbsp;B. die Warenkorbfunktion
              oder die Anzeige von Videos). Andere Cookies k&ouml;nnen zur
              Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet
              werden.
            </p>{" "}
            <p>
              Cookies, die zur Durchf&uuml;hrung des elektronischen
              Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
              Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B.
              Cookies zur Messung des Webpublikums) erforderlich sind
              (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit.
              f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben
              wird. Der Websitebetreiber hat ein berechtigtes Interesse an der
              Speicherung von notwendigen Cookies zur technisch fehlerfreien und
              optimierten Bereitstellung seiner Dienste. Sofern eine
              Einwilligung zur Speicherung von Cookies und vergleichbaren
              Wiedererkennungstechnologien abgefragt wurde, erfolgt die
              Verarbeitung ausschlie&szlig;lich auf Grundlage dieser
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
              TDDDG); die Einwilligung ist jederzeit widerrufbar.
            </p>{" "}
            <p>
              Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber
              das Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte
              F&auml;lle oder generell ausschlie&szlig;en sowie das automatische
              L&ouml;schen der Cookies beim Schlie&szlig;en des Browsers
              aktivieren. Bei der Deaktivierung von Cookies kann die
              Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
            </p>{" "}
            <p>
              Welche Cookies und Dienste auf dieser Website eingesetzt werden,
              k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              5. Newsletter
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              Newsletter&shy;daten
            </h3>{" "}
            <p>
              Wenn Sie den auf der Website angebotenen Newsletter beziehen
              m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse
              sowie Informationen, welche uns die &Uuml;berpr&uuml;fung
              gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse
              sind und mit dem Empfang des Newsletters einverstanden sind.
              Weitere Daten werden nicht bzw. nur auf freiwilliger Basis
              erhoben. Diese Daten verwenden wir ausschlie&szlig;lich f&uuml;r
              den Versand der angeforderten Informationen und geben diese nicht
              an Dritte weiter.
            </p>{" "}
            <p>
              Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen
              Daten erfolgt ausschlie&szlig;lich auf Grundlage Ihrer
              Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
              Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
              deren Nutzung zum Versand des Newsletters k&ouml;nnen Sie
              jederzeit widerrufen, etwa &uuml;ber den
              &bdquo;Austragen&ldquo;-Link im Newsletter. Die
              Rechtm&auml;&szlig;igkeit der bereits erfolgten
              Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
              unber&uuml;hrt.
            </p>{" "}
            <p>
              Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
              hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem
              Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert
              und nach der Abbestellung des Newsletters oder nach Zweckfortfall
              aus der Newsletterverteilerliste gel&ouml;scht. Wir behalten uns
              vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem
              Ermessen im Rahmen unseres berechtigten Interesses nach Art. 6
              Abs. 1 lit. f DSGVO zu l&ouml;schen oder zu sperren.
            </p>{" "}
            <p>
              Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben
              hiervon unber&uuml;hrt.
            </p>{" "}
            <p>
              Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
              E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in
              einer Blacklist gespeichert, sofern dies zur Verhinderung
              k&uuml;nftiger Mailings erforderlich ist. Die Daten aus der
              Blacklist werden nur f&uuml;r diesen Zweck verwendet und nicht mit
              anderen Daten zusammengef&uuml;hrt. Dies dient sowohl Ihrem
              Interesse als auch unserem Interesse an der Einhaltung der
              gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes
              Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
              Speicherung in der Blacklist ist zeitlich nicht befristet.{" "}
              <strong>
                Sie k&ouml;nnen der Speicherung widersprechen, sofern Ihre
                Interessen unser berechtigtes Interesse &uuml;berwiegen.
              </strong>
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-100">
              6. Plugins und Tools
            </h2>
            <h3 className="text-xl font-medium mb-2 text-gray-200">
              YouTube mit erweitertem Datenschutz
            </h3>{" "}
            <p>
              Diese Website bindet Videos der Website YouTube ein. Betreiber der
              Website ist die Google Ireland Limited (&bdquo;Google&rdquo;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>{" "}
            <p>
              Wenn Sie eine dieser Website besuchen, auf denen YouTube
              eingebunden ist, wird eine Verbindung zu den Servern von YouTube
              hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
              unserer Seiten Sie besucht haben. Wenn Sie in Ihrem
              YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr
              Surfverhalten direkt Ihrem pers&ouml;nlichen Profil zuzuordnen.
              Dies k&ouml;nnen Sie verhindern, indem Sie sich aus Ihrem
              YouTube-Account ausloggen.
            </p>{" "}
            <p>
              Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im
              erweiterten Datenschutzmodus abgespielt werden, werden nach
              Aussage von YouTube nicht zur Personalisierung des Surfens auf
              YouTube eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus
              ausgespielt werden, sind ebenfalls nicht personalisiert. Im
              erweiterten Datenschutzmodus werden keine Cookies gesetzt.
              Stattdessen werden jedoch sogenannte Local Storage Elemente im
              Browser des Users gespeichert, die &auml;hnlich wie Cookies
              personenbezogene Daten beinhalten und zur Wiedererkennung
              eingesetzt werden k&ouml;nnen. Details zum erweiterten
              Datenschutzmodus finden Sie hier:{" "}
              <a
                href="https://support.google.com/youtube/answer/171780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#30D5C8] hover:text-[#28bba9] underline"
              >
                https://support.google.com/youtube/answer/171780
              </a>
              .
            </p>{" "}
            <p>
              Gegebenenfalls k&ouml;nnen nach der Aktivierung eines
              YouTube-Videos weitere Datenverarbeitungsvorg&auml;nge
              ausgel&ouml;st werden, auf die wir keinen Einfluss haben.
            </p>{" "}
            <p>
              Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
              Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
              Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
              lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung
              die Speicherung von Cookies oder den Zugriff auf Informationen im
              Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
              Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>{" "}
            <p>
              Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie
              in deren Datenschutzerkl&auml;rung unter:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#30D5C8] hover:text-[#28bba9] underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
            <p>
              Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
              dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist
              ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und
              den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards
              bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes
              nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu
              erhalten Sie vom Anbieter unter folgendem Link:{" "}
              <a
                href="https://www.dataprivacyframework.gov/participant/5780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#30D5C8] hover:text-[#28bba9] underline"
              >
                https://www.dataprivacyframework.gov/participant/5780
              </a>
              .
            </p>
          </section>

          <hr className="border-slate-600 my-6" />

          <p className="text-sm text-slate-400 mt-8 text-center">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de"
              className="text-[#30D5C8] hover:text-[#28bba9] underline"
            >
              https://www.e-recht24.de
            </a>
          </p>
        </div>
      </main>
      {/* Simple Footer - consider a shared component later */}
      <Footer />
    </div>
  );
}
