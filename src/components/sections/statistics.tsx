"use client";

import { useState, useEffect, useRef } from "react";

// Data for the statistics section, based on design instructions and content
const statsData = [
  {
    value: 30,
    suffix: "",
    title: "Years experience",
    description: "Improving homes with expert craftsmanship for years",
  },
  {
    value: 250,
    suffix: "+",
    title: "Projects completed",
    description: "Over 250 successful projects delivered with quality and care",
  },
  {
    value: 30,
    suffix: "+",
    title: "Skilled Tradespeople",
    description: "Our team of 30 experts ensures top-quality results",
  },
  {
    value: 100,
    suffix: "%",
    title: "Client satisfaction",
    description: "All of our clients are satisfied with our work and service",
  },
];

type StatItemProps = {
  item: (typeof statsData)[0];
};

// A single animated statistic item.
// It uses IntersectionObserver to start counting only when visible.
const StatItem = ({ item }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // Observer to trigger animation when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation effect for the counter
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = item.value;
      if (start === end) return;

      const duration = 2000; // Animation duration in ms
      const incrementTime = Math.max(1, Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        if (start >= end) {
          setCount(end); // Ensure it ends exactly on the target value
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, item.value]);

  return (
    <div ref={ref} className="text-center group">
      {/* Professional Card Container */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Large Number */}
        <div className="mb-6">
          <h2 className="font-bold text-6xl md:text-7xl text-[#caa05c] leading-none mb-2">
            {count}
            <span className="text-4xl md:text-5xl text-white">{item.suffix}</span>
          </h2>
        </div>
        
        {/* Title */}
        <h3 className="text-white text-xl font-bold mb-4 group-hover:text-[#caa05c] transition-colors duration-300">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed max-w-[280px] mx-auto">
          {item.description}
        </p>
        
        {/* Decorative Element */}
        <div className="mt-6 flex justify-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#caa05c] to-transparent group-hover:w-24 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

// The main statistics section component, exported as default
export default function StatisticsSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(202,160,92,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(202,160,92,0.1)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#caa05c]/10 text-[#caa05c] text-sm font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#caa05c]"></span>
            Our Achievements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Thousands of <span className="text-[#caa05c]">Happy Clients</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our proven track record speaks for itself with years of excellence in delivering outstanding results.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((item, index) => (
            <StatItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}