"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, DraftingCompass, LayoutTemplate, MessageSquareText, ClipboardCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description: "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
    icon: DraftingCompass,
    link: "#"
  },
  {
    id: 2,
    title: "Interior Design & Planning",
    description: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
    icon: LayoutTemplate,
    link: "#"
  },
  {
    id: 3,
    title: "Consulting Services",
    description: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
    icon: MessageSquareText,
    link: "#"
  },
  {
    id: 4,
    title: "Project Management",
    description: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free - so you can sit back and watch the magic happen.",
    icon: ClipboardCheck,
    link: "#"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/backgroundsection3.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container mx-auto px-5 max-w-[1400px] relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
              Who we are
            </span>
            <h2 className="text-[48px] lg:text-[56px] font-semibold leading-[1.1] text-gray-900">
              Experience <span className="text-yellow-600">The Art Of Interior</span> Design
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg text-gray-700 leading-[1.6] relative">
              <span className="absolute -left-6 top-2 w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
              We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
          </div>
        </div>

        {/* Services Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <service.icon className="w-10 h-10 text-yellow-600/70 flex-shrink-0 group-hover:text-yellow-600 transition-colors duration-300" />
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}