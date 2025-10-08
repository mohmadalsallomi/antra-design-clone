"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Users, Award } from 'lucide-react';

const services = [
  {
    id: 1,
    number: "01",
    title: "Residential Interior Design",
    description: "Tailored design services for private homes, including room makeovers and complete home transformations. We create spaces that reflect your personal style and lifestyle.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/elegant-residential-living-room-interior-0d6ace18-20250924202701.jpg?",
    stats: { time: "4-6 weeks", team: "3-5 experts", success: "98%" },
    link: "#"
  },
  {
    id: 2,
    number: "02",
    title: "Commercial Interior Design",
    description: "Designing functional and attractive interiors for businesses, including offices, retail spaces, and hospitality venues. Boost productivity and brand identity.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-commercial-office-interior-design-8775a40a-20250924202711.jpg?",
    stats: { time: "6-8 weeks", team: "5-8 experts", success: "95%" },
    link: "#"
  },
  {
    id: 3,
    number: "03",
    title: "Renovation and Remodeling",
    description: "Overhauling existing spaces to modernize and improve functionality and aesthetics. From minor updates to full renovations, we handle it all.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/home-renovation-before-and-after-visuali-e94be61b-20250924202721.jpg?",
    stats: { time: "8-12 weeks", team: "4-7 experts", success: "97%" },
    link: "#"
  },
  {
    id: 4,
    number: "04",
    title: "Outdoor & Landscape Design",
    description: "Extending design services to outdoor spaces such as gardens, patios, and decks. Create seamless indoor-outdoor living experiences.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/beautiful-outdoor-landscape-design-with--b6d0dd6a-20250924202731.jpg?",
    stats: { time: "3-5 weeks", team: "2-4 experts", success: "96%" },
    link: "#"
  },
  {
    id: 5,
    number: "05",
    title: "Interior Design Consultation",
    description: "Providing professional advice on concepts, color schemes, and material selection. Get expert guidance for your project without full commitment.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/interior-design-consultation-meeting-in--5138e0c2-20250924202739.jpg?",
    stats: { time: "1-2 weeks", team: "1-2 experts", success: "99%" },
    link: "#"
  },
  {
    id: 6,
    number: "06",
    title: "3D Visualization & Layouts",
    description: "Realistic 3D visualizations and 2D/3D layouts to help you envision your space before construction begins. Interactive walkthroughs available.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/3d-interior-visualization-rendering-of-l-f68bb159-20250924202751.jpg?",
    stats: { time: "2-4 weeks", team: "2-3 experts", success: "98%" },
    link: "#"
  }
];

export default function ServicesGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Design Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a full spectrum of architecture and interior design services, from initial consultation to final handover, ensuring every project exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-primary">{service.number}</span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{service.stats.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      <span>{service.stats.team}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={16} />
                      <span>{service.stats.success}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-2 duration-300"
                >
                  Learn More
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}