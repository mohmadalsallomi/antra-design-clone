import Header from '@/components/sections/header';
import ServicesHero from '@/components/sections/services-hero';
import ServicesGrid from '@/components/sections/services-grid';
import CtaSection from '@/components/sections/cta';
import Footer from '@/components/sections/footer';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <ServicesHero />
        <ServicesGrid />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}