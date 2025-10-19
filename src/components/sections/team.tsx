"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "01",
    name: "Residential Interior Design",
    role: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    id: "02",
    name: "Outdoor & Landscape Design",
    role: "Transforming outdoor spaces into stunning environments that complement your home's architecture and lifestyle.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner05.jpg",
  },
  {
    id: "03",
    name: "Interior Design Consultation",
    role: "Professional guidance and expert advice to help you make informed decisions about your interior design projects.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner06.jpg",
  },
  {
    id: "04",
    name: "Commercial Interior Design",
    role: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner07.jpg",
  },
  {
    id: "05",
    name: "Renovation And Remodeling",
    role: "Complete renovation services that transform existing spaces while preserving the character and maximizing functionality.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner08.jpg",
  },
  {
    id: "06",
    name: "Interior 2D/3D Layouts",
    role: "Professional 2D and 3D visualization services to help you see your design ideas before implementation.",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 max-w-[1400px] relative">
        {/* Header Section - Above everything */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Left Side - Tag */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#caa05c]/10 text-gray-700 text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#caa05c]"></span>
                our services
              </span>
            </div>
            
            {/* Right Side - Title and Description */}
            <div className="flex-1">
              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Explore Our <span className="text-[#caa05c]">Comprehensive Interior Design</span> Services
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 text-lg mb-0 leading-relaxed max-w-2xl">
                We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Main Layout - Professional Two Column */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
            {/* Left Column - Image */}
            <div className="relative h-[350px] md:h-[400px] overflow-hidden rounded-2xl order-2 lg:order-1">
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={member.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isActive ? 'opacity-100 z-20' : 'opacity-0 z-10'
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  {/* Professional Overlay */}
                  <div className="absolute bottom-6 left-6 bg-gray-900/85 rounded-xl p-5 text-white max-w-sm">
                    <p className="text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right Column - Services */}
          <div className="order-1 lg:order-2 pt-4">
            <div className="space-y-0">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`flex items-center justify-between py-5 border-b border-gray-200 cursor-pointer transition-all duration-200 ${
                    activeIndex === index ? 'border-[#caa05c]/50 bg-[#caa05c]/3' : 'hover:bg-gray-50/50'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className={`text-sm font-medium ${
                      activeIndex === index ? "text-[#caa05c]" : "text-gray-400"
                    }`}>
                      {member.id}
                    </span>
                    <h3 className={`text-base font-bold transition-colors duration-200 ${
                      activeIndex === index ? "text-[#caa05c]" : "text-gray-900"
                    }`}>
                      {member.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {activeIndex === index ? (
                      <>
                        <div className="w-6 h-6 bg-[#caa05c] rounded-full flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                        <div className="w-1 h-1 bg-[#caa05c] rounded-full"></div>
                      </>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;