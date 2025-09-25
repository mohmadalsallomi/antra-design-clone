import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const galleryImages = [
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-8.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-9.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-5-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-5.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-6.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-1.jpg" },
  { src: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11-150x150.jpg", href: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/gallery-11.jpg" },
];

const contactItems = [
  { Icon: MapPin, text: "5609 E Sprague Ave, Spokane Valley, WA 99212, USA", href: "mailto:hello@example.com" },
  { Icon: Phone, text: "+(084) 456-0789", href: "tel:+(084)456-0789" },
  { Icon: Mail, text: "support@example.com", href: "mailto:support@example.com" },
];

const socialLinks = [
  { Icon: Facebook, href: "https://www.facebook.com/themelexus", label: "Facebook" },
  { Icon: Twitter, href: "https://twitter.com/themelexus", label: "Twitter" },
  { Icon: Instagram, href: "https://instagram.com/themelexus", label: "Instagram" },
  { Icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="space-y-6">
            <Link href="/">
              <img src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/logo.svg" alt="Antra Logo" className="h-[27px] w-auto" />
            </Link>
            <p className="max-w-xs text-base leading-relaxed">
              We Shape Interior Designs, Crafting Timeless and Inspiring Spaces
            </p>
          </div>

          {/* Column 2: Gallery */}
          <div className="md:justify-self-center lg:justify-self-start">
            <div className="grid grid-cols-3 gap-2 w-max">
              {galleryImages.map((img, index) => (
                <a key={index} href={img.href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md group">
                  <Image
                    src={img.src}
                    alt={`Gallery image ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:justify-self-center">
            <ul className="space-y-4">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <item.Icon className="text-primary mt-1 flex-shrink-0" size={20} />
                  <a href={item.href} className="hover:text-primary transition-colors text-base leading-relaxed">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="lg:justify-self-end">
            <div className="flex space-x-5">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:text-primary transition-colors">
                  <link.Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;