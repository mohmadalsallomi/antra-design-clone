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
    <div ref={ref} className="text-center">
      <h2 className="font-bold text-7xl text-primary leading-none">
        {count}
        {item.suffix}
      </h2>
      <h3 className="mt-4 text-foreground text-lg font-medium">
        {item.title}
      </h3>
      <p className="mt-2 text-muted-foreground max-w-[250px] mx-auto text-base font-normal leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

// The main statistics section component, exported as default
export default function StatisticsSection() {
  return (
    <section className="bg-secondary py-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {statsData.map((item, index) => (
            <StatItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}