import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ServicesHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/luxurious-modern-architecture-firm-offic-a6d194a2-20250924202751.jpg?')`
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Our Architecture & <br /> Interior Design Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-muted">
          Discover our comprehensive range of services tailored to bring your vision to life with precision and creativity.
        </p>
        <Link
          href="#services"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
        >
          Explore Services
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}