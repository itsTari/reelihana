"use client";
import { slides } from "@/constants";
import { ChevronLeft, ChevronRight, Pause, PlayIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const PortfolioHeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };
  const goToSlide = (index: any) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="relative w-full h-screen md:h-[600px] overflow-hidden bg-black">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-115"
              }`}
            >
              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover "
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  {/* <div className="max-w-2xl">
                    <div
                      className={`transform transition-all duration-700 delay-200 ${
                        index === currentSlide
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                    >
                      <p className="text-[#C6A98D] text-sm md:text-base font-medium tracking-wider uppercase mb-2">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        {slide.description}
                      </p>
                      <button className="relative px-8 py-4 bg-gradient-to-r from-[#EAD8C0] via-[#C6A98D] to-[#8B6A5C] text-black font-semibold rounded-full">
                        <span className="relative z-10">{slide.cta}</span>
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110  disabled:cursor-not-allowed z-10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed z-10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-4 h-[1px]  transition-all duration-300 hover:scale-125 disabled:cursor-not-allowed ${
                index === currentSlide
                  ? "bg-black scale-125"
                  : "bg-[#b48d68] hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Control */}
        <div className="absolute bottom-6 right-6 z-10">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? (
              <PlayIcon className="w-5 h-5 text-white ml-0.5" />
            ) : (
              <Pause className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
          <div
            className={`h-full bg-gradient-to-r from-[#C6A98D] to-[#8B6A5C] transition-all duration-300 ${
              isPlaying ? "animate-pulse" : ""
            }`}
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioHeroSlider;
