import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen text-center text-foreground dark">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-interior-design-living-space-with-08254389-20250924195946.jpg')"
        }}>

        <div className="absolute inset-0 bg-black/60 !w-full !h-[795px]" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-5 py-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-2 h-2 rounded-full bg-primary" />
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary">
            FAST AND RELIABLE
          </p>
        </div>

        <h1 className="text-[80px] font-bold leading-[1.1] text-white max-w-4xl">
          The Art of Stunning
          <br />
          Interior Design
        </h1>

        <p className="mt-6 max-w-[580px] text-lg font-normal text-muted-foreground/80">
          Whether it's your home, office, or a commercial project, we are always dedicated to bringing your vision to life.
        </p>

        <a
          href="https://demo2.themelexus.com/antra/services-01/"
          className="mt-10 py-4 px-8 text-base font-medium transition-transform duration-300 ease-in-out rounded-full bg-primary text-primary-foreground hover:scale-105">

          Take counsel
        </a>
      </div>

      <a href="#next-section" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" aria-label="Scroll down">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-[bounce_2s_infinite] cursor-pointer">
          <ArrowDown className="w-6 h-6 text-background" strokeWidth={2} />
        </div>
      </a>
    </section>);

}