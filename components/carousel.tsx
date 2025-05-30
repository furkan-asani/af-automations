// app/components/Carousel.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface Slide {
  id: string;
  imageSrc: string;
  innovationLabel?: string;
  title: string;
  description: string;
  learnMoreLink?: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

// Dummy SVG icons
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
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
    strokeWidth={1.5}
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
const PauseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
    />
  </svg>
);
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L8.029 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
    />
  </svg>
);

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 7000,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      setIsTransitioning(false);
    }, 50);
  }, [totalSlides, isTransitioning]);

  const goToPrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
      );
      setIsTransitioning(false);
    }, 50);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (isPlaying && totalSlides > 1) {
      intervalId = setInterval(goToNextSlide, autoPlayInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying, goToNextSlide, autoPlayInterval, totalSlides]);

  if (!slides || totalSlides === 0) {
    return (
      <div className="w-full bg-gray-300 h-screen flex items-center justify-center text-gray-700">
        No slides to display.
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];
  const displaySlideNumber = currentSlideIndex + 1;

  if (!currentSlide) {
    return (
      <div className="w-full bg-gray-300 h-screen flex items-center justify-center text-gray-700">
        Slide data is missing for index {currentSlideIndex}.
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-transform duration-1000 ease-in-out
              ${
                index === currentSlideIndex
                  ? "translate-x-0"
                  : index < currentSlideIndex
                  ? "-translate-x-full"
                  : "translate-x-full"
              }
            `}
          >
            {slide.imageSrc ? (
              <Image
                src={slide.imageSrc}
                alt={slide.title || "Slide image"}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                Image source missing
              </div>
            )}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="max-w-2xl">
              {currentSlide.innovationLabel && (
                <div
                  className={`
                    transition-all duration-700 ease-out transform
                    ${
                      isTransitioning
                        ? "translate-x-8 opacity-0"
                        : "translate-x-0 opacity-100"
                    }
                  `}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "200ms" }}
                >
                  <p className="text-xs text-white uppercase tracking-wider mb-6 font-medium">
                    {currentSlide.innovationLabel}
                  </p>
                </div>
              )}

              {currentSlide.title && (
                <div
                  className={`
                    transition-all duration-700 ease-out transform
                    ${
                      isTransitioning
                        ? "translate-x-8 opacity-0"
                        : "translate-x-0 opacity-100"
                    }
                  `}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "300ms" }}
                >
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 leading-tight font-normal">
                    {currentSlide.title}
                  </h1>
                </div>
              )}

              {currentSlide.description && (
                <div
                  className={`
                    transition-all duration-700 ease-out transform
                    ${
                      isTransitioning
                        ? "translate-x-8 opacity-0"
                        : "translate-x-0 opacity-100"
                    }
                  `}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "400ms" }}
                >
                  <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                    {currentSlide.description}
                  </p>
                </div>
              )}

              {currentSlide.learnMoreLink && (
                <div
                  className={`
                    transition-all duration-700 ease-out transform
                    ${
                      isTransitioning
                        ? "translate-x-8 opacity-0"
                        : "translate-x-0 opacity-100"
                    }
                  `}
                  style={{ transitionDelay: isTransitioning ? "0ms" : "500ms" }}
                >
                  <a
                    href={currentSlide.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      px-8 py-2
                      border-2 border-[#FF6B00] text-[#FF6B00]
                      bg-transparent rounded-full
                      text-base font-medium
                      hover:bg-[#FF6B00] hover:text-white
                      transition-all duration-300
                      transform hover:scale-105
                    "
                  >
                    Learn more
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-8">
          <div className="flex items-center justify-between">
            {/* Slide Counter and Progress */}
            <div className="flex items-center space-x-6">
              <div className="text-base text-white font-medium">
                {String(displaySlideNumber).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </div>

              <div className="w-32 sm:w-48 md:w-64">
                <div className="h-[2px] bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-[2px] bg-white transition-all duration-1000 ease-out"
                    style={{
                      width: `${(displaySlideNumber / totalSlides) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={goToPrevSlide}
                className="text-white p-2 hover:text-white/70 transition-colors duration-200"
                aria-label="Previous slide"
                disabled={totalSlides <= 1 || isTransitioning}
              >
                <ChevronLeftIcon />
              </button>

              <button
                onClick={togglePlayPause}
                className="text-white p-2 hover:text-white/70 transition-colors duration-200"
                aria-label={isPlaying ? "Pause slides" : "Play slides"}
                disabled={totalSlides <= 1}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </button>

              <button
                onClick={goToNextSlide}
                className="text-white p-2 hover:text-white/70 transition-colors duration-200"
                aria-label="Next slide"
                disabled={totalSlides <= 1 || isTransitioning}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// Example usage in a page (e.g., app/page.tsx):
/*
import Carousel, { Slide } from './components/Carousel'; // Adjust path

const exampleSlides: Slide[] = [
  {
    id: "1",
    imageSrc: "/images/carousel/use-case-1.jpg",
    innovationLabel: "INNOVATION",
    title: "Just Tap & Go®",
    description: "With a fast and easy tap of your Mastercard, you can enjoy convenient checkout for everyday purchases.",
    learnMoreLink: "#"
  },
  {
    id: "2",
    imageSrc: "/images/carousel/use-case-2.jpg",
    innovationLabel: "EFFIZIENZ",
    title: "Nie wieder Zeit mit Routineaufgaben verschwenden!",
    description: "Delegieren Sie Dokumentenzusammenfassungen, juristische Vor-Recherchen und die Mandantenaufnahme an Ihre neue KI-Assistenz. Ergebnis: Ihr Team gewinnt Stunden zurück – für Arbeit, die Mandanten begeistert und Ihre Kasse klingeln lässt.",
    learnMoreLink: "#"
  },
  {
    id: "3",
    imageSrc: "/images/carousel/use-case-3.jpg",
    innovationLabel: "CONVENIENCE",
    title: "Everyday Payments",
    description: "Your Mastercard is accepted at millions of locations worldwide. Making payments simple.",
    learnMoreLink: "#"
  },
];

export default function HomePage() {
  return <Carousel slides={exampleSlides} autoPlayInterval={5000} />;
}
*/
