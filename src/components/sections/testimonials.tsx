"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
  {
    quote: "From concept to reality, the team turned my vision into a stunning, livable space. I couldn’t be happier with this!",
    name: "Morgan Dufresne",
    title: "Company Owner",
    avatar: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-1.jpg",
  },
  {
    quote: "I absolutely love my the new modern living room! The clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere.",
    name: "Jessica Miller",
    title: "Homeowner",
    avatar: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/testimonials-1.jpg",
  },
  {
    quote: "A wonderful experience! They knew what they were doing and were incredibly knowledgeable throughout the process.",
    name: "Samantha Jones",
    title: "Client",
    avatar: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-1.jpg",
  },
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative bg-secondary py-[120px] overflow-hidden">
      <Image
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner08.jpg"
        alt="Modern interior design background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-10"
      />
      <Image
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner03.png"
        alt="Decorative swirl"
        width={310}
        height={310}
        className="absolute -top-20 -left-20 z-0 opacity-10"
      />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="max-w-md">
            <p className="font-semibold tracking-wider text-primary uppercase">Our clients say</p>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl leading-tight">
              Here’s What warm words our clients say
            </h2>
          </div>
          <div className="relative">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="relative">
                  <Quote className="w-16 h-16 text-primary/20" strokeWidth={1} />
                  <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-2xl font-bold text-white/5" aria-hidden="true">
                    00
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">2,688 reviews</p>
              </div>

              <CarouselContent className="-ml-4 h-[320px]">
                {testimonialsData.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4">
                    <div className="flex flex-col justify-between h-full">
                      <h3 className="text-3xl font-semibold leading-snug text-white md:text-[32px]">
                        {testimonial.quote}
                      </h3>
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover rounded-full w-16 h-16"
                        />
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground/80">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute -bottom-16 right-0 flex items-center gap-4">
                  <CarouselPrevious className="relative top-auto left-auto right-auto bottom-auto w-14 h-14 rounded-full border border-border bg-transparent hover:bg-primary hover:border-primary text-white transition-colors disabled:opacity-50">
                      <ChevronLeft className="w-6 h-6" />
                  </CarouselPrevious>
                  <CarouselNext className="relative top-auto left-auto right-auto bottom-auto w-14 h-14 rounded-full border border-border bg-transparent hover:bg-primary hover:border-primary text-white transition-colors disabled:opacity-50">
                      <ChevronRight className="w-6 h-6"/>
                  </CarouselNext>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;