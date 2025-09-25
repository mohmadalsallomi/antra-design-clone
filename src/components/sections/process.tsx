import Image from 'next/image';
import Link from 'next/link';

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
    <section className="bg-background py-[120px]">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-wider uppercase">How We Work</p>
            <h2 className="text-[48px] font-semibold mt-4 leading-[1.2]">
              Description Architecture process for exceptional results.
            </h2>
            <p className="text-muted-foreground mt-6 text-base leading-[1.6]">
              Our process is alive – adapting, refining, and growing with your vision. Always.
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-[1.6]">
              Like artists with a blank canvas, we transform rooms into living works of art.
            </p>
          </div>
          <div className="hidden md:flex justify-end">
            <Image 
              src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner02.png" 
              alt="Antra decorative text" 
              width={276} 
              height={217}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-32 space-y-32">
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              className={[
                "flex flex-col lg:flex-row gap-10 lg:gap-20 items-center",
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              ].join(" ")}
            >
              <div className="lg:w-[55%] w-full">
                <Image 
                  src={step.imageUrl} 
                  alt={step.title} 
                  width={620} 
                  height={414} 
                  className="rounded-lg object-cover w-full h-auto" 
                />
              </div>
              <div className="lg:w-[45%] w-full relative">
                <span className="absolute text-[200px] font-bold text-border opacity-10 -z-10 -top-24 left-0 select-none">
                  {step.number}
                </span>
                <h3 className="text-[32px] font-medium text-white mb-4 leading-[1.3]">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-[1.6] max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-[120px]">
          <h2 className="text-[48px] font-semibold leading-[1.2] text-white">
            We’ve been working hard to impress you.
          </h2>
          <Link 
            href="https://demo2.themelexus.com/antra/contact-us/" 
            className="inline-block mt-8 bg-primary text-primary-foreground py-4 px-8 rounded-[24px] text-base font-medium hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Start your’s today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;