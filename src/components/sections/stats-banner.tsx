import React from 'react';

const SeparatorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 text-primary mx-6 md:mx-12"
    aria-hidden="true"
  >
    <path
      d="M12 18.0001L15.8737 15.8738L18 12.0001L15.8737 8.12631L12 6.00006L8.12625 8.12631L6 12.0001L8.12625 15.8738L12 18.0001Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const bannerItems = [
  "260+ Successful projects and counting",
  "Tech Specifications",
  "Design Project",
  "3D visualisation",
];

const MarqueeContent = () => (
  <>
    {bannerItems.map((item, index) => (
      <React.Fragment key={index}>
        <div className="whitespace-nowrap text-white text-xl md:text-[30px] font-semibold uppercase leading-[1.3] tracking-wider">
          {item.includes('+') ? (
            <>
              {item.split('+')[0]}
              <sup className="text-primary font-semibold">+</sup>
              {item.split('+')[1]}
            </>
          ) : (
            item
          )}
        </div>
        <SeparatorIcon />
      </React.Fragment>
    ))}
  </>
);

const StatsBanner = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
      <section className="bg-transparent py-[45px] w-full overflow-hidden">
        <div className="flex animate-[marquee_80s_linear_infinite]">
          <div className="flex items-center flex-shrink-0">
            <MarqueeContent />
          </div>
          <div className="flex items-center flex-shrink-0">
            <MarqueeContent />
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsBanner;