import Image from "next/image";
import Link from "next/link";
import {
  DraftingCompass,
  LayoutTemplate,
  MessageSquareText,
  ClipboardCheck,
  Check,
  ArrowUpRight } from
"lucide-react";

const serviceCards = [
  {
    icon: DraftingCompass,
    title: "Architectural Design",
    description:
      "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!"
  },
  {
    icon: LayoutTemplate,
    title: "Interior Design & Planning",
    description:
      "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be."
  },
  {
    icon: MessageSquareText,
    title: "Consulting Services",
    description:
      "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions."
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen."
  }
];

const AboutSection = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/50 text-primary text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Who we are
            </p>
            <h2 className="mt-4 text-5xl font-semibold text-foreground leading-tight">
              Experience <span className="text-primary">The Art Of Interior</span> Design
            </h2>
            <p className="mt-6 text-muted-foreground/90 text-base leading-relaxed">
              We specialize in transforming visions into reality. Explore our
              portfolio of innovative architectural and interior design projects
              crafted with precision.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-secondary p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:shadow-lg transition-all duration-300 text-foreground"
                >
                  <div className="flex items-start justify-between">
                    <h5 className="text-xl font-medium text-foreground">{card.title}</h5>
                    <card.icon className="w-10 h-10 text-primary/70 flex-shrink-0" />
                  </div>
                  <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Now full width below */}
          <div className="!w-full !h-full">
            <div className="relative mt-12 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] min-h-[600px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/e60e25fd-3e7b-4f93-bc75-1e00889bf8f8/generated_images/modern-luxurious-office-living-room-hybr-1a3d7dd1-20250924112210.jpg?"
                alt="Modern luxurious office living room hybrid"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
              <div className="relative z-10 p-8 flex flex-col justify-start max-w-md h-full pt-12">
                <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-foreground/90 text-[11px] font-semibold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Started In 1991
                </p>
                <h2 className="mt-4 text-5xl md:text-6xl font-extrabold text-foreground leading-tight">
                  Where Spaces Inspire, And
                  <br className="hidden sm:block" />
                  <span className="text-primary"> Design Comes Alive</span>
                </h2>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Latest Technologies</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>5 Years Warranty</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>High-Quality Designs</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground font-semibold">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Residential Design</span>
                    </li>
                  </ul>
                </div>

                <p className="mt-8 text-muted-foreground/90 leading-relaxed">
                  Whether it's your home, office, or a commercial project, we are
                  always dedicated to bringing your vision to life. Our numbers
                  speak better than words:
                </p>

                <Link
                  href="/about-us"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 font-medium text-foreground hover:border-primary/60 transition-colors"
                >
                  More About Us
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;