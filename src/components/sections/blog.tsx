"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type BlogPost = {
  image: string;
  categories: { name: string; href: string }[];
  author: { name: string; href: string };
  title: string;
  titleHref: string;
  excerpt: string;
};

const blogPosts: BlogPost[] = [
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-7.jpg",
    categories: [
      { name: "Electrical & Lighting", href: "https://demo2.themelexus.com/antra/category/electrical-lighting/" },
      { name: "Ware Accessories", href: "https://demo2.themelexus.com/antra/category/ware-accessories/" },
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "Elevate Every Corner With Sleek Interior Concepts",
    titleHref: "https://demo2.themelexus.com/antra/elevate-every-corner-with-sleek-interior-concepts/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-9.jpg",
    categories: [
      { name: "Home Appliance", href: "https://demo2.themelexus.com/antra/category/home-appliance/" },
      { name: "Uncategorized", href: "https://demo2.themelexus.com/antra/category/uncategorized/" },
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "The Art of Space: Smart Designs for Elegant Living",
    titleHref: "https://demo2.themelexus.com/antra/the-art-of-space-smart-designs-for-elegant-living/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-12.jpg",
    categories: [
      { name: "Home Appliance", href: "https://demo2.themelexus.com/antra/category/home-appliance/" },
      { name: "Power Tools", href: "https://demo2.themelexus.com/antra/category/power-tools/" },
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "Inspired Spaces: Blending Function and Aesthetic",
    titleHref: "https://demo2.themelexus.com/antra/inspired-spaces-blending-function-and-aesthetic/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-14.jpg",
    categories: [
        { name: "Power Tools", href: "https://demo2.themelexus.com/antra/category/power-tools/" }
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "Functional Design Trends That Blend Style and Comfort",
    titleHref: "https://demo2.themelexus.com/antra/functional-design-trends-that-blend-style-and-comfort/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-15.jpg",
    categories: [
        { name: "Electrical & Lighting", href: "https://demo2.themelexus.com/antra/category/electrical-lighting/" }
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "Innovative Interior Ideas to Refresh Your Living Space",
    titleHref: "https://demo2.themelexus.com/antra/innovative-interior-ideas-to-refresh-your-living-space/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
  {
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/blog-13.jpg",
    categories: [
        { name: "Accessories", href: "https://demo2.themelexus.com/antra/category/accessories/" },
        { name: "Ware Accessories", href: "https://demo2.themelexus.com/antra/category/ware-accessories/" }
    ],
    author: { name: "admin", href: "https://demo2.themelexus.com/antra/author/admin/" },
    title: "Transform Your Home With the Modern Interior Design Tips",
    titleHref: "https://demo2.themelexus.com/antra/transform-your-home-with-the-modern-interior-design-tips/",
    excerpt: "Modern interior design is all about creating a sleek, functional, and aesthetically pleasing space that reflects contemporary living. Whether you’re updating a single room or redesigning your entire home, incorporating…",
  },
];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden group flex flex-col h-full transition-shadow duration-300">
      <div className="overflow-hidden">
        <Link href={post.titleHref} passHref>
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-[250px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
        </Link>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 text-xs text-muted-foreground">
          {post.categories.map((cat, i) => (
            <React.Fragment key={cat.name}>
              <Link href={cat.href} className="text-primary hover:text-white transition-colors uppercase font-semibold tracking-widest">
                {cat.name}
              </Link>
              {i < post.categories.length - 1 && <span className="mx-2">/</span>}
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-2xl font-medium text-white mb-3">
          <Link href={post.titleHref} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-border text-sm text-muted-foreground">
          By{' '}
          <Link href={post.author.href} className="text-primary hover:text-white transition-colors capitalize">
            {post.author.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  return (
    <section className="bg-background py-[120px]">
      <div className="container">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-xl">
              <p className="text-primary font-semibold tracking-widest uppercase mb-4 text-sm">
                straight from the newsroom
              </p>
              <h2 className="text-5xl font-semibold text-white leading-tight">
                Take a look at our latest blog & articles.
              </h2>
            </div>
            <div className="hidden lg:flex gap-4">
              <CarouselPrevious className="relative top-auto left-auto right-auto bottom-auto h-14 w-14 rounded-full bg-card border border-border text-white hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" />
              <CarouselNext className="relative top-auto left-auto right-auto bottom-auto h-14 w-14 rounded-full bg-card border border-border text-white hover:bg-primary hover:text-white hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" />
            </div>
          </div>

          <CarouselContent className="-ml-10">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-10 md:basis-1/2 lg:basis-1/3">
                <div className="h-full">
                  <BlogCard post={post} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}