"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroStats = [
  {
    number: "30",
    title: "Years experience",
    description: "Improving homes with expert craftsmanship for years"
  },
  {
    number: "250+",
    title: "Projects completed", 
    description: "Over 250 successful projects delivered with quality and care"
  },
  {
    number: "30+",
    title: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results"
  },
  {
    number: "100%",
    title: "Client satisfaction",
    description: "All of our clients are satisfied with our work and service"
  }
];

const heroSlides = [
  {
    id: 1,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-interior-design-living-space-with-08254389-20250924195946.jpg')",
    tagline: "Luxury Interior Design",
    title: "Where Design\nMeets Excellence",
    description: "We transform spaces into extraordinary environments that blend sophistication, functionality, and timeless elegance. Experience the pinnacle of interior design excellence.",
    buttonText: "Start Your Project",
    secondaryText: "Explore Portfolio"
  },
  {
    id: 2,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/elegant-residential-living-room-interior-0d6ace18-20250924202701.jpg')",
    tagline: "Bespoke Solutions",
    title: "Crafted for\nYour Vision",
    description: "Every project is a masterpiece tailored to your unique lifestyle. From concept to completion, we deliver exceptional spaces that exceed expectations and express your personality.",
    buttonText: "Discuss Your Vision",
    secondaryText: "View Our Work"
  },
  {
    id: 3,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-commercial-office-interior-design-8775a40a-20250924202711.jpg')",
    tagline: "Industry Leader",
    title: "Excellence in\nEvery Detail",
    description: "Setting new standards in interior design, we create spaces that inspire, perform, and endure. From residential masterpieces to commercial excellence.",
    buttonText: "Partner With Us",
    secondaryText: "See Results"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);


  const goToSlide = (slideIndex: number) => {
    if (slideIndex === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(slideIndex);
    }, 200);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  const goToPrevious = () => {
    const prevSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % heroSlides.length;
    goToSlide(nextSlide);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative flex items-center justify-center w-full min-h-screen text-center text-foreground dark">
      {/* Background with enhanced transition */}
      <div className="absolute inset-0 w-full h-full min-h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full min-h-screen transition-all duration-1200 ease-out"
            style={{
              backgroundImage: slide.backgroundImage,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              opacity: index === currentSlide ? 1 : 0,
              minHeight: '100vh'
            }}
          />
        ))}
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 w-full h-full min-h-screen bg-gradient-to-br from-black/70 via-black/50 to-black/60" style={{ minHeight: '100vh' }} />
        <div className="absolute inset-0 w-full h-full min-h-screen bg-gradient-to-t from-black/30 via-transparent to-black/20" style={{ minHeight: '100vh' }} />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>


      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-5 py-20 max-w-4xl">
        <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#caa05c] bg-black/20 px-3 py-1 rounded-full">
            {currentSlideData.tagline}
          </p>
        </div>

        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white max-w-3xl text-center transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          {currentSlideData.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < currentSlideData.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className={`mt-6 max-w-xl text-lg font-normal text-gray-200/80 leading-relaxed text-center transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {currentSlideData.description}
        </p>

        <div className={`flex flex-col sm:flex-row gap-3 mt-8 transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <a
            href="https://demo2.themelexus.com/antra/services-01/"
            className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-[#caa05c] to-[#b89551] text-white rounded-full hover:scale-105 transition-all duration-300"
          >
            {currentSlideData.buttonText}
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 text-base font-semibold text-white border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            {currentSlideData.secondaryText}
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`absolute right-8 bottom-40 z-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-xs transition-all duration-700 delay-400 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
        <div className="text-white">
          <div className="text-3xl font-bold mb-2 text-[#caa05c]">{heroStats[currentSlide]?.number || "500+"}</div>
          <div className="text-xs mb-4 text-gray-200 font-medium">{heroStats[currentSlide]?.title || "Premium Projects"}</div>
          <p className="text-xs text-gray-300 leading-relaxed">
            {heroStats[currentSlide]?.description || "Delivering excellence in every project we undertake"}
          </p>
        </div>
      </div>


      {/* Enhanced Navigation Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-2' 
                : 'w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-full bg-gradient-to-r from-[#caa05c] to-[#b89551]' 
                : 'w-full bg-white/50 hover:bg-white/80'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}