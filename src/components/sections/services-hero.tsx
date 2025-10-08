"use client";

import { ArrowUp } from 'lucide-react';

const services = [
  {
    title: "Architectural Design",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!"
  },
  {
    title: "Interior Design & Planning",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 3V9" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 3V9" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 15V21" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 15V21" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    description: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be."
  },
  {
    title: "Consulting Services",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions."
  },
  {
    title: "Project Management",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free - so you can sit back and watch the magic happen."
  }
];

export default function ServicesHeroSection() {
  return (
    <section className="relative min-h-screen bg-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <svg className="w-96 h-96 text-gray-300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L180 20L180 180L20 180Z" stroke="currentColor" strokeWidth="1"/>
            <path d="M40 40L160 40L160 160L40 160Z" stroke="currentColor" strokeWidth="1"/>
            <path d="M60 60L140 60L140 140L60 140Z" stroke="currentColor" strokeWidth="1"/>
            <path d="M80 80L120 80L120 120L80 120Z" stroke="currentColor" strokeWidth="1"/>
            <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tagline */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              WHO WE ARE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8">
            <span className="text-gray-900">Experience</span>{' '}
            <span className="text-yellow-500">The Art Of Interior</span>{' '}
            <span className="text-gray-900">Design</span>
        </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-yellow-500/30"
            >
              {/* Icon */}
              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-300 z-50 shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </section>
  );
}