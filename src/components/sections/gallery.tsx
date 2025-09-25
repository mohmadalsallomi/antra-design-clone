// IMPORTANT: This component uses custom CSS animations ('scroll', 'scroll-reverse')
// for the infinite horizontal scrolling effect. These animations are not standard
// in Tailwind CSS and must be defined in your `tailwind.config.ts` file.
//
// Please add the following configuration to your `tailwind.config.ts`:
//
// theme: {
//   extend: {
//     animation: {
//       scroll: 'scroll 60s linear infinite',
//       'scroll-reverse': 'scroll-reverse 60s linear infinite',
//     },
//     keyframes: {
//       scroll: {
//         '0%': { transform: 'translateX(0)' },
//         '100%': { transform: 'translateX(-50%)' },
//       },
//       'scroll-reverse': {
//         '0%': { transform: 'translateX(-50%)' },
//         '100%': { transform: 'translateX(0)' },
//       },
//     },
//   },
// },

import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const row1Images: GalleryImage[] = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg", alt: "gallery-11", width: 480, height: 320 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-3.jpg", alt: "gallery-3", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6.jpg", alt: "gallery-6", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1.jpg", alt: "gallery-1", width: 480, height: 320 },
];

const row2Images: GalleryImage[] = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-12.jpg", alt: "gallery-12", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-4.jpg", alt: "gallery-4", width: 480, height: 320 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg", alt: "gallery-9", width: 320, height: 480 },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-7.jpg", alt: "gallery-7", width: 480, height: 320 },
];

const ImageScroller = ({ images, reverse = false }: { images: GalleryImage[]; reverse?: boolean }) => {
  const duplicatedImages = [...images, ...images];
  const animationClass = reverse ? 'animate-scroll-reverse' : 'animate-scroll';

  return (
    <div
      className={`flex items-center gap-5 py-2.5 ${animationClass} hover:[animation-play-state:paused]`}
    >
      {duplicatedImages.map((image, index) => (
        <a
          key={`${image.alt}-${index}`}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={`rounded-lg object-cover h-auto ${image.height > image.width ? 'w-[260px]' : 'w-[390px]'}`}
          />
        </a>
      ))}
    </div>
  );
};

export default function GallerySection() {
  return (
    <section className="bg-secondary w-full overflow-hidden">
      <ImageScroller images={row1Images} />
      <ImageScroller images={row2Images} reverse={true} />
    </section>
  );
}