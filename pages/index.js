"use client";

import React, {
  useRef,
  useMemo,
  useCallback,
  useEffect,
  Suspense,
  useState,
} from "react";
import Head from "next/head";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Stars } from "@react-three/drei";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

// Import the Figtree font
import { Figtree } from "next/font/google";
import Carousel from "../components/carousel";
import { useCasesSlides } from "../components/slides-data";
import AppointmentBooking from "../components/AppointmentBooking";
import TestimonialCarousel from "../components/TestimonialCarousel";
import PricingPlans from "../components/PricingPlans";
import Footer from "../components/Footer"; // Import the new Footer component
// Ensure correct paths for your components

// Initialize Figtree font with a range of weights
const figtree = Figtree({
  subsets: ["latin"],
  // weights: ["300", "400", "500", "600", "700"], // Use weight property
  weight: ["300", "400", "500", "600", "700"], // Correct property name
  display: "swap",
});

// --- Minimalistic Global Communication Sphere ---
// ... (Your GlobeVisualization, Dot, ConnectionLine, GlobalSphereCanvas components remain unchanged)
const DOT_COUNT = 100;
const CONNECTION_COUNT = 90;
const SPHERE_RADIUS = 2.0;
const DOT_SIZE = 0.032;

function getRandomPointOnSphere(radius) {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

const Dot = ({ position }) => (
  <mesh position={position}>
    <sphereGeometry args={[DOT_SIZE, 16, 16]} />
    <meshBasicMaterial color="#30D5C8" />
  </mesh>
);

const ConnectionLine = ({ start, end, radius }) => {
  const geometry = useMemo(() => {
    const numSegments = 20;
    const midPointChord = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5);
    const controlPointOffset =
      midPointChord.length() < radius * 0.5 ? 1.05 : 1.15;
    const controlPoint = midPointChord
      .clone()
      .normalize()
      .multiplyScalar(radius * controlPointOffset);
    const curve = new THREE.CatmullRomCurve3(
      [start.clone(), controlPoint, end.clone()],
      false,
      "catmullrom",
      0.5
    );
    const pointsOnCurve = curve.getPoints(numSegments);
    const surfaceArcPoints = pointsOnCurve.map((point) =>
      point.normalize().multiplyScalar(radius)
    );
    return new THREE.BufferGeometry().setFromPoints(surfaceArcPoints);
  }, [start, end, radius]);
  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#A0B0C0" transparent opacity={0.45} />
    </line>
  );
};

const GlobeVisualization = () => {
  const groupRef = useRef();
  const dots = useMemo(
    () =>
      Array.from({ length: DOT_COUNT }, () =>
        getRandomPointOnSphere(SPHERE_RADIUS)
      ),
    []
  );
  const connections = useMemo(() => {
    const lines = [];
    if (dots.length < 2) return lines;
    const usedIndices = new Set();
    for (
      let i = 0;
      i < CONNECTION_COUNT && lines.length < CONNECTION_COUNT;
      i++
    ) {
      let index1 = Math.floor(Math.random() * dots.length);
      let index2 = Math.floor(Math.random() * dots.length);
      let attempts = 0;
      const MAX_ATTEMPTS_PER_LINE = dots.length * 2;
      while (
        (index1 === index2 ||
          usedIndices.has(
            `${Math.min(index1, index2)}-${Math.max(index1, index2)}`
          )) &&
        attempts < MAX_ATTEMPTS_PER_LINE
      ) {
        index1 = Math.floor(Math.random() * dots.length);
        index2 = Math.floor(Math.random() * dots.length);
        attempts++;
      }
      if (
        index1 !== index2 &&
        !usedIndices.has(
          `${Math.min(index1, index2)}-${Math.max(index1, index2)}`
        )
      ) {
        lines.push({ start: dots[index1], end: dots[index2] });
        usedIndices.add(
          `${Math.min(index1, index2)}-${Math.max(index1, index2)}`
        );
      }
    }
    return lines;
  }, [dots]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.0003;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[SPHERE_RADIUS, 64, 64]} />
        <meshStandardMaterial
          color="#0A192F"
          transparent
          opacity={0.1}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
      {dots.map((pos, i) => (
        <Dot key={`dot-${i}`} position={pos} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine
          key={`line-${i}`}
          start={conn.start}
          end={conn.end}
          radius={SPHERE_RADIUS}
        />
      ))}
    </group>
  );
};

const GlobalSphereCanvas = () => (
  <Canvas
    camera={{ position: [0, 0, 6.0], fov: 55 }}
    style={{ background: "transparent" }}
  >
    <ambientLight intensity={0.4} color="#A0B0C0" />
    <pointLight position={[7, 5, 7]} intensity={0.7} color="#ffffff" />
    <pointLight position={[-7, -3, -5]} intensity={0.4} color="#50E0D0" />
    <Suspense fallback={null}>
      <Stars
        radius={200}
        depth={80}
        count={3000}
        factor={2.5}
        saturation={0}
        fade
        speed={0.3}
      />
      <GlobeVisualization />
    </Suspense>
  </Canvas>
);
// --- END OF Global Sphere ---

export default function HomePage() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentInitialMessage, setAppointmentInitialMessage] =
    useState("");

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Testimonial data for carousel
  const testimonials = [
    {
      id: "1",
      text: '"Unser Rechnungsprozess war vorher chaotisch. Es kam ständig zu Fehlern, Mahnungen wurden vergessen und unser Team war mehr mit Nachfassen beschäftigt als mit dem eigentlichen Geschäft. AF Automations haben in kurzer Zeit ein Automatisierungssystem aufgesetzt, das unsere CRM-, E-Mail- und Buchhaltungstools miteinander verbindet. Seitdem laufen 100 % unserer Rechnungen termingerecht raus, wir haben 60 % weniger Zahlungsausfälle und die gesamte Kommunikation funktioniert ohne manuelles Eingreifen. Die Lösung hat sich bereits im ersten Monat komplett amortisiert."',
      company: "Childcare Administration Start-Up",
    },
    {
      id: "2",
      text: '"Bevor wir unser neues System einführten, war unser Support-Team völlig überlastet. Die Fallzusammenfassungen wurden manuell erstellt, VIP-Kunden mussten oft lange auf Rückmeldungen warten – und das hat uns nicht nur Zeit, sondern auch Vertrauen gekostet. Innerhalb von 3 Wochen wurde unser System aufgebaut, das Supportfälle automatisch zusammenfasst und unsere High-Touch-Kundenkommunikation vollständig automatisiert. Das Ergebnis: über 80 % Zeitersparnis bei der Fallbearbeitung und eine messbare Steigerung der Kundenzufriedenheit. Was vorher stundenlang dauerte, passiert jetzt in wenigen Minuten – zuverlässig und skalierbar."',
      company: "Luxury Online Marketplace",
    },
  ];

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_APPOINTMENTS_API_URL;
      if (!apiBaseUrl) {
        toast.error("API URL is not configured.");
        return;
      }

      const response = await fetch(`${apiBaseUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(
          "Vielen Dank! Ihr Blueprint wird in Kürze per E-Mail versendet."
        );
        handleModalClose();
      } else {
        toast.error(`Fehler: ${result.error || "Unbekannter Fehler"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenAppointmentModal = () => {
    setAppointmentInitialMessage("");
    setIsAppointmentModalOpen(true);
  };

  const handleRequestOffer = (offer) => {
    setAppointmentInitialMessage(`Hi, ich bin interessiert an ${offer}.`);
    setIsAppointmentModalOpen(true);
  };

  useEffect(() => {
    if (router.isReady && router.query.appointment === "true") {
      setIsAppointmentModalOpen(true);
    }
  }, [router.isReady, router.query]);

  useEffect(
    () => {
      // Future logic for i18n or other side effects can go here
    },
    [] // Add dependencies if needed
  );

  return (
    <div className={figtree.className}>
      <Head>
        <title>KI für Kanzleien: Zeit zurückgewinnen | AF Automations</title>
        <meta
          name="description"
          content="Automatisieren Sie Routineaufgaben, optimieren Sie juristische Arbeitsabläufe und fokussieren Sie sich auf hochwertige Mandatsarbeit mit den KI-Lösungen von AF Automations. Gewinnen Sie Ihre Zeit zurück."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navigation Bar */}
      <nav className="relative top-0 left-0 right-0 bg-black text-white shadow-lg backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-semibold sm:ml-[-38px] hover:text-gray-300 transition-colors"
          >
            AF Automations
          </a>
          <div className="flex items-center space-x-6">
            <a
              href="#carousel-section"
              className="hover:text-gray-300 transition-colors"
            >
              Fallstudien
            </a>
            <a
              href="#footer-contact"
              className="hover:text-gray-300 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </nav>
      <header className="relative bg-black text-white min-h-screen flex items-center p-6 sm:p-8 overflow-hidden">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: true,
              },
            },
            particles: {
              color: { value: "#555555" },
              links: { enable: false },
              collisions: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: true,
                speed: 0.1,
                straight: false,
              },
              number: { density: { enable: true, area: 1200 }, value: 20 },
              opacity: { value: 0.1 },
              shape: { type: "circle" },
              size: { value: { min: 0.5, max: 1.5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        {/* Mobile: Sphere behind text */}
        <div className="md:hidden absolute inset-0 z-5 flex items-center justify-center">
          <div className="w-full h-full max-w-md opacity-20">
            <GlobalSphereCanvas />
          </div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto">
          {/* Text Content */}
          <div className="md:w-6/12 lg:w-5/12 text-center md:text-left py-8 md:py-0 mb-12 md:mb-0">
            <p className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-medium">
              KI-GESTÜTZTE JURISTISCHE LÖSUNGEN
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 leading-tight">
              Gewinnen Sie Ihre abrechenbaren Stunden zurück
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 mx-auto md:mx-0 leading-relaxed font-normal">
              Die meisten Kanzleien wissen, dass ineffiziente Abläufe sie
              täglich Zeit kosten. Die wenigsten wissen, wie viele Stunden pro
              Monat das wirklich sind – oder wie einfach sich das beheben lässt.
              In diesem Blueprint erfahren Sie, wie Sie 5 Kernprozesse in Ihrer
              Kanzlei mit KI-gestützten Systemen automatisieren – und damit bis
              zu 30 Stunden pro Monat zurückgewinnen.
            </p>
            <button
              className="
                px-8 py-4 rounded-full
                bg-white hover:bg-gray-200
                text-black font-semibold text-base
                transition-colors duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                shadow-lg hover:shadow-xl
              "
              onClick={handleModalOpen}
            >
              Blueprint anfordern
            </button>
          </div>

          {/* Desktop: Sphere on the right */}
          <div className="hidden md:block md:w-6/12 lg:w-7/12 w-full h-[60vh] sm:h-[70vh] md:h-[85vh] max-h-[600px] md:max-h-[750px]">
            <GlobalSphereCanvas />
          </div>
        </div>
      </header>
      {/* --- HOW IT WORKS SECTION - MODIFIED --- */}
      <section id="how-it-works" className="py-16 sm:py-20 text-gray-800">
        {/* Container for the introductory text, centered and with horizontal padding */}
        <div className="container mx-auto px-4 sm:px-6 mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              So verwandeln Sie Ihre Kanzlei in eine Gewinnmaschine – mit
              weniger Aufwand als je zuvor
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Stellen Sie sich vor, Ihr profitabelster Mitarbeiter arbeitet
              24/7, macht keine Fehler bei Routineaufgaben und gibt Ihnen die
              Freiheit, sich auf das zu konzentrieren, was wirklich zählt:
              hochwertige Mandatsarbeit und strategisches Wachstum. Genau das
              leistet AF Automations für Ihre Kanzlei.
            </p>
          </div>
        </div>

        {/* Carousel component, now outside the container, can span full width */}
        {/* The Carousel's own outermost div has `w-full`, so it will expand to the width of the <section> */}
        <div id="carousel-section">
          <Carousel slides={useCasesSlides} autoplayInterval={7000} />
        </div>
      </section>
      {/* --- END OF HOW IT WORKS SECTION --- */}
      <PricingPlans onRequest={handleRequestOffer} />
      <section id="social-proof" className="pb-16 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 pt-10">
            Was unsere Kunden sagen:
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Erfahren Sie, wie die KI-Lösungen von AF Automations Kanzleien wie
            Ihre transformieren:
          </p>

          {/* Desktop: side-by-side layout */}
          <div className="hidden md:flex md:flex-row md:gap-6 md:justify-center">
            <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                {testimonials[0].text}
              </p>
              <p className="font-semibold text-gray-800">
                {testimonials[0].company}
              </p>
            </div>
            <div className="max-w-2xl bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                {testimonials[1].text}
              </p>
              <p className="font-semibold text-gray-800">
                {testimonials[1].company}
              </p>
            </div>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="md:hidden overflow-x-auto scroll-smooth">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleOpenAppointmentModal}
          className="
            group flex items-center
            bg-[#30D5C8]
            hover:bg-[#0F1F36]
            text-white font-semibold
            px-6 py-4 rounded-full
            shadow-2xl hover:shadow-3xl
            transform hover:scale-105 hover:-translate-y-1
            transition-all duration-300 ease-out
            animate-pulse hover:animate-none
            border-2 border-transparent hover:border-white/20
          "
        >
          <svg
            className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm sm:text-base font-medium">
            Termin buchen
          </span>
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </button>
      </div>
      {/* Modal for Blueprint Request */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-[#0A192F] text-white p-6 rounded-t-xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  Blueprint: So sparen Kanzleien mit KI täglich Stunden.
                </h2>
                <button
                  onClick={handleModalClose}
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                  aria-label="Modal schließen"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-200 mt-3 text-sm leading-relaxed">
                Erfahren Sie: <br />• Wie moderne Kanzleien 30+ Stunden pro
                Monat mit KI sparen <br />
                • Welche Aufgaben Sie sofort automatisieren können <br />
                • Wie Sie sich von der Konkurrenz abheben <br />
              </p>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Vollständiger Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#30D5C8] focus:border-transparent
                      transition-all duration-200
                      text-gray-900 placeholder-gray-500
                    "
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="
                      w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-[#30D5C8] focus:border-transparent
                      transition-all duration-200
                      text-gray-900 placeholder-gray-500
                    "
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Mit dem Absenden stimmen Sie zu, dass wir Ihnen den
                    Blueprint und weitere relevante Informationen zu KI-Lösungen
                    für Kanzleien per E-Mail zusenden dürfen. Sie können sich
                    jederzeit wieder abmelden.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email}
                    className="
                      flex-1 py-3 px-6 flex items-center justify-center
                      bg-[#30D5C8] hover:bg-[#2BC4B8] 
                      disabled:bg-gray-400 disabled:cursor-not-allowed
                      text-white font-semibold rounded-lg
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-[#30D5C8] focus:ring-offset-2
                      transform hover:scale-[1.02] disabled:hover:scale-100
                    "
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      "Blueprint kostenlos erhalten"
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="
                      px-6 py-3 
                      bg-gray-100 hover:bg-gray-200 
                      text-gray-700 font-medium rounded-lg
                      transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
                    "
                  >
                    Abbrechen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Appointment Booking Modal */}
      <AppointmentBooking
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialMessage={appointmentInitialMessage}
      />
      {/* Toast Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
            padding: "16px",
            borderRadius: "12px",
            fontSize: "14px",
            maxWidth: "500px",
          },
          success: {
            iconTheme: {
              primary: "#30D5C8",
              secondary: "#fff",
            },
            style: {
              background: "#0A192F",
              color: "#fff",
              border: "1px solid #30D5C8",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              background: "#0A192F",
              color: "#fff",
              border: "1px solid #ef4444",
            },
          },
        }}
      />
      <Footer />
    </div>
  );
}

// getStaticProps is not typically used with "use client" pages directly for data fetching
// If you need data fetching, consider Server Components or client-side fetching in useEffect
// For a static marketing page, this might not be needed or should be adapted
// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }
