import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  image: string;
  categories: string[];
  title: string;
  location: string;
  year: string;
  url: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-9-768x540.jpg',
    categories: ['Single Home'],
    title: 'Art Deco Revival',
    location: 'Berlin, Germany',
    year: '2025',
    url: '#',
  },
  {
    id: 2,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-8-768x540.jpg',
    categories: ['Single Home'],
    title: 'Golden Ratio Residence',
    location: 'Berlin, Germany',
    year: '2025',
    url: '#',
  },
  {
    id: 3,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-7-768x540.jpg',
    categories: ['Residential', 'Single Home'],
    title: 'Nordic Minimalist Loft',
    location: 'Berlin, Germany',
    year: '2025',
    url: '#',
  },
  {
    id: 4,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-12-768x540.jpg',
    categories: ['Residential'],
    title: 'Industrial elegance condo',
    location: 'Berlin, Germany',
    year: '2025',
    url: '#',
  },
  {
    id: 5,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-11-768x540.jpg',
    categories: ['Residential'],
    title: 'Serene Space Studio',
    location: 'Germany',
    year: '2025',
    url: '#',
  },
  {
    id: 6,
    image: 'https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/project-10-768x540.jpg',
    categories: ['Residential'],
    title: 'Urban Zen Apartment',
    location: 'Berlin, Germany',
    year: '2025',
    url: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl h-full">
      <Link href={project.url}>
        <Image
          src={project.image}
          alt={project.title}
          width={768}
          height={540}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </Link>

      {/* Category pills */}
      <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
        {project.categories.map((category, index) => (
          <span
            key={index}
            className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
          >
            {category.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Project info overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <h3 className="text-lg lg:text-xl font-semibold text-white mb-1">
          <Link href={project.url} className="transition-colors duration-300 hover:text-primary">
            {project.title}
          </Link>
        </h3>
        <div className="flex items-center text-xs text-white/80">
          <span>{project.location}</span>
          <span className="mx-1">•</span>
          <span>{project.year}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section className="bg-background text-foreground py-16 lg:py-20">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              • OUR PROJECTS
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-[1.1] text-foreground mt-4">
              Creative <span className="text-primary">Projects That Define</span> Our Style
            </h2>
          </div>
          <div className="lg:pt-8">
            <p className="text-base text-muted-foreground leading-[1.6]">
              Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 auto-rows-max">
          {/* Project 1 - Large */}
          <div className="lg:col-span-2 lg:row-span-2">
            <ProjectCard project={projectsData[4]} />
          </div>
          
          {/* Project 2 - Medium */}
          <div className="lg:col-span-2">
            <ProjectCard project={projectsData[5]} />
          </div>
          
          {/* Project 3 - Small */}
          <div className="lg:col-span-1 lg:row-span-2">
            <ProjectCard project={projectsData[2]} />
          </div>
          
          {/* Project 4 - Medium */}
          <div className="lg:col-span-1">
            <ProjectCard project={projectsData[0]} />
          </div>
          
          {/* Project 5 - Medium */}
          <div className="lg:col-span-1">
            <ProjectCard project={projectsData[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;