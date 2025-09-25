"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "01",
    name: "Mark Jackson",
    role: "Co-Founder & CEO",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-2.jpg",
  },
  {
    id: "02",
    name: "Valeria Novikova",
    role: "Lighting Specialist",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-3.jpg",
  },
  {
    id: "03",
    name: "Alex Podzemsky",
    role: "Graphics Designer",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-6.jpg",
  },
  {
    id: "04",
    name: "Helen Reeves",
    role: "Material Consultant",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-4.jpg",
  },
  {
    id: "05",
    name: "Jake Nicholson",
    role: "3D Visualization",
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-5.jpg",
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-start">
          <div className="lg:pt-8">
            <span className="text-primary uppercase tracking-widest font-medium text-sm">
              amazing design team
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-12 text-foreground leading-tight">
              Meet the Experts Our interior <br /> designers
            </h2>
            <div>
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="flex items-center gap-6 lg:gap-8 py-7 border-b border-border cursor-pointer group"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span
                    className={`text-6xl font-bold transition-colors duration-300 ${
                      activeIndex === index ? "text-primary" : "text-border"
                    }`}
                  >
                    {member.id}
                  </span>
                  <div>
                    <h3
                      className={`text-2xl md:text-3xl font-medium transition-colors duration-300 ${
                        activeIndex === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground/70 mt-1">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-lg mt-8 lg:mt-0">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${(index - activeIndex) * 100}%)`,
                  zIndex: index, // Stacking order
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;