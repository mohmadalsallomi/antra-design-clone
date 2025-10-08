import Image from 'next/image';

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin by understanding your vision, goals, and needs, followed Antra.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates detailed designs that reflect your requirements.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner05.jpg"
  },
  {
    number: "03",
    title: "Implementation",
    description: "With carefully selected contractors, we manage every phase.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner06.jpg"
  },
  {
    number: "04",
    title: "Project Handover",
    description: "Upon completion, we conduct a thorough review, making sure all details.",
    imageUrl: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner07.jpg"
  }
];

const ProcessSection = () => {
  return (
    <section className="bg-background py-[120px] relative overflow-hidden">
      <div className="container mx-auto px-5 max-w-[1400px]">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-6">• HOW WE WORK</p>
            <h2 className="text-[48px] lg:text-[56px] font-semibold leading-[1.1] text-white">
              Description <span className="text-primary">Architecture Process</span> For Exceptional Results.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
              Our process is alive – adapting, refining, and growing with your vision. Always.
            </p>
            <p className="text-muted-foreground text-lg leading-[1.6]">
              Like artists with a blank canvas, we transform rooms into living works of art.
            </p>
          </div>
        </div>

        {/* Process Steps Layout */}
        <div className="relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-x-24 lg:gap-y-24">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* Large background number */}
                <span className="absolute text-[160px] lg:text-[200px] font-bold text-muted-foreground/8 -top-8 -right-4 select-none z-0 leading-none">
                  {step.number}
                </span>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Image */}
                  <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
                    <Image 
                      src={step.imageUrl} 
                      alt={step.title} 
                      width={450} 
                      height={280} 
                      className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-[24px] lg:text-[28px] font-semibold text-white leading-[1.2]">
                      <span className="text-primary">{step.number}.</span> {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-[1.6] max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative building images on the right */}
        <div className="hidden xl:block absolute top-0 right-0 w-[400px] h-full opacity-20">
          <Image 
            src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner02.png" 
            alt="Decorative architecture" 
            width={400} 
            height={600}
            className="object-contain h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;