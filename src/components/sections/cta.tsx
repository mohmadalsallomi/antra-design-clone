import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-secondary py-20 lg:py-[120px]">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            Unlock Your Dream Home Today!
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;