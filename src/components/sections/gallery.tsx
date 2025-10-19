// IMPORTANT: This component uses custom CSS animations ('scroll', 'scroll-reverse')
// for the infinite horizontal scrolling effect. These animations are not standard
// in Tailwind CSS and must be defined in your `tailwind.config.ts` file.
//
// Please add the following configuration to your `tailwind.config.ts`:
//
// theme: {
//   extend: {
//     animation: {
//       scroll: 'scroll 60s linear infinite',
//       'scroll-reverse': 'scroll-reverse 60s linear infinite',
//     },
//     keyframes: {
//       scroll: {
//         '0%': { transform: 'translateX(0)' },
//         '100%': { transform: 'translateX(-50%)' },
//       },
//       'scroll-reverse': {
//         '0%': { transform: 'translateX(-50%)' },
//         '100%': { transform: 'translateX(0)' },
//       },
//     },
//   },
// },

"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const row1Images: GalleryImage[] = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg", alt: "gallery-11", width: 480, height: 320 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-3.jpg", alt: "gallery-3", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6.jpg", alt: "gallery-6", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1.jpg", alt: "gallery-1", width: 480, height: 320 },
];

const row2Images: GalleryImage[] = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-12.jpg", alt: "gallery-12", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-4.jpg", alt: "gallery-4", width: 480, height: 320 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg", alt: "gallery-9", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-7.jpg", alt: "gallery-7", width: 480, height: 320 },
];

const ImageScroller = ({ images, reverse = false, sectionRef }: { images: GalleryImage[]; reverse?: boolean; sectionRef: React.RefObject<HTMLElement | null> }) => {
  const duplicatedImages = [...images, ...images];
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current || !rowRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          const inView = rect.top < windowHeight && rect.bottom > 0;

          if (inView) {
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

            const baseMovement = window.innerWidth > 768 ? 300 : 150;
            
            if (reverse) {
              // الصف السفلي يتحرك يمين
              const translateX = scrollProgress * baseMovement;
              rowRef.current.style.transform = `translateX(${translateX}px)`;
            } else {
              // الصف العلوي يتحرك يسار
              const translateX = scrollProgress * -baseMovement;
              rowRef.current.style.transform = `translateX(${translateX}px)`;
            }

            const opacity = Math.min(1, Math.max(0.3, scrollProgress * 1.5));
            rowRef.current.style.opacity = opacity.toString();
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reverse, sectionRef]);

  return (
    <div
      ref={rowRef}
      className="flex items-center gap-5 py-2.5 transition-opacity duration-300"
      style={{ willChange: 'transform' }}
    >
      {duplicatedImages.map((image, index) => (
        <a
          key={`${image.alt}-${index}`}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`rounded-lg object-cover h-auto transition-transform duration-300 hover:scale-105 ${image.height > image.width ? 'w-[260px]' : 'w-[390px]'}`}
          />
        </a>
      ))}
    </div>
  );
};

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/SEC6.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>
      
      <div className="relative z-10">
        {/* Header Text */}
        <div className="text-center py-16 px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#caa05c]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our portfolio of completed projects and get inspired for your next design
          </p>
        </div>
        
        <ImageScroller images={row1Images} sectionRef={sectionRef} reverse={false} />
        <ImageScroller images={row2Images} sectionRef={sectionRef} reverse={true} />
      </div>
    </section>
  );
}