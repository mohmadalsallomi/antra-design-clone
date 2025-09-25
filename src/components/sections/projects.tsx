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
    <article className="break-inside-avoid">
      <div className="group relative overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        <Link href={project.url}>
          <Image
            src={project.image}
            alt={project.title}
            width={768}
            height={540}
            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </Link>

        {/* always-visible category pills */}
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {project.categories.map((category, index) => (
            <span
              key={index}
              className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
            >
              {category.toUpperCase()}
            </span>
          ))}
        </div>

        {/* hover gradient + view button */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
        <Link
          href={project.url}
          className="absolute bottom-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 ease-in-out hover:scale-110 group-hover:opacity-100"
          aria-label={`View project: ${project.title}`}
        >
          <ArrowUpRight className="h-6 w-6" />
        </Link>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-semibold text-foreground">
          <Link href={project.url} className="transition-colors duration-300 hover:text-primary">
            {project.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center text-sm text-muted-foreground/80">
          <span>{project.location}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section className="bg-background text-foreground py-[120px]">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-sm font-medium tracking-widest text-primary uppercase">
            Our Projects
          </span>
          <h2 className="text-4xl lg:text-[48px] lg:leading-[1.2] font-semibold text-foreground mt-4">
            Creative projects that define our style
          </h2>
          <p className="text-base text-muted-foreground mt-6 max-w-3xl mx-auto">
            Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors
          </p>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-10 space-y-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;