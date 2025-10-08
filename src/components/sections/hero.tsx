"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-interior-design-living-space-with-08254389-20250924195946.jpg')",
    tagline: "سريع وموثوق",
    title: "فن التصميم الداخلي\nالمبهر",
    description: "سواء كان منزلك أو مكتبك أو مشروع تجاري، نحن ملتزمون دائماً بتحقيق رؤيتك.",
    buttonText: "احصل على استشارة",
    stats: {
      number: "360+",
      text: "مشاريع ناجحة ومستمرة",
      features: ["المواصفات التقنية", "مشروع التصميم", "التصور ثلاثي الأبعاد"]
    }
  },
  {
    id: 2,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/elegant-residential-living-room-interior-0d6ace18-20250924202701.jpg')",
    tagline: "جودة عالية",
    title: "اعثر على تصميمك\nالداخلي المُلهم",
    description: "حول مساحتك مع فريق التصميم الخبير لدينا. نصنع تصاميم داخلية جميلة وعملية تعكس أسلوبك الفريد.",
    buttonText: "ابدأ الآن",
    stats: {
      number: "500+",
      text: "عميل سعيد حول العالم",
      features: ["تصميم مخصص", "مواد عالية الجودة", "فريق خبير"]
    }
  },
  {
    id: 3,
    backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-commercial-office-interior-design-8775a40a-20250924202711.jpg')",
    tagline: "تصميم مبتكر",
    title: "مساحات حديثة\nمُلهمة",
    description: "من المنازل السكنية إلى المساحات التجارية، نحن نقدم تصاميم مبتكرة تتجاوز التوقعات.",
    buttonText: "عرض المحفظة",
    stats: {
      number: "200+",
      text: "جوائز وتقدير",
      features: ["التصور ثلاثي الأبعاد", "إدارة المشاريع", "ضمان الجودة"]
    }
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

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
    const prevSlide = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
    goToSlide(prevSlide);
  };

  const goToNext = () => {
    const nextSlide = (currentSlide + 1) % heroSlides.length;
    goToSlide(nextSlide);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative flex items-center justify-center min-h-screen text-center text-foreground dark overflow-hidden" dir="rtl">
      {/* Background with transition */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: currentSlideData.backgroundImage
        }}>
        <div className="absolute inset-0 bg-black/60 !w-full !h-[795px]" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-5 py-20">
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
            {currentSlideData.tagline}
          </p>
          <span className="block w-2 h-2 rounded-full bg-primary" />
        </div>

        <h1 className={`text-[80px] font-bold leading-[1.1] text-white max-w-4xl transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
          {currentSlideData.title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < currentSlideData.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className={`mt-6 max-w-[580px] text-lg font-normal text-muted-foreground/80 transition-all duration-700 delay-100 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {currentSlideData.description}
        </p>

        <a
          href="https://demo2.themelexus.com/antra/services-01/"
          className={`mt-10 py-4 px-8 text-base font-medium transition-all duration-700 delay-200 ease-in-out rounded-full bg-primary text-primary-foreground hover:scale-105 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          {currentSlideData.buttonText}
        </a>
      </div>

      {/* Stats Section */}
      <div className={`absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-sm rounded-2xl p-8 max-w-sm transition-all duration-700 delay-300 ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
        <div className="text-white">
          <div className="text-4xl font-bold mb-2">{currentSlideData.stats.number}</div>
          <div className="text-sm mb-6 text-gray-300">{currentSlideData.stats.text}</div>
          <ul className="space-y-2">
            {currentSlideData.stats.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Down Button */}
      <a href="#next-section" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" aria-label="Scroll down">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-[bounce_2s_infinite] cursor-pointer">
          <ArrowDown className="w-6 h-6 text-background" strokeWidth={2} />
        </div>
      </a>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}