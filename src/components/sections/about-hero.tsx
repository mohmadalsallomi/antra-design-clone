"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, ArrowUp } from 'lucide-react';

const aboutSlides = [
  {
    id: 1,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-interior-design-living-space-with-08254389-20250924195946.jpg')",
    tagline: "WHO WE ARE",
    title: "Experience The Art Of Interior Design",
    description: "We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.",
    services: [
      {
        title: "Architectural Design",
        icon: "🏗️",
        description: "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!"
      },
      {
        title: "Interior Design & Planning",
        icon: "🎨",
        description: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be."
      },
      {
        title: "Consulting Services",
        icon: "📋",
        description: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions."
      },
      {
        title: "Project Management",
        icon: "✅",
        description: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free - so you can sit back and watch the magic happen."
      }
    ]
  },
  {
    id: 2,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/elegant-residential-living-room-interior-0d6ace18-20250924202701.jpg')",
    tagline: "PREMIUM QUALITY",
    title: "Find Your Inspired Interior Design",
    description: "Transform your space with our expert design team. We create beautiful, functional interiors that reflect your unique style.",
    services: [
      {
        title: "Custom Design",
        icon: "🏠",
        description: "Tailored solutions for your unique space and lifestyle needs."
      },
      {
        title: "Premium Materials",
        icon: "💎",
        description: "High-quality materials that stand the test of time."
      },
      {
        title: "Expert Team",
        icon: "👥",
        description: "Professional designers with years of experience."
      },
      {
        title: "3D Visualization",
        icon: "🎯",
        description: "See your project before it's built with our 3D renderings."
      }
    ]
  }
];

export default function AboutHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex: number) => {
    if (slideIndex === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    const prevSlide = currentSlide === 0 ? aboutSlides.length - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % aboutSlides.length;
    goToSlide(nextSlide);
  };

  const currentSlideData = aboutSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Left Panel - Dark Background with Content */}
      <div className="relative w-full lg:w-3/5 bg-gray-900 flex items-center justify-center p-8 lg:p-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 text-9xl font-bold text-white/10 select-none">
            an
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          {/* Tagline */}
          <div className={`mb-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-yellow-500/30 text-white text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              {currentSlideData.tagline}
            </span>
          </div>

          {/* Main Title */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            {currentSlideData.title.split(' ').map((word, index) => (
              <span key={index} className={word === 'The' || word === 'Art' || word === 'Of' || word === 'Interior' ? 'text-yellow-500' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p className={`text-white/80 text-lg mb-12 leading-relaxed transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {currentSlideData.description}
          </p>

          {/* Service Cards Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            {currentSlideData.services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-white text-lg font-semibold group-hover:text-yellow-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
          {aboutSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Panel - Image */}
      <div className="relative w-full lg:w-2/5">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: currentSlideData.backgroundImage
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-sm">
            <div className="text-white">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 text-xs font-medium rounded-full">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  STARTED IN 1991
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">
                Where Spaces
                <br />
                Inspire, And{' '}
                <span className="text-yellow-500">Design</span>
                <br />
                <span className="text-yellow-500">Comes Alive</span>
              </h2>

              <ul className="space-y-3 mb-6">
                {['Latest Technologies', '5 Years Warranty', 'High-Quality Designs', 'Residential Design'].map((feature, index) => (
                  <li key={index} className="flex items-center text-white text-sm">
                    <Check className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 text-sm mb-6">
                Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words:
              </p>

              <button className="w-full bg-gray-800 border border-yellow-500/30 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>More About Us</span>
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ChevronRight className="w-3 h-3 text-gray-900" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-8 right-8 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-all duration-300 z-10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
