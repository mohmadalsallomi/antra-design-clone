"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { DraftingCompass, LayoutTemplate, MessageSquareText, ClipboardCheck, Check, ArrowUpRight, ArrowUp } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description: "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
    icon: DraftingCompass,
  },
  {
    id: 2,
    title: "Interior Design & Planning",
    description: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
    icon: LayoutTemplate,
  },
  {
    id: 3,
    title: "Consulting Services",
    description: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
    icon: MessageSquareText,
  },
  {
    id: 4,
    title: "Project Management",
    description: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free - so you can sit back and watch the magic happen.",
    icon: ClipboardCheck,
  }
];

const Section3 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [firstSectionVisible, setFirstSectionVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Handle image zoom effect
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate scroll progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        setScrollProgress(progress);
      }

      // Handle first section animation
      if (firstSectionRef.current) {
        const rect = firstSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        if (elementTop < windowHeight * 0.8 && elementTop > -rect.height) {
          setFirstSectionVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* FIRST SECTION - Light Background with Cards */}
      <section ref={firstSectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/backgsec3.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-5 max-w-[1400px] relative z-10">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div className={`transform transition-all duration-1000 ease-out ${firstSectionVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 border border-[#caa05c]/30 text-gray-900 text-xs font-semibold uppercase tracking-widest mb-6 transform transition-all duration-800 delay-200 ${firstSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <span className="w-2 h-2 rounded-full bg-[#caa05c]"></span>
                Who we are
              </span>
              <h2 className={`text-[48px] lg:text-[56px] font-bold leading-[1.1] text-gray-900 mb-8 transform transition-all duration-1000 delay-300 ${firstSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                Experience <span className="text-[#caa05c]">The Art Of Interior</span> Design
              </h2>
            </div>
            <div className={`lg:pt-12 relative transform transition-all duration-1000 delay-400 ease-out ${firstSectionVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <span className="absolute -left-6 top-2 w-2 h-2 rounded-full bg-[#caa05c]"></span>
              <p className="text-lg text-gray-700 leading-[1.6]">
                We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
              </p>
            </div>
          </div>

          {/* Services Grid - Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer transform ${firstSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${index * 150 + 500}ms` }}
              >
                <div className="flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#caa05c] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <service.icon className="w-10 h-10 text-[#caa05c] flex-shrink-0 group-hover:text-[#caa05c] transition-colors duration-300 ml-4" />
                  </div>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-400 transition-all duration-300 z-20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* SECOND SECTION - Professional Design */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgroundsection3.svg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            <div className="flex flex-col lg:flex-row min-h-[450px]">
        
              {/* Left Content Section */}
              <div className="lg:w-1/2 bg-gradient-to-br from-slate-900 via-gray-900 to-black p-6 lg:p-10 flex flex-col justify-center relative">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute bottom-0 left-0 text-[120px] font-black text-white select-none leading-none">
                    AN
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Tag */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#caa05c]/30 bg-[#caa05c]/10 text-[#caa05c] text-xs font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 bg-[#caa05c] rounded-full"></div>
                      STARTED IN 1991
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                    Where Spaces<br />
                    Inspire, And<br />
                    <span className="text-[#caa05c]">Design Comes Alive</span>
                  </h2>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      "Latest Technologies",
                      "5 Years Warranty",
                      "High-Quality Designs", 
                      "Residential Design"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#caa05c] rounded-full flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-white text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                    Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words.
                  </p>

                  {/* Button */}
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-transparent border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm text-sm"
                  >
                    More About Us
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-[300px] lg:h-full">
                  <Image
                    src="/images/section4.png"
                    alt="Modern interior design"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360-DEGREE PANORAMAS SECTION */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Title Section */}
          <div className="text-center mb-12">
            <span className="inline-block text-[#caa05c] text-sm font-bold uppercase tracking-widest mb-4">
              360-DEGREE PANORAMAS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Create an even greater<br />
              experience
            </h2>
          </div>

          {/* Main Image Container */}
          <div 
            ref={imageRef}
            className="relative bg-gray-800 rounded-2xl overflow-hidden mx-auto max-w-5xl h-[500px] lg:h-[600px]"
          >
            <div 
              className="relative w-full h-full overflow-hidden"
              style={{
                transform: `scale(${1 + scrollProgress * 0.3})`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #caa05c 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #caa05c 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <Image
                src="/images/section4.png"
                alt="360-degree panorama view"
                fill
                className="object-cover"
                priority
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">
                {/* Left Info Box */}
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                  <span className="text-white text-sm">
                    Our Website <span className="font-bold">75000+</span> VIP Customer
                  </span>
                </div>
                
                {/* Right Info Box */}
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white rounded-sm flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <span className="text-white text-sm">ControlMouseModeNormal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
