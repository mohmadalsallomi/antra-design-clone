"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-1-768x540.jpg',
    alt: 'Modern Living Room',
    category: 'Residential'
  },
  {
    id: 2,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-2-768x540.jpg',
    alt: 'Elegant Dining Room',
    category: 'Residential'
  },
  {
    id: 3,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-3-768x540.jpg',
    alt: 'Contemporary Kitchen',
    category: 'Commercial'
  },
  {
    id: 4,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-4-768x540.jpg',
    alt: 'Modern Bedroom',
    category: 'Residential'
  },
  {
    id: 5,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-5-768x540.jpg',
    alt: 'Luxury Bathroom',
    category: 'Luxury'
  },
  {
    id: 6,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-6-768x540.jpg',
    alt: 'Office Space',
    category: 'Commercial'
  },
  {
    id: 7,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-7-768x540.jpg',
    alt: 'Minimalist Living',
    category: 'Modern'
  },
  {
    id: 8,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-8-768x540.jpg',
    alt: 'Cozy Interior',
    category: 'Residential'
  },
  {
    id: 9,
    src: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-9-768x540.jpg',
    alt: 'Art Deco Style',
    category: 'Vintage'
  }
];

const InteractiveGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !topRowRef.current || !bottomRowRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;
          
          // Check if section is in viewport
          const inView = rect.top < windowHeight && rect.bottom > 0;
          setIsVisible(inView);

          if (inView) {
            // Calculate scroll progress within the section (0 to 1)
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
            
            // Responsive movement based on screen width
            const baseMovement = windowWidth > 768 ? 400 : 200;
            
            // Top row moves right with smooth easing
            const topTranslateX = scrollProgress * baseMovement;
            topRowRef.current.style.transform = `translateX(${topTranslateX}px)`;
            
            // Bottom row moves left with smooth easing
            const bottomTranslateX = scrollProgress * -baseMovement;
            bottomRowRef.current.style.transform = `translateX(${bottomTranslateX}px)`;
            
            // Smooth opacity transition
            const opacity = Math.min(1, Math.max(0, scrollProgress * 1.5));
            topRowRef.current.style.opacity = opacity.toString();
            bottomRowRef.current.style.opacity = opacity.toString();
            
            // Add subtle rotation effect for more dynamic feel
            const rotation = (scrollProgress - 0.5) * 2; // -1 to 1
            topRowRef.current.style.transform += ` rotate(${rotation * 0.5}deg)`;
            bottomRowRef.current.style.transform += ` rotate(${-rotation * 0.5}deg)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background to-secondary overflow-hidden relative"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/15 rounded-full blur-md animate-pulse delay-2000"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-4 block">
            • INTERACTIVE GALLERY
          </span>
          <h2 className="text-[48px] lg:text-[56px] font-semibold leading-[1.1] text-foreground mb-6">
            معرض <span className="text-primary">التصاميم</span> التفاعلي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
            اكتشف مجموعة متنوعة من التصاميم الداخلية المذهلة التي تنبض بالحياة مع تأثيرات تفاعلية فريدة
          </p>
        </div>

        {/* Top Row - Moves Right on Scroll */}
        <div 
          ref={topRowRef}
          className="flex gap-6 mb-8 transition-all duration-500 ease-out"
          style={{ transform: 'translateX(0px)', opacity: 0 }}
        >
          {galleryImages.slice(0, 5).map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden group cursor-pointer relative hover:z-10 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'transform 0.6s ease-out'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={256}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {image.category.toUpperCase()}
                </span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{image.alt}</h3>
                  <span className="text-white/80 text-sm">{image.category}</span>
                </div>
              </div>
              
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300"></div>
              
              {/* Shadow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Row - Moves Left on Scroll */}
        <div 
          ref={bottomRowRef}
          className="flex gap-6 transition-all duration-500 ease-out"
          style={{ transform: 'translateX(0px)', opacity: 0 }}
        >
          {galleryImages.slice(4, 9).map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden group cursor-pointer relative hover:z-10 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'transform 0.6s ease-out'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={320}
                height={256}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {image.category.toUpperCase()}
                </span>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{image.alt}</h3>
                  <span className="text-white/80 text-sm">{image.category}</span>
                </div>
              </div>
              
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300"></div>
              
              {/* Shadow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
            عرض جميع المشاريع
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
