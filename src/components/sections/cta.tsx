import React from 'react';
import Image from 'next/image';

const CtaSection = () => {
  return (
    <section className="py-20 lg:py-[120px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/SEC6.svg"
          alt="Background pattern"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>
      
      <div className="mx-auto max-w-[1200px] px-5 relative z-10">
        {/* Content removed as requested */}
      </div>
    </section>
  );
};

export default CtaSection;