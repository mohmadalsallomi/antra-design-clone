"use client";
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    number: "01",
    title: "Residential Interior Design",
    description: "Tailored design services for private homes, including room makeovers and complete home transformations.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-residential-interior-design-luxur-185ce43d-20250924112809.jpg",
    link: "https://demo2.themelexus.com/antra/service/residential-interior-design/"
  },
  {
    number: "02",
    title: "Outdoor & Landscape Design",
    description: "Extending design services to outdoor spaces such as gardens, patios, and decks.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-outdoor-and-landscape-design-gard-14d9defb-20250924112822.jpg",
    link: "https://demo2.themelexus.com/antra/service/outdoor-landscape-design/"
  },
  {
    number: "03",
    title: "Interior Design Consultation",
    description: "Providing professional advice on concepts, color schemes & material selection.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/interior-design-consultation-scene-moder-fcefefc8-20250924112831.jpg",
    link: "https://demo2.themelexus.com/antra/service/interior-design-consultation/"
  },
  {
    number: "04",
    title: "Commercial Interior Design",
    description: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/commercial-interior-design-modern-office-ba720eed-20250924112840.jpg",
    link: "https://demo2.themelexus.com/antra/service/commercial-interior-design/"
  },
  {
    number: "05",
    title: "Renovation and Remodeling",
    description: "Overhauling existing spaces to modernize and improve functionality and aesthetics.",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/home-renovation-and-remodeling-before-af-fec10b8a-20250924112853.jpg",
    link: "https://demo2.themelexus.com/antra/service/renovation-and-remodeling/"
  },
  {
    number: "06",
    title: "Interior 2D/3D Layouts",
    description: "Realistic 3D visualizations to help you envision your space before it's build in real life. There are a variety…",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/interior-2d-3d-layouts-visualization-mod-20176865-20250924112902.jpg",
    link: "https://demo2.themelexus.com/antra/service/interior-2d-3d-layouts/"
  }
];

const ServiceCard = ({ service, isHovered }: { service: typeof services[0]; isHovered?: boolean }) => (
  <a href={service.link} className={`relative aspect-[4/5] rounded-lg overflow-hidden group block transition-all duration-300 ${isHovered ? 'scale-105 ring-2 ring-primary/50 shadow-lg z-10' : 'hover:scale-105'}`}>
    <Image
      src={service.imageUrl}
      alt={service.title}
      fill
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-10 group-hover:max-h-48">
        <h3 className="text-xl font-medium">{service.title}</h3>
        <p className="pt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
          {service.description}
        </p>
      </div>
    </div>
  </a>
);

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  return (
    <section className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-primary font-semibold tracking-widest mb-4">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Explore our comprehensive<br />interior design services
            </h2>
            <p className="text-muted-foreground mb-12 max-w-lg">
              We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.
            </p>
            <ul className="space-y-6">
              {services.map((service) => (
                <li key={service.number} className="border-b border-border pb-6">
                  <a 
                    href={service.link} 
                    className="flex items-center gap-6 group"
                    onMouseEnter={() => setHoveredService(service.number)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <span className="text-2xl font-semibold text-gray-500 transition-colors duration-300 group-hover:text-primary">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.number} 
                  service={service} 
                  isHovered={hoveredService === service.number}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}