"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your vision, goals, and needs, followed Antra.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates detailed designs that reflect your requirements.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner05.jpg"
  },
  {
    number: "03",
    title: "Implementation",
    description: "With carefully selected contractors, we manage every phase.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner06.jpg"
  },
  {
    number: "04",
    title: "Project Handover",
    description: "Upon completion, we conduct a thorough review, making sure all details.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner07.jpg"
  }
];

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        if (elementTop < windowHeight * 0.8 && elementTop > -rect.height) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-[120px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/sect5.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container mx-auto px-5 max-w-[1400px] relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold uppercase tracking-widest mb-6 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa05c]"></span>
              How we work
            </span>
            <h2 className={`text-[48px] lg:text-[56px] font-bold leading-[1.1] text-gray-900 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              Description <span className="text-[#caa05c]">Architecture</span> <span className="text-[#caa05c]">Process For Exceptional</span> Results.
            </h2>
          </div>
          <div className={`lg:pt-12 transform transition-all duration-1000 delay-400 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <p className="text-gray-600 text-lg leading-[1.6]">
              Our process is alive - adapting, refining, and growing<br />
              with your vision. Always.<br />
              Like artists with a blank canvas, we transform rooms<br />
              into living works of art.
            </p>
          </div>
        </div>

        {/* Process Steps Layout */}
        <div className="relative mt-16">
          <div className="flex flex-wrap justify-center gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                className={`relative group flex-shrink-0 transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ 
                  marginTop: `${index * 40}px`,
                  width: '300px',
                  transitionDelay: `${index * 200 + 500}ms`
                }}
              >
                {/* Card Content */}
                <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Large background number */}
                  <span className="absolute bottom-0 right-0 text-[120px] lg:text-[140px] font-bold text-gray-300/20 select-none z-0 leading-none">
                    {step.number}
                  </span>
                  
                  {/* Image */}
                  <div className="overflow-hidden">
                    <Image 
                      src={step.imageUrl} 
                      alt={step.title} 
                      width={400} 
                      height={250} 
                      className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3 relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 leading-[1.2]">
                      <span className="text-[#caa05c]">{step.number}.</span> {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
  );
};

export default ProcessSection;