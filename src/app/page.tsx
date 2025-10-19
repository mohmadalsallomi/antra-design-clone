import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import StatsBanner from '@/components/sections/stats-banner';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import StatisticsSection from '@/components/sections/statistics';
import Section3 from '@/components/sections/section3';
import ProcessSection from '@/components/sections/process';
import ProjectsSection from '@/components/sections/projects';
import TestimonialsSection from '@/components/sections/testimonials';
import PanoramaSection from '@/components/sections/panorama';
import TeamSection from '@/components/sections/team';
import CtaSection from '@/components/sections/cta';
import GallerySection from '@/components/sections/gallery';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <StatsBanner />
        <Section3 />
        <TeamSection />

        <StatisticsSection />
        <ProcessSection />
        <ProjectsSection />
        <GallerySection />
      </main>
      
      <Footer />
    </div>
  );
}