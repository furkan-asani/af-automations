"use client";

import React, { useState, useEffect, useCallback } from "react";

export interface Testimonial {
  id: string;
  text: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

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

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalTestimonials = testimonials.length;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
      setIsTransitioning(false);
    }, 50);
  }, [totalTestimonials, isTransitioning]);

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials
      );
      setIsTransitioning(false);
    }, 50);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 50);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (totalTestimonials > 1) {
      intervalId = setInterval(goToNext, autoPlayInterval);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [goToNext, autoPlayInterval, totalTestimonials]);

  if (!testimonials || totalTestimonials === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* Testimonial Cards Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4 text-left leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-gray-800 text-left">
                  {testimonial.company}
                </p>
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
          aria-label="Vorheriges Testimonial"
          disabled={isTransitioning}
        >
          <ChevronLeftIcon />
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#30D5C8] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Gehe zu Testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 hover:text-[#30D5C8]"
          aria-label="Nächstes Testimonial"
          disabled={isTransitioning}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
