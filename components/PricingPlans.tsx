import React, { useState, useEffect, useCallback } from "react";

const products = [
  {
    name: "KI & Automatisierungs-Strategie-Session",
    description:
      "Wir finden Zeitfresser, bauen direkt Automationen. Sie gehen mit Klarheit & Ergebnissen raus.",
    price: "1.500€",
    features: [
      "Prozess- & Potenzialanalyse",
      "Sofort kleine Automationen",
      "Konkreter Fahrplan",
    ],
    tag: null,
    border: "border-gray-200",
    tagColor: "",
  },
  {
    name: "PrivateGPT - 100% Privat & DSGVO-konform",
    description:
      "Ihre eigene, sichere KI. Keine Cloud, volle Kontrolle. Sofort einsatzbereit. Mit Zitaten, Referenzen & Quellen.",
    price: "3.500€",
    features: [
      "Private KI, keine Cloud",
      "Schnell startklar",
      "Individuell anpassbar",
      "Keine laufenden Kosten",
    ],
    tag: "Meistgewählt",
    border: "border-cyan-400",
    tagColor: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Premium KI & Automatisierungsberatung",
    description:
      "Komplettpaket: Von Idee bis laufende Automatisierung. End-to-End, alles aus einer Hand.",
    price: "5.000€",
    features: [
      "Discovery-Workshop",
      "Individuelle Umsetzung",
      "Deployment & Wartung",
      "Messbare Ergebnisse",
    ],
    tag: "All-in-One",
    border: "border-yellow-400",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
];

const check = (
  <svg
    className="w-4 h-4 text-emerald-500 inline-block align-middle"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const HEADER_MIN_HEIGHT = 140; // px, adjust for best fit
const AUTOPLAY_INTERVAL = 5000;

interface PricingPlansProps {
  onRequest?: (offer: string) => void;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ onRequest }) => {
  // Carousel state for mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const total = products.length;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setIsTransitioning(false);
    }, 50);
  }, [total, isTransitioning]);

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + total) % total);
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (idx) => {
    if (isTransitioning || idx === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 50);
  };

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    let intervalId = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(intervalId);
  }, [goToNext]);

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 sm:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          Unsere beliebtesten Angebote
        </h2>
        {/* Desktop: row, Mobile: carousel */}
        <div className="hidden md:flex flex-row gap-6 md:gap-4 justify-center items-stretch">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className={`relative flex-1 bg-white rounded-2xl shadow-md border ${product.border} flex flex-col items-center text-center min-w-[260px] pt-8 p-12`}
              style={{ minHeight: 0 }}
            >
              {product.tag && (
                <span
                  className={`absolute top-2 right-4 text-xs font-semibold px-3 py-1 rounded-full ${product.tagColor} shadow`}
                  style={{ zIndex: 20 }}
                >
                  {product.tag}
                </span>
              )}
              <div
                className="flex flex-col justify-center items-center w-full mb-4"
                style={{ minHeight: HEADER_MIN_HEIGHT }}
              >
                <h3 className="text-lg font-extrabold mb-2 uppercase tracking-wide leading-tight">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm flex items-center justify-center">
                  {product.description}
                </p>
              </div>
              <div className="mb-4 flex flex-col items-center">
                <span className="text-3xl font-extrabold text-black leading-none">
                  {product.price}
                </span>
                <span className="text-gray-500 text-sm">einmalig</span>
              </div>
              <button
                className="w-full py-2 rounded-lg font-bold text-base bg-[#30D5C8] text-white hover:bg-[#0F1F36] shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1 duration-300 ease-out hover:animate-none transition mb-5"
                onClick={() => onRequest && onRequest(product.name)}
              >
                Jetzt anfragen
              </button>
              <ul className="text-left space-y-2 w-full">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-gray-700 text-sm font-medium"
                  >
                    {check}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="md:hidden relative w-full">
          {/* Cards container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, idx) => (
                <div
                  key={product.name}
                  className={`relative flex-shrink-0 w-full px-4`}
                >
                  <div
                    className={`bg-white rounded-2xl shadow-md border ${product.border} flex flex-col items-center text-center pt-8 p-6`}
                  >
                    {product.tag && (
                      <span
                        className={`absolute top-2 right-4 text-xs font-semibold px-3 py-1 rounded-full ${product.tagColor} shadow`}
                        style={{ zIndex: 20 }}
                      >
                        {product.tag}
                      </span>
                    )}
                    <div
                      className="flex flex-col justify-center items-center w-full mb-4"
                      style={{ minHeight: HEADER_MIN_HEIGHT }}
                    >
                      <h3 className="text-lg font-extrabold mb-2 uppercase tracking-wide leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 text-sm flex items-center justify-center">
                        {product.description}
                      </p>
                    </div>
                    <div className="mb-4 flex flex-col items-center">
                      <span className="text-3xl font-extrabold text-black leading-none">
                        {product.price}
                      </span>
                      <span className="text-gray-500 text-sm">einmalig</span>
                    </div>
                    <button
                      className="w-full py-2 rounded-lg font-bold text-base bg-[#30D5C8] text-white hover:bg-gray-800 shadow transition mb-5"
                      onClick={() => onRequest && onRequest(product.name)}
                    >
                      Jetzt anfragen
                    </button>
                    <ul className="text-left space-y-2 w-full">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-gray-700 text-sm font-medium"
                        >
                          {check}
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-[#30D5C8]"
              aria-label="Vorheriges Produkt"
              disabled={isTransitioning}
            >
              <ChevronLeftIcon />
            </button>
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-[#30D5C8] w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Gehe zu Produkt ${index + 1}`}
                />
              ))}
            </div>
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-[#30D5C8]"
              aria-label="Nächstes Produkt"
              disabled={isTransitioning}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
