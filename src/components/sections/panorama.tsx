"use client";

import { MousePointer2 } from 'lucide-react';

const PanoramaSection = () => {
  return (
    <section className="bg-background py-[120px]">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          360-degree panoramas
        </p>
        <h2 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight text-foreground">
          Create an even greater experience
        </h2>
      </div>
      <div className="container mx-auto mt-16">
        <div className="relative h-[700px] w-full overflow-hidden rounded-lg bg-secondary">
          {/* 
            This div is a placeholder for the interactive panorama viewer.
            In a real application, a library like Pannellum or React Three Fiber
            would be used to render a 360-degree image here.
            As no specific image asset is provided, a solid color from the site's
            color palette is used.
          */}
          <div className="absolute inset-0 bg-secondary" />

          <div className="absolute bottom-6 left-6 rounded-lg bg-black/50 p-4 text-white backdrop-blur-sm">
            <p className="text-base font-semibold">
              Our Website&nbsp;
              <span className="font-bold text-primary">75000+</span>
              &nbsp;VIP Customer
            </p>
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/50 px-4 py-2 text-white backdrop-blur-sm">
            <MousePointer2 className="h-5 w-5" />
            <div className="h-5 w-px bg-white/30" />
            <span className="text-sm font-light tracking-wide">ControlMouseModeNormal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanoramaSection;