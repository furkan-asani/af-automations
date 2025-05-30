// app/components/slidesData.ts (or a suitable path)
export interface Slide {
  id: number;
  imageSrc: string; // Replace with actual image paths
  category: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const useCasesSlides: Slide[] = [
  {
    id: 1,
    imageSrc: "/images/carousel/use-case-1.jpg", // Example path, replace with your image
    category: "AUFGABENAUTOMATISIERUNG",
    title: "Nie wieder Zeit mit Routineaufgaben verschwenden",
    description:
      "Delegieren Sie Dokumentenzusammenfassungen, juristische Vor-Recherchen und die Mandantenaufnahme an Ihre neue KI-Assistenz. Ergebnis: Ihr Team gewinnt Stunden zurück – für Arbeit, die Mandanten begeistert und Ihre Kasse klingeln lässt.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-1",
  },
  {
    id: 2,
    imageSrc: "/images/carousel/use-case-2.jpg",
    category: "RECHERCHE",
    title: "Schluss mit endloser Datenbank-Recherche",
    description:
      "Ihre KI durchforstet juristische Datenbanken in Minuten, nicht Stunden. Sie erhalten präzise Grundlagen für Ihre Strategie und gewinnen wertvolle Zeit für die Entwicklung gewinnbringender Falltaktiken – während Ihre Konkurrenz noch sucht.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-2",
  },
  {
    id: 3,
    imageSrc: "/images/carousel/use-case-3.jpg",
    category: "VERTRAGSPRÜFUNG",
    title: "Vertragsprüfung in Rekordzeit: Bis zu 67% Zeitersparnis",
    description:
      "Ihr neuer KI-Partner analysiert umfangreiche Verträge in Sekunden, statt in Stunden. Identifizieren Sie Risiken und Schlüsselklauseln 3x schneller und widmen Sie sich der strategischen Beratung, die Mandanten wirklich schätzen (und bezahlen!).",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-3",
  },
  {
    id: 4,
    imageSrc: "/images/carousel/use-case-4.jpg",
    category: "ADMINISTRATION",
    title: "Verwandeln Sie unbezahlte Admin-Zeit in bares Geld",
    description:
      "Administrative Aufgaben fressen Ihre wertvolle, abrechenbare Zeit. Unsere KI automatisiert den initialen Mandantenkontakt, die Kommunikation mit Stakeholdern und sogar die Rechnungserstellung. Mehr Zeit für das, was zählt: Ihre Mandanten und Ihr Umsatz.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-4",
  },
  {
    id: 5,
    imageSrc: "/images/carousel/use-case-5.jpg",
    category: "SCHRIFTSTÜCKERSTELLUNG",
    title: "Schriftsätze bis zu 54% schneller erstellen",
    description:
      "Dank intelligenter Kontexterkennung liefert Ihnen unsere KI maßgeschneiderte Entwürfe für Ihre Schriftsätze. Sie prüfen, finalisieren und sparen Stunden – bei jedem einzelnen Fall.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-5",
  },
  {
    id: 6,
    imageSrc: "/images/carousel/use-case-6.jpg",
    category: "REGULARIENÜBERWACHUNG",
    title: "Gesetzesänderungen immer im Blick – ohne manuellen Aufwand",
    description:
      "Konzentrieren Sie sich auf Ihre Mandanten, nicht auf das Wälzen neuer Regularien. Ihr System überwacht relevante Gesetzesänderungen und alarmiert Sie proaktiv, welche Vorlagen und Verträge angepasst werden müssen. Minimieren Sie Risiken, maximieren Sie Compliance.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-6",
  },
  {
    id: 7,
    imageSrc: "/images/carousel/use-case-7.jpg",
    category: "FRISTENMANAGEMENT",
    title: "Nie wieder eine Frist verpassen",
    description:
      "Schlafen Sie ruhiger! Ihr KI-System überwacht sämtliche Fristen, erinnert Sie rechtzeitig und erstellt sogar standardisierte Fristverlängerungsanträge vollautomatisch. Schluss mit Fristenstress, hallo Gelassenheit!",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-7",
  },
  {
    id: 8,
    imageSrc: "/images/carousel/use-case-8.jpg",
    category: "FALLBEARBEITUNG",
    title: "Jeder Fall perfekt organisiert – für maximale Effizienz",
    description:
      "Gewinnen Sie sofortige Einblicke in jede Fallakte, optimieren Sie die Teamkollaboration und reagieren Sie schneller und fundierter auf Mandantenanfragen. Das Ergebnis: effizientere Prozesse, zufriedenere Mandanten, bessere Reputation.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-8",
  },
  {
    id: 9,
    imageSrc: "/images/carousel/use-case-9.jpg",
    category: "DATENSICHERHEIT",
    title: "Maximale Sicherheit für sensible Daten – DSGVO-konform",
    description:
      "Schützen Sie das Wertvollste: die Daten Ihrer Mandanten. Unsere Plattform wurde mit robusten Sicherheitsprotokollen entwickelt, unterstützt Ihre Compliance-Verpflichtungen und garantiert: Ihre Daten und die Ihrer Mandanten verlassen niemals Deutschland. Absolute Rechtssicherheit für Sie.",
    buttonText: "Mehr erfahren",
    buttonLink: "#use-case-9",
  },
];

// **IMPORTANT**: Create a `/public/images/carousel/` directory in your project
// and add placeholder images like `use-case-1.jpg`, `use-case-2.jpg`, etc.
// Or, use a single placeholder for all initially:
// For example, download an image and save it as `/public/images/carousel-placeholder.jpg`
// Then, in the data above, you can set all `imageSrc` to `/images/carousel-placeholder.jpg`
// A good generic placeholder could be: https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80
